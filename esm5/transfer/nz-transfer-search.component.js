/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var NzTransferSearchComponent = /** @class */ (function () {
    // endregion
    function NzTransferSearchComponent(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype._handle = /**
     * @return {?}
     */
    function () {
        this.valueChanged.emit(this.value);
    };
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    };
    /**
     * @return {?}
     */
    NzTransferSearchComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    NzTransferSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-transfer-search]',
                    preserveWhitespaces: false,
                    template: "<input [(ngModel)]=\"value\" (ngModelChange)=\"_handle()\" [disabled]=\"disabled\" [placeholder]=\"placeholder\"\r\n  class=\"ant-input ant-transfer-list-search\" [ngClass]=\"{'ant-input-disabled': disabled}\">\r\n<a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\r\n  <i nz-icon type=\"close-circle\"></i>\r\n</a>\r\n<ng-template #def>\r\n  <span class=\"ant-transfer-list-search-action\"><i nz-icon type=\"search\"></i></span>\r\n</ng-template>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferSearchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzTransferSearchComponent.propDecorators = {
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        valueChanged: [{ type: Output }],
        valueClear: [{ type: Output }]
    };
    return NzTransferSearchComponent;
}());
export { NzTransferSearchComponent };
function NzTransferSearchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferSearchComponent.prototype.placeholder;
    /** @type {?} */
    NzTransferSearchComponent.prototype.value;
    /** @type {?} */
    NzTransferSearchComponent.prototype.disabled;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueChanged;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueClear;
    /** @type {?} */
    NzTransferSearchComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0cmFuc2Zlci9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW9CL0ksWUFBWTtJQUVaLG1DQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUwxQyxvQkFBa0MsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxrQkFBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUlMOzs7O0lBRTlDLDJDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7OztJQUVELDBDQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFRO1NBQ1Q7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsc0JBQXNCO29CQUMzQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQix5Z0JBQTBEO29CQUMxRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07aUJBQ3BEOzs7O2dCQVJpQyxpQkFBaUI7Ozs4QkFhaEQsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBRUwsTUFBTTs2QkFDTixNQUFNOztvQ0FsQlQ7O1NBU2EseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei10cmFuc2Zlci1zZWFyY2hdJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgLy8gcmVnaW9uOiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIF9oYW5kbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIHRoaXMudmFsdWVDbGVhci5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==