/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
var NzSliderHandleComponent = /** @class */ (function () {
    function NzSliderHandleComponent(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    Object.defineProperty(NzSliderHandleComponent.prototype, "nzActive", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var show = toBoolean(value);
            if (this.tooltip) {
                if (show) {
                    this.tooltip.show();
                }
                else {
                    this.tooltip.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzOffset"]) {
            this._updateStyle();
        }
        if (changes["nzValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    };
    // Hover to toggle tooltip when not dragging
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSliderHandleComponent.prototype.onMouseEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.nzActive = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSliderHandleComponent.prototype.onMouseLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.nzActive = false;
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateTooltipTitle = /**
     * @return {?}
     */
    function () {
        // [For tooltip]
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateTooltipPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(function () { return _this.tooltip.updatePosition(); }, 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateStyle = /**
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
    };
    NzSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-handle',
                    preserveWhitespaces: false,
                    template: "<nz-tooltip *ngIf=\"nzTipFormatter !== null\" #tooltip [nzTitle]=\"tooltipTitle\" [nzTrigger]=\"null\">\r\n  <div nz-tooltip [class]=\"nzClassName\" [ngStyle]=\"style\"></div>\r\n</nz-tooltip>\r\n<div *ngIf=\"nzTipFormatter === null\" [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderHandleComponent.ctorParameters = function () { return [
        { type: NzSliderComponent }
    ]; };
    NzSliderHandleComponent.propDecorators = {
        nzClassName: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzActive: [{ type: Input }],
        tooltip: [{ type: ViewChild, args: ['tooltip',] }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    return NzSliderHandleComponent;
}());
export { NzSliderHandleComponent };
function NzSliderHandleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /** @type {?} */
    NzSliderHandleComponent.prototype._slider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBK0J4RCxpQ0FBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFGOUMsYUFBZ0IsRUFBRSxDQUFDO0tBR2xCO0lBakJELHNCQUFhLDZDQUFROzs7OztRQUFyQixVQUFzQixLQUFjOztZQUNsQyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7OztPQUFBOzs7OztJQVVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sY0FBVztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLE9BQU8sYUFBVTtZQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGO0lBRUQsNENBQTRDOzs7OztJQUU1Qyw4Q0FBWTs7OztJQURaLFVBQ2EsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7O0lBR0QsOENBQVk7Ozs7SUFEWixVQUNhLE1BQWtCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNGOzs7O0lBRU8scURBQW1COzs7OztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLENBQUM7Ozs7O0lBRzFGLHdEQUFzQjs7Ozs7O1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUE3QixDQUE2QixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNEOzs7OztJQUdLLDhDQUFZOzs7O1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7OztnQkFwRTNFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsa0JBQWtCO29CQUN2QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQix5U0FBd0Q7aUJBQ3pEOzs7O2dCQU5RLGlCQUFpQjs7OzhCQVV2QixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFZTCxTQUFTLFNBQUMsU0FBUzsrQkFrQm5CLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7K0JBT3ZDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7O2tDQXpEMUM7O1NBWWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zbGlkZXItaGFuZGxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpWZXJ0aWNhbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogbnVtYmVyOyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7IC8vIFtGb3IgdG9vbHRpcF1cclxuICBASW5wdXQoKSBzZXQgbnpBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHsgLy8gW0ZvciB0b29sdGlwXVxyXG4gICAgY29uc3Qgc2hvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMb2NhbHNcclxuICBAVmlld0NoaWxkKCd0b29sdGlwJykgdG9vbHRpcDogTnpUb29sVGlwQ29tcG9uZW50OyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7IC8vIFtGb3IgdG9vbHRpcF1cclxuICBzdHlsZTogb2JqZWN0ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NsaWRlcjogTnpTbGlkZXJDb21wb25lbnQpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56T2Zmc2V0KSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBUaXRsZSgpOyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBIb3ZlciB0byB0b2dnbGUgdG9vbHRpcCB3aGVuIG5vdCBkcmFnZ2luZ1xyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXHJcbiAgb25Nb3VzZUVudGVyKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9zbGlkZXIuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLm56QWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXHJcbiAgb25Nb3VzZUxlYXZlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9zbGlkZXIuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLm56QWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7IC8vIFtGb3IgdG9vbHRpcF1cclxuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5uelRpcEZvcm1hdHRlciA/IHRoaXMubnpUaXBGb3JtYXR0ZXIodGhpcy5uelZhbHVlKSA6IGAke3RoaXMubnpWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQgeyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpLCAwKTsgLy8gTUFZIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQ/IGJ1dCB0aGlzIHdpbGwgYmUgY2FsbGVkIHNvIG1hbnkgdGltZXMuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3R5bGVbIHRoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnIF0gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xyXG4gIH1cclxufVxyXG4iXX0=