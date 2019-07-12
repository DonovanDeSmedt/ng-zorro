/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
var NzTimeValueAccessorDirective = /** @class */ (function () {
    function NzTimeValueAccessorDirective(i18n, elementRef) {
        this.i18n = i18n;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.i18n.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.i18n.formatDate(value, this.nzTime);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    NzTimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzTime]',
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    NzTimeValueAccessorDirective.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ElementRef }
    ]; };
    NzTimeValueAccessorDirective.propDecorators = {
        nzTime: [{ type: Input }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return NzTimeValueAccessorDirective;
}());
export { NzTimeValueAccessorDirective };
function NzTimeValueAccessorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.nzTime;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.i18n;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZS1waWNrZXIvbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUEwQ3RELHNDQUFvQixJQUFtQixFQUFVLFVBQXNCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0tBQ3RFOzs7O0lBNUJELDRDQUFLOzs7SUFETDtRQUVFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7OztJQUdELDJDQUFJOzs7SUFESjtRQUVFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELDhDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsOENBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtLQUNGOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoRzs7Ozs7SUFLRCxpREFBVTs7OztJQUFWLFVBQVcsS0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoRjs7Ozs7SUFFRCx1REFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBeUI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsd0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFHLGVBQWU7b0JBQzFCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFDdkY7aUJBQ0Y7Ozs7Z0JBUFEsYUFBYTtnQkFGRixVQUFVOzs7eUJBYzNCLEtBQUs7d0JBRUwsWUFBWSxTQUFDLE9BQU87dUJBS3BCLFlBQVksU0FBQyxNQUFNOzt1Q0FyQnRCOztTQVVhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvciA6ICdpbnB1dFtuelRpbWVdJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoOiAoKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIG56VGltZTogc3RyaW5nO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpXHJcbiAga2V5dXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZWQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmkxOG4ucGFyc2VUaW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKTtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG91Y2hlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFJhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5uelRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==