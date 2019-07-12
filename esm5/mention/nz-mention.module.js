/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
import { NzMentionComponent } from './nz-mention.component';
/** @type {?} */
var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
var NzMentionModule = /** @class */ (function () {
    function NzMentionModule() {
    }
    NzMentionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, OverlayModule, NzIconModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS)
                },] }
    ];
    return NzMentionModule;
}());
export { NzMentionModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudGlvbi9uei1tZW50aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxJQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLDRCQUE0QixDQUFDLENBQUM7Ozs7O2dCQUVoRyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFPLENBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFFO29CQUN4RSxZQUFZLG1CQUFPLFVBQVUsQ0FBRTtvQkFDL0IsT0FBTyxtQkFBWSxVQUFVLENBQUU7aUJBQ2hDOzswQkFmRDs7U0FnQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcclxuaW1wb3J0IHsgTnpNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudGlvbi1zdWdnZXN0aW9ucyc7XHJcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XHJcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVudGlvbi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtOek1lbnRpb25Db21wb25lbnQsIE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUsIE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIC4uLkNPTVBPTkVOVFMgXSxcclxuICBleHBvcnRzICAgICA6IFsgLi4uQ09NUE9ORU5UUyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Nb2R1bGUge1xyXG59XHJcbiJdfQ==