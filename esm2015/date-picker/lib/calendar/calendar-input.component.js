/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export class CalendarInputComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputKeyup(event) {
        /** @type {?} */
        const date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        if (!date.isSame(this.value, 'second')) { // Not same with original value
            // Not same with original value
            this.value = date;
            this.valueChange.emit(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toReadableInput(value) {
        return value ? this.i18n.formatDateCompatible(value.nativeDate, this.format) : '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkValidInputDate(event) {
        /** @type {?} */
        const input = (/** @type {?} */ (event.target)).value;
        /** @type {?} */
        const date = new CandyDate(input);
        this.invalidInputClass = '';
        if (date.isInvalid() || input !== this.toReadableInput(date)) { // Should also match the input format exactly
            // Should also match the input format exactly
            this.invalidInputClass = `${this.prefixCls}-input-invalid`;
            return null;
        }
        return date;
    }
}
CalendarInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-input',
                template: "<div class=\"{{ prefixCls }}-input-wrap\">\r\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\r\n    <input\r\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\r\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\r\n      value=\"{{ toReadableInput(value) }}\"\r\n      (keyup)=\"onInputKeyup($event)\"\r\n    />\r\n  </div>\r\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\">\r\n    <!--<i nz-icon type=\"close\"></i>-->\r\n  </a>\r\n</div>"
            }] }
];
/** @nocollapse */
CalendarInputComponent.ctorParameters = () => [
    { type: NzI18nService }
];
CalendarInputComponent.propDecorators = {
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
function CalendarInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /** @type {?} */
    CalendarInputComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVlqQyxZQUFvQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlO1FBTHZDLG1CQUF3QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXRELGlCQUFvQixjQUFjLENBQUM7UUFDbkMseUJBQTRCLEVBQUUsQ0FBQztLQUVhOzs7O0lBRTVDLFFBQVEsTUFBWTs7Ozs7SUFFcEIsWUFBWSxDQUFDLEtBQVk7O1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLE9BQVE7U0FDVDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSwrQkFBK0I7O1lBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFnQjtRQUM5QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ25GOzs7OztJQUVPLG1CQUFtQixDQUFDLEtBQVk7O1FBQ3RDLE1BQU0sS0FBSyxHQUFHLG1CQUFDLEtBQUssQ0FBQyxNQUEwQixFQUFDLENBQUMsS0FBSyxDQUFDOztRQUN2RCxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsNkNBQTZDOztZQUMzRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7Ozs7WUFoRGYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFnQkFBNEM7YUFDN0M7Ozs7WUFOUSxhQUFhOzs7cUJBU25CLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7b0JBRUwsS0FBSzswQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaW5wdXQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgaW52YWxpZElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBvbklucHV0S2V5dXAoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5jaGVja1ZhbGlkSW5wdXREYXRlKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIWRhdGUgfHwgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpKSB7XHJcbiAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkYXRlLmlzU2FtZSh0aGlzLnZhbHVlLCAnc2Vjb25kJykpIHsgLy8gTm90IHNhbWUgd2l0aCBvcmlnaW5hbCB2YWx1ZVxyXG4gICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9SZWFkYWJsZUlucHV0KHZhbHVlOiBDYW5keURhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5pMThuLmZvcm1hdERhdGVDb21wYXRpYmxlKHZhbHVlLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1ZhbGlkSW5wdXREYXRlKGV2ZW50OiBFdmVudCk6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZShpbnB1dCk7XHJcblxyXG4gICAgdGhpcy5pbnZhbGlkSW5wdXRDbGFzcyA9ICcnO1xyXG4gICAgaWYgKGRhdGUuaXNJbnZhbGlkKCkgfHwgaW5wdXQgIT09IHRoaXMudG9SZWFkYWJsZUlucHV0KGRhdGUpKSB7IC8vIFNob3VsZCBhbHNvIG1hdGNoIHRoZSBpbnB1dCBmb3JtYXQgZXhhY3RseVxyXG4gICAgICB0aGlzLmludmFsaWRJbnB1dENsYXNzID0gYCR7dGhpcy5wcmVmaXhDbHN9LWlucHV0LWludmFsaWRgO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn1cclxuIl19