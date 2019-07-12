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
var NzTreeSelectComponent = /** @class */ (function () {
    function NzTreeSelectComponent(renderer, cdr, overlay, viewContainerRef) {
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
        this.nzDisplayWith = function (node) { return node.title; };
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
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzOpen ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMultiple || this.nzCheckable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
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
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(function () {
            _this.updateDropDownClassMap();
            _this.updateCdkConnectedOverlayStatus();
        });
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('nzNodes')) {
            setTimeout(function () { return _this.updateSelectedNodes(); }, 0);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
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
            this.selectedNodes.forEach(function (node) {
                _this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.detachOverlay = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
        }
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    function (node, emit, event) {
        if (emit === void 0) { emit = true; }
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
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        });
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig((_a = {
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            },
            _a[this.nzDropdownMatchSelectWidth ? 'width' : 'minWidth'] = overlayWidth,
            _a.hasBackdrop = true,
            _a));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.getOverlayPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.subscribeOverlayBackdropClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.overlayRef.backdropClick()
            .subscribe(function () {
            _this.closeDropDown();
        });
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.nzTreeClick.pipe(tap(function (event) {
            /** @type {?} */
            var node = event.node;
            if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                _this.treeRef.nzTreeService.conduct(node);
                _this.treeRef.nzTreeService.setCheckedNodeList(node);
            }
            if (_this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter(function (event) {
            return _this.nzCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map(function (node) { return node.key; });
            _this.value = tslib_1.__spread(value);
            if (_this.nzShowSearch) {
                _this.inputValue = '';
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                if (_this.nzShowSearch) {
                    _this.focusOnInput();
                }
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        });
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @return {?}
     */
    function () {
        if (this.treeRef) {
            this.selectedNodes = tslib_1.__spread((this.nzCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList()));
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        this.overlayRef.updatePosition();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateInputWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onClearSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedNodes.forEach(function (node) {
            _this.removeSelected(node, false);
        });
        this.nzCleared.emit();
        this.closeDropDown();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateDropDownClassMap = /**
     * @return {?}
     */
    function () {
        var _a, _b;
        if (this.treeRef && !this.treeRef.nzTreeClass['ant-select-tree']) {
            this.treeRef.nzTreeClass = tslib_1.__assign({}, this.treeRef.nzTreeClass, (_a = {}, _a['ant-select-tree'] = true, _a));
        }
        this.dropDownClassMap = (_b = {},
            _b['ant-select-dropdown'] = true,
            _b['ant-select-tree-dropdown'] = true,
            _b["ant-select-dropdown--single"] = !this.nzMultiple,
            _b["ant-select-dropdown--multiple"] = this.nzMultiple,
            _b["ant-select-dropdown-placement-bottomLeft"] = this.dropDownPosition === 'bottom',
            _b["ant-select-dropdown-placement-topLeft"] = this.dropDownPosition === 'top',
            _b);
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
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
    };
    NzTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-select',
                    animations: [selectDropDownAnimation, selectTagAnimation],
                    template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzDisabled\">\r\n</ng-template>\r\n\r\n<ng-template #dropdownTemplate>\r\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <nz-tree\r\n      #treeRef\r\n      [nzData]=\"nzNodes\"\r\n      [nzMultiple]=\"nzMultiple\"\r\n      [nzSearchValue]=\"inputValue\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzExpandedKeys]=\"nzDefaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\r\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\r\n      (nzExpandChange)=\"nzExpandChange.emit($event)\"\r\n      (nzClick)=\"nzTreeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\">\r\n    </nz-tree>\r\n  </div>\r\n</ng-template>\r\n\r\n<div\r\n  #treeSelect\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ nzDisplayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"nzShowSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes\">\r\n        <li\r\n          [@selectTagAnimation]\r\n          (@selectTagAnimation.done)=\"updatePosition()\"\r\n          [attr.title]=\"nzDisplayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\" (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" (click)=\"onClearSelection()\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzTreeSelectComponent; }),
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
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n      overflow: auto;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzTreeSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Overlay },
        { type: ViewContainerRef }
    ]; };
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
    return NzTreeSelectComponent;
}());
export { NzTreeSelectComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0L256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFFVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQ0wsS0FBSyxFQUNMLEVBQUUsSUFBSSxZQUFZLEVBRW5CLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQWtIMUQsK0JBQ1UsVUFDQSxLQUNBLFNBQ0E7UUFIQSxhQUFRLEdBQVIsUUFBUTtRQUNSLFFBQUcsR0FBSCxHQUFHO1FBQ0gsWUFBTyxHQUFQLE9BQU87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QkFDTixNQUFNO3VDQUNOLE1BQU07K0JBRU4sU0FBUyxTQUFDLGNBQWM7NkJBQ3hCLFNBQVMsU0FBQyxZQUFZO21DQUN0QixTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzBCQUNuRCxTQUFTLFNBQUMsU0FBUzswQkFpSG5CLFlBQVksU0FBQyxPQUFPOzs7UUE1SVgsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7Z0NBeEYxQjs7U0E2RWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb25maWcsXHJcbiAgT3ZlcmxheVJlZixcclxuICBQb3NpdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIG1lcmdlLFxyXG4gIG9mIGFzIG9ic2VydmFibGVPZixcclxuICBTdWJzY3JpcHRpb25cclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBzZWxlY3REcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL3NlbGVjdC1kcm9wZG93bi1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgc2VsZWN0VGFnQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vc2VsZWN0LXRhZy1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL3RyZWUvaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4uL3RyZWUvbnotdHJlZS1ub2RlJztcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgIDogJ256LXRyZWUtc2VsZWN0JyxcclxuICBhbmltYXRpb25zIDogWyBzZWxlY3REcm9wRG93bkFuaW1hdGlvbiwgc2VsZWN0VGFnQW5pbWF0aW9uIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnMgIDogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0ICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0XScgICAgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXScgICAgOiAnIW56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXScgICAgICAgOiAnbnpPcGVuJ1xyXG4gIH0sXHJcbiAgc3R5bGVzICAgICA6IFsgYFxyXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICBgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJlZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Tm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgbnpEcm9wZG93blN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nOyB9O1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBuekRpc3BsYXlXaXRoOiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0cmVlU2VsZWN0JykgdHJlZVNlbGVjdDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93blRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBkcm9wZG93blRlbXBsYXRlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnKSB0cmVlUmVmOiBOelRyZWVDb21wb25lbnQ7XHJcblxyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcclxuICBpbnB1dFZhbHVlID0gJyc7XHJcbiAgZHJvcERvd25DbGFzc01hcDogeyBbIGNsYXNzTmFtZTogc3RyaW5nIF06IGJvb2xlYW4gfTtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+O1xyXG4gIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcclxuICBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpPcGVuID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XHJcbiAgICB0aGlzLmRldGFjaE92ZXJsYXkoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gWyAodmFsdWUgYXMgc3RyaW5nKSBdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICB0cmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAoIXRoaXMubnpEaXNhYmxlZCAmJiB0aGlzLm56T3BlbikpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xyXG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56T3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuaXNNdWx0aXBsZSAmJlxyXG4gICAgICAhZXZlbnRUYXJnZXQudmFsdWUgJiZcclxuICAgICAga2V5Q29kZSA9PT0gQkFDS1NQQUNFXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZE5vZGVzWyB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMSBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcclxuICAgICAgdGhpcy50cmVlUmVmLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgdGhpcy50cmVlUmVmLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmVlUmVmLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5uelJlbW92ZWQuZW1pdChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmRyb3Bkb3duVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICBjb25zdCBvdmVybGF5V2lkdGggPSB0aGlzLnRyZWVTZWxlY3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcclxuICAgICAgWyB0aGlzLm56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gJ3dpZHRoJyA6ICdtaW5XaWR0aCcgXTogb3ZlcmxheVdpZHRoLFxyXG4gICAgICBoYXNCYWNrZHJvcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXHJcbiAgICBdO1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcclxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJlZVNlbGVjdClcclxuICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcclxuICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgLndpdGhQdXNoKGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKClcclxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIHRoaXMubnpUcmVlQ2xpY2sucGlwZShcclxuICAgICAgICB0YXAoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGU7XHJcbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnpDaGVja2FibGUgPyAoIWV2ZW50Lm5vZGUuaXNEaXNhYmxlZCAmJiAhZXZlbnQubm9kZS5pc0Rpc2FibGVDaGVja2JveCkgOiAhZXZlbnQubm9kZS5pc0Rpc2FibGVkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMubnpDaGVja2FibGUgPyB0aGlzLm56VHJlZUNoZWNrQm94Q2hhbmdlIDogb2JzZXJ2YWJsZU9mKCksXHJcbiAgICAgIHRoaXMubnpDbGVhcmVkLFxyXG4gICAgICB0aGlzLm56UmVtb3ZlZFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gWyAuLi52YWx1ZSBdO1xyXG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWyAwIF0gOiBudWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWROb2RlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyZWVSZWYpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWyAuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMudHJlZVJlZi5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMudHJlZVJlZi5nZXRTZWxlY3RlZE5vZGVMaXN0KCkpIF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uekNsZWFyZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJlZVJlZiAmJiAhdGhpcy50cmVlUmVmLm56VHJlZUNsYXNzWyAnYW50LXNlbGVjdC10cmVlJyBdKSB7XHJcbiAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVDbGFzcyA9IHsgLi4udGhpcy50cmVlUmVmLm56VHJlZUNsYXNzLCBbICdhbnQtc2VsZWN0LXRyZWUnIF06IHRydWUgfTtcclxuICAgIH1cclxuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcclxuICAgICAgWyAnYW50LXNlbGVjdC1kcm9wZG93bicgXSAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyAnYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogIXRoaXMubnpNdWx0aXBsZSxcclxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVgIF0gICAgICAgICAgIDogdGhpcy5uek11bHRpcGxlLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0YCBdOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG92ZXJsYXlXaWR0aCA9IHRoaXMudHJlZVNlbGVjdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogb3ZlcmxheVdpZHRoIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogb3ZlcmxheVdpZHRoIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19