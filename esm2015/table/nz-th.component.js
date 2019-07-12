/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
/**
 * @record
 */
export function NzThItemInterface() { }
function NzThItemInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
export class NzThComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._sort = null;
        this._filters = [];
        this._showSort = false;
        this._showFilter = false;
        this._showCheckbox = false;
        this._showRowSelection = false;
        this._hasDefaultFilter = false;
        this._customFilter = false;
        this.el = this.elementRef.nativeElement;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get hasActionsClass() {
        return this.nzShowFilter || this.nzShowSort || this.nzCustomFilter;
    }
    /**
     * @return {?}
     */
    get hasFiltersClass() {
        return this.nzShowFilter || this.nzCustomFilter;
    }
    /**
     * @return {?}
     */
    get hasSortersClass() {
        return this.nzShowSort;
    }
    /**
     * @return {?}
     */
    updateSortValue() {
        if (this.nzShowSort) {
            if (this.nzSort === 'descend') {
                this.setSortValue('ascend');
            }
            else if (this.nzSort === 'ascend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('descend');
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCustomFilter(value) {
        this._customFilter = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCustomFilter() {
        return this._customFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSort(value) {
        this._showSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSort() {
        return this._showSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowFilter(value) {
        this._showFilter = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowFilter() {
        return this._showFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowRowSelection(value) {
        this._showRowSelection = toBoolean(value);
        if (this._showRowSelection) {
            this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
        }
    }
    /**
     * @return {?}
     */
    get nzShowRowSelection() {
        return this._showRowSelection;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        /** @type {?} */
        const isExpand = toBoolean(value);
        if (isExpand) {
            this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get nzShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSort(value) {
        this._sort = value;
        if ((value !== 'ascend') && (value !== 'descend')) {
            this.renderer.removeClass(this.el, 'ant-table-column-sort');
        }
        else {
            this.renderer.addClass(this.el, 'ant-table-column-sort');
        }
    }
    /**
     * @return {?}
     */
    get nzSort() {
        return this._sort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSortValue(value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    }
    /**
     * @return {?}
     */
    get filterList() {
        return this.multipleFilterList.filter(item => item.checked).map(item => item.value);
    }
    /**
     * @return {?}
     */
    get filterValue() {
        /** @type {?} */
        const checkedFilter = this.singleFilterList.find(item => item.checked);
        return checkedFilter ? checkedFilter.value : null;
    }
    /**
     * @return {?}
     */
    updateFilterStatus() {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    }
    /**
     * @return {?}
     */
    reset() {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkMultiple(filter) {
        filter.checked = !filter.checked;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkSingle(filter) {
        this.singleFilterList.forEach(item => item.checked = item === filter);
    }
    /**
     * @return {?}
     */
    hideDropDown() {
        this.nzDropDownComponent.nzVisible = false;
        this.nzDropDownComponent.hide();
        this.filterVisible = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dropDownVisibleChange(value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFilters(value) {
        if (Array.isArray(value)) {
            this._filters = value;
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        else {
            console.warn('nzFilters only accept type of Array<{ text: string; value: any }>');
        }
    }
    /**
     * @return {?}
     */
    get nzFilters() {
        return this._filters;
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initMultipleFilterList(force) {
        this.multipleFilterList = this.nzFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initSingleFilterList(force) {
        this.singleFilterList = this.nzFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @return {?}
     */
    checkDefaultFilters() {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    }
}
NzThComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th:not(.nz-disable-th)',
                preserveWhitespaces: false,
                template: "<ng-template #checkboxTemplate>\r\n  <label\r\n    [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\r\n    nz-checkbox\r\n    [(ngModel)]=\"nzChecked\"\r\n    [nzDisabled]=\"nzDisabled\"\r\n    [nzIndeterminate]=\"nzIndeterminate\"\r\n    (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n  </label>\r\n</ng-template>\r\n<div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\r\n  <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\r\n    <ng-container *ngIf=\"nzShowCheckbox\">\r\n      <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n    </ng-container>\r\n    <nz-dropdown nzPlacement=\"bottomLeft\">\r\n      <div nz-dropdown class=\"ant-table-selection-down\">\r\n        <i nz-icon type=\"down\"></i>\r\n      </div>\r\n      <ul nz-menu class=\"ant-table-selection-menu\">\r\n        <li nz-menu-item *ngFor=\"let selection of nzSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\r\n      </ul>\r\n    </nz-dropdown>\r\n  </div>\r\n  <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\r\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n  <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\r\n    <i nz-icon\r\n      type=\"caret-up\"\r\n      class=\"ant-table-column-sorter-up\"\r\n      [class.on]=\"nzSort == 'ascend'\"\r\n      [class.off]=\"nzSort != 'ascend'\"></i>\r\n    <i nz-icon\r\n      type=\"caret-down\"\r\n      class=\"ant-table-column-sorter-down\"\r\n      [class.on]=\"nzSort == 'descend'\"\r\n      [class.off]=\"nzSort != 'descend'\"></i>\r\n  </div>\r\n</div>\r\n<nz-dropdown nzTrigger=\"click\" *ngIf=\"nzShowFilter\" [nzClickHide]=\"false\" [hasFilterButton]=\"true\" (nzVisibleChange)=\"dropDownVisibleChange($event)\">\r\n  <i nz-icon type=\"filter\" theme=\"fill\" [class.ant-table-filter-selected]=\"hasFilterValue\" [class.ant-table-filter-open]=\"filterVisible\" nz-dropdown></i>\r\n  <ul nz-menu>\r\n    <ng-container *ngIf=\"nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\r\n        <label nz-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\r\n        <label nz-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <div class=\"ant-table-filter-dropdown-btns\">\r\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\r\n      <span (click)=\"search()\">{{'Table.filterConfirm' | nzI18n}}</span>\r\n    </a>\r\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\r\n      <span (click)=\"reset()\">{{'Table.filterReset' | nzI18n}}</span>\r\n    </a>\r\n  </div>\r\n</nz-dropdown>\r\n"
            }] }
];
/** @nocollapse */
NzThComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzThComponent.propDecorators = {
    nzDropDownComponent: [{ type: ViewChild, args: [NzDropDownComponent,] }],
    nzSelections: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzSortKey: [{ type: Input }],
    nzFilterMultiple: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzSortChange: [{ type: Output }],
    nzSortChangeWithKey: [{ type: Output }],
    nzFilterChange: [{ type: Output }],
    hasActionsClass: [{ type: HostBinding, args: ['class.ant-table-column-has-actions',] }],
    hasFiltersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-filters',] }],
    hasSortersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-sorters',] }],
    nzCustomFilter: [{ type: Input }],
    nzShowSort: [{ type: Input }],
    nzShowFilter: [{ type: Input }],
    nzShowRowSelection: [{ type: Input }],
    nzLeft: [{ type: Input }],
    nzRight: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzSort: [{ type: Input }],
    nzFilters: [{ type: Input }]
};
function NzThComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThComponent.prototype._sort;
    /** @type {?} */
    NzThComponent.prototype._filters;
    /** @type {?} */
    NzThComponent.prototype._showSort;
    /** @type {?} */
    NzThComponent.prototype._showFilter;
    /** @type {?} */
    NzThComponent.prototype._showCheckbox;
    /** @type {?} */
    NzThComponent.prototype._showRowSelection;
    /** @type {?} */
    NzThComponent.prototype._hasDefaultFilter;
    /** @type {?} */
    NzThComponent.prototype._customFilter;
    /** @type {?} */
    NzThComponent.prototype.el;
    /** @type {?} */
    NzThComponent.prototype.hasFilterValue;
    /** @type {?} */
    NzThComponent.prototype.filterVisible;
    /** @type {?} */
    NzThComponent.prototype.multipleFilterList;
    /** @type {?} */
    NzThComponent.prototype.singleFilterList;
    /** @type {?} */
    NzThComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzThComponent.prototype.nzSelections;
    /** @type {?} */
    NzThComponent.prototype.nzChecked;
    /** @type {?} */
    NzThComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThComponent.prototype.nzSortKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThComponent.prototype.nzWidth;
    /** @type {?} */
    NzThComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChangeWithKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterChange;
    /** @type {?} */
    NzThComponent.prototype.elementRef;
    /** @type {?} */
    NzThComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWtCeEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBeVF4QixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQXhRdkQsSUFBSTt3QkFDZSxFQUFFO3lCQUNqQixLQUFLOzJCQUNILEtBQUs7NkJBQ0gsS0FBSztpQ0FDRCxLQUFLO2lDQUNMLEtBQUs7NkJBQ1QsS0FBSztRQUM3QixVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsMEJBQTBDLEVBQUUsQ0FBQztRQUM3Qyx3QkFBd0MsRUFBRSxDQUFDOztRQUczQyxvQkFBZ0UsRUFBRSxDQUFDO1FBQ25FLGlCQUFxQixLQUFLLENBQUM7UUFDM0Isa0JBQXNCLEtBQUssQ0FBQztRQUM1Qix1QkFBMkIsS0FBSyxDQUFDO1FBRWpDLHdCQUE0QixJQUFJLENBQUM7UUFFakMsdUJBQXFDLElBQUksWUFBWSxFQUFXLENBQUM7UUFDakUsb0JBQWtDLElBQUksWUFBWSxF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QkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxNQUFNOzJCQUNOLE1BQU07a0NBQ04sTUFBTTs2QkFFTixNQUFNOzhCQUVOLFdBQVcsU0FBQyxvQ0FBb0M7OEJBS2hELFdBQVcsU0FBQyxvQ0FBb0M7OEJBS2hELFdBQVcsU0FBQyxvQ0FBb0M7NkJBaUJoRCxLQUFLO3lCQVNMLEtBQUs7MkJBU0wsS0FBSztpQ0FTTCxLQUFLO3FCQWNMLEtBQUs7c0JBV0wsS0FBSzt1QkFXTCxLQUFLOzZCQVVMLEtBQUs7cUJBY0wsS0FBSzt3QkE2RUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG5leHBvcnQgdHlwZSBOelRoRmlsdGVyVHlwZSA9IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55OyBieURlZmF1bHQ/OiBib29sZWFuIH0+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelRoSXRlbUludGVyZmFjZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB2YWx1ZTogYW55O1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAndGg6bm90KC5uei1kaXNhYmxlLXRoKScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGguY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRoQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zb3J0ID0gbnVsbDtcclxuICBwcml2YXRlIF9maWx0ZXJzOiBOelRoRmlsdGVyVHlwZSA9IFtdO1xyXG4gIHByaXZhdGUgX3Nob3dTb3J0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2hvd0ZpbHRlciA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dDaGVja2JveCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcclxuICBwcml2YXRlIF9oYXNEZWZhdWx0RmlsdGVyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY3VzdG9tRmlsdGVyID0gZmFsc2U7XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgaGFzRmlsdGVyVmFsdWUgPSBmYWxzZTtcclxuICBmaWx0ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgbXVsdGlwbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgc2luZ2xlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkNvbXBvbmVudCkgbnpEcm9wRG93bkNvbXBvbmVudDogTnpEcm9wRG93bkNvbXBvbmVudDtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQElucHV0KCkgbnpTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZywgb25TZWxlY3Q6IGFueSB9PiA9IFtdO1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNvcnRLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBuekZpbHRlck11bHRpcGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZVdpdGhLZXkgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT4oKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1hY3Rpb25zJylcclxuICBnZXQgaGFzQWN0aW9uc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaG93RmlsdGVyIHx8IHRoaXMubnpTaG93U29ydCB8fCB0aGlzLm56Q3VzdG9tRmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1maWx0ZXJzJylcclxuICBnZXQgaGFzRmlsdGVyc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaG93RmlsdGVyIHx8IHRoaXMubnpDdXN0b21GaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLXNvcnRlcnMnKVxyXG4gIGdldCBoYXNTb3J0ZXJzQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNob3dTb3J0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU29ydFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xyXG4gICAgICBpZiAodGhpcy5uelNvcnQgPT09ICdkZXNjZW5kJykge1xyXG4gICAgICAgIHRoaXMuc2V0U29ydFZhbHVlKCdhc2NlbmQnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56U29ydCA9PT0gJ2FzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZShudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnZGVzY2VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekN1c3RvbUZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekN1c3RvbUZpbHRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXN0b21GaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dTb3J0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93U29ydCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93U29ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93U29ydDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd0ZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd0ZpbHRlciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93RmlsdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dGaWx0ZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dSb3dTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3Nob3dSb3dTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbi1jdXN0b20nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNob3dSb3dTZWxlY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1Jvd1NlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TGVmdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLWxlZnQtc3RpY2t5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UmlnaHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3JpZ2h0JywgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdyaWdodCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGlzRXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmIChpc0V4cGFuZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1leHBhbmQtaWNvbi10aCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dDaGVja2JveCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fc2hvd0NoZWNrYm94KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd0NoZWNrYm94KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDaGVja2JveDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U29ydCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zb3J0ID0gdmFsdWU7XHJcbiAgICBpZiAoKHZhbHVlICE9PSAnYXNjZW5kJykgJiYgKHZhbHVlICE9PSAnZGVzY2VuZCcpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWNvbHVtbi1zb3J0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTb3J0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcclxuICB9XHJcblxyXG4gIHNldFNvcnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U29ydCA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNvcnRDaGFuZ2VXaXRoS2V5LmVtaXQoeyBrZXk6IHRoaXMubnpTb3J0S2V5LCB2YWx1ZTogdGhpcy5uelNvcnQgfSk7XHJcbiAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KHRoaXMubnpTb3J0KTtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJMaXN0KCk6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XHJcbiAgICBjb25zdCBjaGVja2VkRmlsdGVyID0gdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRGaWx0ZXIgPyBjaGVja2VkRmlsdGVyLnZhbHVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZpbHRlclN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyTGlzdC5sZW5ndGggPiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56RmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XHJcbiAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KHRydWUpO1xyXG4gICAgdGhpcy5zZWFyY2goKTtcclxuICAgIHRoaXMuaGlkZURyb3BEb3duKCk7XHJcbiAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGVja011bHRpcGxlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIGZpbHRlci5jaGVja2VkID0gIWZpbHRlci5jaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTaW5nbGUoZmlsdGVyOiBOelRoSXRlbUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNoZWNrZWQgPSBpdGVtID09PSBmaWx0ZXIpO1xyXG4gIH1cclxuXHJcbiAgaGlkZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50Lm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50LmhpZGUoKTtcclxuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlclZpc2libGUgPSB2YWx1ZTtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RmlsdGVycyh2YWx1ZTogTnpUaEZpbHRlclR5cGUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9maWx0ZXJzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCgpO1xyXG4gICAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ256RmlsdGVycyBvbmx5IGFjY2VwdCB0eXBlIG9mIEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55IH0+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpGaWx0ZXJzKCk6IE56VGhGaWx0ZXJUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xyXG4gIH1cclxuXHJcbiAgaW5pdE11bHRpcGxlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5faGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5faGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrRGVmYXVsdEZpbHRlcnMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpGaWx0ZXJzIHx8IHRoaXMubnpGaWx0ZXJzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5faGFzRGVmYXVsdEZpbHRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcbn1cclxuIl19