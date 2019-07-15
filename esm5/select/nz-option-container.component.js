/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
import { merge, Subject } from 'rxjs';
import { NzOptionLiComponent } from './nz-option-li.component';
import { defaultFilterOption, NzOptionPipe } from './nz-option.pipe';
var NzOptionContainerComponent = /** @class */ (function () {
    function NzOptionContainerComponent() {
        this.isInit = false;
        this.isAddTagOptionDisplay = false;
        this.listOfAllTemplateOption = [];
        this.listOfTagOption = [];
        this.listOfFilterOption = [];
        // tslint:disable-next-line:no-any
        this.nzListOfSelectedValueChange = new EventEmitter();
        this.nzListOfTemplateOptionChange = new EventEmitter();
        this.nzClickOption = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzMode = 'default';
        this.nzServerSearch = false;
        this.nzFilterOption = defaultFilterOption;
        this.nzMaxMultipleCount = Infinity;
        // tslint:disable-next-line:no-any
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(NzOptionContainerComponent.prototype, "nzSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.updateAddTagOptionDisplay();
            this.updateListOfFilterOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "nzListOfSelectedValue", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfSelectedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._listOfSelectedValue !== value) {
                this._listOfSelectedValue = value;
                /** should clear activedOption when listOfSelectedValue change **/
                this.clearActivatedOption();
                this.refreshAllOptionStatus(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    NzOptionContainerComponent.prototype.formatId = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.idClass + "-" + option;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzOptionContainerComponent.prototype.formatIdLi = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option && option.nzValue && option.nzValue.trim();
        return this.idClass + "-" + value;
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.formatIdUl = /**
     * @return {?}
     */
    function () {
        return this.idClass + "-list";
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.addTagOption = /**
     * @return {?}
     */
    function () {
        if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
            this.nzListOfSelectedValue = tslib_1.__spread(this.nzListOfSelectedValue, [this.nzSearchValue]);
            this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    NzOptionContainerComponent.prototype.clickOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.nzClickOption.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzOptionContainerComponent.prototype.onKeyDownUl = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if ([UP_ARROW, DOWN_ARROW, ENTER].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            var activeIndex = this.listOfFilterOption.findIndex(function (item) { return item === _this.activatedOption; });
            if (e.keyCode === UP_ARROW) {
                /** @type {?} */
                var preIndex = activeIndex > 0 ? activeIndex - 1 : this.listOfFilterOption.length - 1;
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === DOWN_ARROW) {
                /** @type {?} */
                var nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? activeIndex + 1 : 0;
                this.setActiveOption(this.listOfFilterOption[nextIndex]);
            }
            else if (e.keyCode === ENTER) {
                // enter
                if (this.isTagsMode) {
                    if (!this.isAddTagOptionDisplay) {
                        this.clickOption(this.activatedOption, true);
                    }
                    else {
                        this.addTagOption();
                        this.nzClickOption.emit();
                    }
                }
                else {
                    this.clickOption(this.activatedOption, true);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.resetActiveOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstActiveOption = this.listOfAllTemplateOption
            .concat(this.listOfTagOption)
            .find(function (item) { return _this.compareWith(item.nzValue, _this.nzListOfSelectedValue[0]); });
        this.setActiveOption(firstActiveOption);
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.clearActivatedOption = /**
     * @return {?}
     */
    function () {
        this.setActiveOption(null);
    };
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    NzOptionContainerComponent.prototype.setActiveOption = /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    function (option, scroll) {
        if (scroll === void 0) { scroll = true; }
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.scrollIntoView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length) {
            /** @type {?} */
            var targetOption_1 = this.listOfNzOptionLiComponent.find(function (o) { return o.nzOption === _this.activatedOption; });
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption_1 && targetOption_1.el && targetOption_1.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(function () { return targetOption_1.el['scrollIntoViewIfNeeded'](false); }, 150);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateSelectedOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        var _this = this;
        /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
        if (option && !option.nzDisabled) {
            /** @type {?} */
            var changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.nzListOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.nzValue); });
                if (isNotNil(targetValue)) {
                    if (!isPressEnter) {
                        /** should not toggle option when press enter **/
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        changed = true;
                    }
                }
                else if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    changed = true;
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                changed = true;
            }
            /** update selectedValues when click option **/
            if (changed) {
                this._listOfSelectedValue = listOfSelectedValue;
                this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
                if (this.isTagsMode) {
                    this.refreshAllOptionStatus(false);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            var listOfTagsOption_1 = [];
            this.nzListOfSelectedValue.forEach(function (value) {
                /** @type {?} */
                var existedOption = _this.listOfAllTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, value); });
                if (!existedOption) {
                    /** @type {?} */
                    var nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    listOfTagsOption_1.push(nzOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption_1;
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshListOfAllTemplateOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfAllTemplateOption = this.listOfNzOptionComponent
            .toArray()
            .concat(this.listOfNzOptionGroupComponent
            .toArray()
            .reduce(function (pre, cur) { return tslib_1.__spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
        Promise.resolve().then(function () { return _this.nzListOfTemplateOptionChange.emit(_this.listOfAllTemplateOption); });
    };
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshAllOptionStatus = /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    function (isTemplateOptionChange) {
        /** update nzListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateListOfFilterOption = /**
     * @return {?}
     */
    function () {
        this.listOfFilterOption = /** @type {?} */ (new NzOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.nzSearchValue, this.nzFilterOption, this.nzServerSearch));
        if (this.nzSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    };
    /** watch options change in option group **/
    /**
     * watch options change in option group *
     * @return {?}
     */
    NzOptionContainerComponent.prototype.watchSubOptionChanges = /**
     * watch options change in option group *
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeOption();
        /** @type {?} */
        var optionChanges$ = merge(new Subject().asObservable(), this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes);
        if (this.listOfNzOptionGroupComponent.length) {
            this.listOfNzOptionGroupComponent.forEach(function (group) {
                return (optionChanges$ = group.listOfNzOptionComponent
                    ? merge(group.listOfNzOptionComponent.changes, optionChanges$)
                    : optionChanges$);
            });
        }
        this.optionSubscription = optionChanges$.subscribe(function () { return _this.refreshAllOptionStatus(true); });
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.unsubscribeGroup = /**
     * @return {?}
     */
    function () {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.unsubscribeOption = /**
     * @return {?}
     */
    function () {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    };
    Object.defineProperty(NzOptionContainerComponent.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "isNotFoundDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isTagsMode && !this.listOfFilterOption.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateAddTagOptionDisplay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(function (item) { return item.nzLabel; });
        /** @type {?} */
        var isMatch = listOfAllOption.indexOf(this.nzSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.nzSearchValue && !isMatch;
    };
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    NzOptionContainerComponent.prototype.dropDownScroll = /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    function (e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && ul.scrollHeight - ul.scrollTop === ul.clientHeight) {
            this.nzScrollToBottom.emit();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfNzOptionGroupComponent.changes.subscribe(function () { return _this.watchSubOptionChanges(); });
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    };
    NzOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-option-container]',
                    preserveWhitespaces: false,
                    template: "<ul\n  #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  [id]=\"formatIdUl()\"\n  (keydown)=\"onKeyDownUl($event)\"\n  (scroll)=\"dropDownScroll($event, dropdownUl)\"\n  tabindex=\"0\"\n>\n  <li\n    *ngIf=\"isNotFoundDisplay\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n  >\n    {{ nzNotFoundContent ? nzNotFoundContent : ('Select.notFoundContent' | nzI18n) }}\n  </li>\n  <li\n    *ngIf=\"isAddTagOptionDisplay\"\n    nz-select-unselectable\n    [id]=\"formatIdLi(nzSearchValue)\"\n    (click)=\"addTagOption()\"\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active\"\n  >\n    {{ nzSearchValue }}\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [id]=\"formatId(option)\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\n    (click)=\"clickOption(option, false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n  ></li>\n  <li\n    *ngFor=\"\n      let group of listOfNzOptionGroupComponent | nzSubFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\n    \"\n    class=\"ant-select-dropdown-menu-item-group\"\n  >\n    <div class=\"ant-select-dropdown-menu-item-group-title\" [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\n      <ng-container *ngIf=\"group.isLabelString; else labelTemplate\">{{ group.nzLabel }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"group.nzLabel\"></ng-template>\n      </ng-template>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <li\n        nz-option-li\n        [nzMode]=\"nzMode\"\n        [compareWith]=\"compareWith\"\n        *ngFor=\"\n          let option of group.listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\n        \"\n        (click)=\"clickOption(option, false)\"\n        [nzActiveOption]=\"activatedOption\"\n        [nzShowActive]=\"!isAddTagOptionDisplay\"\n        [nzOption]=\"option\"\n        [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n      ></li>\n    </ul>\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfTagOption | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\n    (click)=\"clickOption(option, false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzShowActive]=\"!isAddTagOptionDisplay\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n  ></li>\n</ul>\n"
                }] }
    ];
    NzOptionContainerComponent.propDecorators = {
        listOfNzOptionLiComponent: [{ type: ViewChildren, args: [NzOptionLiComponent,] }],
        listOfNzOptionComponent: [{ type: Input }],
        listOfNzOptionGroupComponent: [{ type: Input }],
        nzListOfSelectedValueChange: [{ type: Output }],
        nzListOfTemplateOptionChange: [{ type: Output }],
        nzClickOption: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzMode: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        compareWith: [{ type: Input }],
        idClass: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }]
    };
    return NzOptionContainerComponent;
}());
export { NzOptionContainerComponent };
function NzOptionContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionContainerComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    NzOptionContainerComponent.prototype._searchValue;
    /** @type {?} */
    NzOptionContainerComponent.prototype.isInit;
    /** @type {?} */
    NzOptionContainerComponent.prototype.isAddTagOptionDisplay;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfAllTemplateOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.optionSubscription;
    /** @type {?} */
    NzOptionContainerComponent.prototype.groupSubscription;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfTagOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfFilterOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.activatedOption;
    /**
     * can not use ViewChild since it will match sub options in option group *
     * @type {?}
     */
    NzOptionContainerComponent.prototype.listOfNzOptionLiComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzListOfSelectedValueChange;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzListOfTemplateOptionChange;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzClickOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMode;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionContainerComponent.prototype.idClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQzs7O3NCQVd6RSxLQUFLO3FDQUNVLEtBQUs7dUNBQ2tCLEVBQUU7K0JBR1YsRUFBRTtrQ0FDQyxFQUFFOzsyQ0FPSixJQUFJLFlBQVksRUFBUzs0Q0FDeEIsSUFBSSxZQUFZLEVBQXVCOzZCQUN0RCxJQUFJLFlBQVksRUFBUTtnQ0FDckIsSUFBSSxZQUFZLEVBQVE7c0JBQ25DLFNBQVM7OEJBQ0QsS0FBSzs4QkFDVSxtQkFBbUI7a0NBQzlCLFFBQVE7OzJCQUdmLFVBQUMsRUFBTyxFQUFFLEVBQU8sSUFBSyxPQUFBLEVBQUUsS0FBSyxFQUFFLEVBQVQsQ0FBUzs7SUFJdEQsc0JBQ0kscURBQWE7Ozs7UUFNakI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7Ozs7O1FBVEQsVUFDa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqQzs7O09BQUE7SUFNRCxzQkFFSSw2REFBcUI7UUFzQnpCLGtDQUFrQzs7OztRQUNsQztZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDOzs7OztRQTNCRCxVQUUwQixLQUFZO1lBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLEtBQUssRUFBRTtnQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQzs7Z0JBRWxDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7U0FDRjs7O09BQUE7Ozs7O0lBRUQsNkNBQVE7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsT0FBVSxJQUFJLENBQUMsT0FBTyxTQUFJLE1BQVEsQ0FBQztLQUNwQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsTUFBeUI7O1FBQ2xDLElBQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEUsT0FBVSxJQUFJLENBQUMsT0FBTyxTQUFJLEtBQU8sQ0FBQztLQUNuQzs7OztJQUVELCtDQUFVOzs7SUFBVjtRQUNFLE9BQVUsSUFBSSxDQUFDLE9BQU8sVUFBTyxDQUFDO0tBQy9COzs7O0lBT0QsaURBQVk7OztJQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMvRCxJQUFJLENBQUMscUJBQXFCLG9CQUFPLElBQUksQ0FBQyxxQkFBcUIsR0FBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNuRTtLQUNGOzs7Ozs7SUFFRCxnREFBVzs7Ozs7SUFBWCxVQUFZLE1BQXlCLEVBQUUsWUFBcUI7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzNCOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxDQUFnQjtRQUE1QixpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6RCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ25CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssS0FBSSxDQUFDLGVBQWUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7O2dCQUUxQixJQUFNLFFBQVEsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDeEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN6RDtpQkFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFOztnQkFFbkMsSUFBTSxTQUFTLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTs7Z0JBRTlCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM5Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQzNCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtTQUNGO0tBQ0Y7Ozs7SUFFRCxzREFBaUI7OztJQUFqQjtRQUFBLGlCQUtDOztRQUpDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QjthQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTdELENBQTZELENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCx5REFBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7Ozs7OztJQUVELG9EQUFlOzs7OztJQUFmLFVBQWdCLE1BQXlCLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsbURBQWM7OztJQUFkO1FBQUEsaUJBU0M7UUFSQyxJQUFJLElBQUksQ0FBQyx5QkFBeUIsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFOztZQUMzRSxJQUFNLGNBQVksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsZUFBZSxFQUFuQyxDQUFtQyxDQUFDLENBQUM7O1lBRW5HLElBQUksY0FBWSxJQUFJLGNBQVksQ0FBQyxFQUFFLElBQUksY0FBWSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztnQkFFaEYsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFZLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWhELENBQWdELEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDekU7U0FDRjtLQUNGOzs7Ozs7SUFFRCx5REFBb0I7Ozs7O0lBQXBCLFVBQXFCLE1BQXlCLEVBQUUsWUFBcUI7UUFBckUsaUJBK0JDOztRQTdCQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7O1lBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUM3QixJQUFJLG1CQUFtQixvQkFBTyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDMUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUN6QixJQUFNLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUU7O3dCQUVqQixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4RSxPQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUNoQjtpQkFDRjtxQkFBTSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUN0RSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNoQjthQUNGO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEUsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDaEI7O1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO2dCQUNoRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtTQUNGO0tBQ0Y7Ozs7SUFFRCwyREFBc0I7OztJQUF0QjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOzs7O1lBRW5CLElBQU0sa0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLOztnQkFDdEMsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsYUFBYSxFQUFFOztvQkFDbEIsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7b0JBQ2xELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2xDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2xDLGtCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUMxQzthQUNGLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsa0JBQWdCLENBQUM7U0FDekM7S0FDRjs7OztJQUVELG1FQUE4Qjs7O0lBQTlCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QjthQUN4RCxPQUFPLEVBQUU7YUFDVCxNQUFNLENBQ0wsSUFBSSxDQUFDLDRCQUE0QjthQUM5QixPQUFPLEVBQUU7YUFDVCxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLHdCQUFJLEdBQUcsRUFBSyxHQUFHLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEdBQWpELENBQWtELEVBQUUsRUFBRSxDQUFDLENBQ2hGLENBQUM7UUFDSixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwRSxDQUFvRSxDQUFDLENBQUM7S0FDcEc7Ozs7O0lBRUQsMkRBQXNCOzs7O0lBQXRCLFVBQXVCLHNCQUErQjs7UUFFcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxzQkFBc0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNsQztLQUNGOzs7O0lBRUQsNkRBQXdCOzs7SUFBeEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLHFCQUFHLElBQUksWUFBWSxFQUFFLENBQUMsU0FBUyxDQUNwRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDekQsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FDRyxDQUFBLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7S0FDRjtJQUVELDRDQUE0Qzs7Ozs7SUFDNUMsMERBQXFCOzs7O0lBQXJCO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O1FBQ3pCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FDeEIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFDNUIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FDckMsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUN2QyxVQUFBLEtBQUs7Z0JBQ0gsT0FBQSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsdUJBQXVCO29CQUM3QyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO29CQUM5RCxDQUFDLENBQUMsY0FBYyxDQUFDO1lBRm5CLENBRW1CLENBQ3RCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztLQUM3Rjs7OztJQUVELHFEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDL0I7S0FDRjs7OztJQUVELHNEQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7S0FDRjtJQUVELHNCQUFJLGtEQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO1NBQy9COzs7T0FBQTtJQUVELHNCQUFJLHdEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7U0FDN0Q7OztPQUFBO0lBRUQsc0JBQUkseURBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1NBQzVEOzs7T0FBQTs7OztJQUVELDhEQUF5Qjs7O0lBQXpCOztRQUNFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7O1FBQzVHLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDaEY7Ozs7OztJQUVELG1EQUFjOzs7OztJQUFkLFVBQWUsQ0FBYSxFQUFFLEVBQW9CO1FBQ2hELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFFRCx1REFBa0I7OztJQUFsQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUNsSDs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOztnQkEzU0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG92RkFBbUQ7aUJBQ3BEOzs7NENBY0UsWUFBWSxTQUFDLG1CQUFtQjswQ0FDaEMsS0FBSzsrQ0FDTCxLQUFLOzhDQUVMLE1BQU07K0NBQ04sTUFBTTtnQ0FDTixNQUFNO21DQUNOLE1BQU07eUJBQ04sS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUVMLEtBQUs7MEJBRUwsS0FBSztnQ0FFTCxLQUFLO3dDQVdMLEtBQUs7O3FDQWxFUjs7U0F3QmEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xuICBwcml2YXRlIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgaXNBZGRUYWdPcHRpb25EaXNwbGF5ID0gZmFsc2U7XG4gIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIG9wdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBncm91cFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBsaXN0T2ZUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mRmlsdGVyT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGFjdGl2YXRlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XG4gIC8qKiBjYW4gbm90IHVzZSBWaWV3Q2hpbGQgc2luY2UgaXQgd2lsbCBtYXRjaCBzdWIgb3B0aW9ucyBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIEBWaWV3Q2hpbGRyZW4oTnpPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgbnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25Db21wb25lbnRbXT4oKTtcbiAgQE91dHB1dCgpIG56Q2xpY2tPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICAvKiogc2hvdWxkIGNsZWFyIGFjdGl2ZWRPcHRpb24gd2hlbiBsaXN0T2ZTZWxlY3RlZFZhbHVlIGNoYW5nZSAqKi9cbiAgICAgIHRoaXMuY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0SWQob3B0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkQ2xhc3N9LSR7b3B0aW9ufWA7XG4gIH1cblxuICBmb3JtYXRJZExpKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5uelZhbHVlICYmIG9wdGlvbi5uelZhbHVlLnRyaW0oKTtcbiAgICByZXR1cm4gYCR7dGhpcy5pZENsYXNzfS0ke3ZhbHVlfWA7XG4gIH1cblxuICBmb3JtYXRJZFVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWRDbGFzc30tbGlzdGA7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlO1xuICB9XG5cbiAgYWRkVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUsIHRoaXMubnpTZWFyY2hWYWx1ZV07XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbiwgaXNQcmVzc0VudGVyKTtcbiAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICB9XG5cbiAgb25LZXlEb3duVWwoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChbVVBfQVJST1csIERPV05fQVJST1csIEVOVEVSXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyB1cFxuICAgICAgICBjb25zdCBwcmVJbmRleCA9IGFjdGl2ZUluZGV4ID4gMCA/IGFjdGl2ZUluZGV4IC0gMSA6IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW3ByZUluZGV4XSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyBkb3duXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4IDwgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMSA/IGFjdGl2ZUluZGV4ICsgMSA6IDA7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW25leHRJbmRleF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNBZGRUYWdPcHRpb25EaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUYWdPcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubnpDbGlja09wdGlvbi5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBY3RpdmVPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZmlyc3RBY3RpdmVPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uXG4gICAgICAuY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKVxuICAgICAgLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pKTtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihmaXJzdEFjdGl2ZU9wdGlvbik7XG4gIH1cblxuICBjbGVhckFjdGl2YXRlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihudWxsKTtcbiAgfVxuXG4gIHNldEFjdGl2ZU9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBzY3JvbGw6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PiBvLm56T3B0aW9uID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmIHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKGZhbHNlKSwgMTUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gZW1pdCBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgKiovXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24pO1xuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVdO1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLm56VmFsdWUpKTtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xuICAgICAgICAgIGlmICghaXNQcmVzc0VudGVyKSB7XG4gICAgICAgICAgICAvKiogc2hvdWxkIG5vdCB0b2dnbGUgb3B0aW9uIHdoZW4gcHJlc3MgZW50ZXIgKiovXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSwgb3B0aW9uLm56VmFsdWUpKSB7XG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qKiB1cGRhdGUgc2VsZWN0ZWRWYWx1ZXMgd2hlbiBjbGljayBvcHRpb24gKiovXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaExpc3RPZlRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAvKiogcmVmcmVzaCB0YWdzIG9wdGlvbiAqKi9cbiAgICAgIGNvbnN0IGxpc3RPZlRhZ3NPcHRpb24gPSBbXTtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XG4gICAgICAgIGlmICghZXhpc3RlZE9wdGlvbikge1xuICAgICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgICBsaXN0T2ZUYWdzT3B0aW9uLnB1c2gobnpPcHRpb25Db21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mVGFnc09wdGlvbjtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnRcbiAgICAgIC50b0FycmF5KClcbiAgICAgIC5jb25jYXQoXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudFxuICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAucmVkdWNlKChwcmUsIGN1cikgPT4gWy4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKV0sIFtdKVxuICAgICAgKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZS5lbWl0KHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24pKTtcbiAgfVxuXG4gIHJlZnJlc2hBbGxPcHRpb25TdGF0dXMoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIHwgdXBkYXRlIG9wdGlvbiBsaXN0IC0+IHVwZGF0ZSBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGFjdGl2YXRlZE9wdGlvbiAqKi9cbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIGlmIChpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24gPSBuZXcgTnpPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxuICAgICAgdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLFxuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5uekZpbHRlck9wdGlvbixcbiAgICAgIHRoaXMubnpTZXJ2ZXJTZWFyY2hcbiAgICApIGFzIE56T3B0aW9uQ29tcG9uZW50W107XG4gICAgaWYgKHRoaXMubnpTZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB3YXRjaCBvcHRpb25zIGNoYW5nZSBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIHdhdGNoU3ViT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gICAgbGV0IG9wdGlvbkNoYW5nZXMkID0gbWVyZ2UoXG4gICAgICBuZXcgU3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXNcbiAgICApO1xuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuZm9yRWFjaChcbiAgICAgICAgZ3JvdXAgPT5cbiAgICAgICAgICAob3B0aW9uQ2hhbmdlcyQgPSBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudFxuICAgICAgICAgICAgPyBtZXJnZShncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLCBvcHRpb25DaGFuZ2VzJClcbiAgICAgICAgICAgIDogb3B0aW9uQ2hhbmdlcyQpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG9wdGlvbkNoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSkpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmVHcm91cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmVPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICBnZXQgaXNOb3RGb3VuZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzVGFnc01vZGUgJiYgIXRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mQWxsT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCk7XG4gICAgY29uc3QgaXNNYXRjaCA9IGxpc3RPZkFsbE9wdGlvbi5pbmRleE9mKHRoaXMubnpTZWFyY2hWYWx1ZSkgPiAtMTtcbiAgICB0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2g7XG4gIH1cblxuICBkcm9wRG93blNjcm9sbChlOiBNb3VzZUV2ZW50LCB1bDogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh1bCAmJiB1bC5zY3JvbGxIZWlnaHQgLSB1bC5zY3JvbGxUb3AgPT09IHVsLmNsaWVudEhlaWdodCkge1xuICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKTtcbiAgICB0aGlzLndhdGNoU3ViT3B0aW9uQ2hhbmdlcygpO1xuICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlR3JvdXAoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gIH1cbn1cbiJdfQ==