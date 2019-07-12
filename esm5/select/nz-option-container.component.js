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
                    template: "<ul\r\n  #dropdownUl\r\n  [id]=\"formatIdUl()\"\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  (keydown)=\"onKeyDownUl($event)\"\r\n  (scroll)=\"dropDownScroll($event, dropdownUl)\"\r\n  tabindex=\"0\"\r\n>\r\n  <li\r\n    *ngIf=\"isNotFoundDisplay\"\r\n    nz-select-unselectable\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\r\n  >\r\n    {{ nzNotFoundContent ? nzNotFoundContent : ('Select.notFoundContent' | nzI18n) }}\r\n  </li>\r\n  <li\r\n    *ngIf=\"isAddTagOptionDisplay\"\r\n    [id]=\"formatIdLi(nzSearchValue)\"\r\n    nz-select-unselectable\r\n    (click)=\"addTagOption()\"\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active\"\r\n  >\r\n    {{ nzSearchValue }}\r\n  </li>\r\n  <li\r\n    nz-option-li\r\n    [id]=\"formatIdLi(option)\"\r\n    [nzMode]=\"nzMode\"\r\n    [compareWith]=\"compareWith\"\r\n    *ngFor=\"let option of listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\r\n    (click)=\"clickOption(option, false)\"\r\n    [nzActiveOption]=\"activatedOption\"\r\n    [nzOption]=\"option\"\r\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\r\n  ></li>\r\n  <li\r\n    *ngFor=\"\r\n      let group of listOfNzOptionGroupComponent | nzSubFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\r\n    \"\r\n    class=\"ant-select-dropdown-menu-item-group\"\r\n  >\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\" [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *ngIf=\"group.isLabelString; else labelTemplate\">{{ group.nzLabel }}</ng-container>\r\n      <ng-template #labelTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"group.nzLabel\"></ng-template>\r\n      </ng-template>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li\r\n        nz-option-li\r\n        [nzMode]=\"nzMode\"\r\n        [compareWith]=\"compareWith\"\r\n        *ngFor=\"\r\n          let option of group.listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\r\n        \"\r\n        (click)=\"clickOption(option, false)\"\r\n        [nzActiveOption]=\"activatedOption\"\r\n        [nzShowActive]=\"!isAddTagOptionDisplay\"\r\n        [nzOption]=\"option\"\r\n        [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\r\n      ></li>\r\n    </ul>\r\n  </li>\r\n  <li\r\n    nz-option-li\r\n    [nzMode]=\"nzMode\"\r\n    [compareWith]=\"compareWith\"\r\n    *ngFor=\"let option of listOfTagOption | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\r\n    (click)=\"clickOption(option, false)\"\r\n    [nzActiveOption]=\"activatedOption\"\r\n    [nzShowActive]=\"!isAddTagOptionDisplay\"\r\n    [nzOption]=\"option\"\r\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\r\n  ></li>\r\n</ul>\r\n"
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
        idClass: [{ type: Input }],
        compareWith: [{ type: Input }],
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
    NzOptionContainerComponent.prototype.idClass;
    /** @type {?} */
    NzOptionContainerComponent.prototype.compareWith;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQzs7O1FBV2xGLGNBQVMsS0FBSyxDQUFDO1FBQ2YsNkJBQXdCLEtBQUssQ0FBQztRQUM5QiwrQkFBK0MsRUFBRSxDQUFDO1FBR2xELHVCQUF1QyxFQUFFLENBQUM7UUFDMUMsMEJBQTBDLEVBQUUsQ0FBQzs7UUFPN0MsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usb0NBQWtELElBQUksWUFBWSxFQUF1QixDQUFDO1FBQzFGLHFCQUFtQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHdCQUFzQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9ELGNBQWtCLFNBQVMsQ0FBQztRQUM1QixzQkFBMEIsS0FBSyxDQUFDO1FBQ2hDLHNCQUF5QyxtQkFBbUIsQ0FBQztRQUM3RCwwQkFBOEIsUUFB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QUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDg0RkFBbUQ7aUJBQ3BEOzs7NENBY0UsWUFBWSxTQUFDLG1CQUFtQjswQ0FDaEMsS0FBSzsrQ0FDTCxLQUFLOzhDQUVMLE1BQU07K0NBQ04sTUFBTTtnQ0FDTixNQUFNO21DQUNOLE1BQU07eUJBQ04sS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzBCQUNMLEtBQUs7OEJBRUwsS0FBSztnQ0FFTCxLQUFLO3dDQVdMLEtBQUs7O3FDQWpFUjs7U0F3QmEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpPcHRpb25MaUNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWxpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIE56T3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbnotb3B0aW9uLWNvbnRhaW5lcl0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcclxuICBwcml2YXRlIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIGlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IGZhbHNlO1xyXG4gIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgb3B0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgZ3JvdXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBsaXN0T2ZUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBsaXN0T2ZGaWx0ZXJPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50O1xyXG4gIC8qKiBjYW4gbm90IHVzZSBWaWV3Q2hpbGQgc2luY2UgaXQgd2lsbCBtYXRjaCBzdWIgb3B0aW9ucyBpbiBvcHRpb24gZ3JvdXAgKiovXHJcbiAgQFZpZXdDaGlsZHJlbihOek9wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25MaUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25Db21wb25lbnRbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGlja09wdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XHJcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpZENsYXNzOiBzdHJpbmc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XHJcbiAgICBpZiAodGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAvKiogc2hvdWxkIGNsZWFyIGFjdGl2ZWRPcHRpb24gd2hlbiBsaXN0T2ZTZWxlY3RlZFZhbHVlIGNoYW5nZSAqKi9cclxuICAgICAgdGhpcy5jbGVhckFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUsIHRoaXMubnpTZWFyY2hWYWx1ZV07XHJcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0SWRMaShvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5uelZhbHVlICYmIG9wdGlvbi5uelZhbHVlLnRyaW0oKTtcclxuICAgIHJldHVybiBgJHt0aGlzLmlkQ2xhc3N9LSR7dmFsdWV9YDtcclxuICB9XHJcblxyXG4gIGZvcm1hdElkVWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmlkQ2xhc3N9LWxpc3RgO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbiwgaXNQcmVzc0VudGVyKTtcclxuICAgIHRoaXMubnpDbGlja09wdGlvbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd25VbChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoW1VQX0FSUk9XLCBET1dOX0FSUk9XLCBFTlRFUl0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcclxuICAgICAgICAvLyBhcnJvdyB1cFxyXG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZlSW5kZXggPiAwID8gYWN0aXZlSW5kZXggLSAxIDogdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvbltwcmVJbmRleF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICAgIC8vIGFycm93IGRvd25cclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA8IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEgPyBhY3RpdmVJbmRleCArIDEgOiAwO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW25leHRJbmRleF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgICAvLyBlbnRlclxyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhZ09wdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0QWN0aXZlT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZmlyc3RBY3RpdmVPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uXHJcbiAgICAgIC5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pXHJcbiAgICAgIC5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWzBdKSk7XHJcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihmaXJzdEFjdGl2ZU9wdGlvbik7XHJcbiAgfVxyXG5cclxuICBjbGVhckFjdGl2YXRlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIHNjcm9sbDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgaWYgKHNjcm9sbCkge1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxJbnRvVmlldygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+IG8ubnpPcHRpb24gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmIHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKSB7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXRPcHRpb24uZWxbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXShmYWxzZSksIDE1MCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIGlzUHJlc3NFbnRlcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IGVtaXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlICoqL1xyXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uKTtcclxuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xyXG4gICAgICAgICAgaWYgKCFpc1ByZXNzRW50ZXIpIHtcclxuICAgICAgICAgICAgLyoqIHNob3VsZCBub3QgdG9nZ2xlIG9wdGlvbiB3aGVuIHByZXNzIGVudGVyICoqL1xyXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcclxuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5uelZhbHVlXTtcclxuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiogdXBkYXRlIHNlbGVjdGVkVmFsdWVzIHdoZW4gY2xpY2sgb3B0aW9uICoqL1xyXG4gICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xyXG4gICAgICAvKiogcmVmcmVzaCB0YWdzIG9wdGlvbiAqKi9cclxuICAgICAgY29uc3QgbGlzdE9mVGFnc09wdGlvbiA9IFtdO1xyXG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKCFleGlzdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBOek9wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpMYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgbGlzdE9mVGFnc09wdGlvbi5wdXNoKG56T3B0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZlRhZ3NPcHRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudFxyXG4gICAgICAudG9BcnJheSgpXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50XHJcbiAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAucmVkdWNlKChwcmUsIGN1cikgPT4gWy4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKV0sIFtdKVxyXG4gICAgICApO1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm56TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8qKiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIHwgdXBkYXRlIG9wdGlvbiBsaXN0IC0+IHVwZGF0ZSBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGFjdGl2YXRlZE9wdGlvbiAqKi9cclxuICAgIGlmICh0aGlzLmlzSW5pdCkge1xyXG4gICAgICBpZiAoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uRGlzcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24gPSBuZXcgTnpPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbiksXHJcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZSxcclxuICAgICAgdGhpcy5uekZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5uelNlcnZlclNlYXJjaFxyXG4gICAgKSBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgaWYgKHRoaXMubnpTZWFyY2hWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogd2F0Y2ggb3B0aW9ucyBjaGFuZ2UgaW4gb3B0aW9uIGdyb3VwICoqL1xyXG4gIHdhdGNoU3ViT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVPcHRpb24oKTtcclxuICAgIGxldCBvcHRpb25DaGFuZ2VzJCA9IG1lcmdlKFxyXG4gICAgICBuZXcgU3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpLFxyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmZvckVhY2goXHJcbiAgICAgICAgZ3JvdXAgPT5cclxuICAgICAgICAgIChvcHRpb25DaGFuZ2VzJCA9IGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICAgID8gbWVyZ2UoZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcywgb3B0aW9uQ2hhbmdlcyQpXHJcbiAgICAgICAgICAgIDogb3B0aW9uQ2hhbmdlcyQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG9wdGlvbkNoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmVHcm91cCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmdyb3VwU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bnN1YnNjcmliZU9wdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvblN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm56TW9kZSA9PT0gJ211bHRpcGxlJztcclxuICB9XHJcblxyXG4gIGdldCBpc05vdEZvdW5kRGlzcGxheSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc1RhZ3NNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdE9mQWxsT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCk7XHJcbiAgICBjb25zdCBpc01hdGNoID0gbGlzdE9mQWxsT3B0aW9uLmluZGV4T2YodGhpcy5uelNlYXJjaFZhbHVlKSA+IC0xO1xyXG4gICAgdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSB0aGlzLmlzVGFnc01vZGUgJiYgdGhpcy5uelNlYXJjaFZhbHVlICYmICFpc01hdGNoO1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd25TY3JvbGwoZTogTW91c2VFdmVudCwgdWw6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodWwgJiYgdWwuc2Nyb2xsSGVpZ2h0IC0gdWwuc2Nyb2xsVG9wID09PSB1bC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKTtcclxuICAgIHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlR3JvdXAoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVPcHRpb24oKTtcclxuICB9XHJcbn1cclxuIl19