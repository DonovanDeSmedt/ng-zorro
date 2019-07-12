/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from '../button/nz-button.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzDropDownButtonComponent } from './nz-dropdown-button.component';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    NzDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, FormsModule, NzButtonModule, NzMenuModule, NzIconModule],
                    declarations: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective, NzDropdownContextComponent],
                    entryComponents: [NzDropdownContextComponent],
                    exports: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective]
                },] }
    ];
    return NzDropDownModule;
}());
export { NzDropDownModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtvQkFDekcsWUFBWSxFQUFLLENBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUU7b0JBQ3BILGVBQWUsRUFBRSxDQUFFLDBCQUEwQixDQUFFO29CQUMvQyxPQUFPLEVBQVUsQ0FBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsQ0FBRTtpQkFDekY7OzJCQW5CRDs7U0FvQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9uei1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlLCBOekJ1dHRvbk1vZHVsZSwgTnpNZW51TW9kdWxlLCBOekljb25Nb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnMgICA6IFsgTnpEcm9wRG93bkNvbXBvbmVudCwgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCwgTnpEcm9wRG93bkRpcmVjdGl2ZSwgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgXSxcclxuICBleHBvcnRzICAgICAgICA6IFsgTnpEcm9wRG93bkNvbXBvbmVudCwgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCwgTnpEcm9wRG93bkRpcmVjdGl2ZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duTW9kdWxlIHtcclxufVxyXG4iXX0=