/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzThComponent } from './nz-th.component';
export class NzTableComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} nzMeasureScrollbarService
     * @param {?} i18n
     */
    constructor(renderer, ngZone, elementRef, cdr, nzMeasureScrollbarService, i18n) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this._bordered = false;
        this._showPagination = true;
        this._loading = false;
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._hideOnSinglePage = false;
        this._scroll = { x: null, y: null };
        this._pageIndex = 1;
        this._pageSize = 10;
        this._widthConfig = [];
        this._frontPagination = true;
        this._simple = false;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.el = this.elementRef.nativeElement;
        this.lastScrollLeft = 0;
        /* tslint:disable-next-line:no-any */
        this.rawData = [];
        /* tslint:disable-next-line:no-any */
        this.syncData = [];
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.isWidthConfigSet = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        this.nzSize = 'default';
        /**
         * page size changer select values
         */
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzLoadingDelay = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSimple(value) {
        this._simple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSimple() {
        return this._simple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFrontPagination(value) {
        this._frontPagination = toBoolean(value);
        this.parseInputData();
    }
    /**
     * @return {?}
     */
    get nzFrontPagination() {
        return this._frontPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzWidthConfig(value) {
        this.isWidthConfigSet = true;
        this._widthConfig = value;
    }
    /**
     * @return {?}
     */
    get nzWidthConfig() {
        return this._widthConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFooter(value) {
        this.isFooterString = !(value instanceof TemplateRef);
        this._footer = value;
    }
    /**
     * @return {?}
     */
    get nzFooter() {
        return this._footer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNoResult(value) {
        this.isNoResultString = !(value instanceof TemplateRef);
        this._noResult = value;
    }
    /**
     * @return {?}
     */
    get nzNoResult() {
        return this._noResult;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowPagination(value) {
        this._showPagination = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowPagination() {
        return this._showPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzLoading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSizeChanger(value) {
        this._showSizeChanger = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSizeChanger() {
        return this._showSizeChanger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideOnSinglePage(value) {
        this._hideOnSinglePage = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideOnSinglePage() {
        return this._hideOnSinglePage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowQuickJumper(value) {
        this._showQuickJumper = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowQuickJumper() {
        return this._showQuickJumper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzScroll(value) {
        if (isNotNil(value)) {
            this._scroll = value;
        }
        else {
            this._scroll = { x: null, y: null };
        }
        this.cdr.detectChanges();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    get nzScroll() {
        return this._scroll;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set nzData(data) {
        if (Array.isArray(data)) {
            this.rawData = data;
            this.parseInputData();
        }
        else {
            console.warn('nzData only accept array');
        }
    }
    /**
     * @return {?}
     */
    parseInputData() {
        if (this.nzFrontPagination) {
            this.syncData = this.rawData;
            this.nzTotal = this.syncData.length;
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
        else {
            this.data = this.rawData;
            this.nzCurrentPageDataChange.emit(this.data);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageIndex(value) {
        if (this._pageIndex === value) {
            return;
        }
        this._pageIndex = value;
        if (this.nzFrontPagination) {
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    emitPageIndex(index) {
        this.nzPageIndex = index;
        this.nzPageIndexChange.emit(this.nzPageIndex);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    emitPageSize(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(this.nzPageSize);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageSize(value) {
        if (this._pageSize === value) {
            return;
        }
        this._pageSize = value;
        if (this.nzFrontPagination) {
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageSize() {
        return this._pageSize;
    }
    /**
     * @return {?}
     */
    checkPageIndexBounding() {
        if (this.nzFrontPagination) {
            /** @type {?} */
            const maxPageIndex = Math.ceil(this.syncData.length / this.nzPageSize);
            /** @type {?} */
            const pageIndex = !this.nzPageIndex ? 1 : (this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex);
            if (pageIndex !== this.nzPageIndex) {
                this._pageIndex = pageIndex;
                Promise.resolve().then(() => this.nzPageIndexChange.emit(pageIndex));
            }
        }
    }
    /**
     * @return {?}
     */
    generateSyncDisplayData() {
        this.data = this.syncData.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        this.nzCurrentPageDataChange.emit(this.data);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    syncScrollTable(e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            const target = /** @type {?} */ (e.target);
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.tableBodyElement.nativeElement && this.tableHeaderElement) {
                    this.tableHeaderElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderElement.nativeElement && this.tableBodyElement) {
                    this.tableBodyElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    }
    /**
     * @return {?}
     */
    setScrollPositionClassName() {
        if (this.tableBodyElement && this.nzScroll && this.nzScroll.x) {
            if ((this.tableBodyElement.nativeElement.scrollWidth === this.tableBodyElement.nativeElement.clientWidth) && (this.tableBodyElement.nativeElement.scrollWidth !== 0)) {
                this.setScrollName();
            }
            else if (this.tableBodyElement.nativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.tableBodyElement.nativeElement.scrollWidth === (this.tableBodyElement.nativeElement.scrollLeft + this.tableBodyElement.nativeElement.clientWidth)) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    setScrollName(position) {
        /** @type {?} */
        const prefix = 'ant-table-scroll-position';
        /** @type {?} */
        const classList = ['left', 'right', 'middle'];
        classList.forEach(name => {
            this.renderer.removeClass(this.tableMainElement.nativeElement, `${prefix}-${name}`);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, `${prefix}-${position}`);
        }
    }
    /**
     * @return {?}
     */
    fitScrollBar() {
        /** @type {?} */
        const scrollbarWidth = this.nzMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: `-${scrollbarWidth}px`,
                paddingBottom: `0px`
            };
        }
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Table'));
        this.fitScrollBar();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => this.setScrollPositionClassName());
        this.ngZone.runOutsideAngular(() => {
            if (this.tableHeaderElement
                && this.tableHeaderElement.nativeElement
                && this.tableBodyElement
                && this.tableBodyElement.nativeElement) {
                merge(fromEvent(this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
                    this.syncScrollTable(data);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table',
                preserveWhitespaces: false,
                template: "<ng-template #colGroupTemplate>\r\n  <colgroup *ngIf=\"!isWidthConfigSet\">\r\n    <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\r\n  </colgroup>\r\n  <colgroup *ngIf=\"isWidthConfigSet\">\r\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\r\n  </colgroup>\r\n</ng-template>\r\n<ng-template #tableInnerTemplate>\r\n  <div\r\n    #tableHeaderElement\r\n    *ngIf=\"nzScroll.x || nzScroll.y\"\r\n    class=\"ant-table-header\"\r\n    [ngStyle]=\"headerBottomStyle\">\r\n    <table\r\n      [class.ant-table-fixed]=\"nzScroll.x\"\r\n      [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div\r\n    #tableBodyElement\r\n    class=\"ant-table-body\"\r\n    [style.maxHeight]=\"nzScroll.y\"\r\n    [style.overflow-y]=\"nzScroll.y?'scroll':''\"\r\n    [style.overflow-x]=\"nzScroll.x?'auto':''\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\r\n      </thead>\r\n      <ng-content></ng-content>\r\n    </table>\r\n  </div>\r\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!nzLoading\">\r\n    <span *ngIf=\"!nzNoResult\">{{ locale.emptyText }}</span>\r\n    <ng-container *ngIf=\"nzNoResult\">\r\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ nzNoResult }}</ng-container>\r\n      <ng-template #noResultTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzNoResult\"></ng-template>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\r\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ nzFooter }}</ng-container>\r\n    <ng-template #footerTemplate>\r\n      <ng-template [ngTemplateOutlet]=\"nzFooter\"></ng-template>\r\n    </ng-template>\r\n  </div>\r\n</ng-template>\r\n<div\r\n  class=\"ant-table-wrapper\"\r\n  [class.ant-table-empty]=\"data.length==0\">\r\n  <nz-spin\r\n    [nzDelay]=\"nzLoadingDelay\"\r\n    [nzSpinning]=\"nzLoading\">\r\n    <div>\r\n      <div\r\n        class=\"ant-table\"\r\n        #tableMainElement\r\n        [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\r\n        [class.ant-table-bordered]=\"nzBordered\"\r\n        [class.ant-table-large]=\"nzSize=='default'\"\r\n        [class.ant-table-middle]=\"nzSize=='middle'\"\r\n        [class.ant-table-small]=\"nzSize=='small'\">\r\n        <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\r\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\r\n          <ng-template #titleTemplate>\r\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"ant-table-content\">\r\n          <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\r\n            <div class=\"ant-table-scroll\">\r\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nz-pagination\r\n      *ngIf=\"nzShowPagination&&data.length\"\r\n      [nzInTable]=\"true\"\r\n      [nzShowSizeChanger]=\"nzShowSizeChanger\"\r\n      [nzPageSizeOptions]=\"nzPageSizeOptions\"\r\n      [nzShowQuickJumper]=\"nzShowQuickJumper\"\r\n      [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\r\n      [nzShowTotal]=\"nzShowTotal\"\r\n      [nzSize]=\"(nzSize=='middle'||nzSize=='small')?'small':''\"\r\n      [nzPageSize]=\"nzPageSize\"\r\n      (nzPageSizeChange)=\"emitPageSize($event)\"\r\n      [nzTotal]=\"nzTotal\"\r\n      [nzSimple]=\"nzSimple\"\r\n      [nzPageIndex]=\"nzPageIndex\"\r\n      (nzPageIndexChange)=\"emitPageIndex($event)\">\r\n    </nz-pagination>\r\n  </nz-spin>\r\n</div>"
            }] }
];
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzMeasureScrollbarService },
    { type: NzI18nService }
];
NzTableComponent.propDecorators = {
    tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement',] }],
    tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement',] }],
    tableMainElement: [{ type: ViewChild, args: ['tableMainElement',] }],
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzCurrentPageDataChange: [{ type: Output }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzLoadingDelay: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzFrontPagination: [{ type: Input }],
    nzWidthConfig: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzScroll: [{ type: Input }],
    nzData: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
function NzTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTableComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTableComponent.prototype._bordered;
    /** @type {?} */
    NzTableComponent.prototype._showPagination;
    /** @type {?} */
    NzTableComponent.prototype._loading;
    /** @type {?} */
    NzTableComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype._scroll;
    /** @type {?} */
    NzTableComponent.prototype._footer;
    /** @type {?} */
    NzTableComponent.prototype._title;
    /** @type {?} */
    NzTableComponent.prototype._noResult;
    /** @type {?} */
    NzTableComponent.prototype._pageIndex;
    /** @type {?} */
    NzTableComponent.prototype._pageSize;
    /** @type {?} */
    NzTableComponent.prototype._widthConfig;
    /** @type {?} */
    NzTableComponent.prototype._frontPagination;
    /** @type {?} */
    NzTableComponent.prototype._simple;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.isFooterString;
    /** @type {?} */
    NzTableComponent.prototype.isTitleString;
    /** @type {?} */
    NzTableComponent.prototype.isNoResultString;
    /** @type {?} */
    NzTableComponent.prototype.el;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.rawData;
    /** @type {?} */
    NzTableComponent.prototype.syncData;
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /** @type {?} */
    NzTableComponent.prototype.isWidthConfigSet;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /**
     * page size changer select values
     * @type {?}
     */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.renderer;
    /** @type {?} */
    NzTableComponent.prototype.ngZone;
    /** @type {?} */
    NzTableComponent.prototype.elementRef;
    /** @type {?} */
    NzTableComponent.prototype.cdr;
    /** @type {?} */
    NzTableComponent.prototype.nzMeasureScrollbarService;
    /** @type {?} */
    NzTableComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFzVjNCLFlBQW9CLFFBQW1CLEVBQVUsTUFBYyxFQUFVLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSx5QkFBb0QsRUFBVSxJQUFtQjtRQUF0TSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXJW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O2dDQUNOLE1BQU07MEJBQ04sS0FBSztzQ0FHTCxNQUFNO3FCQUNOLEtBQUs7Z0NBRUwsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBRUwsS0FBSztnQ0FTTCxLQUFLOzRCQVVMLEtBQUs7c0JBVUwsS0FBSzt1QkFVTCxLQUFLO3lCQVVMLEtBQUs7eUJBVUwsS0FBSzsrQkFTTCxLQUFLO3dCQVNMLEtBQUs7Z0NBU0wsS0FBSztpQ0FTTCxLQUFLO2dDQVNMLEtBQUs7dUJBU0wsS0FBSztxQkFlTCxLQUFLOzBCQXVCTCxLQUFLO3lCQXlCTCxLQUFLOzZCQWtGTCxZQUFZLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWJsZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGFibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF9ib3JkZXJlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Njcm9sbDogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgcHJpdmF0ZSBfZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgcHJpdmF0ZSBfbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgX3BhZ2VJbmRleCA9IDE7XHJcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDtcclxuICBwcml2YXRlIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIF9mcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIG56VGhlYWRDb21wb25lbnQ6IE56VGhlYWRDb21wb25lbnQ7XHJcbiAgaXNGb290ZXJTdHJpbmc6IGJvb2xlYW47XHJcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcclxuICBpc05vUmVzdWx0U3RyaW5nOiBib29sZWFuO1xyXG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIGxhc3RTY3JvbGxMZWZ0ID0gMDtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcmF3RGF0YTogYW55W10gPSBbXTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgc3luY0RhdGE6IGFueVtdID0gW107XHJcbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBkYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGhlYWRlckJvdHRvbVN0eWxlO1xyXG4gIGlzV2lkdGhDb25maWdTZXQgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCd0YWJsZUhlYWRlckVsZW1lbnQnKSB0YWJsZUhlYWRlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVCb2R5RWxlbWVudCcpIHRhYmxlQm9keUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVNYWluRWxlbWVudCcpIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56VGhDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRoQ29tcG9uZW50PjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIsIHJhbmdlOiBbIG51bWJlciwgbnVtYmVyIF0gfT47XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDdXJyZW50UGFnZURhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcbiAgLyoqIHBhZ2Ugc2l6ZSBjaGFuZ2VyIHNlbGVjdCB2YWx1ZXMgKi9cclxuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAsIDUwIF07XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIG56VG90YWw6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaW1wbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NpbXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaW1wbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpGcm9udFBhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Zyb250UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnBhcnNlSW5wdXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpGcm9udFBhZ2luYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnJvbnRQYWdpbmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpXaWR0aENvbmZpZyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuaXNXaWR0aENvbmZpZ1NldCA9IHRydWU7XHJcbiAgICB0aGlzLl93aWR0aENvbmZpZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56V2lkdGhDb25maWcoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XHJcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpGb290ZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICB0aGlzLmlzRm9vdGVyU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICAgIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Rm9vdGVyKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9mb290ZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek5vUmVzdWx0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgdGhpcy5pc05vUmVzdWx0U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICAgIHRoaXMuX25vUmVzdWx0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpOb1Jlc3VsdCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9SZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekJvcmRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpCb3JkZXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1BhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dQYWdpbmF0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dQYWdpbmF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdpbmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1NpemVDaGFuZ2VyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93U2l6ZUNoYW5nZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1NpemVDaGFuZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaXplQ2hhbmdlcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SGlkZU9uU2luZ2xlUGFnZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faGlkZU9uU2luZ2xlUGFnZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpIaWRlT25TaW5nbGVQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dRdWlja0p1bXBlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dRdWlja0p1bXBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNjcm9sbCh2YWx1ZTogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9KSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3Njcm9sbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTY3JvbGwoKTogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9IHtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgbnpEYXRhKGRhdGE6IGFueVtdKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnBhcnNlSW5wdXREYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ256RGF0YSBvbmx5IGFjY2VwdCBhcnJheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFyc2VJbnB1dERhdGEoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xyXG4gICAgICB0aGlzLnN5bmNEYXRhID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgICB0aGlzLm56VG90YWwgPSB0aGlzLnN5bmNEYXRhLmxlbmd0aDtcclxuICAgICAgdGhpcy5jaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMucmF3RGF0YTtcclxuICAgICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fcGFnZUluZGV4ID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VJbmRleDtcclxuICB9XHJcblxyXG4gIGVtaXRQYWdlSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubnpQYWdlSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZW1pdFBhZ2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uelBhZ2VTaXplID0gc2l6ZTtcclxuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9wYWdlU2l6ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpO1xyXG4gICAgICB0aGlzLmdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQYWdlU2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XHJcbiAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbCh0aGlzLnN5bmNEYXRhLmxlbmd0aCAvIHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9ICF0aGlzLm56UGFnZUluZGV4ID8gMSA6ICh0aGlzLm56UGFnZUluZGV4ID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogdGhpcy5uelBhZ2VJbmRleCk7XHJcbiAgICAgIGlmIChwYWdlSW5kZXggIT09IHRoaXMubnpQYWdlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlSW5kZXg7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQocGFnZUluZGV4KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5zeW5jRGF0YS5zbGljZSgodGhpcy5uelBhZ2VJbmRleCAtIDEpICogdGhpcy5uelBhZ2VTaXplLCB0aGlzLm56UGFnZUluZGV4ICogdGhpcy5uelBhZ2VTaXplKTtcclxuICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3luY1Njcm9sbFRhYmxlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbExlZnQgIT09IHRoaXMubGFzdFNjcm9sbExlZnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcclxuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcclxuICAgICAgaWYgKCh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpICYmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAhPT0gMCkpIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdsZWZ0Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09ICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdyaWdodCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbWlkZGxlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNjcm9sbE5hbWUocG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFibGUtc2Nyb2xsLXBvc2l0aW9uJztcclxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsgJ2xlZnQnLCAncmlnaHQnLCAnbWlkZGxlJyBdO1xyXG4gICAgY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtuYW1lfWApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocG9zaXRpb24pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke3Bvc2l0aW9ufWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml0U2Nyb2xsQmFyKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGg7XHJcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcclxuICAgICAgdGhpcy5oZWFkZXJCb3R0b21TdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b20gOiBgLSR7c2Nyb2xsYmFyV2lkdGh9cHhgLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGAwcHhgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvbldpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XHJcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKSk7XHJcbiAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50YWJsZUhlYWRlckVsZW1lbnRcclxuICAgICAgICAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50XHJcbiAgICAgICAgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICBtZXJnZTxNb3VzZUV2ZW50PihcclxuICAgICAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJyksXHJcbiAgICAgICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxyXG4gICAgICAgICkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGRhdGE6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3luY1Njcm9sbFRhYmxlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==