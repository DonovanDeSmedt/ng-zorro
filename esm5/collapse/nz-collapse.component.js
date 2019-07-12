/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
var NzCollapseComponent = /** @class */ (function () {
    function NzCollapseComponent() {
        this.listOfNzCollapsePanelComponent = [];
        this.nzAccordion = false;
        this.nzBordered = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.addPanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCollapseComponent.prototype.removePanel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.click = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent.filter(function (item) { return item !== collapse; }).forEach(function (item) {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    };
    NzCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse',
                    template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\r\n  <ng-content></ng-content>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nz-collapse {\n      display: block;\n    }"]
                }] }
    ];
    NzCollapseComponent.propDecorators = {
        nzAccordion: [{ type: Input }],
        nzBordered: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCollapseComponent.prototype, "nzAccordion", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCollapseComponent.prototype, "nzBordered", void 0);
    return NzCollapseComponent;
}());
export { NzCollapseComponent };
function NzCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OENBZW1CLEVBQUU7UUFDdkUsbUJBQXVDLEtBQUssQ0FBQztRQUM3QyxrQkFBc0MsSUFBSSxDQUFDOzs7Ozs7SUFFM0Msc0NBQVE7Ozs7SUFBUixVQUFTLEtBQStCO1FBQ3RDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQStCO1FBQ3pDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuRzs7Ozs7SUFFRCxtQ0FBSzs7OztJQUFMLFVBQU0sUUFBa0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLFFBQVEsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2hGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pEOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBUyxhQUFhO29CQUM5QixpSUFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUksaUJBQWlCLENBQUMsSUFBSTs2QkFFbkMsNkNBRUE7aUJBRUw7Ozs4QkFHRSxLQUFLOzZCQUNMLEtBQUs7OztRQURJLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzhCQXhCMUI7O1NBcUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jaGVja2JveCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotY29sbGFwc2UnLFxyXG4gIHRlbXBsYXRlVXJsICAgIDogJy4vbnotY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXMgICAgICAgICA6IFtcclxuICAgICAgYG56LWNvbGxhcHNlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjY29yZGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkID0gdHJ1ZTtcclxuXHJcbiAgYWRkUGFuZWwodmFsdWU6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5zcGxpY2UodGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soY29sbGFwc2U6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBY2NvcmRpb24gJiYgIWNvbGxhcHNlLm56QWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvbGxhcHNlKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLm56QWN0aXZlKSB7XHJcbiAgICAgICAgICBpdGVtLm56QWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLm56QWN0aXZlQ2hhbmdlLmVtaXQoaXRlbS5uekFjdGl2ZSk7XHJcbiAgICAgICAgICBpdGVtLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb2xsYXBzZS5uekFjdGl2ZSA9ICFjb2xsYXBzZS5uekFjdGl2ZTtcclxuICAgIGNvbGxhcHNlLm56QWN0aXZlQ2hhbmdlLmVtaXQoY29sbGFwc2UubnpBY3RpdmUpO1xyXG4gIH1cclxufVxyXG4iXX0=