/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzTransferSearchComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    _handle() {
        this.valueChanged.emit(this.value);
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
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
NzTransferSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTransferSearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    valueChanged: [{ type: Output }],
    valueClear: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0cmFuc2Zlci9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pKLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFhcEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMMUMsb0JBQWtDLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0Qsa0JBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7S0FJTDs7OztJQUU5QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFRO1NBQ1Q7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUI7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLHNCQUFzQjtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIseWdCQUEwRDtnQkFDMUQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7Z0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ3BEOzs7O1lBUmlDLGlCQUFpQjs7OzBCQWFoRCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFFTCxNQUFNO3lCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXRyYW5zZmVyLXNlYXJjaF0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRyYW5zZmVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgX2hhbmRsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBfY2xlYXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy52YWx1ZUNsZWFyLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19