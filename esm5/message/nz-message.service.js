/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/** @type {?} */
var globalCounter = 0;
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
var 
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
NzMessageBaseService = /** @class */ (function () {
    function NzMessageBaseService(overlay, containerClass, injector, cfr, appRef, _idPrefix) {
        if (_idPrefix === void 0) { _idPrefix = ''; }
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this._idPrefix = _idPrefix;
        // this._container = overlay.create().attach(new ComponentPortal(containerClass)).instance;
        this._container = this.createContainer();
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    NzMessageBaseService.prototype.remove = /**
     * @param {?=} messageId
     * @return {?}
     */
    function (messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    NzMessageBaseService.prototype.createMessage = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        /** @type {?} */
        var resultMessage = tslib_1.__assign({}, (/** @type {?} */ (message)), {
            messageId: this._generateMessageId(),
            options: options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NzMessageBaseService.prototype.config = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._container.setConfig(config);
    };
    /**
     * @return {?}
     */
    NzMessageBaseService.prototype._generateMessageId = /**
     * @return {?}
     */
    function () {
        return this._idPrefix + globalCounter++;
    };
    /**
     * @return {?}
     */
    NzMessageBaseService.prototype.createContainer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        var componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef.instance;
    };
    return NzMessageBaseService;
}());
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export { NzMessageBaseService };
function NzMessageBaseService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageBaseService.prototype._container;
    /** @type {?} */
    NzMessageBaseService.prototype.overlay;
    /** @type {?} */
    NzMessageBaseService.prototype.containerClass;
    /** @type {?} */
    NzMessageBaseService.prototype.injector;
    /** @type {?} */
    NzMessageBaseService.prototype.cfr;
    /** @type {?} */
    NzMessageBaseService.prototype.appRef;
    /** @type {?} */
    NzMessageBaseService.prototype._idPrefix;
}
var NzMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(NzMessageService, _super);
    function NzMessageService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message-') || this;
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.success = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.error = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.info = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.warning = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.loading = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'loading', content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzMessageService.prototype.create = /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    NzMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzMessageService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ NzMessageService.ngInjectableDef = i0.defineInjectable({ factory: function NzMessageService_Factory() { return new i1.NzMessageService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.NzMessageService, providedIn: "root" });
    return NzMessageService;
}(NzMessageBaseService));
export { NzMessageService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQW1CLFVBQVUsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFHdEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRy9FLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQzs7Ozs7O0FBRXRCOzs7Ozs7QUFBQTtJQUdFLDhCQUNVLFNBQ0EsZ0JBQ0EsVUFDQSxLQUNBLFFBQ0E7O1FBTEEsWUFBTyxHQUFQLE9BQU87UUFDUCxtQkFBYyxHQUFkLGNBQWM7UUFDZCxhQUFRLEdBQVIsUUFBUTtRQUNSLFFBQUcsR0FBSCxHQUFHO1FBQ0gsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFTLEdBQVQsU0FBUzs7UUFHakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDMUM7Ozs7O0lBRUQscUNBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQztLQUNGOzs7Ozs7SUFFRCw0Q0FBYTs7Ozs7SUFBYixVQUFjLE9BQW9CLEVBQUUsT0FBOEI7O1FBRWhFLElBQU0sYUFBYSx3QkFDZCxtQkFBQyxPQUFhLEVBQUMsRUFBSztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU8sU0FBQTtZ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QUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZEOztnQkFyQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF4RVEsT0FBTztnQkFFZ0UsUUFBUTtnQkFBL0Qsd0JBQXdCO2dCQUF4QyxjQUFjOzs7MkJBRnZCO0VBeUVzQyxvQkFBb0I7U0FBN0MsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbmxldCBnbG9iYWxDb3VudGVyID0gMDsgLy8gZ2xvYmFsIElEIGNvdW50ZXIgZm9yIG1lc3NhZ2VzXHJcblxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQmFzZVNlcnZpY2U8Q29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE1lc3NhZ2VEYXRhLCBNZXNzYWdlQ29uZmlnIGV4dGVuZHMgTnpNZXNzYWdlQ29uZmlnPiB7XHJcbiAgcHJvdGVjdGVkIF9jb250YWluZXI6IENvbnRhaW5lckNsYXNzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgY29udGFpbmVyQ2xhc3M6IFR5cGU8Q29udGFpbmVyQ2xhc3M+LFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBfaWRQcmVmaXg6IHN0cmluZyA9ICcnKSB7XHJcblxyXG4gICAgLy8gdGhpcy5fY29udGFpbmVyID0gb3ZlcmxheS5jcmVhdGUoKS5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChjb250YWluZXJDbGFzcykpLmluc3RhbmNlO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShtZXNzYWdlSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlSWQpIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlQWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VEYXRhLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIC8vIFRPRE86IHNwcmVhZCBvbiBsaXRlcmFsIGhhcyBiZWVuIGRpc2FsbG93IG9uIGxhdGVzdCBwcm9wb3NhbFxyXG4gICAgY29uc3QgcmVzdWx0TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZCA9IHtcclxuICAgICAgLi4uKG1lc3NhZ2UgYXMge30pLCAuLi57XHJcbiAgICAgICAgbWVzc2FnZUlkOiB0aGlzLl9nZW5lcmF0ZU1lc3NhZ2VJZCgpLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLl9jb250YWluZXIuY3JlYXRlTWVzc2FnZShyZXN1bHRNZXNzYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0TWVzc2FnZTtcclxuICB9XHJcblxyXG4gIGNvbmZpZyhjb25maWc6IE1lc3NhZ2VDb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfZ2VuZXJhdGVNZXNzYWdlSWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pZFByZWZpeCArIGdsb2JhbENvdW50ZXIrKztcclxuICB9XHJcblxyXG4gIC8vIE1hbnVhbGx5IGNyZWF0aW5nIGNvbnRhaW5lciBmb3Igb3ZlcmxheSB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvciwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzkxXHJcbiAgLy8gTk9URTogd2UgbmV2ZXIgY2xlYW4gdXAgdGhlIGNvbnRhaW5lciBjb21wb25lbnQgYW5kIGl0J3Mgb3ZlcmxheSByZXNvdXJjZXMsIGlmIHdlIHNob3VsZCwgd2UgbmVlZCB0byBkbyBpdCBieSBvdXIgb3duIGNvZGVzLlxyXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyKCk6IENvbnRhaW5lckNsYXNzIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRhaW5lckNsYXNzKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpOyAvLyBVc2Ugcm9vdCBpbmplY3RvclxyXG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTsgLy8gSW1tZWRpYXRlbHkgY2hhbmdlIGRldGVjdGlvbiB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvclxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpOyAvLyBMb2FkIHZpZXcgaW50byBhcHAgcm9vdFxyXG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCkub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICBvdmVybGF5UGFuZS5zdHlsZS56SW5kZXggPSAnMTAxMCc7IC8vIFBhdGNoaW5nOiBhc3NpZ24gdGhlIHNhbWUgekluZGV4IG9mIGFudC1tZXNzYWdlIHRvIGl0J3MgcGFyZW50IG92ZXJsYXkgcGFuZWwsIHRvIHRoZSBhbnQtbWVzc2FnZSdzIHppbmRleCB3b3JrLlxyXG4gICAgb3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQoKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8e30+KS5yb290Tm9kZXNbIDAgXSBhcyBIVE1MRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBOek1lc3NhZ2VCYXNlU2VydmljZTxOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZURhdGEsIE56TWVzc2FnZUNvbmZpZz4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcclxuXHJcbiAgICBzdXBlcihvdmVybGF5LCBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ21lc3NhZ2UtJyk7XHJcbiAgfVxyXG5cclxuICAvLyBTaG9ydGN1dCBtZXRob2RzXHJcbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGluZm8oY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuaW5nKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZGluZyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdsb2FkaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSh0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnIHwgc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==