/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Inject, Injector, Input, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { ESCAPE } from '@angular/cdk/keycodes';
import ModalUtil from './modal-util';
import { NZ_MODAL_CONFIG, NZ_MODAL_DEFAULT_CONFIG } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
/** @type {?} */
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
/**
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class NzModalComponent extends NzModalRef {
    /**
     * @param {?} overlay
     * @param {?} i18n
     * @param {?} renderer
     * @param {?} cfr
     * @param {?} elementRef
     * @param {?} viewContainer
     * @param {?} nzMeasureScrollbarService
     * @param {?} modalControl
     * @param {?} focusTrapFactory
     * @param {?} config
     * @param {?} document
     */
    constructor(overlay, i18n, renderer, cfr, elementRef, viewContainer, nzMeasureScrollbarService, modalControl, focusTrapFactory, config, document) {
        // tslint:disable-line:no-any
        super();
        this.overlay = overlay;
        this.i18n = i18n;
        this.renderer = renderer;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.config = config;
        this.document = document;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nzModalType = 'default';
        this.nzGetContainer = () => this.overlay.create(); // [STATIC]
        this.nzVisible = false;
        this.nzVisibleChange = new EventEmitter();
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        this.nzClosable = true;
        this.nzMask = true;
        this.nzMaskClosable = true;
        this.nzAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        this.nzAfterClose = new EventEmitter();
        this.nzOkType = 'primary';
        this.nzOkLoading = false;
        this.nzOnOk = new EventEmitter();
        this.nzCancelLoading = false;
        this.nzOnCancel = new EventEmitter();
        this.nzKeyboard = true;
        this.transformOrigin = '0px 0px 0px';
        this.config = this.mergeDefaultConfig(this.config);
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    get okText() {
        return this.nzOkText || this.locale.okText;
    }
    /**
     * @return {?}
     */
    get cancelText() {
        return this.nzCancelText || this.locale.cancelText;
    }
    /**
     * @return {?}
     */
    get hidden() {
        return !this.nzVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Modal'));
        fromEvent(this.document.body, 'keydown').pipe(takeUntil(this.unsubscribe$)).subscribe(e => this.keydownListener(e));
        if (this.isComponent(this.nzContent)) {
            this.createDynamicComponent(/** @type {?} */ (this.nzContent)); // Create component along without View
        }
        if (this.isModalButtons(this.nzFooter)) { // Setup default button options
            // Setup default button options
            this.nzFooter = this.formatModalButtons(/** @type {?} */ (this.nzFooter));
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof OverlayRef) { // NOTE: only attach the dom to overlay, the view container is not changed actually
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzVisible"]) {
            this.handleVisibleStateChange(this.nzVisible, !changes["nzVisible"].firstChange); // Do not trigger animation while initializing
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            (/** @type {?} */ (this.autoFocusButtonOk.nativeElement)).focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.nzKeyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @return {?}
     */
    open() {
        this.changeVisibleFromInside(true);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this;
    }
    /**
     * @return {?}
     */
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClickMask($event) {
        if (this.nzMask &&
            this.nzMaskClosable &&
            (/** @type {?} */ ($event.target)).classList.contains('ant-modal-wrap') &&
            this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isModalType(type) {
        return this.nzModalType === type;
    }
    /**
     * @return {?}
     */
    onClickCloseBtn() {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onClickOkCancel(type) {
        /** @type {?} */
        const trigger = { 'ok': this.nzOnOk, 'cancel': this.nzOnCancel }[type];
        /** @type {?} */
        const loadingKey = { 'ok': 'nzOkLoading', 'cancel': 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (doClose) => (doClose !== false) && this.close(/** @type {?} */ (doClose)); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                (/** @type {?} */ (result)).then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isComponent(value) {
        return value instanceof Type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    /**
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) { // Hide scrollbar at the first time when shown up
            // Hide scrollbar at the first time when shown up
            this.changeBodyOverflow(1);
            this.savePreviouslyFocusedElement();
            this.trapFocus();
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            .then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.nzAfterOpen.emit();
            }
            else {
                this.nzAfterClose.emit(closeResult);
                this.restoreFocus();
                this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
            }
        });
        // .then(() => this.changeBodyOverflow());
    }
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    /**
     * @param {?} button
     * @return {?}
     */
    onButtonClick(button) {
        /** @type {?} */
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            (/** @type {?} */ (result)).then(() => button.loading = false).catch(() => button.loading = false);
        }
    }
    /**
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    changeVisibleFromInside(visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    animateTo(isVisible) {
        if (isVisible) { // Figure out the lastest click position when shows up
            // Figure out the lastest click position when shows up
            window.setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((resolve) => window.setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, MODAL_ANIMATE_DURATION));
    }
    /**
     * @param {?} buttons
     * @return {?}
     */
    formatModalButtons(buttons) {
        return buttons.map((button) => {
            /** @type {?} */
            const mixedButton = Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
            // if (mixedButton.autoLoading) { mixedButton.loading = false; } // Force loading to false when autoLoading=true
            return mixedButton;
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param {?} component Component class
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        const childInjector = Injector.create({
            providers: [{ provide: NzModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.nzComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    updateTransformOrigin() {
        /** @type {?} */
        const modalElement = /** @type {?} */ (this.modalContainer.nativeElement);
        /** @type {?} */
        const lastPosition = ModalUtil.getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = `${lastPosition.x - modalElement.offsetLeft}px ${lastPosition.y - modalElement.offsetTop}px 0px`;
        }
        // else {
        //   this.transformOrigin = '0px 0px 0px';
        // }
    }
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param {?=} plusNum The number that the openModals.length will increase soon
     * @return {?}
     */
    changeBodyOverflow(plusNum = 0) {
        if (this.config.autoBodyPadding) {
            /** @type {?} */
            const openModals = this.modalControl.openModals;
            if (openModals.length + plusNum > 0) {
                if (this.hasBodyScrollBar()) { // Adding padding-right only when body's scrollbar is able to shown up
                    // Adding padding-right only when body's scrollbar is able to shown up
                    this.renderer.setStyle(this.document.body, 'padding-right', `${this.nzMeasureScrollbarService.scrollBarWidth}px`);
                    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
                }
            }
            else { // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                this.renderer.removeStyle(this.document.body, 'padding-right');
                this.renderer.removeStyle(this.document.body, 'overflow');
            }
        }
    }
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     * @return {?}
     */
    hasBodyScrollBar() {
        return this.document.body.scrollHeight > (window.innerHeight || this.document.documentElement.clientHeight);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    mergeDefaultConfig(config) {
        return Object.assign({}, NZ_MODAL_DEFAULT_CONFIG, config);
    }
    /**
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = /** @type {?} */ (this.document.activeElement);
            this.previouslyFocusedElement.blur();
        }
    }
    /**
     * @return {?}
     */
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    /**
     * @return {?}
     */
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal',
                template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div>\r\n  <div *ngIf=\"nzMask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"nzMaskStyle\"\r\n    [style.zIndex]=\"nzZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    class=\"ant-modal-wrap {{ nzWrapClassName }}\"\r\n    [style.zIndex]=\"nzZIndex\"\r\n    [style.display]=\"hidden ? 'none' : ''\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ nzClassName }}\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"nzStyle\"\r\n      [style.width]=\"nzWidth | toCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"nzClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\">\r\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinel</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"nzTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"nzFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(nzFooter)\" [ngTemplateOutlet]=\"nzFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(nzFooter)\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(nzFooter)\">\r\n        <button *ngFor=\"let button of nzFooter\" nz-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [nzType]=\"button.type\"\r\n          [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\"\r\n          [nzGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"nzCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"nzOkText!==null\" nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"nzIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><span [innerHTML]=\"nzTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button *ngIf=\"nzCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"nzOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n"
            }] }
];
/** @nocollapse */
NzModalComponent.ctorParameters = () => [
    { type: Overlay },
    { type: NzI18nService },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: NzMeasureScrollbarService },
    { type: NzModalControlService },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: Inject, args: [NZ_MODAL_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NzModalComponent.propDecorators = {
    nzModalType: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzComponentParams: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzGetContainer: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzZIndex: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzMask: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzAfterOpen: [{ type: Output }],
    nzAfterClose: [{ type: Output }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzOkLoading: [{ type: Input }],
    nzOnOk: [{ type: Input }, { type: Output }],
    autoFocusButtonOk: [{ type: ViewChild, args: ['autoFocusButtonOk', { read: ElementRef },] }],
    nzCancelText: [{ type: Input }],
    nzCancelLoading: [{ type: Input }],
    nzOnCancel: [{ type: Input }, { type: Output }],
    modalContainer: [{ type: ViewChild, args: ['modalContainer',] }],
    bodyContainer: [{ type: ViewChild, args: ['bodyContainer', { read: ViewContainerRef },] }],
    nzKeyboard: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
function NzModalComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzModalComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    NzModalComponent.prototype.focusTrap;
    /** @type {?} */
    NzModalComponent.prototype.locale;
    /** @type {?} */
    NzModalComponent.prototype.nzModalType;
    /** @type {?} */
    NzModalComponent.prototype.nzContent;
    /** @type {?} */
    NzModalComponent.prototype.nzComponentParams;
    /** @type {?} */
    NzModalComponent.prototype.nzFooter;
    /** @type {?} */
    NzModalComponent.prototype.nzGetContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzVisible;
    /** @type {?} */
    NzModalComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzModalComponent.prototype.nzZIndex;
    /** @type {?} */
    NzModalComponent.prototype.nzWidth;
    /** @type {?} */
    NzModalComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzIconType;
    /** @type {?} */
    NzModalComponent.prototype.nzTitle;
    /** @type {?} */
    NzModalComponent.prototype.nzClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzMask;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzModalComponent.prototype.nzOkText;
    /** @type {?} */
    NzModalComponent.prototype.nzOkType;
    /** @type {?} */
    NzModalComponent.prototype.nzOkLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOnOk;
    /** @type {?} */
    NzModalComponent.prototype.autoFocusButtonOk;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelText;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzModalComponent.prototype.modalContainer;
    /** @type {?} */
    NzModalComponent.prototype.bodyContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzModalComponent.prototype.maskAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.modalAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.transformOrigin;
    /** @type {?} */
    NzModalComponent.prototype.contentComponentRef;
    /** @type {?} */
    NzModalComponent.prototype.animationState;
    /** @type {?} */
    NzModalComponent.prototype.container;
    /** @type {?} */
    NzModalComponent.prototype.overlay;
    /** @type {?} */
    NzModalComponent.prototype.i18n;
    /** @type {?} */
    NzModalComponent.prototype.renderer;
    /** @type {?} */
    NzModalComponent.prototype.cfr;
    /** @type {?} */
    NzModalComponent.prototype.elementRef;
    /** @type {?} */
    NzModalComponent.prototype.viewContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzMeasureScrollbarService;
    /** @type {?} */
    NzModalComponent.prototype.modalControl;
    /** @type {?} */
    NzModalComponent.prototype.focusTrapFactory;
    /** @type {?} */
    NzModalComponent.prototype.config;
    /** @type {?} */
    NzModalComponent.prototype.document;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (/** @type {?} */ (obj)).then === 'function' && typeof (/** @type {?} */ (obj)).catch === 'function';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQWlCLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7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QUFFLElBQUksRUFBRSxVQUFVLEVBQUU7MkJBQ25ELEtBQUs7OEJBTUwsS0FBSzt5QkFDTCxLQUFLLFlBQUksTUFBTTs2QkFDZixTQUFTLFNBQUMsZ0JBQWdCOzRCQUMxQixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3lCQUVyRCxLQUFLOzs7SUFoREksWUFBWSxFQUFFOzs7O0lBVWQsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBc0JkLFlBQVksRUFBRTs7OztJQVNkLFlBQVksRUFBRTs7OztJQUtkLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRYMUIsU0FBUyxTQUFTLENBQUMsR0FBYztJQUMvQixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBTyxtQkFBQyxHQUFrQixFQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxPQUFPLG1CQUFDLEdBQWtCLEVBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO0NBQy9LIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9uei1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCBNb2RhbFV0aWwgZnJvbSAnLi9tb2RhbC11dGlsJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbmZpZywgTlpfTU9EQUxfQ09ORklHLCBOWl9NT0RBTF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL256LW1vZGFsLnR5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuXHJcbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgIDogJ256LW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbW9kYWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgTnpNb2RhbFJlZjxULCBSPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XHJcbiAgQElucHV0KCkgbnpDb21wb25lbnRQYXJhbXM6IFQ7IC8vIFtTVEFUSUNdIE9OTFkgYXZhbGlhYmxlIHdoZW4gbnpDb250ZW50IGlzIGEgY29tcG9uZW50XHJcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj47IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIG56R2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKSA9ICgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUoKTsgLy8gW1NUQVRJQ11cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpIG56WkluZGV4OiBudW1iZXIgPSAxMDAwO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDUyMDtcclxuICBASW5wdXQoKSBueldyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBuekljb25UeXBlOiBzdHJpbmcgPSAncXVlc3Rpb24tY2lyY2xlJzsgLy8gQ29uZmlybSBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56TWFza1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IG9iamVjdDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHsgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7IC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIG56QWZ0ZXJDbG9zZVxyXG4gICAgcmV0dXJuIHRoaXMubnpBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIFByZWRlZmluZWQgT0sgJiBDYW5jZWwgYnV0dG9uc1xyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm56T2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56T2tUeXBlID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxyXG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dDogc3RyaW5nO1xyXG5cclxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpDYW5jZWxUZXh0IHx8IHRoaXMubG9jYWxlLmNhbmNlbFRleHQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHlDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56S2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm56VmlzaWJsZSAmJiAhdGhpcy5hbmltYXRpb25TdGF0ZTtcclxuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxyXG4gIG1hc2tBbmltYXRpb25DbGFzc01hcDogb2JqZWN0O1xyXG4gIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIG56Q29udGVudCBhcyBDb21wb25lbnRcclxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTnpNb2RhbENvbnRyb2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgQEluamVjdChOWl9NT0RBTF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOek1vZGFsQ29uZmlnLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMubWVyZ2VEZWZhdWx0Q29uZmlnKHRoaXMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdNb2RhbCcpKTtcclxuXHJcbiAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5kb2N1bWVudC5ib2R5LCAna2V5ZG93bicpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMubnpDb250ZW50KSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5uekNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlcikpIHsgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xyXG4gICAgICB0aGlzLm56Rm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5uekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpHZXRDb250YWluZXIoKSA6IHRoaXMubnpHZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikgeyAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgbW9kYWwgd2hlbiBhZnRlck9wZW4vYWZ0ZXJDbG9zZSBpcyBzdGFibGVcclxuICAgIHRoaXMubW9kYWxDb250cm9sLnJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBbTk9URV0gTk9UIGF2YWlsYWJsZSB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UhXHJcbiAgLy8gQmVjYXVzZSBuZ09uQ2hhbmdlcyBuZXZlciBiZSBjYWxsZWQgd2hlbiB1c2luZyBieSBzZXJ2aWNlLFxyXG4gIC8vIGhlcmUgd2UgY2FuJ3Qgc3VwcG9ydCBcIm56Q29udGVudFwiKENvbXBvbmVudCkgZXRjLiBhcyBpbnB1dHMgdGhhdCBpbml0aWFsaXplZCBkeW5hbWljYWxseS5cclxuICAvLyBCVVQ6IFVzZXIgYWxzbyBjYW4gY2hhbmdlIFwibnpDb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh0aGlzLm56VmlzaWJsZSwgIWNoYW5nZXMubnpWaXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgdXNpbmcgQ29tcG9uZW50LCBpdCBpcyB0aGUgdGltZSB0byBhdHRhY2ggVmlldyB3aGlsZSBib2R5Q29udGFpbmVyIGlzIHJlYWR5XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xyXG4gICAgICAodGhpcy5hdXRvRm9jdXNCdXR0b25Pay5uYXRpdmVFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBDbG9zZSBzZWxmIGJlZm9yZSBkZXN0cnVjdGluZ1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMubW9kYWxDb250cm9sLmRlcmVnaXN0ZXJNb2RhbCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMubnpLZXlib2FyZCkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHsgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcclxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25DbGlja01hc2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMubnpNYXNrICYmXHJcbiAgICAgIHRoaXMubnpNYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYW50LW1vZGFsLXdyYXAnKSAmJlxyXG4gICAgICB0aGlzLm56VmlzaWJsZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RhbFR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyAnb2snOiB0aGlzLm56T25PaywgJ2NhbmNlbCc6IHRoaXMubnpPbkNhbmNlbCB9WyB0eXBlIF07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyAnb2snOiAnbnpPa0xvYWRpbmcnLCAnY2FuY2VsJzogJ256Q2FuY2VsTG9hZGluZycgfVsgdHlwZSBdO1xyXG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiAoZG9DbG9zZSAhPT0gZmFsc2UpICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTsgLy8gVXNlcnMgY2FuIHJldHVybiBcImZhbHNlXCIgdG8gcHJldmVudCBjbG9zaW5nIGJ5IGRlZmF1bHRcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhpc1sgbG9hZGluZ0tleSBdID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2UpID0+IHtcclxuICAgICAgICAgIHRoaXNbIGxvYWRpbmdLZXkgXSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2FzZUNsb3NlKGRvQ2xvc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHZvaWQ+KS50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTW9kYWxCdXR0b25zKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvLyBEbyByZXN0IHRoaW5ncyB3aGVuIHZpc2libGUgc3RhdGUgY2hhbmdlZFxyXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHZpc2libGUpIHsgLy8gSGlkZSBzY3JvbGxiYXIgYXQgdGhlIGZpcnN0IHRpbWUgd2hlbiBzaG93biB1cFxyXG4gICAgICB0aGlzLmNoYW5nZUJvZHlPdmVyZmxvdygxKTtcclxuICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMudHJhcEZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2VcclxuICAgIC5yZXNvbHZlKGFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGVUbyh2aXNpYmxlKSlcclxuICAgIC50aGVuKCgpID0+IHsgLy8gRW1pdCBvcGVuL2Nsb3NlIGV2ZW50IGFmdGVyIGFuaW1hdGlvbnMgb3ZlclxyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMubnpBZnRlck9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpBZnRlckNsb3NlLmVtaXQoY2xvc2VSZXN1bHQpO1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKTsgLy8gU2hvdy9oaWRlIHNjcm9sbGJhciB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gLnRoZW4oKCkgPT4gdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zWyBwcm9wIF07XHJcbiAgICBjb25zdCBhcmdzID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBuekZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKS5jYXRjaCgoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoYW5nZSBuelZpc2libGUgZnJvbSBpbnNpZGVcclxuICBwcml2YXRlIGNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHZpc2libGU6IGJvb2xlYW4sIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIC8vIENoYW5nZSBuelZpc2libGUgdmFsdWUgaW1tZWRpYXRlbHlcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZSwgdHJ1ZSwgY2xvc2VSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZShzdGF0ZTogQW5pbWF0aW9uU3RhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbIGBmYWRlLSR7c3RhdGV9YCBdICAgICAgIDogdHJ1ZSxcclxuICAgICAgICBbIGBmYWRlLSR7c3RhdGV9LWFjdGl2ZWAgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgWyBgem9vbS0ke3N0YXRlfWAgXSAgICAgICA6IHRydWUsXHJcbiAgICAgICAgWyBgem9vbS0ke3N0YXRlfS1hY3RpdmVgIF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkgeyAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUobnVsbCk7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0sIE1PREFMX0FOSU1BVEVfRFVSQVRJT04pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcclxuICAgIHJldHVybiBidXR0b25zLm1hcCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1peGVkQnV0dG9uID0ge1xyXG4gICAgICAgIC4uLntcclxuICAgICAgICAgIHR5cGUgICAgICAgOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBzaXplICAgICAgIDogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgYXV0b0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaG93ICAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgIGxvYWRpbmcgICAgOiBmYWxzZSxcclxuICAgICAgICAgIGRpc2FibGVkICAgOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uYnV0dG9uXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBpZiAobWl4ZWRCdXR0b24uYXV0b0xvYWRpbmcpIHsgbWl4ZWRCdXR0b24ubG9hZGluZyA9IGZhbHNlOyB9IC8vIEZvcmNlIGxvYWRpbmcgdG8gZmFsc2Ugd2hlbiBhdXRvTG9hZGluZz10cnVlXHJcblxyXG4gICAgICByZXR1cm4gbWl4ZWRCdXR0b247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBOek1vZGFsUmVmLCB1c2VWYWx1ZTogdGhpcyB9IF0sXHJcbiAgICAgIHBhcmVudCAgIDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMubnpDb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb21wb25lbnRQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXHJcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcclxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IE1vZGFsVXRpbC5nZXRMYXN0Q2xpY2tQb3NpdGlvbigpO1xyXG4gICAgaWYgKGxhc3RQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke2xhc3RQb3NpdGlvbi54IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHtsYXN0UG9zaXRpb24ueSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcclxuICAgIH1cclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4IDBweCc7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYWtlIGNhcmUgb2YgdGhlIGJvZHkncyBvdmVyZmxvdyB0byBkZWNpZGUgdGhlIGV4aXN0ZW5zZSBvZiBzY3JvbGxiYXJcclxuICAgKiBAcGFyYW0gcGx1c051bSBUaGUgbnVtYmVyIHRoYXQgdGhlIG9wZW5Nb2RhbHMubGVuZ3RoIHdpbGwgaW5jcmVhc2Ugc29vblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hhbmdlQm9keU92ZXJmbG93KHBsdXNOdW06IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQm9keVBhZGRpbmcpIHtcclxuICAgICAgY29uc3Qgb3Blbk1vZGFscyA9IHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XHJcblxyXG4gICAgICBpZiAob3Blbk1vZGFscy5sZW5ndGggKyBwbHVzTnVtID4gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0JvZHlTY3JvbGxCYXIoKSkgeyAvLyBBZGRpbmcgcGFkZGluZy1yaWdodCBvbmx5IHdoZW4gYm9keSdzIHNjcm9sbGJhciBpcyBhYmxlIHRvIHNob3duIHVwXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnLCBgJHt0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGh9cHhgKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgeyAvLyBOT1RFOiB3ZSBuZWVkIHRvIGFsd2F5cyByZW1vdmUgdGhlIHBhZGRpbmcgZHVlIHRvIHRoZSBzY3JvbGwgYmFyIG1heSBiZSBkaXNhcHBlYXIgYnkgd2luZG93IHJlc2l6aW5nIGJlZm9yZSBtb2RhbCBjbG9zZWRcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgZWxlbWVudCBpcyBhYmxlIHRvIGhhcyB0aGUgc2Nyb2xsIGJhciAoaWYgdGhlIGJvZHkgY29udGVudCBoZWlnaHQgZXhjZWVkcyB0aGUgd2luZG93J3MgaGVpZ2h0KVxyXG4gICAqIEV4Y2VwdGlvbmFsIENhc2VzOiB1c2VycyBjYW4gc2hvdyB0aGUgc2Nyb2xsIGJhciBieSB0aGVpciBvd24gcGVybWFuZW50bHkgKGVnLiBvdmVyZmxvdzogc2Nyb2xsKVxyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFzQm9keVNjcm9sbEJhcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZXJnZURlZmF1bHRDb25maWcoY29uZmlnOiBOek1vZGFsQ29uZmlnKTogTnpNb2RhbENvbmZpZyB7XHJcbiAgICByZXR1cm4geyAuLi5OWl9NT0RBTF9ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcclxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqOiB7fSB8IHZvaWQpOiBib29sZWFuIHtcclxuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS50aGVuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG4iXX0=