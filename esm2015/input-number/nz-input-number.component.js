/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
export class NzInputNumberComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = value => value;
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = value => value;
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = this.actualValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCurrentValidValue(value) {
        /** @type {?} */
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = /** @type {?} */ (this.getValidValue(val));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    isNotCompleteNumber(num) {
        return (isNaN(/** @type {?} */ (num)) ||
            num === '' ||
            num === null ||
            (num && num.toString().indexOf('.') === num.toString().length - 1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getValidValue(value) {
        /** @type {?} */
        let val = parseFloat(/** @type {?} */ (value));
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return /** @type {?} */ (num);
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    }
    /**
     * @return {?}
     */
    setValidateValue() {
        /** @type {?} */
        const value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, `${this.value}` !== `${value}`);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
        this.setValidateValue();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getRatio(e) {
        /** @type {?} */
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPrecision(value) {
        /** @type {?} */
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        const ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        const stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        const currentValuePrecision = this.getPrecision(/** @type {?} */ (currentValue));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getPrecisionFactor(currentValue, ratio) {
        /** @type {?} */
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    upStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    downStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        let val;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        const outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout(() => {
            this[type](e, ratio, true);
        }, 600);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    setValue(value, emit) {
        if (emit && `${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        const displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            const val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.stop();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setValue(value, false);
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
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.nzBlur.emit();
                Promise.resolve().then(() => this.onTouched());
            }
            else {
                this.nzFocus.emit();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzAutoFocus"]) {
            this.updateAutoFocus();
        }
        if (changes["nzFormatter"]) {
            /** @type {?} */
            const value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
NzInputNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-input-number',
                template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n    (mousedown)=\"up($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon type=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n    (mousedown)=\"down($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon type=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-input-number-input\"\r\n    [disabled]=\"nzDisabled\"\r\n    [attr.min]=\"nzMin\"\r\n    [attr.max]=\"nzMax\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [attr.step]=\"nzStep\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp()\"\r\n    (blur)=\"onBlur()\"\r\n    (focus)=\"onFocus()\"\r\n    [ngModel]=\"displayValue\"\r\n    (ngModelChange)=\"onModelChange($event)\">\r\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzInputNumberComponent),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-input-number]': 'true',
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `nzSize === 'large'`,
                    '[class.ant-input-number-sm]': `nzSize === 'small'`,
                    '[class.ant-input-number-disabled]': 'nzDisabled'
                }
            }] }
];
/** @nocollapse */
NzInputNumberComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzInputNumberComponent.propDecorators = {
    nzBlur: [{ type: Output }],
    nzFocus: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    nzSize: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzParser: [{ type: Input }],
    nzPrecision: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzFormatter: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
function NzInputNumberComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputNumberComponent.prototype.autoStepTimer;
    /** @type {?} */
    NzInputNumberComponent.prototype.actualValue;
    /** @type {?} */
    NzInputNumberComponent.prototype.value;
    /** @type {?} */
    NzInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    NzInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    NzInputNumberComponent.prototype.onChange;
    /** @type {?} */
    NzInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzBlur;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzSize;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMin;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMax;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzParser;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPrecision;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzStep;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzDisabled;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFormatter;
    /** @type {?} */
    NzInputNumberComponent.prototype.elementRef;
    /** @type {?} */
    NzInputNumberComponent.prototype.renderer;
    /** @type {?} */
    NzInputNumberComponent.prototype.cdr;
    /** @type {?} */
    NzInputNumberComponent.prototype.focusMonitor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJpbnB1dC1udW1iZXIvbnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXNCcEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7OztJQThSakMsWUFDVSxZQUNBLFVBQ0EsS0FDQTtRQUhBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdBQUgsR0FBRztRQUNILGlCQUFZLEdBQVosWUFBWTtRQTdSdEIsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEtBQUssQ0FBQztRQUNuQixvQkFBZSxLQUFLLENBQUM7UUFDckIsZ0JBQW9DLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMvQyxpQkFBd0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ25DLGNBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsZUFBNkIsSUFBSSxZQUFZLEVBQUUsQ0FB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RSxXQUFXO29CQUMvQyw2QkFBNkIsRUFBRSxvQkFBb0I7b0JBQ25ELDZCQUE2QixFQUFFLG9CQUFvQjtvQkFDbkQsbUNBQW1DLEVBQUUsWUFBWTtpQkFDbEQ7YUFDRjs7OztZQXJDQyxVQUFVO1lBT1YsU0FBUztZQVRULGlCQUFpQjtZQU5WLFlBQVk7OztxQkF3RGxCLE1BQU07c0JBQ04sTUFBTTsyQkFDTixTQUFTLFNBQUMsY0FBYztxQkFDeEIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7O0lBRkksWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWlucHV0LW51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWlucHV0LW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOeklucHV0TnVtYmVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyO1xyXG4gIHByaXZhdGUgYWN0dWFsVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgZGlzYWJsZWRVcCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkRG93biA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpNaW46IG51bWJlciA9IC1JbmZpbml0eTtcclxuICBASW5wdXQoKSBuek1heDogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbnpQYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuICBASW5wdXQoKSBuelByZWNpc2lvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBuelN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHRoaXMubnpQYXJzZXIoXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC/jgIIvZywgJy4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJylcclxuICAgICk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgdmFsID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIodmFsKSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xyXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8XHJcbiAgICAgIG51bSA9PT0gJycgfHxcclxuICAgICAgbnVtID09PSBudWxsIHx8XHJcbiAgICAgIChudW0gJiYgbnVtLnRvU3RyaW5nKCkuaW5kZXhPZignLicpID09PSBudW0udG9TdHJpbmcoKS5sZW5ndGggLSAxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFZhbGlkVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzM1OFxyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcclxuICAgICAgdmFsID0gdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIGlmICh2YWwgPiB0aGlzLm56TWF4KSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgdG9OdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XHJcbiAgICAgIHJldHVybiBudW0gYXMgbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpQcmVjaXNpb24pKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIoTnVtYmVyKG51bSkudG9GaXhlZCh0aGlzLm56UHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcclxuICAgIGxldCByYXRpbyA9IDE7XHJcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xyXG4gICAgICByYXRpbyA9IDAuMTtcclxuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICByYXRpbyA9IDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJhdGlvO1xyXG4gIH1cclxuXHJcbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwKCdkb3duJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgdXAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcclxuICAgIH1cclxuICAgIGxldCBwcmVjaXNpb24gPSAwO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlY2lzaW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gc3RlcD17MS4wfSB2YWx1ZT17MS41MX1cclxuICAvLyBwcmVzcyArXHJcbiAgLy8gdGhlbiB2YWx1ZSBzaG91bGQgYmUgMi41MSwgcmF0aGVyIHRoYW4gMi41XHJcbiAgLy8gaWYgdGhpcy5wcm9wcy5wcmVjaXNpb24gaXMgdW5kZWZpbmVkXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9pbnB1dC1udW1iZXIvaXNzdWVzLzM5XHJcbiAgZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uelByZWNpc2lvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhdGlvUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24ocmF0aW8pO1xyXG4gICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZVByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSBhcyBudW1iZXIpO1xyXG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbjtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLm1heChjdXJyZW50VmFsdWVQcmVjaXNpb24sIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbik7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb25GYWN0b3IoY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlLCByYXRpbyk7XHJcbiAgICByZXR1cm4gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XHJcbiAgfVxyXG5cclxuICB1cFN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsICsgcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyB0aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZG93blN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsIC0gcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHN0ZXAodHlwZTogc3RyaW5nLCBlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlciA9IDEpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSkgfHwgMDtcclxuICAgIGxldCB2YWw7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3VwJykge1xyXG4gICAgICB2YWwgPSB0aGlzLnVwU3RlcCh2YWx1ZSwgcmF0aW8pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZG93bicpIHtcclxuICAgICAgdmFsID0gdGhpcy5kb3duU3RlcCh2YWx1ZSwgcmF0aW8pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3V0T2ZSYW5nZSA9IHZhbCA+IHRoaXMubnpNYXggfHwgdmFsIDwgdGhpcy5uek1pbjtcclxuICAgIGlmICh2YWwgPiB0aGlzLm56TWF4KSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XHJcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcclxuICAgICAgdmFsID0gdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIGlmIChvdXRPZlJhbmdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYXV0b1N0ZXBUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzW3R5cGVdKGUsIHJhdGlvLCB0cnVlKTtcclxuICAgIH0sIDYwMCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b1N0ZXBUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChlbWl0ICYmIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzTm90TmlsKHRoaXMubnpGb3JtYXR0ZXIodGhpcy52YWx1ZSkpID8gdGhpcy5uekZvcm1hdHRlcih0aGlzLnZhbHVlKSA6ICcnO1xyXG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZGlzcGxheVZhbHVlO1xyXG4gICAgdGhpcy5kaXNhYmxlZFVwID0gdGhpcy5kaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICBpZiAodmFsID49IHRoaXMubnpNYXgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPD0gdGhpcy5uek1pbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWREb3duID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJyB8fCBlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy51cChlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XHJcbiAgICAgIHRoaXMuZG93bihlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWRhdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlVcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIHRoaXMubnpCbHVyLmVtaXQoKTtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpGb2N1cy5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==