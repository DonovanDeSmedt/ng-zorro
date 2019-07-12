/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
import { getTimeConfig, isAllowedDate } from '../util';
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent() {
        var _this = this;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        // @Output() selectDate = new EventEmitter<CandyDate>(); // Emitted when the date is selected by click the date panel (if isRange, the returned date is from one of the range parts)
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { 'left': 0, 'right': 1 };
        this.disabledStartTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        };
        this.disabledEndTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        };
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        // initialValue: CandyDate = new CandyDate(); // Initial date to show when no value inputs
        // get valueOrInitial(): CandyDate {
        //   return this.value || this.initialValue;
        // }
        get: /**
         * @return {?}
         */
        function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(function (prop) { return _this.initialArray(prop); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isRange) {
            if (changes["value"]) { // Re-initialize all related values
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = /** @type {?} */ (this.value);
                this.valueForRangeShow = this.normalizeRangeValue(/** @type {?} */ (this.value));
            }
        }
        // Parse showTime options
        if (changes["showTime"] || changes["disabledTime"]) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes["panelMode"] && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    DateRangePopupComponent.prototype.onShowTimePickerChange = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickToday = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onDayHover = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) { // When right value is selected, don't do hover
            /** @type {?} */
            var base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    function (mode, partType) {
        if (this.isRange) {
            (/** @type {?} */ (this.panelMode))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHeaderChange = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onSelectTime = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var newValue = this.cloneRangeDate(/** @type {?} */ (this.value));
            /** @type {?} */
            var index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, (/** @type {?} */ (this.value)) || new CandyDate())); // If not select a date currently, use today
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValue = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            var _a = tslib_1.__read(/** @type {?} */ (this.selectedValue), 2), left = _a[0], right = _a[1]; // NOTE: the left/right maybe not the sequence it select at the date panels
            if ((!left && !right) || (left && right)) { // If totally full or empty, clean up && re-assign left first
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
            }
            else if (left && !right) { // If one of them is empty, assign the other one and sort, then set the final values
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    };
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.enablePrevNext = /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    function (direction, partType) {
        if (this.isRange) {
            var _a = tslib_1.__read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPanelMode = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return /** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]);
        }
        else {
            return /** @type {?} */ (this.panelMode);
        }
    };
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValue = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValueBySelector = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            /** @type {?} */
            var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPartTypeIndex = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        return this.partTypeMap[partType];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.hasSelectedValue = /**
     * @return {?}
     */
    function () {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
        }
        return false;
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.timePickerDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.okDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(/** @type {?} */ (this.value), this.disabledDate, this.disabledTime) : false;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getTimeOptions = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.isRange ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var value = val;
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
     * @return {?}
     */
    function () {
        this.clearHoverValue();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHoverPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.hoverValue = ([new CandyDate(val[0]), new CandyDate(val[1])]);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DateRangePopupComponent.prototype.getObjectKeys = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.closePickerPanel = /**
     * @return {?}
     */
    function () {
        this.closePicker.emit();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.clearHoverValue = /**
     * @return {?}
     */
    function () {
        this.hoverValue = [];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.buildTimeOptions = /**
     * @return {?}
     */
    function () {
        if (this.showTime) {
            /** @type {?} */
            var showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                this.timeOptions = [this.overrideTimeOptions(showTime, this.value[0], 'start'), this.overrideTimeOptions(showTime, this.value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, /** @type {?} */ (this.value));
            }
        }
        else {
            this.timeOptions = null;
        }
    };
    /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideTimeOptions = /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    function (origin, value, partial) {
        /** @type {?} */
        var disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return tslib_1.__assign({}, origin, getTimeConfig(value, disabledTimeFn));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideHms = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.isValidRange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            var _a = tslib_1.__read(value, 2), start = _a[0], end = _a[1];
            /** @type {?} */
            var grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.normalizeRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = tslib_1.__read(value, 2), start = _a[0], end = _a[1];
        /** @type {?} */
        var newStart = start || new CandyDate();
        /** @type {?} */
        var newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.sortRangeValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (Array.isArray(this[key])) {
            var _a = tslib_1.__read(this[key], 2), start = _a[0], end = _a[1];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setRangeValue = /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    function (key, partType, value) {
        /** @type {?} */
        var ref = this[key] = this.cloneRangeDate(/** @type {?} */ (this[key]));
        ref[this.getPartTypeIndex(partType)] = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.cloneRangeDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return /** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.initialArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    };
    DateRangePopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-range-popup',
                    template: "<div\r\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\r\n  [ngStyle]=\"popupStyle\">\r\n\r\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\r\n    <div class=\"{{ prefixCls }}-panel\">\r\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\r\n      </ng-container>\r\n      <div class=\"{{ prefixCls }}-date-panel\">\r\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\r\n          <!-- Range Selectors -->\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\r\n          <div class=\"ant-calendar-range-middle\">~</div>\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #tplCalendarInput let-partType=\"partType\">\r\n  <calendar-input\r\n    [value]=\"getValue(partType)\"\r\n    (valueChange)=\"changeValue($event, partType)\"\r\n    [locale]=\"locale\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [format]=\"format\"\r\n    [placeholder]=\"getPlaceholder(partType)\"\r\n  ></calendar-input>\r\n</ng-template>\r\n\r\n<ng-template #tplInnerPopup let-partType=\"partType\">\r\n  <inner-popup\r\n    [showWeek]=\"showWeek\"\r\n    [locale]=\"locale\"\r\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\r\n    [timeOptions]=\"getTimeOptions(partType)\"\r\n    [panelMode]=\"getPanelMode(partType)\"\r\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\r\n    [value]=\"getValueBySelector(partType)\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\r\n    [enableNext]=\"enablePrevNext('next', partType)\"\r\n    (dayHover)=\"onDayHover($event)\"\r\n    (selectDate)=\"changeValueFromSelect($event)\"\r\n    (selectTime)=\"onSelectTime($event, partType)\"\r\n    (headerChange)=\"onHeaderChange($event, partType)\"\r\n  ></inner-popup>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <calendar-footer\r\n    *ngIf=\"hasFooter\"\r\n    [locale]=\"locale\"\r\n    [showToday]=\"showToday\"\r\n    [hasTimePicker]=\"hasTimePicker\"\r\n    [timePickerDisabled]=\"timePickerDisabled()\"\r\n    [okDisabled]=\"okDisabled()\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\r\n    [(showTimePicker)]=\"showTimePicker\"\r\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\r\n    (clickOk)=\"resultOk.emit()\"\r\n    (clickToday)=\"onClickToday($event)\"\r\n  ></calendar-footer>\r\n</ng-template>\r\n\r\n<!-- Single ONLY -->\r\n<ng-template #tplSinglePart>\r\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Range ONLY -->\r\n<ng-template #tplRangePart let-partType=\"partType\">\r\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\r\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\r\n    <div style=\"outline: none;\">\r\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Range ONLY: Range Quick Selector -->\r\n<ng-template #tplRangeQuickSelector>\r\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\r\n    (click)=\"onClickPresetRange(ranges[name])\"\r\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\r\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\r\n  >{{ name }}</a>\r\n</ng-template>"
                }] }
    ];
    DateRangePopupComponent.propDecorators = {
        isRange: [{ type: Input }],
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        disabledTime: [{ type: Input }],
        showToday: [{ type: Input }],
        showTime: [{ type: Input }],
        extraFooter: [{ type: Input }],
        ranges: [{ type: Input }],
        dateRender: [{ type: Input }],
        popupStyle: [{ type: Input }],
        dropdownClassName: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        resultOk: [{ type: Output }],
        closePicker: [{ type: Output }]
    };
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
function DateRangePopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQWF0SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O1FBeUJyRCx1QkFBNEIsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFHeEUsbUJBQXdCLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRXBFLGdCQUFxQixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlDLG1CQUF3QixJQUFJLFlBQVksRUFBUSxDQUFDOztRQUdqRCxpQkFBb0IsY0FBYyxDQUFDO1FBQ25DLHNCQUEwQixLQUFLLENBQUM7MkJBbUJWLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBMEsvQyx5QkFBb0IsVUFBQyxLQUFvQjtZQUN2QyxPQUFPLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0QsQ0FBQTtRQUVELHVCQUFrQixVQUFDLEtBQW9CO1lBQ3JDLE9BQU8sS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3RCxDQUFBOztJQXhMRCxzQkFBSSxrREFBYTtRQUxqQiwwRkFBMEY7UUFFMUYsb0NBQW9DO1FBQ3BDLDRDQUE0QztRQUM1QyxJQUFJOzs7O1FBQ0o7WUFDRSxPQUFPLENBQUMsQ0FB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QUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUUsR0FBRyxDQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2xCOzs7Z0JBcllKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssa0JBQWtCO29CQUMvQix3cklBQThDO2lCQUMvQzs7OzBCQUdFLEtBQUs7MkJBQ0wsS0FBSzt5QkFFTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFFTCxLQUFLO2tDQUNMLE1BQU07d0JBRU4sS0FBSzs4QkFDTCxNQUFNOzJCQUVOLE1BQU07OEJBQ04sTUFBTTs7a0NBN0NUOztTQXFCYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBEaXNhYmxlZERhdGVGbixcclxuICBEaXNhYmxlZFRpbWVDb25maWcsXHJcbiAgRGlzYWJsZWRUaW1lRm4sXHJcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcclxuICBQYW5lbE1vZGUsXHJcbiAgUHJlc2V0UmFuZ2VzLFxyXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xyXG59IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XHJcbmltcG9ydCB7IGdldFRpbWVDb25maWcsIGlzQWxsb3dlZERhdGUgfSBmcm9tICcuLi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnZGF0ZS1yYW5nZS1wb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcclxuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhbmdlczogRnVuY3Rpb25Qcm9wPFByZXNldFJhbmdlcz47XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBAT3V0cHV0KCkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIEBPdXRwdXQoKSBjbG9zZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gTm90aWZ5IG91dHNpZGUgdG8gY2xvc2UgdGhlIHBpY2tlciBwYW5lbFxyXG4gIC8vIEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB0aGUgZGF0ZSBpcyBzZWxlY3RlZCBieSBjbGljayB0aGUgZGF0ZSBwYW5lbCAoaWYgaXNSYW5nZSwgdGhlIHJldHVybmVkIGRhdGUgaXMgZnJvbSBvbmUgb2YgdGhlIHJhbmdlIHBhcnRzKVxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGltZU9wdGlvbnM6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IFN1cHBvcnRUaW1lT3B0aW9uc1tdO1xyXG4gIC8vIHZhbHVlRm9yU2VsZWN0b3I6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgdmFsdWVGb3JSYW5nZVNob3c6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIC8vIGluaXRpYWxWYWx1ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpOyAvLyBJbml0aWFsIGRhdGUgdG8gc2hvdyB3aGVuIG5vIHZhbHVlIGlucHV0c1xyXG5cclxuICAvLyBnZXQgdmFsdWVPckluaXRpYWwoKTogQ2FuZHlEYXRlIHtcclxuICAvLyAgIHJldHVybiB0aGlzLnZhbHVlIHx8IHRoaXMuaW5pdGlhbFZhbHVlO1xyXG4gIC8vIH1cclxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1RvZGF5IHx8IHRoaXMuaGFzVGltZVBpY2tlciB8fCAhIXRoaXMuZXh0cmFGb290ZXIgfHwgISF0aGlzLnJhbmdlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFydFR5cGVNYXAgPSB7ICdsZWZ0JzogMCwgJ3JpZ2h0JzogMSB9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEluaXRpYWxpemF0aW9uIGZvciByYW5nZSBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgZXJyb3JzIHdoaWxlIGxhdGVyIGFzc2lnbm1lbnRcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgWyAncGxhY2Vob2xkZXInLCAncGFuZWxNb2RlJywgJ3NlbGVjdGVkVmFsdWUnLCAnaG92ZXJWYWx1ZScgXS5mb3JFYWNoKChwcm9wKSA9PiB0aGlzLmluaXRpYWxBcnJheShwcm9wKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7IC8vIFJlLWluaXRpYWxpemUgYWxsIHJlbGF0ZWQgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdyB0aW1lIHBpY2tlciB3aGVuIGFzc2lnbmVkIHBhbmVsIG1vZGUgYXMgXCJ0aW1lXCJcclxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSAmJiB0aGlzLmhhc1RpbWVQaWNrZXIpIHtcclxuICAgICAgdGhpcy5zaG93VGltZVBpY2tlciA9IHRoaXMucGFuZWxNb2RlID09PSAndGltZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNob3dUaW1lUGlja2VyQ2hhbmdlKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlID0gc2hvdyA/ICd0aW1lJyA6ICdkYXRlJztcclxuICAgIC8vIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChzaG93ID8gJ3RpbWUnIDogJ2RhdGUnKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7IC8vIFNob3cgdG9kYXkgaXMgbm90IHN1cHBvcnQgYnkgcmFuZ2VcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdcIm56U2hvd1RvZGF5XCIgaXMgbm90IHN1cHBvcnQgZm9yIFwiUmFuZ2VQaWNrZXJcIiEnKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDsgLy8gQ2xlYXIgY3VycmVudCB2YWx1ZSB0byBub3Qgc3luYyB0aW1lIGJ5IG5leHQgc3RlcFxyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VQaWNrZXJQYW5lbCgpO1xyXG4gIH1cclxuXHJcbiAgb25EYXlIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZVsgMCBdICYmICF0aGlzLnNlbGVjdGVkVmFsdWVbIDEgXSkgeyAvLyBXaGVuIHJpZ2h0IHZhbHVlIGlzIHNlbGVjdGVkLCBkb24ndCBkbyBob3ZlclxyXG4gICAgICBjb25zdCBiYXNlID0gdGhpcy5zZWxlY3RlZFZhbHVlWyAwIF07IC8vIFVzZSB0aGUgbGVmdCBvZiBzZWxlY3RlZCB2YWx1ZSBhcyB0aGUgYmFzZSB0byBkZWNpZGUgbGF0ZXIgaG92ZXJWYWx1ZVxyXG4gICAgICBpZiAoYmFzZS5pc0JlZm9yZSh2YWx1ZSwgJ2RheScpKSB7XHJcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gWyBiYXNlLCB2YWx1ZSBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFsgdmFsdWUsIGJhc2UgXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgKHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZVtdKVsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdID0gbW9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcclxuICAgIH1cclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xyXG4gIH1cclxuXHJcbiAgb25IZWFkZXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3dbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWVGb3JSYW5nZVNob3cpOyAvLyBTaG91bGQgYWx3YXlzIHRha2UgY2FyZSBvZiBzdGFydC9lbmRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XHJcbiAgICAgIG5ld1ZhbHVlWyBpbmRleCBdID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgbmV3VmFsdWVbIGluZGV4IF0pO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKSB8fCBuZXcgQ2FuZHlEYXRlKCkpKTsgLy8gSWYgbm90IHNlbGVjdCBhIGRhdGUgY3VycmVudGx5LCB1c2UgdG9kYXlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZVsgaW5kZXggXSA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbGlkUmFuZ2UodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgWyBsZWZ0LCByaWdodCBdID0gdGhpcy5zZWxlY3RlZFZhbHVlIGFzIENhbmR5RGF0ZVtdOyAvLyBOT1RFOiB0aGUgbGVmdC9yaWdodCBtYXliZSBub3QgdGhlIHNlcXVlbmNlIGl0IHNlbGVjdCBhdCB0aGUgZGF0ZSBwYW5lbHNcclxuXHJcbiAgICAgIGlmICgoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCkpIHsgLy8gSWYgdG90YWxseSBmdWxsIG9yIGVtcHR5LCBjbGVhbiB1cCAmJiByZS1hc3NpZ24gbGVmdCBmaXJzdFxyXG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IFsgdmFsdWUgXTtcclxuICAgICAgfSBlbHNlIGlmIChsZWZ0ICYmICFyaWdodCkgeyAvLyBJZiBvbmUgb2YgdGhlbSBpcyBlbXB0eSwgYXNzaWduIHRoZSBvdGhlciBvbmUgYW5kIHNvcnQsIHRoZW4gc2V0IHRoZSBmaW5hbCB2YWx1ZXNcclxuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpOyAvLyBDbGVhbiB1cFxyXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSgnc2VsZWN0ZWRWYWx1ZScsICdyaWdodCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNvcnRSYW5nZVZhbHVlKCdzZWxlY3RlZFZhbHVlJyk7IC8vIFNvcnRcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVQcmV2TmV4dChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JywgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdGhpcy52YWx1ZUZvclJhbmdlU2hvdztcclxuICAgICAgY29uc3Qgc2hvd01pZGRsZSA9ICFzdGFydC5hZGRNb250aHMoMSkuaXNTYW1lKGVuZCwgJ21vbnRoJyk7IC8vIE9uZSBtb250aCBkaWZmIHRoZW4gZG9uJ3Qgc2hvdyBtaWRkbGUgcHJldi9uZXh0XHJcbiAgICAgIGlmICgocGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHBhcnRUeXBlID09PSAncmlnaHQnICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSkge1xyXG4gICAgICAgIHJldHVybiBzaG93TWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbE1vZGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogUGFuZWxNb2RlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlWyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF0gYXMgUGFuZWxNb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBzaW5nbGUgdmFsdWUgb3IgcGFydCB2YWx1ZSBvZiBhIHJhbmdlXHJcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlQnlTZWxlY3RvcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZVNob3cgPSB0aGlzLnNob3dUaW1lUGlja2VyID8gdGhpcy52YWx1ZSA6IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7IC8vIFVzZSB0aGUgcmVhbCB0aW1lIHZhbHVlIHRoYXQgd2l0aG91dCBkZWNvcmF0aW9ucyB3aGVuIHRpbWVwaWNrZXIgaXMgc2hvd24gdXBcclxuICAgICAgcmV0dXJuIHZhbHVlU2hvd1sgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0VHlwZU1hcFsgcGFydFR5cGUgXTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdIDogdGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVsgMSBdICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWyAwIF07XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlZFN0YXJ0VGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRFbmRUaW1lID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlWyAwIF0gJiYgc2VsZWN0ZWRWYWx1ZVsgMSBdKSB7XHJcbiAgICAgIHJldHVybiBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbIDAgXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXHJcbiAgICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWyAxIF0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0aW1lUGlja2VyRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2tEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuICF0aGlzLmlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKSB8fCAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAhaXNBbGxvd2VkRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGltZU9wdGlvbnMocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMudGltZU9wdGlvbnNbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA6IHRoaXMudGltZU9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tQcmVzZXRSYW5nZSh2YWw6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLnNldFZhbHVlKFsgbmV3IENhbmR5RGF0ZSh2YWx1ZVsgMCBdKSwgbmV3IENhbmR5RGF0ZSh2YWx1ZVsgMSBdKSBdKTtcclxuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogRGF0ZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSAoWyBuZXcgQ2FuZHlEYXRlKHZhbFsgMCBdKSwgbmV3IENhbmR5RGF0ZSh2YWxbIDEgXSkgXSk7XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3RLZXlzKG9iajogb2JqZWN0KTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQaWNrZXJQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VQaWNrZXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckhvdmVyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRUaW1lT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIGNvbnN0IHNob3dUaW1lID0gdHlwZW9mIHRoaXMuc2hvd1RpbWUgPT09ICdvYmplY3QnID8gdGhpcy5zaG93VGltZSA6IHt9O1xyXG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFsgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlWyAwIF0sICdzdGFydCcpLCB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHRoaXMudmFsdWVbIDEgXSwgJ2VuZCcpIF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy52YWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpbWVPcHRpb25zID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcnJpZGVUaW1lT3B0aW9ucyhvcmlnaW46IFN1cHBvcnRUaW1lT3B0aW9ucywgdmFsdWU6IENhbmR5RGF0ZSwgcGFydGlhbD86IERpc2FibGVkVGltZVBhcnRpYWwpOiBTdXBwb3J0VGltZU9wdGlvbnMge1xyXG4gICAgbGV0IGRpc2FibGVkVGltZUZuO1xyXG4gICAgaWYgKHBhcnRpYWwpIHtcclxuICAgICAgZGlzYWJsZWRUaW1lRm4gPSBwYXJ0aWFsID09PSAnc3RhcnQnID8gdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSA6IHRoaXMuZGlzYWJsZWRFbmRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzYWJsZWRUaW1lRm4gPSB0aGlzLmRpc2FibGVkVGltZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLm9yaWdpbiwgLi4uZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lRm4pIH07XHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdmFsdWUgYW5kIHRyaWdnZXIgY2hhbmdlIGV2ZW50XHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgLy8gVE9ETzogU3luYyBvcmlnaW5hbCB0aW1lIChOT1RFOiB0aGlzIHNob3VsZCB0YWtlIG1vcmUgY2FyZSBvZiBiZWFjdXNlIGl0IG1heSBkZXBlbmQgb24gbWFueSBjaGFuZ2Ugc291cmNlcylcclxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgIC8vICAgLy8gVE9ETzogU3luYyB0aW1lXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBpZiAodGhpcy52YWx1ZSkgeyAvLyBTeW5jIHRpbWUgZnJvbSB0aGUgb3JpZ2luYWwgb25lIGlmIGl0J3MgYXZhaWxhYmxlXHJcbiAgICAvLyAgICAgbmV3VmFsdWUgPSB0aGlzLm92ZXJyaWRlSG1zKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCBuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG5cclxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVycmlkZUhtcyhmcm9tOiBDYW5keURhdGUsIHRvOiBDYW5keURhdGUpOiBDYW5keURhdGUge1xyXG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0by5zZXRIbXMoZnJvbS5nZXRIb3VycygpLCBmcm9tLmdldE1pbnV0ZXMoKSwgZnJvbS5nZXRTZWNvbmRzKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHJhbmdlIHZhbHVlXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkUmFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgWyBzdGFydCwgZW5kIF0gPSB2YWx1ZTtcclxuICAgICAgY29uc3QgZ3JhaW4gPSB0aGlzLmhhc1RpbWVQaWNrZXIgPyAnc2Vjb25kJyA6ICdkYXknO1xyXG4gICAgICByZXR1cm4gc3RhcnQgJiYgZW5kICYmIChzdGFydC5pc0JlZm9yZShlbmQsIGdyYWluKSB8fCBzdGFydC5pc1NhbWUoZW5kLCBncmFpbikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemVSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcclxuICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdmFsdWU7XHJcbiAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IHx8IG5ldyBDYW5keURhdGUoKTtcclxuICAgIGNvbnN0IG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lKG5ld1N0YXJ0LCAnbW9udGgnKSA/IGVuZC5hZGRNb250aHMoMSkgOiBlbmQgfHwgbmV3U3RhcnQuYWRkTW9udGhzKDEpO1xyXG4gICAgcmV0dXJuIFsgbmV3U3RhcnQsIG5ld0VuZCBdO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpc0VtcHR5UmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gU29ydCBhIHJhbmdlIHZhbHVlIChhY2N1cmF0ZSB0byBzZWNvbmQpXHJcbiAgcHJpdmF0ZSBzb3J0UmFuZ2VWYWx1ZShrZXk6ICdzZWxlY3RlZFZhbHVlJyk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpc1sga2V5IF0pKSB7XHJcbiAgICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdGhpc1sga2V5IF07XHJcbiAgICAgIGlmIChzdGFydCAmJiBlbmQgJiYgc3RhcnQuaXNBZnRlcihlbmQsICdkYXknKSkge1xyXG4gICAgICAgIHRoaXNbIGtleSBdID0gWyBlbmQsIHN0YXJ0IF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbmV3IGFuZCBzZXQgYSByYW5nZSB2YWx1ZSB0byB0cmlnZ2VyIHN1Yi1jb21wb25lbnQncyBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgcHJpdmF0ZSBzZXRSYW5nZVZhbHVlKGtleTogJ3ZhbHVlJyB8ICdzZWxlY3RlZFZhbHVlJywgcGFydFR5cGU6IFJhbmdlUGFydFR5cGUsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlZiA9IHRoaXNbIGtleSBdID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzWyBrZXkgXSBhcyBDYW5keURhdGVbXSk7XHJcbiAgICByZWZbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9uZVJhbmdlRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XHJcbiAgICByZXR1cm4gWyB2YWx1ZVsgMCBdICYmIHZhbHVlWyAwIF0uY2xvbmUoKSwgdmFsdWVbIDEgXSAmJiB2YWx1ZVsgMSBdLmNsb25lKCkgXSBhcyBDYW5keURhdGVbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbEFycmF5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXNbIGtleSBdIHx8ICFBcnJheS5pc0FycmF5KHRoaXNbIGtleSBdKSkge1xyXG4gICAgICB0aGlzWyBrZXkgXSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XHJcbiJdfQ==