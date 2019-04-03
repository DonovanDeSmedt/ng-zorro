/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabSetComponent } from './nz-tabset.component';
var NzTabsModule = /** @class */ (function () {
    function NzTabsModule() {
    }
    NzTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent],
                    exports: [NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent],
                    imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzTabsModule;
}());
export { NzTabsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGFicy9uei10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztnQkFFekQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FBRTtvQkFDdkksT0FBTyxFQUFPLENBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixDQUFFO29CQUN2SSxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUU7aUJBQzdFOzt1QkFqQkQ7O1NBa0JhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYWRkb24vYWRkb24ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOelRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBOelRhYkNvbXBvbmVudCwgTnpUYWJTZXRDb21wb25lbnQsIE56VGFic05hdkNvbXBvbmVudCwgTnpUYWJMYWJlbERpcmVjdGl2ZSwgTnpUYWJzSW5rQmFyRGlyZWN0aXZlLCBOelRhYkJvZHlDb21wb25lbnQgXSxcbiAgZXhwb3J0cyAgICAgOiBbIE56VGFiQ29tcG9uZW50LCBOelRhYlNldENvbXBvbmVudCwgTnpUYWJzTmF2Q29tcG9uZW50LCBOelRhYkxhYmVsRGlyZWN0aXZlLCBOelRhYnNJbmtCYXJEaXJlY3RpdmUsIE56VGFiQm9keUNvbXBvbmVudCBdLFxuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56VGFic01vZHVsZSB7XG59XG4iXX0=