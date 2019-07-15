/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOWN_ARROW, SPACE, TAB } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, ContentChildren, EventEmitter, HostListener, Input, Output, QueryList, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer) {
        this.renderer = renderer;
        this._disabled = false;
        this._allowClear = false;
        this._showSearch = false;
        this._open = false;
        this._autoFocus = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        this.listOfTemplateOption = [];
        this.searchValue = '';
        this.isDestroy = true;
        this.isInit = false;
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzSize = 'default';
        this.nzServerSearch = false;
        this.nzMode = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzFilterOption = defaultFilterOption;
        this.nzMaxMultipleCount = Infinity;
        /**
         * https://github.com/angular/angular/pull/13349/files *
         */
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzDropdownClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropdownClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dropdownClassName = value;
            this.updateDropDownClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            this.handleEscBug();
            this.updateCdkConnectedOverlayStatus();
            this.updateDropDownClassMap();
            if (this.nzOpen) {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.focusOnInput();
                    this.nzSelectTopControlComponent.setInputValue('', true);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.scrollIntoView();
                }
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                    /** @type {?} */
                    var backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
                    /** @type {?} */
                    var parentNode = this.renderer.parentNode(backdropElement);
                    /** @type {?} */
                    var hostElement = this.cdkConnectedOverlay.overlayRef.hostElement;
                    this.renderer.appendChild(parentNode, backdropElement);
                    this.renderer.appendChild(parentNode, hostElement);
                }
            }
            else {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.setInputValue('', false);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.resetActiveOption();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            if (this.nzDisabled) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzPlaceHolder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzSelectComponent.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = event.keyCode;
        if (!this._open) {
            if (keyCode === SPACE || keyCode === DOWN_ARROW) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
        else {
            if (keyCode === TAB) {
                // if (keyCode === SPACE || keyCode === TAB) { // #2201
                this.nzOpen = false;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzSelectTopControlComponent.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.blur();
        }
    };
    /** overlay can not be always open , reopen overlay after press esc **/
    /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    NzSelectComponent.prototype.handleEscBug = /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    function () {
        if (this.nzOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
            this.cdkConnectedOverlay.open = true;
            this.cdkConnectedOverlay.ngOnChanges({ open: new SimpleChange(false, true, false) });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onKeyDownCdkOverlayOrigin = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzOptionContainerComponent) {
            this.nzOptionContainerComponent.onKeyDownUl(e);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        if (this.nzOpen) {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.blur();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClickOptionFromOptionContainer = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.closeDropDown();
        }
        else if (this.nzMode === 'tags') {
            this.onSearch('', true);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzOpen && this.cdkOverlayOrigin) {
            if (this.nzDropdownMatchSelectWidth) {
                this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ width: this.overlayWidth });
            }
            else {
                this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ minWidth: this.overlayMinWidth });
            }
        }
        this.updateCdkConnectedOverlayPositions();
        if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
            if (this.nzOpen) {
                this.renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
            }
            else {
                this.renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** wait for input size change **/
        setTimeout(function () { return _this.cdkConnectedOverlay.overlayRef.updatePosition(); }, 160);
    };
    Object.defineProperty(NzSelectComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromOptionContainer = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromTopControl = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateFromSelectedList = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var modelValue;
        if (this.isSingleMode) {
            if (value.length) {
                modelValue = value[0];
            }
        }
        else {
            modelValue = value;
            this.updateCdkConnectedOverlayPositions();
        }
        this.updateNgModel(value, modelValue);
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectComponent.prototype.onSearch = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && (this.searchValue !== value)) {
            this.nzOnSearch.emit(value);
            this.searchValue = value;
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearNgModel = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.updateNgModel([], null);
        }
        else {
            this.updateNgModel([], []);
        }
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateNgModel = /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    function (list, value) {
        this.listOfSelectedValue = list;
        if (value !== this.value) {
            this.value = value;
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.listOfTemplateOptionChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfTemplateOption = value;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateDropDownClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.dropDownClassMap = (_a = {},
            _a['ant-select-dropdown'] = true,
            _a["ant-select-dropdown--single"] = this.isSingleMode,
            _a["ant-select-dropdown--multiple"] = this.isMultipleOrTags,
            _a["ant-select-dropdown-placement-bottomLeft"] = this.dropDownPosition === 'bottom',
            _a["ant-select-dropdown-placement-topLeft"] = this.dropDownPosition === 'top',
            _a["" + this.nzDropdownClassName] = !!this.nzDropdownClassName,
            _a);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // TODO: should not clear disabled option ?
        e.stopPropagation();
        this.clearNgModel();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearSearchValue = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
        else {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                this.listOfSelectedValue = value;
            }
            else {
                this.listOfSelectedValue = [value];
            }
        }
        else {
            this.listOfSelectedValue = [];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnChange = /**
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
    NzSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        Promise.resolve().then(function () { return _this.updateCdkConnectedOverlayStatus(); });
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
    };
    NzSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select',
                    preserveWhitespaces: false,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSelectComponent; }),
                            multi: true
                        }
                    ],
                    animations: [
                        trigger('dropDownAnimation', [
                            state('hidden', style({
                                opacity: 0,
                                display: 'none'
                            })),
                            state('bottom', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            })),
                            state('top', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 100%'
                            })),
                            transition('hidden => bottom', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('bottom => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }))
                            ]),
                            transition('hidden => top', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('top => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }))
                            ])
                        ])
                    ],
                    template: "<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"isSingleMode\"\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\n  tabindex=\"0\"\n>\n  <div\n    nz-select-top-control\n    [nzOpen]=\"nzOpen\"\n    [compareWith]=\"compareWith\"\n    [nzPlaceHolder]=\"nzPlaceHolder\"\n    [nzShowSearch]=\"nzShowSearch\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzMode]=\"nzMode\"\n    [nzListTemplateOfOption]=\"listOfTemplateOption\"\n    [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    (nzOnSearch)=\"onSearch($event.value, $event.emit)\"\n    (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\"\n  ></div>\n  <span\n    *ngIf=\"nzAllowClear\"\n    class=\"ant-select-selection__clear\"\n    nz-select-unselectable\n    (click)=\"onClearSelection($event)\"\n  >\n    <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-select-close-icon\"></i>\n  </span>\n  <span class=\"ant-select-arrow\" nz-select-unselectable>\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n    <b></b>\n  </span>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\n  [cdkConnectedOverlayOpen]=\"!isDestroy\"\n>\n  <div\n    [ngClass]=\"dropDownClassMap\"\n    [@dropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"nzDropdownStyle\"\n  >\n    <div\n      style=\"overflow: auto\"\n      [id]=\"idClass\"\n      nz-option-container\n      [listOfNzOptionComponent]=\"listOfNzOptionComponent\"\n      [listOfNzOptionGroupComponent]=\"listOfNzOptionGroupComponent\"\n      [nzSearchValue]=\"searchValue\"\n      [nzFilterOption]=\"nzFilterOption\"\n      [nzServerSearch]=\"nzServerSearch\"\n      [compareWith]=\"compareWith\"\n      [nzNotFoundContent]=\"nzNotFoundContent\"\n      [nzMaxMultipleCount]=\"nzMaxMultipleCount\"\n      [nzMode]=\"nzMode\"\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\"\n      (nzClickOption)=\"onClickOptionFromOptionContainer()\"\n      (nzListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\n      (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\n      [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    ></div>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                    host: {
                        '[class.ant-select]': 'true',
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen'
                    },
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent,] }],
        nzOptionContainerComponent: [{ type: ViewChild, args: [NzOptionContainerComponent,] }],
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent,] }],
        nzOnSearch: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzOpenChange: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        idClass: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return NzSelectComponent;
}());
export { NzSelectComponent };
function NzSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSelectComponent.prototype._disabled;
    /** @type {?} */
    NzSelectComponent.prototype._allowClear;
    /** @type {?} */
    NzSelectComponent.prototype._showSearch;
    /** @type {?} */
    NzSelectComponent.prototype._open;
    /** @type {?} */
    NzSelectComponent.prototype._placeholder;
    /** @type {?} */
    NzSelectComponent.prototype._autoFocus;
    /** @type {?} */
    NzSelectComponent.prototype._dropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.listOfSelectedValue;
    /** @type {?} */
    NzSelectComponent.prototype.listOfTemplateOption;
    /** @type {?} */
    NzSelectComponent.prototype.value;
    /** @type {?} */
    NzSelectComponent.prototype.overlayWidth;
    /** @type {?} */
    NzSelectComponent.prototype.overlayMinWidth;
    /** @type {?} */
    NzSelectComponent.prototype.searchValue;
    /** @type {?} */
    NzSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzSelectComponent.prototype.isInit;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionContainerComponent;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzSelectComponent.prototype.idClass;
    /**
     * https://github.com/angular/angular/pull/13349/files *
     * @type {?}
     */
    NzSelectComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQXdhOUUsMkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7eUJBdFZuQixLQUFLOzJCQUNILEtBQUs7MkJBQ0wsS0FBSztxQkFDWCxLQUFLOzBCQUVBLEtBQUs7UUFFMUIsZ0JBQStDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQzFELGlCQUF3QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUNuQyx3QkFBZ0QsUUFBUSxDQUFDOztRQUV6RCwyQkFBNkIsRUFBRSxDQUFDO1FBQ2hDLDRCQUE0QyxFQUFFLENBQUM7UUFLL0MsbUJBQXNCLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxJQUFJLENBQUM7UUFDakIsY0FBUyxLQUFLLENBQUM7UUFTZixrQkFBZ0MsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCx3QkFBc0MsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMvRCxvQkFBa0MsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RCxjQUFrQixTQUFTLENBQUM7UUFDNUIsc0JBQTBCLEtBQUssQ0FBQztRQUNoQyxjQUFtRCxTQUFTLENBQUM7UUFDN0Qsa0NBQXNDLElBQUksQ0FBQztRQUMzQyxzQkFBeUMsbUJBQW1CLENBQUM7UUFDN0QsMEJBQThCLFFBQVEsQ0FBQzs7OztRQU12QyxtQkFBdUIsVUFBQyxFQUFPLEVBQUUsRUFBTyxJQUFLLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUM7S0E2U3REO0lBM1NELHNCQUNJLGtEQUFtQjs7OztRQUt2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDOzs7OztRQVJELFVBQ3dCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjs7O09BQUE7SUFNRCxzQkFDSSwwQ0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2dCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCOzs7T0FBQTtJQU1ELHNCQUNJLHFDQUFNOzs7O1FBK0JWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQWxDRCxVQUNXLEtBQWM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNoRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7b0JBQ25DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDbEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7b0JBQ3JELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDOztvQkFDNUUsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O29CQUM3RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQ3BEO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7b0JBQ3BDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQ3JEO2FBQ0Y7U0FDRjs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBVTs7OztRQU9kO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVZELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtTQUNGOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFZOzs7O1FBSWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVBELFVBQ2lCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7O1FBUEQsVUFDaUIsS0FBYztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7O09BQUE7SUFNRCxzQkFDSSw0Q0FBYTs7OztRQUlqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFQRCxVQUNrQixLQUFhO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOzs7T0FBQTs7OztJQU9ELG1DQUFPOzs7SUFEUDtRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztLQUNGOzs7OztJQUdELDBDQUFjOzs7O0lBRGQsVUFDZSxLQUFvQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1FBRS9CLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTs7Z0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0tBQ0Y7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRTtZQUNoRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNuSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN6RztTQUNGO0tBQ0Y7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUU7WUFDakQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckU7S0FDRjs7OztJQUVELGdDQUFJOzs7SUFBSjtRQUNFLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwRTtLQUNGO0lBRUQsdUVBQXVFOzs7OztJQUN2RSx3Q0FBWTs7OztJQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUU7WUFDMUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0RjtLQUNGOzs7OztJQUVELHFEQUF5Qjs7OztJQUF6QixVQUEwQixDQUFnQjtRQUN4QyxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0tBQ0Y7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQXdDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN4RCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztLQUMvQjs7OztJQUVELDREQUFnQzs7O0lBQWhDO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekI7S0FDRjs7OztJQUVELDJEQUErQjs7O0lBQS9CO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZELElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNqRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzthQUM5RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNwRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNwRjtTQUVGO1FBQ0QsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtZQUMxSCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDM0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hHO1NBQ0Y7S0FDRjs7OztJQUVELDhEQUFrQzs7O0lBQWxDO1FBQUEsaUJBR0M7O1FBREMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxFQUFwRCxDQUFvRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdFO0lBRUQsc0JBQUksMkNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1NBQ2xDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7U0FDN0Q7OztPQUFBO0lBRUQsc0VBQXNFO0lBQ3RFLGtDQUFrQzs7Ozs7O0lBQ2xDLHdFQUE0Qzs7Ozs7SUFBNUMsVUFBNkMsS0FBWTtRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7SUFFRCxzRUFBc0U7SUFDdEUsa0NBQWtDOzs7Ozs7SUFDbEMsbUVBQXVDOzs7OztJQUF2QyxVQUF3QyxLQUFZO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQztJQUVELGtDQUFrQzs7Ozs7SUFDbEMsa0RBQXNCOzs7O0lBQXRCLFVBQXVCLEtBQVk7O1FBQ2pDLElBQUksVUFBVSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsVUFBVSxHQUFHLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQUVELG9DQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLElBQWE7UUFDbkMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCO0tBQ0Y7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyx5Q0FBYTs7Ozs7SUFBYixVQUFjLElBQVcsRUFBRSxLQUF3QjtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7S0FDRjs7Ozs7SUFFRCxzREFBMEI7Ozs7SUFBMUIsVUFBMkIsS0FBMEI7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztLQUNuQzs7OztJQUVELGtEQUFzQjs7O0lBQXRCOztRQUNFLElBQUksQ0FBQyxnQkFBZ0I7WUFDbkIsR0FBRSxxQkFBcUIsSUFBeUIsSUFBSTtZQUNwRCxHQUFFLDZCQUE2QixJQUFpQixJQUFJLENBQUMsWUFBWTtZQUNqRSxHQUFFLCtCQUErQixJQUFlLElBQUksQ0FBQyxnQkFBZ0I7WUFDckUsR0FBRSwwQ0FBMEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUTtZQUNsRixHQUFFLHVDQUF1QyxJQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLO1lBQy9FLEdBQUUsS0FBRyxJQUFJLENBQUMsbUJBQXFCLElBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO2VBQzNFLENBQUM7S0FDSDs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsQ0FBYTs7UUFFNUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELDRDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRDtLQUNGO0lBS0Qsb0RBQW9EO0lBQ3BELGtDQUFrQzs7Ozs7O0lBQ2xDLHNDQUFVOzs7OztJQUFWLFVBQVcsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO2FBQ3RDO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7U0FDL0I7S0FDRjs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBc0M7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQywrQkFBK0IsRUFBRSxFQUF0QyxDQUFzQyxDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN2Qjs7Z0JBaGRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsV0FBVztvQkFDaEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFZO3dCQUNuQjs0QkFDRSxPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs0QkFDaEQsS0FBSyxFQUFRLElBQUk7eUJBQ2xCO3FCQUNGO29CQUNELFVBQVUsRUFBVzt3QkFDbkIsT0FBTyxDQUFDLG1CQUFtQixFQUFFOzRCQUMzQixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsT0FBTyxFQUFFLE1BQU07NkJBQ2hCLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsT0FBTyxFQUFVLENBQUM7Z0NBQ2xCLFNBQVMsRUFBUSxXQUFXO2dDQUM1QixlQUFlLEVBQUUsT0FBTzs2QkFDekIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO2dDQUNqQixPQUFPLEVBQVUsQ0FBQztnQ0FDbEIsU0FBUyxFQUFRLFdBQVc7Z0NBQzVCLGVBQWUsRUFBRSxTQUFTOzZCQUMzQixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFVLENBQUM7b0NBQ2xCLFNBQVMsRUFBUSxhQUFhO29DQUM5QixlQUFlLEVBQUUsT0FBTztpQ0FDekIsQ0FBQztnQ0FDRixPQUFPLENBQUMsOENBQThDLENBQUM7NkJBQ3hELENBQUM7NEJBQ0YsVUFBVSxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixPQUFPLENBQUMsOENBQThDLEVBQUUsS0FBSyxDQUFDO29DQUM1RCxPQUFPLEVBQVUsQ0FBQztvQ0FDbEIsU0FBUyxFQUFRLGFBQWE7b0NBQzlCLGVBQWUsRUFBRSxPQUFPO2lDQUN6QixDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsZUFBZSxFQUFFO2dDQUMxQixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFVLENBQUM7b0NBQ2xCLFNBQVMsRUFBUSxhQUFhO29DQUM5QixlQUFlLEVBQUUsU0FBUztpQ0FDM0IsQ0FBQztnQ0FDRixPQUFPLENBQUMsOENBQThDLENBQUM7NkJBQ3hELENBQUM7NEJBQ0YsVUFBVSxDQUFDLGVBQWUsRUFBRTtnQ0FDMUIsT0FBTyxDQUFDLDhDQUE4QyxFQUFFLEtBQUssQ0FBQztvQ0FDNUQsT0FBTyxFQUFVLENBQUM7b0NBQ2xCLFNBQVMsRUFBUSxhQUFhO29DQUM5QixlQUFlLEVBQUUsU0FBUztpQ0FDM0IsQ0FBQyxDQUFDOzZCQUNKLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCxzc0ZBQWlEO29CQUNqRCxJQUFJLEVBQWlCO3dCQUNuQixvQkFBb0IsRUFBYyxNQUFNO3dCQUN4Qyx1QkFBdUIsRUFBVyxrQkFBa0I7d0JBQ3BELHVCQUF1QixFQUFXLGtCQUFrQjt3QkFDcEQsNEJBQTRCLEVBQU0sYUFBYTt3QkFDL0MsNkJBQTZCLEVBQUssWUFBWTt3QkFDOUMsZ0NBQWdDLEVBQUUsY0FBYzt3QkFDaEQseUJBQXlCLEVBQVMsUUFBUTtxQkFDM0M7NkJBQ3NCLDZLQVN0QjtpQkFDRjs7OztnQkEzRkMsU0FBUzs7O21DQWtIUixTQUFTLFNBQUMsZ0JBQWdCO3NDQUMxQixTQUFTLFNBQUMsbUJBQW1COzhDQUM3QixTQUFTLFNBQUMsMkJBQTJCOzZDQUNyQyxTQUFTLFNBQUMsMEJBQTBCOzBDQUVwQyxlQUFlLFNBQUMsaUJBQWlCOytDQUNqQyxlQUFlLFNBQUMsc0JBQXNCOzZCQUN0QyxNQUFNO21DQUNOLE1BQU07K0JBQ04sTUFBTTt5QkFDTixLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsS0FBSzs2Q0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLO29DQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFHTCxLQUFLO3NDQUVMLEtBQUs7OEJBVUwsS0FBSzt5QkFVTCxLQUFLOzZCQW9DTCxLQUFLOytCQVlMLEtBQUs7K0JBU0wsS0FBSztnQ0FTTCxLQUFLOzBCQVNMLFlBQVksU0FBQyxPQUFPO2lDQVFwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOzs0QkFyUXZDOztTQWlIYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBTUEFDRSwgVEFCIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcbmltcG9ydCB7IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2VsZWN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2Ryb3BEb3duQW5pbWF0aW9uJywgW1xuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ3RvcCcsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGJvdHRvbScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdG9wJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd0b3AgPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0XScgICAgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJyAgICAgICAgIDogJ256U2l6ZT09PVwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXScgICAgICAgICA6ICduelNpemU9PT1cInNtYWxsXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXScgICAgOiAnIW56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nICAgOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXScgICAgICAgOiAnbnpPcGVuJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9hbGxvd0NsZWFyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dTZWFyY2ggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xuICBsaXN0T2ZUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHZhbHVlOiBhbnkgfCBhbnlbXTtcbiAgb3ZlcmxheVdpZHRoOiBudW1iZXI7XG4gIG92ZXJsYXlNaW5XaWR0aDogbnVtYmVyO1xuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XG4gIGlzRGVzdHJveSA9IHRydWU7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBkcm9wRG93bkNsYXNzTWFwO1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQFZpZXdDaGlsZChOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQpIG56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDogTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSBuek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudDogTnpPcHRpb25Db250YWluZXJDb21wb25lbnQ7XG4gIC8qKiBzaG91bGQgbW92ZSB0byBuei1vcHRpb24tY29udGFpbmVyIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA4MTAgcmVzb2x2ZWQgKiovXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Db21wb25lbnQpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uR3JvdXBDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpNb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25TdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZzsgfTtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgaWRDbGFzczogc3RyaW5nO1xuICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzEzMzQ5L2ZpbGVzICoqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRyb3Bkb3duQ2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kcm9wZG93bkNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56RHJvcGRvd25DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25DbGFzc05hbWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XG4gICAgdGhpcy5oYW5kbGVFc2NCdWcoKTtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5mb2N1c09uSW5wdXQoKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZShiYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmhvc3RFbGVtZW50O1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudE5vZGUsIGJhY2tkcm9wRWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSwgaG9zdEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5yZXNldEFjdGl2ZU9wdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBuek9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBsYWNlSG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gIXRoaXMubnpPcGVuO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsgJyRldmVudCcgXSlcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmICghdGhpcy5fb3Blbikge1xuICAgICAgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleUNvZGUgPT09IFRBQikge1xuICAgICAgLy8gaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IFRBQikgeyAvLyAjMjIwMVxuICAgICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIG92ZXJsYXkgY2FuIG5vdCBiZSBhbHdheXMgb3BlbiAsIHJlb3BlbiBvdmVybGF5IGFmdGVyIHByZXNzIGVzYyAqKi9cbiAgaGFuZGxlRXNjQnVnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgIXRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm5nT25DaGFuZ2VzKHsgb3BlbjogbmV3IFNpbXBsZUNoYW5nZShmYWxzZSwgdHJ1ZSwgZmFsc2UpIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bkNka092ZXJsYXlPcmlnaW4oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50Lm9uS2V5RG93blVsKGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG9uQ2xpY2tPcHRpb25Gcm9tT3B0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCcnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiB0aGlzLm56T3BlbiAmJiB0aGlzLmNka092ZXJsYXlPcmlnaW4pIHtcbiAgICAgIGlmICh0aGlzLm56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVdpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLm92ZXJsYXlXaWR0aCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3ZlcmxheU1pbldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IG1pbldpZHRoOiB0aGlzLm92ZXJsYXlNaW5XaWR0aCB9KTtcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xuICAgIC8qKiB3YWl0IGZvciBpbnB1dCBzaXplIGNoYW5nZSAqKi9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCksIDE2MCk7XG4gIH1cblxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICAvKiogb3B0aW9uIGNvbnRhaW5lciBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgLT4gdXBkYXRlIG5nTW9kZWwgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZUZyb21PcHRpb25Db250YWluZXIodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNlYXJjaFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBvcHRpb24gY29udGFpbmVyIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAtPiB1cGRhdGUgbmdNb2RlbCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlRnJvbVRvcENvbnRyb2wodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNlYXJjaFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlRnJvbVNlbGVjdGVkTGlzdCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBsZXQgbW9kZWxWYWx1ZTtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHZhbHVlWyAwIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGVsVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU5nTW9kZWwodmFsdWUsIG1vZGVsVmFsdWUpO1xuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChlbWl0ICYmICh0aGlzLnNlYXJjaFZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubnpPblNlYXJjaC5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjbGVhck5nTW9kZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU5nTW9kZWwoW10sIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZU5nTW9kZWwoW10sIFtdKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZU5nTW9kZWwobGlzdDogYW55W10sIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3Q7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudFtdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgdXBkYXRlRHJvcERvd25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duQ2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtc2VsZWN0LWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogdGhpcy5pc1NpbmdsZU1vZGUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZWAgXSAgICAgICAgICAgOiB0aGlzLmlzTXVsdGlwbGVPclRhZ3MsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0YCBdOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdGAgXSAgIDogdGhpcy5kcm9wRG93blBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgIFsgYCR7dGhpcy5uekRyb3Bkb3duQ2xhc3NOYW1lfWAgXSAgICAgICAgICAgICA6ICEhdGhpcy5uekRyb3Bkb3duQ2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIFRPRE86IHNob3VsZCBub3QgY2xlYXIgZGlzYWJsZWQgb3B0aW9uID9cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2xlYXJOZ01vZGVsKCk7XG4gIH1cblxuICBjbGVhclNlYXJjaFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICAvKiogdXBkYXRlIG5nTW9kZWwgLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gWyB2YWx1ZSBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbXTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICB9XG59XG4iXX0=