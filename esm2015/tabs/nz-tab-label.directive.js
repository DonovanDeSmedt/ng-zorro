/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
export class NzTabLabelDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    /**
     * @return {?}
     */
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    getOffsetTop() {
        return this.elementRef.nativeElement.offsetTop;
    }
    /**
     * @return {?}
     */
    getOffsetHeight() {
        return this.elementRef.nativeElement.offsetHeight;
    }
}
NzTabLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tab-label]',
                host: {
                    '[class.ant-tabs-tab]': 'true',
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            },] }
];
/** @nocollapse */
NzTabLabelDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTabLabelDirective.propDecorators = {
    disabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTabLabelDirective.prototype, "disabled", void 0);
function NzTabLabelDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabLabelDirective.prototype.disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBU3BELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFHOUIsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZ6QyxnQkFBb0MsS0FBSyxDQUFDO0tBR3pDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0tBQ2pEOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0tBQ2xEOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0tBQ2hEOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0tBQ25EOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLElBQUksRUFBTTtvQkFDUixzQkFBc0IsRUFBVyxNQUFNO29CQUN2QywrQkFBK0IsRUFBRSxVQUFVO2lCQUM1QzthQUNGOzs7O1lBVm1CLFVBQVU7Ozt1QkFZM0IsS0FBSzs7O0lBQUksWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotdGFiLWxhYmVsXScsXHJcbiAgaG9zdCAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFiXScgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYkxhYmVsRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldExlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0V2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICB9XHJcbn1cclxuIl19