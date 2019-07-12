/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isSameYear from 'date-fns/is_same_year';
import isThisMonth from 'date-fns/is_this_month';
import isThisYear from 'date-fns/is_this_year';
import setMonth from 'date-fns/set_month';
import setYear from 'date-fns/set_year';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
export class NzCalendarComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.prefixCls = 'ant-fullcalendar';
        this.currentDate = new Date();
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) { this.updateDate(value, false); }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateCell(value) { this.dateCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateFullCell(value) { this.dateFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthCell(value) { this.monthCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthFullCell(value) { this.monthFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFullscreen(value) { this.fullscreen = coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzFullscreen() { return this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) { this.fullscreen = !coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzCard() { return !this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCellChild(value) { if (value) {
        this.dateCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateFullCellChild(value) { if (value) {
        this.dateFullCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthCellChild(value) { if (value) {
        this.monthCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthFullCellChild(value) { if (value) {
        this.monthFullCell = value;
    } }
    /**
     * @return {?}
     */
    get calendarStart() {
        return startOfWeek(startOfMonth(this.activeDate));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this.updateDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = setYear(this.activeDate, year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = setMonth(this.activeDate, month);
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(value || new Date(), false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        /** @type {?} */
        const dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        const monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        const yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    }
    /**
     * @return {?}
     */
    setUpDaysInWeek() {
        this.daysInWeek = [];
        /** @type {?} */
        const weekStart = startOfWeek(this.activeDate);
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const date = addDays(weekStart, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title, label });
        }
    }
    /**
     * @return {?}
     */
    setUpMonthsInYear() {
        this.monthsInYear = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const date = setMonth(this.activeDate, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const start = startOfMonth(date);
            this.monthsInYear.push({ title, label, start });
        }
    }
    /**
     * @return {?}
     */
    setUpDateMatrix() {
        this.dateMatrix = [];
        /** @type {?} */
        const monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        const monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        const weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (let week = 0; week < weekDiff; week++) {
            /** @type {?} */
            const row = [];
            /** @type {?} */
            const weekStart = addDays(this.calendarStart, week * 7);
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = addDays(weekStart, day);
                /** @type {?} */
                const monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                const title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                const label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                const rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title, label, rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    }
    /**
     * @return {?}
     */
    calculateCurrentDate() {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveDate() {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    }
    /**
     * @return {?}
     */
    calculateCurrentMonth() {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            const yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            const monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveMonth() {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    }
}
NzCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-calendar',
                template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\r\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\r\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</nz-calendar-header>\r\n\r\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\r\n  <div class=\"ant-fullcalendar-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\r\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"ant-fullcalendar-tbody\">\r\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\r\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\r\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\r\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\r\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\r\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\r\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\r\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\r\n            (click)=\"onDateSelect(day.value)\">\r\n            <div class=\"ant-fullcalendar-date\">\r\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\r\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\r\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\r\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\r\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\r\n            class=\"ant-fullcalendar-month-panel-cell\"\r\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\r\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\r\n            (click)=\"onMonthSelect(row * 3 + col)\">\r\n          <div class=\"ant-fullcalendar-month\">\r\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\r\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n            </ng-container>\r\n            <ng-template #defaultCell>\r\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\r\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\r\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }
                ]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: I18n }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateFullCell: [{ type: Input }],
    nzMonthCell: [{ type: Input }],
    nzMonthFullCell: [{ type: Input }],
    nzFullscreen: [{ type: Input }],
    nzCard: [{ type: Input }],
    dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
    dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
    monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
    monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
    fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
};
function NzCalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /** @type {?} */
    NzCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    NzCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    NzCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.dateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDate;
    /** @type {?} */
    NzCalendarComponent.prototype.onChangeFn;
    /** @type {?} */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.i18n;
}
/**
 * @record
 */
export function DayCellContext() { }
function DayCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
function MonthCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
function DateCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sd0JBQXdCLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTywwQkFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLHlCQUF5QixNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0s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U0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDMUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN0Qzs7Ozs7SUFHSyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDM0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQzFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDaEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDL0M7Ozs7O0lBR0ssZUFBZTtRQUNy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QyxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzt5QkFHL0MsV0FBVyxTQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfZGF5cyc7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX21vbnRocyc7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfd2Vla3MnO1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfZGF5JztcclxuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfbW9udGgnO1xyXG5pbXBvcnQgaXNTYW1lWWVhciBmcm9tICdkYXRlLWZucy9pc19zYW1lX3llYXInO1xyXG5pbXBvcnQgaXNUaGlzTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfdGhpc19tb250aCc7XHJcbmltcG9ydCBpc1RoaXNZZWFyIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfeWVhcic7XHJcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xyXG5pbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRfeWVhcic7XHJcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XHJcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydF9vZl95ZWFyJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOekRhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLCBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGwgfSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBASW5wdXQoKSBuek1vZGU6ICdtb250aCd8J3llYXInID0gJ21vbnRoJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJ3wneWVhcic+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkgeyB0aGlzLnVwZGF0ZURhdGUodmFsdWUsIGZhbHNlKTsgfVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGF0ZUNlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLmRhdGVDZWxsID0gdmFsdWU7IH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEYXRlRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLmRhdGVGdWxsQ2VsbCA9IHZhbHVlOyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TW9udGhDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5tb250aENlbGwgPSB2YWx1ZTsgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1vbnRoRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTsgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5mdWxsc2NyZWVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxyXG4gIGdldCBuekZ1bGxzY3JlZW4oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZ1bGxzY3JlZW47IH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDYXJkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZnVsbHNjcmVlbiA9ICFjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XHJcbiAgZ2V0IG56Q2FyZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmZ1bGxzY3JlZW47IH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcclxuICBzZXQgZGF0ZUNlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLmRhdGVDZWxsID0gdmFsdWU7IH0gfVxyXG5cclxuICBAQ29udGVudENoaWxkKERhdGVGdWxsQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcclxuICBzZXQgZGF0ZUZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTsgfSB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxyXG4gIHNldCBtb250aENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlOyB9IH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxyXG4gIHNldCBtb250aEZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7IH0gfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mdWxsY2FsZW5kYXItLWZ1bGxzY3JlZW4nKVxyXG4gIGZ1bGxzY3JlZW4gPSB0cnVlO1xyXG5cclxuICBkYXlzSW5XZWVrOiBEYXlDZWxsQ29udGV4dFtdID0gW107XHJcbiAgbW9udGhzSW5ZZWFyOiBNb250aENlbGxDb250ZXh0W10gPSBbXTtcclxuICBkYXRlTWF0cml4OiBEYXRlQ2VsbENvbnRleHRbXVtdID0gW107XHJcbiAgYWN0aXZlRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY3VycmVudERhdGVSb3c6IG51bWJlciA9IC0xO1xyXG4gIGN1cnJlbnREYXRlQ29sOiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVEYXRlUm93OiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVEYXRlQ29sOiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50TW9udGhSb3c6IG51bWJlciA9IC0xO1xyXG4gIGN1cnJlbnRNb250aENvbDogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlTW9udGhSb3c6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZU1vbnRoQ29sOiBudW1iZXIgPSAtMTtcclxuICBkYXRlQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xyXG4gIGRhdGVGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xyXG4gIG1vbnRoQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xyXG4gIG1vbnRoRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWZ1bGxjYWxlbmRhcic7XHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHByaXZhdGUgZ2V0IGNhbGVuZGFyU3RhcnQoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFVwRGF5c0luV2VlaygpO1xyXG4gICAgdGhpcy5zZXRVcE1vbnRoc0luWWVhcigpO1xyXG4gICAgdGhpcy5zZXRVcERhdGVNYXRyaXgoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudERhdGUoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50TW9udGgoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcclxuICB9XHJcblxyXG4gIG9uTW9kZUNoYW5nZShtb2RlOiAnbW9udGgnfCd5ZWFyJyk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0WWVhcih0aGlzLmFjdGl2ZURhdGUsIHllYXIpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBtb250aCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlfG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSB8fCBuZXcgRGF0ZSgpLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBEYXRlLCB0b3VjaGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF5Q2hhbmdlZCA9ICFpc1NhbWVEYXkoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IG1vbnRoQ2hhbmdlZCA9ICFpc1NhbWVNb250aChkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3QgeWVhckNoYW5nZWQgPSAhaXNTYW1lWWVhcihkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XHJcblxyXG4gICAgaWYgKGRheUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobW9udGhDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudERhdGUoKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHllYXJDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGUpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hGbigpO1xyXG4gICAgICB0aGlzLm56VmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBEYXlzSW5XZWVrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXlzSW5XZWVrID0gW107XHJcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSBzdGFydE9mV2Vlayh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IGFkZERheXMod2Vla1N0YXJ0LCBpKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRScpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdFRUVFRUUnKTtcclxuICAgICAgdGhpcy5kYXlzSW5XZWVrLnB1c2goe3RpdGxlLCBsYWJlbH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcE1vbnRoc0luWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzSW5ZZWFyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ01NTScpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoZGF0ZSk7XHJcbiAgICAgIHRoaXMubW9udGhzSW5ZZWFyLnB1c2goe3RpdGxlLCBsYWJlbCwgc3RhcnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBEYXRlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlTWF0cml4ID0gW107XHJcbiAgICBjb25zdCBtb250aFN0YXJ0ID0gc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aEVuZCA9IGVuZE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHdlZWtEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhtb250aEVuZCwgbW9udGhTdGFydCkgKyAyO1xyXG5cclxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla0RpZmY7IHdlZWsrKykge1xyXG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsQ29udGV4dFtdID0gW107XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB3ZWVrICogNyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgZGF5KTtcclxuICAgICAgICBjb25zdCBtb250aERpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2xvbmdEYXRlJyk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnZGQnKTtcclxuICAgICAgICBjb25zdCByZWwgPSBtb250aERpZmYgPT09IDAgPyAnY3VycmVudCcgOiBtb250aERpZmYgPCAwID8gJ2xhc3QnIDogJ25leHQnO1xyXG4gICAgICAgIHJvdy5wdXNoKHt0aXRsZSwgbGFiZWwsIHJlbCwgdmFsdWU6IGRhdGV9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGVNYXRyaXgucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVDdXJyZW50RGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmIChpc1RoaXNNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuY3VycmVudERhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCk7XHJcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModGhpcy5jdXJyZW50RGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuY3VycmVudERhdGVSb3cgKiA3KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gLTE7XHJcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlRGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQpO1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuYWN0aXZlRGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuYWN0aXZlRGF0ZVJvdyAqIDcpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzVGhpc1llYXIodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICBjb25zdCB5ZWFyU3RhcnQgPSBzdGFydE9mWWVhcih0aGlzLmN1cnJlbnREYXRlKTtcclxuICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHModGhpcy5jdXJyZW50RGF0ZSwgeWVhclN0YXJ0KTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSBNYXRoLmZsb29yKG1vbnRoRGlmZiAvIDMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IG1vbnRoRGlmZiAlIDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aFJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlTW9udGhSb3cgPSBNYXRoLmZsb29yKHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpIC8gMyk7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoQ29sID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgJSAzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXlDZWxsQ29udGV4dCB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzdGFydDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICByZWw6ICdsYXN0J3wnY3VycmVudCd8J25leHQnO1xyXG4gIHZhbHVlOiBEYXRlO1xyXG59XHJcbiJdfQ==