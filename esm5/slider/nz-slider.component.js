/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './nz-slider-marks.component';
import { NzSliderService } from './nz-slider.service';
var SliderHandle = /** @class */ (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());
export { SliderHandle };
function SliderHandle_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderHandle.prototype.offset;
    /** @type {?} */
    SliderHandle.prototype.value;
    /** @type {?} */
    SliderHandle.prototype.active;
}
/**
 * @record
 */
function MouseTouchObserverConfig() { }
function MouseTouchObserverConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.filter;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
}
var NzSliderComponent = /** @class */ (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function NzSliderComponent(utils) {
        this.utils = utils;
        // Debugging
        this.nzDebugId = null;
        // Static configurations (properties that can only specify once)
        this.nzStep = 1;
        this.nzMarks = null;
        this.nzMin = 0;
        this.nzMax = 100;
        this.nzDefaultValue = null;
        this.nzOnAfterChange = new EventEmitter();
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null; // CORE value state
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'ant-slider';
        this.activeValueIndex = null; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.onTouched = function () {
        } // onTouch function registered via registerOnTouch (ControlValueAccessor).
        ; // onTouch function registered via registerOnTouch (ControlValueAccessor).
        this.isDragging = false; // Current dragging state
    }
    Object.defineProperty(NzSliderComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._range;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._range = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    NzSliderComponent.prototype.setValue = /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else { // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    };
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    NzSliderComponent.prototype.getValue = /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.nzRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSliderComponent.prototype.getValueToOffset = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.nzRange ?
            (/** @type {?} */ (normalizedValue)).map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnTouched = /**
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
    NzSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // initial checking
        this.checkValidValue(this.nzDefaultValue); // check nzDefaultValue
        // default handles
        this.handles = this._generateHandles(this.nzRange ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.nzMarks === null ? null : this.toMarksArray(this.nzMarks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.nzDisabled);
        // the first time to init classes
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
            this.setClassMap();
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.toMarksArray(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null)); // Change to default value when nzRange changed
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a[this.prefixCls + "-vertical"] = this.nzVertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
    };
    // find the cloest value to be activated (only for range = true)
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValueIndex = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1 = void 0;
            /** @type {?} */
            var activeIndex_1 = void 0;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValue = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.updateTrackAndHandles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = this.nzRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        var trackParts = this.nzRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.nzRange ? offset[index] : offset;
            handle.value = _this.nzRange ? value[index] : value;
        });
        _a = tslib_1.__read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = tslib_1.__read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
    };
    /**
     * @param {?} marks
     * @return {?}
     */
    NzSliderComponent.prototype.toMarksArray = /**
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.nzMin || val > this.nzMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragMove = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.onDragEnd = /**
     * @return {?}
     */
    function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.nzOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.createDrag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(/** @type {?} */ (e)); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (function () { return true; }) : _a;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), map(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), distinctUntilChanged(), map(function (position) { return _this.findClosestValue(position); }), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.subscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.unsubscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    };
    /**
     * @param {?} movable
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragMoving = /**
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    /**
     * @param {?} position
     * @return {?}
     */
    NzSliderComponent.prototype.findClosestValue = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        var points = (this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat));
        // push closest step
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, tslib_1.__spread(gaps)))];
        // return the fixed
        return this.nzStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.nzStep)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.valueToOffset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utils.valueToOffset(this.nzMin, this.nzMax, value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderStartPosition = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderLength = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.nzVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    /**
     * @param {?=} remove
     * @return {?}
     */
    NzSliderComponent.prototype.cacheSliderProperty = /**
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.formatValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.nzDefaultValue === null ?
                (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.nzRange ?
                (/** @type {?} */ (value)).map(function (val) { return _this.utils.correctNumLimit(val, _this.nzMin, _this.nzMax); }) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.nzMin, this.nzMax);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.checkValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var range = this.nzRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error("The \"nzRange\" can't match the \"nzValue\"'s type, please check these properties: \"nzRange\", \"nzValue\", \"nzDefaultValue\".");
        }
        return true;
    };
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.isValueEqual = /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    /**
     * @param {...?} messages
     * @return {?}
     */
    NzSliderComponent.prototype.log = /**
     * @param {...?} messages
     * @return {?}
     */
    function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.nzDebugId !== null) {
            /** @type {?} */
            var args = ["[nz-slider][#" + this.nzDebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    NzSliderComponent.prototype._showHandleTooltip = /**
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype._hideAllHandleTooltip = /**
     * @return {?}
     */
    function () {
        this.handles.forEach(function (handle) { return handle.active = false; });
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    NzSliderComponent.prototype._generateHandles = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    NzSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider',
                    preserveWhitespaces: false,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSliderComponent; }),
                            multi: true
                        }],
                    template: "<div #slider [ngClass]=\"classMap\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <nz-slider-track\r\n    nzClassName=\"{{prefixCls}}-track\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"\r\n  ></nz-slider-track>\r\n  <nz-slider-step *ngIf=\"marksArray\"\r\n    nzPrefixCls=\"{{prefixCls}}\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n  ></nz-slider-step>\r\n  <nz-slider-handle\r\n    *ngFor=\"let handle of handles;\"\r\n    nzClassName=\"{{prefixCls}}-handle\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"nzTipFormatter\"\r\n  ></nz-slider-handle>\r\n  <nz-slider-marks *ngIf=\"marksArray\"\r\n    nzClassName=\"{{prefixCls}}-mark\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzMin]=\"nzMin\"\r\n    [nzMax]=\"nzMax\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n  ></nz-slider-marks>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderComponent.ctorParameters = function () { return [
        { type: NzSliderService }
    ]; };
    NzSliderComponent.propDecorators = {
        nzDebugId: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzMarks: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzOnAfterChange: [{ type: Output }],
        nzVertical: [{ type: Input }],
        nzRange: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzIncluded: [{ type: Input }],
        slider: [{ type: ViewChild, args: ['slider',] }]
    };
    return NzSliderComponent;
}());
export { NzSliderComponent };
function NzSliderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderComponent.prototype.nzDebugId;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype._disabled;
    /** @type {?} */
    NzSliderComponent.prototype._dots;
    /** @type {?} */
    NzSliderComponent.prototype._included;
    /** @type {?} */
    NzSliderComponent.prototype._range;
    /** @type {?} */
    NzSliderComponent.prototype._vertical;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.prefixCls;
    /** @type {?} */
    NzSliderComponent.prototype.classMap;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.onValueChange;
    /** @type {?} */
    NzSliderComponent.prototype.onTouched;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart$;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove$;
    /** @type {?} */
    NzSliderComponent.prototype.dragend$;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart_;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove_;
    /** @type {?} */
    NzSliderComponent.prototype.dragend_;
    /** @type {?} */
    NzSliderComponent.prototype.utils;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXRELElBQUE7Ozt1QkF6QkE7SUE2QkMsQ0FBQTtBQUpELHdCQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdMQyxnR0FBZ0c7SUFDaEcsb0JBQW9CO0lBQ3BCLGdHQUFnRztJQUVoRywyQkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7O1FBaEsxQyxpQkFBc0MsSUFBSSxDQUFDOztRQWEzQyxjQUFrQixDQUFDLENBQUM7UUFDcEIsZUFBMEIsSUFBSSxDQUFDO1FBQy9CLGFBQWlCLENBQUMsQ0FBQztRQUNuQixhQUFpQixHQUFHLENBQUM7UUFDckIsc0JBQXVDLElBQUksQ0FBQztRQUU1Qyx1QkFBcUMsSUFBSSxZQUFZLEVBQWUsQ0FB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cmlhYmxlLW5hbWUgKi9cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBNYXJrcywgTWFya3NBcnJheSB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyU2VydmljZSB9IGZyb20gJy4vbnotc2xpZGVyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYW5kbGUge1xyXG4gIG9mZnNldDogbnVtYmVyO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnIHtcclxuICBzdGFydDogc3RyaW5nO1xyXG4gIG1vdmU6IHN0cmluZztcclxuICBlbmQ6IHN0cmluZztcclxuICBwbHVja0tleTogc3RyaW5nW107XHJcblxyXG4gIGZpbHRlcj8oZTogRXZlbnQpOiBib29sZWFuO1xyXG5cclxuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGVuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIHtcclxuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcclxuICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgfSBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLyBEZWJ1Z2dpbmdcclxuICBASW5wdXQoKSBuekRlYnVnSWQ6IG51bWJlciB8IHN0cmluZyA9IG51bGw7IC8vIHNldCB0aGlzIGlkIHdpbGwgcHJpbnQgZGVidWcgaW5mb3JtYXRpb25zIHRvIGNvbnNvbGVcclxuXHJcbiAgLy8gRHluYW1pYyBwcm9wZXJ0eSBzZXR0aW5nc1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gU3RhdGljIGNvbmZpZ3VyYXRpb25zIChwcm9wZXJ0aWVzIHRoYXQgY2FuIG9ubHkgc3BlY2lmeSBvbmNlKVxyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpNYXJrczogTWFya3MgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWluID0gMDtcclxuICBASW5wdXQoKSBuek1heCA9IDEwMDtcclxuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNsaWRlclZhbHVlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UmFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JhbmdlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelJhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEb3RzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kb3RzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRvdHMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG90cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5zaWRlIHByb3BlcnRpZXNcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RvdHMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9pbmNsdWRlZCA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfcmFuZ2UgPSBmYWxzZTtcclxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xyXG5cclxuICB2YWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsOyAvLyBDT1JFIHZhbHVlIHN0YXRlXHJcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgc2xpZGVyOiBFbGVtZW50UmVmO1xyXG4gIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY2FjaGVTbGlkZXJTdGFydDogbnVtYmVyID0gbnVsbDtcclxuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyID0gbnVsbDtcclxuICBwcmVmaXhDbHMgPSAnYW50LXNsaWRlcic7XHJcbiAgY2xhc3NNYXA6IG9iamVjdDtcclxuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXHJcbiAgdHJhY2sgPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcclxuICBoYW5kbGVzOiBTbGlkZXJIYW5kbGVbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XHJcbiAgbWFya3NBcnJheTogTWFya3NbXTsgLy8gXCJtYXJrc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcclxuICBib3VuZHMgPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXHJcbiAgb25WYWx1ZUNoYW5nZTogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZDsgLy8gVXNlZCBieSBuZ01vZGVsLiBCVUc6IG9uVmFsdWVDaGFuZ2UoKSB3aWxsIG5vdCBzdWNjZXNzIHRvIGVmZmVjdCB0aGUgXCJ2YWx1ZVwiIHZhcmlhYmxlICggWyhuZ01vZGVsKV09XCJ2YWx1ZVwiICkgd2hlbiB0aGUgZmlyc3QgaW5pdGlhbGl6aW5nLCBleGNlcHQgdXNpbmcgXCJuZXh0VGlja1wiIGZ1bmN0aW9uYWxpdHkgKE1BWSBhbmd1bGFyMidzIHByb2JsZW0gPylcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfSAvLyBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxyXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTsgLy8gQ3VycmVudCBkcmFnZ2luZyBzdGF0ZVxyXG5cclxuICAvLyBFdmVudHMgb2JzZXJ2YWJsZXMgJiBzdWJzY3JpcHRpb25zXHJcbiAgZHJhZ3N0YXJ0JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGRyYWdtb3ZlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGRyYWdlbmQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBkcmFnc3RhcnRfOiBTdWJzY3JpcHRpb247XHJcbiAgZHJhZ21vdmVfOiBTdWJzY3JpcHRpb247XHJcbiAgZHJhZ2VuZF86IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCB2YWx1ZSBhY2Nlc3NvcnMgJiBuZ01vZGVsIGFjY2Vzc29yc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBzZXRWYWx1ZSh2YWw6IFNsaWRlclZhbHVlLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkgeyAvLyBbbmdNb2RlbC13cml0ZVZhbHVlXTogRm9ybWF0dGluZyBiZWZvcmUgc2V0dGluZyB2YWx1ZSwgYWx3YXlzIHVwZGF0ZSBjdXJyZW50IHZhbHVlLCBidXQgdHJpZ2dlciBvblZhbHVlQ2hhbmdlIE9OTFkgd2hlbiB0aGUgXCJmb3JtYXR0ZWQgdmFsdWVcIiBub3QgZXF1YWxzIFwiaW5wdXQgdmFsdWVcIlxyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWwpO1xyXG4gICAgICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1VcGRhdGUgdHJhY2sgJiBoYW5kbGVzYCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICAgIC8vIGlmICghdGhpcy5pc1ZhbHVlRXF1YWwodGhpcy52YWx1ZSwgdmFsKSkge1xyXG4gICAgICAvLyAgIHRoaXMubG9nKGBbbmdNb2RlbDpzZXRWYWx1ZS93cml0ZVZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xyXG4gICAgICAvLyAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAvLyAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIHsgLy8gW05vcm1hbF06IHNldHRpbmcgdmFsdWUsIE9OTFkgY2hlY2sgY2hhbmdlZCwgdGhlbiB1cGRhdGUgYW5kIHRyaWdnZXIgb25WYWx1ZUNoYW5nZVxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWx1ZUVxdWFsKHRoaXMudmFsdWUsIHZhbCkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXVVwZGF0ZSB0cmFjayAmIGhhbmRsZXNgKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xyXG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMubnpSYW5nZSkgeyAvLyBjbG9uZSAmIHNvcnQgcmFuZ2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lXHJcbiAgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUge1xyXG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICByZXR1cm4gdGhpcy5uelJhbmdlID9cclxuICAgICAgKG5vcm1hbGl6ZWRWYWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOlxyXG4gICAgICB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcik7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbDogU2xpZGVyVmFsdWUpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nKGBbbmdNb2RlbC93cml0ZVZhbHVlXWN1cnJlbnQgd3JpdGluZyB2YWx1ZSA9IGAsIHZhbCk7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IExpZmVjeWNsZSBob29rc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzOiBOelNsaWRlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIC8vIGluaXRpYWxpemUgZXZlbnQgYmluZGluZywgY2xhc3MgaW5pdCwgZXRjLiAoY2FsbGVkIG9ubHkgb25jZSlcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXRpYWwgY2hlY2tpbmdcclxuICAgIHRoaXMuY2hlY2tWYWxpZFZhbHVlKHRoaXMubnpEZWZhdWx0VmFsdWUpOyAvLyBjaGVjayBuekRlZmF1bHRWYWx1ZVxyXG4gICAgLy8gZGVmYXVsdCBoYW5kbGVzXHJcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLl9nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xyXG4gICAgLy8gaW5pdGlhbGl6ZVxyXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xyXG4gICAgfSAvLyBpbml0IHdpdGggZGVmYXVsdCB2YWx1ZVxyXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gbnVsbCA6IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcyk7XHJcbiAgICAvLyBldmVudCBiaW5kaW5nc1xyXG4gICAgdGhpcy5jcmVhdGVEcmFnKCk7XHJcbiAgICAvLyBpbml0aWFsaXplIGRyYWcncyBkaXNhYmxlZCBzdGF0dXNcclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgICAvLyB0aGUgZmlyc3QgdGltZSB0byBpbml0IGNsYXNzZXNcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpEaXNhYmxlZCwgbnpNYXJrcywgbnpSYW5nZSB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuekRpc2FibGVkICYmICFuekRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcykgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChuelJhbmdlICYmICFuelJhbmdlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7IC8vIENoYW5nZSB0byBkZWZhdWx0IHZhbHVlIHdoZW4gbnpSYW5nZSBjaGFuZ2VkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IEJhc2ljIGZsb3cgZnVuY3Rpb25zXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF0gIDogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgOiB0aGlzLm56VmVydGljYWwsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtbWFya3NgIF06IHRoaXMubWFya3NBcnJheSA/IHRoaXMubWFya3NBcnJheS5sZW5ndGggOiAwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZmluZCB0aGUgY2xvZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZCAob25seSBmb3IgcmFuZ2UgPSB0cnVlKVxyXG4gIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56UmFuZ2UpIHtcclxuICAgICAgbGV0IG1pbmltYWwgPSBudWxsO1xyXG4gICAgICBsZXQgZ2FwO1xyXG4gICAgICBsZXQgYWN0aXZlSW5kZXg7XHJcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcclxuICAgICAgKHRoaXMuZ2V0VmFsdWUoKSBhcyBudW1iZXJbXSkuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGdhcCA9IE1hdGguYWJzKHBvaW50ZXJWYWx1ZSAtIHZhbCk7XHJcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCkge1xyXG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcclxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpSYW5nZSkge1xyXG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xyXG4gICAgICBuZXdWYWx1ZVsgdGhpcy5hY3RpdmVWYWx1ZUluZGV4IF0gPSBwb2ludGVyVmFsdWU7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xyXG4gICAgY29uc3QgdmFsdWVTb3J0ZWQgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xyXG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcclxuICAgIGNvbnN0IGJvdW5kUGFydHMgPSB0aGlzLm56UmFuZ2UgPyB2YWx1ZVNvcnRlZCBhcyBudW1iZXJbXSA6IFsgMCwgdmFsdWVTb3J0ZWQgXTtcclxuICAgIGNvbnN0IHRyYWNrUGFydHMgPSB0aGlzLm56UmFuZ2UgPyBbIG9mZnNldFNvcnRlZFsgMCBdLCBvZmZzZXRTb3J0ZWRbIDEgXSAtIG9mZnNldFNvcnRlZFsgMCBdIF0gOiBbIDAsIG9mZnNldFNvcnRlZCBdO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSB0aGlzLm56UmFuZ2UgPyBvZmZzZXRbIGluZGV4IF0gOiBvZmZzZXQ7XHJcbiAgICAgIGhhbmRsZS52YWx1ZSA9IHRoaXMubnpSYW5nZSA/IHZhbHVlWyBpbmRleCBdIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIFsgdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyIF0gPSBib3VuZFBhcnRzO1xyXG4gICAgWyB0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGggXSA9IHRyYWNrUGFydHM7XHJcbiAgfVxyXG5cclxuICB0b01hcmtzQXJyYXkobWFya3M6IE1hcmtzKTogTWFya3NbXSB7XHJcbiAgICBjb25zdCBtYXJrc0FycmF5ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xyXG4gICAgICBjb25zdCBtYXJrID0gbWFya3NbIGtleSBdO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcclxuICAgICAgaWYgKHZhbCA8IHRoaXMubnpNaW4gfHwgdmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBFdmVudCBsaXN0ZW5lcnMgJiBiaW5kaW5nc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW29uRHJhZ1N0YXJ0XWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xyXG4gICAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9uc1xyXG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XHJcbiAgICAvLyB0cmlnZ2VyIGRyYWcgc3RhcnRcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIC8vIFRvb2x0aXAgdmlzaWJpbGl0eSBvZiBoYW5kbGVzXHJcbiAgICB0aGlzLl9zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2coJ1tvbkRyYWdNb3ZlXWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xyXG4gICAgLy8gdHJpZ2dlciBkcmFnIG1vdmluZ1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW29uRHJhZ0VuZF0nKTtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XHJcbiAgICB0aGlzLm56T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgLy8gcmVtb3ZlIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcclxuICAgIC8vIEhpZGUgYWxsIHRvb2x0aXBcclxuICAgIHRoaXMuX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEcmFnKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQgICA6ICdtb3VzZWRvd24nLCBtb3ZlOiAnbW91c2Vtb3ZlJywgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbIG9yaWVudEZpZWxkIF1cclxuICAgIH07XHJcbiAgICBjb25zdCB0b3VjaDogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xyXG4gICAgICBzdGFydCAgIDogJ3RvdWNoc3RhcnQnLCBtb3ZlOiAndG91Y2htb3ZlJywgZW5kOiAndG91Y2hlbmQnLFxyXG4gICAgICBwbHVja0tleTogWyAndG91Y2hlcycsICcwJywgb3JpZW50RmllbGQgXSxcclxuICAgICAgZmlsdGVyICA6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gIXRoaXMudXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUgYXMgVG91Y2hFdmVudClcclxuICAgIH07XHJcbiAgICAvLyBtYWtlIG9ic2VydmFibGVzXHJcbiAgICBbIG1vdXNlLCB0b3VjaCBdLmZvckVhY2goc291cmNlID0+IHtcclxuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCgpID0+IHRydWUpIH0gPSBzb3VyY2U7XHJcbiAgICAgIC8vIHN0YXJ0XHJcbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxyXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxyXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGVuZFxyXG4gICAgICBzb3VyY2UuZW5kJCA9IGZyb21FdmVudChkb2N1bWVudCwgZW5kKTtcclxuICAgICAgLy8gcmVzb2x2ZSBtb3ZlXHJcbiAgICAgIHNvdXJjZS5tb3ZlUmVzb2x2ZWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBtb3ZlKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcclxuICAgICAgICB0YXAodGhpcy51dGlscy5wYXVzZUV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxyXG4gICAgICApO1xyXG4gICAgICAvLyBtZXJnZSB0byBiZWNvbWUgbW92aW5nXHJcbiAgICAgIC8vIHNvdXJjZS5tb3ZlJCA9IHNvdXJjZS5zdGFydFBsdWNrZWQkLm1lcmdlTWFwVG8oc291cmNlLm1vdmVSZXNvbHZlZCQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBtZXJnZSBtb3VzZSBhbmQgdG91Y2ggb2JzZXJ2YWJsZXNcclxuICAgIHRoaXMuZHJhZ3N0YXJ0JCA9IG1lcmdlKG1vdXNlLnN0YXJ0UGx1Y2tlZCQsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQpO1xyXG4gICAgLy8gdGhpcy5kcmFnbW92ZSQgPSBPYnNlcnZhYmxlLm1lcmdlKG1vdXNlLm1vdmUkLCB0b3VjaC5tb3ZlJCk7XHJcbiAgICB0aGlzLmRyYWdtb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQsIHRvdWNoLm1vdmVSZXNvbHZlZCQpO1xyXG4gICAgdGhpcy5kcmFnZW5kJCA9IG1lcmdlKG1vdXNlLmVuZCQsIHRvdWNoLmVuZCQpO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJyBdKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW3N1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnQkID0gJywgdGhpcy5kcmFnc3RhcnQkKTtcclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ3N0YXJ0JCAmJiAhdGhpcy5kcmFnc3RhcnRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IHRoaXMuZHJhZ3N0YXJ0JC5zdWJzY3JpYmUodGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdtb3ZlJykgIT09IC0xICYmIHRoaXMuZHJhZ21vdmUkICYmICF0aGlzLmRyYWdtb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IHRoaXMuZHJhZ21vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZCQgJiYgIXRoaXMuZHJhZ2VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnZW5kXyA9IHRoaXMuZHJhZ2VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWyAnc3RhcnQnLCAnbW92ZScsICdlbmQnIF0pOiB2b2lkIHtcclxuICAgIHRoaXMubG9nKCdbdW5zdWJzY3JpYmVEcmFnXXRoaXMuZHJhZ3N0YXJ0XyA9ICcsIHRoaXMuZHJhZ3N0YXJ0Xyk7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnc3RhcnRfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnZW5kXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdlbmRfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZURyYWdNb3ZpbmcobW92YWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgcGVyaW9kcyA9IFsgJ21vdmUnLCAnZW5kJyBdO1xyXG4gICAgaWYgKG1vdmFibGUpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbICdzdGFydCcgXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IFV0aWwgZnVuY3Rpb25zICh0b29scylcclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gZmluZCB0aGUgY2xvc2VzdCB2YWx1ZSBkZXBlbmQgb24gcG9pbnRlcidzIHBvc2l0aW9uXHJcbiAgZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBzbGlkZXJMZW5ndGggPSB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xyXG4gICAgY29uc3QgcG9pbnRzID0gKHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCkpO1xyXG4gICAgLy8gcHVzaCBjbG9zZXN0IHN0ZXBcclxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcclxuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XHJcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xyXG4gICAgfVxyXG4gICAgLy8gY2FsY3VsYXRlIGdhcHNcclxuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XHJcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzWyBnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpIF07XHJcbiAgICAvLyByZXR1cm4gdGhlIGZpeGVkXHJcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDpcclxuICAgICAgcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQodGhpcy51dGlscy5nZXRQcmVjaXNpb24odGhpcy5uelN0ZXApKSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudXRpbHMudmFsdWVUb09mZnNldCh0aGlzLm56TWluLCB0aGlzLm56TWF4LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnV0aWxzLmdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXJET00pO1xyXG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcclxuICB9XHJcblxyXG4gIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgP1xyXG4gICAgICBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcclxuICBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7IC8vIE5PVEU6IHdpbGwgcmV0dXJuIG5ldyB2YWx1ZVxyXG4gICAgbGV0IHJlcyA9IHZhbHVlO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrVmFsaWRWYWx1ZSh2YWx1ZSkpIHsgLy8gaWYgZW1wdHksIHVzZSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgIHJlcyA9IHRoaXMubnpEZWZhdWx0VmFsdWUgPT09IG51bGwgP1xyXG4gICAgICAgICh0aGlzLm56UmFuZ2UgPyBbIHRoaXMubnpNaW4sIHRoaXMubnpNYXggXSA6IHRoaXMubnpNaW4pIDogdGhpcy5uekRlZmF1bHRWYWx1ZTtcclxuICAgIH0gZWxzZSB7IC8vIGZvcm1hdFxyXG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICAgIHJlcyA9IHRoaXMubnpSYW5nZSA/XHJcbiAgICAgICAgKHZhbHVlIGFzIG51bWJlcltdKS5tYXAodmFsID0+IHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpIDpcclxuICAgICAgICB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWx1ZSBhcyBudW1iZXIsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaFxyXG4gIGNoZWNrVmFsaWRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uelJhbmdlO1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIGxldCBwYXJzZWRWYWx1ZTogbnVtYmVyID0gdmFsdWU7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNOYU4ocGFyc2VkVmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IC8vIGl0J3MgYW4gaW52YWxpZCB2YWx1ZSwganVzdCByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChpc0FycmF5ICE9PSAhIXJhbmdlKSB7IC8vIHZhbHVlIHR5cGUgbm90IG1hdGNoXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibnpSYW5nZVwiIGNhbid0IG1hdGNoIHRoZSBcIm56VmFsdWVcIidzIHR5cGUsIHBsZWFzZSBjaGVjayB0aGVzZSBwcm9wZXJ0aWVzOiBcIm56UmFuZ2VcIiwgXCJuelZhbHVlXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNWYWx1ZUVxdWFsKHZhbHVlOiBTbGlkZXJWYWx1ZSwgdmFsOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gdHlwZW9mIHZhbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlWyBpIF0gIT09IHZhbFsgaSBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcmludCBkZWJ1ZyBpbmZvXHJcbiAgLy8gVE9ETzogc2hvdWxkIG5vdCBrZXB0IGluIGNvbXBvbmVudFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBsb2coLi4ubWVzc2FnZXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRlYnVnSWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgYXJncyA9IFsgYFtuei1zbGlkZXJdWyMke3RoaXMubnpEZWJ1Z0lkfV0gYCBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycydcclxuICBwcml2YXRlIF9zaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVzWyBpbmRleCBdLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZVtdIHtcclxuICAgIGNvbnN0IGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgIGhhbmRsZXMucHVzaCh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==