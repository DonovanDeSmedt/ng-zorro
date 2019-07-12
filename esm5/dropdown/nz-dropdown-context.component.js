/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
var NzDropdownContextComponent = /** @class */ (function () {
    function NzDropdownContextComponent() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.template = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setControl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setDropDownPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dropDownPosition = value;
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.close();
        }
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    };
    NzDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-context',
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\r\n</div>",
                    styles: ["\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    return NzDropdownContextComponent;
}());
export { NzDropdownContextComponent };
function NzDropdownContextComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownContextComponent.prototype.control;
    /** @type {?} */
    NzDropdownContextComponent.prototype.template;
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7UUF3QnhFLHdCQUFxQyxRQUFRLENBQUM7UUFHOUMsWUFBTyxJQUFJLENBQUM7Ozs7OztJQUVaLG1EQUFjOzs7O0lBQWQsVUFBZSxLQUF3QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsS0FBd0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsd0RBQW1COzs7O0lBQW5CLFVBQW9CLEtBQXVCO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7SUFFRCwwQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUVELG1EQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7O0lBRUQsb0RBQWU7OztJQUFmOzs7S0FHQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUsscUJBQXFCO29CQUNsQyxVQUFVLEVBQUc7d0JBQ1gsaUJBQWlCO3FCQUNsQjtvQkFDRCw2UEFBbUQ7NkJBRWpELHdMQVNDO2lCQUVKOztxQ0F4QkQ7O1NBeUJhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgIDogJ256LWRyb3Bkb3duLWNvbnRleHQnLFxyXG4gIGFuaW1hdGlvbnMgOiBbXHJcbiAgICBkcm9wRG93bkFuaW1hdGlvblxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlcyAgICAgOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgY29udHJvbDogTnpEcm9wZG93blNlcnZpY2U7XHJcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIG9wZW4gPSB0cnVlO1xyXG5cclxuICBzZXRUZW1wbGF0ZVJlZih2YWx1ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcclxuICAgIHRoaXMudGVtcGxhdGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldENvbnRyb2wodmFsdWU6IE56RHJvcGRvd25TZXJ2aWNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldERyb3BEb3duUG9zaXRpb24odmFsdWU6ICd0b3AnIHwgJ2JvdHRvbScpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFmdGVyQW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcclxuICAgICAgdGhpcy5jb250cm9sLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyBUT0RPIGF1dG8gc2V0IGRyb3Bkb3duIGNsYXNzIGFmdGVyIHRoZSBidWcgcmVzb2x2ZWRcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDg0MiAqKi9cclxuICB9XHJcbn1cclxuIl19