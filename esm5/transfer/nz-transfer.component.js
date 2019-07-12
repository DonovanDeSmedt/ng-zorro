/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzTransferListComponent } from './nz-transfer-list.component';
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzCanMove = function (arg) { return of(arg.list); };
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
        this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
        this.handleLeftSelect = function (item) { return _this.handleSelect('left', item.checked, item); };
        this.handleRightSelect = function (item) { return _this.handleSelect('right', item.checked, item); };
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = function () { return _this.moveTo('left'); };
        this.moveToRight = function () { return _this.moveTo('right'); };
    }
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(function (record) {
            if (record.direction === 'right') {
                _this.rightDataSource.push(record);
            }
            else {
                _this.leftDataSource.push(record);
            }
        });
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
        this.nzCanMove({ direction: direction, list: moveList })
            .subscribe(function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; })); }, function () { return moveList.forEach(function (i) { return i.checked = false; }); });
    };
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                targetDatasource.push(item);
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(function (i) { return i.markForCheck(); });
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('nzDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    preserveWhitespaces: false,
                    template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\r\n  [titleText]=\"nzTitles[0]\"\r\n  [dataSource]=\"leftDataSource\"\r\n  [filter]=\"leftFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleLeftSelect($event)\"\r\n  (handleSelectAll)=\"handleLeftSelectAll($event)\"></nz-transfer-list>\r\n<div class=\"ant-transfer-operation\">\r\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon type=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\r\n  </button>\r\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon type=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\r\n  </button>\r\n</div>\r\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\r\n  [titleText]=\"nzTitles[1]\"\r\n  [dataSource]=\"rightDataSource\"\r\n  [filter]=\"rightFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleRightSelect($event)\"\r\n  (handleSelectAll)=\"handleRightSelectAll($event)\"></nz-transfer-list>",
                    host: {
                        '[class.ant-transfer]': 'true',
                        '[class.ant-transfer-disabled]': 'nzDisabled'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
    return NzTransferComponent;
}());
export { NzTransferComponent };
function NzTransferComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /** @type {?} */
    NzTransferComponent.prototype.cdr;
    /** @type {?} */
    NzTransferComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBbUlyRSxhQUFhO0lBRWIsNkJBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBdkUsaUJBQ0M7UUFEbUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXZIaEQsSUFBSSxPQUFPLEVBQVE7O1FBSTFDLGNBQWMsRUFBRSxDQUFDO1FBRWpCLGtCQUFhLEVBQUUsQ0FBQztRQUNoQixtQkFBYyxFQUFFLENBQUM7O1FBSWpCLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsb0JBQXdDLEVBQUUsQ0FBQztRQUMzQyxnQkFBOEIsQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDekMsb0JBQWtDLEVBQUUsQ0FBQztRQUlyQyxpQkFBMkUsVUFBQyxHQUFvQixJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBWixD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O29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBbENDLGlCQUFpQjtnQkFtQlYsYUFBYTs7O3dCQWtCbkIsWUFBWSxTQUFDLHVCQUF1Qjs2QkFVcEMsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUdMLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzs7UUFsQkcsWUFBWSxFQUFFOzs7O1FBVWQsWUFBWSxFQUFFOzs7OEJBM0QxQjs7U0FxQ2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVySXRlbSwgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsIFRyYW5zZmVyU2VsZWN0Q2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyYW5zZmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10cmFuc2Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXJdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkcmVuKE56VHJhbnNmZXJMaXN0Q29tcG9uZW50KVxyXG4gIHByaXZhdGUgbGlzdHMgITogUXVlcnlMaXN0PE56VHJhbnNmZXJMaXN0Q29tcG9uZW50PjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgbGVmdEZpbHRlciA9ICcnO1xyXG4gIHJpZ2h0RmlsdGVyID0gJyc7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsgJycsICcnIF07XHJcbiAgQElucHV0KCkgbnpPcGVyYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56TGlzdFN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpJdGVtVW5pdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56SXRlbXNVbml0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpDYW5Nb3ZlOiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0gKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBvZihhcmcubGlzdCk7XHJcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgLy8gZXZlbnRzXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGRhdGFcclxuXHJcbiAgLy8gbGVmdFxyXG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyByaWdodFxyXG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XHJcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xyXG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxlZnREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENoZWNrZWREYXRhKGRpcmVjdGlvbjogc3RyaW5nKTogVHJhbnNmZXJJdGVtW10ge1xyXG4gICAgcmV0dXJuIHRoaXNbIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnIF0uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcclxuXHJcbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgaXRlbS5jaGVja2VkLCBpdGVtKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGl0ZW0uY2hlY2tlZCwgaXRlbSk7XHJcblxyXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsIGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW0/OiBUcmFuc2Zlckl0ZW0pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb24sIGxpc3QubGVuZ3RoKTtcclxuICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbiwgY2hlY2tlZCwgbGlzdCwgaXRlbSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbHRlckNoYW5nZShyZXQ6IHsgZGlyZWN0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXHJcblxyXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcclxuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IHN0cmluZywgY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXNbIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0QWN0aXZlJyA6ICdyaWdodEFjdGl2ZScgXSA9ICh0eXBlb2YgY291bnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDaGVja2VkRGF0YShkaXJlY3Rpb24pLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGggOiBjb3VudCkgPiAwO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvTGVmdCA9ICgpID0+IHRoaXMubW92ZVRvKCdsZWZ0Jyk7XHJcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcclxuXHJcbiAgbW92ZVRvKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IG1vdmVMaXN0ID0gZGF0YXNvdXJjZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUgJiYgIWl0ZW0uZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBuZXdNb3ZlTGlzdCA9PiB0aGlzLnRydXRoTW92ZVRvKGRpcmVjdGlvbiwgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKSksXHJcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSBmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogc3RyaW5nLCBsaXN0OiBUcmFuc2Zlckl0ZW1bXSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XHJcbiAgICBjb25zdCB0YXJnZXREYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLmxlZnREYXRhU291cmNlIDogdGhpcy5yaWdodERhdGFTb3VyY2U7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGFyZ2V0RGF0YXNvdXJjZS5wdXNoKGl0ZW0pO1xyXG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24pO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZnJvbTogb3Bwb3NpdGVEaXJlY3Rpb24sXHJcbiAgICAgIHRvICA6IGRpcmVjdGlvbixcclxuICAgICAgbGlzdFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5saXN0cykge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0cy5mb3JFYWNoKGkgPT4gaS5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUcmFuc2ZlcicpO1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCduekRhdGFTb3VyY2UnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==