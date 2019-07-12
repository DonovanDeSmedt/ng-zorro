/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './nz-slider-marks.component';
import { NzSliderService } from './nz-slider.service';
export class SliderHandle {
}
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
export class NzSliderComponent {
    /**
     * @param {?} utils
     */
    constructor(utils) {
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
        this.onTouched = () => {
        }; // onTouch function registered via registerOnTouch (ControlValueAccessor).
        this.isDragging = false; // Current dragging state
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
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
    set nzVertical(value) {
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRange(value) {
        this._range = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzRange() {
        return this._range;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDots(value) {
        this._dots = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDots() {
        return this._dots;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(val, isWriteValue = false) {
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log(`[ngModel:setValue/writeValue]Update track & handles`);
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
                this.log(`[Normal:setValue]Update track & handles`);
                this.updateTrackAndHandles();
                this.log(`[Normal:setValue]onValueChange`, val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    }
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.nzRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.nzRange ?
            (/** @type {?} */ (normalizedValue)).map(val => this.valueToOffset(val)) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.log(`[ngModel/writeValue]current writing value = `, val);
        this.setValue(val, true);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
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
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.nzDisabled,
            [`${this.prefixCls}-vertical`]: this.nzVertical,
            [`${this.prefixCls}-with-marks`]: this.marksArray ? this.marksArray.length : 0
        };
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
        }
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            const newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = this.nzRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        const trackParts = this.nzRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = this.nzRange ? offset[index] : offset;
            handle.value = this.nzRange ? value[index] : value;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
    }
    /**
     * @param {?} marks
     * @return {?}
     */
    toMarksArray(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.nzMin || val > this.nzMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    }
    /**
     * @return {?}
     */
    onDragEnd() {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.nzOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    }
    /**
     * @return {?}
     */
    createDrag() {
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => !this.utils.isNotTouchEvent(/** @type {?} */ (e))
        };
        // make observables
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = (() => true) } = source;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
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
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
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
    }
    /**
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = (this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat));
        // push closest step
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map(point => Math.abs(val - point));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return the fixed
        return this.nzStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.nzStep)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return this.utils.valueToOffset(this.nzMin, this.nzMax, value);
    }
    /**
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = this.utils.getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        return this.nzVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        /** @type {?} */
        let res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.nzDefaultValue === null ?
                (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.nzRange ?
                (/** @type {?} */ (value)).map(val => this.utils.correctNumLimit(val, this.nzMin, this.nzMax)) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.nzMin, this.nzMax);
        }
        return res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkValidValue(value) {
        /** @type {?} */
        const range = this.nzRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        const isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            let parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error(`The "nzRange" can't match the "nzValue"'s type, please check these properties: "nzRange", "nzValue", "nzDefaultValue".`);
        }
        return true;
    }
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    isValueEqual(value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            const len = value.length;
            for (let i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    }
    /**
     * @param {...?} messages
     * @return {?}
     */
    log(...messages) {
        if (this.nzDebugId !== null) {
            /** @type {?} */
            const args = [`[nz-slider][#${this.nzDebugId}] `].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    }
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    _showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            this.handles[index].active = index === handleIndex;
        });
    }
    /**
     * @return {?}
     */
    _hideAllHandleTooltip() {
        this.handles.forEach(handle => handle.active = false);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    _generateHandles(amount) {
        /** @type {?} */
        const handles = [];
        for (let i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    }
}
NzSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider',
                preserveWhitespaces: false,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSliderComponent),
                        multi: true
                    }],
                template: "<div #slider [ngClass]=\"classMap\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <nz-slider-track\r\n    nzClassName=\"{{prefixCls}}-track\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"\r\n  ></nz-slider-track>\r\n  <nz-slider-step *ngIf=\"marksArray\"\r\n    nzPrefixCls=\"{{prefixCls}}\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n  ></nz-slider-step>\r\n  <nz-slider-handle\r\n    *ngFor=\"let handle of handles;\"\r\n    nzClassName=\"{{prefixCls}}-handle\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"nzTipFormatter\"\r\n  ></nz-slider-handle>\r\n  <nz-slider-marks *ngIf=\"marksArray\"\r\n    nzClassName=\"{{prefixCls}}-mark\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzMin]=\"nzMin\"\r\n    [nzMax]=\"nzMax\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n  ></nz-slider-marks>\r\n</div>"
            }] }
];
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsTUFBTSxPQUFPLFlBQVk7Q0FJeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQW1LNUIsWUFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7O1FBaEsxQyxpQkFBc0MsSUFBSSxDQUFDOztRQWEzQyxjQUFrQixDQUFDLENBQUM7UUFDcEIsZUFBMEIsSUFBSSxDQUFDO1FBQy9CLGFBQWlCLENBQUMsQ0FBQztRQUNuQixhQUFpQixHQUFHLENBQUM7UUFDckIsc0JBQXVDLElBQUksQ0FBQztRQUU1Qyx1QkFBcUMsSUFBSSxZQUFZLEVBQWUsQ0FBQzt5QkF1Q2pELEtBQUs7cUJBQ1QsS0FBSzt5QkFD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QUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUMzRixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztRQUV4RixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFDeEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6Qjs7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7UUFDeEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUUsQ0FBQzs7UUFFMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyRTs7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QUs7cUJBVUwsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsTUFBTTt5QkFFTixLQUFLO3NCQVNMLEtBQUs7cUJBU0wsS0FBSzt5QkFTTCxLQUFLO3FCQWlCTCxTQUFTLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOnZhcmlhYmxlLW5hbWUgKi9cclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBNYXJrcywgTWFya3NBcnJheSB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56U2xpZGVyU2VydmljZSB9IGZyb20gJy4vbnotc2xpZGVyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYW5kbGUge1xyXG4gIG9mZnNldDogbnVtYmVyO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnIHtcclxuICBzdGFydDogc3RyaW5nO1xyXG4gIG1vdmU6IHN0cmluZztcclxuICBlbmQ6IHN0cmluZztcclxuICBwbHVja0tleTogc3RyaW5nW107XHJcblxyXG4gIGZpbHRlcj8oZTogRXZlbnQpOiBib29sZWFuO1xyXG5cclxuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGVuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIHtcclxuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcclxuICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgfSBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLyBEZWJ1Z2dpbmdcclxuICBASW5wdXQoKSBuekRlYnVnSWQ6IG51bWJlciB8IHN0cmluZyA9IG51bGw7IC8vIHNldCB0aGlzIGlkIHdpbGwgcHJpbnQgZGVidWcgaW5mb3JtYXRpb25zIHRvIGNvbnNvbGVcclxuXHJcbiAgLy8gRHluYW1pYyBwcm9wZXJ0eSBzZXR0aW5nc1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gU3RhdGljIGNvbmZpZ3VyYXRpb25zIChwcm9wZXJ0aWVzIHRoYXQgY2FuIG9ubHkgc3BlY2lmeSBvbmNlKVxyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpNYXJrczogTWFya3MgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWluID0gMDtcclxuICBASW5wdXQoKSBuek1heCA9IDEwMDtcclxuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNsaWRlclZhbHVlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UmFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JhbmdlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelJhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEb3RzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kb3RzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRvdHMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG90cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5zaWRlIHByb3BlcnRpZXNcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RvdHMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9pbmNsdWRlZCA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfcmFuZ2UgPSBmYWxzZTtcclxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xyXG5cclxuICB2YWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsOyAvLyBDT1JFIHZhbHVlIHN0YXRlXHJcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgc2xpZGVyOiBFbGVtZW50UmVmO1xyXG4gIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY2FjaGVTbGlkZXJTdGFydDogbnVtYmVyID0gbnVsbDtcclxuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyID0gbnVsbDtcclxuICBwcmVmaXhDbHMgPSAnYW50LXNsaWRlcic7XHJcbiAgY2xhc3NNYXA6IG9iamVjdDtcclxuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXHJcbiAgdHJhY2sgPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcclxuICBoYW5kbGVzOiBTbGlkZXJIYW5kbGVbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XHJcbiAgbWFya3NBcnJheTogTWFya3NbXTsgLy8gXCJtYXJrc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcclxuICBib3VuZHMgPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXHJcbiAgb25WYWx1ZUNoYW5nZTogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZDsgLy8gVXNlZCBieSBuZ01vZGVsLiBCVUc6IG9uVmFsdWVDaGFuZ2UoKSB3aWxsIG5vdCBzdWNjZXNzIHRvIGVmZmVjdCB0aGUgXCJ2YWx1ZVwiIHZhcmlhYmxlICggWyhuZ01vZGVsKV09XCJ2YWx1ZVwiICkgd2hlbiB0aGUgZmlyc3QgaW5pdGlhbGl6aW5nLCBleGNlcHQgdXNpbmcgXCJuZXh0VGlja1wiIGZ1bmN0aW9uYWxpdHkgKE1BWSBhbmd1bGFyMidzIHByb2JsZW0gPylcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfSAvLyBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxyXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTsgLy8gQ3VycmVudCBkcmFnZ2luZyBzdGF0ZVxyXG5cclxuICAvLyBFdmVudHMgb2JzZXJ2YWJsZXMgJiBzdWJzY3JpcHRpb25zXHJcbiAgZHJhZ3N0YXJ0JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGRyYWdtb3ZlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gIGRyYWdlbmQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBkcmFnc3RhcnRfOiBTdWJzY3JpcHRpb247XHJcbiAgZHJhZ21vdmVfOiBTdWJzY3JpcHRpb247XHJcbiAgZHJhZ2VuZF86IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCB2YWx1ZSBhY2Nlc3NvcnMgJiBuZ01vZGVsIGFjY2Vzc29yc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBzZXRWYWx1ZSh2YWw6IFNsaWRlclZhbHVlLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkgeyAvLyBbbmdNb2RlbC13cml0ZVZhbHVlXTogRm9ybWF0dGluZyBiZWZvcmUgc2V0dGluZyB2YWx1ZSwgYWx3YXlzIHVwZGF0ZSBjdXJyZW50IHZhbHVlLCBidXQgdHJpZ2dlciBvblZhbHVlQ2hhbmdlIE9OTFkgd2hlbiB0aGUgXCJmb3JtYXR0ZWQgdmFsdWVcIiBub3QgZXF1YWxzIFwiaW5wdXQgdmFsdWVcIlxyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWwpO1xyXG4gICAgICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1VcGRhdGUgdHJhY2sgJiBoYW5kbGVzYCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICAgIC8vIGlmICghdGhpcy5pc1ZhbHVlRXF1YWwodGhpcy52YWx1ZSwgdmFsKSkge1xyXG4gICAgICAvLyAgIHRoaXMubG9nKGBbbmdNb2RlbDpzZXRWYWx1ZS93cml0ZVZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xyXG4gICAgICAvLyAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAvLyAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIHsgLy8gW05vcm1hbF06IHNldHRpbmcgdmFsdWUsIE9OTFkgY2hlY2sgY2hhbmdlZCwgdGhlbiB1cGRhdGUgYW5kIHRyaWdnZXIgb25WYWx1ZUNoYW5nZVxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWx1ZUVxdWFsKHRoaXMudmFsdWUsIHZhbCkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXVVwZGF0ZSB0cmFjayAmIGhhbmRsZXNgKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xyXG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMubnpSYW5nZSkgeyAvLyBjbG9uZSAmIHNvcnQgcmFuZ2UgdmFsdWVzXHJcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lXHJcbiAgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUge1xyXG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICByZXR1cm4gdGhpcy5uelJhbmdlID9cclxuICAgICAgKG5vcm1hbGl6ZWRWYWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOlxyXG4gICAgICB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcik7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbDogU2xpZGVyVmFsdWUpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nKGBbbmdNb2RlbC93cml0ZVZhbHVlXWN1cnJlbnQgd3JpdGluZyB2YWx1ZSA9IGAsIHZhbCk7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IExpZmVjeWNsZSBob29rc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzOiBOelNsaWRlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIC8vIGluaXRpYWxpemUgZXZlbnQgYmluZGluZywgY2xhc3MgaW5pdCwgZXRjLiAoY2FsbGVkIG9ubHkgb25jZSlcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXRpYWwgY2hlY2tpbmdcclxuICAgIHRoaXMuY2hlY2tWYWxpZFZhbHVlKHRoaXMubnpEZWZhdWx0VmFsdWUpOyAvLyBjaGVjayBuekRlZmF1bHRWYWx1ZVxyXG4gICAgLy8gZGVmYXVsdCBoYW5kbGVzXHJcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLl9nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xyXG4gICAgLy8gaW5pdGlhbGl6ZVxyXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xyXG4gICAgfSAvLyBpbml0IHdpdGggZGVmYXVsdCB2YWx1ZVxyXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gbnVsbCA6IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcyk7XHJcbiAgICAvLyBldmVudCBiaW5kaW5nc1xyXG4gICAgdGhpcy5jcmVhdGVEcmFnKCk7XHJcbiAgICAvLyBpbml0aWFsaXplIGRyYWcncyBkaXNhYmxlZCBzdGF0dXNcclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMubnpEaXNhYmxlZCk7XHJcbiAgICAvLyB0aGUgZmlyc3QgdGltZSB0byBpbml0IGNsYXNzZXNcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpEaXNhYmxlZCwgbnpNYXJrcywgbnpSYW5nZSB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuekRpc2FibGVkICYmICFuekRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcykgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChuelJhbmdlICYmICFuelJhbmdlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7IC8vIENoYW5nZSB0byBkZWZhdWx0IHZhbHVlIHdoZW4gbnpSYW5nZSBjaGFuZ2VkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IEJhc2ljIGZsb3cgZnVuY3Rpb25zXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF0gIDogdGhpcy5uekRpc2FibGVkLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgOiB0aGlzLm56VmVydGljYWwsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtbWFya3NgIF06IHRoaXMubWFya3NBcnJheSA/IHRoaXMubWFya3NBcnJheS5sZW5ndGggOiAwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZmluZCB0aGUgY2xvZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZCAob25seSBmb3IgcmFuZ2UgPSB0cnVlKVxyXG4gIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56UmFuZ2UpIHtcclxuICAgICAgbGV0IG1pbmltYWwgPSBudWxsO1xyXG4gICAgICBsZXQgZ2FwO1xyXG4gICAgICBsZXQgYWN0aXZlSW5kZXg7XHJcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcclxuICAgICAgKHRoaXMuZ2V0VmFsdWUoKSBhcyBudW1iZXJbXSkuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGdhcCA9IE1hdGguYWJzKHBvaW50ZXJWYWx1ZSAtIHZhbCk7XHJcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCkge1xyXG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcclxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpSYW5nZSkge1xyXG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xyXG4gICAgICBuZXdWYWx1ZVsgdGhpcy5hY3RpdmVWYWx1ZUluZGV4IF0gPSBwb2ludGVyVmFsdWU7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xyXG4gICAgY29uc3QgdmFsdWVTb3J0ZWQgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xyXG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcclxuICAgIGNvbnN0IGJvdW5kUGFydHMgPSB0aGlzLm56UmFuZ2UgPyB2YWx1ZVNvcnRlZCBhcyBudW1iZXJbXSA6IFsgMCwgdmFsdWVTb3J0ZWQgXTtcclxuICAgIGNvbnN0IHRyYWNrUGFydHMgPSB0aGlzLm56UmFuZ2UgPyBbIG9mZnNldFNvcnRlZFsgMCBdLCBvZmZzZXRTb3J0ZWRbIDEgXSAtIG9mZnNldFNvcnRlZFsgMCBdIF0gOiBbIDAsIG9mZnNldFNvcnRlZCBdO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSB0aGlzLm56UmFuZ2UgPyBvZmZzZXRbIGluZGV4IF0gOiBvZmZzZXQ7XHJcbiAgICAgIGhhbmRsZS52YWx1ZSA9IHRoaXMubnpSYW5nZSA/IHZhbHVlWyBpbmRleCBdIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIFsgdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyIF0gPSBib3VuZFBhcnRzO1xyXG4gICAgWyB0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGggXSA9IHRyYWNrUGFydHM7XHJcbiAgfVxyXG5cclxuICB0b01hcmtzQXJyYXkobWFya3M6IE1hcmtzKTogTWFya3NbXSB7XHJcbiAgICBjb25zdCBtYXJrc0FycmF5ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xyXG4gICAgICBjb25zdCBtYXJrID0gbWFya3NbIGtleSBdO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcclxuICAgICAgaWYgKHZhbCA8IHRoaXMubnpNaW4gfHwgdmFsID4gdGhpcy5uek1heCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBFdmVudCBsaXN0ZW5lcnMgJiBiaW5kaW5nc1xyXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW29uRHJhZ1N0YXJ0XWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xyXG4gICAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9uc1xyXG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XHJcbiAgICAvLyB0cmlnZ2VyIGRyYWcgc3RhcnRcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIC8vIFRvb2x0aXAgdmlzaWJpbGl0eSBvZiBoYW5kbGVzXHJcbiAgICB0aGlzLl9zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2coJ1tvbkRyYWdNb3ZlXWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xyXG4gICAgLy8gdHJpZ2dlciBkcmFnIG1vdmluZ1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW29uRHJhZ0VuZF0nKTtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XHJcbiAgICB0aGlzLm56T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgLy8gcmVtb3ZlIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcclxuICAgIC8vIEhpZGUgYWxsIHRvb2x0aXBcclxuICAgIHRoaXMuX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEcmFnKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQgICA6ICdtb3VzZWRvd24nLCBtb3ZlOiAnbW91c2Vtb3ZlJywgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbIG9yaWVudEZpZWxkIF1cclxuICAgIH07XHJcbiAgICBjb25zdCB0b3VjaDogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xyXG4gICAgICBzdGFydCAgIDogJ3RvdWNoc3RhcnQnLCBtb3ZlOiAndG91Y2htb3ZlJywgZW5kOiAndG91Y2hlbmQnLFxyXG4gICAgICBwbHVja0tleTogWyAndG91Y2hlcycsICcwJywgb3JpZW50RmllbGQgXSxcclxuICAgICAgZmlsdGVyICA6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gIXRoaXMudXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUgYXMgVG91Y2hFdmVudClcclxuICAgIH07XHJcbiAgICAvLyBtYWtlIG9ic2VydmFibGVzXHJcbiAgICBbIG1vdXNlLCB0b3VjaCBdLmZvckVhY2goc291cmNlID0+IHtcclxuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCgpID0+IHRydWUpIH0gPSBzb3VyY2U7XHJcbiAgICAgIC8vIHN0YXJ0XHJcbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxyXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxyXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGVuZFxyXG4gICAgICBzb3VyY2UuZW5kJCA9IGZyb21FdmVudChkb2N1bWVudCwgZW5kKTtcclxuICAgICAgLy8gcmVzb2x2ZSBtb3ZlXHJcbiAgICAgIHNvdXJjZS5tb3ZlUmVzb2x2ZWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBtb3ZlKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcclxuICAgICAgICB0YXAodGhpcy51dGlscy5wYXVzZUV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxyXG4gICAgICApO1xyXG4gICAgICAvLyBtZXJnZSB0byBiZWNvbWUgbW92aW5nXHJcbiAgICAgIC8vIHNvdXJjZS5tb3ZlJCA9IHNvdXJjZS5zdGFydFBsdWNrZWQkLm1lcmdlTWFwVG8oc291cmNlLm1vdmVSZXNvbHZlZCQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBtZXJnZSBtb3VzZSBhbmQgdG91Y2ggb2JzZXJ2YWJsZXNcclxuICAgIHRoaXMuZHJhZ3N0YXJ0JCA9IG1lcmdlKG1vdXNlLnN0YXJ0UGx1Y2tlZCQsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQpO1xyXG4gICAgLy8gdGhpcy5kcmFnbW92ZSQgPSBPYnNlcnZhYmxlLm1lcmdlKG1vdXNlLm1vdmUkLCB0b3VjaC5tb3ZlJCk7XHJcbiAgICB0aGlzLmRyYWdtb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQsIHRvdWNoLm1vdmVSZXNvbHZlZCQpO1xyXG4gICAgdGhpcy5kcmFnZW5kJCA9IG1lcmdlKG1vdXNlLmVuZCQsIHRvdWNoLmVuZCQpO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJyBdKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZygnW3N1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnQkID0gJywgdGhpcy5kcmFnc3RhcnQkKTtcclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ3N0YXJ0JCAmJiAhdGhpcy5kcmFnc3RhcnRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IHRoaXMuZHJhZ3N0YXJ0JC5zdWJzY3JpYmUodGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdtb3ZlJykgIT09IC0xICYmIHRoaXMuZHJhZ21vdmUkICYmICF0aGlzLmRyYWdtb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IHRoaXMuZHJhZ21vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZCQgJiYgIXRoaXMuZHJhZ2VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnZW5kXyA9IHRoaXMuZHJhZ2VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWyAnc3RhcnQnLCAnbW92ZScsICdlbmQnIF0pOiB2b2lkIHtcclxuICAgIHRoaXMubG9nKCdbdW5zdWJzY3JpYmVEcmFnXXRoaXMuZHJhZ3N0YXJ0XyA9ICcsIHRoaXMuZHJhZ3N0YXJ0Xyk7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnc3RhcnRfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnZW5kXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdlbmRfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZURyYWdNb3ZpbmcobW92YWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgcGVyaW9kcyA9IFsgJ21vdmUnLCAnZW5kJyBdO1xyXG4gICAgaWYgKG1vdmFibGUpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbICdzdGFydCcgXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IFV0aWwgZnVuY3Rpb25zICh0b29scylcclxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gZmluZCB0aGUgY2xvc2VzdCB2YWx1ZSBkZXBlbmQgb24gcG9pbnRlcidzIHBvc2l0aW9uXHJcbiAgZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBzbGlkZXJMZW5ndGggPSB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xyXG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xyXG4gICAgY29uc3QgcG9pbnRzID0gKHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCkpO1xyXG4gICAgLy8gcHVzaCBjbG9zZXN0IHN0ZXBcclxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcclxuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XHJcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xyXG4gICAgfVxyXG4gICAgLy8gY2FsY3VsYXRlIGdhcHNcclxuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XHJcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzWyBnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpIF07XHJcbiAgICAvLyByZXR1cm4gdGhlIGZpeGVkXHJcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDpcclxuICAgICAgcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQodGhpcy51dGlscy5nZXRQcmVjaXNpb24odGhpcy5uelN0ZXApKSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudXRpbHMudmFsdWVUb09mZnNldCh0aGlzLm56TWluLCB0aGlzLm56TWF4LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnV0aWxzLmdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXJET00pO1xyXG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcclxuICB9XHJcblxyXG4gIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgP1xyXG4gICAgICBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcclxuICBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7IC8vIE5PVEU6IHdpbGwgcmV0dXJuIG5ldyB2YWx1ZVxyXG4gICAgbGV0IHJlcyA9IHZhbHVlO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrVmFsaWRWYWx1ZSh2YWx1ZSkpIHsgLy8gaWYgZW1wdHksIHVzZSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgIHJlcyA9IHRoaXMubnpEZWZhdWx0VmFsdWUgPT09IG51bGwgP1xyXG4gICAgICAgICh0aGlzLm56UmFuZ2UgPyBbIHRoaXMubnpNaW4sIHRoaXMubnpNYXggXSA6IHRoaXMubnpNaW4pIDogdGhpcy5uekRlZmF1bHRWYWx1ZTtcclxuICAgIH0gZWxzZSB7IC8vIGZvcm1hdFxyXG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XHJcbiAgICAgIHJlcyA9IHRoaXMubnpSYW5nZSA/XHJcbiAgICAgICAgKHZhbHVlIGFzIG51bWJlcltdKS5tYXAodmFsID0+IHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpIDpcclxuICAgICAgICB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWx1ZSBhcyBudW1iZXIsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaFxyXG4gIGNoZWNrVmFsaWRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uelJhbmdlO1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIGxldCBwYXJzZWRWYWx1ZTogbnVtYmVyID0gdmFsdWU7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNOYU4ocGFyc2VkVmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IC8vIGl0J3MgYW4gaW52YWxpZCB2YWx1ZSwganVzdCByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChpc0FycmF5ICE9PSAhIXJhbmdlKSB7IC8vIHZhbHVlIHR5cGUgbm90IG1hdGNoXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibnpSYW5nZVwiIGNhbid0IG1hdGNoIHRoZSBcIm56VmFsdWVcIidzIHR5cGUsIHBsZWFzZSBjaGVjayB0aGVzZSBwcm9wZXJ0aWVzOiBcIm56UmFuZ2VcIiwgXCJuelZhbHVlXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNWYWx1ZUVxdWFsKHZhbHVlOiBTbGlkZXJWYWx1ZSwgdmFsOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gdHlwZW9mIHZhbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlWyBpIF0gIT09IHZhbFsgaSBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcmludCBkZWJ1ZyBpbmZvXHJcbiAgLy8gVE9ETzogc2hvdWxkIG5vdCBrZXB0IGluIGNvbXBvbmVudFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBsb2coLi4ubWVzc2FnZXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRlYnVnSWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgYXJncyA9IFsgYFtuei1zbGlkZXJdWyMke3RoaXMubnpEZWJ1Z0lkfV0gYCBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycydcclxuICBwcml2YXRlIF9zaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVzWyBpbmRleCBdLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZVtdIHtcclxuICAgIGNvbnN0IGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgIGhhbmRsZXMucHVzaCh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==