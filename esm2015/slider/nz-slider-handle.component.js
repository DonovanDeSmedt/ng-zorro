/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
export class NzSliderHandleComponent {
    /**
     * @param {?} _slider
     */
    constructor(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActive(value) {
        /** @type {?} */
        const show = toBoolean(value);
        if (this.tooltip) {
            if (show) {
                this.tooltip.show();
            }
            else {
                this.tooltip.hide();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzOffset"]) {
            this._updateStyle();
        }
        if (changes["nzValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseEnter($event) {
        if (!this._slider.isDragging) {
            this.nzActive = true;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseLeave($event) {
        if (!this._slider.isDragging) {
            this.nzActive = false;
        }
    }
    /**
     * @return {?}
     */
    _updateTooltipTitle() {
        // [For tooltip]
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    /**
     * @return {?}
     */
    _updateTooltipPosition() {
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(() => this.tooltip.updatePosition(), 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    }
    /**
     * @return {?}
     */
    _updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
    }
}
NzSliderHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-handle',
                preserveWhitespaces: false,
                template: "<nz-tooltip *ngIf=\"nzTipFormatter !== null\" #tooltip [nzTitle]=\"tooltipTitle\" [nzTrigger]=\"null\">\r\n  <div nz-tooltip [class]=\"nzClassName\" [ngStyle]=\"style\"></div>\r\n</nz-tooltip>\r\n<div *ngIf=\"nzTipFormatter === null\" [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
            }] }
];
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderComponent }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQXdCbEMsWUFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFGOUMsYUFBZ0IsRUFBRSxDQUFDO0tBR2xCOzs7OztJQWpCRCxJQUFhLFFBQVEsQ0FBQyxLQUFjOztRQUNsQyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0tBQ0Y7Ozs7O0lBVUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxjQUFXO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7Ozs7O0lBSUQsWUFBWSxDQUFDLE1BQWtCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtLQUNGOzs7OztJQUdELFlBQVksQ0FBQyxNQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDRjs7OztJQUVPLG1CQUFtQjs7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7O0lBRzFGLHNCQUFzQjs7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzRDs7Ozs7SUFHSyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQzs7OztZQXBFM0UsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxrQkFBa0I7Z0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHlTQUF3RDthQUN6RDs7OztZQU5RLGlCQUFpQjs7OzBCQVV2QixLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFZTCxTQUFTLFNBQUMsU0FBUzsyQkFrQm5CLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7MkJBT3ZDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL3Rvb2x0aXAvbnotdG9vbHRpcC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTnpTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1oYW5kbGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuelZlcnRpY2FsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelZhbHVlOiBudW1iZXI7IC8vIFtGb3IgdG9vbHRpcF1cclxuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZzsgLy8gW0ZvciB0b29sdGlwXVxyXG4gIEBJbnB1dCgpIHNldCBuekFjdGl2ZSh2YWx1ZTogYm9vbGVhbikgeyAvLyBbRm9yIHRvb2x0aXBdXHJcbiAgICBjb25zdCBzaG93ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvY2Fsc1xyXG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBOelRvb2xUaXBDb21wb25lbnQ7IC8vIFtGb3IgdG9vbHRpcF1cclxuICB0b29sdGlwVGl0bGU6IHN0cmluZzsgLy8gW0ZvciB0b29sdGlwXVxyXG4gIHN0eWxlOiBvYmplY3QgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2xpZGVyOiBOelNsaWRlckNvbXBvbmVudCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpPZmZzZXQpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlU3R5bGUoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcFRpdGxlKCk7IC8vIFtGb3IgdG9vbHRpcF1cclxuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7IC8vIFtGb3IgdG9vbHRpcF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEhvdmVyIHRvIHRvZ2dsZSB0b29sdGlwIHdoZW4gbm90IGRyYWdnaW5nXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsgJyRldmVudCcgXSlcclxuICBvbk1vdXNlRW50ZXIoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3NsaWRlci5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMubnpBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcclxuICBvbk1vdXNlTGVhdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3NsaWRlci5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMubnpBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHsgLy8gW0ZvciB0b29sdGlwXVxyXG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLm56VGlwRm9ybWF0dGVyID8gdGhpcy5uelRpcEZvcm1hdHRlcih0aGlzLm56VmFsdWUpIDogYCR7dGhpcy5uelZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7IC8vIFtGb3IgdG9vbHRpcF1cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCksIDApOyAvLyBNQVkgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZD8gYnV0IHRoaXMgd2lsbCBiZSBjYWxsZWQgc28gbWFueSB0aW1lcy5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdHlsZVsgdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCcgXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==