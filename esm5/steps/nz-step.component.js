/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._status = 'wait';
        this._currentIndex = 0;
        this.el = this.elementRef.nativeElement;
        this.oldAPIIcon = true;
        this.isCustomStatus = false;
        this.isDescriptionString = true;
        this.isTitleString = true;
        this.isIconString = true;
        this.last = false;
        this.showProcessDot = false;
        this.direction = 'horizontal';
        this.outStatus = 'process';
        this.index = 0;
    }
    Object.defineProperty(NzStepComponent.prototype, "nzTitle", {
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
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                if (typeof value === 'string') {
                    /** @type {?} */
                    var str = /** @type {?} */ (value);
                    this.oldAPIIcon = str.indexOf('anticon') > -1;
                }
                else {
                    this.oldAPIIcon = true;
                }
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                if (current > this.index) {
                    this._status = 'finish';
                }
                else if (current === this.index) {
                    if (this.outStatus) {
                        this._status = this.outStatus;
                    }
                }
                else {
                    this._status = 'wait';
                }
            }
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-steps-item'] = true,
            _a["ant-steps-item-wait"] = this.nzStatus === 'wait',
            _a["ant-steps-item-process"] = this.nzStatus === 'process',
            _a["ant-steps-item-finish"] = this.nzStatus === 'finish',
            _a["ant-steps-item-error"] = this.nzStatus === 'error',
            _a['ant-steps-custom'] = !!this.nzIcon,
            _a['ant-steps-next-error'] = this.outStatus === 'error' && this.currentIndex === this.index + 1,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-step',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n</ng-template>\n<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\">\n      <i nz-icon type=\"check\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\">\n      <i nz-icon type=\"close\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">\n      {{ index + 1 }}\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzIcon\" [ngTemplateOutletContext]=\"nzCtx\"></ng-template>\n      </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate || processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status: nzStatus, index: index }\"\n      ></ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        nzTitle: [{ type: Input }],
        nzCtx: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzDescription: [{ type: Input }]
    };
    return NzStepComponent;
}());
export { NzStepComponent };
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype._description;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype._title;
    /** @type {?} */
    NzStepComponent.prototype.el;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype.isDescriptionString;
    /** @type {?} */
    NzStepComponent.prototype.isTitleString;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzCtx;
    /** @type {?} */
    NzStepComponent.prototype.elementRef;
    /** @type {?} */
    NzStepComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQXNIcEYseUJBQW9CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3VCQTFHcEYsTUFBTTs2QkFDQSxDQUFDO2tCQUlDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTswQkFDMUMsSUFBSTs4QkFDQSxLQUFLO21DQUNBLElBQUk7NkJBQ1YsSUFBSTs0QkFDTCxJQUFJO29CQUNaLEtBQUs7OEJBQ0ssS0FBSzt5QkFDVixZQUFZO3lCQUNaLFNBQVM7cUJBQ2IsQ0FBQztLQTJGaUc7SUF2RjFHLHNCQUNJLG9DQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7OztPQUFBO0lBU0Qsc0JBQ0ksbUNBQU07Ozs7UUFlVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFsQkQsVUFDVyxLQUEwQztZQUNuRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJ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QTRCOUIsU0FBUyxTQUFDLG9CQUFvQjswQkFHOUIsS0FBSzt3QkFVTCxLQUFLO3lCQUdMLEtBQUs7MkJBb0JMLEtBQUs7Z0NBV0wsS0FBSzs7MEJBN0VSOztTQWFhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIFN0ZXBOZ0NsYXNzVHlwZSA9IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXN0ZXAnLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcENvbXBvbmVudCB7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9pY29uOiBTdGVwTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmcgPSB0cnVlO1xuICBpc1RpdGxlU3RyaW5nID0gdHJ1ZTtcbiAgaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgbGFzdCA9IGZhbHNlO1xuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcbiAgaW5kZXggPSAwO1xuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnKSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG56Q3R4OiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SWNvbih2YWx1ZTogU3RlcE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgICB0aGlzLm9sZEFQSUljb24gPSBzdHIuaW5kZXhPZignYW50aWNvbicpID4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9sZEFQSUljb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpJY29uKCk6IFN0ZXBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Rlc2NyaXB0aW9uU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RGVzY3JpcHRpb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xuICB9XG5cbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBjdXJyZW50O1xuICAgIGlmICghdGhpcy5pc0N1c3RvbVN0YXR1cykge1xuICAgICAgaWYgKGN1cnJlbnQgPiB0aGlzLmluZGV4KSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICdmaW5pc2gnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSB0aGlzLmluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLm91dFN0YXR1cykge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMub3V0U3RhdHVzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnd2FpdCc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWydhbnQtc3RlcHMtaXRlbSddOiB0cnVlLFxuICAgICAgW2BhbnQtc3RlcHMtaXRlbS13YWl0YF06IHRoaXMubnpTdGF0dXMgPT09ICd3YWl0JyxcbiAgICAgIFtgYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc2BdOiB0aGlzLm56U3RhdHVzID09PSAncHJvY2VzcycsXG4gICAgICBbYGFudC1zdGVwcy1pdGVtLWZpbmlzaGBdOiB0aGlzLm56U3RhdHVzID09PSAnZmluaXNoJyxcbiAgICAgIFtgYW50LXN0ZXBzLWl0ZW0tZXJyb3JgXTogdGhpcy5uelN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIFsnYW50LXN0ZXBzLWN1c3RvbSddOiAhIXRoaXMubnpJY29uLFxuICAgICAgWydhbnQtc3RlcHMtbmV4dC1lcnJvciddOiB0aGlzLm91dFN0YXR1cyA9PT0gJ2Vycm9yJyAmJiB0aGlzLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5pbmRleCArIDFcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XG59XG4iXX0=