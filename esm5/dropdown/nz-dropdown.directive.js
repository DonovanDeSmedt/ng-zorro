/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.$mouseenter = new Subject();
        this.$mouseleave = new Subject();
        this.$click = new Subject();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onMouseEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseenter.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onMouseLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseleave.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropDownDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.$click.next(e);
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement.nodeName === 'A') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
    };
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    host: {
                        '[class.ant-dropdown-trigger]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzDropDownDirective.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
function NzDropDownDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseenter;
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseleave;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /** @type {?} */
    NzDropDownDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZCN0IsNkJBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwQnRFLG1CQUFjLElBQUksT0FBTyxFQUFjLENBQUM7UUFDeEMsbUJBQWMsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUN4QyxjQUFTLElBQUksT0FBTyxFQUFjLENBQUM7S0FtQmxDOzs7OztJQWhCRCwwQ0FBWTs7OztJQURaLFVBQ2EsQ0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFHRCwwQ0FBWTs7OztJQURaLFVBQ2EsQ0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFHRCxxQ0FBTzs7OztJQURQLFVBQ1EsQ0FBYTtRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7Ozs7SUFLRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUM1RTtLQUNGOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQU07d0JBQ1IsOEJBQThCLEVBQUUsTUFBTTtxQkFDdkM7aUJBQ0Y7Ozs7Z0JBUm1CLFVBQVU7Z0JBQXdCLFNBQVM7OzsrQkFjNUQsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTsrQkFLdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTswQkFLdkMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7OEJBeEJyQzs7U0FTYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcclxuICBob3N0ICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tdHJpZ2dlcl0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAkbW91c2VlbnRlciA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XHJcbiAgJG1vdXNlbGVhdmUgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xyXG4gICRjbGljayA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXHJcbiAgb25Nb3VzZUVudGVyKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuJG1vdXNlZW50ZXIubmV4dChlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXHJcbiAgb25Nb3VzZUxlYXZlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuJG1vdXNlbGVhdmUubmV4dChlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxyXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuJGNsaWNrLm5leHQoZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tbGluaycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=