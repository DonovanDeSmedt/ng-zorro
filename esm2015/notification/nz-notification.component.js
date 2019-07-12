/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzMessageComponent } from '../message/nz-message.component';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
export class NzNotificationComponent extends NzMessageComponent {
    /**
     * @param {?} container
     * @param {?} cdr
     */
    constructor(container, cdr) {
        super(container, cdr);
        this.container = container;
        this.cdr = cdr;
    }
    /**
     * @return {?}
     */
    close() {
        this._destroy();
    }
    /**
     * @return {?}
     */
    get state() {
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
    }
}
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
NzNotificationComponent.ctorParameters = () => [
    { type: NzNotificationContainerComponent },
    { type: ChangeDetectorRef }
];
NzNotificationComponent.propDecorators = {
    nzMessage: [{ type: Input }]
};
function NzNotificationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzNotificationComponent.prototype.nzMessage;
    /** @type {?} */
    NzNotificationComponent.prototype.container;
    /** @type {?} */
    NzNotificationComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW9DekYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7Ozs7SUFHN0QsWUFBb0IsU0FBMkMsRUFBWSxHQUFzQjtRQUMvRixLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBREosY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtLQUVoRzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLG9CQUFpQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxvQkFBaUIsWUFBWSxDQUFDLEVBQUU7Z0JBQzdHLE9BQU8sV0FBVyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDN0I7S0FDRjs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsUUFBUSxFQUFhLGlCQUFpQjtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7d0JBQ3RFLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTs0QkFDNUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDbEQsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7d0JBQ3JFLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs0QkFDbkQsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsT0FBTyxFQUFVLENBQUM7NEJBQ2xCLFNBQVMsRUFBUSxhQUFhOzRCQUM5QixlQUFlLEVBQUUsT0FBTzt5QkFDekIsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQ3ZCLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQVUsQ0FBQztnQ0FDbEIsU0FBUyxFQUFRLFdBQVc7Z0NBQzVCLGVBQWUsRUFBRSxPQUFPOzZCQUN6QixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxtNERBQXVEO2FBQ3hEOzs7O1lBbkNRLGdDQUFnQztZQUpoQyxpQkFBaUI7Ozt3QkF5Q3ZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9tZXNzYWdlL256LW1lc3NhZ2UuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LW5vdGlmaWNhdGlvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xyXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcclxuICAgICAgc3RhdGUoJ2VudGVyUmlnaHQnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlclJpZ2h0JywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1JSknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXHJcbiAgICAgIF0pLFxyXG4gICAgICBzdGF0ZSgnZW50ZXJMZWZ0Jywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXJMZWZ0JywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNSUpJyB9KSxcclxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxyXG4gICAgICBdKSxcclxuICAgICAgc3RhdGUoJ2xlYXZlJywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXHJcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxyXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIE56TWVzc2FnZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFpbmVyOiBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lciwgY2RyKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uek1lc3NhZ2Uuc3RhdGUgPT09ICdlbnRlcicpIHtcclxuICAgICAgaWYgKCh0aGlzLmNvbnRhaW5lci5jb25maWcubnpQbGFjZW1lbnQgPT09ICd0b3BMZWZ0JykgfHwgKHRoaXMuY29udGFpbmVyLmNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnKSkge1xyXG4gICAgICAgIHJldHVybiAnZW50ZXJMZWZ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2VudGVyUmlnaHQnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5uek1lc3NhZ2Uuc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==