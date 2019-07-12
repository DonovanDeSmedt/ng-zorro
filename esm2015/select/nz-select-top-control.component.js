/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzSelectTopControlComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListOfSelectedValue(value) {
        this._listOfSelectedValue = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get nzListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListTemplateOfOption(value) {
        this._listTemplateOfOption = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get nzListTemplateOfOption() {
        return this._listTemplateOfOption;
    }
    /**
     * cached selected option list *
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.nzListTemplateOfOption.find(o => this.compareWith(o.nzValue, this.nzListOfSelectedValue[0]));
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedOptionFromLatestTemplate = this.nzListTemplateOfOption.filter(o => isNotNil(this.nzListOfSelectedValue.find(v => this.compareWith(v, o.nzValue))));
            /** @type {?} */
            const restSelectedValue = this.nzListOfSelectedValue.filter(v => !isNotNil(listOfCachedOptionFromLatestTemplate.find(o => this.compareWith(o.nzValue, v))));
            /** @type {?} */
            const listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(o => isNotNil(restSelectedValue.find(v => this.compareWith(o.nzValue, v))));
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate.concat(listOfCachedOptionFromOld);
        }
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    setInputValue(value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.nzOnSearch.emit({ value, emit });
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
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.nzListOfSelectedValue.length ? 'none' : 'block';
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
    get singleValueLabel() {
        return this.getPropertyFromValue(this.nzListOfSelectedValue[0], 'nzLabel');
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
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    getPropertyFromValue(value, prop) {
        /** @type {?} */
        const targetOption = this.listOfCachedSelectedOption.find(item => this.compareWith(item.nzValue, value));
        return targetOption ? targetOption[prop] : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isOptionDisplay(value) {
        return (this.nzMode === 'tags') || !!this.getPropertyFromValue(value, 'nzLabel');
    }
    /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    removeValueFormSelected(value, event) {
        if (this.nzDisabled || this.getPropertyFromValue(value, 'nzDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.nzListOfSelectedValue.filter(item => item !== value);
        this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    updateWidth() {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
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
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.nzListOfSelectedValue.length) {
                this.removeValueFormSelected(this.nzListOfSelectedValue[this.nzListOfSelectedValue.length - 1]);
            }
        }
    }
}
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
NzSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXlCOUMsTUFBTSxPQUFPLDJCQUEyQjs7OztJQStKdEMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQ0E1SmMsRUFBRTtRQUN2RCxrQ0FBa0QsRUFBRSxDQUFDO1FBRXJELG1CQUFjLEtBQUssQ0FBQzs7UUFHcEIsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usa0JBQWdDLElBQUksWUFBWSxFQUFvQyxDQUFDO1FBQ3JGLGNBQWtCLFNBQVMsQ0FBQztRQUM1QixvQkFBd0IsS0FBSyxDQUFDO1FBQzlCLGtCQUFzQixLQUFLLENBQUM7UUFHNUIsY0FBa0IsS0FBSyxDQUFDO0tBaUp2Qjs7Ozs7SUE3SUQsSUFFSSxxQkFBcUIsQ0FBQyxLQUFZO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7Ozs7SUFHRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQzs7Ozs7SUFFRCxJQUNJLHNCQUFzQixDQUFDLEtBQTBCO1FBQ25E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RUFBRSxNQUFNO2lCQUNqRDthQUNGOzs7O1lBekI0RCxTQUFTOzs7MkJBaUNuRSxTQUFTLFNBQUMsY0FBYzswQ0FFeEIsTUFBTTt5QkFDTixNQUFNO3FCQUNOLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUVMLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLO29DQUVMLEtBQUs7cUNBWUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXJcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCd0YWdBbmltYXRpb24nLCBbXHJcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcclxuICAgICAgXSksXHJcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xyXG4gIHByaXZhdGUgX2xpc3RUZW1wbGF0ZU9mT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gfT4oKTtcclxuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TGlzdFRlbXBsYXRlT2ZPcHRpb24odmFsdWU6IE56T3B0aW9uQ29tcG9uZW50W10pIHtcclxuICAgIHRoaXMuX2xpc3RUZW1wbGF0ZU9mT3B0aW9uID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TGlzdFRlbXBsYXRlT2ZPcHRpb24oKTogTnpPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdFRlbXBsYXRlT2ZPcHRpb247XHJcbiAgfVxyXG5cclxuICAvKiogY2FjaGVkIHNlbGVjdGVkIG9wdGlvbiBsaXN0ICoqL1xyXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubnpMaXN0VGVtcGxhdGVPZk9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0pKTtcclxuICAgICAgaWYgKGlzTm90TmlsKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbIHNlbGVjdGVkT3B0aW9uIF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZSA9IHRoaXMubnpMaXN0VGVtcGxhdGVPZk9wdGlvbi5maWx0ZXIobyA9PiBpc05vdE5pbCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBvLm56VmFsdWUpKSkpO1xyXG4gICAgICBjb25zdCByZXN0U2VsZWN0ZWRWYWx1ZSA9IHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcih2ID0+ICFpc05vdE5pbChsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSkpKTtcclxuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkT3B0aW9uRnJvbU9sZCA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwocmVzdFNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSkpKTtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZS5jb25jYXQobGlzdE9mQ2FjaGVkT3B0aW9uRnJvbU9sZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xyXG4gICAgdGhpcy5uek9uU2VhcmNoLmVtaXQoeyB2YWx1ZSwgZW1pdCB9KTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICdkZWZhdWx0JztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XHJcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNpbmdsZVZhbHVlTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0sICduekxhYmVsJyk7XHJcbiAgfVxyXG5cclxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXRQcm9wZXJ0eUZyb21WYWx1ZSh2YWx1ZTogYW55LCBwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHZhbHVlKSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0T3B0aW9uID8gdGFyZ2V0T3B0aW9uWyBwcm9wIF0gOiAnJztcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpc09wdGlvbkRpc3BsYXkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnKSB8fCAhIXRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWUsICduekxhYmVsJyk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodmFsdWU6IGFueSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8IHRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWUsICduekRpc2FibGVkJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcclxuICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcclxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXHJcbiAgICAgIC8vIEJhY2tTcGFjZVxyXG4gICAgICBrZXlDb2RlID09PSA4XHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=