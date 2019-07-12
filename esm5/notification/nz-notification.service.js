/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageBaseService } from '../message/nz-message.service';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
var NzNotificationService = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationService, _super);
    function NzNotificationService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
    }
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.success = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'success', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.error = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'error', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.info = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'info', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.warning = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'warning', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.blank = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'blank', title: title, content: content }, options));
    };
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.create = /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: type, title: title, content: content }, options));
    };
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.template = /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    function (template, options) {
        return /** @type {?} */ (this.createMessage({ template: template }, options));
    };
    NzNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzNotificationService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ NzNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function NzNotificationService_Factory() { return new i1.NzNotificationService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.NzNotificationService, providedIn: "root" });
    return NzNotificationService;
}(NzMessageBaseService));
export { NzNotificationService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7SUFNOUMsaURBQWdHO0lBRXpJLCtCQUNFLE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLEdBQTZCLEVBQzdCLE1BQXNCO2VBRXRCLGtCQUFNLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUM7S0FDekY7SUFFRCxtQkFBbUI7Ozs7Ozs7SUFDbkIsdUNBQU87Ozs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN6RSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBNkIsRUFBQztLQUNyRzs7Ozs7OztJQUVELHFDQUFLOzs7Ozs7SUFBTCxVQUFNLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDdkUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDbkc7Ozs7Ozs7SUFFRCxvQ0FBSTs7Ozs7O0lBQUosVUFBSyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3RFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQ2xHOzs7Ozs7O0lBRUQsdUNBQU87Ozs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN6RSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBNkIsRUFBQztLQUNyRzs7Ozs7OztJQUVELHFDQUFLOzs7Ozs7SUFBTCxVQUFNLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDdkUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDbkc7Ozs7Ozs7O0lBRUQsc0NBQU07Ozs7Ozs7SUFBTixVQUFPLElBQWlFLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUMzSSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDMUY7SUFFRCw0QkFBNEI7Ozs7OztJQUM1Qix3Q0FBUTs7Ozs7SUFBUixVQUFTLFFBQXlCLEVBQUUsT0FBbUM7UUFDckUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQzlFOztnQkExQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxPQUFPO2dCQUMrQyxRQUFRO2dCQUE5Qyx3QkFBd0I7Z0JBQXhDLGNBQWM7OztnQ0FEdkI7RUFZMkMsb0JBQW9CO1NBQWxELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9tZXNzYWdlL256LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbmZpZyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YSwgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgTnpNZXNzYWdlQmFzZVNlcnZpY2U8TnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIE56Tm90aWZpY2F0aW9uRGF0YSwgTnpOb3RpZmljYXRpb25Db25maWc+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihvdmVybGF5LCBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbm90aWZpY2F0aW9uLScpO1xyXG4gIH1cclxuXHJcbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xyXG4gIHN1Y2Nlc3ModGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG5cclxuICBlcnJvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG5cclxuICBpbmZvKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgd2FybmluZyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIGJsYW5rKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdibGFuaycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSh0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2JsYW5rJyB8IHN0cmluZywgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIGNvbnRlbnQgd2l0aCB0ZW1wbGF0ZVxyXG4gIHRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT4sIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0ZW1wbGF0ZSB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==