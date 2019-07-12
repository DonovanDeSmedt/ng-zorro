/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { selectDropDownAnimation } from '../core/animation/select-dropdown-animations';
import { selectTagAnimation } from '../core/animation/select-tag-animations';
import { InputBoolean } from '../core/util/convert';
import { NzTreeComponent } from '../tree/nz-tree.component';
export class NzTreeSelectComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(renderer, cdr, overlay, viewContainerRef) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzDropdownMatchSelectWidth = true;
        this.nzCheckable = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzShowLine = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzSize = 'default';
        this.nzPlaceHolder = '';
        this.nzDefaultExpandedKeys = [];
        this.nzDisplayWith = (node) => node.title;
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.onTouched = () => null;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.nzOpen ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.nzShowSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(() => {
            this.updateDropDownClassMap();
            this.updateCdkConnectedOverlayStatus();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attachOverlay();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            setTimeout(() => this.updateSelectedNodes(), 0);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes();
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @return {?}
     */
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @return {?}
     */
    detachOverlay() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    removeSelected(node, emit = true, event) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.treeRef.nzTreeService.conduct(node);
            this.treeRef.nzTreeService.setCheckedNodeList(node);
        }
        else {
            this.treeRef.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            [this.nzDropdownMatchSelectWidth ? 'width' : 'minWidth']: overlayWidth,
            hasBackdrop: true
        });
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return this.overlayRef.backdropClick()
            .subscribe(() => {
            this.closeDropDown();
        });
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.nzTreeClick.pipe(tap((event) => {
            /** @type {?} */
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.treeRef.nzTreeService.conduct(node);
                this.treeRef.nzTreeService.setCheckedNodeList(node);
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            return this.nzCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(() => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch) {
                this.inputValue = '';
            }
            if (this.isMultiple) {
                this.onChange(value);
                if (this.nzShowSearch) {
                    this.focusOnInput();
                }
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    /**
     * @return {?}
     */
    updateSelectedNodes() {
        if (this.treeRef) {
            this.selectedNodes = [...(this.nzCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())];
        }
    }
    /**
     * @return {?}
     */
    updatePosition() {
        this.overlayRef.updatePosition();
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
        this.closeDropDown();
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        if (this.treeRef && !this.treeRef.nzTreeClass['ant-select-tree']) {
            this.treeRef.nzTreeClass = Object.assign({}, this.treeRef.nzTreeClass, { ['ant-select-tree']: true });
        }
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            ['ant-select-tree-dropdown']: true,
            [`ant-select-dropdown--single`]: !this.nzMultiple,
            [`ant-select-dropdown--multiple`]: this.nzMultiple,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top'
        };
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        if (this.nzDropdownMatchSelectWidth) {
            this.overlayRef.updateSize({ width: overlayWidth });
        }
        else {
            this.overlayRef.updateSize({ minWidth: overlayWidth });
        }
        if (this.nzOpen) {
            this.renderer.removeStyle(this.overlayRef.backdropElement, 'display');
        }
        else {
            this.renderer.setStyle(this.overlayRef.backdropElement, 'display', 'none');
        }
    }
}
NzTreeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-select',
                animations: [selectDropDownAnimation, selectTagAnimation],
                template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzDisabled\">\r\n</ng-template>\r\n\r\n<ng-template #dropdownTemplate>\r\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <nz-tree\r\n      #treeRef\r\n      [nzData]=\"nzNodes\"\r\n      [nzMultiple]=\"nzMultiple\"\r\n      [nzSearchValue]=\"inputValue\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzExpandedKeys]=\"nzDefaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\r\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\r\n      (nzExpandChange)=\"nzExpandChange.emit($event)\"\r\n      (nzClick)=\"nzTreeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\">\r\n    </nz-tree>\r\n  </div>\r\n</ng-template>\r\n\r\n<div\r\n  #treeSelect\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ nzDisplayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"nzShowSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes\">\r\n        <li\r\n          [@selectTagAnimation]\r\n          (@selectTagAnimation.done)=\"updatePosition()\"\r\n          [attr.title]=\"nzDisplayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\" (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" (click)=\"onClearSelection()\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen'
                },
                styles: [`
    .ant-select-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: auto;
    }
  `]
            }] }
];
/** @nocollapse */
NzTreeSelectComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef }
];
NzTreeSelectComponent.propDecorators = {
    nzAllowClear: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzDropdownMatchSelectWidth: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzNodes: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzDropdownStyle: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDisplayWith: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzCleared: [{ type: Output }],
    nzRemoved: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzTreeClick: [{ type: Output }],
    nzTreeCheckBoxChange: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    treeSelect: [{ type: ViewChild, args: ['treeSelect',] }],
    dropdownTemplate: [{ type: ViewChild, args: ['dropdownTemplate', { read: TemplateRef },] }],
    treeRef: [{ type: ViewChild, args: ['treeRef',] }],
    trigger: [{ type: HostListener, args: ['click',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
function NzTreeSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeSelect;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropdownTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.portal;
    /** @type {?} */
    NzTreeSelectComponent.prototype.positionStrategy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.renderer;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdr;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0L256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFFVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQ0wsS0FBSyxFQUNMLEVBQUUsSUFBSSxZQUFZLEVBRW5CLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0M1RCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBZ0ZoQyxZQUNVLFVBQ0EsS0FDQSxTQUNBO1FBSEEsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdB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Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgbWVyZ2UsXHJcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxyXG4gIFN1YnNjcmlwdGlvblxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHNlbGVjdERyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vc2VsZWN0LWRyb3Bkb3duLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBzZWxlY3RUYWdBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtdGFnLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi4vdHJlZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLW5vZGUnO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICcuLi90cmVlL256LXRyZWUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnbnotdHJlZS1zZWxlY3QnLFxyXG4gIGFuaW1hdGlvbnMgOiBbIHNlbGVjdERyb3BEb3duQW5pbWF0aW9uLCBzZWxlY3RUYWdBbmltYXRpb24gXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVycyAgOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGkgICAgICA6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3QgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJyAgICAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXScgICAgICAgICA6ICduelNpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXScgICAgICAgICA6ICduelNpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJyAgICA6ICchbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJyAgIDogJ256RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJyAgICAgICA6ICduek9wZW4nXHJcbiAgfSxcclxuICBzdHlsZXMgICAgIDogWyBgXHJcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIGAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUcmVlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpOb2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XHJcbiAgQElucHV0KCkgbnpEZWZhdWx0RXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56RGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWVTZWxlY3QnKSB0cmVlU2VsZWN0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGRyb3Bkb3duVGVtcGxhdGU7XHJcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicpIHRyZWVSZWY6IE56VHJlZUNvbXBvbmVudDtcclxuXHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBpc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gIGlucHV0VmFsdWUgPSAnJztcclxuICBkcm9wRG93bkNsYXNzTWFwOiB7IFsgY2xhc3NOYW1lOiBzdHJpbmcgXTogYm9vbGVhbiB9O1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx7fT47XHJcbiAgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIG92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uek9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uek11bHRpcGxlIHx8IHRoaXMubnpDaGVja2FibGU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRWYWx1ZURpc3BsYXkoKTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuZGV0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpOb2RlcycpKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbICh2YWx1ZSBhcyBzdHJpbmcpIF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIHRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8ICghdGhpcy5uekRpc2FibGVkICYmIHRoaXMubnpPcGVuKSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc011bHRpcGxlICYmXHJcbiAgICAgICFldmVudFRhcmdldC52YWx1ZSAmJlxyXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0VcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZCh0aGlzLnNlbGVjdGVkTm9kZXNbIHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxIF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xyXG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLm56UmVtb3ZlZC5lbWl0KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJvcGRvd25UZW1wbGF0ZSwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIGNvbnN0IG92ZXJsYXlXaWR0aCA9IHRoaXMudHJlZVNlbGVjdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxyXG4gICAgICBbIHRoaXMubnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyAnd2lkdGgnIDogJ21pbldpZHRoJyBdOiBvdmVybGF5V2lkdGgsXHJcbiAgICAgIGhhc0JhY2tkcm9wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcclxuICAgIF07XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy50cmVlU2VsZWN0KVxyXG4gICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxyXG4gICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAud2l0aFB1c2goZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxyXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZShcclxuICAgICAgdGhpcy5uelRyZWVDbGljay5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZTtcclxuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlICYmICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICghZXZlbnQubm9kZS5pc0Rpc2FibGVkICYmICFldmVudC5ub2RlLmlzRGlzYWJsZUNoZWNrYm94KSA6ICFldmVudC5ub2RlLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5uekNoZWNrYWJsZSA/IHRoaXMubnpUcmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcclxuICAgICAgdGhpcy5uekNsZWFyZWQsXHJcbiAgICAgIHRoaXMubnpSZW1vdmVkXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbIC4uLnZhbHVlIF07XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbIDAgXSA6IG51bGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJlZVJlZikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbIC4uLih0aGlzLm56Q2hlY2thYmxlID8gdGhpcy50cmVlUmVmLmdldENoZWNrZWROb2RlTGlzdCgpIDogdGhpcy50cmVlUmVmLmdldFNlbGVjdGVkTm9kZUxpc3QoKSkgXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56Q2xlYXJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmVlUmVmICYmICF0aGlzLnRyZWVSZWYubnpUcmVlQ2xhc3NbICdhbnQtc2VsZWN0LXRyZWUnIF0pIHtcclxuICAgICAgdGhpcy50cmVlUmVmLm56VHJlZUNsYXNzID0geyAuLi50aGlzLnRyZWVSZWYubnpUcmVlQ2xhc3MsIFsgJ2FudC1zZWxlY3QtdHJlZScgXTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcm9wRG93bkNsYXNzTWFwID0ge1xyXG4gICAgICBbICdhbnQtc2VsZWN0LWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbICdhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVgIF0gICAgICAgICAgICAgOiAhdGhpcy5uek11bHRpcGxlLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZWAgXSAgICAgICAgICAgOiB0aGlzLm56TXVsdGlwbGUsXHJcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXHJcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRgIF0gICA6IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3ZlcmxheVdpZHRoID0gdGhpcy50cmVlU2VsZWN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBpZiAodGhpcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiBvdmVybGF5V2lkdGggfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IG1pbldpZHRoOiBvdmVybGF5V2lkdGggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=