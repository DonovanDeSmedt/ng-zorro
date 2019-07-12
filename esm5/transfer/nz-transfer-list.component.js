/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzTransferListComponent = /** @class */ (function () {
    // #endregion
    function NzTransferListComponent(el, updateHostClassService, cdr) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cdr = cdr;
        // #region fields
        this.direction = '';
        this.titleText = '';
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // #endregion
        // #region styles
        this.prefixCls = 'ant-transfer-list';
        // #endregion
        // #region select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
    }
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-with-footer"] = !!this.footer,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzTransferListComponent.prototype.onHandleSelectAll = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.dataSource.forEach(function (item) {
            if (!item.disabled && !item._hiden) {
                item.checked = status;
            }
        });
        this.updateCheckStatus();
        this.handleSelectAll.emit(status);
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.updateCheckStatus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validCount = this.dataSource.filter(function (w) { return !w.disabled; }).length;
        this.stat.checkCount = this.dataSource.filter(function (w) { return w.checked && !w.disabled; }).length;
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w._hiden; }).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    NzTransferListComponent.prototype.handleFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach(function (item) {
            item._hiden = value.length > 0 && !_this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w._hiden; }).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.handleFilter('');
    };
    /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    NzTransferListComponent.prototype.matchFilter = /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NzTransferListComponent.prototype._handleSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.disabled || item.disabled) {
            return;
        }
        item.checked = !item.checked;
        this.updateCheckStatus();
        this.handleSelect.emit(item);
    };
    NzTransferListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer-list',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<div class=\"ant-transfer-list-header\">\r\n  <label nz-checkbox [nzChecked]=\"stat.checkAll\" (nzCheckedChange)=\"onHandleSelectAll($event)\"\r\n    [nzIndeterminate]=\"stat.checkHalf\" [nzDisabled]=\"stat.shownCount == 0 || disabled\">\r\n  </label>\r\n  <span class=\"ant-transfer-list-header-selected\">\r\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\r\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\r\n  </span>\r\n</div>\r\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\r\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\r\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\r\n    <div nz-transfer-search\r\n      (valueChanged)=\"handleFilter($event)\"\r\n      (valueClear)=\"handleClear()\"\r\n      [placeholder]=\"searchPlaceholder\"\r\n      [disabled]=\"disabled\"\r\n      [value]=\"filter\"></div>\r\n  </div>\r\n  <ul class=\"ant-transfer-list-content\">\r\n    <ng-container *ngFor=\"let item of dataSource\">\r\n      <li *ngIf=\"!item._hiden\" (click)=\"_handleSelect(item)\"\r\n        class=\"ant-transfer-list-content-item\" [ngClass]=\"{'ant-transfer-list-content-item-disabled': disabled || item.disabled}\">\r\n        <label nz-checkbox [nzChecked]=\"item.checked\" [nzDisabled]=\"disabled || item.disabled\">\r\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\r\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\r\n        </label>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <div *ngIf=\"dataSource.length === 0\" class=\"ant-transfer-list-body-not-found\">{{ notFoundContent }}</div>\r\n</div>\r\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\r\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
    NzTransferListComponent.propDecorators = {
        direction: [{ type: Input }],
        titleText: [{ type: Input }],
        dataSource: [{ type: Input }],
        itemUnit: [{ type: Input }],
        itemsUnit: [{ type: Input }],
        filter: [{ type: Input }],
        disabled: [{ type: Input }],
        showSearch: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        notFoundContent: [{ type: Input }],
        filterOption: [{ type: Input }],
        render: [{ type: Input }],
        footer: [{ type: Input }],
        handleSelectAll: [{ type: Output }],
        handleSelect: [{ type: Output }],
        filterChange: [{ type: Output }]
    };
    return NzTransferListComponent;
}());
export { NzTransferListComponent };
function NzTransferListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.el;
    /** @type {?} */
    NzTransferListComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzTransferListComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJhbnNmZXIvbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUF5R3BGLGFBQWE7SUFFYixpQ0FBb0IsRUFBYyxFQUFVLHNCQUFnRCxFQUFVLEdBQXNCO1FBQXhHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBNUY1SCxpQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLGlCQUFxQixFQUFFLENBQUM7UUFFeEIsa0JBQXNDLEVBQUUsQ0FBQztRQUV6QyxnQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFxQixFQUFFLENBQUM7UUFDeEIsY0FBa0IsRUFBRSxDQUFDOztRQVdyQix1QkFBNEQsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4RixvQkFBOEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRixvQkFBc0YsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7O1FBTXpHLGlCQUFZLG1CQUFtQixDQUFDOzs7UUFjaEMsWUFBTztZQUNMLFFBQVEsRUFBSSxLQUFLO1lBQ2pCLFNBQVMsRUFBRyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO0tBZ0REOzs7O0lBakVELDZDQUFXOzs7SUFBWDs7O1FBQ0UsSUFBTSxRQUFRO1lBQ1osR0FB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OzZCQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLO2tDQUdMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNOztrQ0FsRFQ7O1NBMkJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2Zlckl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdHJhbnNmZXItbGlzdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10cmFuc2Zlci1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uID0gJyc7XHJcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGl0ZW1Vbml0ID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbXNVbml0ID0gJyc7XHJcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbHRlck9wdGlvbjogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8vIGV2ZW50c1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcmVmaXhDbHMgPSAnYW50LXRyYW5zZmVyLWxpc3QnO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30td2l0aC1mb290ZXJgIF06ICEhdGhpcy5mb290ZXJcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHNlbGVjdCBhbGxcclxuXHJcbiAgc3RhdCA9IHtcclxuICAgIGNoZWNrQWxsICA6IGZhbHNlLFxyXG4gICAgY2hlY2tIYWxmIDogZmFsc2UsXHJcbiAgICBjaGVja0NvdW50OiAwLFxyXG4gICAgc2hvd25Db3VudDogMFxyXG4gIH07XHJcblxyXG4gIG9uSGFuZGxlU2VsZWN0QWxsKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5faGlkZW4pIHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSBzdGF0dXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcclxuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWxpZENvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGg7XHJcbiAgICB0aGlzLnN0YXQuY2hlY2tDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgJiYgIXcuZGlzYWJsZWQpLmxlbmd0aDtcclxuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xyXG4gICAgdGhpcy5zdGF0LmNoZWNrQWxsID0gdmFsaWRDb3VudCA+IDAgJiYgdmFsaWRDb3VudCA9PT0gdGhpcy5zdGF0LmNoZWNrQ291bnQ7XHJcbiAgICB0aGlzLnN0YXQuY2hlY2tIYWxmID0gdGhpcy5zdGF0LmNoZWNrQ291bnQgPiAwICYmICF0aGlzLnN0YXQuY2hlY2tBbGw7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc2VhcmNoXHJcblxyXG4gIGhhbmRsZUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uX2hpZGVuID0gdmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5tYXRjaEZpbHRlcih2YWx1ZSwgaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUZpbHRlcignJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hdGNoRmlsdGVyKHRleHQ6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJPcHRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyT3B0aW9uKHRleHQsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW0udGl0bGUuaW5jbHVkZXModGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICgnZm9vdGVyJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU2VsZWN0KGl0ZW06IFRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xyXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xyXG4gICAgdGhpcy5oYW5kbGVTZWxlY3QuZW1pdChpdGVtKTtcclxuICB9XHJcbn1cclxuIl19