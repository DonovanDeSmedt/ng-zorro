/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.activated = false;
        this.nzLabelProperty = 'label';
    }
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.getOptionLabel = /**
     * @return {?}
     */
    function () {
        return this.option ? this.option[this.nzLabelProperty] : '';
    };
    /**
     * @param {?} str
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.renderHighlightString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, "<span class=\"ant-cascader-menu-item-keyword\">" + this.highlightText + "</span>");
        if (!safeHtml) {
            throw new Error("[NG-ZORRO] Input value \"" + this.highlightText + "\" is not considered security.");
        }
        return str.replace(new RegExp(this.highlightText, 'g'), safeHtml);
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    template: "<ng-container *ngIf=\"highlightText\"><span [innerHTML]=\"renderHighlightString(getOptionLabel())\"></span></ng-container>\r\n<ng-container *ngIf=\"!highlightText\">{{ getOptionLabel() }}</ng-container>\r\n<span *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\" class=\"ant-cascader-menu-item-expand-icon\">\r\n  <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\r\n</span>",
                    host: {
                        '[attr.title]': 'option.title || getOptionLabel()',
                        '[class.ant-cascader-menu-item]': 'true',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
function NzCascaderOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.sanitizer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFzQnZELG1DQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNDLGlCQUFxQixLQUFLLENBQUM7UUFFM0IsdUJBQTJCLE9BQU8sQ0FBQztLQUVZOzs7O0lBRS9DLGtEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMvRDs7Ozs7SUFFRCx5REFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBVzs7UUFDL0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxvREFBZ0QsSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUM7UUFDNUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQTJCLElBQUksQ0FBQyxhQUFhLG1DQUErQixDQUFDLENBQUM7U0FDL0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuRTs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7b0JBQ3ZDLFFBQVEsRUFBUyxzQkFBc0I7b0JBQ3ZDLHFiQUFrRDtvQkFDbEQsSUFBSSxFQUFhO3dCQUNmLGNBQWMsRUFBNkIsa0NBQWtDO3dCQUM3RSxnQ0FBZ0MsRUFBVyxNQUFNO3dCQUNqRCx1Q0FBdUMsRUFBSSxXQUFXO3dCQUN0RCx1Q0FBdUMsRUFBSSxnQkFBZ0I7d0JBQzNELHlDQUF5QyxFQUFFLGlCQUFpQjtxQkFDN0Q7aUJBQ0Y7Ozs7Z0JBZlEsWUFBWTs7O3lCQWlCbEIsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7b0NBckJSOztTQWlCYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgU2VjdXJpdHlDb250ZXh0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvciAgICAgICA6ICdbbnotY2FzY2FkZXItb3B0aW9uXScsXHJcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgOiB7XHJcbiAgICAnW2F0dHIudGl0bGVdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ29wdGlvbi50aXRsZSB8fCBnZXRPcHRpb25MYWJlbCgpJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbV0nICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2YXRlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kXScgIDogJyFvcHRpb24uaXNMZWFmJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbjogQ2FzY2FkZXJPcHRpb247XHJcbiAgQElucHV0KCkgYWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcblxyXG4gIGdldE9wdGlvbkxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb24gPyB0aGlzLm9wdGlvblsgdGhpcy5uekxhYmVsUHJvcGVydHkgXSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySGlnaGxpZ2h0U3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNhZmVIdG1sID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGA8c3BhbiBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51LWl0ZW0ta2V5d29yZFwiPiR7dGhpcy5oaWdobGlnaHRUZXh0fTwvc3Bhbj5gKTtcclxuICAgIGlmICghc2FmZUh0bWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbTkctWk9SUk9dIElucHV0IHZhbHVlIFwiJHt0aGlzLmhpZ2hsaWdodFRleHR9XCIgaXMgbm90IGNvbnNpZGVyZWQgc2VjdXJpdHkuYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmhpZ2hsaWdodFRleHQsICdnJyksIHNhZmVIdG1sKTtcclxuICB9XHJcbn1cclxuIl19