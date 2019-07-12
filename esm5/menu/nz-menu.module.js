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
import { NzMenuDividerDirective } from '../menu/nz-menu-divider.directive';
import { NzMenuGroupComponent } from '../menu/nz-menu-group.component';
import { NzMenuItemDirective } from '../menu/nz-menu-item.directive';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzSubMenuComponent } from '../menu/nz-submenu.component';
var NzMenuModule = /** @class */ (function () {
    function NzMenuModule() {
    }
    NzMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzButtonModule, OverlayModule, NzIconModule],
                    declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent],
                    exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
                },] }
    ];
    return NzMenuModule;
}());
export { NzMenuModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Z0JBRWpFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFFO29CQUN4RixZQUFZLEVBQUUsQ0FBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUU7b0JBQ3hILE9BQU8sRUFBTyxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBRTtpQkFDekg7O3VCQWpCRDs7U0FrQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vbnotYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOek1lbnVEaXZpZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vbWVudS9uei1tZW51LWRpdmlkZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpNZW51R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9tZW51L256LW1lbnUtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuLi9tZW51L256LXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgTnpNZW51RGlyZWN0aXZlLCBOek1lbnVJdGVtRGlyZWN0aXZlLCBOelN1Yk1lbnVDb21wb25lbnQsIE56TWVudURpdmlkZXJEaXJlY3RpdmUsIE56TWVudUdyb3VwQ29tcG9uZW50IF0sXHJcbiAgZXhwb3J0cyAgICAgOiBbIE56TWVudURpcmVjdGl2ZSwgTnpNZW51SXRlbURpcmVjdGl2ZSwgTnpTdWJNZW51Q29tcG9uZW50LCBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLCBOek1lbnVHcm91cENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVNb2R1bGUge1xyXG59XHJcbiJdfQ==