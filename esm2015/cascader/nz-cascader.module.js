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
import { NzInputModule } from '../input/nz-input.module';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderComponent } from './nz-cascader.component';
export class NzCascaderModule {
}
NzCascaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, OverlayModule, NzInputModule, NzIconModule, NzI18nModule],
                declarations: [
                    NzCascaderComponent,
                    NzCascaderOptionComponent
                ],
                exports: [
                    NzCascaderComponent
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVk5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFWNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUNyRyxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBTztvQkFDWixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L256LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOeklucHV0TW9kdWxlLCBOekljb25Nb2R1bGUsIE56STE4bk1vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnpDYXNjYWRlckNvbXBvbmVudCxcclxuICAgIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHMgICAgIDogW1xyXG4gICAgTnpDYXNjYWRlckNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJNb2R1bGUge1xyXG59XHJcbiJdfQ==