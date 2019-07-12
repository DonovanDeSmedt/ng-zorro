/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n) {
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._simple = false;
        this._hideOnSinglePage = false;
        this._pageSize = 10;
        this._pageSizeOptions = [10, 20, 30, 40];
        this._pageIndex = 1;
        this.firstIndex = 1;
        this.pages = [];
        this.nzInTable = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzPaginationComponent.prototype, "nzItemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemRender;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemRender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowSizeChanger", {
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
    Object.defineProperty(NzPaginationComponent.prototype, "nzHideOnSinglePage", {
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
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowQuickJumper", {
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
    Object.defineProperty(NzPaginationComponent.prototype, "nzSimple", {
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
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSizeOptions;
        },
        /** page size changer select values */
        set: /**
         * page size changer select values
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.length) {
                this._pageSizeOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageIndex", {
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
            if (value > this.lastIndex) {
                this._pageIndex = this.lastIndex;
            }
            else if (value < this.firstIndex) {
                this._pageIndex = this.firstIndex;
            }
            else {
                this._pageIndex = Number(value);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSize", {
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
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            /** @type {?} */
            var pageIndexOverflow = this.checkLastIndexOverflow();
            if (pageIndexOverflow) {
                this.nzPageIndex = this.lastIndex;
                this.nzPageIndexChange.emit(this.lastIndex);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._total = value;
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === this.nzPageIndex) {
            return;
        }
        if (index < this.firstIndex) {
            this.nzPageIndex = this.firstIndex;
        }
        else if (index > this.lastIndex) {
            this.nzPageIndex = this.lastIndex;
        }
        else {
            this.nzPageIndex = index;
        }
        this.nzPageIndexChange.emit(this.nzPageIndex);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex - 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex + 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreOne = /**
     * @return {?}
     */
    function () {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex - 1);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextOne = /**
     * @return {?}
     */
    function () {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex + 1);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
    };
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleKeyDown = /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (e, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var inputValue = target.value;
        /** @type {?} */
        var currentInputValue = this.nzPageIndex;
        /** @type {?} */
        var value;
        if (inputValue === '') {
            value = inputValue;
        }
        else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
        }
        else {
            value = Number(inputValue);
        }
        this.handleChange(value, target, clearInputValue);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NzPaginationComponent.prototype.isValid = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return isInteger(page) && (page >= 1) && (page !== this.nzPageIndex) && (page <= this.lastIndex);
    };
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleChange = /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    function (value, target, clearInputValue) {
        /** @type {?} */
        var page = value;
        if (this.isValid(page)) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.checkLastIndexOverflow = /**
     * @return {?}
     */
    function () {
        return this.nzPageIndex > this.lastIndex;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    NzPaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpPages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            var current = +this.nzPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    NzPaginationComponent.prototype.min = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        return Math.min(val1, val2);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Pagination'); });
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination',
                    preserveWhitespaces: false,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon type=\"left\"></i></a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon type=\"right\"></i></a>\r\n  <a *ngIf=\"type=='page'\">{{page}}</a>\r\n</ng-template>\r\n<ng-container *ngIf=\"(nzHideOnSinglePage&&(nzTotal>nzPageSize))||!nzHideOnSinglePage\">\r\n  <ul\r\n    *ngIf=\"nzSimple\"\r\n    [class.ant-table-pagination]=\"nzInTable\"\r\n    class=\"ant-pagination ant-pagination-simple\">\r\n    <li\r\n      title=\"{{ locale.prev_page }}\"\r\n      class=\"ant-pagination-prev\"\r\n      (click)=\"jumpPreOne()\"\r\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n    </li>\r\n    <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\r\n      <input\r\n        #simplePagerInput\r\n        [ngModel]=\"nzPageIndex\"\r\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\r\n        size=\"3\">\r\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\r\n      {{ lastIndex }}\r\n    </li>\r\n    <li\r\n      title=\"{{ locale.next_page }}\"\r\n      class=\"ant-pagination-next\"\r\n      (click)=\"jumpNextOne()\"\r\n      [class.ant-pagination-disabled]=\"isLastIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n    </li>\r\n  </ul>\r\n  <ul\r\n    *ngIf=\"!nzSimple\"\r\n    [class.mini]=\"nzSize=='small'\"\r\n    [class.ant-table-pagination]=\"nzInTable\"\r\n    class=\"ant-pagination\">\r\n    <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"nzShowTotal\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:[(nzPageIndex-1)*nzPageSize+1, min(nzPageIndex*nzPageSize, nzTotal)] }\">\r\n      </ng-template>\r\n    </li>\r\n    <li\r\n      title=\"{{ locale.prev_page }}\"\r\n      class=\"ant-pagination-prev\"\r\n      (click)=\"jumpPreOne()\"\r\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n    </li>\r\n    <li\r\n      [attr.title]=\"firstIndex\"\r\n      class=\"ant-pagination-item\"\r\n      (click)=\"jumpPage(firstIndex)\"\r\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\r\n    </li>\r\n    <li\r\n      [attr.title]=\"locale.prev_5\"\r\n      (click)=\"jumpPreFive()\"\r\n      class=\"ant-pagination-jump-prev\"\r\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex-3>firstIndex)\">\r\n      <a class=\"ant-pagination-item-link\">\r\n        <div class=\"ant-pagination-item-container\">\r\n          <i nz-icon type=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\r\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li\r\n      *ngFor=\"let page of pages\"\r\n      [attr.title]=\"page.index\"\r\n      class=\"ant-pagination-item\"\r\n      (click)=\"jumpPage(page.index)\"\r\n      [class.ant-pagination-item-active]=\"nzPageIndex==page.index\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\r\n    </li>\r\n    <li\r\n      [attr.title]=\"locale.next_5\"\r\n      (click)=\"jumpNextFive()\"\r\n      class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\r\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex+3<lastIndex)\">\r\n      <a class=\"ant-pagination-item-link\">\r\n        <div class=\"ant-pagination-item-container\">\r\n          <i nz-icon type=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\r\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li\r\n      [attr.title]=\"lastIndex\"\r\n      class=\"ant-pagination-item\"\r\n      (click)=\"jumpPage(lastIndex)\"\r\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\r\n      [class.ant-pagination-item-active]=\"isLastIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\r\n    </li>\r\n    <li\r\n      title=\"{{ locale.next_page }}\"\r\n      class=\"ant-pagination-next\"\r\n      (click)=\"jumpNextOne()\"\r\n      [class.ant-pagination-disabled]=\"isLastIndex\">\r\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n    </li>\r\n    <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper||nzShowSizeChanger\">\r\n      <nz-select\r\n        *ngIf=\"nzShowSizeChanger\"\r\n        [nzSize]=\"nzSize=='small'?'small':''\"\r\n        class=\"ant-pagination-options-size-changer\"\r\n        [ngModel]=\"nzPageSize\"\r\n        (ngModelChange)=\"onPageSizeChange($event)\">\r\n        <nz-option\r\n          *ngFor=\"let option of nzPageSizeOptions\"\r\n          [nzLabel]=\"option + locale.items_per_page\"\r\n          [nzValue]=\"option\">\r\n        </nz-option>\r\n        <nz-option\r\n          *ngIf=\"nzPageSizeOptions.indexOf(nzPageSize)==-1\"\r\n          [nzLabel]=\"nzPageSize + locale.items_per_page\"\r\n          [nzValue]=\"nzPageSize\">\r\n        </nz-option>\r\n      </nz-select>\r\n      <div class=\"ant-pagination-options-quick-jumper\"\r\n        *ngIf=\"nzShowQuickJumper\">\r\n        {{ locale.jump_to }}\r\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\r\n        {{ locale.page }}\r\n      </div>\r\n    </div>\r\n  </ul>\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzPaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    NzPaginationComponent.propDecorators = {
        _itemRender: [{ type: ViewChild, args: ['renderItemTemplate',] }],
        nzShowTotal: [{ type: Input }],
        nzInTable: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzItemRender: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }],
        nzTotal: [{ type: Input }]
    };
    return NzPaginationComponent;
}());
export { NzPaginationComponent };
function NzPaginationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPaginationComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype._itemRender;
    /** @type {?} */
    NzPaginationComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype._simple;
    /** @type {?} */
    NzPaginationComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSize;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype._total;
    /** @type {?} */
    NzPaginationComponent.prototype._pageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.pages;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzInTable;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQThQdEQsK0JBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7NEJBdFBoQixJQUFJLE9BQU8sRUFBUTs7UUFFMUMsY0FBYyxFQUFFLENBQUM7Z0NBRVUsS0FBSztnQ0FDTCxLQUFLO3VCQUNkLEtBQUs7aUNBQ0ssS0FBSzt5QkFDYixFQUFFO2dDQUNLLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzBCQUV4QixDQUFDO1FBQ3RCLGtCQUFhLENBQUMsQ0FBQztRQUNmLGFBQVEsRUFBRSxDQUFDO1FBRVgsaUJBQXFCLEtBQUssQ0FBQztRQUUzQix3QkFBNEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRSx5QkFBNkQsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQXFPL0U7SUFuT0Qsc0JBQ0ksK0NBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7O1FBUEQsVUFDaUIsS0FBeUU7WUFD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RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7O2dCQXRRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGVBQWU7b0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHM0TEFBcUQ7aUJBQ3REOzs7O2dCQU5RLGFBQWE7Ozs4QkFXbkIsU0FBUyxTQUFDLG9CQUFvQjs4QkFXOUIsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUNBQ0wsTUFBTTtvQ0FDTixNQUFNOytCQUVOLEtBQUs7b0NBU0wsS0FBSztxQ0FTTCxLQUFLO29DQVNMLEtBQUs7MkJBU0wsS0FBSztvQ0FVTCxLQUFLOzhCQVdMLEtBQUs7NkJBbUJMLEtBQUs7MEJBa0JMLEtBQUs7O2dDQTFJUjs7U0F1QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc0ludGVnZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcGFnaW5hdGlvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgcHJpdmF0ZSBfaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+O1xyXG4gIHByaXZhdGUgX3Nob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2hpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xyXG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAgXTtcclxuICBwcml2YXRlIF90b3RhbDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3BhZ2VJbmRleCA9IDE7XHJcbiAgZmlyc3RJbmRleCA9IDE7XHJcbiAgcGFnZXMgPSBbXTtcclxuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcclxuICBASW5wdXQoKSBuekluVGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNpemU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpJdGVtUmVuZGVyKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT4pIHtcclxuICAgIHRoaXMuX2l0ZW1SZW5kZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuekl0ZW1SZW5kZXIoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+IHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtUmVuZGVyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93U2l6ZUNoYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dTaXplQ2hhbmdlciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93U2l6ZUNoYW5nZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpIaWRlT25TaW5nbGVQYWdlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlT25TaW5nbGVQYWdlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekhpZGVPblNpbmdsZVBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1F1aWNrSnVtcGVyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd1F1aWNrSnVtcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2ltcGxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaW1wbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2ltcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZTtcclxuICB9XHJcblxyXG4gIC8qKiBwYWdlIHNpemUgY2hhbmdlciBzZWxlY3QgdmFsdWVzICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQYWdlU2l6ZU9wdGlvbnModmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGFnZVNpemVPcHRpb25zKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZU9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fcGFnZUluZGV4ID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPiB0aGlzLmxhc3RJbmRleCkge1xyXG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcclxuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gdGhpcy5maXJzdEluZGV4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQYWdlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcGFnZVNpemUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcclxuICAgIGNvbnN0IHBhZ2VJbmRleE92ZXJmbG93ID0gdGhpcy5jaGVja0xhc3RJbmRleE92ZXJmbG93KCk7XHJcbiAgICBpZiAocGFnZUluZGV4T3ZlcmZsb3cpIHtcclxuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xyXG4gICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5sYXN0SW5kZXgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelBhZ2VTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRvdGFsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvdGFsID0gdmFsdWU7XHJcbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VG90YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbDtcclxuICB9XHJcblxyXG4gIGp1bXBQYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5uelBhZ2VJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5maXJzdEluZGV4KSB7XHJcbiAgICAgIHRoaXMubnpQYWdlSW5kZXggPSB0aGlzLmZpcnN0SW5kZXg7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gdGhpcy5sYXN0SW5kZXgpIHtcclxuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubnpQYWdlSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAganVtcFByZUZpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggLSA1KTtcclxuICB9XHJcblxyXG4gIGp1bXBOZXh0Rml2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCArIDUpO1xyXG4gIH1cclxuXHJcbiAganVtcFByZU9uZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRmlyc3RJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIGp1bXBOZXh0T25lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNMYXN0SW5kZXgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLm56UGFnZVNpemUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50LCBpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY2xlYXJJbnB1dFZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBjdXJyZW50SW5wdXRWYWx1ZSA9IHRoaXMubnpQYWdlSW5kZXg7XHJcbiAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHZhbHVlID0gaW5wdXRWYWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4oTnVtYmVyKGlucHV0VmFsdWUpKSkge1xyXG4gICAgICB2YWx1ZSA9IGN1cnJlbnRJbnB1dFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSh2YWx1ZSwgdGFyZ2V0LCBjbGVhcklucHV0VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZChwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0ludGVnZXIocGFnZSkgJiYgKHBhZ2UgPj0gMSkgJiYgKHBhZ2UgIT09IHRoaXMubnpQYWdlSW5kZXgpICYmIChwYWdlIDw9IHRoaXMubGFzdEluZGV4KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNsZWFySW5wdXRWYWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgcGFnZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZChwYWdlKSkge1xyXG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZTtcclxuICAgICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubnpQYWdlSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsZWFySW5wdXRWYWx1ZSkge1xyXG4gICAgICB0YXJnZXQudmFsdWUgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tMYXN0SW5kZXhPdmVyZmxvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56UGFnZUluZGV4ID4gdGhpcy5sYXN0SW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogZ2VuZXJhdGUgaW5kZXhlcyBsaXN0ICovXHJcbiAgYnVpbGRJbmRleGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG1wUGFnZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMubGFzdEluZGV4IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMubnpQYWdlSW5kZXg7XHJcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5tYXgoMiwgY3VycmVudCAtIDIpO1xyXG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgMiwgdGhpcy5sYXN0SW5kZXggLSAxKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAyKSB7XHJcbiAgICAgICAgcmlnaHQgPSA1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5sYXN0SW5kZXggLSBjdXJyZW50IDw9IDIpIHtcclxuICAgICAgICBsZWZ0ID0gdGhpcy5sYXN0SW5kZXggLSA0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XHJcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2VzID0gdG1wUGFnZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5sYXN0SW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNGaXJzdEluZGV4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMuZmlyc3RJbmRleDtcclxuICB9XHJcblxyXG4gIG1pbih2YWwxOiBudW1iZXIsIHZhbDI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4odmFsMSwgdmFsMik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdQYWdpbmF0aW9uJykpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=