/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export class TodayButtonComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @return {?}
     */
    get title() {
        return this.i18n.formatDate(this.now.nativeDate, 'longDate');
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
        if (changes["disabledDate"]) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
    }
    /**
     * @return {?}
     */
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
TodayButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'today-button',
                template: "<a\r\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"isDisabled ? null : onClickToday()\"\r\n  title=\"{{ title }}\"\r\n>\r\n  {{ hasTimePicker ? locale.now : locale.today }}\r\n</a>"
            }] }
];
/** @nocollapse */
TodayButtonComponent.ctorParameters = () => [
    { type: NzI18nService }
];
TodayButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    disabledDate: [{ type: Input }],
    clickToday: [{ type: Output }]
};
function TodayButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TodayButtonComponent.prototype.locale;
    /** @type {?} */
    TodayButtonComponent.prototype.hasTimePicker;
    /** @type {?} */
    TodayButtonComponent.prototype.disabledDate;
    /** @type {?} */
    TodayButtonComponent.prototype.clickToday;
    /** @type {?} */
    TodayButtonComponent.prototype.prefixCls;
    /** @type {?} */
    TodayButtonComponent.prototype.isDisabled;
    /** @type {?} */
    TodayButtonComponent.prototype.now;
    /** @type {?} */
    TodayButtonComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFnQi9CLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFkdkMscUJBQWtDLEtBQUssQ0FBQztRQUl4QyxrQkFBdUIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVyRCxpQkFBb0IsY0FBYyxDQUFDO1FBQ25DLGtCQUFzQixLQUFLLENBQUM7bUJBS0gsSUFBSSxTQUFTLEVBQUU7S0FFSTs7OztJQU41QyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzlEOzs7O0lBTUQsUUFBUSxNQUFZOzs7OztJQUVwQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0U7S0FDRjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDeEM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHVSQUEwQzthQUMzQzs7OztZQU5RLGFBQWE7OztxQkFTbkIsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLEtBQUs7eUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvZGF5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICd0b2RheS1idXR0b24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kYXlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh0aGlzLm5vdy5uYXRpdmVEYXRlLCAnbG9uZ0RhdGUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm93OiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLm5vdy5uYXRpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tUb2RheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tUb2RheS5lbWl0KHRoaXMubm93LmNsb25lKCkpOyAvLyBUbyBwcmV2ZW50IHRoZSBcIm5vd1wiIGJlaW5nIG1vZGlmaWVkIGZyb20gb3V0c2lkZSwgd2UgdXNlIGNsb25lXHJcbiAgfVxyXG59XHJcbiJdfQ==