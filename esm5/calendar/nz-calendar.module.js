/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSelectModule } from '../select/nz-select.module';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());
export { NzCalendarModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25JLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztnQkFFN0QsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQU87d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUU7aUJBQ3pGOzsyQkEzQkQ7O1NBNEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJy4uL3JhZGlvL256LXJhZGlvLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L256LXNlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRhdGVDZWxsRGlyZWN0aXZlLCBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSwgTnpNb250aENlbGxEaXJlY3RpdmUsIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXHJcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzICAgICA6IFtcclxuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpSYWRpb01vZHVsZSwgTnpTZWxlY3RNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhck1vZHVsZSB7IH1cclxuIl19