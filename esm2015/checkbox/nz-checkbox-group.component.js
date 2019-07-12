/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { InputBoolean } from '../core/util/convert';
/**
 * @record
 */
export function NzCheckBoxOptionInterface() { }
function NzCheckBoxOptionInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.label;
    /** @type {?} */
    NzCheckBoxOptionInterface.prototype.value;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.checked;
    /** @type {?|undefined} */
    NzCheckBoxOptionInterface.prototype.disabled;
}
export class NzCheckboxGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     */
    constructor(elementRef, focusMonitor) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.nzDisabled = false;
    }
    /**
     * @return {?}
     */
    onOptionChange() {
        this.onChange(this.options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.options = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
}
NzCheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-checkbox-group',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<label nz-checkbox\r\n  *ngFor=\"let option of options\"\r\n  [nzDisabled]=\"option.disabled || nzDisabled\"\r\n  [(nzChecked)]=\"option.checked\"\r\n  (nzCheckedChange)=\"onOptionChange()\">\r\n  <span>{{ option.label }}</span>\r\n</label>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzCheckboxGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-group]': 'true'
                }
            }] }
];
/** @nocollapse */
NzCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor }
];
NzCheckboxGroupComponent.propDecorators = {
    nzDisabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
function NzCheckboxGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.elementRef;
    /** @type {?} */
    NzCheckboxGroupComponent.prototype.focusMonitor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNoZWNrYm94L256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUF5QnBELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBWW5DLFlBQW9CLFVBQXNCLEVBQVUsWUFBMEI7UUFBMUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjOztRQVY5RSxnQkFBaUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOztRQUU1QyxpQkFBdUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRWxDLGtCQUFzQyxLQUFLLENBQUM7S0FPM0M7Ozs7SUFMRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0I7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUNoRDtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFrQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUEwQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxtQkFBbUI7Z0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyw0UEFBeUQ7Z0JBQ3pELFNBQVMsRUFBWTtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFNLGlCQUFpQjt3QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDdkQsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2dCQUNELElBQUksRUFBaUI7b0JBQ25CLDRCQUE0QixFQUFFLE1BQU07aUJBQ3JDO2FBQ0Y7Ozs7WUFsQ0MsVUFBVTtZQVFILFlBQVk7Ozt5QkFpQ2xCLEtBQUs7OztJQUFJLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNoZWNrYm94LWdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDaGVja2JveEdyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGkgICAgICA6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IG51bGw7XHJcbiAgb3B0aW9uczogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIG9uT3B0aW9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcbn1cclxuIl19