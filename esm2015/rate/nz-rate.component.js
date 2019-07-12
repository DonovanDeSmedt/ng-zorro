/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
export class NzRateComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._allowClear = true;
        this._allowHalf = false;
        this._disabled = false;
        this._count = 5;
        this._value = 0;
        this._autoFocus = false;
        this.nzOnBlur = new EventEmitter();
        this.nzOnFocus = new EventEmitter();
        this.nzOnKeyDown = new EventEmitter();
        this.nzOnHoverChange = new EventEmitter();
        this.prefixCls = 'ant-rate';
        this.isInit = false;
        this.hasHalf = false;
        this.innerPrefixCls = `${this.prefixCls}-star`;
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = () => null;
        this.onTouched = () => null;
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
    set nzCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowHalf(value) {
        this._allowHalf = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowHalf() {
        return this._allowHalf;
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
     * @return {?}
     */
    get nzValue() {
        return this._value;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set nzValue(input) {
        /** @type {?} */
        let value = input;
        if (this._value === value) {
            return;
        }
        this._value = value;
        if (this.floatReg.test(value.toString())) {
            value += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.nzDisabled
        };
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    clickRate(e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.nzAllowHalf;
        /** @type {?} */
        let actualValue = index + 1;
        this.hoverValue = actualValue;
        if (this.hasHalf) {
            actualValue -= 0.5;
        }
        if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
                this.nzValue = 0;
                this.onChange(this.nzValue);
            }
        }
        else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
        }
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    hoverRate(e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const isHalf = !isFull && this.nzAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.nzOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    leaveRate(e) {
        e.stopPropagation();
        /** @type {?} */
        let oldVal = this.nzValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onBlur(e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        this.ulElement.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.ulElement.nativeElement.blur();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const code = e.code;
        if ((code === 'ArrowRight' || e.keyCode === RIGHT_ARROW) && (this.nzValue < this.nzCount)) {
            if (this.nzAllowHalf) {
                this.nzValue += 0.5;
            }
            else {
                this.nzValue += 1;
            }
            this.onChange(this.nzValue);
        }
        else if ((code === 'ArrowLeft' || e.keyCode === LEFT_ARROW) && (this.nzValue > 0)) {
            if (this.nzAllowHalf) {
                this.nzValue -= 0.5;
            }
            else {
                this.nzValue -= 1;
            }
            this.onChange(this.nzValue);
        }
        this.nzOnKeyDown.emit(e);
        e.preventDefault();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setClasses(i) {
        return {
            [this.innerPrefixCls]: true,
            [`${this.innerPrefixCls}-full`]: (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-active`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-zero`]: (i + 1 > this.hoverValue),
            [`${this.innerPrefixCls}-focused`]: (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused
        };
    }
    /**
     * @return {?}
     */
    updateStarArray() {
        /** @type {?} */
        let index = 0;
        this.starArray = [];
        while (index < this.nzCount) {
            this.starArray.push(index++);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.nzValue = value || 0;
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
        this.setClassMap();
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
}
NzRateComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-rate',
                preserveWhitespaces: false,
                template: "<ng-template #defaultCharacter>\r\n  <i nz-icon [type]=\"'star'\" [theme]=\"'fill'\"></i>\r\n</ng-template>\r\n<ul\r\n  #ulElement\r\n  [ngClass]=\"classMap\"\r\n  (mouseleave)=\"leaveRate($event)\"\r\n  (focus)=\"onFocus($event)\"\r\n  (blur)=\"onBlur($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  [tabindex]=\"nzDisabled?-1:1\">\r\n  <li *ngFor=\"let star of starArray\"\r\n    [ngClass]=\"setClasses(star)\"\r\n    (mouseover)=\"hoverRate($event, star, true)\"\r\n    (click)=\"clickRate($event, star, true)\">\r\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\r\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\r\n    </div>\r\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\r\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\r\n    </div>\r\n  </li>\r\n</ul>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzRateComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzRateComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NzRateComponent.propDecorators = {
    nzCharacter: [{ type: Input }],
    nzOnBlur: [{ type: Output }],
    nzOnFocus: [{ type: Output }],
    nzOnKeyDown: [{ type: Output }],
    nzOnHoverChange: [{ type: Output }],
    ulElement: [{ type: ViewChild, args: ['ulElement',] }],
    nzAutoFocus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzAllowHalf: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzDisabled: [{ type: Input }]
};
function NzRateComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRateComponent.prototype._allowClear;
    /** @type {?} */
    NzRateComponent.prototype._allowHalf;
    /** @type {?} */
    NzRateComponent.prototype._disabled;
    /** @type {?} */
    NzRateComponent.prototype._count;
    /** @type {?} */
    NzRateComponent.prototype._value;
    /** @type {?} */
    NzRateComponent.prototype._autoFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzCharacter;
    /** @type {?} */
    NzRateComponent.prototype.nzOnBlur;
    /** @type {?} */
    NzRateComponent.prototype.nzOnFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzOnKeyDown;
    /** @type {?} */
    NzRateComponent.prototype.nzOnHoverChange;
    /** @type {?} */
    NzRateComponent.prototype.ulElement;
    /** @type {?} */
    NzRateComponent.prototype.prefixCls;
    /** @type {?} */
    NzRateComponent.prototype.isInit;
    /** @type {?} */
    NzRateComponent.prototype.hasHalf;
    /** @type {?} */
    NzRateComponent.prototype.innerPrefixCls;
    /** @type {?} */
    NzRateComponent.prototype.classMap;
    /** @type {?} */
    NzRateComponent.prototype.starArray;
    /** @type {?} */
    NzRateComponent.prototype.hoverValue;
    /** @type {?} */
    NzRateComponent.prototype.isFocused;
    /** @type {?} */
    NzRateComponent.prototype.floatReg;
    /** @type {?} */
    NzRateComponent.prototype.onChange;
    /** @type {?} */
    NzRateComponent.prototype.onTouched;
    /** @type {?} */
    NzRateComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicmF0ZS9uei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWNqRCxNQUFNLE9BQU8sZUFBZTs7OztJQTJPMUIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkExT2pCLElBQUk7MEJBQ0wsS0FBSzt5QkFDTixLQUFLO3NCQUNSLENBQUM7c0JBQ0QsQ0FBQzswQkFDRyxLQUFLO1FBRTFCLGdCQUE4QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdELGlCQUErQixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlELG1CQUFpQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNuRSx1QkFBcUMsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRSxpQkFBWSxVQUFVLENBQUM7UUFDdkIsY0FBUyxLQUFLLENBQUM7UUFDZixlQUFVLEtBQUssQ0FBQztRQUNoQixzQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUM7UUFFMUMsaUJBQXNCLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxDQUFDLENBQUM7UUFDZixpQkFBWSxLQUFLLENBQUM7UUFDbEIsZ0JBQW1CLGVBQWUsQ0FBQztRQUVuQyxnQkFBb0MsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQy9DLGlCQUF3QixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FvTmxDOzs7OztJQWxORCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFhOztRQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQ3hDLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBZ0IsSUFBSTtZQUN0QyxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDbEQsQ0FBQztLQUNIOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDMUU7U0FDRjtLQUNGOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQWEsRUFBRSxLQUFhLEVBQUUsTUFBZTtRQUNyRCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFFM0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUU5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsV0FBVyxJQUFJLEdBQUcsQ0FBQztTQUNwQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7S0FDRjs7Ozs7OztJQUVELFNBQVMsQ0FBQyxDQUFhLEVBQUUsS0FBYSxFQUFFLE1BQWU7UUFDckQsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7O1FBQ0QsTUFBTSxNQUFNLEdBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1RCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0tBQ3ZCOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFhO1FBQ3JCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0tBQzFCOzs7OztJQUVELE9BQU8sQ0FBQyxDQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCOzs7OztJQUVELE1BQU0sQ0FBQyxDQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JDOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFnQjs7UUFDeEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekYsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLE9BQU87WUFDTCxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsRUFBZSxJQUFJO1lBQzFDLENBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxPQUFPLENBQUUsRUFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDakgsQ0FBRSxHQUFHLElBQUksQ0FBQyxjQUFjLE9BQU8sQ0FBRSxFQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25GLENBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxTQUFTLENBQUUsRUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRixDQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsT0FBTyxDQUFFLEVBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDL0QsQ0FBRSxHQUFHLElBQUksQ0FBQyxjQUFjLFVBQVUsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVM7U0FDdEcsQ0FBQztLQUNIOzs7O0lBRUQsZUFBZTs7UUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDOUI7S0FDRjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXVCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNwQjs7O1lBalFGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsU0FBUztnQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsb2dDQUErQztnQkFDL0MsU0FBUyxFQUFZO29CQUNuQjt3QkFDRSxPQUFPLEVBQU0saUJBQWlCO3dCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2FBQ0Y7Ozs7WUFuQkMsU0FBUzs7OzBCQTJCUixLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNOzhCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVc7MEJBY3JCLEtBQUs7c0JBVUwsS0FBSzswQkFhTCxLQUFLOzJCQVNMLEtBQUs7eUJBMEJMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXJhdGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhdGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgX2FsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2FsbG93SGFsZiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY291bnQgPSA1O1xyXG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcclxuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25LZXlEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uSG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnKSBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcmVmaXhDbHMgPSAnYW50LXJhdGUnO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIGhhc0hhbGYgPSBmYWxzZTtcclxuICBpbm5lclByZWZpeENscyA9IGAke3RoaXMucHJlZml4Q2xzfS1zdGFyYDtcclxuICBjbGFzc01hcDtcclxuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgaG92ZXJWYWx1ZSA9IDA7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgZmxvYXRSZWc6IFJlZ0V4cCA9IC9eXFxkKyhcXC5cXGQrKT8kLztcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fY291bnQgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Q291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jb3VudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QWxsb3dIYWxmKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbGxvd0hhbGYgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dIYWxmKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93SGFsZjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QWxsb3dDbGVhcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xlYXI7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56VmFsdWUoaW5wdXQ6IG51bWJlcikge1xyXG4gICAgbGV0IHZhbHVlID0gaW5wdXQ7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5mbG9hdFJlZy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIHZhbHVlICs9IDAuNTtcclxuICAgICAgdGhpcy5oYXNIYWxmID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5uekRpc2FibGVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tSYXRlKGU6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGlzRnVsbDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYXNIYWxmID0gIWlzRnVsbCAmJiB0aGlzLm56QWxsb3dIYWxmO1xyXG5cclxuICAgIGxldCBhY3R1YWxWYWx1ZSA9IGluZGV4ICsgMTtcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGFjdHVhbFZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0hhbGYpIHtcclxuICAgICAgYWN0dWFsVmFsdWUgLT0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QWxsb3dDbGVhcikge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VmFsdWUgPSBhY3R1YWxWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaG92ZXJSYXRlKGU6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGlzRnVsbDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNIYWxmOiBib29sZWFuID0gIWlzRnVsbCAmJiB0aGlzLm56QWxsb3dIYWxmO1xyXG4gICAgaWYgKHRoaXMuaG92ZXJWYWx1ZSA9PT0gaW5kZXggKyAxICYmIGlzSGFsZiA9PT0gdGhpcy5oYXNIYWxmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XHJcbiAgICB0aGlzLm56T25Ib3ZlckNoYW5nZS5lbWl0KHRoaXMuaG92ZXJWYWx1ZSk7XHJcbiAgICB0aGlzLmhhc0hhbGYgPSBpc0hhbGY7XHJcbiAgfVxyXG5cclxuICBsZWF2ZVJhdGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBvbGRWYWwgPSB0aGlzLm56VmFsdWU7XHJcbiAgICBpZiAodGhpcy5mbG9hdFJlZy50ZXN0KG9sZFZhbC50b1N0cmluZygpKSkge1xyXG4gICAgICBvbGRWYWwgKz0gMC41O1xyXG4gICAgICB0aGlzLmhhc0hhbGYgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gb2xkVmFsO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLm56T25Gb2N1cy5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2RlID0gZS5jb2RlO1xyXG4gICAgaWYgKChjb2RlID09PSAnQXJyb3dSaWdodCcgfHwgZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykgJiYgKHRoaXMubnpWYWx1ZSA8IHRoaXMubnpDb3VudCkpIHtcclxuICAgICAgaWYgKHRoaXMubnpBbGxvd0hhbGYpIHtcclxuICAgICAgICB0aGlzLm56VmFsdWUgKz0gMC41O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09ICdBcnJvd0xlZnQnIHx8IGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykgJiYgKHRoaXMubnpWYWx1ZSA+IDApKSB7XHJcbiAgICAgIGlmICh0aGlzLm56QWxsb3dIYWxmKSB7XHJcbiAgICAgICAgdGhpcy5uelZhbHVlIC09IDAuNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56VmFsdWUgLT0gMTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm56T25LZXlEb3duLmVtaXQoZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc2VzKGk6IG51bWJlcik6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbIHRoaXMuaW5uZXJQcmVmaXhDbHMgXSAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30tZnVsbGAgXSAgIDogKGkgKyAxIDwgdGhpcy5ob3ZlclZhbHVlKSB8fCAoIXRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxyXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWhhbGZgIF0gICA6ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcclxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1hY3RpdmVgIF0gOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXHJcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30temVyb2AgXSAgIDogKGkgKyAxID4gdGhpcy5ob3ZlclZhbHVlKSxcclxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mb2N1c2VkYCBdOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSkgJiYgdGhpcy5pc0ZvY3VzZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGFyQXJyYXkoKTogdm9pZCB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgdGhpcy5zdGFyQXJyYXkgPSBbXTtcclxuICAgIHdoaWxlIChpbmRleCA8IHRoaXMubnpDb3VudCkge1xyXG4gICAgICB0aGlzLnN0YXJBcnJheS5wdXNoKGluZGV4KyspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWUgfHwgMDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==