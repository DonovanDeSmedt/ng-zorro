/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(elementRef, renderer, document, cdr, focusMonitor) {
        return _super.call(this, elementRef, renderer, document, cdr, focusMonitor) || this;
    }
    NzRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio-button]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRadioComponent; }),
                            multi: true
                        },
                        {
                            provide: NzRadioComponent,
                            useExisting: forwardRef(function () { return NzRadioButtonComponent; })
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
    NzRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF5Qlosa0RBQWdCO0lBQzFELHFDQUFxQztJQUNyQyxnQ0FBWSxVQUFzQixFQUFFLFFBQW1CLEVBQW9CLFFBQWEsRUFBRSxHQUFzQixFQUFFLFlBQTBCO2VBQzFJLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUM7S0FDekQ7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLG1CQUFtQjtvQkFDeEMsU0FBUyxFQUFZO3dCQUNuQjs0QkFDRSxPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQzs0QkFDL0MsS0FBSyxFQUFRLElBQUk7eUJBQ2xCO3dCQUNEOzRCQUNFLE9BQU8sRUFBTSxnQkFBZ0I7NEJBQzdCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDO3lCQUN0RDtxQkFDRjtvQkFDRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG9ZQUF1RDtvQkFDdkQsSUFBSSxFQUFpQjt3QkFDbkIsa0NBQWtDLEVBQVcsTUFBTTt3QkFDbkQsMENBQTBDLEVBQUcsU0FBUzt3QkFDdEQsMkNBQTJDLEVBQUUsWUFBWTtxQkFDMUQ7aUJBQ0Y7Ozs7Z0JBaENDLFVBQVU7Z0JBRVYsU0FBUztnREFpQ2lELE1BQU0sU0FBQyxRQUFRO2dCQXJDekUsaUJBQWlCO2dCQVFWLFlBQVk7O2lDQVpyQjtFQXVDNEMsZ0JBQWdCO1NBQS9DLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXJhZGlvLWJ1dHRvbl0nLFxyXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGkgICAgICA6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGUgICAgOiBOelJhZGlvQ29tcG9uZW50LFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQnV0dG9uQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlcl0nICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkXScgOiAnY2hlY2tlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgTnpSYWRpb0NvbXBvbmVudCB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnksIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgZG9jdW1lbnQsIGNkciwgZm9jdXNNb25pdG9yKTtcclxuICB9XHJcbn1cclxuIl19