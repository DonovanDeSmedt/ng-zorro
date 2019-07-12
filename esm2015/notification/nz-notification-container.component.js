/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { NzMessageContainerComponent } from '../message/nz-message-container.component';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
export class NzNotificationContainerComponent extends NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, defaultConfig, config) {
        super(cdr, defaultConfig, config);
        /**
         * A list of notifications displayed on the screen.
         * @override
         */
        this.messages = [];
    }
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`, replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    createMessage(notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        /** @type {?} */
        const key = notification.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.messages.find(msg => msg.options.nzKey === notification.options.nzKey);
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push(notification);
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
}
NzNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                preserveWhitespaces: false,
                template: "<div\r\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\r\n  [style.top]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='topRight')? config.nzTop:null\"\r\n  [style.bottom]=\"(config.nzPlacement==='bottomLeft'||config.nzPlacement=='bottomRight')? config.nzBottom:null\"\r\n  [style.right]=\"(config.nzPlacement==='bottomRight'||config.nzPlacement=='topRight')?'0px':null\"\r\n  [style.left]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='bottomLeft')?'0px':null\">\r\n  <nz-notification *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-notification>\r\n</div>"
            }] }
];
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
];
function NzNotificationContainerComponent_tsickle_Closure_declarations() {
    /**
     * A list of notifications displayed on the screen.
     * @override
     * @type {?}
     */
    NzNotificationContainerComponent.prototype.messages;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUF3QixzQkFBc0IsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXhILE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSwyQkFBMkI7Ozs7OztJQUMvRSxZQUNFLEdBQXNCLEVBQzhCLGFBQW1DLEVBQzNDLE1BQTRCO1FBRXhFLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7OztRQU9wQyxnQkFBdUMsRUFBRSxDQUFDO0tBTnpDOzs7Ozs7OztJQWNELGFBQWEsQ0FBQyxZQUFzQztRQUNsRCxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7O1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztRQUN2QyxNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RyxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsRUFBRTtZQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsR0FBNkIsRUFBRSxJQUE4QjtRQUN2RixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7WUEvQ3hCLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtnQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7Z0JBQzNDLFFBQVEsRUFBYSwyQkFBMkI7Z0JBQ2hELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLCtvQkFBaUU7YUFDbEU7Ozs7WUFaaUMsaUJBQWlCOzRDQWdCOUMsUUFBUSxZQUFJLE1BQU0sU0FBQyw4QkFBOEI7NENBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9tZXNzYWdlL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29uZmlnLCBOWl9OT1RJRklDQVRJT05fQ09ORklHLCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWcsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9DT05GSUcpIGNvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbGlzdCBvZiBub3RpZmljYXRpb25zIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLlxyXG4gICAqIEBvdmVycmlkZVxyXG4gICAqL1xyXG4gIG1lc3NhZ2VzOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWRbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uLlxyXG4gICAqIElmIHRoZXJlJ3MgYSBub3RpZmljYXRpb24gd2hvc2UgYG56S2V5YCBpcyBzYW1lIHdpdGggYG56S2V5YCBpbiBgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkYCwgcmVwbGFjZSBpdHMgY29udGVudCBpbnN0ZWFkIG9mIGNyZWF0ZSBhIG5ldyBvbmUuXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGNyZWF0ZU1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIG5vdGlmaWNhdGlvbi5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhub3RpZmljYXRpb24ub3B0aW9ucyk7XHJcbiAgICBjb25zdCBrZXkgPSBub3RpZmljYXRpb24ub3B0aW9ucy5uektleTtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5tZXNzYWdlcy5maW5kKG1zZyA9PiBtc2cub3B0aW9ucy5uektleSA9PT0gbm90aWZpY2F0aW9uLm9wdGlvbnMubnpLZXkpO1xyXG4gICAgaWYgKGtleSAmJiBub3RpZmljYXRpb25XaXRoU2FtZUtleSkge1xyXG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGlmaWNhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIG9sZC50aXRsZSA9IF9uZXcudGl0bGU7XHJcbiAgICBvbGQuY29udGVudCA9IF9uZXcuY29udGVudDtcclxuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XHJcbiAgICBvbGQudHlwZSA9IF9uZXcudHlwZTtcclxuICB9XHJcbn1cclxuIl19