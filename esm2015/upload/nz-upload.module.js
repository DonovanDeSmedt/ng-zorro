/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class NzUploadModule {
}
NzUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzToolTipModule, NzProgressModule, NzI18nModule, NzIconModule],
                declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                exports: [NzUploadComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU0sT0FBTyxjQUFjOzs7WUFMMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ25HLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDO2dCQUM5RSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAubW9kdWxlJztcblxuaW1wb3J0IHsgTnpQcm9ncmVzc01vZHVsZSB9IGZyb20gJy4vLi4vcHJvZ3Jlc3MvbnotcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelVwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOelRvb2xUaXBNb2R1bGUsIE56UHJvZ3Jlc3NNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpVcGxvYWRDb21wb25lbnQsIE56VXBsb2FkQnRuQ29tcG9uZW50LCBOelVwbG9hZExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpVcGxvYWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTW9kdWxlIHt9XG4iXX0=