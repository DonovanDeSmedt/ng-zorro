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
export class NzSelectComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._disabled = false;
        this._allowClear = false;
        this._showSearch = false;
        this._open = false;
        this._autoFocus = false;
        this.onChange = () => null;
        this.onTouched = () => null;
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
        this.compareWith = (o1, o2) => o1 === o2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDropdownClassName(value) {
        this._dropdownClassName = value;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    get nzDropdownClassName() {
        return this._dropdownClassName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get nzAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOpen(value) {
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
                const backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
                /** @type {?} */
                const parentNode = this.renderer.parentNode(backdropElement);
                /** @type {?} */
                const hostElement = this.cdkConnectedOverlay.overlayRef.hostElement;
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
    }
    /**
     * @return {?}
     */
    get nzOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        if (this.nzDisabled) {
            this.closeDropDown();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowClear(value) {
        this._allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowClear() {
        return this._allowClear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSearch(value) {
        this._showSearch = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSearch() {
        return this._showSearch;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlaceHolder(value) {
        this._placeholder = value;
    }
    /**
     * @return {?}
     */
    get nzPlaceHolder() {
        return this._placeholder;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.nzDisabled) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = event.keyCode;
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
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && this.nzSelectTopControlComponent.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.blur();
        }
    }
    /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    handleEscBug() {
        if (this.nzOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
            this.cdkConnectedOverlay.open = true;
            this.cdkConnectedOverlay.ngOnChanges({ open: new SimpleChange(false, true, false) });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownCdkOverlayOrigin(e) {
        if (this.nzOptionContainerComponent) {
            this.nzOptionContainerComponent.onKeyDownUl(e);
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        if (this.nzOpen) {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.blur();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    onClickOptionFromOptionContainer() {
        if (this.isSingleMode) {
            this.closeDropDown();
        }
        else if (this.nzMode === 'tags') {
            this.onSearch('', true);
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
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
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        /** wait for input size change **/
        setTimeout(() => this.cdkConnectedOverlay.overlayRef.updatePosition(), 160);
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.nzMode === 'default';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.nzMode === 'tags' || this.nzMode === 'multiple';
    }
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    updateListOfSelectedValueFromOptionContainer(value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    }
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    updateListOfSelectedValueFromTopControl(value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateFromSelectedList(value) {
        /** @type {?} */
        let modelValue;
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
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    onSearch(value, emit) {
        if (emit && (this.searchValue !== value)) {
            this.nzOnSearch.emit(value);
            this.searchValue = value;
        }
    }
    /**
     * @return {?}
     */
    clearNgModel() {
        if (this.isSingleMode) {
            this.updateNgModel([], null);
        }
        else {
            this.updateNgModel([], []);
        }
    }
    /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    updateNgModel(list, value) {
        this.listOfSelectedValue = list;
        if (value !== this.value) {
            this.value = value;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    listOfTemplateOptionChange(value) {
        this.listOfTemplateOption = value;
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            [`ant-select-dropdown--single`]: this.isSingleMode,
            [`ant-select-dropdown--multiple`]: this.isMultipleOrTags,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top',
            [`${this.nzDropdownClassName}`]: !!this.nzDropdownClassName
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClearSelection(e) {
        // TODO: should not clear disabled option ?
        e.stopPropagation();
        this.clearNgModel();
    }
    /**
     * @return {?}
     */
    clearSearchValue() {
        if (this.isSingleMode) {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
        else {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
    }
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        Promise.resolve().then(() => this.updateCdkConnectedOverlayStatus());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
    }
}
NzSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSelectComponent),
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
                template: "<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\r\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\r\n  tabindex=\"0\"\r\n>\r\n  <div\r\n    nz-select-top-control\r\n    [nzOpen]=\"nzOpen\"\r\n    [compareWith]=\"compareWith\"\r\n    [nzPlaceHolder]=\"nzPlaceHolder\"\r\n    [nzShowSearch]=\"nzShowSearch\"\r\n    [nzDisabled]=\"nzDisabled\"\r\n    [nzMode]=\"nzMode\"\r\n    [nzListTemplateOfOption]=\"listOfTemplateOption\"\r\n    [nzListOfSelectedValue]=\"listOfSelectedValue\"\r\n    (nzOnSearch)=\"onSearch($event.value, $event.emit)\"\r\n    (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\"\r\n  ></div>\r\n  <span\r\n    *ngIf=\"nzAllowClear\"\r\n    class=\"ant-select-selection__clear\"\r\n    nz-select-unselectable\r\n    (click)=\"onClearSelection($event)\"\r\n  >\r\n    <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-select-close-icon\"></i>\r\n  </span>\r\n  <span class=\"ant-select-arrow\" nz-select-unselectable>\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n    <b></b>\r\n  </span>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\r\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\r\n  [cdkConnectedOverlayOpen]=\"!isDestroy\"\r\n>\r\n  <div\r\n    [ngClass]=\"dropDownClassMap\"\r\n    [@dropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\r\n    [ngStyle]=\"nzDropdownStyle\"\r\n  >\r\n    <div\r\n      style=\"overflow: auto\"\r\n      [id]=\"idClass\"\r\n      [idClass]=\"idClass\"\r\n      nz-option-container\r\n      [listOfNzOptionComponent]=\"listOfNzOptionComponent\"\r\n      [listOfNzOptionGroupComponent]=\"listOfNzOptionGroupComponent\"\r\n      [nzSearchValue]=\"searchValue\"\r\n      [nzFilterOption]=\"nzFilterOption\"\r\n      [nzServerSearch]=\"nzServerSearch\"\r\n      [compareWith]=\"compareWith\"\r\n      [nzNotFoundContent]=\"nzNotFoundContent\"\r\n      [nzMaxMultipleCount]=\"nzMaxMultipleCount\"\r\n      [nzMode]=\"nzMode\"\r\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\"\r\n      (nzClickOption)=\"onClickOptionFromOptionContainer()\"\r\n      (nzListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\r\n      (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\r\n      [nzListOfSelectedValue]=\"listOfSelectedValue\"\r\n    ></div>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
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
    }
  `]
            }] }
];
/** @nocollapse */
NzSelectComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBaUZoRixNQUFNLE9BQU8saUJBQWlCOzs7O0lBdVY1QixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3lCQXRWbkIsS0FBSzsyQkFDSCxLQUFLOzJCQUNMLEtBQUs7cUJBQ1gsS0FBSzswQkFFQSxLQUFLO1FBRTFCLGdCQUErQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDMUQsaUJBQXdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQyx3QkFBZ0QsUUFBUSxDQUFDOztRQUV6RCwyQkFBNkIsRUFBRSxDQUFDO1FBQ2hDLDRCQUE0QyxFQUFFLENBQUM7UUFLL0MsbUJBQXNCLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxJQUFJLENBQUM7UUFDakIsY0FBUyxLQUFLLENBQUM7UUFTZixrQkFBZ0MsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCx3QkFBc0MsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMvRCxvQkFBa0MsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RCxjQUFrQixTQUFTLENBQUM7UUFDNUIsc0JBQTBCLEtBQUssQ0FBQztRQUNoQyxjQUFtRCxTQUFTLENBQUM7UUFDN0Qsa0NBQXNDLElBQUksQ0FBQztRQUMzQyxzQkFBeUMsbUJBQW1CLENBQUM7UUFDN0QsMEJBQThCLFFBQVEsQ0FBQzs7OztRQU12QyxtQkFBdUIsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBNlN0RDs7Ozs7SUEzU0QsSUFDSSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztLQUNoQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFO2dCQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDOztnQkFDckQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7O2dCQUM1RSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Z0JBQzdELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNwRDtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDckQ7U0FDRjtLQUNGOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBRUQsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7O0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztLQUNGOzs7OztJQUdELGNBQWMsQ0FBQyxLQUFvQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1FBRS9CLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTs7Z0JBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUU7WUFDaEUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDbkg7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDekc7U0FDRjtLQUNGOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyRTtLQUNGOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwRTtLQUNGOzs7OztJQUdELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtZQUMxSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO0tBQ0Y7Ozs7O0lBRUQseUJBQXlCLENBQUMsQ0FBZ0I7UUFDeEMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtLQUNGOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUF3QztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDeEQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxnQ0FBZ0M7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekI7S0FDRjs7OztJQUVELCtCQUErQjtRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2FBQ3BGO1NBRUY7UUFDRCxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFO1lBQzFILElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUMzRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEc7U0FDRjtLQUNGOzs7O0lBRUQsa0NBQWtDOztRQUVoQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM3RTs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0tBQzdEOzs7Ozs7SUFJRCw0Q0FBNEMsQ0FBQyxLQUFZO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7Ozs7O0lBSUQsdUNBQXVDLENBQUMsS0FBWTtRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBR0Qsc0JBQXNCLENBQUMsS0FBWTs7UUFDakMsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixVQUFVLEdBQUcsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDO2FBQ3pCO1NBQ0Y7YUFBTTtZQUNMLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxJQUFhO1FBQ25DLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtLQUNGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Ozs7O0lBR0QsYUFBYSxDQUFDLElBQVcsRUFBRSxLQUF3QjtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7S0FDRjs7Ozs7SUFFRCwwQkFBMEIsQ0FBQyxLQUEwQjtRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0tBQ25DOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixDQUFFLHFCQUFxQixDQUFFLEVBQXVCLElBQUk7WUFDcEQsQ0FBRSw2QkFBNkIsQ0FBRSxFQUFlLElBQUksQ0FBQyxZQUFZO1lBQ2pFLENBQUUsK0JBQStCLENBQUUsRUFBYSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JFLENBQUUsMENBQTBDLENBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUTtZQUNsRixDQUFFLHVDQUF1QyxDQUFFLEVBQUssSUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUs7WUFDL0UsQ0FBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFFLEVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7U0FDM0UsQ0FBQztLQUNIOzs7OztJQUVELGdCQUFnQixDQUFDLENBQWE7O1FBRTVCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNEO0tBQ0Y7Ozs7OztJQU9ELFVBQVUsQ0FBQyxLQUFrQjtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7YUFDdEM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztTQUMvQjtLQUNGOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXNDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO0tBQ3RFOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCOzs7WUFoZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQVk7b0JBQ25CO3dCQUNFLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ2hELEtBQUssRUFBUSxJQUFJO3FCQUNsQjtpQkFDRjtnQkFDRCxVQUFVLEVBQVc7b0JBQ25CLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTt3QkFDM0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxNQUFNO3lCQUNoQixDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE9BQU8sRUFBVSxDQUFDOzRCQUNsQixTQUFTLEVBQVEsV0FBVzs0QkFDNUIsZUFBZSxFQUFFLE9BQU87eUJBQ3pCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzs0QkFDakIsT0FBTyxFQUFVLENBQUM7NEJBQ2xCLFNBQVMsRUFBUSxXQUFXOzRCQUM1QixlQUFlLEVBQUUsU0FBUzt5QkFDM0IsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDN0IsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBVSxDQUFDO2dDQUNsQixTQUFTLEVBQVEsYUFBYTtnQ0FDOUIsZUFBZSxFQUFFLE9BQU87NkJBQ3pCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO3lCQUN4RCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDN0IsT0FBTyxDQUFDLDhDQUE4QyxFQUFFLEtBQUssQ0FBQztnQ0FDNUQsT0FBTyxFQUFVLENBQUM7Z0NBQ2xCLFNBQVMsRUFBUSxhQUFhO2dDQUM5QixlQUFlLEVBQUUsT0FBTzs2QkFDekIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDLGVBQWUsRUFBRTs0QkFDMUIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBVSxDQUFDO2dDQUNsQixTQUFTLEVBQVEsYUFBYTtnQ0FDOUIsZUFBZSxFQUFFLFNBQVM7NkJBQzNCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO3lCQUN4RCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxlQUFlLEVBQUU7NEJBQzFCLE9BQU8sQ0FBQyw4Q0FBOEMsRUFBRSxLQUFLLENBQUM7Z0NBQzVELE9BQU8sRUFBVSxDQUFDO2dDQUNsQixTQUFTLEVBQVEsYUFBYTtnQ0FDOUIsZUFBZSxFQUFFLFNBQVM7NkJBQzNCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsMjNGQUFpRDtnQkFDakQsSUFBSSxFQUFpQjtvQkFDbkIsb0JBQW9CLEVBQWMsTUFBTTtvQkFDeEMsdUJBQXVCLEVBQVcsa0JBQWtCO29CQUNwRCx1QkFBdUIsRUFBVyxrQkFBa0I7b0JBQ3BELDRCQUE0QixFQUFNLGFBQWE7b0JBQy9DLDZCQUE2QixFQUFLLFlBQVk7b0JBQzlDLGdDQUFnQyxFQUFFLGNBQWM7b0JBQ2hELHlCQUF5QixFQUFTLFFBQVE7aUJBQzNDO3lCQUNzQjs7Ozs7Ozs7O0dBU3RCO2FBQ0Y7Ozs7WUEzRkMsU0FBUzs7OytCQWtIUixTQUFTLFNBQUMsZ0JBQWdCO2tDQUMxQixTQUFTLFNBQUMsbUJBQW1COzBDQUM3QixTQUFTLFNBQUMsMkJBQTJCO3lDQUNyQyxTQUFTLFNBQUMsMEJBQTBCO3NDQUVwQyxlQUFlLFNBQUMsaUJBQWlCOzJDQUNqQyxlQUFlLFNBQUMsc0JBQXNCO3lCQUN0QyxNQUFNOytCQUNOLE1BQU07MkJBQ04sTUFBTTtxQkFDTixLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5Q0FDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFHTCxLQUFLO2tDQUVMLEtBQUs7MEJBVUwsS0FBSztxQkFVTCxLQUFLO3lCQW9DTCxLQUFLOzJCQVlMLEtBQUs7MkJBU0wsS0FBSzs0QkFTTCxLQUFLO3NCQVNMLFlBQVksU0FBQyxPQUFPOzZCQVFwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBTUEFDRSwgVEFCIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL256LW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zZWxlY3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdkcm9wRG93bkFuaW1hdGlvbicsIFtcclxuICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJ3RvcCcsIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBib3R0b20nLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignYm90dG9tID0+IGhpZGRlbicsIFtcclxuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHRvcCcsIFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ3RvcCA9PiBoaWRkZW4nLCBbXHJcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0XScgICAgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXScgICAgOiAnIW56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXScgICAgICAgOiAnbnpPcGVuJ1xyXG4gIH0sXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgYCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9hbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XHJcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdmFsdWU6IGFueSB8IGFueVtdO1xyXG4gIG92ZXJsYXlXaWR0aDogbnVtYmVyO1xyXG4gIG92ZXJsYXlNaW5XaWR0aDogbnVtYmVyO1xyXG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBpc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIGRyb3BEb3duQ2xhc3NNYXA7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgbnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50OiBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkgbnpPcHRpb25Db250YWluZXJDb21wb25lbnQ6IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50O1xyXG4gIC8qKiBzaG91bGQgbW92ZSB0byBuei1vcHRpb24tY29udGFpbmVyIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA4MTAgcmVzb2x2ZWQgKiovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xyXG4gIEBJbnB1dCgpIG56TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIG56RHJvcGRvd25TdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZzsgfTtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcclxuICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzEzMzQ5L2ZpbGVzICoqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEcm9wZG93bkNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kcm9wZG93bkNsYXNzTmFtZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEcm9wZG93bkNsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duQ2xhc3NOYW1lO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56T3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3BlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kbGVFc2NCdWcoKTtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XHJcbiAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmhvc3RFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSwgYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudE5vZGUsIGhvc3RFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5yZXNldEFjdGl2ZU9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFsbG93Q2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FsbG93Q2xlYXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dDbGVhcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93U2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UGxhY2VIb2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMubnpPcGVuID0gIXRoaXMubnpPcGVuO1xyXG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXHJcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkgeyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX29wZW4pIHtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgICB0aGlzLm56T3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IFRBQikge1xyXG4gICAgICAvLyBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gVEFCKSB7IC8vICMyMjAxXHJcbiAgICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogb3ZlcmxheSBjYW4gbm90IGJlIGFsd2F5cyBvcGVuICwgcmVvcGVuIG92ZXJsYXkgYWZ0ZXIgcHJlc3MgZXNjICoqL1xyXG4gIGhhbmRsZUVzY0J1ZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgIXRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5uZ09uQ2hhbmdlcyh7IG9wZW46IG5ldyBTaW1wbGVDaGFuZ2UoZmFsc2UsIHRydWUsIGZhbHNlKSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bkNka092ZXJsYXlPcmlnaW4oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5vbktleURvd25VbChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgICAgIHRoaXMuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT3B0aW9uRnJvbU9wdGlvbkNvbnRhaW5lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGUgPT09ICd0YWdzJykge1xyXG4gICAgICB0aGlzLm9uU2VhcmNoKCcnLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgdGhpcy5uek9wZW4gJiYgdGhpcy5jZGtPdmVybGF5T3JpZ2luKSB7XHJcbiAgICAgIGlmICh0aGlzLm56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5V2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogdGhpcy5vdmVybGF5V2lkdGggfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5TWluV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogdGhpcy5vdmVybGF5TWluV2lkdGggfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICAvKiogd2FpdCBmb3IgaW5wdXQgc2l6ZSBjaGFuZ2UgKiovXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCksIDE2MCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAnZGVmYXVsdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxuXHJcbiAgLyoqIG9wdGlvbiBjb250YWluZXIgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlIC0+IHVwZGF0ZSBuZ01vZGVsICoqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlRnJvbU9wdGlvbkNvbnRhaW5lcih2YWx1ZTogYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJTZWFyY2hWYWx1ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBvcHRpb24gY29udGFpbmVyIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAtPiB1cGRhdGUgbmdNb2RlbCAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZUZyb21Ub3BDb250cm9sKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclNlYXJjaFZhbHVlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBsZXQgbW9kZWxWYWx1ZTtcclxuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHZhbHVlWyAwIF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZU5nTW9kZWwodmFsdWUsIG1vZGVsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2godmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGVtaXQgJiYgKHRoaXMuc2VhcmNoVmFsdWUgIT09IHZhbHVlKSkge1xyXG4gICAgICB0aGlzLm56T25TZWFyY2guZW1pdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyTmdNb2RlbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZU5nTW9kZWwoW10sIG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVOZ01vZGVsKFtdLCBbXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTmdNb2RlbChsaXN0OiBhbnlbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0O1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudFtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93bkNsYXNzTWFwID0ge1xyXG4gICAgICBbICdhbnQtc2VsZWN0LWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVgIF0gICAgICAgICAgICAgOiB0aGlzLmlzU2luZ2xlTW9kZSxcclxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVgIF0gICAgICAgICAgIDogdGhpcy5pc011bHRpcGxlT3JUYWdzLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0YCBdOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nLFxyXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnLFxyXG4gICAgICBbIGAke3RoaXMubnpEcm9wZG93bkNsYXNzTmFtZX1gIF0gICAgICAgICAgICAgOiAhIXRoaXMubnpEcm9wZG93bkNsYXNzTmFtZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogc2hvdWxkIG5vdCBjbGVhciBkaXNhYmxlZCBvcHRpb24gP1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xlYXJOZ01vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhclNlYXJjaFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIHZhbHVlIF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==