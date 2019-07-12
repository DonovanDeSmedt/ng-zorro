/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
export class NzRadioButtonComponent extends NzRadioComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} document
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, document, cdr, focusMonitor) {
        super(elementRef, renderer, document, cdr, focusMonitor);
    }
}
NzRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-radio-button]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzRadioComponent),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef(() => NzRadioButtonComponent)
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"nzDisabled\">\r\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\r\n  <span class=\"ant-radio-button-inner\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>",
                host: {
                    '[class.ant-radio-button-wrapper]': 'true',
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                }
            }] }
];
/** @nocollapse */
NzRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUJ4RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQUUxRCxZQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBb0IsUUFBYSxFQUFFLEdBQXNCLEVBQUUsWUFBMEI7UUFDMUksS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUMxRDs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsbUJBQW1CO2dCQUN4QyxTQUFTLEVBQVk7b0JBQ25CO3dCQUNFLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQy9DLEtBQUssRUFBUSxJQUFJO3FCQUNsQjtvQkFDRDt3QkFDRSxPQUFPLEVBQU0sZ0JBQWdCO3dCQUM3QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUN0RDtpQkFDRjtnQkFDRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG9ZQUF1RDtnQkFDdkQsSUFBSSxFQUFpQjtvQkFDbkIsa0NBQWtDLEVBQVcsTUFBTTtvQkFDbkQsMENBQTBDLEVBQUcsU0FBUztvQkFDdEQsMkNBQTJDLEVBQUUsWUFBWTtpQkFDMUQ7YUFDRjs7OztZQWhDQyxVQUFVO1lBRVYsU0FBUzs0Q0FpQ2lELE1BQU0sU0FBQyxRQUFRO1lBckN6RSxpQkFBaUI7WUFRVixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotcmFkaW8tYnV0dG9uXScsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZSAgICA6IE56UmFkaW9Db21wb25lbnQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9CdXR0b25Db21wb25lbnQpXHJcbiAgICB9XHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyXScgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJyA6ICdjaGVja2VkJyxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOelJhZGlvQ29tcG9uZW50IHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBkb2N1bWVudCwgY2RyLCBmb2N1c01vbml0b3IpO1xyXG4gIH1cclxufVxyXG4iXX0=