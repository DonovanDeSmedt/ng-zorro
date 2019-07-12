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
var NzInputNumberComponent = /** @class */ (function () {
    function NzInputNumberComponent(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = function (value) { return value; };
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = function (value) { return value; };
    }
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.actualValue = this.nzParser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = this.actualValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
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
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.isNotCompleteNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (isNaN(/** @type {?} */ (num)) ||
            num === '' ||
            num === null ||
            (num && num.toString().indexOf('.') === num.toString().length - 1));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat(/** @type {?} */ (value));
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
    };
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return /** @type {?} */ (num);
        }
        if (isNotNil(this.nzPrecision)) {
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValidateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        this.setValidateValue();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.isFocused = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getMaxPrecision = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision(/** @type {?} */ (currentValue));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.step = /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        var val;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        var outOfRange = val > this.nzMax || val < this.nzMin;
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
        this.autoStepTimer = setTimeout(function () {
            _this[type](e, ratio, true);
        }, 600);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && "" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        var displayValue = isNotNil(this.nzFormatter(this.value)) ? this.nzFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyUp = /**
     * @return {?}
     */
    function () {
        this.stop();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzInputNumberComponent.prototype.registerOnChange = /**
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
    NzInputNumberComponent.prototype.registerOnTouched = /**
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
    NzInputNumberComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                _this.nzBlur.emit();
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
            else {
                _this.nzFocus.emit();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzAutoFocus"]) {
            this.updateAutoFocus();
        }
        if (changes["nzFormatter"]) {
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzInputNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-number',
                    template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n    (mousedown)=\"up($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon type=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n    (mousedown)=\"down($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon type=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-input-number-input\"\r\n    [disabled]=\"nzDisabled\"\r\n    [attr.min]=\"nzMin\"\r\n    [attr.max]=\"nzMax\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [attr.step]=\"nzStep\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp()\"\r\n    (blur)=\"onBlur()\"\r\n    (focus)=\"onFocus()\"\r\n    [ngModel]=\"displayValue\"\r\n    (ngModelChange)=\"onModelChange($event)\">\r\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzInputNumberComponent; }),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-input-number]': 'true',
                        '[class.ant-input-number-focused]': 'isFocused',
                        '[class.ant-input-number-lg]': "nzSize === 'large'",
                        '[class.ant-input-number-sm]': "nzSize === 'small'",
                        '[class.ant-input-number-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
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
    return NzInputNumberComponent;
}());
export { NzInputNumberComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJpbnB1dC1udW1iZXIvbnotaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFvVGxELGdDQUNVLFlBQ0EsVUFDQSxLQUNBO1FBSEEsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFFBQUcsR0FBSCxHQUFHO1FBQ0gsaUJBQVksR0FBWixZQUFZO1FBN1J0QixpQkFBWSxLQUFLLENBQUM7UUFDbEIsa0JBQWEsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEtBQUssQ0FBQztRQUNyQixnQkFBb0MsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDL0MsaUJBQXdCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ25DLGNBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsZUFBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxjQUFpQyxTQUFT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SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNuRDs7Z0JBdFZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0eUNBQStDO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLENBQUM7NEJBQ3JELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLE1BQU07d0JBQ2xDLGtDQUFrQyxFQUFFLFdBQVc7d0JBQy9DLDZCQUE2QixFQUFFLG9CQUFvQjt3QkFDbkQsNkJBQTZCLEVBQUUsb0JBQW9CO3dCQUNuRCxtQ0FBbUMsRUFBRSxZQUFZO3FCQUNsRDtpQkFDRjs7OztnQkFyQ0MsVUFBVTtnQkFPVixTQUFTO2dCQVRULGlCQUFpQjtnQkFOVixZQUFZOzs7eUJBd0RsQixNQUFNOzBCQUNOLE1BQU07K0JBQ04sU0FBUyxTQUFDLGNBQWM7eUJBQ3hCLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7OztRQUZJLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7O2lDQW5FMUI7O1NBOENhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1pbnB1dC1udW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1pbnB1dC1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpJbnB1dE51bWJlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlcl0nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZm9jdXNlZF0nOiAnaXNGb2N1c2VkJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0TnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYXV0b1N0ZXBUaW1lcjtcclxuICBwcml2YXRlIGFjdHVhbFZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkVXAgPSBmYWxzZTtcclxuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlciA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIG56UGFyc2VyID0gdmFsdWUgPT4gdmFsdWU7XHJcbiAgQElucHV0KCkgbnpQcmVjaXNpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB0aGlzLm56UGFyc2VyKFxyXG4gICAgICB2YWx1ZVxyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAucmVwbGFjZSgv44CCL2csICcuJylcclxuICAgICAgICAucmVwbGFjZSgvW15cXHdcXC4tXSsvZywgJycpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCB2YWwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWwgPT09ICcnKSB7XHJcbiAgICAgIHZhbCA9ICcnO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc05vdENvbXBsZXRlTnVtYmVyKHZhbCkpIHtcclxuICAgICAgdmFsID0gdGhpcy5nZXRWYWxpZFZhbHVlKHZhbCkgYXMgc3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHZhbCk7XHJcbiAgfVxyXG5cclxuICAvLyAnMS4nICcxeCcgJ3h4JyAnJyA9PiBhcmUgbm90IGNvbXBsZXRlIG51bWJlcnNcclxuICBpc05vdENvbXBsZXRlTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc05hTihudW0gYXMgbnVtYmVyKSB8fFxyXG4gICAgICBudW0gPT09ICcnIHx8XHJcbiAgICAgIG51bSA9PT0gbnVsbCB8fFxyXG4gICAgICAobnVtICYmIG51bS50b1N0cmluZygpLmluZGV4T2YoJy4nKSA9PT0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcclxuICAgIGlmIChpc05hTih2YWwpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xyXG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlcihudW0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0ZVZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmF0aW8oZTogS2V5Ym9hcmRFdmVudCk6IG51bWJlciB7XHJcbiAgICBsZXQgcmF0aW8gPSAxO1xyXG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcclxuICAgICAgcmF0aW8gPSAwLjE7XHJcbiAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgcmF0aW8gPSAxMDtcclxuICAgIH1cclxuICAgIHJldHVybiByYXRpbztcclxuICB9XHJcblxyXG4gIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcclxuICB9XHJcblxyXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0ZXAoJ3VwJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWVTdHJpbmcuc2xpY2UodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSArIDIpLCAxMCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcclxuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgPj0gMCkge1xyXG4gICAgICBwcmVjaXNpb24gPSB2YWx1ZVN0cmluZy5sZW5ndGggLSB2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWNpc2lvbjtcclxuICB9XHJcblxyXG4gIC8vIHN0ZXA9ezEuMH0gdmFsdWU9ezEuNTF9XHJcbiAgLy8gcHJlc3MgK1xyXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxyXG4gIC8vIGlmIHRoaXMucHJvcHMucHJlY2lzaW9uIGlzIHVuZGVmaW5lZFxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvaW5wdXQtbnVtYmVyL2lzc3Vlcy8zOVxyXG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5uelByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXRpb1ByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHJhdGlvKTtcclxuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoY3VycmVudFZhbHVlUHJlY2lzaW9uLCByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uRmFjdG9yKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xyXG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5uek1pbiA9PT0gLUluZmluaXR5ID8gLXRoaXMubnpTdGVwIDogdGhpcy5uek1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBzdGVwKHR5cGU6IHN0cmluZywgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XHJcbiAgICBsZXQgdmFsO1xyXG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcclxuICAgICAgdmFsID0gdGhpcy51cFN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG91dE9mUmFuZ2UgPSB2YWwgPiB0aGlzLm56TWF4IHx8IHZhbCA8IHRoaXMubnpNaW47XHJcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xyXG4gICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBpZiAob3V0T2ZSYW5nZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9TdGVwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpc1t0eXBlXShlLCByYXRpbywgdHJ1ZSk7XHJcbiAgICB9LCA2MDApO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9TdGVwVGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b1N0ZXBUaW1lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZW1pdCAmJiBgJHt0aGlzLnZhbHVlfWAgIT09IGAke3ZhbHVlfWApIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XHJcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc05vdE5pbCh0aGlzLm56Rm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMubnpGb3JtYXR0ZXIodGhpcy52YWx1ZSkgOiAnJztcclxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuZGlzYWJsZWRVcCA9IHRoaXMuZGlzYWJsZWREb3duID0gZmFsc2U7XHJcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWF4KSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsIDw9IHRoaXMubnpNaW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcgfHwgZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICBjb25zdCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oZSk7XHJcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJyB8fCBlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xyXG4gICAgICB0aGlzLmRvd24oZSwgcmF0aW8pO1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICB0aGlzLm56Qmx1ci5lbWl0KCk7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56Rm9jdXMuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56QXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekZvcm1hdHRlcikge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=