/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["disabledDate"]) {
            this.render();
        }
    };
    /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    function (index, monthData) {
        return monthData.month;
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.i18n.formatDateCompatible(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = months[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: function () { return _this.chooseMonth(cell.month); }
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.month === currentMonth,
                    _a[this_1.prefixCls + "-current-cell"] = today.getYear() === this_1.value.getYear() && cell.month === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\"\r\n        role=\"gridcell\"\r\n        title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\"\r\n        [ngClass]=\"monthCell.classMap\"\r\n      >\r\n        <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
export { MonthTableComponent };
function MonthTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /** @type {?} */
    MonthTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function PanelMonthData() { }
function PanelMonthData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9tb250aC9tb250aC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUNsQixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7O0lBZ0JoQiw2QkFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQVB2QyxtQkFBd0IsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUl0RCxpQkFBb0IsMEJBQTBCLENBQUM7S0FHSDs7OztJQUU1QyxzQ0FBUTs7O0lBQVIsZUFBb0I7Ozs7O0lBRXBCLHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sYUFBVSxPQUFPLGdCQUFhLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7O0lBRUQsNkNBQWU7Ozs7O0lBQWYsVUFBZ0IsS0FBYSxFQUFFLFNBQXlCO1FBQ3RELE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4Qjs7OztJQUVPLG9DQUFNOzs7O1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDM0M7Ozs7O0lBR0ssNkNBQWU7Ozs7OztRQUNyQixJQUFNLE1BQU0sR0FBdUIsRUFBRSxDQUFDOztRQUN0QyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUMzQyxJQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUU5QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUcsRUFBRTtZQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29DQUNiLFFBQVE7OztnQkFDZixJQUFNLEtBQUssR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUM5QyxJQUFNLFFBQVEsR0FBRyxPQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBSyxZQUFZLENBQUMsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O2dCQUMzRyxJQUFNLE9BQU8sR0FBRyxPQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDOztnQkFFeEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN4QyxRQUFRLFVBQUE7b0JBQ1IsT0FBTyxTQUFBO29CQUNQLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsT0FBTztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QjtpQkFDNUMsQ0FBQztnQkFFRixJQUFJLENBQUMsUUFBUTtvQkFDWCxHQUFJLE9BQUssU0FBUyxVQUFPLElBQUcsSUFBSTtvQkFDaEMsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsUUFBUTtvQkFDN0MsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZO29CQUNoRSxHQUFJLE9BQUssU0FBUyxrQkFBZSxJQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxPQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7dUJBQ2hILENBQUM7Z0JBRUYsVUFBVSxFQUFHLENBQUM7OztZQXJCaEIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUc7d0JBQTdDLFFBQVE7YUFzQmhCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7O0lBR1IseUNBQVc7Ozs7Y0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O2dCQXhFakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix3a0JBQXlDO2lCQUMxQzs7OztnQkFUUSxhQUFhOzs7d0JBWW5CLEtBQUs7OEJBQ0wsTUFBTTsrQkFFTixLQUFLOzs4QkFqQlI7O1NBYWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtdGFibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW9udGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xyXG4gIHBhbmVsTW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsTW9udGgoaW5kZXg6IG51bWJlciwgbW9udGhEYXRhOiBQYW5lbE1vbnRoRGF0YSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbW9udGhEYXRhLm1vbnRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9udGhzID0gdGhpcy5tYWtlUGFuZWxNb250aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsTW9udGhzKCk6IFBhbmVsTW9udGhEYXRhW11bXSB7XHJcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4ICsrKSB7XHJcbiAgICAgIG1vbnRoc1tyb3dJbmRleF0gPSBbXTtcclxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpLm5hdGl2ZURhdGUpIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZShtb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBtb250aHNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcclxuICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlTW9udGgoY2VsbC5tb250aClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWNlbGxgXTogY2VsbC5tb250aCA9PT0gY3VycmVudE1vbnRoLFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LWNlbGxgXTogdG9kYXkuZ2V0WWVhcigpID09PSB0aGlzLnZhbHVlLmdldFllYXIoKSAmJiBjZWxsLm1vbnRoID09PSB0b2RheS5nZXRNb250aCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9udGhWYWx1ZSArKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbnRocztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hvb3NlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBtb250aDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2xhc3NNYXA6IG9iamVjdDtcclxuICBvbkNsaWNrKCk6IHZvaWQ7XHJcbn1cclxuIl19