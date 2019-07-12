/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
var NzTabsInkBarDirective = /** @class */ (function () {
    function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.alignToElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () { return _this.setStyles(element); });
            });
        }
        else {
            this.setStyles(element);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.setStyles = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getLeftPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getTopPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    NzTabsInkBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tabs-ink-bar]',
                    host: {
                        '[class.ant-tabs-ink-bar]': 'true',
                        '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabsInkBarDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    NzTabsInkBarDirective.propDecorators = {
        nzAnimated: [{ type: Input }],
        nzPositionMode: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
    return NzTabsInkBarDirective;
}());
export { NzTabsInkBarDirective };
function NzTabsInkBarDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzAnimated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzPositionMode;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.renderer;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.elementRef;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBa0JsRCwrQkFBb0IsUUFBbUIsRUFDbkIsWUFDQTtRQUZBLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVU7UUFDVixXQUFNLEdBQU4sTUFBTTtRQU4xQixrQkFBc0MsS0FBSyxDQUFDO1FBRTVDLHNCQUE2QyxZQUFZLENBQUM7S0FLekQ7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLE9BQW9CO1FBQW5DLGlCQVFDO1FBUEMsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixxQkFBcUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2FBQ3RELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLE9BQW9COztRQUU1QixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssWUFBWSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFDL0QsaUJBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWEsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07O1lBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUMvRCxzQkFBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBUSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDbEQ7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNuRDs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsT0FBb0I7UUFDakMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDakQ7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQW9CO1FBQ25DLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ3BEOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLElBQUksRUFBTTt3QkFDUiwwQkFBMEIsRUFBYyxNQUFNO3dCQUM5QyxtQ0FBbUMsRUFBSyxZQUFZO3dCQUNwRCxzQ0FBc0MsRUFBRSxhQUFhO3FCQUN0RDtpQkFDRjs7OztnQkFiOEMsU0FBUztnQkFBcEMsVUFBVTtnQkFBUyxNQUFNOzs7NkJBZ0IxQyxLQUFLO2lDQUVMLEtBQUs7OztRQUZJLFlBQVksRUFBRTs7O2dDQWhCMUI7O1NBY2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9uei10YWJzZXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXRhYnMtaW5rLWJhcl0nLFxyXG4gIGhvc3QgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXJdJyAgICAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkXScgICA6ICduekFuaW1hdGVkJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1uby1hbmltYXRlZF0nOiAnIW56QW5pbWF0ZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJzSW5rQmFyRGlyZWN0aXZlIHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QW5pbWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICB9XHJcblxyXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNldFN0eWxlcyhlbGVtZW50KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB3aGVuIGhvcml6b250YWwgcmVtb3ZlIGhlaWdodCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSBsZWZ0ICoqL1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgke3RoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4LCAwcHgpYCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsXHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50V2lkdGgoZWxlbWVudCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLyoqIHdoZW4gdmVydGljYWwgcmVtb3ZlIHdpZHRoIHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIHRvcCAqKi9cclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgwcHgsICR7dGhpcy5nZXRUb3BQb3NpdGlvbihlbGVtZW50KX0sIDBweClgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsXHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCcgOiAnMCc7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JyA6ICcwJztcclxuICB9XHJcblxyXG4gIGdldFRvcFBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyA6ICcwJztcclxuICB9XHJcbn1cclxuIl19