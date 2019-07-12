/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';
var NzDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDatePickerComponent, _super);
    function NzDatePickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.isRange = false;
        return _this;
    }
    NzDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-date-picker',
                    template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return NzDatePickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzDatePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzDatePickerComponent;
}(DateRangePickerComponent));
export { NzDatePickerComponent };
function NzDatePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDatePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFlOUIsaURBQXdCO0lBRWpFLCtCQUFZLElBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBQ1o7UUFIRCxnQkFBbUIsS0FBSyxDQUFDOztLQUd4Qjs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssZ0JBQWdCO29CQUM3QixzdkNBQWlEO29CQUNqRCxTQUFTLEVBQUksQ0FBRTs0QkFDYixPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixLQUFLLEVBQVEsSUFBSTs0QkFDakIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7eUJBQ3JELENBQUU7b0JBQ0gsSUFBSSxFQUFTO3dCQUNYLDZCQUE2QixFQUFFLE1BQU07cUJBQ3RDO2lCQUNGOzs7O2dCQWZRLGFBQWE7O2dDQUZ0QjtFQW1CMkMsd0JBQXdCO1NBQXRELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnbnotZGF0ZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzICA6IFsge1xyXG4gICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgbXVsdGkgICAgICA6IHRydWUsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekRhdGVQaWNrZXJDb21wb25lbnQpXHJcbiAgfSBdLFxyXG4gIGhvc3QgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICAgIHN1cGVyKGkxOG4pO1xyXG4gIH1cclxufVxyXG4iXX0=