/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false;
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["showTimePicker"] || changes["panelMode"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.i18n.formatDateCompatible(this.value.nativeDate, localeFormat);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changePanel('year'); },
            label: this.formatDateTime(this.locale.yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changeToMonthPanel(); },
            label: this.locale.monthFormat ? this.formatDateTime(this.locale.monthFormat) : this.i18n.formatDate(this.value.nativeDate, 'MMM')
        };
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(this.locale.dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(function (selector) { return !!selector; });
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-header',
                    template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
function CalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.i18n;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
function YearMonthDaySelector_tsickle_Closure_declarations() {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTZCeEMsaUNBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFwQnZDLGtCQUErQixJQUFJLENBQUM7UUFDcEMsa0JBQStCLElBQUksQ0FBQztRQUVwQyxzQkFBbUMsS0FBSyxDQUFDO1FBR3pDLG1CQUF3QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBR3RELHVCQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTFELG9CQUF5QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3ZELGtCQUF1QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3JELG1CQUF3QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXRELGlCQUFvQixjQUFjLENBQUM7MkJBR0osS0FBSztLQUVROzs7O0lBRTVDLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxhQUFVLE9BQU8sa0JBQWUsSUFBSSxPQUFPLGFBQVUsRUFBRTtZQUNoRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtLQUNGOzs7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SUFBSSxNQUFNLENBQXlCO1FBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDL0IsTUFBTSxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxHQUFHLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUUsQ0FBQztTQUMvQjtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUM7OztnQkFsSmhELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwyekVBQTZDO2lCQUM5Qzs7OztnQkFQUSxhQUFhOzs7eUJBVW5CLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07NEJBRU4sS0FBSztrQ0FDTCxNQUFNOytCQUVOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOztrQ0EzQlQ7O1NBWWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRNb250aDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGU7XHJcbiAgQE91dHB1dCgpIHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPigpO1xyXG5cclxuICBAT3V0cHV0KCkgY2hvb3NlRGVjYWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIGNob29zZVllYXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgY2hvb3NlTW9udGggPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICB5ZWFyTW9udGhEYXlTZWxlY3RvcnM6IFllYXJNb250aERheVNlbGVjdG9yW107XHJcblxyXG4gIHByaXZhdGUgeWVhclRvTW9udGg6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciBzaG91bGQgY2hhbmdlIHRvIG1vbnRoIHBhbmVsIHdoZW4gY3VycmVudCBpcyB5ZWFyIHBhbmVsIChpZiByZWZlcmVyPW1vbnRoLCBpdCBzaG91bGQgc2hvdyBtb250aCBwYW5lbCB3aGVuIGNob29zZWQgYSB5ZWFyKVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbmV3IENhbmR5RGF0ZSgpOyAvLyBTaG93IHRvZGF5IGJ5IGRlZmF1bHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuc2hvd1RpbWVQaWNrZXIgfHwgY2hhbmdlcy5wYW5lbE1vZGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoLTEpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b01vbnRoKDEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFuZWwobW9kZTogUGFuZWxNb2RlLCB2YWx1ZT86IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJywgdmFsdWUpO1xyXG4gICAgdGhpcy5jaG9vc2VEZWNhZGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCh0aGlzLnllYXJUb01vbnRoID8gJ21vbnRoJyA6ICdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VZZWFyLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VNb250aCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdkYXRlJywgdmFsdWUpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxyXG4gICAgdGhpcy5jaG9vc2VNb250aC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRvTW9udGhQYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ21vbnRoJyk7XHJcbiAgICB0aGlzLnllYXJUb01vbnRoID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy55ZWFyTW9udGhEYXlTZWxlY3RvcnMgPSB0aGlzLmNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvTW9udGgoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkTW9udGhzKGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWUobG9jYWxlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZSh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIGxvY2FsZUZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdIHtcclxuICAgIGxldCB5ZWFyOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcclxuICAgIGxldCBtb250aDogWWVhck1vbnRoRGF5U2VsZWN0b3I7XHJcbiAgICBsZXQgZGF5OiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcclxuXHJcbiAgICB5ZWFyID0ge1xyXG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS15ZWFyLXNlbGVjdGAsXHJcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxyXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInKSxcclxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUueWVhckZvcm1hdClcclxuICAgIH07XHJcblxyXG4gICAgbW9udGggPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXNlbGVjdGAsXHJcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcclxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVRvTW9udGhQYW5lbCgpLFxyXG4gICAgICBsYWJlbDogdGhpcy5sb2NhbGUubW9udGhGb3JtYXQgPyB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0KSA6IHRoaXMuaTE4bi5mb3JtYXREYXRlKHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgJ01NTScpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dUaW1lUGlja2VyKSB7XHJcbiAgICAgIGRheSA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kYXktc2VsZWN0YCxcclxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh0aGlzLmxvY2FsZS5kYXlGb3JtYXQpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdDogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbGUubW9udGhCZWZvcmVZZWFyKSB7XHJcbiAgICAgIHJlc3VsdCA9IFsgbW9udGgsIGRheSwgeWVhciBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gWyB5ZWFyLCBtb250aCwgZGF5IF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoc2VsZWN0b3IgPT4gISFzZWxlY3Rvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJNb250aERheVNlbGVjdG9yIHtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/KCk6IHZvaWQ7XHJcbn1cclxuIl19