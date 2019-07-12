/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { NzUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @return {?}
 */
function makeRange(length, step) {
    if (step === void 0) { step = 1; }
    return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) { return i * step; });
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(element, updateCls) {
        this.element = element;
        this.updateCls = updateCls;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._defaultOpenValue = new Date();
        this._opened = false;
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.timeClear = new EventEmitter();
    }
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            if (this.opened) {
                this.initPosition();
                this.selectInputRange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDefaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._defaultOpenValue = value;
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
                this.hourEnabled = charSet.has('H') || charSet.has('h');
                this.minuteEnabled = charSet.has('m');
                this.secondEnabled = charSet.has('s');
                if (this.hourEnabled) {
                    this.enabledColumns++;
                }
                if (this.minuteEnabled) {
                    this.enabledColumns++;
                }
                if (this.secondEnabled) {
                    this.enabledColumns++;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hourRange = makeRange(24, this.nzHourStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && (_this.nzDisabledHours().indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && (_this.nzDisabledMinutes(_this.time.hours).indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && (_this.nzDisabledSeconds(_this.time.hours, _this.time.minutes).indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = /** @type {?} */ ((instance.children[0].children[transIndex] || instance.children[0].children[0]));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
            return this.calcIndex(disabledMinutes, this.minuteRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'second') {
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
            return this.calcIndex(disabledSeconds, this.secondRange.map(function (item) { return item.index; }).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = difference / duration * 10;
        reqAnimFrame(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        });
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return index - array.reduce(function (pre, value) {
                return pre + (value < index ? 1 : 0);
            }, 0);
        }
        else {
            return index;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.time.clear();
        this.timeClear.emit();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.hours) || (!isNotNil(this.time.hours) && (hour.index === this.time.defaultHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes) || (!isNotNil(this.time.minutes) && (minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds) || (!isNotNil(this.time.seconds) && (second.index === this.time.defaultSeconds));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.hours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.hours, 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.minutes, 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.seconds, 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.changed();
            _this.touched();
        });
        this.buildTimes();
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.value = value;
        this.buildTimes();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
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
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    NzTimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-time-picker-panel',
                    template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n      <a\r\n        *ngIf=\"nzAllowEmpty\"\r\n        class=\"{{ prefixCls }}-clear-btn\"\r\n        [attr.title]=\"nzClearText\"\r\n        (click)=\"clear()\">\r\n        <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-time-picker-panel-clear-btn-icon\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-combobox\">\r\n      <div\r\n        *ngIf=\"hourEnabled\"\r\n        #hourListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let hour of hourRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\r\n              (click)=\"selectHour(hour)\"\r\n              class=\"\r\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ hour.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"minuteEnabled\"\r\n        #minuteListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let minute of minuteRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\r\n              (click)=\"selectMinute(minute)\"\r\n              class=\"\r\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ minute.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"secondEnabled\"\r\n        #secondListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let second of secondRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\r\n              (click)=\"selectSecond(second)\"\r\n              class=\"\r\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ second.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>",
                    providers: [
                        UpdateCls,
                        { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: UpdateCls }
    ]; };
    NzTimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective,] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement',] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement',] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement',] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        timeClear: [{ type: Output }],
        nzAllowEmpty: [{ type: Input }],
        opened: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
function NzTimePickerPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.onChange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.onTouch;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._format;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._defaultOpenValue;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._opened;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.timeClear;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.element;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRTNDLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFnQjtJQUFoQixxQkFBQSxFQUFBLFFBQWdCO0lBQ2pELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxJQUFJLEVBQVIsQ0FBUSxDQUFDLENBQUM7Q0FDNUU7O0lBb1dDLG9DQUFvQixPQUFt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LFNBQUMsaUJBQWlCO29DQUMzQixTQUFTLFNBQUMsbUJBQW1CO29DQUM3QixTQUFTLFNBQUMsbUJBQW1CO2lDQUM3QixLQUFLOzBCQUNMLEtBQUs7d0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsTUFBTTsrQkFFTixLQUFLO3lCQVdMLEtBQUs7cUNBYUwsS0FBSztrQ0FZTCxLQUFLO29DQVlMLEtBQUs7b0NBWUwsS0FBSzt5QkFZTCxLQUFLOzZCQXlCTCxLQUFLOytCQVlMLEtBQUs7K0JBWUwsS0FBSzs7cUNBN0xSOztTQWtDYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9jb3JlL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUaW1lSG9sZGVyIH0gZnJvbSAnLi90aW1lLWhvbGRlcic7XHJcblxyXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEpOiBudW1iZXJbXSB7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc3RlcCkpLmZpbGwoMCkubWFwKChfLCBpKSA9PiBpICogc3RlcCk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnbnotdGltZS1waWNrZXItcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzICA6IFtcclxuICAgIFVwZGF0ZUNscyxcclxuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCwgbXVsdGk6IHRydWUgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9uekhvdXJTdGVwID0gMTtcclxuICBwcml2YXRlIF9uek1pbnV0ZVN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgX256U2Vjb25kU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcclxuICBwcml2YXRlIG9uVG91Y2g6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gJ0hIOm1tOnNzJztcclxuICBwcml2YXRlIF9kaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC10aW1lLXBpY2tlci1wYW5lbCc7XHJcbiAgdGltZSA9IG5ldyBUaW1lSG9sZGVyKCk7XHJcbiAgaG91ckVuYWJsZWQgPSB0cnVlO1xyXG4gIG1pbnV0ZUVuYWJsZWQgPSB0cnVlO1xyXG4gIHNlY29uZEVuYWJsZWQgPSB0cnVlO1xyXG4gIGVuYWJsZWRDb2x1bW5zID0gMztcclxuICBob3VyUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICBtaW51dGVSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIHNlY29uZFJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgQFZpZXdDaGlsZChOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSBuelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcpIGhvdXJMaXN0RWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcpIG1pbnV0ZUxpc3RFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3NlY29uZExpc3RFbGVtZW50Jykgc2Vjb25kTGlzdEVsZW1lbnQ7XHJcbiAgQElucHV0KCkgbnpJbkRhdGVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSWYgaW5zaWRlIGEgZGF0ZS1waWNrZXIsIG1vcmUgZGlmZiB3b3JrcyBuZWVkIHRvIGJlIGRvbmVcclxuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNsZWFyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGltZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICB0aGlzLmluaXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy50aW1lLnNldERlZmF1bHRPcGVuVmFsdWUodGhpcy5uekRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiAoKSA9PiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xyXG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XHJcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XHJcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uekhvdXJTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56SG91clN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uekhvdXJTdGVwO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpNaW51dGVTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNaW51dGVTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpNaW51dGVTdGVwO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpTZWNvbmRTdGVwID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTZWNvbmRTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpTZWNvbmRTdGVwO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5wdXRSYW5nZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLnNldFJhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcclxuICAgIHRoaXMuaG91clJhbmdlID0gbWFrZVJhbmdlKDI0LCB0aGlzLm56SG91clN0ZXApLm1hcChyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5kZXggICA6IHIsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkSG91cnMgJiYgKHRoaXMubnpEaXNhYmxlZEhvdXJzKCkuaW5kZXhPZihyKSAhPT0gLTEpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkTWludXRlcygpOiB2b2lkIHtcclxuICAgIHRoaXMubWludXRlUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpNaW51dGVTdGVwKS5tYXAociA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGluZGV4ICAgOiByLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgKHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzKS5pbmRleE9mKHIpICE9PSAtMSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWNvbmRSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uelNlY29uZFN0ZXApLm1hcChyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5kZXggICA6IHIsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiAodGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMsIHRoaXMudGltZS5taW51dGVzKS5pbmRleE9mKHIpICE9PSAtMSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldEhvdXJzKGhvdXIuaW5kZXgsIGhvdXIuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGhvdXIuaW5kZXgsIDEyMCwgJ2hvdXInKTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBtaW51dGUuaW5kZXgsIDEyMCwgJ21pbnV0ZScpO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBzZWNvbmQuaW5kZXgsIDEyMCwgJ3NlY29uZCcpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRyYW5zSW5kZXggPSB0aGlzLnRyYW5zbGF0ZUluZGV4KGluZGV4LCB1bml0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSAoaW5zdGFuY2UuY2hpbGRyZW5bIDAgXS5jaGlsZHJlblsgdHJhbnNJbmRleCBdIHx8IGluc3RhbmNlLmNoaWxkcmVuWyAwIF0uY2hpbGRyZW5bIDAgXSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNjcm9sbFRvKGluc3RhbmNlLCBjdXJyZW50T3B0aW9uLm9mZnNldFRvcCwgZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNsYXRlSW5kZXgoaW5kZXg6IG51bWJlciwgdW5pdDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRNaW51dGVzLCB0aGlzLm1pbnV0ZVJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycywgdGhpcy50aW1lLm1pbnV0ZXMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRTZWNvbmRzLCB0aGlzLnNlY29uZFJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcclxuXHJcbiAgICByZXFBbmltRnJhbWUoKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcclxuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FsY0luZGV4KGFycmF5OiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHRoaXMubnpIaWRlRGlzYWJsZWRPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBpbmRleCAtIGFycmF5LnJlZHVjZSgocHJlLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5jbGVhcigpO1xyXG4gICAgdGhpcy50aW1lQ2xlYXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdG91Y2hlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcclxuICAgICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNvbHVtbi0ke3RoaXMuZW5hYmxlZENvbHVtbnN9YF0gICAgIDogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZW5hYmxlZENvbHVtbnMgPCAzLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0YF0gICAgICAgICAgICAgIDogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLmhvdXJzKSB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5ob3VycykgJiYgKGhvdXIuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0SG91cnMpKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAobWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUubWludXRlcykgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykgJiYgKG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkU2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMpIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLnNlY29uZHMpICYmIChzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcykpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5ob3VycykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuaG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdEhvdXJzLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkICYmIHRoaXMubWludXRlTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUubWludXRlcywgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMsIDAsICdzZWNvbmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscykge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekluRGF0ZVBpY2tlcikge1xyXG4gICAgICB0aGlzLnByZWZpeENscyA9ICdhbnQtY2FsZW5kYXItdGltZS1waWNrZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgICAgIHRoaXMudG91Y2hlZCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==