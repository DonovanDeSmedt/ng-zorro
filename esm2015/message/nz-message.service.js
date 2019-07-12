/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/** @type {?} */
let globalCounter = 0;
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} _idPrefix
     */
    constructor(overlay, containerClass, injector, cfr, appRef, _idPrefix = '') {
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
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, (/** @type {?} */ (message)), {
            messageId: this._generateMessageId(),
            options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        this._container.setConfig(config);
    }
    /**
     * @return {?}
     */
    _generateMessageId() {
        return this._idPrefix + globalCounter++;
    }
    /**
     * @return {?}
     */
    createContainer() {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef.instance;
    }
}
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
export class NzMessageService extends NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message-');
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = i0.defineInjectable({ factory: function NzMessageService_Factory() { return new i1.NzMessageService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.NzMessageService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBbUIsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUd0SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFHL0UsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7QUFFdEIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7O0lBRy9CLFlBQ1UsU0FDQSxnQkFDQSxVQUNBLEtBQ0EsUUFDQSxZQUFvQixFQUFFO1FBTHRCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sY0FBUyxHQUFULFNBQVM7O1FBR2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDcEM7S0FDRjs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CLEVBQUUsT0FBOEI7O1FBRWhFLE1BQU0sYUFBYSxxQkFDZCxtQkFBQyxPQUFhLEVBQUMsRUFBSztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU87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RWdFLFFBQVE7WUFBL0Qsd0JBQXdCO1lBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xyXG5cclxubGV0IGdsb2JhbENvdW50ZXIgPSAwOyAvLyBnbG9iYWwgSUQgY291bnRlciBmb3IgbWVzc2FnZXNcclxuXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VCYXNlU2VydmljZTxDb250YWluZXJDbGFzcyBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgTWVzc2FnZURhdGEsIE1lc3NhZ2VDb25maWcgZXh0ZW5kcyBOek1lc3NhZ2VDb25maWc+IHtcclxuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJDbGFzczogVHlwZTxDb250YWluZXJDbGFzcz4sXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9pZFByZWZpeDogc3RyaW5nID0gJycpIHtcclxuXHJcbiAgICAvLyB0aGlzLl9jb250YWluZXIgPSBvdmVybGF5LmNyZWF0ZSgpLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKGNvbnRhaW5lckNsYXNzKSkuaW5zdGFuY2U7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKG1lc3NhZ2VJZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKG1lc3NhZ2VJZCkge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2VBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZURhdGEsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgLy8gVE9ETzogc3ByZWFkIG9uIGxpdGVyYWwgaGFzIGJlZW4gZGlzYWxsb3cgb24gbGF0ZXN0IHByb3Bvc2FsXHJcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkID0ge1xyXG4gICAgICAuLi4obWVzc2FnZSBhcyB7fSksIC4uLntcclxuICAgICAgICBtZXNzYWdlSWQ6IHRoaXMuX2dlbmVyYXRlTWVzc2FnZUlkKCksXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5jcmVhdGVNZXNzYWdlKHJlc3VsdE1lc3NhZ2UpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHRNZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnKGNvbmZpZzogTWVzc2FnZUNvbmZpZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnNldENvbmZpZyhjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9nZW5lcmF0ZU1lc3NhZ2VJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkUHJlZml4ICsgZ2xvYmFsQ291bnRlcisrO1xyXG4gIH1cclxuXHJcbiAgLy8gTWFudWFsbHkgY3JlYXRpbmcgY29udGFpbmVyIGZvciBvdmVybGF5IHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zOTFcclxuICAvLyBOT1RFOiB3ZSBuZXZlciBjbGVhbiB1cCB0aGUgY29udGFpbmVyIGNvbXBvbmVudCBhbmQgaXQncyBvdmVybGF5IHJlc291cmNlcywgaWYgd2Ugc2hvdWxkLCB3ZSBuZWVkIHRvIGRvIGl0IGJ5IG91ciBvd24gY29kZXMuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb250YWluZXIoKTogQ29udGFpbmVyQ2xhc3Mge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29udGFpbmVyQ2xhc3MpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7IC8vIFVzZSByb290IGluamVjdG9yXHJcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpOyAvLyBJbW1lZGlhdGVseSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7IC8vIExvYWQgdmlldyBpbnRvIGFwcCByb290XHJcbiAgICBjb25zdCBvdmVybGF5UGFuZSA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKS5vdmVybGF5RWxlbWVudDtcclxuICAgIG92ZXJsYXlQYW5lLnN0eWxlLnpJbmRleCA9ICcxMDEwJzsgLy8gUGF0Y2hpbmc6IGFzc2lnbiB0aGUgc2FtZSB6SW5kZXggb2YgYW50LW1lc3NhZ2UgdG8gaXQncyBwYXJlbnQgb3ZlcmxheSBwYW5lbCwgdG8gdGhlIGFudC1tZXNzYWdlJ3MgemluZGV4IHdvcmsuXHJcbiAgICBvdmVybGF5UGFuZS5hcHBlbmRDaGlsZCgoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjx7fT4pLnJvb3ROb2Rlc1sgMCBdIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlU2VydmljZSBleHRlbmRzIE56TWVzc2FnZUJhc2VTZXJ2aWNlPE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlQ29uZmlnPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xyXG5cclxuICAgIHN1cGVyKG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZS0nKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcclxuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19