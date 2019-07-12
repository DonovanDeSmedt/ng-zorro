/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeLinecap = 'round';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = function (percent) { return percent + "%"; };
        this.isStatusSet = false;
        this.isStrokeWidthSet = false;
        this.isFormatSet = false;
        this.isGapDegreeSet = false;
        this.isGapPositionSet = false;
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzSuccessPercent = 0;
    }
    Object.defineProperty(NzProgressComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
                this._strokeWidth = 6;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzFormat", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.isFormatSet = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzPercent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = value;
            if (isNotNil(value)) {
                /** @type {?} */
                var fillAll = parseInt(value.toString(), 10) >= 100;
                if (fillAll && !this.isStatusSet) {
                    this._status = 'success';
                }
                else {
                    this._status = this._cacheStatus;
                }
                this.updatePathStyles();
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._strokeWidth = value;
                this.isStrokeWidthSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._status = value;
                this._cacheStatus = value;
                this.isStatusSet = true;
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            if (!this.isStrokeWidthSet) {
                if (this.nzType !== 'line') {
                    this._strokeWidth = 6;
                }
            }
            if (this.nzType === 'dashboard') {
                if (!this.isGapPositionSet) {
                    this._gapPosition = 'bottom';
                }
                if (!this.isGapDegreeSet) {
                    this._gapDegree = 75;
                }
            }
            this.updateIcon();
            this.updatePathStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapDegree", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapDegree;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapDegree = value;
                this.isGapDegreeSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapPosition = value;
                this.isGapPositionSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeLinecap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeLinecap;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeLinecap = value;
            this.updatePathStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCirCleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (this.nzGapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: len - this.nzGapDegree + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.nzPercent / 100) * (len - this.nzGapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        var ret = '';
        if (this.nzStatus === 'success') {
            ret = 'check';
        }
        if (this.nzStatus === 'exception') {
            ret = 'close';
        }
        if (ret) {
            if (!isCircle) {
                ret += '-circle';
                this.iconTheme = 'fill';
            }
            else {
                this.iconTheme = 'outline';
            }
        }
        this.icon = ret;
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
    NzProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-progress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"(nzStatus=='exception')||(nzStatus=='success')&&(!isFormatSet); else formatTemplate\">\r\n      <!-- Theme is handled in type here. -->\r\n      <i nz-icon [type]=\"icon\" [theme]=\"iconTheme\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ nzFormat(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n<div [ngClass]=\"'ant-progress ant-progress-status-'+nzStatus\"\r\n  [class.ant-progress-line]=\"nzType=='line'\"\r\n  [class.ant-progress-small]=\"nzSize=='small'\"\r\n  [class.ant-progress-show-info]=\"nzShowInfo\"\r\n  [class.ant-progress-circle]=\"isCirCleStyle\">\r\n  <div *ngIf=\"nzType=='line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div class=\"ant-progress-bg\"\r\n          [style.width.%]=\"nzPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.background]=\"nzStrokeColor\"\r\n          [style.height.px]=\"nzStrokeWidth\">\r\n        </div>\r\n        <div class=\"ant-progress-success-bg\"\r\n          [style.width.%]=\"nzSuccessPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.height.px]=\"nzStrokeWidth\"></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n  <div\r\n    [style.width.px]=\"this.nzWidth\"\r\n    [style.height.px]=\"this.nzWidth\"\r\n    [style.fontSize.px]=\"this.nzWidth*0.15+6\"\r\n    class=\"ant-progress-inner\"\r\n    *ngIf=\"isCirCleStyle\">\r\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\r\n      <path\r\n        class=\"ant-progress-circle-trail\"\r\n        stroke=\"#f3f3f3\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke-width]=\"nzStrokeWidth\"\r\n        [ngStyle]=\"trailPathStyle\"\r\n        [attr.d]=\"pathString\">\r\n      </path>\r\n      <path\r\n        class=\"ant-progress-circle-path\"\r\n        [attr.d]=\"pathString\"\r\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[nzStatus]\"\r\n        [attr.stroke-width]=\"nzPercent?nzStrokeWidth:0\"\r\n        [ngStyle]=\"strokePathStyle\">\r\n      </path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>"
                }] }
    ];
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzSuccessPercent: [{ type: Input }],
        nzStrokeColor: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzPercent: [{ type: Input }],
        nzStrokeWidth: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzType: [{ type: Input }],
        nzGapDegree: [{ type: Input }],
        nzGapPosition: [{ type: Input }],
        nzStrokeLinecap: [{ type: Input }]
    };
    return NzProgressComponent;
}());
export { NzProgressComponent };
function NzProgressComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzProgressComponent.prototype._gapDegree;
    /** @type {?} */
    NzProgressComponent.prototype._gapPosition;
    /** @type {?} */
    NzProgressComponent.prototype._percent;
    /** @type {?} */
    NzProgressComponent.prototype._status;
    /** @type {?} */
    NzProgressComponent.prototype._cacheStatus;
    /** @type {?} */
    NzProgressComponent.prototype._strokeLinecap;
    /** @type {?} */
    NzProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype._size;
    /** @type {?} */
    NzProgressComponent.prototype._type;
    /** @type {?} */
    NzProgressComponent.prototype._format;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.iconTheme;
    /** @type {?} */
    NzProgressComponent.prototype.isStatusSet;
    /** @type {?} */
    NzProgressComponent.prototype.isStrokeWidthSet;
    /** @type {?} */
    NzProgressComponent.prototype.isFormatSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapDegreeSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapPositionSet;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7MEJBUXZCLENBQUM7NEJBQzRCLEtBQUs7d0JBQ3BDLENBQUM7dUJBQ29CLFFBQVE7NEJBQ0gsUUFBUTs4QkFDQyxPQUFPOzRCQUN0QyxDQUFDO3FCQUNSLFNBQVM7cUJBQ1csTUFBTTt1QkFDeEIsVUFBQyxPQUFlLElBQWEsT0FBRyxPQUFPLE1BQUcsRUFBYixDQUFhO1FBTTVELG1CQUFjLEtBQUssQ0FBQztRQUNwQix3QkFBbUIsS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEtBQUssQ0FBQztRQUNwQixzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixLQUFLLENBQUM7UUFDekIsc0JBQWlCO1lBQ2YsTUFBTSxFQUFLLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFJLFNBQVM7U0FDckIsQ0FBQztRQUNGLGtCQUFzQixJQUFJLENBQUM7UUFDM0IsZUFBbUIsR0FBRyxDQUFDO1FBQ3ZCLHdCQUE0QixDQUFDLENBQUM7O0lBRzlCLHNCQUNJLHVDQUFNOzs7O1FBT1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBVkQsVUFDVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1NB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QkFFTCxLQUFLOzJCQVlMLEtBQUs7NEJBWUwsS0FBSztnQ0FtQkwsS0FBSzsyQkFhTCxLQUFLO3lCQWNMLEtBQUs7OEJBd0JMLEtBQUs7Z0NBY0wsS0FBSztrQ0FhTCxLQUFLOzs4QkF6S1I7O1NBaUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5leHBvcnQgdHlwZSBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdzdWNjZXNzJyB8ICdleGNlcHRpb24nIHwgJ2FjdGl2ZScgfCAnbm9ybWFsJztcclxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnIHwgJ2NpcmNsZScgfCAnZGFzaGJvYXJkJztcclxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJyB8ICdzcXVhcmUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcHJvZ3Jlc3MnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfZ2FwRGVncmVlID0gMDtcclxuICBwcml2YXRlIF9nYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnO1xyXG4gIHByaXZhdGUgX3BlcmNlbnQgPSAwO1xyXG4gIHByaXZhdGUgX3N0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIF9jYWNoZVN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIF9zdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUgPSAncm91bmQnO1xyXG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gODtcclxuICBwcml2YXRlIF9zaXplID0gJ2RlZmF1bHQnO1xyXG4gIHByaXZhdGUgX3R5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcclxuICBwcml2YXRlIF9mb3JtYXQgPSAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IGAke3BlcmNlbnR9JWA7XHJcbiAgdHJhaWxQYXRoU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcclxuICBzdHJva2VQYXRoU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcclxuICBwYXRoU3RyaW5nOiBzdHJpbmc7XHJcbiAgaWNvbjtcclxuICBpY29uVGhlbWU7XHJcbiAgaXNTdGF0dXNTZXQgPSBmYWxzZTtcclxuICBpc1N0cm9rZVdpZHRoU2V0ID0gZmFsc2U7XHJcbiAgaXNGb3JtYXRTZXQgPSBmYWxzZTtcclxuICBpc0dhcERlZ3JlZVNldCA9IGZhbHNlO1xyXG4gIGlzR2FwUG9zaXRpb25TZXQgPSBmYWxzZTtcclxuICBzdGF0dXNDb2xvck1hcCA9IHtcclxuICAgIG5vcm1hbCAgIDogJyMxMDhlZTknLFxyXG4gICAgZXhjZXB0aW9uOiAnI2ZmNTUwMCcsXHJcbiAgICBzdWNjZXNzICA6ICcjODdkMDY4J1xyXG4gIH07XHJcbiAgQElucHV0KCkgbnpTaG93SW5mbyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcclxuICBASW5wdXQoKSBuelN1Y2Nlc3NQZXJjZW50ID0gMDtcclxuICBASW5wdXQoKSBuelN0cm9rZUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcgJiYgIXRoaXMuaXNTdHJva2VXaWR0aFNldCkge1xyXG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaXplKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Rm9ybWF0KHZhbHVlOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaXNGb3JtYXRTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56Rm9ybWF0KCk6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BlcmNlbnQgPSB2YWx1ZTtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XHJcbiAgICAgIGlmIChmaWxsQWxsICYmICF0aGlzLmlzU3RhdHVzU2V0KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhY2hlU3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaXNTdHJva2VXaWR0aFNldCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U3RhdHVzKHZhbHVlOiBOelByb2dyZXNzU3RhdHVzVHlwZSkge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY2FjaGVTdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5pc1N0YXR1c1NldCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelR5cGUodmFsdWU6IE56UHJvZ3Jlc3NUeXBlVHlwZSkge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgaWYgKCF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcclxuICAgICAgaWYgKHRoaXMubnpUeXBlICE9PSAnbGluZScpIHtcclxuICAgICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzR2FwUG9zaXRpb25TZXQpIHtcclxuICAgICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc0dhcERlZ3JlZVNldCkge1xyXG4gICAgICAgIHRoaXMuX2dhcERlZ3JlZSA9IDc1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VHlwZSgpOiBOelByb2dyZXNzVHlwZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekdhcERlZ3JlZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2dhcERlZ3JlZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmlzR2FwRGVncmVlU2V0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IG56R2FwRGVncmVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FwRGVncmVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpHYXBQb3NpdGlvbih2YWx1ZTogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSkge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmlzR2FwUG9zaXRpb25TZXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekdhcFBvc2l0aW9uKCk6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhcFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTdHJva2VMaW5lY2FwKHZhbHVlOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUpIHtcclxuICAgIHRoaXMuX3N0cm9rZUxpbmVjYXAgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U3Ryb2tlTGluZWNhcCgpOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZUxpbmVjYXA7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaXJDbGVTdHlsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gKHRoaXMubnpTdHJva2VXaWR0aCAvIDIpO1xyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcclxuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcclxuICAgIHN3aXRjaCAodGhpcy5uekdhcFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cclxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cclxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xyXG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XHJcbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xyXG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHtsZW4gLSB0aGlzLm56R2FwRGVncmVlfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3Ryb2tlUGF0aFN0eWxlID0ge1xyXG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHsodGhpcy5uelBlcmNlbnQgLyAxMDApICogKGxlbiAtIHRoaXMubnpHYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0NpcmNsZSA9ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKTtcclxuICAgIGxldCByZXQgPSAnJztcclxuICAgIGlmICh0aGlzLm56U3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgcmV0ID0gJ2NoZWNrJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U3RhdHVzID09PSAnZXhjZXB0aW9uJykge1xyXG4gICAgICByZXQgPSAnY2xvc2UnO1xyXG4gICAgfVxyXG4gICAgaWYgKHJldCkge1xyXG4gICAgICBpZiAoIWlzQ2lyY2xlKSB7XHJcbiAgICAgICAgcmV0ICs9ICctY2lyY2xlJztcclxuICAgICAgICB0aGlzLmljb25UaGVtZSA9ICdmaWxsJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmljb25UaGVtZSA9ICdvdXRsaW5lJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pY29uID0gcmV0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19