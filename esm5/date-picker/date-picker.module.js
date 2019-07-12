/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { LibPackerModule } from './lib/lib-packer.module';
import { NzDatePickerComponent } from './date-picker.component';
import { DateRangePickerComponent } from './date-range-picker.component';
import { HeaderPickerComponent } from './header-picker.component';
import { NzMonthPickerComponent } from './month-picker.component';
import { NzPickerComponent } from './picker.component';
import { NzRangePickerComponent } from './range-picker.component';
import { NzWeekPickerComponent } from './week-picker.component';
import { NzYearPickerComponent } from './year-picker.component';
var NzDatePickerModule = /** @class */ (function () {
    function NzDatePickerModule() {
    }
    NzDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        LibPackerModule,
                        NzIconModule
                    ],
                    exports: [
                        NzDatePickerComponent,
                        NzRangePickerComponent,
                        NzMonthPickerComponent,
                        NzYearPickerComponent,
                        NzWeekPickerComponent
                    ],
                    declarations: [
                        HeaderPickerComponent,
                        DateRangePickerComponent,
                        NzPickerComponent,
                        NzDatePickerComponent,
                        NzMonthPickerComponent,
                        NzYearPickerComponent,
                        NzWeekPickerComponent,
                        NzRangePickerComponent
                    ],
                    providers: []
                },] }
    ];
    return NzDatePickerModule;
}());
export { NzDatePickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O2dCQUUvRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFFYixlQUFlO3dCQUVmLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIscUJBQXFCO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLGlCQUFpQjt3QkFFakIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNkOzs2QkE3Q0Q7O1NBOENhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IExpYlBhY2tlck1vZHVsZSB9IGZyb20gJy4vbGliL2xpYi1wYWNrZXIubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE56RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56V2Vla1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vd2Vlay1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpZZWFyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFyLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG5cclxuICAgIExpYlBhY2tlck1vZHVsZSxcclxuXHJcbiAgICBOekljb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE56RGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56UmFuZ2VQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOek1vbnRoUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpZZWFyUGlja2VyQ29tcG9uZW50LFxyXG4gICAgTnpXZWVrUGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEhlYWRlclBpY2tlckNvbXBvbmVudCxcclxuICAgIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56UGlja2VyQ29tcG9uZW50LFxyXG5cclxuICAgIE56RGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIE56TW9udGhQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelllYXJQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOeldlZWtQaWNrZXJDb21wb25lbnQsXHJcbiAgICBOelJhbmdlUGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRhdGVQaWNrZXJNb2R1bGUgeyB9XHJcbiJdfQ==