/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from '../checkbox/nz-checkbox.module';
import { NzDropDownModule } from '../dropdown/nz-dropdown.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzPaginationModule } from '../pagination/nz-pagination.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';
export class NzTableModule {
}
NzTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective],
                exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective],
                imports: [
                    NzMenuModule,
                    FormsModule,
                    NzRadioModule,
                    NzCheckboxModule,
                    NzDropDownModule,
                    CommonModule,
                    NzPaginationModule,
                    NzSpinModule,
                    NzI18nModule,
                    NzIconModule
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFrQmxELE1BQU0sT0FBTyxhQUFhOzs7WUFoQnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBRTtnQkFDbkgsT0FBTyxFQUFPLENBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUU7Z0JBQ25ILE9BQU8sRUFBTztvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9uei1jaGVja2JveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L256LW1lbnUubW9kdWxlJztcclxuaW1wb3J0IHsgTnpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICcuLi9yYWRpby9uei1yYWRpby5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICcuLi9zcGluL256LXNwaW4ubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGJvZHlEaXJlY3RpdmUgfSBmcm9tICcuL256LXRib2R5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VGRDb21wb25lbnQgfSBmcm9tICcuL256LXRkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGhDb21wb25lbnQgfSBmcm9tICcuL256LXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL256LXRoZWFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VHJEaXJlY3RpdmUgfSBmcm9tICcuL256LXRyLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWyBOelRhYmxlQ29tcG9uZW50LCBOelRoQ29tcG9uZW50LCBOelRkQ29tcG9uZW50LCBOelRoZWFkQ29tcG9uZW50LCBOelRib2R5RGlyZWN0aXZlLCBOelRyRGlyZWN0aXZlIF0sXHJcbiAgZXhwb3J0cyAgICAgOiBbIE56VGFibGVDb21wb25lbnQsIE56VGhDb21wb25lbnQsIE56VGRDb21wb25lbnQsIE56VGhlYWRDb21wb25lbnQsIE56VGJvZHlEaXJlY3RpdmUsIE56VHJEaXJlY3RpdmUgXSxcclxuICBpbXBvcnRzICAgICA6IFtcclxuICAgIE56TWVudU1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTnpSYWRpb01vZHVsZSxcclxuICAgIE56Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBOekRyb3BEb3duTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgTnpTcGluTW9kdWxlLFxyXG4gICAgTnpJMThuTW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUYWJsZU1vZHVsZSB7XHJcbn1cclxuIl19