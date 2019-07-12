/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
export class NzDropdownContextComponent {
    constructor() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTemplateRef(value) {
        this.template = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setControl(value) {
        this.control = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDropDownPosition(value) {
        this.dropDownPosition = value;
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.close();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    }
}
NzDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-context',
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\r\n</div>",
                styles: [`
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBdUIxRSxNQUFNLE9BQU8sMEJBQTBCOztRQUNyQyx3QkFBcUMsUUFBUSxDQUFDO1FBRzlDLFlBQU8sSUFBSSxDQUFDOzs7Ozs7SUFFWixjQUFjLENBQUMsS0FBd0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQXdCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQXVCO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCxlQUFlOzs7S0FHZDs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUsscUJBQXFCO2dCQUNsQyxVQUFVLEVBQUc7b0JBQ1gsaUJBQWlCO2lCQUNsQjtnQkFDRCw2UEFBbUQ7eUJBRWpEOzs7Ozs7Ozs7S0FTQzthQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IE56RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnbnotZHJvcGRvd24tY29udGV4dCcsXHJcbiAgYW5pbWF0aW9ucyA6IFtcclxuICAgIGRyb3BEb3duQW5pbWF0aW9uXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzICAgICA6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZTtcclxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgb3BlbiA9IHRydWU7XHJcblxyXG4gIHNldFRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udHJvbCh2YWx1ZTogTnpEcm9wZG93blNlcnZpY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJvcERvd25Qb3NpdGlvbih2YWx1ZTogJ3RvcCcgfCAnYm90dG9tJyk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3Blbikge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxyXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0ODQyICoqL1xyXG4gIH1cclxufVxyXG4iXX0=