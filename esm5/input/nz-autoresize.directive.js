/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
export function AutoSizeType() { }
function AutoSizeType_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
var NzAutoResizeDirective = /** @class */ (function () {
    function NzAutoResizeDirective(elementRef, ngZone, ngControl, platform) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.ngControl = ngControl;
        this.platform = platform;
        this._autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(NzAutoResizeDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._autosize = true;
            }
            else if (typeof value !== 'boolean') {
                this._autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.setMaxHeight();
                this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzAutoResizeDirective.prototype.resizeToFitContent = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = /** @type {?} */ (this.el);
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () {
                var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }); });
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    /**
     * @return {?}
     */
    NzAutoResizeDirective.prototype.cacheTextareaLineHeight = /**
     * @return {?}
     */
    function () {
        if (this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textareaClone = /** @type {?} */ (this.el.cloneNode(false));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    };
    /**
     * @return {?}
     */
    NzAutoResizeDirective.prototype.setMinHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this.cachedLineHeight ?
            this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutoResizeDirective.prototype.setMaxHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this.cachedLineHeight ?
            this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutoResizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzAutosize && this.platform.isBrowser) {
            if (this.ngControl) {
                this.resizeToFitContent();
                this.ngZone.runOutsideAngular(function () {
                    fromEvent(window, 'resize')
                        .pipe(auditTime(16), takeUntil(_this.destroy$))
                        .subscribe(function () { return _this.resizeToFitContent(true); });
                });
                this.ngControl.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this.resizeToFitContent(); });
            }
            else {
                console.warn('nzAutosize must work with ngModel or ReactiveForm');
            }
        }
    };
    /**
     * @return {?}
     */
    NzAutoResizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzAutoResizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[nzAutosize]',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutoResizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: Platform }
    ]; };
    NzAutoResizeDirective.propDecorators = {
        nzAutosize: [{ type: Input }]
    };
    return NzAutoResizeDirective;
}());
export { NzAutoResizeDirective };
function NzAutoResizeDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutoResizeDirective.prototype._autosize;
    /** @type {?} */
    NzAutoResizeDirective.prototype.el;
    /** @type {?} */
    NzAutoResizeDirective.prototype.cachedLineHeight;
    /** @type {?} */
    NzAutoResizeDirective.prototype.previousValue;
    /** @type {?} */
    NzAutoResizeDirective.prototype.previousMinRows;
    /** @type {?} */
    NzAutoResizeDirective.prototype.minRows;
    /** @type {?} */
    NzAutoResizeDirective.prototype.maxRows;
    /** @type {?} */
    NzAutoResizeDirective.prototype.destroy$;
    /** @type {?} */
    NzAutoResizeDirective.prototype.inputGap;
    /** @type {?} */
    NzAutoResizeDirective.prototype.elementRef;
    /** @type {?} */
    NzAutoResizeDirective.prototype.ngZone;
    /** @type {?} */
    NzAutoResizeDirective.prototype.ngControl;
    /** @type {?} */
    NzAutoResizeDirective.prototype.platform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3Jlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaW5wdXQvbnotYXV0b3Jlc2l6ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixJQUFJLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7OztJQXdKcEQsK0JBQW9CLFVBQXNCLEVBQVUsTUFBYyxFQUE2QixTQUFvQixFQUFVLFFBQWtCO1FBQTNILGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO3lCQXhJbkcsS0FBSztrQkFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7d0JBTS9ELElBQUksT0FBTyxFQUFFO3dCQUNiLEVBQUU7S0FpSXBCO0lBL0hELHNCQUNJLDZDQUFVOzs7O1FBWWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBZkQsVUFDZSxLQUFzQztZQUNuRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksQ0FB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QVU7Z0JBRVYsTUFBTTtnQkFLQyxTQUFTLHVCQTBKcUQsUUFBUSxZQUFJLElBQUk7Z0JBcks5RSxRQUFROzs7NkJBdUNkLEtBQUs7O2dDQXZDUjs7U0E0QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvU2l6ZVR5cGUge1xyXG4gIG1pblJvd3M/OiBudW1iZXI7XHJcbiAgbWF4Um93cz86IG51bWJlcjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVtuekF1dG9zaXplXScsXHJcbiAgaG9zdCAgICA6IHtcclxuICAgIC8vIFRleHRhcmVhIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgZGlyZWN0aXZlIGFwcGxpZWQgc2hvdWxkIGhhdmUgYSBzaW5nbGUgcm93IGJ5IGRlZmF1bHQuXHJcbiAgICAvLyBCcm93c2VycyBub3JtYWxseSBzaG93IHR3byByb3dzIGJ5IGRlZmF1bHQgYW5kIHRoZXJlZm9yZSB0aGlzIGxpbWl0cyB0aGUgbWluUm93cyBiaW5kaW5nLlxyXG4gICAgcm93czogJzEnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvUmVzaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9hdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYWNoZWRMaW5lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c01pblJvd3M6IG51bWJlcjtcclxuICBwcml2YXRlIG1pblJvd3M6IG51bWJlcjtcclxuICBwcml2YXRlIG1heFJvd3M6IG51bWJlcjtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGlucHV0R2FwID0gMTA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b3NpemUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9zaXplID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgdGhpcy5fYXV0b3NpemUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gdmFsdWUubWluUm93cztcclxuICAgICAgdGhpcy5tYXhSb3dzID0gdmFsdWUubWF4Um93cztcclxuICAgICAgdGhpcy5zZXRNYXhIZWlnaHQoKTtcclxuICAgICAgdGhpcy5zZXRNaW5IZWlnaHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekF1dG9zaXplKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9zaXplO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplVG9GaXRDb250ZW50KGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVUZXh0YXJlYUxpbmVIZWlnaHQoKTtcclxuXHJcbiAgICAvLyBJZiB3ZSBoYXZlbid0IGRldGVybWluZWQgdGhlIGxpbmUtaGVpZ2h0IHlldCwgd2Uga25vdyB3ZSdyZSBzdGlsbCBoaWRkZW4gYW5kIHRoZXJlJ3Mgbm8gcG9pbnRcclxuICAgIC8vIGluIGNoZWNraW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhLlxyXG4gICAgaWYgKCF0aGlzLmNhY2hlZExpbmVIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcclxuXHJcbiAgICAvLyBPbmx5IHJlc2l6ZSBpZiB0aGUgdmFsdWUgb3IgbWluUm93cyBoYXZlIGNoYW5nZWQgc2luY2UgdGhlc2UgY2FsY3VsYXRpb25zIGNhbiBiZSBleHBlbnNpdmUuXHJcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMubWluUm93cyA9PT0gdGhpcy5wcmV2aW91c01pblJvd3MgJiYgdmFsdWUgPT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gdGV4dGFyZWEucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGhlaWdodCB0byBhdXRvIGluIG9yZGVyIHRvIHNocmluayBiYWNrIHRvIGl0cyBkZWZhdWx0IHNpemUuXHJcbiAgICAvLyBBbHNvIHRlbXBvcmFyaWx5IGZvcmNlIG92ZXJmbG93OmhpZGRlbiwgc28gc2Nyb2xsIGJhcnMgZG8gbm90IGludGVyZmVyZSB3aXRoIGNhbGN1bGF0aW9ucy5cclxuICAgIC8vIExvbmcgcGxhY2Vob2xkZXJzIHRoYXQgYXJlIHdpZGVyIHRoYW4gdGhlIHRleHRhcmVhIHdpZHRoIG1heSBsZWFkIHRvIGEgYmlnZ2VyIHNjcm9sbEhlaWdodFxyXG4gICAgLy8gdmFsdWUuIFRvIGVuc3VyZSB0aGF0IHRoZSBzY3JvbGxIZWlnaHQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBjb250ZW50LCB0aGUgcGxhY2Vob2xkZXJzXHJcbiAgICAvLyBuZWVkIHRvIGJlIHJlbW92ZWQgdGVtcG9yYXJpbHkuXHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5pbnB1dEdhcCkgLyB0aGlzLmNhY2hlZExpbmVIZWlnaHQpICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcDtcclxuXHJcbiAgICAvLyBVc2UgdGhlIHNjcm9sbEhlaWdodCB0byBrbm93IGhvdyBsYXJnZSB0aGUgdGV4dGFyZWEgKndvdWxkKiBiZSBpZiBmaXQgaXRzIGVudGlyZSB2YWx1ZS5cclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyVGV4dDtcclxuXHJcbiAgICAvLyBPbiBGaXJlZm94IHJlc2l6aW5nIHRoZSB0ZXh0YXJlYSB3aWxsIHByZXZlbnQgaXQgZnJvbSBzY3JvbGxpbmcgdG8gdGhlIGNhcmV0IHBvc2l0aW9uLlxyXG4gICAgLy8gV2UgbmVlZCB0byByZS1zZXQgdGhlIHNlbGVjdGlvbiBpbiBvcmRlciBmb3IgaXQgdG8gc2Nyb2xsIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24uXHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQgfSA9IHRleHRhcmVhO1xyXG5cclxuICAgICAgICAvLyBJRSB3aWxsIHRocm93IGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBpZiB3ZSB0cnkgdG8gc2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYWZ0ZXIgdGhlXHJcbiAgICAgICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcclxuICAgICAgICAvLyBiZXR3ZWVuIHRoZSB0aW1lIHdlIHJlcXVlc3RlZCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCB3aGVuIGl0IHdhcyBleGVjdXRlZC5cclxuICAgICAgICAvLyBBbHNvIG5vdGUgdGhhdCB3ZSBoYXZlIHRvIGFzc2VydCB0aGF0IHRoZSB0ZXh0YXJlYSBpcyBmb2N1c2VkIGJlZm9yZSB3ZSBzZXQgdGhlXHJcbiAgICAgICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXHJcbiAgICAgICAgLy8gaXQgdG8gcmVjZWl2ZSBmb2N1cyBvbiBJRSBhbmQgRWRnZS5cclxuICAgICAgICBpZiAoIXRoaXMuZGVzdHJveSQuaXNTdG9wcGVkICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRleHRhcmVhKSB7XHJcbiAgICAgICAgICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMucHJldmlvdXNNaW5Sb3dzID0gdGhpcy5taW5Sb3dzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWNoZVRleHRhcmVhTGluZUhlaWdodCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNhY2hlZExpbmVIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBhIGNsb25lIGVsZW1lbnQgYmVjYXVzZSB3ZSBoYXZlIHRvIG92ZXJyaWRlIHNvbWUgc3R5bGVzLlxyXG4gICAgY29uc3QgdGV4dGFyZWFDbG9uZSA9IHRoaXMuZWwuY2xvbmVOb2RlKGZhbHNlKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGV4dGFyZWFDbG9uZS5yb3dzID0gMTtcclxuXHJcbiAgICAvLyBVc2UgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgc28gdGhhdCB0aGlzIGRvZXNuJ3QgY2F1c2UgYSBicm93c2VyIGxheW91dCBhbmQgdXNlXHJcbiAgICAvLyBgdmlzaWJpbGl0eTogaGlkZGVuYCBzbyB0aGF0IG5vdGhpbmcgaXMgcmVuZGVyZWQuIENsZWFyIGFueSBvdGhlciBzdHlsZXMgdGhhdFxyXG4gICAgLy8gd291bGQgYWZmZWN0IHRoZSBoZWlnaHQuXHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgLy8gSW4gRmlyZWZveCBpdCBoYXBwZW5zIHRoYXQgdGV4dGFyZWEgZWxlbWVudHMgYXJlIGFsd2F5cyBiaWdnZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGFtb3VudFxyXG4gICAgLy8gb2Ygcm93cy4gVGhpcyBpcyBiZWNhdXNlIEZpcmVmb3ggdHJpZXMgdG8gYWRkIGV4dHJhIHNwYWNlIGZvciB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuXHJcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdGhhdCByZW1vdmVzIHRoZSBleHRyYSBzcGFjZSBmb3IgdGhlIHNjcm9sbGJhciwgd2UgY2FuIGp1c3Qgc2V0IG92ZXJmbG93XHJcbiAgICAvLyB0byBoaWRkZW4uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlIGlzIG5vIGludmFsaWQgY2FsY3VsYXRpb24gb2YgdGhlIGxpbmUgaGVpZ2h0LlxyXG4gICAgLy8gU2VlIEZpcmVmb3ggYnVnIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzM2NTRcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGV4dGFyZWFDbG9uZSk7XHJcbiAgICB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPSB0ZXh0YXJlYUNsb25lLmNsaWVudEhlaWdodCAtIHRoaXMuaW5wdXRHYXAgLSAxO1xyXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRleHRhcmVhQ2xvbmUpO1xyXG5cclxuICAgIC8vIE1pbiBhbmQgbWF4IGhlaWdodHMgaGF2ZSB0byBiZSByZS1jYWxjdWxhdGVkIGlmIHRoZSBjYWNoZWQgbGluZSBoZWlnaHQgY2hhbmdlc1xyXG4gICAgdGhpcy5zZXRNaW5IZWlnaHQoKTtcclxuICAgIHRoaXMuc2V0TWF4SGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRNaW5IZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLm1pblJvd3MgJiYgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID9cclxuICAgICAgYCR7dGhpcy5taW5Sb3dzICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcH1weGAgOiBudWxsO1xyXG5cclxuICAgIGlmIChtaW5IZWlnaHQpIHtcclxuICAgICAgdGhpcy5lbC5zdHlsZS5taW5IZWlnaHQgPSBtaW5IZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNYXhIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLm1heFJvd3MgJiYgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID9cclxuICAgICAgYCR7dGhpcy5tYXhSb3dzICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcH1weGAgOiBudWxsO1xyXG5cclxuICAgIGlmIChtYXhIZWlnaHQpIHtcclxuICAgICAgdGhpcy5lbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvc2l6ZSAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgICAgLnBpcGUoYXVkaXRUaW1lKDE2KSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ256QXV0b3NpemUgbXVzdCB3b3JrIHdpdGggbmdNb2RlbCBvciBSZWFjdGl2ZUZvcm0nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19