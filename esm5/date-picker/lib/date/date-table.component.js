/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
import { valueFunctionProp } from '../../../core/util/convert';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
var DATE_ROW_NUM = 6;
/** @type {?} */
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some(function (value, index) { return !_this.isSameDate(previousValue_1[index], value); });
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue_1), currentValue);
            }
        }
        return false;
    };
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var firstDayOfWeek = this.getFirstDayOfWeek();
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            var day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            var tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @return {?}
     */
    function () {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfWeek = this.getFirstDayOfWeek();
        /** @type {?} */
        var firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        var firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        var increased = 0;
        for (var rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            var week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                var isBeforeMonthYear = this_1.isBeforeMonthYear(current, this_1.value);
                /** @type {?} */
                var isAfterMonthYear = this_1.isAfterMonthYear(current, this_1.value);
                /** @type {?} */
                var cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this_1.getDateTitle(current),
                    customContent: valueFunctionProp(this_1.dateRender, current),
                    // Customized content
                    content: "" + current.getDate(),
                    onClick: function () { return _this.changeValueFromInside(current); },
                    onMouseEnter: function () { return _this.dayHover.emit(cell.value); }
                };
                if (this_1.showWeek && !week.weekNum) {
                    week.weekNum = this_1.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    /** @type {?} */
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    /** @type {?} */
                    var start = rangeValue[0];
                    /** @type {?} */
                    var end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this_1.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = isBeforeMonthYear,
                    _a[this_1.prefixCls + "-next-month-btn-day"] = isAfterMonthYear,
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                week.dateCells.push(cell);
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                _loop_1(colIndex);
            }
            week.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = week.isCurrent,
                _a[this.prefixCls + "-active-week"] = week.isActive,
                _a);
        }
        return weekRows;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getDateTitle = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getWeekNum = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isBeforeMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isAfterMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\"\r\n        role=\"columnheader\"\r\n        title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td\r\n        *ngFor=\"let cell of row.dateCells\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\r\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        title=\"{{ cell.title }}\"\r\n        [ngClass]=\"cell.classMap\"\r\n        role=\"gridcell\"\r\n      >\r\n\r\n        <ng-container [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\r\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\r\n            <span [innerHTML]=\"cell.customContent\"></span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <div\r\n              class=\"{{ prefixCls }}-date\"\r\n              [attr.aria-selected]=\"cell.isSelected\"\r\n              [attr.aria-disabled]=\"cell.isDisabled\"\r\n            >\r\n              {{ cell.content }}\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    DateTableComponent.propDecorators = {
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        dayHover: [{ type: Output }]
    };
    return DateTableComponent;
}());
export { DateTableComponent };
function DateTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.value;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function WeekDayLabel() { }
function WeekDayLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
function DateCell_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.customContent;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /** @type {?} */
    DateCell.prototype.onClick;
    /** @type {?} */
    DateCell.prototype.onMouseEnter;
}
/**
 * @record
 */
