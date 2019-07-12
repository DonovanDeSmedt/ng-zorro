/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Optional } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from './nz-col.component';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
var NzColDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzColDirective, _super);
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        return _super.call(this, nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) || this;
    }
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col]',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    return NzColDirective;
}(NzColComponent));
export { NzColDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU1oQiwwQ0FBYztJQUNoRCx3QkFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixjQUE4QixFQUFzQixjQUE4QjtlQUM1TCxrQkFBTSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztLQUM1RTs7Z0JBUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxVQUFVO29CQUNyQixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtpQkFDeEM7Ozs7Z0JBVFEsd0JBQXdCO2dCQUwvQixVQUFVO2dCQVFILGNBQWMsdUJBUW9FLFFBQVEsWUFBSSxJQUFJO2dCQVBsRyxjQUFjLHVCQU93SCxRQUFRLFlBQUksSUFBSTs7eUJBbEIvSjtFQWlCb0MsY0FBYztTQUFyQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuL256LWNvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJvd0NvbXBvbmVudCB9IGZyb20gJy4vbnotcm93LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yIDogJ1tuei1jb2xdJyxcclxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGV4dGVuZHMgTnpDb2xDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUpIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpSb3dDb21wb25lbnQsIG56Um93RGlyZWN0aXZlKTtcclxuICB9XHJcbn1cclxuIl19