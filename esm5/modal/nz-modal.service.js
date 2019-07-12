/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoggerService } from '../core/util/logger/logger.service';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
var ModalBuilderForService = /** @class */ (function () {
    function ModalBuilderForService(overlay, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.overlay = overlay;
        this.createModal();
        if (!('nzGetContainer' in options)) { // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            // As we use CDK to create modal in service by force, there is no need to use nzGetContainer
            options.nzGetContainer = null; // Override nzGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        this.modalRef.instance.open();
        this.modalRef.instance.nzAfterClose.subscribe(function () { return _this.destroyModal(); }); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.modalRef && this.modalRef.instance;
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.destroyModal = /**
     * @return {?}
     */
    function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ModalBuilderForService.prototype.changeProps = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.createModal = /**
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(NzModalComponent));
    };
    return ModalBuilderForService;
}());
export { ModalBuilderForService };
function ModalBuilderForService_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalBuilderForService.prototype.modalRef;
    /** @type {?} */
    ModalBuilderForService.prototype.overlayRef;
    /** @type {?} */
    ModalBuilderForService.prototype.overlay;
}
var NzModalService = /** @class */ (function () {
    function NzModalService(overlay, logger, modalControl) {
        this.overlay = overlay;
        this.logger = logger;
        this.modalControl = modalControl;
    }
    Object.defineProperty(NzModalService.prototype, "openModals", {
        // Track of the current close modals (we assume invisible is close this time)
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.openModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalService.prototype, "afterAllClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.afterAllClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    NzModalService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this.modalControl.closeAll();
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.create = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.nzOnCancel !== 'function') {
            options.nzOnCancel = function () {
            }; // Leave a empty function to close this modal by default
        }
        /** @type {?} */
        var modalRef = new ModalBuilderForService(this.overlay, options).getInstance(); // NOTE: use NzModalComponent as the NzModalRef by now, we may need archive the real NzModalRef object in the future
        return modalRef;
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.confirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('nzFooter' in options) {
            this.logger.warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (typeof options.nzOnOk !== 'function') { // NOTE: only support function currently by calling confirm()
            // NOTE: only support function currently by calling confirm()
            options.nzOnOk = function () {
            }; // Leave a empty function to close this modal by default
        }
        options.nzModalType = 'confirm';
        options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
        options.nzMaskClosable = false;
        return this.create(options);
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.info = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'info');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.success = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'success');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.error = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'error');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.warning = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'warning');
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.simpleConfirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (!('nzIconType' in options)) {
            options.nzIconType = {
                'info': 'info-circle',
                'success': 'check-circle',
                'error': 'close-circle',
                'warning': 'exclamation-circle'
            }[confirmType];
        }
        if (!('nzCancelText' in options)) { // Remove the Cancel button if the user not specify a Cancel button
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    };
    NzModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzModalService.ctorParameters = function () { return [
        { type: Overlay },
        { type: LoggerService },
        { type: NzModalControlService }
    ]; };
    return NzModalService;
}());
export { NzModalService };
function NzModalService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalService.prototype.overlay;
    /** @type {?} */
    NzModalService.prototype.logger;
    /** @type {?} */
    NzModalService.prototype.modalControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9uei1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RCxJQUFBO0lBSUUsZ0NBQW9CLE9BQWdCLEVBQUUsT0FBb0M7UUFBcEMsd0JBQUEsRUFBQSxZQUFvQztRQUExRSxpQkFVQztRQVZtQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLDRGQUE0Rjs7WUFDaEksT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0tBQzFFOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUks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OlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL256LW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1UeXBlLCBNb2RhbE9wdGlvbnMsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLnR5cGUnO1xyXG5cclxuLy8gQSBidWlsZGVyIHVzZWQgZm9yIG1hbmFnaW5nIHNlcnZpY2UgY3JlYXRpbmcgbW9kYWxzXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJ1aWxkZXJGb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8TnpNb2RhbENvbXBvbmVudD47IC8vIE1vZGFsIENvbXBvbmVudFJlZiwgXCJudWxsXCIgbWVhbnMgaXQgaGFzIGJlZW4gZGVzdHJveWVkXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7fSkge1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xyXG5cclxuICAgIGlmICghKCduekdldENvbnRhaW5lcicgaW4gb3B0aW9ucykpIHsgLy8gQXMgd2UgdXNlIENESyB0byBjcmVhdGUgbW9kYWwgaW4gc2VydmljZSBieSBmb3JjZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgbnpHZXRDb250YWluZXJcclxuICAgICAgb3B0aW9ucy5uekdldENvbnRhaW5lciA9IG51bGw7IC8vIE92ZXJyaWRlIG56R2V0Q29udGFpbmVyJ3MgZGVmYXVsdCB2YWx1ZSB0byBwcmV2ZW50IGNyZWF0aW5nIGFub3RoZXIgb3ZlcmxheVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlUHJvcHMob3B0aW9ucyk7XHJcbiAgICB0aGlzLm1vZGFsUmVmLmluc3RhbmNlLm9wZW4oKTtcclxuICAgIHRoaXMubW9kYWxSZWYuaW5zdGFuY2UubnpBZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRlc3Ryb3lNb2RhbCgpKTsgLy8gW05PVEVdIEJ5IGRlZmF1bHQsIGNsb3NlIGVxdWFscyBkZXN0cm95IHdoZW4gdXNpbmcgYXMgU2VydmljZVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZiAmJiB0aGlzLm1vZGFsUmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveU1vZGFsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVByb3BzKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGFsUmVmLmluc3RhbmNlLCBvcHRpb25zKTsgLy8gREFOR0VSOiBoZXJlIG5vdCBsaW1pdCB1c2VyJ3MgaW5wdXRzIGF0IHJ1bnRpbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb21wb25lbnQgdG8gQXBwbGljYXRpb25SZWZcclxuICBwcml2YXRlIGNyZWF0ZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOek1vZGFsQ29tcG9uZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsU2VydmljZSB7XHJcbiAgLy8gVHJhY2sgb2YgdGhlIGN1cnJlbnQgY2xvc2UgbW9kYWxzICh3ZSBhc3N1bWUgaW52aXNpYmxlIGlzIGNsb3NlIHRoaXMgdGltZSlcclxuICBnZXQgb3Blbk1vZGFscygpOiBOek1vZGFsUmVmW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5hZnRlckFsbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIC8vIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3NcclxuICBjbG9zZUFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kYWxDb250cm9sLmNsb3NlQWxsKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGU8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubnpPbkNhbmNlbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBvcHRpb25zLm56T25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgIH07IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgTW9kYWxCdWlsZGVyRm9yU2VydmljZSh0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7IC8vIE5PVEU6IHVzZSBOek1vZGFsQ29tcG9uZW50IGFzIHRoZSBOek1vZGFsUmVmIGJ5IG5vdywgd2UgbWF5IG5lZWQgYXJjaGl2ZSB0aGUgcmVhbCBOek1vZGFsUmVmIG9iamVjdCBpbiB0aGUgZnV0dXJlXHJcblxyXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSA9ICdjb25maXJtJyk6IE56TW9kYWxSZWY8VD4ge1xyXG4gICAgaWYgKCduekZvb3RlcicgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJuekZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcclxuICAgIH1cclxuICAgIGlmICghKCdueldpZHRoJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLm56V2lkdGggPSA0MTY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubnpPbk9rICE9PSAnZnVuY3Rpb24nKSB7IC8vIE5PVEU6IG9ubHkgc3VwcG9ydCBmdW5jdGlvbiBjdXJyZW50bHkgYnkgY2FsbGluZyBjb25maXJtKClcclxuICAgICAgb3B0aW9ucy5uek9uT2sgPSAoKSA9PiB7XHJcbiAgICAgIH07IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucy5uek1vZGFsVHlwZSA9ICdjb25maXJtJztcclxuICAgIG9wdGlvbnMubnpDbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLm56Q2xhc3NOYW1lIHx8ICcnfWA7XHJcbiAgICBvcHRpb25zLm56TWFza0Nsb3NhYmxlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBpbmZvPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnaW5mbycpO1xyXG4gIH1cclxuXHJcbiAgc3VjY2VzczxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30pOiBOek1vZGFsUmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIGVycm9yPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnZXJyb3InKTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmc8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaW1wbGVDb25maXJtKG9wdGlvbnMsICd3YXJuaW5nJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNpbXBsZUNvbmZpcm08VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUpOiBOek1vZGFsUmVmPFQ+IHtcclxuICAgIGlmICghKCduekljb25UeXBlJyBpbiBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLm56SWNvblR5cGUgPSB7XHJcbiAgICAgICAgJ2luZm8nICAgOiAnaW5mby1jaXJjbGUnLFxyXG4gICAgICAgICdzdWNjZXNzJzogJ2NoZWNrLWNpcmNsZScsXHJcbiAgICAgICAgJ2Vycm9yJyAgOiAnY2xvc2UtY2lyY2xlJyxcclxuICAgICAgICAnd2FybmluZyc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXHJcbiAgICAgIH1bIGNvbmZpcm1UeXBlIF07XHJcbiAgICB9XHJcbiAgICBpZiAoISgnbnpDYW5jZWxUZXh0JyBpbiBvcHRpb25zKSkgeyAvLyBSZW1vdmUgdGhlIENhbmNlbCBidXR0b24gaWYgdGhlIHVzZXIgbm90IHNwZWNpZnkgYSBDYW5jZWwgYnV0dG9uXHJcbiAgICAgIG9wdGlvbnMubnpDYW5jZWxUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpcm0ob3B0aW9ucywgY29uZmlybVR5cGUpO1xyXG4gIH1cclxufVxyXG4iXX0=