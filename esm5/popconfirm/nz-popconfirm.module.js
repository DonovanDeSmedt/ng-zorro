/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from '../button/nz-button.module';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
import { NzPopconfirmDirective } from './nz-popconfirm.directive';
var NzPopconfirmModule = /** @class */ (function () {
    function NzPopconfirmModule() {
    }
    NzPopconfirmModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                    exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                    imports: [CommonModule, NzButtonModule, OverlayModule, NzI18nModule, NzIconModule, NzAddOnModule],
                    entryComponents: [NzPopconfirmComponent]
                },] }
    ];
    return NzPopconfirmModule;
}());
export { NzPopconfirmModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Z0JBRWpFLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUssQ0FBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBRTtvQkFDakUsT0FBTyxFQUFVLENBQUUscUJBQXFCLEVBQUUscUJBQXFCLENBQUU7b0JBQ2pFLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFFO29CQUMzRyxlQUFlLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBRTtpQkFDM0M7OzZCQWpCRDs7U0FtQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9uei1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FkZG9uL2FkZG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE56UG9wY29uZmlybURpcmVjdGl2ZSB9IGZyb20gJy4vbnotcG9wY29uZmlybS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMgICA6IFsgTnpQb3Bjb25maXJtQ29tcG9uZW50LCBOelBvcGNvbmZpcm1EaXJlY3RpdmUgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbIE56UG9wY29uZmlybUNvbXBvbmVudCwgTnpQb3Bjb25maXJtRGlyZWN0aXZlIF0sXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgTnpQb3Bjb25maXJtQ29tcG9uZW50IF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Nb2R1bGUge1xufVxuIl19