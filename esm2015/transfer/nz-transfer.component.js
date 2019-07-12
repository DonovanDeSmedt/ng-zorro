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
export class NzTransferComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
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
        this.nzCanMove = (arg) => of(arg.list);
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
        this.handleLeftSelectAll = (checked) => this.handleSelect('left', checked);
        this.handleRightSelectAll = (checked) => this.handleSelect('right', checked);
        this.handleLeftSelect = (item) => this.handleSelect('left', item.checked, item);
        this.handleRightSelect = (item) => this.handleSelect('right', item.checked, item);
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = () => this.moveTo('left');
        this.moveToRight = () => this.moveTo('right');
    }
    /**
     * @return {?}
     */
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(record => {
            if (record.direction === 'right') {
                this.rightDataSource.push(record);
            }
            else {
                this.leftDataSource.push(record);
            }
        });
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
    }
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    handleSelect(direction, checked, item) {
        /** @type {?} */
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    moveTo(direction) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const moveList = datasource.filter(item => item.checked === true && !item.disabled);
        this.nzCanMove({ direction, list: moveList })
            .subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => i.checked = false));
    }
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    truthMoveTo(direction, list) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            targetDatasource.push(item);
            datasource.splice(datasource.indexOf(item), 1);
        }
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
        this.markForCheckAllList();
    }
    /**
     * @return {?}
     */
    markForCheckAllList() {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(i => i.markForCheck());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Transfer');
            this.markForCheckAllList();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('nzDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
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
NzTransferComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFhdkUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUF3SDlCLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXZIaEQsSUFBSSxPQUFPLEVBQVE7O1FBSTFDLGNBQWMsRUFBRSxDQUFDO1FBRWpCLGtCQUFhLEVBQUUsQ0FBQztRQUNoQixtQkFBYyxFQUFFLENBQUM7O1FBSWpCLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsb0JBQXdDLEVBQUUsQ0FBQztRQUMzQyxnQkFBOEIsQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDekMsb0JBQWtDLEVBQUUsQ0FBQztRQUlyQyxpQkFBMkUsQ0FBQyxHQUFvQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FB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WUFBWSxFQUFFOzs7O0lBVWQsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVySXRlbSwgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsIFRyYW5zZmVyU2VsZWN0Q2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyYW5zZmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10cmFuc2Zlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXJdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkcmVuKE56VHJhbnNmZXJMaXN0Q29tcG9uZW50KVxyXG4gIHByaXZhdGUgbGlzdHMgITogUXVlcnlMaXN0PE56VHJhbnNmZXJMaXN0Q29tcG9uZW50PjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgbGVmdEZpbHRlciA9ICcnO1xyXG4gIHJpZ2h0RmlsdGVyID0gJyc7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsgJycsICcnIF07XHJcbiAgQElucHV0KCkgbnpPcGVyYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56TGlzdFN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpJdGVtVW5pdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56SXRlbXNVbml0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpDYW5Nb3ZlOiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0gKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBvZihhcmcubGlzdCk7XHJcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgLy8gZXZlbnRzXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGRhdGFcclxuXHJcbiAgLy8gbGVmdFxyXG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyByaWdodFxyXG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XHJcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xyXG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxlZnREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENoZWNrZWREYXRhKGRpcmVjdGlvbjogc3RyaW5nKTogVHJhbnNmZXJJdGVtW10ge1xyXG4gICAgcmV0dXJuIHRoaXNbIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnIF0uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcclxuXHJcbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgaXRlbS5jaGVja2VkLCBpdGVtKTtcclxuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGl0ZW0uY2hlY2tlZCwgaXRlbSk7XHJcblxyXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsIGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW0/OiBUcmFuc2Zlckl0ZW0pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb24sIGxpc3QubGVuZ3RoKTtcclxuICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbiwgY2hlY2tlZCwgbGlzdCwgaXRlbSB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZpbHRlckNoYW5nZShyZXQ6IHsgZGlyZWN0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXHJcblxyXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcclxuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IHN0cmluZywgY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXNbIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0QWN0aXZlJyA6ICdyaWdodEFjdGl2ZScgXSA9ICh0eXBlb2YgY291bnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5nZXRDaGVja2VkRGF0YShkaXJlY3Rpb24pLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGggOiBjb3VudCkgPiAwO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvTGVmdCA9ICgpID0+IHRoaXMubW92ZVRvKCdsZWZ0Jyk7XHJcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcclxuXHJcbiAgbW92ZVRvKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcclxuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IG1vdmVMaXN0ID0gZGF0YXNvdXJjZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUgJiYgIWl0ZW0uZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBuZXdNb3ZlTGlzdCA9PiB0aGlzLnRydXRoTW92ZVRvKGRpcmVjdGlvbiwgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKSksXHJcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSBmYWxzZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogc3RyaW5nLCBsaXN0OiBUcmFuc2Zlckl0ZW1bXSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XHJcbiAgICBjb25zdCB0YXJnZXREYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLmxlZnREYXRhU291cmNlIDogdGhpcy5yaWdodERhdGFTb3VyY2U7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGFyZ2V0RGF0YXNvdXJjZS5wdXNoKGl0ZW0pO1xyXG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24pO1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZnJvbTogb3Bwb3NpdGVEaXJlY3Rpb24sXHJcbiAgICAgIHRvICA6IGRpcmVjdGlvbixcclxuICAgICAgbGlzdFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrQWxsTGlzdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5saXN0cykge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0cy5mb3JFYWNoKGkgPT4gaS5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUcmFuc2ZlcicpO1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCduekRhdGFTb3VyY2UnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcclxuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==