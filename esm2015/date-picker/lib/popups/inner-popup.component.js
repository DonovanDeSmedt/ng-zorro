/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
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
        if (changes["value"] && !this.value) {
            this.value = new CandyDate();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDate(date) {
        /** @type {?} */
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'inner-popup',
                template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n  ></nz-time-picker-panel>\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
            }] }
];
/** @nocollapse */
InnerPopupComponent.ctorParameters = () => [];
InnerPopupComponent.propDecorators = {
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    dayHover: [{ type: Output }]
};
function InnerPopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFLdEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8xQyxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QjtRQVhBLHVCQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBSTFELG9CQUF5QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3ZELGtCQUF1QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3JELGtCQUF1QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3JELGdCQUFxQixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRW5ELGlCQUFvQixjQUFjLENBQUM7S0FFbEI7Ozs7SUFFakIsUUFBUSxNQUFZOzs7OztJQUVwQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGFBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUVELFlBQVksQ0FBQyxJQUFVO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDM0M7Ozs7O0lBR0QsWUFBWSxDQUFDLElBQXNCOztRQUVqQyxNQUFNLEtBQUssR0FBSSxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw0aERBQXlDO2FBQzFDOzs7Ozt1QkFHRSxLQUFLO3FCQUVMLEtBQUs7NkJBQ0wsS0FBSzswQkFFTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7OEJBQ0wsTUFBTTtvQkFFTixLQUFLOzJCQUVMLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO3VCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lubmVyLXBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2lubmVyLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElubmVyUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIHRpbWVPcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xyXG4gIEBPdXRwdXQoKSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuXHJcbiAgQE91dHB1dCgpIGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxyXG4gIEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB0aGUgZGF0ZSBpcyBzZWxlY3RlZCBieSBjbGljayB0aGUgZGF0ZSBwYW5lbFxyXG4gIEBPdXRwdXQoKSBzZWxlY3RUaW1lID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSAmJiAhdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RUaW1lKGRhdGU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0VGltZS5lbWl0KG5ldyBDYW5keURhdGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIHZhbHVlIHJlYWwgY2hhbmdlZCB0byBvdXRzaWRlXHJcbiAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMudmFsdWUgPSBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZSA6IG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgICBjb25zdCB2YWx1ZSAgPSBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZSA6IG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==