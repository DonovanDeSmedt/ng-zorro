/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(ngControl) {
        this.ngControl = ngControl;
        this._disabled = false;
        this.nzSize = 'default';
    }
    Object.defineProperty(NzInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    host: {
                        '[class.ant-input]': 'true',
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return NzInputDirective;
}());
export { NzInputDirective };
function NzInputDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputDirective.prototype._disabled;
    /** @type {?} */
    NzInputDirective.prototype.nzSize;
    /** @type {?} */
    NzInputDirective.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQTJCL0MsMEJBQXVDLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7eUJBZnZDLEtBQUs7UUFDekIsY0FBaUMsU0FBUyxDQUFDO0tBZTFDO0lBYkQsc0JBQ0ksc0NBQVE7Ozs7UUFJWjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBVkQsVUFDYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFNO3dCQUNSLG1CQUFtQixFQUFXLE1BQU07d0JBQ3BDLDRCQUE0QixFQUFFLFVBQVU7d0JBQ3hDLHNCQUFzQixFQUFRLG9CQUFvQjt3QkFDbEQsc0JBQXNCLEVBQVEsb0JBQW9CO3FCQUNuRDtpQkFDRjs7OztnQkFaUSxTQUFTLHVCQTZCSCxRQUFRLFlBQUksSUFBSTs7O3lCQWQ1QixLQUFLOzJCQUVMLEtBQUs7OzJCQXZCUjs7U0FtQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1pbnB1dF0nLFxyXG4gIGhvc3QgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dF0nICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJyAgICAgIDogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nICAgICAgOiBgbnpTaXplID09PSAnc21hbGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXREaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==