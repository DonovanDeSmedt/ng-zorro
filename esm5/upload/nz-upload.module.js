/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzToolTipModule } from '../tooltip/nz-tooltip.module';
import { NzProgressModule } from './../progress/nz-progress.module';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
import { NzUploadComponent } from './nz-upload.component';
var NzUploadModule = /** @class */ (function () {
    function NzUploadModule() {
    }
    NzUploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule],
                    declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                    exports: [NzUploadComponent]
                },] }
    ];
    return NzUploadModule;
}());
export { NzUploadModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztnQkFFekQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBTyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3hHLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDO29CQUM5RSxPQUFPLEVBQU8sQ0FBQyxpQkFBaUIsQ0FBQztpQkFDbEM7O3lCQWpCRDs7U0FrQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE56UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuLy4uL3Byb2dyZXNzL256LXByb2dyZXNzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VXBsb2FkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOelRvb2xUaXBNb2R1bGUsIE56UHJvZ3Jlc3NNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpJY29uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOelVwbG9hZENvbXBvbmVudCwgTnpVcGxvYWRCdG5Db21wb25lbnQsIE56VXBsb2FkTGlzdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogICAgICBbTnpVcGxvYWRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZE1vZHVsZSB7IH1cclxuIl19