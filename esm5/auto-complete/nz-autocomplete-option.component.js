/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { scrollIntoView } from '../core/util/scroll-into-view-if-needed';
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
export { NzOptionSelectionChange };
function NzOptionSelectionChange_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.select = /**
     * @return {?}
     */
    function () {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.deselect = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    /**
     * Git display label
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.getLabel = /**
     * Git display label
     * @return {?}
     */
    function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    /**
     * Set active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * Set active (only styles)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    /**
     * Unset active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * Unset active (only styles)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        scrollIntoView(this.element.nativeElement);
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @param {?=} isUserInput
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    NzAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-option',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    host: {
                        'role': 'menuitem',
                        'class': 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'nzDisabled.toString()',
                        '(click)': 'selectViaInteraction()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NzAutocompleteOptionComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzLabel: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());
export { NzAutocompleteOptionComponent };
function NzAutocompleteOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekUsSUFBQTtJQUNFLGlDQUNTLFFBQ0E7O1FBREEsV0FBTSxHQUFOLE1BQU07UUFDTixnQkFBVyxHQUFYLFdBQVc7S0FFbkI7a0NBbkJIO0lBb0JDLENBQUE7QUFORCxtQ0FNQzs7Ozs7Ozs7SUE4QkMsdUNBQW9CLGlCQUFvQyxFQUFVLE9BQW1CO1FBQWpFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnJGLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsdUJBQXFDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRWpGLGNBQVMsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsS0FBSyxDQUFDO0tBR2hCOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDO0lBRUQsd0JBQXdCOzs7OztJQUN4QixnREFBUTs7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDaEQ7SUFFRCwrQkFBK0I7Ozs7O0lBQy9CLHVEQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjtJQUVELGlDQUFpQzs7Ozs7SUFDakMseURBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7SUFFRCw4REFBc0I7OztJQUF0QjtRQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsNERBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFTyxnRUFBd0I7Ozs7Y0FBQyxXQUE0QjtRQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7Z0JBbEY3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGdCQUFnQjtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxxQ0FBOEQ7b0JBQzlELElBQUksRUFBaUI7d0JBQ25CLE1BQU0sRUFBNEMsVUFBVTt3QkFDNUQsT0FBTyxFQUEyQywrQkFBK0I7d0JBQ2pGLGdEQUFnRCxFQUFFLFVBQVU7d0JBQzVELDhDQUE4QyxFQUFJLFFBQVE7d0JBQzFELGdEQUFnRCxFQUFFLFlBQVk7d0JBQzlELHNCQUFzQixFQUE0QixxQkFBcUI7d0JBQ3ZFLHNCQUFzQixFQUE0Qix1QkFBdUI7d0JBQ3pFLFNBQVMsRUFBeUMsd0JBQXdCO3FCQUMzRTtpQkFDRjs7OztnQkFwQ0MsaUJBQWlCO2dCQUVqQixVQUFVOzs7MEJBc0NULEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLE1BQU07OztRQURHLFlBQVksRUFBRTs7O3dDQTVDMUI7O1NBdUNhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBzY3JvbGxJbnRvVmlldyB9IGZyb20gJy4uL2NvcmUvdXRpbC9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNvdXJjZTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsXHJcbiAgICBwdWJsaWMgaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkge1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF1dG8tb3B0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAncm9sZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdtZW51aXRlbScsXHJcbiAgICAnY2xhc3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nICA6ICdhY3RpdmUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXHJcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWxlY3RlZC50b1N0cmluZygpJyxcclxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ256RGlzYWJsZWQudG9TdHJpbmcoKScsXHJcbiAgICAnKGNsaWNrKScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWxlY3RWaWFJbnRlcmFjdGlvbigpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4oKTtcclxuXHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2l0IGRpc3BsYXkgbGFiZWwgKi9cclxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubnpMYWJlbCB8fCB0aGlzLm56VmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgYWN0aXZlIChvbmx5IHN0eWxlcykgKi9cclxuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBVbnNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xyXG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk6IHZvaWQge1xyXG4gICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTdHlsZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEluYWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudChpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG5ldyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSh0aGlzLCBpc1VzZXJJbnB1dCkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19