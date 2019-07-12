/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionLiComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.nzMode = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActiveOption(value) {
        if (value) {
            this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
        }
        else {
            this.active = false;
        }
    }
    /**
     * @param {?} valueList
     * @return {?}
     */
    set nzListOfSelectedValue(valueList) {
        this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.nzOption.nzValue)));
    }
}
NzOptionLiComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-option-li]',
                template: "<ng-container *ngIf=\"nzOption.nzCustomContent\">\r\n  <ng-template [ngTemplateOutlet]=\"nzOption.template\"></ng-template>\r\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzOption.nzCustomContent\">\r\n  {{nzOption.nzLabel}}\r\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\r\n</ng-container>",
                host: {
                    '[class.ant-select-dropdown-menu-item]': 'true',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled && nzShowActive && !selected',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }] }
];
/** @nocollapse */
NzOptionLiComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzShowActive: [{ type: Input }],
    nzMode: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzActiveOption: [{ type: Input }],
    nzListOfSelectedValue: [{ type: Input }]
};
function NzOptionLiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzShowActive;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzMode;
    /** @type {?} */
    NzOptionLiComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionLiComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWMxRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBeUI5QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIxQyxVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxnQkFBVyxLQUFLLENBQUM7UUFDakIsY0FBUyxLQUFLLENBQUM7UUFFZixvQkFBd0IsSUFBSSxDQUFDO1FBQzdCLGNBQWtCLFNBQVMsQ0FBQztLQW9CM0I7Ozs7O0lBaEJELElBQ0ksY0FBYyxDQUFDLEtBQXdCO1FBQ3pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7S0FDRjs7Ozs7SUFFRCxJQUVJLHFCQUFxQixDQUFDLFNBQWdCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRjs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUssZ0JBQWdCO2dCQUM3Qix5Y0FBNEM7Z0JBQzVDLElBQUksRUFBUztvQkFDWCx1Q0FBdUMsRUFBVyxNQUFNO29CQUN4RCxnREFBZ0QsRUFBRSxrQ0FBa0M7b0JBQ3BGLGdEQUFnRCxFQUFFLHFCQUFxQjtvQkFDdkUsOENBQThDLEVBQUksNkRBQTZEO29CQUMvRyxxQkFBcUIsRUFBNkIsZ0JBQWdCO29CQUNsRSxxQkFBcUIsRUFBNkIsUUFBUTtpQkFDM0Q7YUFDRjs7OztZQWZtQixVQUFVOzs7dUJBb0IzQixLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLOzZCQUVMLEtBQUs7b0NBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgIDogJ1tuei1vcHRpb24tbGldJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbV0nICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2ZSAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCAmJiBuelNob3dBY3RpdmUgJiYgIXNlbGVjdGVkJyxcclxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1widW5zZWxlY3RhYmxlXCInLFxyXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnXCJub25lXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25MaUNvbXBvbmVudCB7XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBhY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XHJcbiAgQElucHV0KCkgbnpTaG93QWN0aXZlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBY3RpdmVPcHRpb24odmFsdWU6IE56T3B0aW9uQ29tcG9uZW50KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZUxpc3Q6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gaXNOb3ROaWwodmFsdWVMaXN0LmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxufVxyXG4iXX0=