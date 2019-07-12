/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { CandyDate } from './lib/candy-date';
import { NzPickerComponent } from './picker.component';
/** @type {?} */
var POPUP_STYLE_PATCH = { 'position': 'relative' };
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n) {
        this.i18n = i18n;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false;
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = function () { return void 0; };
        this.onTouchedFn = function () { return void 0; };
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = /**
     * @return {?}
     */
    function () {
        this.nzValue = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange
                .pipe(takeUntil(this.destroyed$))
                .subscribe(function () { return _this.setLocale(); });
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzPopupStyle"]) { // Always assign the popup style patch
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? tslib_1.__assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes["nzPlaceHolder"] && changes["nzPlaceHolder"].firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes["nzLocale"]) { // The nzLocale is currently handled by user
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.nzValue = value;
        if (this.isRange) {
            if ((/** @type {?} */ (this.nzValue)).length) {
                this.onChangeFn([this.nzValue[0].nativeDate, this.nzValue[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn((/** @type {?} */ (this.nzValue)).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = /**
     * @return {?}
     */
    function () {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AbstractPickerComponent.prototype.formatDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? this.i18n.formatDateCompatible(date.nativeDate, this.nzFormat) : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.nzValue = value ? (/** @type {?} */ (value)).map(function (val) { return new CandyDate(val); }) : [];
        }
        else {
            this.nzValue = value ? new CandyDate(/** @type {?} */ (value)) : null;
        }
    };
    AbstractPickerComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzOnOpenChange: [{ type: Output }],
        nzFormat: [{ type: Input }],
        nzValue: [{ type: Input }],
        picker: [{ type: ViewChild, args: [NzPickerComponent,] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzOpen", void 0);
    return AbstractPickerComponent;
}());
export { AbstractPickerComponent };
function AbstractPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzLocale;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzSize;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzFormat;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzValue;
    /** @type {?} */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /** @type {?} */
    AbstractPickerComponent.prototype.destroyed$;
    /** @type {?} */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxJQUFNLGlCQUFpQixHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUF3Q25ELGlDQUFzQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOztRQWpDekMsb0JBQWlELElBQUksQ0FBQztRQUN0RCxtQkFBZ0QsS0FBSyxDQUFDO1FBQ3RELGtCQUErQyxLQUFLLENBQUM7UUFNckQsb0JBQWdDLGlCQUFpQixDQUFDO1FBSWxELHNCQUFvQyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBUWhFLGVBQW1CLEtBQUssQ0FBQztRQVV6QixrQkFBc0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwRCwyQkFBeUMsS0FBSyxDQUFDOzs7OztRQTRFL0Msa0JBQTRDLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFDekQsbUJBQTBCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7S0ExRXRDO0lBWkQsc0JBQUksa0RBQWE7Ozs7UUFBakI7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QUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsbUJBQUMsS0FBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM1RDs7OytCQXhKRixLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztzQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxNQUFNOzJCQUVOLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxTQUFTLFNBQUMsaUJBQWlCOzs7UUFsQmxCLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7O2tDQTlCMUI7O1NBeUJzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xyXG5pbXBvcnQgeyBOelBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyB9OyAvLyBBaW0gdG8gb3ZlcnJpZGUgYW50ZCdzIHN0eWxlIHRvIHN1cHBvcnQgb3ZlcmxheSdzIHBvc2l0aW9uIHN0cmF0ZWd5IChwb3NpdGlvbjphYnNvbHV0ZSB3aWxsIGNhdXNlIGl0IG5vdCB3b3JraW5nIGJlYWN1c2UgdGhlIG92ZXJsYXkgY2FuJ3QgZ2V0IHRoZSBoZWlnaHQvd2lkdGggb2YgaXQncyBjb250ZW50KVxyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgYWxsIGNvbW1vbiBBUElzXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLy8gLS0tIENvbW1vbiBBUElcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbnpMb2NhbGU6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbnpQb3B1cFN0eWxlOiBvYmplY3QgPSBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJztcclxuICBASW5wdXQoKSBuelN0eWxlOiBvYmplY3Q7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBuelZhbHVlOiBDb21wYXRpYmxlVmFsdWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTnpQaWNrZXJDb21wb25lbnQpIHByb3RlY3RlZCBwaWNrZXI6IE56UGlja2VyQ29tcG9uZW50O1xyXG5cclxuICBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgcmFuZ2UgdmFsdWVcclxuXHJcbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5waWNrZXIuYW5pbWF0aW9uT3BlblN0YXRlO1xyXG4gIH0gLy8gVXNlIHBpY2tlcidzIHJlYWwgb3BlbiBzdGF0ZSB0byBsZXQgcmUtcmVuZGVyIHRoZSBwaWNrZXIncyBjb250ZW50IHdoZW4gc2hvd24gdXBcclxuXHJcbiAgaW5pdFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelZhbHVlID0gdGhpcy5pc1JhbmdlID8gW10gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByb3RlY3RlZCBpc0N1c3RvbVBsYWNlSG9sZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxyXG4gICAgaWYgKCF0aGlzLm56TG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2VcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TG9jYWxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgdmFsdWVcclxuICAgIHRoaXMuaW5pdFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelBvcHVwU3R5bGUpIHsgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcclxuICAgICAgdGhpcy5uelBvcHVwU3R5bGUgPSB0aGlzLm56UG9wdXBTdHlsZSA/IHsgLi4udGhpcy5uelBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIG56UGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcclxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VIb2xkZXIgJiYgY2hhbmdlcy5uelBsYWNlSG9sZGVyLmZpcnN0Q2hhbmdlICYmIHR5cGVvZiB0aGlzLm56UGxhY2VIb2xkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpMb2NhbGUpIHsgLy8gVGhlIG56TG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbW1vbiBoYW5kbGUgZm9yIHZhbHVlIGNoYW5nZXNcclxuICAgKiBAcGFyYW0gdmFsdWUgY2hhbmdlZCB2YWx1ZVxyXG4gICAqL1xyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGlmICgodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZVtdKS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oWyB0aGlzLm56VmFsdWVbIDAgXS5uYXRpdmVEYXRlLCB0aGlzLm56VmFsdWVbIDEgXS5uYXRpdmVEYXRlIF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vblRvdWNoZWRGbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcclxuICAgKiBAcGFyYW0gb3BlbiBUaGUgb3ZlcmxheU9wZW4gaW4gcGlja2VyIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBOT1RFOiBvbkNoYW5nZUZuL29uVG91Y2hlZEZuIHdpbGwgbm90IGJlIGFzc2lnbmVkIGlmIHVzZXIgbm90IHVzZSBhcyBuZ01vZGVsXHJcbiAgb25DaGFuZ2VGbjogKHZhbDogQ29tcGF0aWJsZURhdGUpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgSW50ZXJuYWwgbWV0aG9kc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBSZWxvYWQgbG9jYWxlIGZyb20gaTE4biB3aXRoIHNpZGUgZWZmZWN0c1xyXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xyXG4gICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5uekxvY2FsZSkge1xyXG4gICAgICB0aGlzLm56UGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2UgPyB0aGlzLm56TG9jYWxlLmxhbmcucmFuZ2VQbGFjZWhvbGRlciA6IHRoaXMubnpMb2NhbGUubGFuZy5wbGFjZWhvbGRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0RGF0ZShkYXRlOiBDYW5keURhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLm56Rm9ybWF0KSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSA/ICh2YWx1ZSBhcyBEYXRlW10pLm1hcCh2YWwgPT4gbmV3IENhbmR5RGF0ZSh2YWwpKSA6IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelZhbHVlID0gdmFsdWUgPyBuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbXBhdGlibGVWYWx1ZSA9IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZURhdGUgPSBEYXRlIHwgRGF0ZVtdO1xyXG4iXX0=