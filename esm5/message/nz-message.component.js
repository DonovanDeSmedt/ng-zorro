/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._destroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout(function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId); }, 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId);
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._initErase = /**
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._updateTTL = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._startEraseTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            // TODO: `window` should be removed in milestone II
            this._eraseTimer = window.setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._clearEraseTimeout = /**
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
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
    NzMessageComponent.ctorParameters = function () { return [
        { type: NzMessageContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzMessageComponent.propDecorators = {
        nzMessage: [{ type: Input }],
        nzIndex: [{ type: Input }]
    };
    return NzMessageComponent;
}());
export { NzMessageComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBcUM3RSw0QkFDVSxtQkFDRSxHQUFzQjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBbUI7MkJBTkosSUFBSTtLQVFqQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7S0FDRjs7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QyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOzRCQUNwRSxVQUFVLENBQUMsWUFBWSxFQUFFO2dDQUN2QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQztnQ0FDakQsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELDgwQkFBa0Q7aUJBQ25EOzs7O2dCQXZCUSwyQkFBMkI7Z0JBRkYsaUJBQWlCOzs7NEJBNEJoRCxLQUFLOzBCQUNMLEtBQUs7OzZCQTlCUjs7U0EyQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1tZXNzYWdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdlbnRlckxlYXZlJywgW1xyXG4gICAgICBzdGF0ZSgnZW50ZXInLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXHJcbiAgICAgIF0pLFxyXG4gICAgICBzdGF0ZSgnbGVhdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkO1xyXG4gIEBJbnB1dCgpIG56SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBOek1lc3NhZ2VEYXRhT3B0aW9uczsgLy8gU2hvcnRjdXQgcmVmZXJlbmNlIHRvIG56TWVzc2FnZS5vcHRpb25zXHJcblxyXG4gIC8vIEZvciBhdXRvIGVyYXNpbmcoZGVzdHJveSkgc2VsZlxyXG4gIHByaXZhdGUgX2F1dG9FcmFzZTogYm9vbGVhbjsgLy8gV2hldGhlciByZWNvcmQgdGltZW91dCB0byBhdXRvIGRlc3Ryb3kgc2VsZlxyXG4gIHByaXZhdGUgX2VyYXNlVGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZXJhc2VUaW1pbmdTdGFydDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2VyYXNlVFRMOiBudW1iZXI7IC8vIFRpbWUgdG8gbGl2ZVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX21lc3NhZ2VDb250YWluZXI6IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm56TWVzc2FnZS5vcHRpb25zO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uID4gMDtcclxuXHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVRUTCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25MZWF2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIHNlbGZcclxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcclxuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCksIDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRFcmFzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uO1xyXG4gICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVUVEwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XHJcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUVEwgPiAwKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7IC8vIFRvIHByZXZlbnQgY2FsbGluZyBfc3RhcnRFcmFzZVRpbWVvdXQoKSBtb3JlIHRpbWVzIHRvIGNyZWF0ZSBtb3JlIHRpbWVyXHJcbiAgICAgIC8vIFRPRE86IGB3aW5kb3dgIHNob3VsZCBiZSByZW1vdmVkIGluIG1pbGVzdG9uZSBJSVxyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGVzdHJveSgpLCB0aGlzLl9lcmFzZVRUTCk7XHJcbiAgICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXJhc2VUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19