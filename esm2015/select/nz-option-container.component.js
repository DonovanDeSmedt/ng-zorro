/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
import { merge, Subject } from 'rxjs';
import { NzOptionLiComponent } from './nz-option-li.component';
import { defaultFilterOption, NzOptionPipe } from './nz-option.pipe';
export class NzOptionContainerComponent {
    constructor() {
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
        this.compareWith = (o1, o2) => o1 === o2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
        this._searchValue = value;
        this.updateAddTagOptionDisplay();
        this.updateListOfFilterOption();
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListOfSelectedValue(value) {
        if (this._listOfSelectedValue !== value) {
            this._listOfSelectedValue = value;
            /** should clear activedOption when listOfSelectedValue change **/
            this.clearActivatedOption();
            this.refreshAllOptionStatus(false);
        }
    }
    /**
     * @return {?}
     */
    get nzListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @return {?}
     */
    addTagOption() {
        if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
            this.nzListOfSelectedValue = [...this.nzListOfSelectedValue, this.nzSearchValue];
            this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    formatIdLi(option) {
        /** @type {?} */
        const value = option && option.nzValue && option.nzValue.trim();
        return `${this.idClass}-${value}`;
    }
    /**
     * @return {?}
     */
    formatIdUl() {
        return `${this.idClass}-list`;
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    clickOption(option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.nzClickOption.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownUl(e) {
        if ([UP_ARROW, DOWN_ARROW, ENTER].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            const activeIndex = this.listOfFilterOption.findIndex(item => item === this.activatedOption);
            if (e.keyCode === UP_ARROW) {
                /** @type {?} */
                const preIndex = activeIndex > 0 ? activeIndex - 1 : this.listOfFilterOption.length - 1;
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === DOWN_ARROW) {
                /** @type {?} */
                const nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? activeIndex + 1 : 0;
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
    }
    /**
     * @return {?}
     */
    resetActiveOption() {
        /** @type {?} */
        const firstActiveOption = this.listOfAllTemplateOption
            .concat(this.listOfTagOption)
            .find(item => this.compareWith(item.nzValue, this.nzListOfSelectedValue[0]));
        this.setActiveOption(firstActiveOption);
    }
    /**
     * @return {?}
     */
    clearActivatedOption() {
        this.setActiveOption(null);
    }
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    setActiveOption(option, scroll = true) {
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length) {
            /** @type {?} */
            const targetOption = this.listOfNzOptionLiComponent.find(o => o.nzOption === this.activatedOption);
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption && targetOption.el && targetOption.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(() => targetOption.el['scrollIntoViewIfNeeded'](false), 150);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    updateSelectedOption(option, isPressEnter) {
        /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
        if (option && !option.nzDisabled) {
            /** @type {?} */
            let changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.nzListOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.nzValue));
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
    }
    /**
     * @return {?}
     */
    refreshListOfTagOption() {
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            const listOfTagsOption = [];
            this.nzListOfSelectedValue.forEach(value => {
                /** @type {?} */
                const existedOption = this.listOfAllTemplateOption.find(o => this.compareWith(o.nzValue, value));
                if (!existedOption) {
                    /** @type {?} */
                    const nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    listOfTagsOption.push(nzOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption;
        }
    }
    /**
     * @return {?}
     */
    refreshListOfAllTemplateOption() {
        this.listOfAllTemplateOption = this.listOfNzOptionComponent
            .toArray()
            .concat(this.listOfNzOptionGroupComponent
            .toArray()
            .reduce((pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()], []));
        Promise.resolve().then(() => this.nzListOfTemplateOptionChange.emit(this.listOfAllTemplateOption));
    }
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    refreshAllOptionStatus(isTemplateOptionChange) {
        /** update nzListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilterOption() {
        this.listOfFilterOption = /** @type {?} */ (new NzOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.nzSearchValue, this.nzFilterOption, this.nzServerSearch));
        if (this.nzSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    }
    /**
     * watch options change in option group *
     * @return {?}
     */
    watchSubOptionChanges() {
        this.unsubscribeOption();
        /** @type {?} */
        let optionChanges$ = merge(new Subject().asObservable(), this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes);
        if (this.listOfNzOptionGroupComponent.length) {
            this.listOfNzOptionGroupComponent.forEach(group => (optionChanges$ = group.listOfNzOptionComponent
                ? merge(group.listOfNzOptionComponent.changes, optionChanges$)
                : optionChanges$));
        }
        this.optionSubscription = optionChanges$.subscribe(() => this.refreshAllOptionStatus(true));
    }
    /**
     * @return {?}
     */
    unsubscribeGroup() {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOption() {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.nzMode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.nzMode === 'tags' || this.nzMode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isNotFoundDisplay() {
        return !this.isTagsMode && !this.listOfFilterOption.length;
    }
    /**
     * @return {?}
     */
    updateAddTagOptionDisplay() {
        /** @type {?} */
        const listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(item => item.nzLabel);
        /** @type {?} */
        const isMatch = listOfAllOption.indexOf(this.nzSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.nzSearchValue && !isMatch;
    }
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    dropDownScroll(e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && ul.scrollHeight - ul.scrollTop === ul.clientHeight) {
            this.nzScrollToBottom.emit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfNzOptionGroupComponent.changes.subscribe(() => this.watchSubOptionChanges());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBT3BGLE1BQU0sT0FBTywwQkFBMEI7O1FBSXJDLGNBQVMsS0FBSyxDQUFDO1FBQ2YsNkJBQXdCLEtBQUssQ0FBQztRQUM5QiwrQkFBK0MsRUFBRSxDQUFDO1FBR2xELHVCQUF1QyxFQUFFLENBQUM7UUFDMUMsMEJBQTBDLEVBQUUsQ0FBQzs7UUFPN0MsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usb0NBQWtELElBQUksWUFBWSxFQUF1QixDQUFDO1FBQzFGLHFCQUFtQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHdCQUFzQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9ELGNBQWtCLFNBQVMsQ0FBQztRQUM1QixzQkFBMEIsS0FBSyxDQUFDO1FBQ2hDLHNCQUF5QyxtQkFBbUIs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RSxDQUFDO1FBQ3BCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNsSDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7O1lBdFNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiw4NEZBQW1EO2FBQ3BEOzs7d0NBY0UsWUFBWSxTQUFDLG1CQUFtQjtzQ0FDaEMsS0FBSzsyQ0FDTCxLQUFLOzBDQUVMLE1BQU07MkNBQ04sTUFBTTs0QkFDTixNQUFNOytCQUNOLE1BQU07cUJBQ04sS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3NCQUNMLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLO29DQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xyXG4gIHByaXZhdGUgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbiAgaXNJbml0ID0gZmFsc2U7XHJcbiAgaXNBZGRUYWdPcHRpb25EaXNwbGF5ID0gZmFsc2U7XHJcbiAgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBvcHRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBncm91cFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGxpc3RPZlRhZ09wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGxpc3RPZkZpbHRlck9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGFjdGl2YXRlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XHJcbiAgLyoqIGNhbiBub3QgdXNlIFZpZXdDaGlsZCBzaW5jZSBpdCB3aWxsIG1hdGNoIHN1YiBvcHRpb25zIGluIG9wdGlvbiBncm91cCAqKi9cclxuICBAVmlld0NoaWxkcmVuKE56T3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkxpQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvbkNvbXBvbmVudFtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrT3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBJbnB1dCgpIG56TW9kZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcclxuICBASW5wdXQoKSBuek1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10pIHtcclxuICAgIGlmICh0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIC8qKiBzaG91bGQgY2xlYXIgYWN0aXZlZE9wdGlvbiB3aGVuIGxpc3RPZlNlbGVjdGVkVmFsdWUgY2hhbmdlICoqL1xyXG4gICAgICB0aGlzLmNsZWFyQWN0aXZhdGVkT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhZ09wdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xyXG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdGhpcy5uelNlYXJjaFZhbHVlXTtcclxuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRJZExpKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb24gJiYgb3B0aW9uLm56VmFsdWUgJiYgb3B0aW9uLm56VmFsdWUudHJpbSgpO1xyXG4gICAgcmV0dXJuIGAke3RoaXMuaWRDbGFzc30tJHt2YWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0SWRVbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuaWRDbGFzc30tbGlzdGA7XHJcbiAgfVxyXG5cclxuICBjbGlja09wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRPcHRpb24ob3B0aW9uLCBpc1ByZXNzRW50ZXIpO1xyXG4gICAgdGhpcy5uekNsaWNrT3B0aW9uLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93blVsKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChbVVBfQVJST1csIERPV05fQVJST1csIEVOVEVSXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICAgIC8vIGFycm93IHVwXHJcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmVJbmRleCA+IDAgPyBhY3RpdmVJbmRleCAtIDEgOiB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW3ByZUluZGV4XSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgICAgLy8gYXJyb3cgZG93blxyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4IDwgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMSA/IGFjdGl2ZUluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bbmV4dEluZGV4XSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgIC8vIGVudGVyXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnT3B0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGlja09wdGlvbi5lbWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmVPcHRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaXJzdEFjdGl2ZU9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb25cclxuICAgICAgLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbilcclxuICAgICAgLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKGZpcnN0QWN0aXZlT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGNsZWFyQWN0aXZhdGVkT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obnVsbCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XHJcbiAgICBpZiAoc2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbEludG9WaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT4gby5uek9wdGlvbiA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgdGFyZ2V0T3B0aW9uLmVsWydzY3JvbGxJbnRvVmlld0lmTmVlZGVkJ10pIHtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKGZhbHNlKSwgMTUwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gZW1pdCBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgKiovXHJcbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24pO1xyXG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgICAgICBpZiAoaXNOb3ROaWwodGFyZ2V0VmFsdWUpKSB7XHJcbiAgICAgICAgICBpZiAoIWlzUHJlc3NFbnRlcikge1xyXG4gICAgICAgICAgICAvKiogc2hvdWxkIG5vdCB0b2dnbGUgb3B0aW9uIHdoZW4gcHJlc3MgZW50ZXIgKiovXHJcbiAgICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUuc3BsaWNlKGxpc3RPZlNlbGVjdGVkVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubnpNYXhNdWx0aXBsZUNvdW50KSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qKiB1cGRhdGUgc2VsZWN0ZWRWYWx1ZXMgd2hlbiBjbGljayBvcHRpb24gKiovXHJcbiAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XHJcbiAgICAgIC8qKiByZWZyZXNoIHRhZ3Mgb3B0aW9uICoqL1xyXG4gICAgICBjb25zdCBsaXN0T2ZUYWdzT3B0aW9uID0gW107XHJcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKTtcclxuICAgICAgICBpZiAoIWV4aXN0ZWRPcHRpb24pIHtcclxuICAgICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uelZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XHJcbiAgICAgICAgICBsaXN0T2ZUYWdzT3B0aW9uLnB1c2gobnpPcHRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mVGFnc09wdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hMaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50XHJcbiAgICAgIC50b0FycmF5KClcclxuICAgICAgLmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnRcclxuICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgIC5yZWR1Y2UoKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSwgW10pXHJcbiAgICAgICk7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZS5lbWl0KHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24pKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hBbGxPcHRpb25TdGF0dXMoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLyoqIHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgfCB1cGRhdGUgb3B0aW9uIGxpc3QgLT4gdXBkYXRlIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgYWN0aXZhdGVkT3B0aW9uICoqL1xyXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIGlmIChpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcclxuICAgICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbiA9IG5ldyBOek9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKSxcclxuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLm56RmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLm56U2VydmVyU2VhcmNoXHJcbiAgICApIGFzIE56T3B0aW9uQ29tcG9uZW50W107XHJcbiAgICBpZiAodGhpcy5uelNlYXJjaFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiB3YXRjaCBvcHRpb25zIGNoYW5nZSBpbiBvcHRpb24gZ3JvdXAgKiovXHJcbiAgd2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xyXG4gICAgbGV0IG9wdGlvbkNoYW5nZXMkID0gbWVyZ2UoXHJcbiAgICAgIG5ldyBTdWJqZWN0KCkuYXNPYnNlcnZhYmxlKCksXHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuZm9yRWFjaChcclxuICAgICAgICBncm91cCA9PlxyXG4gICAgICAgICAgKG9wdGlvbkNoYW5nZXMkID0gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnRcclxuICAgICAgICAgICAgPyBtZXJnZShncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLCBvcHRpb25DaGFuZ2VzJClcclxuICAgICAgICAgICAgOiBvcHRpb25DaGFuZ2VzJClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gb3B0aW9uQ2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKSk7XHJcbiAgfVxyXG5cclxuICB1bnN1YnNjcmliZUdyb3VwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTm90Rm91bmREaXNwbGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzVGFnc01vZGUgJiYgIXRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZBbGxPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbikubWFwKGl0ZW0gPT4gaXRlbS5uekxhYmVsKTtcclxuICAgIGNvbnN0IGlzTWF0Y2ggPSBsaXN0T2ZBbGxPcHRpb24uaW5kZXhPZih0aGlzLm56U2VhcmNoVmFsdWUpID4gLTE7XHJcbiAgICB0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2g7XHJcbiAgfVxyXG5cclxuICBkcm9wRG93blNjcm9sbChlOiBNb3VzZUV2ZW50LCB1bDogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh1bCAmJiB1bC5zY3JvbGxIZWlnaHQgLSB1bC5zY3JvbGxUb3AgPT09IHVsLmNsaWVudEhlaWdodCkge1xyXG4gICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKHRydWUpO1xyXG4gICAgdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTtcclxuICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVHcm91cCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xyXG4gIH1cclxufVxyXG4iXX0=