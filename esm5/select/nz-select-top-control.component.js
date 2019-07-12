/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer) {
        this.renderer = renderer;
        this._listTemplateOfOption = [];
        this.listOfCachedSelectedOption = [];
        this.isComposing = false;
        // tslint:disable-next-line:no-any
        this.nzListOfSelectedValueChange = new EventEmitter();
        this.nzOnSearch = new EventEmitter();
        this.nzMode = 'default';
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzOpen = false;
    }
    Object.defineProperty(NzSelectTopControlComponent.prototype, "nzListOfSelectedValue", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfSelectedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listOfSelectedValue = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "nzListTemplateOfOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listTemplateOfOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listTemplateOfOption = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    /** cached selected option list **/
    /**
     * cached selected option list *
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateListOfCachedOption = /**
     * cached selected option list *
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.nzListTemplateOfOption.find(function (o) { return _this.compareWith(o.nzValue, _this.nzListOfSelectedValue[0]); });
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedOptionFromLatestTemplate_1 = this.nzListTemplateOfOption.filter(function (o) { return isNotNil(_this.nzListOfSelectedValue.find(function (v) { return _this.compareWith(v, o.nzValue); })); });
            /** @type {?} */
            var restSelectedValue_1 = this.nzListOfSelectedValue.filter(function (v) { return !isNotNil(listOfCachedOptionFromLatestTemplate_1.find(function (o) { return _this.compareWith(o.nzValue, v); })); });
            /** @type {?} */
            var listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(function (o) { return isNotNil(restSelectedValue_1.find(function (v) { return _this.compareWith(o.nzValue, v); })); });
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate_1.concat(listOfCachedOptionFromOld);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.nzOnSearch.emit({ value: value, emit: emit });
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzListOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueDisplay", {
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
    Object.defineProperty(NzSelectTopControlComponent.prototype, "singleValueLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getPropertyFromValue(this.nzListOfSelectedValue[0], 'nzLabel');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.focusOnInput = /**
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
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.getPropertyFromValue = /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    function (value, prop) {
        var _this = this;
        /** @type {?} */
        var targetOption = this.listOfCachedSelectedOption.find(function (item) { return _this.compareWith(item.nzValue, value); });
        return targetOption ? targetOption[prop] : '';
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.isOptionDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (this.nzMode === 'tags') || !!this.getPropertyFromValue(value, 'nzLabel');
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.removeValueFormSelected = /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    function (value, event) {
        if (this.nzDisabled || this.getPropertyFromValue(value, 'nzDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.nzListOfSelectedValue.filter(function (item) { return item !== value; });
        this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = /** @type {?} */ (e.target);
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.nzListOfSelectedValue.length) {
                this.removeValueFormSelected(this.nzListOfSelectedValue[this.nzListOfSelectedValue.length - 1]);
            }
        }
    };
    NzSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-select-top-control]',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('tagAnimation', [
                            state('*', style({ opacity: 1, transform: 'scale(1)' })),
                            transition('void => *', [
                                style({ opacity: 0, transform: 'scale(0)' }),
                                animate('150ms linear')
                            ]),
                            state('void', style({ opacity: 0, transform: 'scale(0)' })),
                            transition('* => void', [
                                style({ opacity: 1, transform: 'scale(1)' }),
                                animate('150ms linear')
                            ])
                        ])
                    ],
                    template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"something-new\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (input)=\"updateWidth()\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event,true)\"\r\n    [disabled]=\"nzDisabled\">\r\n</ng-template>\r\n<div\r\n  *ngIf=\"nzPlaceHolder\"\r\n  nz-select-unselectable\r\n  [style.display]=\"placeHolderDisplay\"\r\n  (click)=\"focusOnInput()\"\r\n  class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n<!--single mode-->\r\n<ng-container *ngIf=\"isSingleMode\">\r\n  <!--selected label-->\r\n  <div\r\n    *ngIf=\"nzListOfSelectedValue.length\"\r\n    class=\"ant-select-selection-selected-value\"\r\n    [attr.title]=\"singleValueLabel\"\r\n    [ngStyle]=\"selectedValueDisplay\">\r\n    {{ singleValueLabel }}\r\n  </div>\r\n  <!--show search-->\r\n  <div\r\n    *ngIf=\"nzShowSearch\"\r\n    class=\"ant-select-search ant-select-search--inline\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<!--multiple or tags mode-->\r\n<ul *ngIf=\"isMultipleOrTags\">\r\n  <ng-container *ngFor=\"let value of nzListOfSelectedValue\">\r\n    <li\r\n      *ngIf=\"isOptionDisplay(value)\"\r\n      [@tagAnimation]\r\n      [attr.title]=\"getPropertyFromValue(value,'nzLabel')\"\r\n      [class.ant-select-selection__choice__disabled]=\"getPropertyFromValue(value,'nzDisabled')\"\r\n      class=\"ant-select-selection__choice\">\r\n      <div class=\"ant-select-selection__choice__content\">{{ getPropertyFromValue(value, 'nzLabel') || value }}</div>\r\n      <span *ngIf=\"!getPropertyFromValue(value,'nzDisabled')\" class=\"ant-select-selection__choice__remove\" (click)=\"removeValueFormSelected(value, $event)\">\r\n        <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n      </span>\r\n    </li>\r\n  </ng-container>\r\n\r\n  <li class=\"ant-select-search ant-select-search--inline\">\r\n    <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n  </li>\r\n</ul>",
                    host: {
                        '[class.ant-select-selection__rendered]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzSelectTopControlComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzListOfSelectedValueChange: [{ type: Output }],
        nzOnSearch: [{ type: Output }],
        nzMode: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOpen: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }],
        nzListTemplateOfOption: [{ type: Input }]
    };
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
function NzSelectTopControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSelectTopControlComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype._listTemplateOfOption;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzListOfSelectedValueChange;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3TDVDLHFDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FDQTVKYyxFQUFFO1FBQ3ZELGtDQUFrRCxFQUFFLENBQUM7UUFFckQsbUJBQWMsS0FBSyxDQUFDOztRQUdwQixtQ0FBaUQsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUMzRSxrQkFBZ0MsSUFBSSxZQUFZLEVBQW9DLENBQUM7UUFDckYsY0FBa0IsU0FBUyxDQUFDO1FBQzVCLG9CQUF3QixLQUFLLENBQUM7UUFDOUIsa0JBQXNCLEtBQUssQ0FBQztRQUc1QixjQUFrQixLQUFLLENBQUM7S0FpSnZCO0lBN0lELHNCQUVJLDhEQUFxQjtRQUt6QixrQ0FBa0M7Ozs7UUFDbEM7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQzs7Ozs7UUFWRCxVQUUwQixLQUFZO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7OztPQUFBO0lBT0Qsc0JBQ0ksK0RBQXNCOzs7O1FBSzFCO1lBQ0UsT0FBTyxJQUFJLENBQUMs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NUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzs0QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7NEJBQzNELFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO2dDQUM1QyxPQUFPLENBQUMsY0FBYyxDQUFDOzZCQUN4QixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsczFFQUE2RDtvQkFDN0QsSUFBSSxFQUFpQjt3QkFDbkIsd0NBQXdDLEVBQUUsTUFBTTtxQkFDakQ7aUJBQ0Y7Ozs7Z0JBekI0RCxTQUFTOzs7K0JBaUNuRSxTQUFTLFNBQUMsY0FBYzs4Q0FFeEIsTUFBTTs2QkFDTixNQUFNO3lCQUNOLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUVMLEtBQUs7eUJBQ0wsS0FBSzs4QkFFTCxLQUFLO3dDQUVMLEtBQUs7eUNBWUwsS0FBSzs7c0NBakVSOztTQWlDYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotc2VsZWN0LXRvcC1jb250cm9sXScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xyXG4gICAgdHJpZ2dlcigndGFnQW5pbWF0aW9uJywgW1xyXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicpXHJcbiAgICAgIF0pLFxyXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZF0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcclxuICBwcml2YXRlIF9saXN0VGVtcGxhdGVPZk9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuIH0+KCk7XHJcbiAgQElucHV0KCkgbnpNb2RlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekxpc3RUZW1wbGF0ZU9mT3B0aW9uKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudFtdKSB7XHJcbiAgICB0aGlzLl9saXN0VGVtcGxhdGVPZk9wdGlvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGdldCBuekxpc3RUZW1wbGF0ZU9mT3B0aW9uKCk6IE56T3B0aW9uQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RUZW1wbGF0ZU9mT3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNhY2hlZCBzZWxlY3RlZCBvcHRpb24gbGlzdCAqKi9cclxuICB1cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm56TGlzdFRlbXBsYXRlT2ZPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdKSk7XHJcbiAgICAgIGlmIChpc05vdE5pbChzZWxlY3RlZE9wdGlvbikpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gWyBzZWxlY3RlZE9wdGlvbiBdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUgPSB0aGlzLm56TGlzdFRlbXBsYXRlT2ZPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgby5uelZhbHVlKSkpKTtcclxuICAgICAgY29uc3QgcmVzdFNlbGVjdGVkVmFsdWUgPSB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIodiA9PiAhaXNOb3ROaWwobGlzdE9mQ2FjaGVkT3B0aW9uRnJvbUxhdGVzdFRlbXBsYXRlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpKSk7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21PbGQgPSB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmZpbHRlcihvID0+IGlzTm90TmlsKHJlc3RTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpKSk7XHJcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUuY29uY2F0KGxpc3RPZkNhY2hlZE9wdGlvbkZyb21PbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcclxuICAgIHRoaXMubnpPblNlYXJjaC5lbWl0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAnZGVmYXVsdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRWYWx1ZURpc3BsYXkoKTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xyXG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBzaW5nbGVWYWx1ZUxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eUZyb21WYWx1ZSh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdLCAnbnpMYWJlbCcpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWU6IGFueSwgcHJvcDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHRhcmdldE9wdGlvbiA/IHRhcmdldE9wdGlvblsgcHJvcCBdIDogJyc7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaXNPcHRpb25EaXNwbGF5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5uek1vZGUgPT09ICd0YWdzJykgfHwgISF0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnbnpMYWJlbCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHZhbHVlOiBhbnksIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnbnpEaXNhYmxlZCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbiAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXHJcbiAgICAgICFldmVudFRhcmdldC52YWx1ZSAmJlxyXG4gICAgICAvLyBCYWNrU3BhY2VcclxuICAgICAga2V5Q29kZSA9PT0gOFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDEgXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG5cclxuICB9XHJcbn1cclxuIl19