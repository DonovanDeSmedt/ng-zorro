/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
export class NzInputDirective {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
        this._disabled = false;
        this.nzSize = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
}
NzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-input]',
                host: {
                    '[class.ant-input]': 'true',
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`
                }
            },] }
];
/** @nocollapse */
NzInputDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
NzInputDirective.propDecorators = {
    nzSize: [{ type: Input }],
    disabled: [{ type: Input }]
};
function NzInputDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputDirective.prototype._disabled;
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBV2pELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFnQjNCLFlBQXVDLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7eUJBZnZDLEtBQUs7UUFDekIsY0FBaUMsU0FBUyxDQUFDO0tBZTFDOzs7OztJQWJELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBTTtvQkFDUixtQkFBbUIsRUFBVyxNQUFNO29CQUNwQyw0QkFBNEIsRUFBRSxVQUFVO29CQUN4QyxzQkFBc0IsRUFBUSxvQkFBb0I7b0JBQ2xELHNCQUFzQixFQUFRLG9CQUFvQjtpQkFDbkQ7YUFDRjs7OztZQVpRLFNBQVMsdUJBNkJILFFBQVEsWUFBSSxJQUFJOzs7cUJBZDVCLEtBQUs7dUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotaW5wdXRdJyxcclxuICBob3N0ICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXRdJyAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWxnXScgICAgICA6IGBuelNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc21dJyAgICAgIDogYG56U2l6ZSA9PT0gJ3NtYWxsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0RGlyZWN0aXZlIHtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xyXG4gIH1cclxufVxyXG4iXX0=