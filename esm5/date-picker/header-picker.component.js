/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { valueFunctionProp } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
var HeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderPickerComponent, _super);
    function HeaderPickerComponent(i18n) {
        return _super.call(this, i18n) || this;
    }
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["nzRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    HeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else { // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    HeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    HeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.cleanUp = /**
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    HeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    HeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    HeaderPickerComponent.propDecorators = {
        nzPlaceHolder: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzFormat: [{ type: Input }]
    };
    return HeaderPickerComponent;
}(AbstractPickerComponent));
export { HeaderPickerComponent };
function HeaderPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.supportPanels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFHaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUFVRixpREFBdUI7SUFhaEUsK0JBQVksSUFBbUI7ZUFDN0Isa0JBQU0sSUFBSSxDQUFDO0tBQ1o7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBRW5DLElBQU0sZUFBZSxHQUFnQixDQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMvRjs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyx5QkFBc0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRTtLQUNGOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixJQUFlO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTSxFQUFFLHFIQUFxSDs7WUFDNUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO0tBQ0Y7Ozs7OztJQUVELDZDQUFhOzs7OztJQUFiLFVBQWMsSUFBd0IsRUFBRSxLQUFnQjtRQUN0RCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzlCLGlCQUFNLGFBQWEsWUFBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7Ozs7SUFHTyx1Q0FBTzs7OztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7O2dCQTlEdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQVhRLGFBQWE7OztnQ0FhbkIsS0FBSztzQ0FFTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzs7Z0NBckJSO0VBZ0IyQyx1QkFBdUI7U0FBckQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcclxuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XHJcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgaGVhZGVyIHBhbmVscywgY3VycmVudCBzdXBwb3J0OiBZZWFyL01vbnRoXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgbnpEZWZhdWx0VmFsdWU6IENhbmR5RGF0ZTtcclxuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nOyAvLyBbQ2FubXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBvdXRwdXQgZm9ybWF0XHJcblxyXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsOyAvLyBbSW1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgZmluYWwgcGFuZWwgZm9yIHBpY2tpbmcgYSBkYXRlXHJcbiAgcGFuZWxNb2RlOiBQYW5lbE1vZGU7IC8vIEN1cnJlbnQgcGFuZWwgbW9kZVxyXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBzdXBwb3J0UGFuZWxzOiBQYW5lbE1vZGVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoaTE4bjogTnpJMThuU2VydmljZSkge1xyXG4gICAgc3VwZXIoaTE4bik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcclxuXHJcbiAgICBjb25zdCBhbGxIZWFkZXJQYW5lbHM6IFBhbmVsTW9kZVtdID0gWyAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnIF07XHJcbiAgICB0aGlzLnN1cHBvcnRQYW5lbHMgPSBhbGxIZWFkZXJQYW5lbHMuc2xpY2UoMCwgYWxsSGVhZGVyUGFuZWxzLmluZGV4T2YodGhpcy5lbmRQYW5lbE1vZGUpICsgMSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLm56UmVuZGVyRXh0cmFGb290ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdXBwb3J0UGFuZWxzLmluZGV4T2YobW9kZSkgPiAtMSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XHJcbiAgICB9IGVsc2UgeyAvLyBTaW5jZSB0aGUgZGVmYXVsdCBcImNsaWNrIHllYXJcIiBsb2dpYyBjYW4gYmUgXCJ5ZWFyIHBhbmVsXCIgLT4gXCJkYXRlIHBhbmVsXCIsIHdlIG5lZWQgZm9yY2UgdG8gdGhlIGVuZCBwYW5lbCBvdGhlcndpc2VcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hvb3NlVmFsdWUobW9kZTogU3VwcG9ydEhlYWRlclBhbmVsLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09IG1vZGUpIHtcclxuICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICB0aGlzLmNsZWFuVXAoKTtcclxuICAgIH1cclxuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFJlc3RvcmUgc29tZSBpbml0aWFsIHByb3BzIHRvIGxldCBvcGVuIGFzIG5ldyBpbiBuZXh0IHRpbWVcclxuICBwcml2YXRlIGNsZWFuVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInIHwgJ21vbnRoJztcclxuIl19