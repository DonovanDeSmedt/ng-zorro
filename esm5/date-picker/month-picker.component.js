/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { HeaderPickerComponent } from './header-picker.component';
var NzMonthPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzMonthPickerComponent, _super);
    function NzMonthPickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.nzFormat = 'yyyy-MM';
        _this.endPanelMode = 'month';
        return _this;
    }
    NzMonthPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-month-picker',
                    template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return NzMonthPickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzMonthPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    NzMonthPickerComponent.propDecorators = {
        nzFormat: [{ type: Input }]
    };
    return NzMonthPickerComponent;
}(HeaderPickerComponent));
export { NzMonthPickerComponent };
function NzMonthPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMonthPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzMonthPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7O0lBZTFDLGtEQUFxQjtJQUkvRCxnQ0FBWSxJQUFtQjtRQUEvQixZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBTEQsaUJBQTRCLFNBQVMsQ0FBQztRQUV0QyxxQkFBbUMsT0FBTyxDQUFDOztLQUcxQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix3aERBQTZDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQzt5QkFDdEQsQ0FBQztvQkFDRixJQUFJLEVBQWlCO3dCQUNuQiw2QkFBNkIsRUFBRSxNQUFNO3FCQUN0QztpQkFDRjs7OztnQkFmUSxhQUFhOzs7MkJBa0JuQixLQUFLOztpQ0FwQlI7RUFtQjRDLHFCQUFxQjtTQUFwRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50LCBTdXBwb3J0SGVhZGVyUGFuZWwgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotbW9udGgtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICBtdWx0aTogdHJ1ZSxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56TW9udGhQaWNrZXJDb21wb25lbnQpXHJcbiAgfV0sXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2FsZW5kYXItcGlja2VyXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOek1vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSGVhZGVyUGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ3l5eXktTU0nO1xyXG5cclxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCA9ICdtb250aCc7XHJcbiAgY29uc3RydWN0b3IoaTE4bjogTnpJMThuU2VydmljZSkge1xyXG4gICAgc3VwZXIoaTE4bik7XHJcbiAgfVxyXG59XHJcbiJdfQ==