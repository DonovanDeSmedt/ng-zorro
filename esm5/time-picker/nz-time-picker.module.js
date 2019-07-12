/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzTimePickerPanelComponent } from './nz-time-picker-panel.component';
import { NzTimePickerComponent } from './nz-time-picker.component';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
var NzTimePickerModule = /** @class */ (function () {
    function NzTimePickerModule() {
    }
    NzTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzTimePickerComponent,
                        NzTimePickerPanelComponent,
                        NzTimeValueAccessorDirective
                    ],
                    exports: [
                        NzTimePickerPanelComponent,
                        NzTimePickerComponent
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule],
                    entryComponents: []
                },] }
    ];
    return NzTimePickerModule;
}());
export { NzTimePickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztnQkFFakYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBSzt3QkFDZixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQVU7d0JBQ2YsMEJBQTBCO3dCQUMxQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUU7b0JBQ3pGLGVBQWUsRUFBRSxFQUFFO2lCQUNwQjs7NkJBdEJEOztTQXVCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10aW1lLXZhbHVlLWFjY2Vzc29yLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9ucyAgIDogW1xyXG4gICAgTnpUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsXHJcbiAgICBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzICAgICAgICA6IFtcclxuICAgIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LFxyXG4gICAgTnpUaW1lUGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzICAgICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJNb2R1bGUge1xyXG59XHJcbiJdfQ==