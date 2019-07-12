/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzProgressComponent {
    constructor() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeLinecap = 'round';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = (percent) => `${percent}%`;
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
            this._strokeWidth = 6;
        }
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFormat(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.isFormatSet = true;
        }
    }
    /**
     * @return {?}
     */
    get nzFormat() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPercent(value) {
        this._percent = value;
        if (isNotNil(value)) {
            /** @type {?} */
            const fillAll = parseInt(value.toString(), 10) >= 100;
            if (fillAll && !this.isStatusSet) {
                this._status = 'success';
            }
            else {
                this._status = this._cacheStatus;
            }
            this.updatePathStyles();
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzPercent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeWidth(value) {
        if (isNotNil(value)) {
            this._strokeWidth = value;
            this.isStrokeWidthSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzStrokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStatus(value) {
        if (isNotNil(value)) {
            this._status = value;
            this._cacheStatus = value;
            this.isStatusSet = true;
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
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
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapDegree(value) {
        if (isNotNil(value)) {
            this._gapDegree = value;
            this.isGapDegreeSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapDegree() {
        return this._gapDegree;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapPosition(value) {
        if (isNotNil(value)) {
            this._gapPosition = value;
            this.isGapPositionSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapPosition() {
        return this._gapPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeLinecap(value) {
        this._strokeLinecap = value;
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzStrokeLinecap() {
        return this._strokeLinecap;
    }
    /**
     * @return {?}
     */
    get isCirCleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
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
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: `${len - this.nzGapDegree}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.nzPercent / 100) * (len - this.nzGapDegree)}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        let ret = '';
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzlDLE1BQU0sT0FBTyxtQkFBbUI7OzBCQUNULENBQUM7NEJBQzRCLEtBQUs7d0JBQ3BDLENBQUM7dUJBQ29CLFFBQVE7NEJBQ0gsUUFBUTs4QkFDQyxPQUFPOzRCQUN0QyxDQUFDO3FCQUNSLFNBQVM7cUJBQ1csTUFBTTt1QkFDeEIsQ0FBQyxPQUFlLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHO1FBTTVELG1CQUFjLEtBQUssQ0FBQztRQUNwQix3QkFBbUIsS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEtBQUssQ0FBQztRQUNwQixzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixLQUFLLENBQUM7UUFDekIsc0JBQWlCO1lBQ2YsTUFBTSxFQUFLLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFJLFNBQVM7U0FDckIsQ0FBQztRQUNGLGtCQUFzQixJQUFJLENBQUM7UUFDM0IsZUFBbUIsR0FBRyxDQUFDO1FBQ3ZCLHdCQUE0QixDQUFDLENBQUM7Ozs7OztJQUc5QixJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDdkI7S0FDRjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8s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QkFjTCxLQUFLOzhCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJyB8ICdjaXJjbGUnIHwgJ2Rhc2hib2FyZCc7XHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCcgfCAnc3F1YXJlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXByb2dyZXNzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2dhcERlZ3JlZSA9IDA7XHJcbiAgcHJpdmF0ZSBfZ2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcclxuICBwcml2YXRlIF9wZXJjZW50ID0gMDtcclxuICBwcml2YXRlIF9zdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBfY2FjaGVTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBfc3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJztcclxuICBwcml2YXRlIF9zdHJva2VXaWR0aCA9IDg7XHJcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcclxuICBwcml2YXRlIF90eXBlOiBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZSc7XHJcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwZXJjZW50fSVgO1xyXG4gIHRyYWlsUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XHJcbiAgc3Ryb2tlUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XHJcbiAgcGF0aFN0cmluZzogc3RyaW5nO1xyXG4gIGljb247XHJcbiAgaWNvblRoZW1lO1xyXG4gIGlzU3RhdHVzU2V0ID0gZmFsc2U7XHJcbiAgaXNTdHJva2VXaWR0aFNldCA9IGZhbHNlO1xyXG4gIGlzRm9ybWF0U2V0ID0gZmFsc2U7XHJcbiAgaXNHYXBEZWdyZWVTZXQgPSBmYWxzZTtcclxuICBpc0dhcFBvc2l0aW9uU2V0ID0gZmFsc2U7XHJcbiAgc3RhdHVzQ29sb3JNYXAgPSB7XHJcbiAgICBub3JtYWwgICA6ICcjMTA4ZWU5JyxcclxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxyXG4gICAgc3VjY2VzcyAgOiAnIzg3ZDA2OCdcclxuICB9O1xyXG4gIEBJbnB1dCgpIG56U2hvd0luZm8gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XHJcbiAgQElucHV0KCkgbnpTdWNjZXNzUGVyY2VudCA9IDA7XHJcbiAgQElucHV0KCkgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNpemUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMubnpTaXplID09PSAnc21hbGwnICYmICF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcclxuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZvcm1hdCh2YWx1ZTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmlzRm9ybWF0U2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekZvcm1hdCgpOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wZXJjZW50ID0gdmFsdWU7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xyXG4gICAgICBpZiAoZmlsbEFsbCAmJiAhdGhpcy5pc1N0YXR1c1NldCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWNoZVN0YXR1cztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQZXJjZW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmlzU3Ryb2tlV2lkdGhTZXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelN0cm9rZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelN0YXR1cyh2YWx1ZTogTnpQcm9ncmVzc1N0YXR1c1R5cGUpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NhY2hlU3RhdHVzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaXNTdGF0dXNTZXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUeXBlKHZhbHVlOiBOelByb2dyZXNzVHlwZVR5cGUpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIGlmICghdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0dhcFBvc2l0aW9uU2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSAnYm90dG9tJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuaXNHYXBEZWdyZWVTZXQpIHtcclxuICAgICAgICB0aGlzLl9nYXBEZWdyZWUgPSA3NTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelR5cGUoKTogTnpQcm9ncmVzc1R5cGVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpHYXBEZWdyZWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9nYXBEZWdyZWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5pc0dhcERlZ3JlZVNldCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldCBuekdhcERlZ3JlZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhcERlZ3JlZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56R2FwUG9zaXRpb24odmFsdWU6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5pc0dhcFBvc2l0aW9uU2V0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpHYXBQb3NpdGlvbigpOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9nYXBQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U3Ryb2tlTGluZWNhcCh2YWx1ZTogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlKSB7XHJcbiAgICB0aGlzLl9zdHJva2VMaW5lY2FwID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelN0cm9rZUxpbmVjYXAoKTogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zdHJva2VMaW5lY2FwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2lyQ2xlU3R5bGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhdGhTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtICh0aGlzLm56U3Ryb2tlV2lkdGggLyAyKTtcclxuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XHJcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XHJcbiAgICBzd2l0Y2ggKHRoaXMubnpHYXBQb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XHJcbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XHJcbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcclxuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xyXG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7bGVuIC0gdGhpcy5uekdhcERlZ3JlZX1weCAke2xlbn1weGAsXHJcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcclxuICAgIH07XHJcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcclxuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7KHRoaXMubnpQZXJjZW50IC8gMTAwKSAqIChsZW4gLSB0aGlzLm56R2FwRGVncmVlKX1weCAke2xlbn1weGAsXHJcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDaXJjbGUgPSAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJyk7XHJcbiAgICBsZXQgcmV0ID0gJyc7XHJcbiAgICBpZiAodGhpcy5uelN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIHJldCA9ICdjaGVjayc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicpIHtcclxuICAgICAgcmV0ID0gJ2Nsb3NlJztcclxuICAgIH1cclxuICAgIGlmIChyZXQpIHtcclxuICAgICAgaWYgKCFpc0NpcmNsZSkge1xyXG4gICAgICAgIHJldCArPSAnLWNpcmNsZSc7XHJcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnZmlsbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnb3V0bGluZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaWNvbiA9IHJldDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==