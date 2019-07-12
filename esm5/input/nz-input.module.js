/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { PlatformModule } from '@angular/cdk/platform';
import { NzAutoResizeDirective } from './nz-autoresize.directive';
import { NzInputGroupComponent } from './nz-input-group.component';
import { NzInputDirective } from './nz-input.directive';
var NzInputModule = /** @class */ (function () {
    function NzInputModule() {
    }
    NzInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzInputDirective, NzInputGroupComponent, NzAutoResizeDirective],
                    exports: [NzInputDirective, NzInputGroupComponent, NzAutoResizeDirective],
                    imports: [CommonModule, FormsModule, NzIconModule, PlatformModule, NzAddOnModule]
                },] }
    ];
    return NzInputModule;
}());
export { NzInputModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFFdkQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFFO29CQUNoRixPQUFPLEVBQU8sQ0FBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBRTtvQkFDaEYsT0FBTyxFQUFPLENBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBRTtpQkFDekY7O3dCQWhCRDs7U0FpQmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hZGRvbi9hZGRvbi5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE56QXV0b1Jlc2l6ZURpcmVjdGl2ZSB9IGZyb20gJy4vbnotYXV0b3Jlc2l6ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOeklucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LWlucHV0LWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL256LWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWyBOeklucHV0RGlyZWN0aXZlLCBOeklucHV0R3JvdXBDb21wb25lbnQsIE56QXV0b1Jlc2l6ZURpcmVjdGl2ZSBdLFxyXG4gIGV4cG9ydHMgICAgIDogWyBOeklucHV0RGlyZWN0aXZlLCBOeklucHV0R3JvdXBDb21wb25lbnQsIE56QXV0b1Jlc2l6ZURpcmVjdGl2ZSBdLFxyXG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekljb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOekFkZE9uTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXRNb2R1bGUge1xyXG59XHJcbiJdfQ==