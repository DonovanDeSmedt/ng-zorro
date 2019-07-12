/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
export class MonthPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    previousYear() {
        this.gotoYear(-1);
    }
    /**
     * @return {?}
     */
    nextYear() {
        this.gotoYear(1);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    }
}
MonthPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'month-panel',
                template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousYear()\"\r\n        title=\"{{ locale.previousYear }}\"\r\n      ></a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-year-select\"\r\n        role=\"button\"\r\n        (click)=\"yearPanelShow.emit()\"\r\n        title=\"{{ locale.yearSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\r\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-next-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"nextYear()\"\r\n        title=\"{{ locale.nextYear }}\"\r\n      ></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <month-table [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\r\n    </div>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
MonthPanelComponent.ctorParameters = () => [];
MonthPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }],
    yearPanelShow: [{ type: Output }]
};
function MonthPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthPanelComponent.prototype.locale;
    /** @type {?} */
    MonthPanelComponent.prototype.value;
    /** @type {?} */
    MonthPanelComponent.prototype.valueChange;
    /** @type {?} */
    MonthPanelComponent.prototype.disabledDate;
    /** @type {?} */
    MonthPanelComponent.prototype.yearPanelShow;
    /** @type {?} */
    MonthPanelComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9tb250aC9tb250aC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8xQyxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCO1FBUkEsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFJdEQscUJBQTBCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFbkQsaUJBQW9CLDBCQUEwQixDQUFDO0tBRTlCOzs7O0lBRWpCLFFBQVEsTUFBWTs7OztJQUVwQixZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25COzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7Ozs7O0lBR08sUUFBUSxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7WUEvQjVDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNGlDQUF5QzthQUMxQzs7Ozs7cUJBR0UsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU07MkJBRU4sS0FBSzs0QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vbnRoLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnRoUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSB5ZWFyUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigxKTtcclxuICB9XHJcblxyXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxyXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XHJcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcclxuICB9XHJcbn1cclxuIl19