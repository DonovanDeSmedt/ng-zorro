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
                template: "<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"isSingleMode\"\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\n  tabindex=\"0\"\n>\n  <div\n    nz-select-top-control\n    [nzOpen]=\"nzOpen\"\n    [compareWith]=\"compareWith\"\n    [nzPlaceHolder]=\"nzPlaceHolder\"\n    [nzShowSearch]=\"nzShowSearch\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzMode]=\"nzMode\"\n    [nzListTemplateOfOption]=\"listOfTemplateOption\"\n    [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    (nzOnSearch)=\"onSearch($event.value, $event.emit)\"\n    (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\"\n  ></div>\n  <span\n    *ngIf=\"nzAllowClear\"\n    class=\"ant-select-selection__clear\"\n    nz-select-unselectable\n    (click)=\"onClearSelection($event)\"\n  >\n    <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-select-close-icon\"></i>\n  </span>\n  <span class=\"ant-select-arrow\" nz-select-unselectable>\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n    <b></b>\n  </span>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\n  [cdkConnectedOverlayOpen]=\"!isDestroy\"\n>\n  <div\n    [ngClass]=\"dropDownClassMap\"\n    [@dropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"nzDropdownStyle\"\n  >\n    <div\n      style=\"overflow: auto\"\n      nz-option-container\n      [listOfNzOptionComponent]=\"listOfNzOptionComponent\"\n      [listOfNzOptionGroupComponent]=\"listOfNzOptionGroupComponent\"\n      [nzSearchValue]=\"searchValue\"\n      [nzFilterOption]=\"nzFilterOption\"\n      [nzServerSearch]=\"nzServerSearch\"\n      [compareWith]=\"compareWith\"\n      [nzNotFoundContent]=\"nzNotFoundContent\"\n      [nzMaxMultipleCount]=\"nzMaxMultipleCount\"\n      [nzMode]=\"nzMode\"\n      [id]=\"idClass\"\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\"\n      (nzClickOption)=\"onClickOptionFromOptionContainer()\"\n      (nzListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\n      (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\n      [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    ></div>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBaUZoRixNQUFNOzs7O0lBdVZKLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FB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QVk7b0JBQzlDLGdDQUFnQyxFQUFFLGNBQWM7b0JBQ2hELHlCQUF5QixFQUFTLFFBQVE7aUJBQzNDO3lCQUNzQjs7Ozs7Ozs7O0dBU3RCO2FBQ0Y7Ozs7WUEzRkMsU0FBUzs7OytCQWtIUixTQUFTLFNBQUMsZ0JBQWdCO2tDQUMxQixTQUFTLFNBQUMsbUJBQW1COzBDQUM3QixTQUFTLFNBQUMsMkJBQTJCO3lDQUNyQyxTQUFTLFNBQUMsMEJBQTBCO3NDQUVwQyxlQUFlLFNBQUMsaUJBQWlCOzJDQUNqQyxlQUFlLFNBQUMsc0JBQXNCO3lCQUN0QyxNQUFNOytCQUNOLE1BQU07MkJBQ04sTUFBTTtxQkFDTixLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5Q0FDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFHTCxLQUFLO2tDQUVMLEtBQUs7MEJBVUwsS0FBSztxQkFVTCxLQUFLO3lCQW9DTCxLQUFLOzJCQVlMLEtBQUs7MkJBU0wsS0FBSzs0QkFTTCxLQUFLO3NCQVNMLFlBQVksU0FBQyxPQUFPOzZCQVFwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgU1BBQ0UsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5pbXBvcnQgeyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL256LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNlbGVjdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF0sXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdkcm9wRG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCd0b3AnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdib3R0b20gPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndG9wID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdF0nICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXScgICAgICAgICA6ICduelNpemU9PT1cImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nICAgIDogJyFuekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJyAgIDogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nICAgICAgIDogJ256T3BlbidcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93U2VhcmNoID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX2Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W10gPSBbXTtcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB2YWx1ZTogYW55IHwgYW55W107XG4gIG92ZXJsYXlXaWR0aDogbnVtYmVyO1xuICBvdmVybGF5TWluV2lkdGg6IG51bWJlcjtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgZHJvcERvd25DbGFzc01hcDtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSBuelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkgbnpPcHRpb25Db250YWluZXJDb21wb25lbnQ6IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50O1xuICAvKiogc2hvdWxkIG1vdmUgdG8gbnotb3B0aW9uLWNvbnRhaW5lciB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwODEwIHJlc29sdmVkICoqL1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBuek9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56TW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIG56TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkQ2xhc3M6IHN0cmluZztcbiAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8xMzM0OS9maWxlcyAqKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEcm9wZG93bkNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZHJvcGRvd25DbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekRyb3Bkb3duQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duQ2xhc3NOYW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgZ2V0IG56QXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3BlbiA9IHZhbHVlO1xuICAgIHRoaXMuaGFuZGxlRXNjQnVnKCk7XG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuZm9jdXNPbklucHV0KCk7XG4gICAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5ob3N0RWxlbWVudDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnROb2RlLCBiYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudE5vZGUsIGhvc3RFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQucmVzZXRBY3RpdmVPcHRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgbnpPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxsb3dDbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbG93Q2xlYXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWxsb3dDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGVhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTZWFyY2g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZUhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelBsYWNlSG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56T3BlbiA9ICF0aGlzLm56T3BlbjtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoIXRoaXMuX29wZW4pIHtcbiAgICAgIGlmIChrZXlDb2RlID09PSBTUEFDRSB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXlDb2RlID09PSBUQUIpIHtcbiAgICAgIC8vIGlmIChrZXlDb2RlID09PSBTUEFDRSB8fCBrZXlDb2RlID09PSBUQUIpIHsgLy8gIzIyMDFcbiAgICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBvdmVybGF5IGNhbiBub3QgYmUgYWx3YXlzIG9wZW4gLCByZW9wZW4gb3ZlcmxheSBhZnRlciBwcmVzcyBlc2MgKiovXG4gIGhhbmRsZUVzY0J1ZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmICYmICF0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5uZ09uQ2hhbmdlcyh7IG9wZW46IG5ldyBTaW1wbGVDaGFuZ2UoZmFsc2UsIHRydWUsIGZhbHNlKSB9KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd25DZGtPdmVybGF5T3JpZ2luKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5vbktleURvd25VbChlKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gIH1cblxuICBvbkNsaWNrT3B0aW9uRnJvbU9wdGlvbkNvbnRhaW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGUgPT09ICd0YWdzJykge1xuICAgICAgdGhpcy5vblNlYXJjaCgnJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgdGhpcy5uek9wZW4gJiYgdGhpcy5jZGtPdmVybGF5T3JpZ2luKSB7XG4gICAgICBpZiAodGhpcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogdGhpcy5vdmVybGF5V2lkdGggfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm92ZXJsYXlNaW5XaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogdGhpcy5vdmVybGF5TWluV2lkdGggfSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XG4gICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZiAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpOiB2b2lkIHtcbiAgICAvKiogd2FpdCBmb3IgaW5wdXQgc2l6ZSBjaGFuZ2UgKiovXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpLCAxNjApO1xuICB9XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgLyoqIG9wdGlvbiBjb250YWluZXIgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlIC0+IHVwZGF0ZSBuZ01vZGVsICoqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWVGcm9tT3B0aW9uQ29udGFpbmVyKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTZWFyY2hWYWx1ZSgpO1xuICAgIHRoaXMudXBkYXRlRnJvbVNlbGVjdGVkTGlzdCh2YWx1ZSk7XG4gIH1cblxuICAvKiogb3B0aW9uIGNvbnRhaW5lciBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgLT4gdXBkYXRlIG5nTW9kZWwgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZUZyb21Ub3BDb250cm9sKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTZWFyY2hWYWx1ZSgpO1xuICAgIHRoaXMudXBkYXRlRnJvbVNlbGVjdGVkTGlzdCh2YWx1ZSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgbGV0IG1vZGVsVmFsdWU7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSB2YWx1ZVsgMCBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtb2RlbFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVOZ01vZGVsKHZhbHVlLCBtb2RlbFZhbHVlKTtcbiAgfVxuXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZW1pdCAmJiAodGhpcy5zZWFyY2hWYWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICB0aGlzLm56T25TZWFyY2guZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJOZ01vZGVsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgdGhpcy51cGRhdGVOZ01vZGVsKFtdLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVOZ01vZGVsKFtdLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVOZ01vZGVsKGxpc3Q6IGFueVtdLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0O1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBsaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZSh2YWx1ZTogTnpPcHRpb25Db21wb25lbnRbXSk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93bkNsYXNzTWFwID0ge1xuICAgICAgWyAnYW50LXNlbGVjdC1kcm9wZG93bicgXSAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLXNpbmdsZWAgXSAgICAgICAgICAgICA6IHRoaXMuaXNTaW5nbGVNb2RlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVgIF0gICAgICAgICAgIDogdGhpcy5pc011bHRpcGxlT3JUYWdzLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdGAgXTogdGhpcy5kcm9wRG93blBvc2l0aW9uID09PSAnYm90dG9tJyxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRgIF0gICA6IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCcsXG4gICAgICBbIGAke3RoaXMubnpEcm9wZG93bkNsYXNzTmFtZX1gIF0gICAgICAgICAgICAgOiAhIXRoaXMubnpEcm9wZG93bkNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICBvbkNsZWFyU2VsZWN0aW9uKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBzaG91bGQgbm90IGNsZWFyIGRpc2FibGVkIG9wdGlvbiA/XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNsZWFyTmdNb2RlbCgpO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgdmFsdWUgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gW107XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgfVxufVxuIl19