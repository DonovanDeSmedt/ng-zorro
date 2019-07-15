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
    NzOptionContainerComponent.prototype.formatId = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.idClass + "-" + option;
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
                    template: "<ul\n  #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  (keydown)=\"onKeyDownUl($event)\"\n  (scroll)=\"dropDownScroll($event, dropdownUl)\"\n  tabindex=\"0\"\n>\n  <li\n    *ngIf=\"isNotFoundDisplay\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\"\n  >\n    {{ nzNotFoundContent ? nzNotFoundContent : ('Select.notFoundContent' | nzI18n) }}\n  </li>\n  <li\n    *ngIf=\"isAddTagOptionDisplay\"\n    nz-select-unselectable\n    (click)=\"addTagOption()\"\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active\"\n  >\n    {{ nzSearchValue }}\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [id]=\"formatId(option)\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\n    (click)=\"clickOption(option, false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n  ></li>\n  <li\n    *ngFor=\"\n      let group of listOfNzOptionGroupComponent | nzSubFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\n    \"\n    class=\"ant-select-dropdown-menu-item-group\"\n  >\n    <div class=\"ant-select-dropdown-menu-item-group-title\" [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\n      <ng-container *ngIf=\"group.isLabelString; else labelTemplate\">{{ group.nzLabel }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"group.nzLabel\"></ng-template>\n      </ng-template>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <li\n        nz-option-li\n        [nzMode]=\"nzMode\"\n        [compareWith]=\"compareWith\"\n        *ngFor=\"\n          let option of group.listOfNzOptionComponent | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\n        \"\n        (click)=\"clickOption(option, false)\"\n        [nzActiveOption]=\"activatedOption\"\n        [nzShowActive]=\"!isAddTagOptionDisplay\"\n        [nzOption]=\"option\"\n        [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n      ></li>\n    </ul>\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfTagOption | nzFilterOptionPipe: nzSearchValue:nzFilterOption:nzServerSearch\"\n    (click)=\"clickOption(option, false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzShowActive]=\"!isAddTagOptionDisplay\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\"\n  ></li>\n</ul>\n"
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
        idClass: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
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
    NzOptionContainerComponent.prototype.idClass;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.compareWith;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQzs7O1FBV2xGLGNBQVMsS0FBSyxDQUFDO1FBQ2YsNkJBQXdCLEtBQUssQ0FBQztRQUM5QiwrQkFBK0MsRUFBRSxDQUFDO1FBR2xELHVCQUF1QyxFQUFFLENBQUM7UUFDMUMsMEJBQTBDLEVBQUUsQ0FBQzs7UUFPN0MsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usb0NBQWtELElBQUksWUFBWSxFQUF1QixDQUFDO1FBQzFGLHFCQUFtQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHdCQUFzQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9ELGNBQWtCLFNBQVMsQ0FBQztRQUM1QixzQkFBMEIsS0FBSyxDQUFDO1FBQ2hDLHNCQUF5QyxtQkFBbUIsQ0FBQztRQUM3RCwwQkFBOEIsUUFB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QUNOLE1BQU07eUJBQ04sS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSzswQkFDTCxLQUFLO29DQUNMLEtBQUs7OEJBRUwsS0FBSztnQ0FFTCxLQUFLO3dDQVdMLEtBQUs7O3FDQWpFUjs7U0F3QmEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xuICBwcml2YXRlIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgaXNBZGRUYWdPcHRpb25EaXNwbGF5ID0gZmFsc2U7XG4gIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIG9wdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBncm91cFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBsaXN0T2ZUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mRmlsdGVyT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGFjdGl2YXRlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XG4gIC8qKiBjYW4gbm90IHVzZSBWaWV3Q2hpbGQgc2luY2UgaXQgd2lsbCBtYXRjaCBzdWIgb3B0aW9ucyBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIEBWaWV3Q2hpbGRyZW4oTnpPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25Db21wb25lbnRbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2tPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICh0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgLyoqIHNob3VsZCBjbGVhciBhY3RpdmVkT3B0aW9uIHdoZW4gbGlzdE9mU2VsZWN0ZWRWYWx1ZSBjaGFuZ2UgKiovXG4gICAgICB0aGlzLmNsZWFyQWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICBhZGRUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubnpNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdGhpcy5uelNlYXJjaFZhbHVlXTtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdElkKG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZENsYXNzfS0ke29wdGlvbn1gO1xuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb24sIGlzUHJlc3NFbnRlcik7XG4gICAgdGhpcy5uekNsaWNrT3B0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIG9uS2V5RG93blVsKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoW1VQX0FSUk9XLCBET1dOX0FSUk9XLCBFTlRFUl0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgLy8gYXJyb3cgdXBcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmVJbmRleCA+IDAgPyBhY3RpdmVJbmRleCAtIDEgOiB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvbltwcmVJbmRleF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgLy8gYXJyb3cgZG93blxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA8IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEgPyBhY3RpdmVJbmRleCArIDEgOiAwO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvbltuZXh0SW5kZXhdKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSkge1xuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnT3B0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWN0aXZlT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0QWN0aXZlT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvblxuICAgICAgLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbilcbiAgICAgIC5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWzBdKSk7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24oZmlyc3RBY3RpdmVPcHRpb24pO1xuICB9XG5cbiAgY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG4gIH1cblxuICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT4gby5uek9wdGlvbiA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiB0YXJnZXRPcHRpb24uZWxbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXSkge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXRPcHRpb24uZWxbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXShmYWxzZSksIDE1MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IGVtaXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlICoqL1xuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5uekRpc2FibGVkKSB7XG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uKTtcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIWlzUHJlc3NFbnRlcikge1xuICAgICAgICAgICAgLyoqIHNob3VsZCBub3QgdG9nZ2xlIG9wdGlvbiB3aGVuIHByZXNzIGVudGVyICoqL1xuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5uelZhbHVlXTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiogdXBkYXRlIHNlbGVjdGVkVmFsdWVzIHdoZW4gY2xpY2sgb3B0aW9uICoqL1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XG4gICAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgLyoqIHJlZnJlc2ggdGFncyBvcHRpb24gKiovXG4gICAgICBjb25zdCBsaXN0T2ZUYWdzT3B0aW9uID0gW107XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpO1xuICAgICAgICBpZiAoIWV4aXN0ZWRPcHRpb24pIHtcbiAgICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBOek9wdGlvbkNvbXBvbmVudCgpO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XG4gICAgICAgICAgbGlzdE9mVGFnc09wdGlvbi5wdXNoKG56T3B0aW9uQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZlRhZ3NPcHRpb247XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50XG4gICAgICAudG9BcnJheSgpXG4gICAgICAuY29uY2F0KFxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnRcbiAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgLnJlZHVjZSgocHJlLCBjdXIpID0+IFsuLi5wcmUsIC4uLmN1ci5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCldLCBbXSlcbiAgICAgICk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm56TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKSk7XG4gIH1cblxuICByZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSB8IHVwZGF0ZSBvcHRpb24gbGlzdCAtPiB1cGRhdGUgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBhY3RpdmF0ZWRPcHRpb24gKiovXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICBpZiAoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uID0gbmV3IE56T3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKSxcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMubnpGaWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLm56U2VydmVyU2VhcmNoXG4gICAgKSBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIGlmICh0aGlzLm56U2VhcmNoVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKiogd2F0Y2ggb3B0aW9ucyBjaGFuZ2UgaW4gb3B0aW9uIGdyb3VwICoqL1xuICB3YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICAgIGxldCBvcHRpb25DaGFuZ2VzJCA9IG1lcmdlKFxuICAgICAgbmV3IFN1YmplY3QoKS5hc09ic2VydmFibGUoKSxcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzXG4gICAgKTtcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmZvckVhY2goXG4gICAgICAgIGdyb3VwID0+XG4gICAgICAgICAgKG9wdGlvbkNoYW5nZXMkID0gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnRcbiAgICAgICAgICAgID8gbWVyZ2UoZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcywgb3B0aW9uQ2hhbmdlcyQpXG4gICAgICAgICAgICA6IG9wdGlvbkNoYW5nZXMkKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBvcHRpb25DaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKHRydWUpKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlR3JvdXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IGlzTm90Rm91bmREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc1RhZ3NNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZkFsbE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKS5tYXAoaXRlbSA9PiBpdGVtLm56TGFiZWwpO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBsaXN0T2ZBbGxPcHRpb24uaW5kZXhPZih0aGlzLm56U2VhcmNoVmFsdWUpID4gLTE7XG4gICAgdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSB0aGlzLmlzVGFnc01vZGUgJiYgdGhpcy5uelNlYXJjaFZhbHVlICYmICFpc01hdGNoO1xuICB9XG5cbiAgZHJvcERvd25TY3JvbGwoZTogTW91c2VFdmVudCwgdWw6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodWwgJiYgdWwuc2Nyb2xsSGVpZ2h0IC0gdWwuc2Nyb2xsVG9wID09PSB1bC5jbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSk7XG4gICAgdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTtcbiAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUdyb3VwKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICB9XG59XG4iXX0=