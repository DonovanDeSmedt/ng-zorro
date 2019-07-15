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
     * @param {?} option
     * @return {?}
     */
    formatId(option) {
        return `${this.idClass}-${option}`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBT3BGLE1BQU07O3NCQUlLLEtBQUs7cUNBQ1UsS0FBSzt1Q0FDa0IsRUFBRTsrQkFHVixFQUFFO2tDQUNDLEVBQUU7OzJDQU9KLElBQUksWUFBWSxFQUFTOzRDQUN4QixJQUFJLFlBQVksRUFBdUI7NkJBQ3RELElBQUksWUFBWSxFQUFRO2dDQUNyQixJQUFJLFlBQVksRUFBUTtzQkFDbkMsU0FBUzs4QkFDRCxLQUFLOzhCQUNVLG1CQUFtQjtrQ0FDOUIsUUFBUTs7MkJBR2YsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTs7Ozs7O0lBSXRELElBQ0ksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIs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RCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0tBQ2xIOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7WUF2U0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG92RkFBbUQ7YUFDcEQ7Ozt3Q0FjRSxZQUFZLFNBQUMsbUJBQW1CO3NDQUNoQyxLQUFLOzJDQUNMLEtBQUs7MENBRUwsTUFBTTsyQ0FDTixNQUFNOzRCQUNOLE1BQU07K0JBQ04sTUFBTTtxQkFDTixLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLOzRCQUVMLEtBQUs7b0NBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek9wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIE56T3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotb3B0aW9uLWNvbnRhaW5lcl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcbiAgcHJpdmF0ZSBfc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IGZhbHNlO1xuICBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBvcHRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgZ3JvdXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGxpc3RPZkZpbHRlck9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50O1xuICAvKiogY2FuIG5vdCB1c2UgVmlld0NoaWxkIHNpbmNlIGl0IHdpbGwgbWF0Y2ggc3ViIG9wdGlvbnMgaW4gb3B0aW9uIGdyb3VwICoqL1xuICBAVmlld0NoaWxkcmVuKE56T3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkxpQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIG56TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56T3B0aW9uQ29tcG9uZW50W10+KCk7XG4gIEBPdXRwdXQoKSBuekNsaWNrT3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgbnpNb2RlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIG56TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBASW5wdXQoKSBpZENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICh0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgLyoqIHNob3VsZCBjbGVhciBhY3RpdmVkT3B0aW9uIHdoZW4gbGlzdE9mU2VsZWN0ZWRWYWx1ZSBjaGFuZ2UgKiovXG4gICAgICB0aGlzLmNsZWFyQWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdElkKG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZENsYXNzfS0ke29wdGlvbn1gO1xuICB9XG5cbiAgZm9ybWF0SWRMaShvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbiAmJiBvcHRpb24ubnpWYWx1ZSAmJiBvcHRpb24ubnpWYWx1ZS50cmltKCk7XG4gICAgcmV0dXJuIGAke3RoaXMuaWRDbGFzc30tJHt2YWx1ZX1gO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgfVxuXG4gIGFkZFRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLCB0aGlzLm56U2VhcmNoVmFsdWVdO1xuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb24sIGlzUHJlc3NFbnRlcik7XG4gICAgdGhpcy5uekNsaWNrT3B0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIG9uS2V5RG93blVsKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoW1VQX0FSUk9XLCBET1dOX0FSUk9XLCBFTlRFUl0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgLy8gYXJyb3cgdXBcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmVJbmRleCA+IDAgPyBhY3RpdmVJbmRleCAtIDEgOiB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvbltwcmVJbmRleF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgLy8gYXJyb3cgZG93blxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA8IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEgPyBhY3RpdmVJbmRleCArIDEgOiAwO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvbltuZXh0SW5kZXhdKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSkge1xuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnT3B0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWN0aXZlT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0QWN0aXZlT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvblxuICAgICAgLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbilcbiAgICAgIC5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWzBdKSk7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24oZmlyc3RBY3RpdmVPcHRpb24pO1xuICB9XG5cbiAgY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG4gIH1cblxuICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT4gby5uek9wdGlvbiA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiB0YXJnZXRPcHRpb24uZWxbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXSkge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXRPcHRpb24uZWxbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXShmYWxzZSksIDE1MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IGVtaXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlICoqL1xuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5uekRpc2FibGVkKSB7XG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uKTtcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIWlzUHJlc3NFbnRlcikge1xuICAgICAgICAgICAgLyoqIHNob3VsZCBub3QgdG9nZ2xlIG9wdGlvbiB3aGVuIHByZXNzIGVudGVyICoqL1xuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5uelZhbHVlXTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiogdXBkYXRlIHNlbGVjdGVkVmFsdWVzIHdoZW4gY2xpY2sgb3B0aW9uICoqL1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XG4gICAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgLyoqIHJlZnJlc2ggdGFncyBvcHRpb24gKiovXG4gICAgICBjb25zdCBsaXN0T2ZUYWdzT3B0aW9uID0gW107XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpO1xuICAgICAgICBpZiAoIWV4aXN0ZWRPcHRpb24pIHtcbiAgICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBOek9wdGlvbkNvbXBvbmVudCgpO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XG4gICAgICAgICAgbGlzdE9mVGFnc09wdGlvbi5wdXNoKG56T3B0aW9uQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZlRhZ3NPcHRpb247XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50XG4gICAgICAudG9BcnJheSgpXG4gICAgICAuY29uY2F0KFxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnRcbiAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgLnJlZHVjZSgocHJlLCBjdXIpID0+IFsuLi5wcmUsIC4uLmN1ci5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCldLCBbXSlcbiAgICAgICk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm56TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKSk7XG4gIH1cblxuICByZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSB8IHVwZGF0ZSBvcHRpb24gbGlzdCAtPiB1cGRhdGUgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBhY3RpdmF0ZWRPcHRpb24gKiovXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICBpZiAoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uID0gbmV3IE56T3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcbiAgICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKSxcbiAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMubnpGaWx0ZXJPcHRpb24sXG4gICAgICB0aGlzLm56U2VydmVyU2VhcmNoXG4gICAgKSBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIGlmICh0aGlzLm56U2VhcmNoVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKiogd2F0Y2ggb3B0aW9ucyBjaGFuZ2UgaW4gb3B0aW9uIGdyb3VwICoqL1xuICB3YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICAgIGxldCBvcHRpb25DaGFuZ2VzJCA9IG1lcmdlKFxuICAgICAgbmV3IFN1YmplY3QoKS5hc09ic2VydmFibGUoKSxcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzXG4gICAgKTtcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmZvckVhY2goXG4gICAgICAgIGdyb3VwID0+XG4gICAgICAgICAgKG9wdGlvbkNoYW5nZXMkID0gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnRcbiAgICAgICAgICAgID8gbWVyZ2UoZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcywgb3B0aW9uQ2hhbmdlcyQpXG4gICAgICAgICAgICA6IG9wdGlvbkNoYW5nZXMkKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBvcHRpb25DaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKHRydWUpKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlR3JvdXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IGlzTm90Rm91bmREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc1RhZ3NNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZkFsbE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKS5tYXAoaXRlbSA9PiBpdGVtLm56TGFiZWwpO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBsaXN0T2ZBbGxPcHRpb24uaW5kZXhPZih0aGlzLm56U2VhcmNoVmFsdWUpID4gLTE7XG4gICAgdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSB0aGlzLmlzVGFnc01vZGUgJiYgdGhpcy5uelNlYXJjaFZhbHVlICYmICFpc01hdGNoO1xuICB9XG5cbiAgZHJvcERvd25TY3JvbGwoZTogTW91c2VFdmVudCwgdWw6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodWwgJiYgdWwuc2Nyb2xsSGVpZ2h0IC0gdWwuc2Nyb2xsVG9wID09PSB1bC5jbGllbnRIZWlnaHQpIHtcbiAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSk7XG4gICAgdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTtcbiAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUdyb3VwKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICB9XG59XG4iXX0=