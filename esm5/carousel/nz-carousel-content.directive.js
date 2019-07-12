/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzCarouselContentDirective = /** @class */ (function () {
    function NzCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselContentDirective.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.renderer.setStyle(this.el, 'width', this.width + "px");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._left = value;
            if (isNotNil(this.left)) {
                this.renderer.setStyle(this.el, 'left', this.left + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._top = value;
            if (isNotNil(this.top)) {
                this.renderer.setStyle(this.el, 'top', this.top + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'top');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = value;
            this.updateOpacity();
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "fadeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fadeMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fadeMode = value;
            if (this.fadeMode) {
                this.renderer.setStyle(this.el, 'position', 'relative');
            }
            else {
                this.renderer.removeStyle(this.el, 'position');
            }
            this.updateOpacity();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.updateOpacity = /**
     * @return {?}
     */
    function () {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    };
    NzCarouselContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-carousel-content]',
                    host: {
                        '[class.slick-slide]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCarouselContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzCarouselContentDirective;
}());
export { NzCarouselContentDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBcUY1QyxvQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt1QkE1RXJELEtBQUs7c0JBQ0UsQ0FBQzt5QkFHTixLQUFLO1FBQ3pCLFVBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBd0UvQztJQXRFRCxzQkFBSSw2Q0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVBELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztTQUM3RDs7O09BQUE7SUFNRCxzQkFBSSw0Q0FBSTs7OztRQVNSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVhELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFLLElBQUksQ0FBQyxJQUFJLE9BQUksQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUM7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSwyQ0FBRzs7OztRQVNQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQVhELFVBQVEsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFLLElBQUksQ0FBQyxHQUFHLE9BQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0M7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDcEQ7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7OztPQUFBOzs7O0lBTUQsa0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDRjs7OztJQUtELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDckU7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsSUFBSSxFQUFNO3dCQUNSLHFCQUFxQixFQUFFLE1BQU07cUJBQzlCO2lCQUNGOzs7O2dCQVpDLFVBQVU7Z0JBRVYsU0FBUzs7cUNBSlg7O1NBZWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1jYXJvdXNlbC1jb250ZW50XScsXHJcbiAgaG9zdCAgICA6IHtcclxuICAgICdbY2xhc3Muc2xpY2stc2xpZGVdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICBwcml2YXRlIF9mYWRlTW9kZSA9IGZhbHNlO1xyXG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgYCR7dGhpcy53aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBzZXQgbGVmdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5sZWZ0KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgYCR7dGhpcy5sZWZ0fXB4YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvcCA9IHZhbHVlO1xyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMudG9wKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0b3AnLCBgJHt0aGlzLnRvcH1weGApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAndG9wJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9wO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBzZXQgZmFkZU1vZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ZhZGVNb2RlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5mYWRlTW9kZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZhZGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZhZGVNb2RlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3BhY2l0eSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ29wYWNpdHknLCB0aGlzLmlzQWN0aXZlID8gMSA6IDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAndHJhbnNpdGlvbicsICdvcGFjaXR5IDUwMG1zIGVhc2UnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==