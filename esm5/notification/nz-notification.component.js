/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzMessageComponent } from '../message/nz-message.component';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
var NzNotificationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationComponent, _super);
    function NzNotificationComponent(container, cdr) {
        var _this = _super.call(this, container, cdr) || this;
        _this.container = container;
        _this.cdr = cdr;
        return _this;
    }
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._destroy();
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzMessage.state === 'enter') {
                if ((this.container.config["nzPlacement"] === 'topLeft') || (this.container.config["nzPlacement"] === 'bottomLeft')) {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.nzMessage.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzNotificationComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('enterLeave', [
                            state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
                            transition('* => enterRight', [
                                style({ opacity: 0, transform: 'translateX(5%)' }),
                                animate('100ms linear')
                            ]),
                            state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
                            transition('* => enterLeft', [
                                style({ opacity: 0, transform: 'translateX(-5%)' }),
                                animate('100ms linear')
                            ]),
                            state('leave', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            })),
                            transition('* => leave', [
                                style({
                                    opacity: 1,
                                    transform: 'scaleY(1)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms linear')
                            ])
                        ])
                    ],
                    template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\r\n  [ngStyle]=\"nzMessage.options.nzStyle\"\r\n  [ngClass]=\"nzMessage.options.nzClass\"\r\n  [@enterLeave]=\"state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\r\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\r\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\r\n        <ng-container [ngSwitch]=\"nzMessage.type\">\r\n          <i *ngSwitchCase=\"'success'\" nz-icon type=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\r\n          <i *ngSwitchCase=\"'info'\" nz-icon type=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\r\n          <i *ngSwitchCase=\"'warning'\" nz-icon type=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\r\n          <i *ngSwitchCase=\"'error'\" nz-icon type=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\r\n        </ng-container>\r\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\r\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"nzMessage.content\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template [ngIf]=\"nzMessage.template\" [ngTemplateOutlet]=\"nzMessage.template\" [ngTemplateOutletContext]=\"{ $implicit: this }\"></ng-template>\r\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\r\n    <span class=\"ant-notification-notice-close-x\">\r\n      <i nz-icon type=\"close\" class=\"ant-notification-close-icon\"></i>\r\n    </span>\r\n  </a>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationComponent.ctorParameters = function () { return [
        { type: NzNotificationContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzNotificationComponent.propDecorators = {
        nzMessage: [{ type: Input }]
    };
    return NzNotificationComponent;
}(NzMessageComponent));
export { NzNotificationComponent };
function NzNotificationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzNotificationComponent.prototype.nzMessage;
    /** @type {?} */
    NzNotificationComponent.prototype.container;
    /** @type {?} */
    NzNotificationComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0lBb0M1QyxtREFBa0I7SUFHN0QsaUNBQW9CLFNBQTJDLEVBQVksR0FBc0I7UUFBakcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQ3RCO1FBRm1CLGVBQVMsR0FBVCxTQUFTLENBQWtDO1FBQVksU0FBRyxHQUFILEdBQUcsQ0FBbUI7O0tBRWhHOzs7O0lBRUQsdUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCO0lBRUQsc0JBQUksMENBQUs7Ozs7UUFBVDtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLG9CQUFpQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxvQkFBaUIsWUFBWSxDQUFDLEVBQUU7b0JBQzdHLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxPQUFPLFlBQVksQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzdCO1NBQ0Y7OztPQUFBOztnQkF0REYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxRQUFRLEVBQWEsaUJBQWlCO29CQUN0QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs0QkFDdEUsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO2dDQUNsRCxPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs0QkFDckUsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUMzQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO2dDQUNuRCxPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDOzRCQUNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dDQUNuQixPQUFPLEVBQVUsQ0FBQztnQ0FDbEIsU0FBUyxFQUFRLGFBQWE7Z0NBQzlCLGVBQWUsRUFBRSxPQUFPOzZCQUN6QixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLFlBQVksRUFBRTtnQ0FDdkIsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBVSxDQUFDO29DQUNsQixTQUFTLEVBQVEsV0FBVztvQ0FDNUIsZUFBZSxFQUFFLE9BQU87aUNBQ3pCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELG00REFBdUQ7aUJBQ3hEOzs7O2dCQW5DUSxnQ0FBZ0M7Z0JBSmhDLGlCQUFpQjs7OzRCQXlDdkIsS0FBSzs7a0NBMUNSO0VBeUM2QyxrQkFBa0I7U0FBbEQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1ub3RpZmljYXRpb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXHJcbiAgICAgIHN0YXRlKCdlbnRlclJpZ2h0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXJSaWdodCcsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNSUpJyB9KSxcclxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxyXG4gICAgICBdKSxcclxuICAgICAgc3RhdGUoJ2VudGVyTGVmdCcsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyTGVmdCcsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUlKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcclxuICAgICAgXSksXHJcbiAgICAgIHN0YXRlKCdsZWF2ZScsIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gbGVhdmUnLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxyXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIsIGNkcik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMubnpNZXNzYWdlLnN0YXRlID09PSAnZW50ZXInKSB7XHJcbiAgICAgIGlmICgodGhpcy5jb250YWluZXIuY29uZmlnLm56UGxhY2VtZW50ID09PSAndG9wTGVmdCcpIHx8ICh0aGlzLmNvbnRhaW5lci5jb25maWcubnpQbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JykpIHtcclxuICAgICAgICByZXR1cm4gJ2VudGVyTGVmdCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdlbnRlclJpZ2h0JztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpNZXNzYWdlLnN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=