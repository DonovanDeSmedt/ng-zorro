/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
export class DateRangePickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
        this.showWeek = false; // Should show as week picker
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get nzShowTime() { return this._showTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        // Range not support nzShowToday currently
        return !this.isRange && this.nzShowToday;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = 'yyyy-ww'; // Format for week
            }
            else {
                this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes["nzRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes["nzShowTime"] || changes["nzStyle"]) {
            this.setFixedPickerStyle();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        super.onValueChange(value);
        if (!this.nzShowTime) {
            this.closeOverlay();
        }
    }
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            if ((/** @type {?} */ (this.nzValue)).length) {
                this.nzOnOk.emit([this.nzValue[0].nativeDate, this.nzValue[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit((/** @type {?} */ (this.nzValue)).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    /**
     * @return {?}
     */
    setFixedPickerStyle() {
        /** @type {?} */
        const showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign({}, showTimeFixes, this.nzStyle);
    }
}
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                template: `` // Just for rollup
            }] }
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
DateRangePickerComponent.propDecorators = {
    nzDateRender: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzShowTime: [{ type: Input }],
    nzOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "nzShowToday", void 0);
function DateRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUd0SCxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFPdEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHVCQUF1Qjs7OztJQTBCbkUsWUFBWSxJQUFtQjtRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUExQmQsZ0JBQW9CLEtBQUssQ0FBQztRQUsxQixtQkFBZ0QsSUFBSSxDQUFDO1FBR3JELHVCQUFxQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQVFqRixjQUE0QixJQUFJLFlBQVksRUFBa0IsQ0FBQztLQVc5RDs7OztJQWhCRCxJQUFhLFVBQVUsS0FBdUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O0lBQ3RFLElBQUksVUFBVSxDQUFDLEtBQXVCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2RTs7OztJQUlELElBQUksYUFBYTs7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQzFDOzs7O0lBU0QsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFHakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDeEU7U0FDRjtLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyx5QkFBc0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksT0FBTyxrQkFBZSxPQUFPLFdBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtLQUNGOzs7OztJQUdELGFBQWEsQ0FBQyxLQUFnQjtRQUM1QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7O0lBR0QsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLG1CQUFDLElBQUksQ0FBQyxPQUFzQixFQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQzthQUNsRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFDLElBQUksQ0FBQyxPQUFvQixFQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7OztJQUdPLG1CQUFtQjs7UUFDekIsTUFBTSxhQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxXQUFXLHFCQUFRLGFBQWEsRUFBSyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7Ozs7WUFqRzVELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBUlEsYUFBYTs7OzJCQWFuQixLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxNQUFNO3lCQUdOLEtBQUs7cUJBS0wsTUFBTTs7O0lBWEcsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdmFsdWVGdW5jdGlvblByb3AsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCwgQ29tcGF0aWJsZURhdGUgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgYCAvLyBKdXN0IGZvciByb2xsdXBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBzaG93V2VlazogYm9vbGVhbiA9IGZhbHNlOyAvLyBTaG91bGQgc2hvdyBhcyB3ZWVrIHBpY2tlclxyXG5cclxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuO1xyXG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuek1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xyXG4gIEBJbnB1dCgpIG56UmFuZ2VzOiBGdW5jdGlvblByb3A8UHJlc2V0UmFuZ2VzPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zaG93VGltZTsgfVxyXG4gIHNldCBuelNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZT4oKTtcclxuXHJcbiAgZ2V0IHJlYWxTaG93VG9kYXkoKTogYm9vbGVhbiB7IC8vIFJhbmdlIG5vdCBzdXBwb3J0IG56U2hvd1RvZGF5IGN1cnJlbnRseVxyXG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5uelNob3dUb2RheTtcclxuICB9XHJcblxyXG4gIHBpY2tlclN0eWxlOiBvYmplY3Q7IC8vIEZpbmFsIHBpY2tlciBzdHlsZSB0aGF0IGNvbnRhaW5zIHdpZHRoIGZpeCBjb3JyZWN0aW9ucyBldGMuXHJcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihpMThuKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcclxuICAgIGlmICghdGhpcy5uekZvcm1hdCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93V2Vlaykge1xyXG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSAneXl5eS13dyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLm56U2hvd1RpbWUgPyAneXl5eS1NTS1kZCBISDptbTpzcycgOiAneXl5eS1NTS1kZCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpTaG93VGltZSB8fCBjaGFuZ2VzLm56U3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiBoYXMgbm8gdGltZXBpY2tlciBhbmQgdGhlIHVzZXIgc2VsZWN0IGEgZGF0ZSBieSBkYXRlIHBhbmVsLCB0aGVuIGNsb3NlIHBpY2tlclxyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLm56U2hvd1RpbWUpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcclxuICBvblJlc3VsdE9rKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBpZiAoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGVbXSkubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbIHRoaXMubnpWYWx1ZVsgMCBdLm5hdGl2ZURhdGUsIHRoaXMubnpWYWx1ZVsgMSBdLm5hdGl2ZURhdGUgXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KCh0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHVwIGZpeGVkIHN0eWxlIGZvciBwaWNrZXJcclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaG93VGltZUZpeGVzOiB7IHdpZHRoPzogc3RyaW5nIH0gPSB7fTtcclxuICAgIGlmICh0aGlzLm56U2hvd1RpbWUpIHtcclxuICAgICAgc2hvd1RpbWVGaXhlcy53aWR0aCA9IHRoaXMuaXNSYW5nZSA/ICczNTBweCcgOiAnMTk1cHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGlja2VyU3R5bGUgPSB7IC4uLnNob3dUaW1lRml4ZXMsIC4uLnRoaXMubnpTdHlsZSB9O1xyXG4gIH1cclxufVxyXG4iXX0=