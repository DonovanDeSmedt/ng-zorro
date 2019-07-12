/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzCarouselContentDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        this.renderer.setStyle(this.el, 'width', `${this.width}px`);
    }
    /**
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set left(value) {
        this._left = value;
        if (isNotNil(this.left)) {
            this.renderer.setStyle(this.el, 'left', `${this.left}px`);
        }
        else {
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @return {?}
     */
    get left() {
        return this._left;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set top(value) {
        this._top = value;
        if (isNotNil(this.top)) {
            this.renderer.setStyle(this.el, 'top', `${this.top}px`);
        }
        else {
            this.renderer.removeStyle(this.el, 'top');
        }
    }
    /**
     * @return {?}
     */
    get top() {
        return this._top;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._active = value;
        this.updateOpacity();
        if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
        }
        else {
            this.renderer.removeClass(this.el, 'slick-active');
        }
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._active;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fadeMode(value) {
        this._fadeMode = value;
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
        else {
            this.renderer.removeStyle(this.el, 'position');
        }
        this.updateOpacity();
    }
    /**
     * @return {?}
     */
    get fadeMode() {
        return this._fadeMode;
    }
    /**
     * @return {?}
     */
    updateOpacity() {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    }
}
NzCarouselContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-carousel-content]',
                host: {
                    '[class.slick-slide]': 'true'
                }
            },] }
];
/** @nocollapse */
NzCarouselContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
function NzCarouselContentDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselContentDirective.prototype._active;
    /** @type {?} */
    NzCarouselContentDirective.prototype._width;
    /** @type {?} */
    NzCarouselContentDirective.prototype._left;
    /** @type {?} */
    NzCarouselContentDirective.prototype._top;
    /** @type {?} */
    NzCarouselContentDirective.prototype._fadeMode;
    /** @type {?} */
    NzCarouselContentDirective.prototype.el;
    /** @type {?} */
    NzCarouselContentDirective.prototype.elementRef;
    /** @type {?} */
    NzCarouselContentDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFROUMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUE2RXJDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7dUJBNUVyRCxLQUFLO3NCQUNFLENBQUM7eUJBR04sS0FBSztRQUN6QixVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQXdFL0M7Ozs7O0lBdEVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0tBQ0Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUVELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDRjs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3JFOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLElBQUksRUFBTTtvQkFDUixxQkFBcUIsRUFBRSxNQUFNO2lCQUM5QjthQUNGOzs7O1lBWkMsVUFBVTtZQUVWLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWNhcm91c2VsLWNvbnRlbnRdJyxcclxuICBob3N0ICAgIDoge1xyXG4gICAgJ1tjbGFzcy5zbGljay1zbGlkZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2ZhZGVNb2RlID0gZmFsc2U7XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBgJHt0aGlzLndpZHRofXB4YCk7XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHNldCBsZWZ0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2xlZnQgPSB2YWx1ZTtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLmxlZnQpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCBgJHt0aGlzLmxlZnR9cHhgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdDtcclxuICB9XHJcblxyXG4gIHNldCB0b3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG9wID0gdmFsdWU7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy50b3ApKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3RvcCcsIGAke3RoaXMudG9wfXB4YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICd0b3AnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3A7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XHJcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICB9XHJcblxyXG4gIHNldCBmYWRlTW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZmFkZU1vZGUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmFkZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmFkZU1vZGU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcGFjaXR5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmFkZU1vZGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnb3BhY2l0eScsIHRoaXMuaXNBY3RpdmUgPyAxIDogMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0cmFuc2l0aW9uJywgJ29wYWNpdHkgNTAwbXMgZWFzZScpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19