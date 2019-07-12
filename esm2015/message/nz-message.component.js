/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
export class NzMessageComponent {
    /**
     * @param {?} _messageContainer
     * @param {?} cdr
     */
    constructor(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    _destroy() {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout(() => this._messageContainer.removeMessage(this.nzMessage.messageId), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId);
        }
    }
    /**
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            // TODO: `window` should be removed in milestone II
            this._eraseTimer = window.setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
NzMessageComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message',
                preserveWhitespaces: false,
                animations: [
                    trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'translateY(-50%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'translateY(0)' }),
                            animate('100ms linear')
                        ])
                    ])
                ],
                template: "<div class=\"ant-message-notice\"\r\n  [@enterLeave]=\"nzMessage.state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div class=\"ant-message-notice-content\">\r\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\r\n      <ng-container [ngSwitch]=\"nzMessage.type\">\r\n        <i *ngSwitchCase=\"'success'\" nz-icon type=\"check-circle\"></i>\r\n        <i *ngSwitchCase=\"'info'\"  nz-icon type=\"info-circle\"></i>\r\n        <i *ngSwitchCase=\"'warning'\" nz-icon type=\"exclamation-circle\"></i>\r\n        <i *ngSwitchCase=\"'error'\" nz-icon type=\"close-circle\"></i>\r\n        <i *ngSwitchCase=\"'loading'\" nz-icon type=\"loading\"></i>\r\n      </ng-container>\r\n      <span [innerHTML]=\"nzMessage.content\"></span>\r\n    </div>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
NzMessageComponent.ctorParameters = () => [
    { type: NzMessageContainerComponent },
    { type: ChangeDetectorRef }
];
NzMessageComponent.propDecorators = {
    nzMessage: [{ type: Input }],
    nzIndex: [{ type: Input }]
};
function NzMessageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageComponent.prototype.nzMessage;
    /** @type {?} */
    NzMessageComponent.prototype.nzIndex;
    /** @type {?} */
    NzMessageComponent.prototype._options;
    /** @type {?} */
    NzMessageComponent.prototype._autoErase;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTimer;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTimingStart;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTTL;
    /** @type {?} */
    NzMessageComponent.prototype._messageContainer;
    /** @type {?} */
    NzMessageComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUF3Qi9FLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBYTdCLFlBQ1UsbUJBQ0UsR0FBc0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQW1COzJCQU5KLElBQUk7S0FRakM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FD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LEVBQUUsQ0FBQyxDQUFDO3dCQUNwRSxVQUFVLENBQUMsWUFBWSxFQUFFOzRCQUN2QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQzs0QkFDakQsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELDgwQkFBa0Q7YUFDbkQ7Ozs7WUF2QlEsMkJBQTJCO1lBRkYsaUJBQWlCOzs7d0JBNEJoRCxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LW1lc3NhZ2UnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXHJcbiAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcclxuICAgICAgXSksXHJcbiAgICAgIHN0YXRlKCdsZWF2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQ7XHJcbiAgQElucHV0KCkgbnpJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcm90ZWN0ZWQgX29wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zOyAvLyBTaG9ydGN1dCByZWZlcmVuY2UgdG8gbnpNZXNzYWdlLm9wdGlvbnNcclxuXHJcbiAgLy8gRm9yIGF1dG8gZXJhc2luZyhkZXN0cm95KSBzZWxmXHJcbiAgcHJpdmF0ZSBfYXV0b0VyYXNlOiBib29sZWFuOyAvLyBXaGV0aGVyIHJlY29yZCB0aW1lb3V0IHRvIGF1dG8gZGVzdHJveSBzZWxmXHJcbiAgcHJpdmF0ZSBfZXJhc2VUaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIF9lcmFzZVRpbWluZ1N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUVEw6IG51bWJlcjsgLy8gVGltZSB0byBsaXZlXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbWVzc2FnZUNvbnRhaW5lcjogTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubnpNZXNzYWdlLm9wdGlvbnM7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XHJcbiAgICAgIHRoaXMubnpNZXNzYWdlLnN0YXRlID0gJ2VudGVyJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hdXRvRXJhc2UgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb24gPiAwO1xyXG5cclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5faW5pdEVyYXNlKCk7XHJcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgc2VsZlxyXG4gIHByb3RlY3RlZCBfZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdsZWF2ZSc7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkKSwgMjAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLm56TWVzc2FnZS5tZXNzYWdlSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdEVyYXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZXJhc2VUVEwgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb247XHJcbiAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVRUTCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcclxuICAgICAgdGhpcy5fZXJhc2VUVEwgLT0gRGF0ZS5ub3coKSAtIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdGFydEVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcclxuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTsgLy8gVG8gcHJldmVudCBjYWxsaW5nIF9zdGFydEVyYXNlVGltZW91dCgpIG1vcmUgdGltZXMgdG8gY3JlYXRlIG1vcmUgdGltZXJcclxuICAgICAgLy8gVE9ETzogYHdpbmRvd2Agc2hvdWxkIGJlIHJlbW92ZWQgaW4gbWlsZXN0b25lIElJXHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kZXN0cm95KCksIHRoaXMuX2VyYXNlVFRMKTtcclxuICAgICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jbGVhckVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lcmFzZVRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fZXJhc2VUaW1lcik7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=