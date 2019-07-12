/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
var NzRateComponent = /** @class */ (function () {
    function NzRateComponent(renderer) {
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
        this.innerPrefixCls = this.prefixCls + "-star";
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzRateComponent.prototype, "nzAutoFocus", {
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
    Object.defineProperty(NzRateComponent.prototype, "nzCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._count === value) {
                return;
            }
            this._count = value;
            this.updateStarArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzAllowHalf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowHalf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowHalf = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzAllowClear", {
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
    Object.defineProperty(NzRateComponent.prototype, "nzValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            /** @type {?} */
            var value = input;
            if (this._value === value) {
                return;
            }
            this._value = value;
            if (this.floatReg.test(value.toString())) {
                value += 0.5;
                this.hasHalf = true;
            }
            this.hoverValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzDisabled", {
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
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRateComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    NzRateComponent.prototype.clickRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.nzAllowHalf;
        /** @type {?} */
        var actualValue = index + 1;
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
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    NzRateComponent.prototype.hoverRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var isHalf = !isFull && this.nzAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.nzOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.leaveRate = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        /** @type {?} */
        var oldVal = this.nzValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.blur();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var code = e.code;
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
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NzRateComponent.prototype.setClasses = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a;
        return _a = {},
            _a[this.innerPrefixCls] = true,
            _a[this.innerPrefixCls + "-full"] = (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-half"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-active"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-zero"] = (i + 1 > this.hoverValue),
            _a[this.innerPrefixCls + "-focused"] = (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused,
            _a;
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.updateStarArray = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = 0;
        this.starArray = [];
        while (index < this.nzCount) {
            this.starArray.push(index++);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRateComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzValue = value || 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnChange = /**
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
    NzRateComponent.prototype.registerOnTouched = /**
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
    NzRateComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateStarArray();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
    };
    NzRateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-rate',
                    preserveWhitespaces: false,
                    template: "<ng-template #defaultCharacter>\r\n  <i nz-icon [type]=\"'star'\" [theme]=\"'fill'\"></i>\r\n</ng-template>\r\n<ul\r\n  #ulElement\r\n  [ngClass]=\"classMap\"\r\n  (mouseleave)=\"leaveRate($event)\"\r\n  (focus)=\"onFocus($event)\"\r\n  (blur)=\"onBlur($event)\"\r\n  (keydown)=\"onKeyDown($event)\"\r\n  [tabindex]=\"nzDisabled?-1:1\">\r\n  <li *ngFor=\"let star of starArray\"\r\n    [ngClass]=\"setClasses(star)\"\r\n    (mouseover)=\"hoverRate($event, star, true)\"\r\n    (click)=\"clickRate($event, star, true)\">\r\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\r\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\r\n    </div>\r\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\r\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\r\n    </div>\r\n  </li>\r\n</ul>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRateComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzRateComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
    return NzRateComponent;
}());
export { NzRateComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicmF0ZS9uei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF5UC9DLHlCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXOzJCQTFPakIsSUFBSTswQkFDTCxLQUFLO3lCQUNOLEtBQUs7c0JBQ1IsQ0FBQztzQkFDRCxDQUFDOzBCQUNHLEtBQUs7UUFFMUIsZ0JBQThCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0QsaUJBQStCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUQsbUJBQWlDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ25FLHVCQUFxQyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhFLGlCQUFZLFVBQVUsQ0FBQztRQUN2QixjQUFTLEtBQUssQ0FBQztRQUNmLGVBQVUsS0FBSyxDQUFDO1FBQ2hCLHNCQUFvQixJQUFJLENBQUMsU0FBUyxVQUFPLENBQUM7UUFFMUMsaUJBQXNCLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxDQUFDLENBQUM7UUFDZixpQkFBWSxLQUFLLENBQUM7UUFDbEIsZ0JBQW1CLGVBQWUsQ0FBQztRQUVuQyxnQkFBb0MsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDL0MsaUJBQXdC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QUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7O0lBS0Qsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztnQkFqUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixvZ0NBQStDO29CQUMvQyxTQUFTLEVBQVk7d0JBQ25COzRCQUNFLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7NEJBQzlDLEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkFuQkMsU0FBUzs7OzhCQTJCUixLQUFLOzJCQUNMLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNO2tDQUNOLE1BQU07NEJBQ04sU0FBUyxTQUFDLFdBQVc7OEJBY3JCLEtBQUs7MEJBVUwsS0FBSzs4QkFhTCxLQUFLOytCQVNMLEtBQUs7NkJBMEJMLEtBQUs7OzBCQWxIUjs7U0E4QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcmF0ZScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcmF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmF0ZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfYWxsb3dIYWxmID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9jb3VudCA9IDU7XHJcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcpIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHByZWZpeENscyA9ICdhbnQtcmF0ZSc7XHJcbiAgaXNJbml0ID0gZmFsc2U7XHJcbiAgaGFzSGFsZiA9IGZhbHNlO1xyXG4gIGlubmVyUHJlZml4Q2xzID0gYCR7dGhpcy5wcmVmaXhDbHN9LXN0YXJgO1xyXG4gIGNsYXNzTWFwO1xyXG4gIHN0YXJBcnJheTogbnVtYmVyW10gPSBbXTtcclxuICBob3ZlclZhbHVlID0gMDtcclxuICBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuICBmbG9hdFJlZzogUmVnRXhwID0gL15cXGQrKFxcLlxcZCspPyQvO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9jb3VudCA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBbGxvd0hhbGYodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FsbG93SGFsZiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBbGxvd0hhbGYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dIYWxmO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekFsbG93Q2xlYXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGVhcjtcclxuICB9XHJcblxyXG4gIGdldCBuelZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpWYWx1ZShpbnB1dDogbnVtYmVyKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBpbnB1dDtcclxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmZsb2F0UmVnLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpIHtcclxuICAgICAgdmFsdWUgKz0gMC41O1xyXG4gICAgICB0aGlzLmhhc0hhbGYgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLm56RGlzYWJsZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja1JhdGUoZTogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlciwgaXNGdWxsOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhc0hhbGYgPSAhaXNGdWxsICYmIHRoaXMubnpBbGxvd0hhbGY7XHJcblxyXG4gICAgbGV0IGFjdHVhbFZhbHVlID0gaW5kZXggKyAxO1xyXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gYWN0dWFsVmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzSGFsZikge1xyXG4gICAgICBhY3R1YWxWYWx1ZSAtPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpWYWx1ZSA9PT0gYWN0dWFsVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMubnpBbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgdGhpcy5uelZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpWYWx1ZSA9IGFjdHVhbFZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBob3ZlclJhdGUoZTogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlciwgaXNGdWxsOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0hhbGY6IGJvb2xlYW4gPSAhaXNGdWxsICYmIHRoaXMubnpBbGxvd0hhbGY7XHJcbiAgICBpZiAodGhpcy5ob3ZlclZhbHVlID09PSBpbmRleCArIDEgJiYgaXNIYWxmID09PSB0aGlzLmhhc0hhbGYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcclxuICAgIHRoaXMubnpPbkhvdmVyQ2hhbmdlLmVtaXQodGhpcy5ob3ZlclZhbHVlKTtcclxuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcclxuICB9XHJcblxyXG4gIGxlYXZlUmF0ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IG9sZFZhbCA9IHRoaXMubnpWYWx1ZTtcclxuICAgIGlmICh0aGlzLmZsb2F0UmVnLnRlc3Qob2xkVmFsLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIG9sZFZhbCArPSAwLjU7XHJcbiAgICAgIHRoaXMuaGFzSGFsZiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBvbGRWYWw7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIHRoaXMubnpPbkZvY3VzLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubnpPbkJsdXIuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvZGUgPSBlLmNvZGU7XHJcbiAgICBpZiAoKGNvZGUgPT09ICdBcnJvd1JpZ2h0JyB8fCBlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSAmJiAodGhpcy5uelZhbHVlIDwgdGhpcy5uekNvdW50KSkge1xyXG4gICAgICBpZiAodGhpcy5uekFsbG93SGFsZikge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSArPSAwLjU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uelZhbHVlICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gJ0Fycm93TGVmdCcgfHwgZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSAmJiAodGhpcy5uelZhbHVlID4gMCkpIHtcclxuICAgICAgaWYgKHRoaXMubnpBbGxvd0hhbGYpIHtcclxuICAgICAgICB0aGlzLm56VmFsdWUgLT0gMC41O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpWYWx1ZSAtPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMubnpPbktleURvd24uZW1pdChlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNldENsYXNzZXMoaTogbnVtYmVyKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFsgdGhpcy5pbm5lclByZWZpeENscyBdICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mdWxsYCBdICAgOiAoaSArIDEgPCB0aGlzLmhvdmVyVmFsdWUpIHx8ICghdGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXHJcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30taGFsZmAgXSAgIDogKHRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxyXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWFjdGl2ZWAgXSA6ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcclxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS16ZXJvYCBdICAgOiAoaSArIDEgPiB0aGlzLmhvdmVyVmFsdWUpLFxyXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZvY3VzZWRgIF06ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSAmJiB0aGlzLmlzRm9jdXNlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB0aGlzLnN0YXJBcnJheSA9IFtdO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgdGhpcy5uekNvdW50KSB7XHJcbiAgICAgIHRoaXMuc3RhckFycmF5LnB1c2goaW5kZXgrKyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19