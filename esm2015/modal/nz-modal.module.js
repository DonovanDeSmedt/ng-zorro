/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from '../button/nz-button.module';
import { LoggerModule } from '../core/util/logger/logger.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { CssUnitPipe } from './css-unit.pipe';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalService } from './nz-modal.service';
export class NzModalModule {
}
NzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, NzI18nModule, NzButtonModule, LoggerModule, NzIconModule],
                exports: [NzModalComponent],
                declarations: [NzModalComponent, CssUnitPipe],
                entryComponents: [NzModalComponent],
                providers: [NzModalControlService, NzModalService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3BELE1BQU0sT0FBTyxhQUFhOzs7WUFQekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUMxRyxPQUFPLEVBQVUsQ0FBRSxnQkFBZ0IsQ0FBRTtnQkFDckMsWUFBWSxFQUFLLENBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFFO2dCQUNsRCxlQUFlLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtnQkFDckMsU0FBUyxFQUFRLENBQUUscUJBQXFCLEVBQUUsY0FBYyxDQUFFO2FBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL256LWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9jb3JlL3V0aWwvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDc3NVbml0UGlwZSB9IGZyb20gJy4vY3NzLXVuaXQucGlwZSc7XHJcbmltcG9ydCB7IE56TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vbnotbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzICAgICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBMb2dnZXJNb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxyXG4gIGV4cG9ydHMgICAgICAgIDogWyBOek1vZGFsQ29tcG9uZW50IF0sXHJcbiAgZGVjbGFyYXRpb25zICAgOiBbIE56TW9kYWxDb21wb25lbnQsIENzc1VuaXRQaXBlIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbIE56TW9kYWxDb21wb25lbnQgXSxcclxuICBwcm92aWRlcnMgICAgICA6IFsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlLCBOek1vZGFsU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsTW9kdWxlIHtcclxufVxyXG4iXX0=