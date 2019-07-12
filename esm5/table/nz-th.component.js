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
var NzThComponent = /** @class */ (function () {
    function NzThComponent(elementRef, renderer) {
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
    Object.defineProperty(NzThComponent.prototype, "hasActionsClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowFilter || this.nzShowSort || this.nzCustomFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "hasFiltersClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowFilter || this.nzCustomFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "hasSortersClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowSort;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateSortValue = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(NzThComponent.prototype, "nzCustomFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customFilter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customFilter = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showFilter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFilter = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowRowSelection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showRowSelection;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showRowSelection = toBoolean(value);
            if (this._showRowSelection) {
                this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzLeft", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.setStyle(this.el, 'left', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzRight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.setStyle(this.el, 'right', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.removeStyle(this.el, 'right');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isExpand = toBoolean(value);
            if (isExpand) {
                this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCheckbox = toBoolean(value);
            if (this._showCheckbox) {
                this.renderer.addClass(this.el, 'ant-table-selection-column');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sort = value;
            if ((value !== 'ascend') && (value !== 'descend')) {
                this.renderer.removeClass(this.el, 'ant-table-column-sort');
            }
            else {
                this.renderer.addClass(this.el, 'ant-table-column-sort');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.setSortValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    };
    Object.defineProperty(NzThComponent.prototype, "filterList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multipleFilterList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedFilter = this.singleFilterList.find(function (item) { return item.checked; });
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateFilterStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkMultiple = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        filter.checked = !filter.checked;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkSingle = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.singleFilterList.forEach(function (item) { return item.checked = item === filter; });
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.hideDropDown = /**
     * @return {?}
     */
    function () {
        this.nzDropDownComponent.nzVisible = false;
        this.nzDropDownComponent.hide();
        this.filterVisible = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.dropDownVisibleChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    };
    Object.defineProperty(NzThComponent.prototype, "nzFilters", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filters;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                this._filters = value;
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            else {
                console.warn('nzFilters only accept type of Array<{ text: string; value: any }>');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initMultipleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.multipleFilterList = this.nzFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initSingleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.singleFilterList = this.nzFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.checkDefaultFilters = /**
     * @return {?}
     */
    function () {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    NzThComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.nz-disable-th)',
                    preserveWhitespaces: false,
                    template: "<ng-template #checkboxTemplate>\r\n  <label\r\n    [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\r\n    nz-checkbox\r\n    [(ngModel)]=\"nzChecked\"\r\n    [nzDisabled]=\"nzDisabled\"\r\n    [nzIndeterminate]=\"nzIndeterminate\"\r\n    (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n  </label>\r\n</ng-template>\r\n<div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\r\n  <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\r\n    <ng-container *ngIf=\"nzShowCheckbox\">\r\n      <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n    </ng-container>\r\n    <nz-dropdown nzPlacement=\"bottomLeft\">\r\n      <div nz-dropdown class=\"ant-table-selection-down\">\r\n        <i nz-icon type=\"down\"></i>\r\n      </div>\r\n      <ul nz-menu class=\"ant-table-selection-menu\">\r\n        <li nz-menu-item *ngFor=\"let selection of nzSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\r\n      </ul>\r\n    </nz-dropdown>\r\n  </div>\r\n  <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\r\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n  <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\r\n    <i nz-icon\r\n      type=\"caret-up\"\r\n      class=\"ant-table-column-sorter-up\"\r\n      [class.on]=\"nzSort == 'ascend'\"\r\n      [class.off]=\"nzSort != 'ascend'\"></i>\r\n    <i nz-icon\r\n      type=\"caret-down\"\r\n      class=\"ant-table-column-sorter-down\"\r\n      [class.on]=\"nzSort == 'descend'\"\r\n      [class.off]=\"nzSort != 'descend'\"></i>\r\n  </div>\r\n</div>\r\n<nz-dropdown nzTrigger=\"click\" *ngIf=\"nzShowFilter\" [nzClickHide]=\"false\" [hasFilterButton]=\"true\" (nzVisibleChange)=\"dropDownVisibleChange($event)\">\r\n  <i nz-icon type=\"filter\" theme=\"fill\" [class.ant-table-filter-selected]=\"hasFilterValue\" [class.ant-table-filter-open]=\"filterVisible\" nz-dropdown></i>\r\n  <ul nz-menu>\r\n    <ng-container *ngIf=\"nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\r\n        <label nz-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\r\n        <label nz-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <div class=\"ant-table-filter-dropdown-btns\">\r\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\r\n      <span (click)=\"search()\">{{'Table.filterConfirm' | nzI18n}}</span>\r\n    </a>\r\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\r\n      <span (click)=\"reset()\">{{'Table.filterReset' | nzI18n}}</span>\r\n    </a>\r\n  </div>\r\n</nz-dropdown>\r\n"
                }] }
    ];
    /** @nocollapse */
    NzThComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return NzThComponent;
}());
export { NzThComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUEyUnRFLHVCQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQXhRdkQsSUFBSTt3QkFDZSxFQUFFO3lCQUNqQixLQUFLOzJCQUNILEtBQUs7NkJBQ0gsS0FBSztpQ0FDRCxLQUFLO2lDQUNMLEtBQUs7NkJBQ1QsS0FBSztRQUM3QixVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsMEJBQTBDLEVBQUUsQ0FBQztRQUM3Qyx3QkFBd0MsRUFBRSxDQUFDOztRQUczQyxvQkFBZ0UsRUFBRSxDQUFDO1FBQ25FLGlCQUFxQixLQUFLLENBQUM7UUFDM0Isa0JBQXNCLEtBQUssQ0FBQztRQUM1Qix1QkFBMkIsS0FBSyxDQUFDO1FBRWpDLHdCQUE0QixJQUFJLENBQUM7UUFFakMsdUJBQXFDLElBQUksWUFBWSxFQUFXLENBQUM7UUFDakUsb0JBQWtDLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsMkJBQXlDLElB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QyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM3RSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Z0JBN1FGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFhLHdCQUF3QjtvQkFDN0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsbS9GQUE2QztpQkFDOUM7Ozs7Z0JBN0JDLFVBQVU7Z0JBS1YsU0FBUzs7O3NDQXVDUixTQUFTLFNBQUMsbUJBQW1COytCQUU3QixLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLE1BQU07K0JBQ04sTUFBTTtzQ0FDTixNQUFNO2lDQUVOLE1BQU07a0NBRU4sV0FBVyxTQUFDLG9DQUFvQztrQ0FLaEQsV0FBVyxTQUFDLG9DQUFvQztrQ0FLaEQsV0FBVyxTQUFDLG9DQUFvQztpQ0FpQmhELEtBQUs7NkJBU0wsS0FBSzsrQkFTTCxLQUFLO3FDQVNMLEtBQUs7eUJBY0wsS0FBSzswQkFXTCxLQUFLOzJCQVdMLEtBQUs7aUNBVUwsS0FBSzt5QkFjTCxLQUFLOzRCQTZFTCxLQUFLOzt3QkE1UFI7O1NBZ0NhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24uY29tcG9uZW50JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuZXhwb3J0IHR5cGUgTnpUaEZpbHRlclR5cGUgPSBBcnJheTx7IHRleHQ6IHN0cmluZzsgdmFsdWU6IGFueTsgYnlEZWZhdWx0PzogYm9vbGVhbiB9PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpUaEl0ZW1JbnRlcmZhY2Uge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdmFsdWU6IGFueTtcclxuICBjaGVja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ3RoOm5vdCgubnotZGlzYWJsZS10aCknLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfc29ydCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZmlsdGVyczogTnpUaEZpbHRlclR5cGUgPSBbXTtcclxuICBwcml2YXRlIF9zaG93U29ydCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dGaWx0ZXIgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zaG93Q2hlY2tib3ggPSBmYWxzZTtcclxuICBwcml2YXRlIF9zaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGFzRGVmYXVsdEZpbHRlciA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2N1c3RvbUZpbHRlciA9IGZhbHNlO1xyXG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIGhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XHJcbiAgZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gIG11bHRpcGxlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIHNpbmdsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICBAVmlld0NoaWxkKE56RHJvcERvd25Db21wb25lbnQpIG56RHJvcERvd25Db21wb25lbnQ6IE56RHJvcERvd25Db21wb25lbnQ7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56U2VsZWN0aW9uczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIG9uU2VsZWN0OiBhbnkgfT4gPSBbXTtcclxuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTb3J0S2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJNdWx0aXBsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2VXaXRoS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10gfCBhbnk+KCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtYWN0aW9ucycpXHJcbiAgZ2V0IGhhc0FjdGlvbnNDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2hvd0ZpbHRlciB8fCB0aGlzLm56U2hvd1NvcnQgfHwgdGhpcy5uekN1c3RvbUZpbHRlcjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtZmlsdGVycycpXHJcbiAgZ2V0IGhhc0ZpbHRlcnNDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2hvd0ZpbHRlciB8fCB0aGlzLm56Q3VzdG9tRmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1zb3J0ZXJzJylcclxuICBnZXQgaGFzU29ydGVyc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaG93U29ydDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNvcnRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2hvd1NvcnQpIHtcclxuICAgICAgaWYgKHRoaXMubnpTb3J0ID09PSAnZGVzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnYXNjZW5kJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelNvcnQgPT09ICdhc2NlbmQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2Rlc2NlbmQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDdXN0b21GaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDdXN0b21GaWx0ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93U29ydCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1NvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1NvcnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NvcnQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dGaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dGaWx0ZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd0ZpbHRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93RmlsdGVyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93Um93U2VsZWN0aW9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Um93U2VsZWN0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9zaG93Um93U2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93Um93U2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekxlZnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtbGVmdC1zdGlja3knKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGVmdCcsIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelJpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdyaWdodCcsIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1yaWdodC1zdGlja3knKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncmlnaHQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBpc0V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAoaXNFeHBhbmQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd0NoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Q2hlY2tib3ggPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3Nob3dDaGVja2JveCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNob3dDaGVja2JveCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93Q2hlY2tib3g7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNvcnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc29ydCA9IHZhbHVlO1xyXG4gICAgaWYgKCh2YWx1ZSAhPT0gJ2FzY2VuZCcpICYmICh2YWx1ZSAhPT0gJ2Rlc2NlbmQnKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtY29sdW1uLXNvcnQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U29ydCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XHJcbiAgfVxyXG5cclxuICBzZXRTb3J0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNvcnQgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTb3J0Q2hhbmdlV2l0aEtleS5lbWl0KHsga2V5OiB0aGlzLm56U29ydEtleSwgdmFsdWU6IHRoaXMubnpTb3J0IH0pO1xyXG4gICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdCh0aGlzLm56U29ydCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVyTGlzdCgpOiBOelRoSXRlbUludGVyZmFjZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgY29uc3QgY2hlY2tlZEZpbHRlciA9IHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcclxuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlckxpc3QubGVuZ3RoID4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSBpc05vdE5pbCh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlckxpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlRHJvcERvd24oKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KHRydWUpO1xyXG4gICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCh0cnVlKTtcclxuICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICB0aGlzLmhpZGVEcm9wRG93bigpO1xyXG4gICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jaGVja2VkID0gaXRlbSA9PT0gZmlsdGVyKTtcclxuICB9XHJcblxyXG4gIGhpZGVEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpEcm9wRG93bkNvbXBvbmVudC5uelZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMubnpEcm9wRG93bkNvbXBvbmVudC5oaWRlKCk7XHJcbiAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRyb3BEb3duVmlzaWJsZUNoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gdmFsdWU7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZpbHRlcnModmFsdWU6IE56VGhGaWx0ZXJUeXBlKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZmlsdGVycyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QoKTtcclxuICAgICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCduekZpbHRlcnMgb25seSBhY2NlcHQgdHlwZSBvZiBBcnJheTx7IHRleHQ6IHN0cmluZzsgdmFsdWU6IGFueSB9PicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RmlsdGVycygpOiBOelRoRmlsdGVyVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcclxuICB9XHJcblxyXG4gIGluaXRNdWx0aXBsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xyXG4gICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0U2luZ2xlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xyXG4gICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0RlZmF1bHRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56RmlsdGVycyB8fCB0aGlzLm56RmlsdGVycy5sZW5ndGggPT09IDAgfHwgIXRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==