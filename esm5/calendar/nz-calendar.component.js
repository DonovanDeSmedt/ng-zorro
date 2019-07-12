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
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(i18n) {
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
        this.onChangeFn = function () { };
        this.onTouchFn = function () { };
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.updateDate(value, false); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzFullscreen", {
        get: /**
         * @return {?}
         */
        function () { return this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () { return !this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = !coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
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
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDaysInWeek = /**
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate);
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpMonthsInYear = /**
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDateMatrix = /**
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                var label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentDate = /**
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveDate = /**
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentMonth = /**
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveMonth = /**
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-calendar',
                    template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\r\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\r\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</nz-calendar-header>\r\n\r\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\r\n  <div class=\"ant-fullcalendar-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\r\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"ant-fullcalendar-tbody\">\r\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\r\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\r\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\r\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\r\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\r\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\r\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\r\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\r\n            (click)=\"onDateSelect(day.value)\">\r\n            <div class=\"ant-fullcalendar-date\">\r\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\r\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\r\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\r\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\r\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\r\n            class=\"ant-fullcalendar-month-panel-cell\"\r\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\r\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\r\n            (click)=\"onMonthSelect(row * 3 + col)\">\r\n          <div class=\"ant-fullcalendar-month\">\r\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\r\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n            </ng-container>\r\n            <ng-template #defaultCell>\r\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\r\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\r\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return NzCalendarComponent; }), multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: I18n }
    ]; };
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
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sd0JBQXdCLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTywwQkFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLHlCQUF5QixNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0s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eUIsSUFBSTs7O3lCQVczQixLQUFLOytCQUNMLE1BQU07MEJBRU4sS0FBSztnQ0FDTCxNQUFNOzZCQUVOLEtBQUs7aUNBR0wsS0FBSzs4QkFHTCxLQUFLO2tDQUdMLEtBQUs7K0JBR0wsS0FBSzt5QkFJTCxLQUFLO2dDQUlMLFlBQVksU0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO29DQUcxQyxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztpQ0FHOUMsWUFBWSxTQUFDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7cUNBRzNDLFlBQVksU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzZCQUcvQyxXQUFXLFNBQUMsb0NBQW9DOzs4QkFuRW5EOztTQTRCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZF9kYXlzJztcclxuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3dlZWtzJztcclxuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kX29mX21vbnRoJztcclxuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSc7XHJcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc19zYW1lX21vbnRoJztcclxuaW1wb3J0IGlzU2FtZVllYXIgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV95ZWFyJztcclxuaW1wb3J0IGlzVGhpc01vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfbW9udGgnO1xyXG5pbXBvcnQgaXNUaGlzWWVhciBmcm9tICdkYXRlLWZucy9pc190aGlzX3llYXInO1xyXG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcclxuaW1wb3J0IHNldFllYXIgZnJvbSAnZGF0ZS1mbnMvc2V0X3llYXInO1xyXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJztcclxuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xyXG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCwgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsIH0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbnpNb2RlOiAnbW9udGgnfCd5ZWFyJyA9ICdtb250aCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPCdtb250aCd8J3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56VmFsdWUodmFsdWU6IERhdGUpIHsgdGhpcy51cGRhdGVEYXRlKHZhbHVlLCBmYWxzZSk7IH1cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRhdGVDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlOyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGF0ZUZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTsgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1vbnRoQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMubW9udGhDZWxsID0gdmFsdWU7IH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpNb250aEZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7IH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpGdWxsc2NyZWVuKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZnVsbHNjcmVlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cclxuICBnZXQgbnpGdWxsc2NyZWVuKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mdWxsc2NyZWVuOyB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2FyZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmZ1bGxzY3JlZW4gPSAhY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxyXG4gIGdldCBuekNhcmQoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5mdWxsc2NyZWVuOyB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUNlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXHJcbiAgc2V0IGRhdGVDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlOyB9IH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXHJcbiAgc2V0IGRhdGVGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7IH0gfVxyXG5cclxuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcclxuICBzZXQgbW9udGhDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5tb250aENlbGwgPSB2YWx1ZTsgfSB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhGdWxsQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcclxuICBzZXQgbW9udGhGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlOyB9IH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcclxuICBmdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgZGF5c0luV2VlazogRGF5Q2VsbENvbnRleHRbXSA9IFtdO1xyXG4gIG1vbnRoc0luWWVhcjogTW9udGhDZWxsQ29udGV4dFtdID0gW107XHJcbiAgZGF0ZU1hdHJpeDogRGF0ZUNlbGxDb250ZXh0W11bXSA9IFtdO1xyXG4gIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGN1cnJlbnREYXRlUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50RGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZVJvdzogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudE1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50TW9udGhDb2w6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZU1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVNb250aENvbDogbnVtYmVyID0gLTE7XHJcbiAgZGF0ZUNlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcclxuICBkYXRlRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcclxuICBtb250aENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcclxuICBtb250aEZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1mdWxsY2FsZW5kYXInO1xyXG4gIHByaXZhdGUgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBwcml2YXRlIGdldCBjYWxlbmRhclN0YXJ0KCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHN0YXJ0T2ZXZWVrKHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4bikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRVcERheXNJbldlZWsoKTtcclxuICAgIHRoaXMuc2V0VXBNb250aHNJblllYXIoKTtcclxuICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UobW9kZTogJ21vbnRoJ3wneWVhcicpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVTZWxlY3QoZGF0ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldFllYXIodGhpcy5hY3RpdmVEYXRlLCB5ZWFyKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgbW9udGgpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZXxudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUodmFsdWUgfHwgbmV3IERhdGUoKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogRGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRheUNoYW5nZWQgPSAhaXNTYW1lRGF5KGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aENoYW5nZWQgPSAhaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHllYXJDaGFuZ2VkID0gIWlzU2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xyXG5cclxuICAgIGlmIChkYXlDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbnRoQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcclxuICAgIH1cclxuICAgIGlmICh5ZWFyQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGVkKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlKTtcclxuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcclxuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwRGF5c0luV2VlaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF5c0luV2VlayA9IFtdO1xyXG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgaSk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ0UnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRUVFRUVFJyk7XHJcbiAgICAgIHRoaXMuZGF5c0luV2Vlay5wdXNoKHt0aXRsZSwgbGFiZWx9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBNb250aHNJblllYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbnRoc0luWWVhciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIGkpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnTU1NJyk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZk1vbnRoKGRhdGUpO1xyXG4gICAgICB0aGlzLm1vbnRoc0luWWVhci5wdXNoKHt0aXRsZSwgbGFiZWwsIHN0YXJ0fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwRGF0ZU1hdHJpeCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZU1hdHJpeCA9IFtdO1xyXG4gICAgY29uc3QgbW9udGhTdGFydCA9IHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3QgbW9udGhFbmQgPSBlbmRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCB3ZWVrRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MobW9udGhFbmQsIG1vbnRoU3RhcnQpICsgMjtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHdlZWtEaWZmOyB3ZWVrKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBEYXRlQ2VsbENvbnRleHRbXSA9IFtdO1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgd2VlayAqIDcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGRheSk7XHJcbiAgICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdsb25nRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2RkJyk7XHJcbiAgICAgICAgY29uc3QgcmVsID0gbW9udGhEaWZmID09PSAwID8gJ2N1cnJlbnQnIDogbW9udGhEaWZmIDwgMCA/ICdsYXN0JyA6ICduZXh0JztcclxuICAgICAgICByb3cucHVzaCh7dGl0bGUsIGxhYmVsLCByZWwsIHZhbHVlOiBkYXRlfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRlTWF0cml4LnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudERhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAoaXNUaGlzTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmN1cnJlbnREYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQpO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuY3VycmVudERhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmN1cnJlbnREYXRlUm93ICogNykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0KTtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmFjdGl2ZURhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmFjdGl2ZURhdGVSb3cgKiA3KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnRNb250aCgpOiB2b2lkIHtcclxuICAgIGlmIChpc1RoaXNZZWFyKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgY29uc3QgeWVhclN0YXJ0ID0gc3RhcnRPZlllYXIodGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKHRoaXMuY3VycmVudERhdGUsIHllYXJTdGFydCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gTWF0aC5mbG9vcihtb250aERpZmYgLyAzKTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSBtb250aERpZmYgJSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSAtMTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlTW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoUm93ID0gTWF0aC5mbG9vcih0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAvIDMpO1xyXG4gICAgdGhpcy5hY3RpdmVNb250aENvbCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICUgMztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF5Q2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb250aENlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgc3RhcnQ6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcmVsOiAnbGFzdCd8J2N1cnJlbnQnfCduZXh0JztcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iXX0=