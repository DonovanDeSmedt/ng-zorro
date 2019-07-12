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
export class NzCalendarModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25JLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBb0I5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFsQjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFPO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFFO2FBQ3pGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnLi4vcmFkaW8vbnotcmFkaW8ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zZWxlY3Qvbnotc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE56RGF0ZUNlbGxEaXJlY3RpdmUsIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXHJcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHMgICAgIDogW1xyXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXHJcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcclxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxyXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelJhZGlvTW9kdWxlLCBOelNlbGVjdE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHsgfVxyXG4iXX0=