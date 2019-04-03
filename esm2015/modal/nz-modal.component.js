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
                template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\n\n<div>\n  <div *ngIf=\"nzMask\"\n    class=\"ant-modal-mask\"\n    [ngClass]=\"maskAnimationClassMap\"\n    [class.ant-modal-mask-hidden]=\"hidden\"\n    [ngStyle]=\"nzMaskStyle\"\n    [style.zIndex]=\"nzZIndex\"\n  ></div>\n  <div\n    (click)=\"onClickMask($event)\"\n    class=\"ant-modal-wrap {{ nzWrapClassName }}\"\n    [style.zIndex]=\"nzZIndex\"\n    [style.display]=\"hidden ? 'none' : ''\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div #modalContainer\n      class=\"ant-modal {{ nzClassName }}\"\n      [ngClass]=\"modalAnimationClassMap\"\n      [ngStyle]=\"nzStyle\"\n      [style.width]=\"nzWidth | toCssUnit\"\n      [style.transform-origin]=\"transformOrigin\"\n      role=\"document\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"nzClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\n          <span class=\"ant-modal-close-x\">\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\n          </span>\n        </button>\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinel</div>\n  </div>\n</div>\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n  <div *ngIf=\"nzTitle\" class=\"ant-modal-header\">\n    <div class=\"ant-modal-title\">\n      <ng-container [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <ng-container #bodyContainer>\n      <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div *ngIf=\"nzFooter !== null\" class=\"ant-modal-footer\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(nzFooter)\" [ngTemplateOutlet]=\"nzFooter\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(nzFooter)\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\n      <ng-container *ngSwitchCase=\"isModalButtons(nzFooter)\">\n        <button *ngFor=\"let button of nzFooter\" nz-button\n          (click)=\"onButtonClick(button)\"\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\n          [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n          [nzType]=\"button.type\"\n          [nzShape]=\"button.shape\"\n          [nzSize]=\"button.size\"\n          [nzGhost]=\"button.ghost\"\n        >{{ button.label }}</button>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button *ngIf=\"nzCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"nzOkText!==null\" nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\n          {{ okText }}\n        </button>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <div class=\"ant-modal-confirm-body-wrapper\">\n      <div class=\"ant-modal-confirm-body\">\n        <i nz-icon [type]=\"nzIconType\"></i>\n        <span class=\"ant-modal-confirm-title\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><span [innerHTML]=\"nzTitle\"></span></ng-container>\n          </ng-container>\n        </span>\n        <div class=\"ant-modal-confirm-content\">\n          <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"ant-modal-confirm-btns\">\n        <button nz-button *ngIf=\"nzCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"nzOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\n          {{ okText }}\n        </button>\n      </div>\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\n  </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQWlCLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7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QUFFLElBQUksRUFBRSxVQUFVLEVBQUU7MkJBQ25ELEtBQUs7OEJBTUwsS0FBSzt5QkFDTCxLQUFLLFlBQUksTUFBTTs2QkFDZixTQUFTLFNBQUMsZ0JBQWdCOzRCQUMxQixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3lCQUVyRCxLQUFLOzs7SUFoREksWUFBWSxFQUFFOzs7O0lBVWQsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBc0JkLFlBQVksRUFBRTs7OztJQVNkLFlBQVksRUFBRTs7OztJQUtkLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRYMUIsU0FBUyxTQUFTLENBQUMsR0FBYztJQUMvQixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBTyxtQkFBQyxHQUFrQixFQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxPQUFPLG1CQUFDLEdBQWtCLEVBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO0NBQy9LIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgTW9kYWxVdGlsIGZyb20gJy4vbW9kYWwtdXRpbCc7XG5pbXBvcnQgeyBOek1vZGFsQ29uZmlnLCBOWl9NT0RBTF9DT05GSUcsIE5aX01PREFMX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tb2RhbC1jb25maWcnO1xuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGUsIE9uQ2xpY2tDYWxsYmFjayB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XG5cbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXG5cbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBOek1vZGFsUmVmPFQsIFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxuICBASW5wdXQoKSBuekNvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBuekNvbnRlbnQgaXMgYSBjb21wb25lbnRcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj47IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxuICBASW5wdXQoKSBuekdldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIG56WkluZGV4OiBudW1iZXIgPSAxMDAwO1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XG4gIEBJbnB1dCgpIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1hc2tTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogb2JqZWN0O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHsgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cbiAgICByZXR1cm4gdGhpcy5uekFmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4geyAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvLyAtLS0gUHJlZGVmaW5lZCBPSyAmIENhbmNlbCBidXR0b25zXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XG5cbiAgZ2V0IG9rVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56T2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56T2tUeXBlID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcblxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56Q2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0O1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56S2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56VmlzaWJsZSAmJiAhdGhpcy5hbmltYXRpb25TdGF0ZTtcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cbiAgbWFza0FuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3Q7XG4gIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdDtcbiAgdHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JzsgLy8gVGhlIG9yaWdpbiBwb2ludCB0aGF0IGFuaW1hdGlvbiBiYXNlZCBvblxuXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIG56Q29udGVudCBhcyBDb21wb25lbnRcbiAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7IC8vIEN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTnpNb2RhbENvbnRyb2xTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBASW5qZWN0KE5aX01PREFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IE56TW9kYWxDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm1lcmdlRGVmYXVsdENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJykpO1xuXG4gICAgZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KHRoaXMuZG9jdW1lbnQuYm9keSwgJ2tleWRvd24nKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMubnpDb250ZW50KSkge1xuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljQ29tcG9uZW50KHRoaXMubnpDb250ZW50IGFzIFR5cGU8VD4pOyAvLyBDcmVhdGUgY29tcG9uZW50IGFsb25nIHdpdGhvdXQgVmlld1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTW9kYWxCdXR0b25zKHRoaXMubnpGb290ZXIpKSB7IC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcbiAgICAgIHRoaXMubnpGb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLm56Rm9vdGVyIGFzIEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHRoZSBtb2RhbCBkb20gdG8gZWxzZXdoZXJlXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5uekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpHZXRDb250YWluZXIoKSA6IHRoaXMubnpHZXRDb250YWluZXI7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikgeyAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXG4gICAgdGhpcy5tb2RhbENvbnRyb2wucmVnaXN0ZXJNb2RhbCh0aGlzKTtcbiAgfVxuXG4gIC8vIFtOT1RFXSBOT1QgYXZhaWxhYmxlIHdoZW4gdXNpbmcgYnkgc2VydmljZSFcbiAgLy8gQmVjYXVzZSBuZ09uQ2hhbmdlcyBuZXZlciBiZSBjYWxsZWQgd2hlbiB1c2luZyBieSBzZXJ2aWNlLFxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJuekNvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJuekNvbnRlbnRcIiBkeW5hbWljYWxseSB0byB0cmlnZ2VyIFVJIGNoYW5nZXMgKHByb3ZpZGVkIHlvdSBkb24ndCB1c2UgXGJDb21wb25lbnQgdGhhdCBuZWVkcyBpbml0aWFsaXphdGlvbnMpXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMubnpWaXNpYmxlLCAhY2hhbmdlcy5uelZpc2libGUuZmlyc3RDaGFuZ2UpOyAvLyBEbyBub3QgdHJpZ2dlciBhbmltYXRpb24gd2hpbGUgaW5pdGlhbGl6aW5nXG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBDbG9zZSBzZWxmIGJlZm9yZSBkZXN0cnVjdGluZ1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbENvbnRyb2wuZGVyZWdpc3Rlck1vZGFsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5uektleWJvYXJkKSB7XG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XG4gIH1cblxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHsgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XG4gIH1cblxuICB0cmlnZ2VyT2soKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XG4gIH1cblxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMubnpNYXNrICYmXG4gICAgICB0aGlzLm56TWFza0Nsb3NhYmxlICYmXG4gICAgICAoJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnQtbW9kYWwtd3JhcCcpICYmXG4gICAgICB0aGlzLm56VmlzaWJsZVxuICAgICkge1xuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xuICAgIH1cbiAgfVxuXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kYWxUeXBlID09PSB0eXBlO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB7ICdvayc6IHRoaXMubnpPbk9rLCAnY2FuY2VsJzogdGhpcy5uek9uQ2FuY2VsIH1bIHR5cGUgXTtcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyAnb2snOiAnbnpPa0xvYWRpbmcnLCAnY2FuY2VsJzogJ256Q2FuY2VsTG9hZGluZycgfVsgdHlwZSBdO1xuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IChkb0Nsb3NlICE9PSBmYWxzZSkgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHRoaXNbIGxvYWRpbmdLZXkgXSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZSkgPT4ge1xuICAgICAgICAgIHRoaXNbIGxvYWRpbmdLZXkgXSA9IGZhbHNlO1xuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcbiAgICAgICAgfTtcbiAgICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHZvaWQ+KS50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xuICB9XG5cbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh2aXNpYmxlKSB7IC8vIEhpZGUgc2Nyb2xsYmFyIGF0IHRoZSBmaXJzdCB0aW1lIHdoZW4gc2hvd24gdXBcbiAgICAgIHRoaXMuY2hhbmdlQm9keU92ZXJmbG93KDEpO1xuICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gICAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlXG4gICAgLnJlc29sdmUoYW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZVRvKHZpc2libGUpKVxuICAgIC50aGVuKCgpID0+IHsgLy8gRW1pdCBvcGVuL2Nsb3NlIGV2ZW50IGFmdGVyIGFuaW1hdGlvbnMgb3ZlclxuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5uekFmdGVyT3Blbi5lbWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5lbWl0KGNsb3NlUmVzdWx0KTtcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKTsgLy8gU2hvdy9oaWRlIHNjcm9sbGJhciB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gLnRoZW4oKCkgPT4gdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKSk7XG4gIH1cblxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cbiAgcHVibGljIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbIHByb3AgXTtcbiAgICBjb25zdCBhcmdzID0gW107XG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgYXJncy5wdXNoKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBhcmdzKSA6IHZhbHVlO1xuICB9XG5cbiAgLy8gT24gbnpGb290ZXIncyBtb2RhbCBidXR0b24gY2xpY2tcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgYnV0dG9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKS5jYXRjaCgoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGFuZ2UgbnpWaXNpYmxlIGZyb20gaW5zaWRlXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICAvLyBDaGFuZ2UgbnpWaXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZShzdGF0ZTogQW5pbWF0aW9uU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHtcbiAgICAgICAgWyBgZmFkZS0ke3N0YXRlfWAgXSAgICAgICA6IHRydWUsXG4gICAgICAgIFsgYGZhZGUtJHtzdGF0ZX0tYWN0aXZlYCBdOiB0cnVlXG4gICAgICB9O1xuICAgICAgdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0ge1xuICAgICAgICBbIGB6b29tLSR7c3RhdGV9YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgICAgWyBgem9vbS0ke3N0YXRlfS1hY3RpdmVgIF06IHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7IC8vIEZpZ3VyZSBvdXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb24gd2hlbiBzaG93cyB1cFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxuICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OKSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XG4gICAgcmV0dXJuIGJ1dHRvbnMubWFwKChidXR0b24pID0+IHtcbiAgICAgIGNvbnN0IG1peGVkQnV0dG9uID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgdHlwZSAgICAgICA6ICdkZWZhdWx0JyxcbiAgICAgICAgICBzaXplICAgICAgIDogJ2RlZmF1bHQnLFxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHNob3cgICAgICAgOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmcgICAgOiBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlZCAgIDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgLi4uYnV0dG9uXG4gICAgICB9O1xuXG4gICAgICAvLyBpZiAobWl4ZWRCdXR0b24uYXV0b0xvYWRpbmcpIHsgbWl4ZWRCdXR0b24ubG9hZGluZyA9IGZhbHNlOyB9IC8vIEZvcmNlIGxvYWRpbmcgdG8gZmFsc2Ugd2hlbiBhdXRvTG9hZGluZz10cnVlXG5cbiAgICAgIHJldHVybiBtaXhlZEJ1dHRvbjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTnpNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfSBdLFxuICAgICAgcGFyZW50ICAgOiB0aGlzLnZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3JcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShjaGlsZEluamVjdG9yKTtcbiAgICBpZiAodGhpcy5uekNvbXBvbmVudFBhcmFtcykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb21wb25lbnRQYXJhbXMpO1xuICAgIH1cbiAgICAvLyBEbyB0aGUgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBpbW1lZGlhdGVseSAob3Igd2UgZG8gZGV0ZWN0aW9uIGF0IG5nQWZ0ZXJWaWV3SW5pdCwgbXVsdGktY2hhbmdlcyBlcnJvciB3aWxsIGJlIHRocm93bilcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IE1vZGFsVXRpbC5nZXRMYXN0Q2xpY2tQb3NpdGlvbigpO1xuICAgIGlmIChsYXN0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7bGFzdFBvc2l0aW9uLnggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke2xhc3RQb3NpdGlvbi55IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JztcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBjYXJlIG9mIHRoZSBib2R5J3Mgb3ZlcmZsb3cgdG8gZGVjaWRlIHRoZSBleGlzdGVuc2Ugb2Ygc2Nyb2xsYmFyXG4gICAqIEBwYXJhbSBwbHVzTnVtIFRoZSBudW1iZXIgdGhhdCB0aGUgb3Blbk1vZGFscy5sZW5ndGggd2lsbCBpbmNyZWFzZSBzb29uXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUJvZHlPdmVyZmxvdyhwbHVzTnVtOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmF1dG9Cb2R5UGFkZGluZykge1xuICAgICAgY29uc3Qgb3Blbk1vZGFscyA9IHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XG5cbiAgICAgIGlmIChvcGVuTW9kYWxzLmxlbmd0aCArIHBsdXNOdW0gPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0JvZHlTY3JvbGxCYXIoKSkgeyAvLyBBZGRpbmcgcGFkZGluZy1yaWdodCBvbmx5IHdoZW4gYm9keSdzIHNjcm9sbGJhciBpcyBhYmxlIHRvIHNob3duIHVwXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0JywgYCR7dGhpcy5uek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLnNjcm9sbEJhcldpZHRofXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gTk9URTogd2UgbmVlZCB0byBhbHdheXMgcmVtb3ZlIHRoZSBwYWRkaW5nIGR1ZSB0byB0aGUgc2Nyb2xsIGJhciBtYXkgYmUgZGlzYXBwZWFyIGJ5IHdpbmRvdyByZXNpemluZyBiZWZvcmUgbW9kYWwgY2xvc2VkXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgZWxlbWVudCBpcyBhYmxlIHRvIGhhcyB0aGUgc2Nyb2xsIGJhciAoaWYgdGhlIGJvZHkgY29udGVudCBoZWlnaHQgZXhjZWVkcyB0aGUgd2luZG93J3MgaGVpZ2h0KVxuICAgKiBFeGNlcHRpb25hbCBDYXNlczogdXNlcnMgY2FuIHNob3cgdGhlIHNjcm9sbCBiYXIgYnkgdGhlaXIgb3duIHBlcm1hbmVudGx5IChlZy4gb3ZlcmZsb3c6IHNjcm9sbClcbiAgICovXG4gIHByaXZhdGUgaGFzQm9keVNjcm9sbEJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VEZWZhdWx0Q29uZmlnKGNvbmZpZzogTnpNb2RhbENvbmZpZyk6IE56TW9kYWxDb25maWcge1xuICAgIHJldHVybiB7IC4uLk5aX01PREFMX0RFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XG4gICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IHt9IHwgdm9pZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS50aGVuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==