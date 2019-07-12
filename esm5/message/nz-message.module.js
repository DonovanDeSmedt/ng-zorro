/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageComponent } from './nz-message.component';
import { NzMessageService } from './nz-message.service';
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
    NzMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER, NzMessageService],
                    entryComponents: [NzMessageContainerComponent]
                },] }
    ];
    return NzMessageModule;
}());
export { NzMessageModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Z0JBRXZELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBRTtvQkFDOUQsWUFBWSxFQUFLLENBQUUsMkJBQTJCLEVBQUUsa0JBQWtCLENBQUU7b0JBQ3BFLFNBQVMsRUFBUSxDQUFFLGtDQUFrQyxFQUFFLGdCQUFnQixDQUFFO29CQUN6RSxlQUFlLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRTtpQkFDakQ7OzBCQWZEOztTQWdCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL256LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9ucyAgIDogWyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZUNvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVycyAgICAgIDogWyBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSLCBOek1lc3NhZ2VTZXJ2aWNlIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VNb2R1bGUge1xyXG59XHJcbiJdfQ==