export function WeekRow() { }
function WeekRow_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFDdkIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDOztJQTJCckIsNEJBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFmdkMsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFNdEQsZ0JBQXFCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbkQsaUJBQW9CLGNBQWMsQ0FBQztRQUluQyxxQkFBZ0IsYUFBYSxDQUFDO1FBQzlCLHdCQUFtQixnQkFBZ0IsQ0FBQztLQUVROzs7O0lBRTVDLHFDQUFROzs7SUFBUixlQUFvQjs7Ozs7SUFFcEIsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sVUFBTztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxrQkFBZTtZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxlQUFZLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7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QUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7SUFHbEYsNkNBQWdCOzs7OztjQUFDLE9BQWtCLEVBQUUsTUFBaUI7UUFDNUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7O2dCQXZOM0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwrakVBQXdDO2lCQUN6Qzs7OztnQkFUUSxhQUFhOzs7Z0NBWW5CLEtBQUs7NkJBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07MkJBRU4sS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBRUwsTUFBTTs7NkJBM0JUOztTQWdCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xyXG5cclxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcclxuY29uc3QgREFURV9DT0xfTlVNID0gNztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjsgLy8gQ3VzdG9taXplIGRhdGUgY29udGVudCB3aGlsZSByZW5kZXJpbmdcclxuXHJcbiAgQE91dHB1dCgpIGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XHJcbiAgd2Vla1Jvd3M6IFdlZWtSb3dbXTtcclxuXHJcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XHJcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy52YWx1ZSkgfHxcclxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxyXG4gICAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpKSB7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUubGVuZ3RoICE9PSBwcmV2aW91c1ZhbHVlLmxlbmd0aCB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlW2luZGV4XSwgdmFsdWUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZShsZWZ0LCAnZGF5JykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLmhlYWRXZWVrRGF5cyA9IHRoaXMubWFrZUhlYWRXZWVrRGF5cygpO1xyXG4gICAgICB0aGlzLndlZWtSb3dzID0gdGhpcy5tYWtlV2Vla1Jvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAvLyB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XHJcbiAgICBjb25zdCB3ZWVrRGF5czogV2Vla0RheUxhYmVsW10gPSBbXTtcclxuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gdGhpcy5nZXRGaXJzdERheU9mV2VlaygpO1xyXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcclxuICAgICAgY29uc3QgZGF5ID0gKGZpcnN0RGF5T2ZXZWVrICsgY29sSW5kZXgpICUgREFURV9DT0xfTlVNO1xyXG4gICAgICBjb25zdCB0ZW1wRGF0ZSA9IHRoaXMudmFsdWUuc2V0RGF5KGRheSk7XHJcbiAgICAgIHdlZWtEYXlzWyBjb2xJbmRleCBdID0ge1xyXG4gICAgICAgIHNob3J0OiB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh0ZW1wRGF0ZS5uYXRpdmVEYXRlLCAnRScpLCAvLyBlZy4gVHVlXHJcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh0ZW1wRGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSkgLy8gZWcuIFR1XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2Vla0RheXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VXZWVrUm93cygpOiBXZWVrUm93W10ge1xyXG4gICAgLy8gbGV0IGp1c3RSZW5kZXJlZCA9IHRydWU7XHJcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XHJcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICAgIGNvbnN0IGZpcnN0RGF0ZU9mTW9udGggPSB0aGlzLnZhbHVlLnNldERhdGUoMSk7XHJcbiAgICAvLyBjb25zdCBmaXJzdERhdGVUb1Nob3cgPSBmaXJzdERhdGVPZk1vbnRoLnNldERheShmaXJzdERheU9mV2VlaywgeyB3ZWVrU3RhcnRzT246IGZpcnN0RGF5T2ZXZWVrIH0pO1xyXG4gICAgY29uc3QgZmlyc3REYXRlT2Zmc2V0ID0gKGZpcnN0RGF0ZU9mTW9udGguZ2V0RGF5KCkgKyA3IC0gZmlyc3REYXlPZldlZWspICUgNztcclxuICAgIGNvbnN0IGZpcnN0RGF0ZVRvU2hvdyA9IGZpcnN0RGF0ZU9mTW9udGguYWRkRGF5cygwIC0gZmlyc3REYXRlT2Zmc2V0KTtcclxuXHJcbiAgICBsZXQgaW5jcmVhc2VkID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBEQVRFX1JPV19OVU07IHJvd0luZGV4ICsrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWs6IFdlZWtSb3cgPSB3ZWVrUm93c1tyb3dJbmRleF0gPSB7XHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGlzQ3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgZGF0ZUNlbGxzOiBbXVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gZmlyc3REYXRlVG9TaG93LmFkZERheXMoaW5jcmVhc2VkICsrKTtcclxuICAgICAgICBjb25zdCBpc0JlZm9yZU1vbnRoWWVhciA9IHRoaXMuaXNCZWZvcmVNb250aFllYXIoY3VycmVudCwgdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgaXNBZnRlck1vbnRoWWVhciA9IHRoaXMuaXNBZnRlck1vbnRoWWVhcihjdXJyZW50LCB0aGlzLnZhbHVlKTtcclxuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcclxuICAgICAgICAgIHZhbHVlOiBjdXJyZW50LFxyXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0RGF0ZVRpdGxlKGN1cnJlbnQpLFxyXG4gICAgICAgICAgY3VzdG9tQ29udGVudDogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlUmVuZGVyLCBjdXJyZW50KSwgLy8gQ3VzdG9taXplZCBjb250ZW50XHJcbiAgICAgICAgICBjb250ZW50OiBgJHtjdXJyZW50LmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoY3VycmVudCksXHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKVxyXG4gICAgICAgICAgLy8gb25Nb3VzZUVudGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmICghanVzdFJlbmRlcmVkKSB7IC8vIFtIYWNrXSBUbyBwcmV2ZW50IHRoZSBpbW1lZGlhdGVseSBcIm1vdXNlZW50ZXJcIiBldmVudCB3aGVuIGl0IGp1c3QgcmVuZGVyZWQsIG9yIHRoZSBcImhvdmVyVmFsdWVcIiBtYXkgYWx3YXlzIHNhaWQgYXMgY2hhbmdlZFxyXG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBqdXN0UmVuZGVyZWQgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhd2Vlay53ZWVrTnVtKSB7XHJcbiAgICAgICAgICB3ZWVrLndlZWtOdW0gPSB0aGlzLmdldFdlZWtOdW0oY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudC5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgIGNlbGwuaXNUb2RheSA9IHRydWU7XHJcbiAgICAgICAgICB3ZWVrLmlzQ3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmICFpc0JlZm9yZU1vbnRoWWVhciAmJiAhaXNBZnRlck1vbnRoWWVhcikgeyAvLyBSYW5nZSBzZWxlY3Rpb25zXHJcbiAgICAgICAgICBjb25zdCByYW5nZVZhbHVlID0gdGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaG92ZXJWYWx1ZS5sZW5ndGggPyB0aGlzLmhvdmVyVmFsdWUgOiB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xyXG4gICAgICAgICAgaWYgKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzU2FtZShzdGFydCwgJ2RheScpKSB7XHJcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmQpIHtcclxuICAgICAgICAgICAgICBpZiAoY3VycmVudC5pc1NhbWUoZW5kLCAnZGF5JykpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0FmdGVyKHN0YXJ0LCAnZGF5JykgJiYgY3VycmVudC5pc0JlZm9yZShlbmQsICdkYXknKSkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc1NhbWUodGhpcy52YWx1ZSwgJ2RheScpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGUgJiYgdGhpcy5kaXNhYmxlZERhdGUoY3VycmVudC5uYXRpdmVEYXRlKSkge1xyXG4gICAgICAgICAgY2VsbC5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIC8vIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZGF0ZWBdOiBmYWxzZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdG9kYXlgXTogY2VsbC5pc1RvZGF5LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogaXNCZWZvcmVNb250aFllYXIsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtbW9udGgtYnRuLWRheWBdOiBpc0FmdGVyTW9udGhZZWFyLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1kYXlgXTogY2VsbC5pc1NlbGVjdGVkLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtc3RhcnQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZW5kLWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRFbmREYXRlLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3ZWVrLmRhdGVDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3ZWVrLmNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY3VycmVudC13ZWVrYF06IHdlZWsuaXNDdXJyZW50LFxyXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYWN0aXZlLXdlZWtgXTogd2Vlay5pc0FjdGl2ZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWtSb3dzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuZmlyc3REYXlPZldlZWsodGhpcy5pMThuLmdldExvY2FsZUlkKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRlVGl0bGUoZGF0ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLm5hdGl2ZURhdGUsICdsb25nRGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXZWVrTnVtKGRhdGU6IENhbmR5RGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gK3RoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUubmF0aXZlRGF0ZSwgJ3cnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNCZWZvcmVNb250aFllYXIoY3VycmVudDogQ2FuZHlEYXRlLCB0YXJnZXQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpIDwgdGFyZ2V0LmdldFllYXIoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPCB0YXJnZXQuZ2V0TW9udGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBZnRlck1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY3VycmVudC5nZXRZZWFyKCkgPiB0YXJnZXQuZ2V0WWVhcigpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnQuZ2V0WWVhcigpID09PSB0YXJnZXQuZ2V0WWVhcigpICYmIGN1cnJlbnQuZ2V0TW9udGgoKSA+IHRhcmdldC5nZXRNb250aCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5TGFiZWwge1xyXG4gIHNob3J0OiBzdHJpbmc7XHJcbiAgdmVyeVNob3J0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGwge1xyXG4gIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjdXN0b21Db250ZW50OiBUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZEVuZERhdGU/OiBib29sZWFuO1xyXG4gIGlzSW5SYW5nZT86IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XHJcbiAgb25DbGljayhkYXRlOiBDYW5keURhdGUpOiB2b2lkO1xyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtSb3cge1xyXG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cclxuICBpc0FjdGl2ZT86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgY3VycmVudCBzZXR0aW5nIGRhdGUgc3RheXMgaW5cclxuICB3ZWVrTnVtPzogbnVtYmVyO1xyXG4gIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gIGRhdGVDZWxsczogRGF0ZUNlbGxbXTtcclxufVxyXG4iXX0=