/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from '../core/util';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './nz-option.pipe';
var NzSelectService = /** @class */ (function () {
    function NzSelectService() {
        var _this = this;
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // ContentChildren Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(distinctUntilChanged(), share(), tap((/**
         * @return {?}
         */
        function () { return _this.clearInput(); })));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // flat ViewChildren
        this.listOfTemplateOption = [];
        // tag option
        this.listOfTagOption = [];
        // tag option concat template option
        this.listOfTagAndTemplateOption = [];
        // ViewChildren
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // display in top control
        this.listOfCachedSelectedOption = [];
        // selected value or ViewChildren change
        this.valueOrOption$ = combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.listOfSelectedValue = data[0];
            _this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return tslib_1.__spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); }));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
            }));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var listOfMixedOption = tslib_1.__spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                /** @type {?} */
                var option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, v); }));
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** @type {?} */
            var listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !_this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.nzValue, value); })); }));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var nzOptionComponent = new NzOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            }));
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption);
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateAddTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzLabel === _this.searchValue; }));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            var option = new NzOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        this.updateAddTagOption();
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? tslib_1.__spread([this.addedTagOption], listOfFilteredOption) : tslib_1.__spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    NzSelectService.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    NzSelectService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
            }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    NzSelectService.prototype.updateTemplateOption = /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    NzSelectService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzSelectService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.nzValue); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    NzSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    NzSelectService.decorators = [
        { type: Injectable }
    ];
    return NzSelectService;
}());
export { NzSelectService };
if (false) {
    /** @type {?} */
    NzSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    NzSelectService.prototype.serverSearch;
    /** @type {?} */
    NzSelectService.prototype.filterOption;
    /** @type {?} */
    NzSelectService.prototype.mode;
    /** @type {?} */
    NzSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    NzSelectService.prototype.disabled;
    /** @type {?} */
    NzSelectService.prototype.compareWith;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.mapOfTemplateOption$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    NzSelectService.prototype.open;
    /** @type {?} */
    NzSelectService.prototype.clearInput$;
    /** @type {?} */
    NzSelectService.prototype.searchValue;
    /** @type {?} */
    NzSelectService.prototype.isShowNotFound;
    /** @type {?} */
    NzSelectService.prototype.open$;
    /** @type {?} */
    NzSelectService.prototype.activatedOption;
    /** @type {?} */
    NzSelectService.prototype.activatedOption$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    NzSelectService.prototype.modelChange$;
    /** @type {?} */
    NzSelectService.prototype.searchValue$;
    /** @type {?} */
    NzSelectService.prototype.listOfSelectedValue;
    /** @type {?} */
    NzSelectService.prototype.listOfTemplateOption;
    /** @type {?} */
    NzSelectService.prototype.listOfTagOption;
    /** @type {?} */
    NzSelectService.prototype.listOfTagAndTemplateOption;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectService.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectService.prototype.addedTagOption;
    /** @type {?} */
    NzSelectService.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    NzSelectService.prototype.valueOrOption$;
    /** @type {?} */
    NzSelectService.prototype.check$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LXNlbGVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUUxRjtJQUFBO1FBQUEsaUJBMlhDOztRQXhYQyx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBa0IsbUJBQW1CLENBQUM7UUFDbEQsU0FBSSxHQUFvQyxTQUFTLENBQUM7UUFDbEQscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLGdCQUFXOzs7OztRQUFHLFVBQUMsRUFBTyxFQUFFLEVBQU8sSUFBSyxPQUFBLEVBQUUsS0FBSyxFQUFFLEVBQVQsQ0FBUyxFQUFDOzs7UUFHdEMsaUNBQTRCLEdB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NkNBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTs7Z0JBMVhGLFVBQVU7O0lBMlhYLHNCQUFDO0NBQUEsQUEzWEQsSUEyWEM7U0ExWFksZUFBZTs7O0lBRTFCLCtDQUE0Qjs7SUFDNUIsdUNBQXFCOztJQUNyQix1Q0FBa0Q7O0lBQ2xELCtCQUFrRDs7SUFDbEQsMkNBQTRCOztJQUM1QixtQ0FBaUI7O0lBRWpCLHNDQUE4Qzs7Ozs7SUFHOUMsdURBR0c7Ozs7O0lBRUgsK0NBTUc7Ozs7O0lBRUgsMENBQTBEOzs7OztJQUMxRCwrQ0FBdUQ7Ozs7O0lBQ3ZELG1DQUEwQzs7Ozs7SUFDMUMsb0NBQWtDOzs7OztJQUNsQywrQkFBcUI7O0lBQ3JCLHNDQUFxQzs7SUFDckMsc0NBQWlCOztJQUNqQix5Q0FBdUI7O0lBRXZCLGdDQUlFOztJQUNGLDBDQUEwQzs7SUFDMUMsMkNBQWtFOztJQUNsRSwrQ0FBdUY7O0lBQ3ZGLHVDQWNFOztJQUNGLHVDQVdFOztJQUVGLDhDQUFnQzs7SUFFaEMsK0NBQStDOztJQUUvQywwQ0FBMEM7O0lBRTFDLHFEQUFxRDs7SUFFckQsa0RBQWtEOztJQUNsRCx1REFBNEQ7O0lBRTVELHlDQUF5Qzs7SUFFekMscURBQXFEOztJQUVyRCx5Q0FpQkU7O0lBQ0YsaUNBT2dCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZSwgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNOaWwsIGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsJztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFNlcnZpY2Uge1xuICAvLyBJbnB1dCBwYXJhbXNcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xuICBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcbiAgbWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcbiAgLy8gc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3RcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcbiAgICB2YWx1ZTogW10sXG4gICAgZW1pdDogZmFsc2VcbiAgfSk7XG4gIC8vIENvbnRlbnRDaGlsZHJlbiBDaGFuZ2VcbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXTtcbiAgfT4oe1xuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBbXVxuICB9KTtcbiAgLy8gc2VhcmNoVmFsdWUgQ2hhbmdlXG4gIHByaXZhdGUgc2VhcmNoVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIG9wZW5SYXckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcbiAgY2xlYXJJbnB1dCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBzZWFyY2hWYWx1ZSA9ICcnO1xuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xuICAvLyBvcGVuXG4gIG9wZW4kID0gdGhpcy5vcGVuUmF3JC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc2hhcmUoKSxcbiAgICB0YXAoKCkgPT4gdGhpcy5jbGVhcklucHV0KCkpXG4gICk7XG4gIGFjdGl2YXRlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnQgfCBudWxsO1xuICBhY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8TnpPcHRpb25Db21wb25lbnQgfCBudWxsPigxKTtcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShtYXAoZGF0YSA9PiBkYXRhLnZhbHVlKSk7XG4gIG1vZGVsQ2hhbmdlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKFxuICAgIGZpbHRlcihpdGVtID0+IGl0ZW0uZW1pdCksXG4gICAgbWFwKGRhdGEgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGF0YS52YWx1ZTtcbiAgICAgIGxldCBtb2RlbFZhbHVlOiBhbnlbXSB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFswXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgIH0pXG4gICk7XG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBza2lwKDEpLFxuICAgIHNoYXJlKCksXG4gICAgdGFwKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbih0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uWzBdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcbiAgICB9KVxuICApO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XG4gIC8vIGZsYXQgVmlld0NoaWxkcmVuXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8vIHRhZyBvcHRpb25cbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8vIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvblxuICBsaXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAvLyBWaWV3Q2hpbGRyZW5cbiAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdID0gW107XG4gIC8vIGNsaWNrIG9yIGVudGVyIGFkZCB0YWcgb3B0aW9uXG4gIGFkZGVkVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCB8IG51bGw7XG4gIC8vIGRpc3BsYXkgaW4gdG9wIGNvbnRyb2xcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gc2VsZWN0ZWQgdmFsdWUgb3IgVmlld0NoaWxkcmVuIGNoYW5nZVxuICB2YWx1ZU9yT3B0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlJCwgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJCkucGlwZShcbiAgICB0YXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBkYXRhWzBdO1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA9IGRhdGFbMV0ubGlzdE9mTnpPcHRpb25Db21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jb25jYXQoXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5yZWR1Y2UoXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcbiAgICAgICAgICBbXSBhcyBOek9wdGlvbkNvbXBvbmVudFtdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlRhZ09wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xuICAgIH0pLFxuICAgIHNoYXJlKClcbiAgKTtcbiAgY2hlY2skID0gbWVyZ2UoXG4gICAgdGhpcy5jaGVja1JhdyQsXG4gICAgdGhpcy52YWx1ZU9yT3B0aW9uJCxcbiAgICB0aGlzLnNlYXJjaFZhbHVlJCxcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsXG4gICAgdGhpcy5vcGVuJCxcbiAgICB0aGlzLm1vZGVsQ2hhbmdlJFxuICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqKi9cbiAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcbiAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtvcHRpb24ubnpWYWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxuICAgICAgKTtcbiAgICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbc2VsZWN0ZWRPcHRpb25dO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godiA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RPZk1peGVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sIC4uLnRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25dO1xuICAgICAgICBjb25zdCBvcHRpb24gPSBsaXN0T2ZNaXhlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXG4gICAgICAgIHZhbHVlID0+ICF0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKVxuICAgICAgKTtcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mTWlzc1ZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpMYWJlbCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbnpPcHRpb25Db21wb25lbnQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBZGRUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLnNlYXJjaFZhbHVlICYmICFpc01hdGNoKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgIG9wdGlvbi5uekxhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbmV3IE56RmlsdGVyT3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5maWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxuICAgICk7XG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IHRoaXMuYWRkZWRUYWdPcHRpb25cbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxuICAgICAgOiBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAhdGhpcy5pc1RhZ3NNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLm5leHQoeyB2YWx1ZSwgZW1pdCB9KTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gIH1cblxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8vIGF1dG8gdG9rZW5TZXBhcmF0b3JzXG4gICAgaWYgKFxuICAgICAgaW5wdXRWYWx1ZSAmJlxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcbiAgICAgIHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJlxuICAgICAgdGhpcy5pbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxuICAgICkge1xuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSB0aGlzLnNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbCk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcbiAgICBjb25zdCBhcnJheSA9IChzdHIgYXMgc3RyaW5nKS5zcGxpdChyZWcpLmZpbHRlcih0b2tlbiA9PiB0b2tlbik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+XG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24oYWN0aXZhdGVkT3B0aW9uIHx8IG51bGwpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKSB8fFxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBOek9wdGlvbkNvbXBvbmVudFtdLFxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kLm5leHQoeyBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCwgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgY29uc3QgbGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb25cbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubnpMYWJlbCkgIT09IC0xKVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXNOb3ROaWwodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSkpO1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVNb2RlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWVdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcbiAgICBjb25zdCBhY3RpdmF0ZWRJbmRleCA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtwcmVJbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbiAmJiAhdGhpcy5hY3RpdmF0ZWRPcHRpb24ubnpEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCQUNLU1BBQ0U6XG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblt0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgb3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24ubnpWYWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgfVxuXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlblJhdyQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5vcGVuID0gdmFsdWU7XG4gIH1cblxuICBjaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrUmF3JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxufVxuIl19