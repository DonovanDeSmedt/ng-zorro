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
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
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
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    }
    /**
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => !this.isSameDate(previousValue[index], value));
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue), currentValue);
            }
        }
        return false;
    }
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            const tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @return {?}
     */
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    /**
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        /** @type {?} */
        const firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        const firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        const firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        let increased = 0;
        for (let rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            const week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                const current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                const isBeforeMonthYear = this.isBeforeMonthYear(current, this.value);
                /** @type {?} */
                const isAfterMonthYear = this.isAfterMonthYear(current, this.value);
                /** @type {?} */
                const cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this.getDateTitle(current),
                    customContent: valueFunctionProp(this.dateRender, current),
                    // Customized content
                    content: `${current.getDate()}`,
                    onClick: () => this.changeValueFromInside(current),
                    onMouseEnter: () => this.dayHover.emit(cell.value)
                };
                if (this.showWeek && !week.weekNum) {
                    week.weekNum = this.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
                    const end = rangeValue[1];
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
                else if (current.isSame(this.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: isBeforeMonthYear,
                    [`${this.prefixCls}-next-month-btn-day`]: isAfterMonthYear,
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                week.dateCells.push(cell);
            }
            week.classMap = {
                [`${this.prefixCls}-current-week`]: week.isCurrent,
                [`${this.prefixCls}-active-week`]: week.isActive
            };
        }
        return weekRows;
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateTitle(date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNum(date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isBeforeMonthYear(current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isAfterMonthYear(current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    }
}
DateTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-table',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\"\r\n        role=\"columnheader\"\r\n        title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td\r\n        *ngFor=\"let cell of row.dateCells\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\r\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        title=\"{{ cell.title }}\"\r\n        [ngClass]=\"cell.classMap\"\r\n        role=\"gridcell\"\r\n      >\r\n\r\n        <ng-container [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\r\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\r\n            <span [innerHTML]=\"cell.customContent\"></span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <div\r\n              class=\"{{ prefixCls }}-date\"\r\n              [attr.aria-selected]=\"cell.isSelected\"\r\n              [attr.aria-disabled]=\"cell.isDisabled\"\r\n            >\r\n              {{ cell.content }}\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
            }] }
];
/** @nocollapse */
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBT3ZCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFvQjdCLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFmdkMsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFNdEQsZ0JBQXFCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbkQsaUJBQW9CLGNBQWMsQ0FBQztRQUluQyxxQkFBZ0IsYUFBYSxDQUFDO1FBQzlCLHdCQUFtQixnQkFBZ0IsQ0FBQztLQUVROzs7O0lBRTVDLFFBQVEsTUFBWTs7Ozs7SUFFcEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sVUFBTztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxrQkFBZTtZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxlQUFZLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFD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Q2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0lBRzdDLGlCQUFpQixDQUFDLE9BQWtCLEVBQUUsTUFBaUI7UUFDN0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7OztJQUdsRixnQkFBZ0IsQ0FBQyxPQUFrQixFQUFFLE1BQWlCO1FBQzVELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7WUF2TjNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK2pFQUF3QzthQUN6Qzs7OztZQVRRLGFBQWE7Ozs0QkFZbkIsS0FBSzt5QkFDTCxLQUFLO29CQUVMLEtBQUs7MEJBQ0wsTUFBTTt1QkFFTixLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcclxuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcclxuXHJcbmNvbnN0IERBVEVfUk9XX05VTSA9IDY7XHJcbmNvbnN0IERBVEVfQ09MX05VTSA9IDc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGUtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47IC8vIEN1c3RvbWl6ZSBkYXRlIGNvbnRlbnQgd2hpbGUgcmVuZGVyaW5nXHJcblxyXG4gIEBPdXRwdXQoKSBkYXlIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xyXG4gIHdlZWtSb3dzOiBXZWVrUm93W107XHJcblxyXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xyXG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuc2VsZWN0ZWRWYWx1ZSkgfHxcclxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKSkge1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+ICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZVtpbmRleF0sIHZhbHVlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWUobGVmdCwgJ2RheScpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5oZWFkV2Vla0RheXMgPSB0aGlzLm1ha2VIZWFkV2Vla0RheXMoKTtcclxuICAgICAgdGhpcy53ZWVrUm93cyA9IHRoaXMubWFrZVdlZWtSb3dzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgLy8gdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIC8vIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXMoKTogV2Vla0RheUxhYmVsW10ge1xyXG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XHJcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBEQVRFX0NPTF9OVU07IGNvbEluZGV4ICsrKSB7XHJcbiAgICAgIGNvbnN0IGRheSA9IChmaXJzdERheU9mV2VlayArIGNvbEluZGV4KSAlIERBVEVfQ09MX05VTTtcclxuICAgICAgY29uc3QgdGVtcERhdGUgPSB0aGlzLnZhbHVlLnNldERheShkYXkpO1xyXG4gICAgICB3ZWVrRGF5c1sgY29sSW5kZXggXSA9IHtcclxuICAgICAgICBzaG9ydDogdGhpcy5pMThuLmZvcm1hdERhdGUodGVtcERhdGUubmF0aXZlRGF0ZSwgJ0UnKSwgLy8gZWcuIFR1ZVxyXG4gICAgICAgIHZlcnlTaG9ydDogdGhpcy5pMThuLmZvcm1hdERhdGUodGVtcERhdGUubmF0aXZlRGF0ZSwgdGhpcy5nZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCkpIC8vIGVnLiBUdVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWtEYXlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZUlkKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd6aCcpID09PSAwID8gJ0VFRUVFJyA6ICdFRUVFRUUnOyAvLyBVc2UgZXh0cmVtZSBzaG9ydCBmb3IgY2hpbmVzZVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcclxuICAgIC8vIGxldCBqdXN0UmVuZGVyZWQgPSB0cnVlO1xyXG4gICAgY29uc3Qgd2Vla1Jvd3M6IFdlZWtSb3dbXSA9IFtdO1xyXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCk7XHJcbiAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy52YWx1ZS5zZXREYXRlKDEpO1xyXG4gICAgLy8gY29uc3QgZmlyc3REYXRlVG9TaG93ID0gZmlyc3REYXRlT2ZNb250aC5zZXREYXkoZmlyc3REYXlPZldlZWssIHsgd2Vla1N0YXJ0c09uOiBmaXJzdERheU9mV2VlayB9KTtcclxuICAgIGNvbnN0IGZpcnN0RGF0ZU9mZnNldCA9IChmaXJzdERhdGVPZk1vbnRoLmdldERheSgpICsgNyAtIGZpcnN0RGF5T2ZXZWVrKSAlIDc7XHJcbiAgICBjb25zdCBmaXJzdERhdGVUb1Nob3cgPSBmaXJzdERhdGVPZk1vbnRoLmFkZERheXMoMCAtIGZpcnN0RGF0ZU9mZnNldCk7XHJcblxyXG4gICAgbGV0IGluY3JlYXNlZCA9IDA7XHJcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgREFURV9ST1dfTlVNOyByb3dJbmRleCArKykge1xyXG4gICAgICBjb25zdCB3ZWVrOiBXZWVrUm93ID0gd2Vla1Jvd3Nbcm93SW5kZXhdID0ge1xyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGRhdGVDZWxsczogW11cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBEQVRFX0NPTF9OVU07IGNvbEluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGZpcnN0RGF0ZVRvU2hvdy5hZGREYXlzKGluY3JlYXNlZCArKyk7XHJcbiAgICAgICAgY29uc3QgaXNCZWZvcmVNb250aFllYXIgPSB0aGlzLmlzQmVmb3JlTW9udGhZZWFyKGN1cnJlbnQsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGlzQWZ0ZXJNb250aFllYXIgPSB0aGlzLmlzQWZ0ZXJNb250aFllYXIoY3VycmVudCwgdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY2VsbDogRGF0ZUNlbGwgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCxcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldERhdGVUaXRsZShjdXJyZW50KSxcclxuICAgICAgICAgIGN1c3RvbUNvbnRlbnQ6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZVJlbmRlciwgY3VycmVudCksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxyXG4gICAgICAgICAgY29udGVudDogYCR7Y3VycmVudC5nZXREYXRlKCl9YCxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKGN1cnJlbnQpLFxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoY2VsbC52YWx1ZSlcclxuICAgICAgICAgIC8vIG9uTW91c2VFbnRlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAoIWp1c3RSZW5kZXJlZCkgeyAvLyBbSGFja10gVG8gcHJldmVudCB0aGUgaW1tZWRpYXRlbHkgXCJtb3VzZWVudGVyXCIgZXZlbnQgd2hlbiBpdCBqdXN0IHJlbmRlcmVkLCBvciB0aGUgXCJob3ZlclZhbHVlXCIgbWF5IGFsd2F5cyBzYWlkIGFzIGNoYW5nZWRcclxuICAgICAgICAgICAgICAvLyB0aGlzLmRheUhvdmVyLmVtaXQoY2VsbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8ganVzdFJlbmRlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXdlZWsud2Vla051bSkge1xyXG4gICAgICAgICAgd2Vlay53ZWVrTnVtID0gdGhpcy5nZXRXZWVrTnVtKGN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQuaXNUb2RheSgpKSB7XHJcbiAgICAgICAgICBjZWxsLmlzVG9kYXkgPSB0cnVlO1xyXG4gICAgICAgICAgd2Vlay5pc0N1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlKSAmJiAhaXNCZWZvcmVNb250aFllYXIgJiYgIWlzQWZ0ZXJNb250aFllYXIpIHsgLy8gUmFuZ2Ugc2VsZWN0aW9uc1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSByYW5nZVZhbHVlWzBdO1xyXG4gICAgICAgICAgY29uc3QgZW5kID0gcmFuZ2VWYWx1ZVsxXTtcclxuICAgICAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc1NhbWUoc3RhcnQsICdkYXknKSkge1xyXG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB3ZWVrLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNTYW1lKGVuZCwgJ2RheScpKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3ZWVrLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuaXNBZnRlcihzdGFydCwgJ2RheScpICYmIGN1cnJlbnQuaXNCZWZvcmUoZW5kLCAnZGF5JykpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuaXNTYW1lKHRoaXMudmFsdWUsICdkYXknKSkge1xyXG4gICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGN1cnJlbnQubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICAvLyBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRhdGVgXTogZmFsc2UsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRvZGF5YF06IGNlbGwuaXNUb2RheSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGlzQmVmb3JlTW9udGhZZWFyLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogaXNBZnRlck1vbnRoWWVhcixcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZGF5YF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWVuZC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2Vlay5kYXRlQ2VsbHMucHVzaChjZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2Vlay5jbGFzc01hcCA9IHtcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtd2Vla2BdOiB3ZWVrLmlzQ3VycmVudCxcclxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWFjdGl2ZS13ZWVrYF06IHdlZWsuaXNBY3RpdmVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrUm93cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLmZpcnN0RGF5T2ZXZWVrKHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZVRpdGxlKGRhdGU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZS5uYXRpdmVEYXRlLCAnbG9uZ0RhdGUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2Vla051bShkYXRlOiBDYW5keURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICt0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLm5hdGl2ZURhdGUsICd3Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQmVmb3JlTW9udGhZZWFyKGN1cnJlbnQ6IENhbmR5RGF0ZSwgdGFyZ2V0OiBDYW5keURhdGUpOiBib29sZWFuIHtcclxuICAgIGlmIChjdXJyZW50LmdldFllYXIoKSA8IHRhcmdldC5nZXRZZWFyKCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VycmVudC5nZXRZZWFyKCkgPT09IHRhcmdldC5nZXRZZWFyKCkgJiYgY3VycmVudC5nZXRNb250aCgpIDwgdGFyZ2V0LmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWZ0ZXJNb250aFllYXIoY3VycmVudDogQ2FuZHlEYXRlLCB0YXJnZXQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpID4gdGFyZ2V0LmdldFllYXIoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPiB0YXJnZXQuZ2V0TW9udGgoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla0RheUxhYmVsIHtcclxuICBzaG9ydDogc3RyaW5nO1xyXG4gIHZlcnlTaG9ydDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsIHtcclxuICB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY3VzdG9tQ29udGVudDogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGlzVG9kYXk/OiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGlzU2VsZWN0ZWRTdGFydERhdGU/OiBib29sZWFuO1xyXG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcclxuICBpc0luUmFuZ2U/OiBib29sZWFuO1xyXG4gIGNsYXNzTWFwPzogb2JqZWN0O1xyXG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcclxuICBvbk1vdXNlRW50ZXIoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWVrUm93IHtcclxuICBpc0N1cnJlbnQ/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IHRvZGF5IHN0YXlzIGluXHJcbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXHJcbiAgd2Vla051bT86IG51bWJlcjtcclxuICBjbGFzc01hcD86IG9iamVjdDtcclxuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XHJcbn1cclxuIl19