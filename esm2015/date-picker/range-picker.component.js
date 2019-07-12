/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';
export class NzRangePickerComponent extends DateRangePickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
        this.isRange = true;
    }
}
NzRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-range-picker',
                template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzRangePickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
/** @nocollapse */
NzRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
function NzRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRangePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFlekUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHdCQUF3Qjs7OztJQUVsRSxZQUFZLElBQW1CO1FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUZkLGVBQW1CLElBQUksQ0FBQztLQUd2Qjs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUssaUJBQWlCO2dCQUM5QixzdkNBQWlEO2dCQUNqRCxTQUFTLEVBQUksQ0FBRTt3QkFDYixPQUFPLEVBQU0saUJBQWlCO3dCQUM5QixLQUFLLEVBQVEsSUFBSTt3QkFDakIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDdEQsQ0FBRTtnQkFDSCxJQUFJLEVBQVM7b0JBQ1gsNkJBQTZCLEVBQUUsTUFBTTtpQkFDdEM7YUFDRjs7OztZQWZRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgIDogJ256LXJhbmdlLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnMgIDogWyB7XHJcbiAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICBtdWx0aSAgICAgIDogdHJ1ZSxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFuZ2VQaWNrZXJDb21wb25lbnQpXHJcbiAgfSBdLFxyXG4gIGhvc3QgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56UmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xyXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcclxuICAgIHN1cGVyKGkxOG4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19