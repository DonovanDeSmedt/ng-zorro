/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzFormDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.nzLayout}`]: this.nzLayout
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
}
NzFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-form]',
                providers: [NzUpdateHostClassService],
                host: {
                    '[class.ant-form]': 'true'
                }
            },] }
];
/** @nocollapse */
NzFormDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: Input }]
};
function NzFormDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.elementRef;
    /** @type {?} */
    NzFormDirective.prototype.renderer;
    /** @type {?} */
    NzFormDirective.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFTdEYsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVMxQixZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsd0JBQWtEO1FBQS9HLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQVJuSSxnQkFBb0IsWUFBWSxDQUFDO0tBU2hDOzs7O0lBUEQsV0FBVztRQUNULElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDM0UsQ0FBRSxZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQy9DLENBQUMsQ0FBQztLQUNKOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLFdBQVc7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFFLHdCQUF3QixDQUFFO2dCQUN2QyxJQUFJLEVBQU87b0JBQ1Qsa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7YUFDRjs7OztZQVRtQixVQUFVO1lBQTRCLFNBQVM7WUFDMUQsd0JBQXdCOzs7dUJBVTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvciA6ICdbbnotZm9ybV0nLFxyXG4gIHByb3ZpZGVyczogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBob3N0ICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm1dJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56TGF5b3V0ID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbIGBhbnQtZm9ybS0ke3RoaXMubnpMYXlvdXR9YCBdOiB0aGlzLm56TGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=