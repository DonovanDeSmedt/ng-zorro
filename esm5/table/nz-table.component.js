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
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(renderer, ngZone, elementRef, cdr, nzMeasureScrollbarService, i18n) {
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
    Object.defineProperty(NzTableComponent.prototype, "nzSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._simple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._simple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzFrontPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._frontPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._frontPagination = toBoolean(value);
            this.parseInputData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzWidthConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widthConfig;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isWidthConfigSet = true;
            this._widthConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._footer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isFooterString = !(value instanceof TemplateRef);
            this._footer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzNoResult", {
        get: /**
         * @return {?}
         */
        function () {
            return this._noResult;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isNoResultString = !(value instanceof TemplateRef);
            this._noResult = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzBordered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzShowPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showPagination = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzShowSizeChanger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSizeChanger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSizeChanger = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzHideOnSinglePage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideOnSinglePage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideOnSinglePage = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzShowQuickJumper", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJumper;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJumper = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._scroll = value;
            }
            else {
                this._scroll = { x: null, y: null };
            }
            this.cdr.detectChanges();
            this.setScrollPositionClassName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzData", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (Array.isArray(data)) {
                this.rawData = data;
                this.parseInputData();
            }
            else {
                console.warn('nzData only accept array');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTableComponent.prototype.parseInputData = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(NzTableComponent.prototype, "nzPageIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._pageIndex === value) {
                return;
            }
            this._pageIndex = value;
            if (this.nzFrontPagination) {
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NzTableComponent.prototype.emitPageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.nzPageIndex = index;
        this.nzPageIndexChange.emit(this.nzPageIndex);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    NzTableComponent.prototype.emitPageSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(this.nzPageSize);
    };
    Object.defineProperty(NzTableComponent.prototype, "nzPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._pageSize === value) {
                return;
            }
            this._pageSize = value;
            if (this.nzFrontPagination) {
                this.checkPageIndexBounding();
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTableComponent.prototype.checkPageIndexBounding = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzFrontPagination) {
            /** @type {?} */
            var maxPageIndex = Math.ceil(this.syncData.length / this.nzPageSize);
            /** @type {?} */
            var pageIndex_1 = !this.nzPageIndex ? 1 : (this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex);
            if (pageIndex_1 !== this.nzPageIndex) {
                this._pageIndex = pageIndex_1;
                Promise.resolve().then(function () { return _this.nzPageIndexChange.emit(pageIndex_1); });
            }
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.generateSyncDisplayData = /**
     * @return {?}
     */
    function () {
        this.data = this.syncData.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTableComponent.prototype.syncScrollTable = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            var target = /** @type {?} */ (e.target);
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
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.setScrollPositionClassName = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    NzTableComponent.prototype.setScrollName = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var prefix = 'ant-table-scroll-position';
        /** @type {?} */
        var classList = ['left', 'right', 'middle'];
        classList.forEach(function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.fitScrollBar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollbarWidth = this.nzMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: "-" + scrollbarWidth + "px",
                paddingBottom: "0px"
            };
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Table'); });
        this.fitScrollBar();
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.setScrollPositionClassName(); });
        this.ngZone.runOutsideAngular(function () {
            if (_this.tableHeaderElement
                && _this.tableHeaderElement.nativeElement
                && _this.tableBodyElement
                && _this.tableBodyElement.nativeElement) {
                merge(fromEvent(_this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(_this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(_this.unsubscribe$)).subscribe(function (data) {
                    _this.syncScrollTable(data);
                });
            }
        });
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table',
                    preserveWhitespaces: false,
                    template: "<ng-template #colGroupTemplate>\r\n  <colgroup *ngIf=\"!isWidthConfigSet\">\r\n    <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\r\n  </colgroup>\r\n  <colgroup *ngIf=\"isWidthConfigSet\">\r\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\r\n  </colgroup>\r\n</ng-template>\r\n<ng-template #tableInnerTemplate>\r\n  <div\r\n    #tableHeaderElement\r\n    *ngIf=\"nzScroll.x || nzScroll.y\"\r\n    class=\"ant-table-header\"\r\n    [ngStyle]=\"headerBottomStyle\">\r\n    <table\r\n      [class.ant-table-fixed]=\"nzScroll.x\"\r\n      [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div\r\n    #tableBodyElement\r\n    class=\"ant-table-body\"\r\n    [style.maxHeight]=\"nzScroll.y\"\r\n    [style.overflow-y]=\"nzScroll.y?'scroll':''\"\r\n    [style.overflow-x]=\"nzScroll.x?'auto':''\">\r\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\r\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\r\n      <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\r\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\r\n      </thead>\r\n      <ng-content></ng-content>\r\n    </table>\r\n  </div>\r\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!nzLoading\">\r\n    <span *ngIf=\"!nzNoResult\">{{ locale.emptyText }}</span>\r\n    <ng-container *ngIf=\"nzNoResult\">\r\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ nzNoResult }}</ng-container>\r\n      <ng-template #noResultTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzNoResult\"></ng-template>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\r\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ nzFooter }}</ng-container>\r\n    <ng-template #footerTemplate>\r\n      <ng-template [ngTemplateOutlet]=\"nzFooter\"></ng-template>\r\n    </ng-template>\r\n  </div>\r\n</ng-template>\r\n<div\r\n  class=\"ant-table-wrapper\"\r\n  [class.ant-table-empty]=\"data.length==0\">\r\n  <nz-spin\r\n    [nzDelay]=\"nzLoadingDelay\"\r\n    [nzSpinning]=\"nzLoading\">\r\n    <div>\r\n      <div\r\n        class=\"ant-table\"\r\n        #tableMainElement\r\n        [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\r\n        [class.ant-table-bordered]=\"nzBordered\"\r\n        [class.ant-table-large]=\"nzSize=='default'\"\r\n        [class.ant-table-middle]=\"nzSize=='middle'\"\r\n        [class.ant-table-small]=\"nzSize=='small'\">\r\n        <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\r\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\r\n          <ng-template #titleTemplate>\r\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"ant-table-content\">\r\n          <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\r\n            <div class=\"ant-table-scroll\">\r\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nz-pagination\r\n      *ngIf=\"nzShowPagination&&data.length\"\r\n      [nzInTable]=\"true\"\r\n      [nzShowSizeChanger]=\"nzShowSizeChanger\"\r\n      [nzPageSizeOptions]=\"nzPageSizeOptions\"\r\n      [nzShowQuickJumper]=\"nzShowQuickJumper\"\r\n      [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\r\n      [nzShowTotal]=\"nzShowTotal\"\r\n      [nzSize]=\"(nzSize=='middle'||nzSize=='small')?'small':''\"\r\n      [nzPageSize]=\"nzPageSize\"\r\n      (nzPageSizeChange)=\"emitPageSize($event)\"\r\n      [nzTotal]=\"nzTotal\"\r\n      [nzSimple]=\"nzSimple\"\r\n      [nzPageIndex]=\"nzPageIndex\"\r\n      (nzPageIndexChange)=\"emitPageIndex($event)\">\r\n    </nz-pagination>\r\n  </nz-spin>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzTableComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzMeasureScrollbarService },
        { type: NzI18nService }
    ]; };
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
    return NzTableComponent;
}());
export { NzTableComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUE4VmhELDBCQUFvQixRQUFtQixFQUFVLE1BQWMsRUFBVSxVQUFzQixFQUFVLEdBQXNCLEVBQVUseUJBQW9ELEVBQVUsSUFBbUI7UUFBdE0sYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs0QkFyVm5NLElBQUksT0FBTyxFQUFRO3lCQUN0QixLQUFL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LFVBQVU7Z0JBSFYsaUJBQWlCO2dCQW9CVix5QkFBeUI7Z0JBR3pCLGFBQWE7OztxQ0E0Q25CLFNBQVMsU0FBQyxvQkFBb0I7bUNBQzlCLFNBQVMsU0FBQyxrQkFBa0I7bUNBQzVCLFNBQVMsU0FBQyxrQkFBa0I7c0NBQzVCLGVBQWUsU0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO21DQUVwRCxNQUFNO29DQUNOLE1BQU07OEJBQ04sS0FBSzswQ0FHTCxNQUFNO3lCQUNOLEtBQUs7b0NBRUwsS0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7MkJBRUwsS0FBSztvQ0FTTCxLQUFLO2dDQVVMLEtBQUs7MEJBVUwsS0FBSzsyQkFVTCxLQUFLOzZCQVVMLEtBQUs7NkJBVUwsS0FBSzttQ0FTTCxLQUFLOzRCQVNMLEtBQUs7b0NBU0wsS0FBSztxQ0FTTCxLQUFLO29DQVNMLEtBQUs7MkJBU0wsS0FBSzt5QkFlTCxLQUFLOzhCQXVCTCxLQUFLOzZCQXlCTCxLQUFLO2lDQWtGTCxZQUFZLFNBQUMsZUFBZTs7MkJBeFYvQjs7U0FtQ2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9uei1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aGVhZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRhYmxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgX2JvcmRlcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBwcml2YXRlIF9oaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2Nyb2xsOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBwcml2YXRlIF9mb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBwcml2YXRlIF9ub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcclxuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xyXG4gIHByaXZhdGUgX3dpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2Zyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfc2ltcGxlID0gZmFsc2U7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcclxuICBpc0Zvb3RlclN0cmluZzogYm9vbGVhbjtcclxuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xyXG4gIGlzTm9SZXN1bHRTdHJpbmc6IGJvb2xlYW47XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgbGFzdFNjcm9sbExlZnQgPSAwO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICByYXdEYXRhOiBhbnlbXSA9IFtdO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzeW5jRGF0YTogYW55W10gPSBbXTtcclxuICAvKiogcHVibGljIGRhdGEgZm9yIG5nRm9yIHRyICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGRhdGE6IGFueVtdID0gW107XHJcbiAgaGVhZGVyQm90dG9tU3R5bGU7XHJcbiAgaXNXaWR0aENvbmZpZ1NldCA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcpIHRhYmxlSGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0YWJsZUJvZHlFbGVtZW50JykgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0YWJsZU1haW5FbGVtZW50JykgdGFibGVNYWluRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekN1cnJlbnRQYWdlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBuelNpemU6IHN0cmluZyA9ICdkZWZhdWx0JztcclxuICAvKiogcGFnZSBzaXplIGNoYW5nZXIgc2VsZWN0IHZhbHVlcyAqL1xyXG4gIEBJbnB1dCgpIG56UGFnZVNpemVPcHRpb25zID0gWyAxMCwgMjAsIDMwLCA0MCwgNTAgXTtcclxuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbnpUb3RhbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2ltcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNpbXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaW1wbGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZyb250UGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZnJvbnRQYWdpbmF0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMucGFyc2VJbnB1dERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekZyb250UGFnaW5hdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9mcm9udFBhZ2luYXRpb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBueldpZHRoQ29uZmlnKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5pc1dpZHRoQ29uZmlnU2V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpXaWR0aENvbmZpZygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhDb25maWc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIHRoaXMuaXNGb290ZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xyXG4gICAgdGhpcy5fZm9vdGVyID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpGb290ZXIoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Tm9SZXN1bHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICB0aGlzLmlzTm9SZXN1bHRTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xyXG4gICAgdGhpcy5fbm9SZXN1bHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuek5vUmVzdWx0KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9ub1Jlc3VsdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekJvcmRlcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93UGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1BhZ2luYXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1BhZ2luYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BhZ2luYXRpb247XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93U2l6ZUNoYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dTaXplQ2hhbmdlciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93U2l6ZUNoYW5nZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpIaWRlT25TaW5nbGVQYWdlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlT25TaW5nbGVQYWdlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekhpZGVPblNpbmdsZVBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1F1aWNrSnVtcGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1F1aWNrSnVtcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2Nyb2xsKHZhbHVlOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zY3JvbGwgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNjcm9sbCgpOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCBuekRhdGEoZGF0YTogYW55W10pIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IGRhdGE7XHJcbiAgICAgIHRoaXMucGFyc2VJbnB1dERhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbnpEYXRhIG9ubHkgYWNjZXB0IGFycmF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXJzZUlucHV0RGF0YSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3luY0RhdGEgPSB0aGlzLnJhd0RhdGE7XHJcbiAgICAgIHRoaXMubnpUb3RhbCA9IHRoaXMuc3luY0RhdGEubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5yYXdEYXRhO1xyXG4gICAgICB0aGlzLm56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9wYWdlSW5kZXggPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3BhZ2VJbmRleCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGFnZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xyXG4gIH1cclxuXHJcbiAgZW1pdFBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UGFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XHJcbiAgfVxyXG5cclxuICBlbWl0UGFnZVNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UGFnZVNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQodGhpcy5uelBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UGFnZVNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3BhZ2VTaXplID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy5jaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBhZ2VTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XHJcbiAgfVxyXG5cclxuICBjaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcclxuICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHRoaXMuc3luY0RhdGEubGVuZ3RoIC8gdGhpcy5uelBhZ2VTaXplKTtcclxuICAgICAgY29uc3QgcGFnZUluZGV4ID0gIXRoaXMubnpQYWdlSW5kZXggPyAxIDogKHRoaXMubnpQYWdlSW5kZXggPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiB0aGlzLm56UGFnZUluZGV4KTtcclxuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdChwYWdlSW5kZXgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN5bmNEYXRhLnNsaWNlKCh0aGlzLm56UGFnZUluZGV4IC0gMSkgKiB0aGlzLm56UGFnZVNpemUsIHRoaXMubnpQYWdlSW5kZXggKiB0aGlzLm56UGFnZVNpemUpO1xyXG4gICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzeW5jU2Nyb2xsVGFibGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmICh0YXJnZXQuc2Nyb2xsTGVmdCAhPT0gdGhpcy5sYXN0U2Nyb2xsTGVmdCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xyXG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xyXG4gICAgICBpZiAoKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgJiYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICE9PSAwKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPT09IDApIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ2xlZnQnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcclxuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ3JpZ2h0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdtaWRkbGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsTmFtZShwb3NpdGlvbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWJsZS1zY3JvbGwtcG9zaXRpb24nO1xyXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWyAnbGVmdCcsICdyaWdodCcsICdtaWRkbGUnIF07XHJcbiAgICBjbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke25hbWV9YCk7XHJcbiAgICB9KTtcclxuICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7cG9zaXRpb259YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaXRTY3JvbGxCYXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMubnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZS5zY3JvbGxCYXJXaWR0aDtcclxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xyXG4gICAgICB0aGlzLmhlYWRlckJvdHRvbVN0eWxlID0ge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbSA6IGAtJHtzY3JvbGxiYXJXaWR0aH1weGAsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYDBweGBcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIG9uV2luZG93UmVzaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcclxuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpKTtcclxuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlSGVhZGVyRWxlbWVudFxyXG4gICAgICAgICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnRcclxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIG1lcmdlPE1vdXNlRXZlbnQ+KFxyXG4gICAgICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSxcclxuICAgICAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXHJcbiAgICAgICAgKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZGF0YTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVGFibGUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcbn1cclxuIl19