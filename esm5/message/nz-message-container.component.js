/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
var NzMessageContainerComponent = /** @class */ (function () {
    function NzMessageContainerComponent(cdr, defaultConfig, config) {
        this.cdr = cdr;
        this.messages = [];
        this.config = {};
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = tslib_1.__assign({}, this.config, config);
    };
    // Create a new message
    /**
     * @param {?} message
     * @return {?}
     */
    NzMessageContainerComponent.prototype.createMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
        this.cdr.detectChanges();
    };
    // Remove a message by messageId
    /**
     * @param {?} messageId
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessage = /**
     * @param {?} messageId
     * @return {?}
     */
    function (messageId) {
        var _this = this;
        this.messages.some(function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                _this.cdr.detectChanges();
                return true;
            }
        });
    };
    // Remove all messages
    /**
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessageAll = /**
     * @return {?}
     */
    function () {
        this.messages = [];
        this.cdr.detectChanges();
    };
    // Merge default options and custom message options
    /**
     * @param {?} options
     * @return {?}
     */
    NzMessageContainerComponent.prototype._mergeMessageOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\">\r\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
    ]; };
    return NzMessageContainerComponent;
}());
export { NzMessageContainerComponent };
function NzMessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNILE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFjbEcscUNBQ1ksR0FBc0IsRUFDZSxhQUE4QixFQUN0QyxNQUF1QjtRQUZwRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUpsQyxnQkFBa0MsRUFBRSxDQUFDO1FBQ3JDLGNBQTBCLEVBQUUsQ0FBQztRQU8zQixJQUFJLENBQUMsU0FBUyxzQkFBTSxhQUFhLEVBQUssTUFBTSxFQUFHLENBQUM7S0FDakQ7Ozs7O0lBRUQsK0NBQVM7Ozs7SUFBVCxVQUFVLE1BQXVCO1FBQy9CLElBQUksQ0FBQyxNQUFNLHdCQUFRLElBQUksQ0FBQyxNQUFNLEVBQUssTUFBTSxDQUFFLENBQUM7S0FDN0M7SUFFRCx1QkFBdUI7Ozs7O0lBQ3ZCLG1EQUFhOzs7O0lBQWIsVUFBYyxPQUE0QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzFCO0lBRUQsZ0NBQWdDOzs7OztJQUNoQyxtREFBYTs7OztJQUFiLFVBQWMsU0FBaUI7UUFBL0IsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsc0JBQXNCOzs7O0lBQ3RCLHNEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjtJQUVELG1EQUFtRDs7Ozs7SUFDekMsMERBQW9COzs7O0lBQTlCLFVBQStCLE9BQTZCOztRQUMxRCxJQUFNLGNBQWMsR0FBeUI7WUFDM0MsVUFBVSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7U0FDM0MsQ0FBQztRQUNGLDRCQUFZLGNBQWMsRUFBSyxPQUFPLEVBQUc7S0FDMUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxRQUFRLEVBQWEsc0JBQXNCO29CQUMzQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiwwS0FBNEQ7aUJBQzdEOzs7O2dCQVhpQyxpQkFBaUI7Z0RBa0I5QyxRQUFRLFlBQUksTUFBTSxTQUFDLHlCQUF5QjtnREFDNUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7O3NDQW5CekM7O1NBWWEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWcsIE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1tZXNzYWdlLWNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xyXG4gIG1lc3NhZ2VzOiBOek1lc3NhZ2VEYXRhRmlsbGVkW10gPSBbXTtcclxuICBjb25maWc6IE56TWVzc2FnZUNvbmZpZyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek1lc3NhZ2VDb25maWcsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfQ09ORklHKSBjb25maWc6IE56TWVzc2FnZUNvbmZpZ1xyXG4gICkge1xyXG4gICAgdGhpcy5zZXRDb25maWcoeyAuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWcoY29uZmlnOiBOek1lc3NhZ2VDb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnIH07XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgbWVzc2FnZVxyXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYSBtZXNzYWdlIGJ5IG1lc3NhZ2VJZFxyXG4gIHJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubWVzc2FnZXMuc29tZSgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZUlkID09PSBtZXNzYWdlSWQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgbWVzc2FnZXNcclxuICByZW1vdmVNZXNzYWdlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXN0b20gbWVzc2FnZSBvcHRpb25zXHJcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnMge1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zID0ge1xyXG4gICAgICBuekR1cmF0aW9uICAgIDogdGhpcy5jb25maWcubnpEdXJhdGlvbixcclxuICAgICAgbnpBbmltYXRlICAgICA6IHRoaXMuY29uZmlnLm56QW5pbWF0ZSxcclxuICAgICAgbnpQYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLm56UGF1c2VPbkhvdmVyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19