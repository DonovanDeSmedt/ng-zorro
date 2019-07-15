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
    formatIdUl() {
        return `${this.idClass}-list`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBT3BGLE1BQU07O3NCQUlLLEtBQUs7cUNBQ1UsS0FBSzt1Q0FDa0IsRUFBRTsrQkFHVixFQUFFO2tDQUNDLEVBQUU7OzJDQU9KLElBQUksWUFBWSxFQUFTOzRDQUN4QixJQUFJLFlBQVksRUFBdUI7NkJBQ3RELElBQUksWUFBWSxFQUFRO2dDQUNyQixJQUFJLFlBQVksRUFBUTtzQkFDbkMsU0FBUzs4QkFDRCxLQUFLOzhCQUNVLG1CQUFtQjtrQ0FDOUIsUUFBUTs7MkJBR2YsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTs7Ozs7O0lBSXRELElBQ0ksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIs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QUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDbEg7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7OztZQTNTRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsb3ZGQUFtRDthQUNwRDs7O3dDQWNFLFlBQVksU0FBQyxtQkFBbUI7c0NBQ2hDLEtBQUs7MkNBQ0wsS0FBSzswQ0FFTCxNQUFNOzJDQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNO3FCQUNOLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFFTCxLQUFLO3NCQUVMLEtBQUs7NEJBRUwsS0FBSztvQ0FXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xuICBwcml2YXRlIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgaXNBZGRUYWdPcHRpb25EaXNwbGF5ID0gZmFsc2U7XG4gIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIG9wdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBncm91cFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBsaXN0T2ZUYWdPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mRmlsdGVyT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGFjdGl2YXRlZE9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XG4gIC8qKiBjYW4gbm90IHVzZSBWaWV3Q2hpbGQgc2luY2UgaXQgd2lsbCBtYXRjaCBzdWIgb3B0aW9ucyBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIEBWaWV3Q2hpbGRyZW4oTnpPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uTGlDb21wb25lbnQ+O1xuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgbnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpPcHRpb25Db21wb25lbnRbXT4oKTtcbiAgQE91dHB1dCgpIG56Q2xpY2tPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICAvKiogc2hvdWxkIGNsZWFyIGFjdGl2ZWRPcHRpb24gd2hlbiBsaXN0T2ZTZWxlY3RlZFZhbHVlIGNoYW5nZSAqKi9cbiAgICAgIHRoaXMuY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0SWQob3B0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkQ2xhc3N9LSR7b3B0aW9ufWA7XG4gIH1cblxuICBmb3JtYXRJZExpKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5uelZhbHVlICYmIG9wdGlvbi5uelZhbHVlLnRyaW0oKTtcbiAgICByZXR1cm4gYCR7dGhpcy5pZENsYXNzfS0ke3ZhbHVlfWA7XG4gIH1cblxuICBmb3JtYXRJZFVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWRDbGFzc30tbGlzdGA7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlO1xuICB9XG5cbiAgYWRkVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUsIHRoaXMubnpTZWFyY2hWYWx1ZV07XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbiwgaXNQcmVzc0VudGVyKTtcbiAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICB9XG5cbiAgb25LZXlEb3duVWwoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChbVVBfQVJST1csIERPV05fQVJST1csIEVOVEVSXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyB1cFxuICAgICAgICBjb25zdCBwcmVJbmRleCA9IGFjdGl2ZUluZGV4ID4gMCA/IGFjdGl2ZUluZGV4IC0gMSA6IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW3ByZUluZGV4XSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyBkb3duXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4IDwgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMSA/IGFjdGl2ZUluZGV4ICsgMSA6IDA7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uW25leHRJbmRleF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNBZGRUYWdPcHRpb25EaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUYWdPcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubnpDbGlja09wdGlvbi5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBY3RpdmVPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZmlyc3RBY3RpdmVPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uXG4gICAgICAuY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKVxuICAgICAgLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pKTtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihmaXJzdEFjdGl2ZU9wdGlvbik7XG4gIH1cblxuICBjbGVhckFjdGl2YXRlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihudWxsKTtcbiAgfVxuXG4gIHNldEFjdGl2ZU9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBzY3JvbGw6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PiBvLm56T3B0aW9uID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmIHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldE9wdGlvbi5lbFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKGZhbHNlKSwgMTUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gZW1pdCBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgKiovXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24pO1xuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVdO1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLm56VmFsdWUpKTtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xuICAgICAgICAgIGlmICghaXNQcmVzc0VudGVyKSB7XG4gICAgICAgICAgICAvKiogc2hvdWxkIG5vdCB0b2dnbGUgb3B0aW9uIHdoZW4gcHJlc3MgZW50ZXIgKiovXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm56TWF4TXVsdGlwbGVDb3VudCkge1xuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSwgb3B0aW9uLm56VmFsdWUpKSB7XG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qKiB1cGRhdGUgc2VsZWN0ZWRWYWx1ZXMgd2hlbiBjbGljayBvcHRpb24gKiovXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaExpc3RPZlRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAvKiogcmVmcmVzaCB0YWdzIG9wdGlvbiAqKi9cbiAgICAgIGNvbnN0IGxpc3RPZlRhZ3NPcHRpb24gPSBbXTtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XG4gICAgICAgIGlmICghZXhpc3RlZE9wdGlvbikge1xuICAgICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgICBsaXN0T2ZUYWdzT3B0aW9uLnB1c2gobnpPcHRpb25Db21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mVGFnc09wdGlvbjtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnRcbiAgICAgIC50b0FycmF5KClcbiAgICAgIC5jb25jYXQoXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudFxuICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAucmVkdWNlKChwcmUsIGN1cikgPT4gWy4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKV0sIFtdKVxuICAgICAgKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZS5lbWl0KHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24pKTtcbiAgfVxuXG4gIHJlZnJlc2hBbGxPcHRpb25TdGF0dXMoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIHwgdXBkYXRlIG9wdGlvbiBsaXN0IC0+IHVwZGF0ZSBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGFjdGl2YXRlZE9wdGlvbiAqKi9cbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIGlmIChpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24gPSBuZXcgTnpPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxuICAgICAgdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLFxuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlLFxuICAgICAgdGhpcy5uekZpbHRlck9wdGlvbixcbiAgICAgIHRoaXMubnpTZXJ2ZXJTZWFyY2hcbiAgICApIGFzIE56T3B0aW9uQ29tcG9uZW50W107XG4gICAgaWYgKHRoaXMubnpTZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB3YXRjaCBvcHRpb25zIGNoYW5nZSBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIHdhdGNoU3ViT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gICAgbGV0IG9wdGlvbkNoYW5nZXMkID0gbWVyZ2UoXG4gICAgICBuZXcgU3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXNcbiAgICApO1xuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuZm9yRWFjaChcbiAgICAgICAgZ3JvdXAgPT5cbiAgICAgICAgICAob3B0aW9uQ2hhbmdlcyQgPSBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudFxuICAgICAgICAgICAgPyBtZXJnZShncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLCBvcHRpb25DaGFuZ2VzJClcbiAgICAgICAgICAgIDogb3B0aW9uQ2hhbmdlcyQpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG9wdGlvbkNoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSkpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmVHcm91cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmVPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICBnZXQgaXNOb3RGb3VuZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzVGFnc01vZGUgJiYgIXRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aDtcbiAgfVxuXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mQWxsT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCk7XG4gICAgY29uc3QgaXNNYXRjaCA9IGxpc3RPZkFsbE9wdGlvbi5pbmRleE9mKHRoaXMubnpTZWFyY2hWYWx1ZSkgPiAtMTtcbiAgICB0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2g7XG4gIH1cblxuICBkcm9wRG93blNjcm9sbChlOiBNb3VzZUV2ZW50LCB1bDogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh1bCAmJiB1bC5zY3JvbGxIZWlnaHQgLSB1bC5zY3JvbGxUb3AgPT09IHVsLmNsaWVudEhlaWdodCkge1xuICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKTtcbiAgICB0aGlzLndhdGNoU3ViT3B0aW9uQ2hhbmdlcygpO1xuICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlR3JvdXAoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gIH1cbn1cbiJdfQ==