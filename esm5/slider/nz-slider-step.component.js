/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './nz-slider-marks.component';
var NzSliderStepComponent = /** @class */ (function () {
    function NzSliderStepComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    Object.defineProperty(NzSliderStepComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderStepComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    NzSliderStepComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    function (index, attr) {
        return attr.id;
    };
    /**
     * @return {?}
     */
    NzSliderStepComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.nzVertical ? 'bottom' : 'left';
        /** @type {?} */
        var prefixCls = this.nzPrefixCls;
        this.attrs = this.nzMarksArray.map(function (mark) {
            var _a, _b;
            var value = mark.value, offset = mark.offset;
            return {
                id: value,
                value: value,
                offset: offset,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a),
                classes: (_b = {},
                    _b[prefixCls + "-dot"] = true,
                    _b[prefixCls + "-dot-active"] = false,
                    _b)
            };
        });
    };
    /**
     * @return {?}
     */
    NzSliderStepComponent.prototype.togglePointActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(function (attr) {
                /** @type {?} */
                var value = attr.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                attr.classes[_this.nzPrefixCls + "-dot-active"] = isActive;
            });
        }
    };
    NzSliderStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-step',
                    preserveWhitespaces: false,
                    template: "<div class=\"{{nzPrefixCls}}-step\">\r\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\r\n</div>"
                }] }
    ];
    NzSliderStepComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzPrefixCls: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    return NzSliderStepComponent;
}());
export { NzSliderStepComponent };
function NzSliderStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderStepComponent.prototype._vertical;
    /** @type {?} */
    NzSliderStepComponent.prototype._included;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzPrefixCls;
    /** @type {?} */
    NzSliderStepComponent.prototype.attrs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7eUJBUW5DLEtBQUs7eUJBQ0wsS0FBSzs7UUFHekIsb0JBQWdDLElBQUksQ0FBQztRQUNyQyxvQkFBZ0MsSUFBSSxDQUFDOztJQU1yQyxzQkFDSSw2Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYzs7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBTUQsc0JBQ0ksNkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOzs7OztJQVNELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLG9CQUFpQixPQUFPLGdCQUFhLElBQUksT0FBTyxnQkFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUVELHlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQXlHO1FBQ2hJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELDBDQUFVOzs7SUFBVjs7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDbkQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTs7WUFDN0IsSUFBQSxrQkFBSyxFQUFFLG9CQUFNLENBQVU7WUFDL0IsT0FBTztnQkFDTCxFQUFFLEVBQU8sS0FBSztnQkFDZCxLQUFLLE9BQUE7Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEtBQUs7b0JBQ0gsR0FBRSxNQUFNLElBQU8sTUFBTSxNQUFHO3VCQUN6QjtnQkFDRCxPQUFPO29CQUNMLEdBQUssU0FBUyxTQUFNLElBQVcsSUFBSTtvQkFDbkMsR0FBSyxTQUFTLGdCQUFhLElBQUksS0FBSzt1QkFDckM7YUFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxpREFBaUI7OztJQUFqQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7Z0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUN6QixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEUsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUssS0FBSSxDQUFDLFdBQVcsZ0JBQWEsQ0FBRSxHQUFHLFFBQVEsQ0FBQzthQUM3RCxDQUFDLENBQUM7U0FDSjtLQUNGOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGtMQUFzRDtpQkFDdkQ7OzsrQkFNRSxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFHTCxLQUFLOzZCQUVMLEtBQUs7NkJBU0wsS0FBSzs7Z0NBaENSOztTQVdhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuaW1wb3J0IHsgTWFya3NBcnJheSB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLXN0ZXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcclxuICBASW5wdXQoKSBuelVwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xyXG5cclxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56UHJlZml4Q2xzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcclxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiB1c2luZyBuYW1lZCBpbnRlcmZhY2VcclxuICBhdHRyczogQXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCB9PjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XHJcbiAgICAgIHRoaXMuYnVpbGRBdHRycygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0IH0pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGF0dHIuaWQ7XHJcbiAgfVxyXG5cclxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZW50ID0gdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSB0aGlzLm56UHJlZml4Q2xzO1xyXG4gICAgdGhpcy5hdHRycyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0IH0gPSBtYXJrO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBzdHlsZSAgOiB7XHJcbiAgICAgICAgICBbIG9yaWVudCBdOiBgJHtvZmZzZXR9JWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgIFsgYCR7cHJlZml4Q2xzfS1kb3RgIF0gICAgICAgOiB0cnVlLFxyXG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF06IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XHJcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kKTtcclxuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMubnpQcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF0gPSBpc0FjdGl2ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=