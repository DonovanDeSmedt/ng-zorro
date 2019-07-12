/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '../core/util/convert';
export class NzSwitchComponent {
    /**
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(cdr, focusMonitor) {
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        if ((!this.nzDisabled) && (!this.nzLoading) && (!this.nzControl)) {
            this.updateValue(!this.checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.nzControl) {
            if (e.keyCode === LEFT_ARROW) { // Left
                // Left
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) { // Right
                // Right
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) { // Space, Enter
                // Space, Enter
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.switchElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
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
        this.cdr.markForCheck();
    }
}
NzSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-switch',
                preserveWhitespaces: false,
                template: "<button type=\"button\" #switchElement\r\n  nz-wave\r\n  class=\"ant-switch\"\r\n  [disabled]=\"nzDisabled\"\r\n  [class.ant-switch-checked]=\"checked\"\r\n  [class.ant-switch-loading]=\"nzLoading\"\r\n  [class.ant-switch-disabled]=\"nzDisabled\"\r\n  [class.ant-switch-small]=\"nzSize === 'small'\"\r\n  [nzWaveExtraNode]=\"true\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n  <i *ngIf=\"nzLoading\" nz-icon type=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n  <span class=\"ant-switch-inner\">\r\n    <span>\r\n      <ng-container *ngIf=\"checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </span>\r\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSwitchComponent),
                        multi: true
                    }
                ],
                styles: [`
    nz-switch {
      display: inline-block;
    }`]
            }] }
];
/** @nocollapse */
NzSwitchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzSwitchComponent.propDecorators = {
    switchElement: [{ type: ViewChild, args: ['switchElement',] }],
    nzLoading: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzControl: [{ type: Input }],
    nzCheckedChildren: [{ type: Input }],
    nzUnCheckedChildren: [{ type: Input }],
    nzSize: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzControl", void 0);
function NzSwitchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSwitchComponent.prototype.checked;
    /** @type {?} */
    NzSwitchComponent.prototype.switchElement;
    /** @type {?} */
    NzSwitchComponent.prototype.onChange;
    /** @type {?} */
    NzSwitchComponent.prototype.onTouched;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLoading;
    /** @type {?} */
    NzSwitchComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSwitchComponent.prototype.nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.nzCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzUnCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzSize;
    /** @type {?} */
    NzSwitchComponent.prototype.cdr;
    /** @type {?} */
    NzSwitchComponent.prototype.focusMonitor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzd2l0Y2gvbnotc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFxQnBELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBa0Q1QixZQUFvQixHQUFzQixFQUFVLFlBQTBCO1FBQTFELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFqRDlFLGVBQVUsS0FBSyxDQUFDO1FBRWhCLGdCQUFxQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDaEQsaUJBQXdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQyxpQkFBcUMsS0FBSyxDQUFDO1FBQzNDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsaUJBQXFDLEtBQUssQ0FBQztLQTRDMUM7Ozs7O0lBdENELE9BQU8sQ0FBQyxDQUFhO1FBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENB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QUFDLGlCQUFpQixDQUFDO3dCQUNoRCxLQUFLLEVBQVEsSUFBSTtxQkFDbEI7aUJBQ0Y7eUJBQ3NCOzs7TUFHbkI7YUFFTDs7OztZQWhDQyxpQkFBaUI7WUFOVixZQUFZOzs7NEJBeUNsQixTQUFTLFNBQUMsZUFBZTt3QkFHekIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7O0lBUHpCLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRU5URVIsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOelNpemVEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXN3aXRjaCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICBuei1zd2l0Y2gge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xyXG4gIGNoZWNrZWQgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdzd2l0Y2hFbGVtZW50JykgcHJpdmF0ZSBzd2l0Y2hFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29udHJvbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelVuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZURTVHlwZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXHJcbiAgb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoKCF0aGlzLm56RGlzYWJsZWQpICYmICghdGhpcy5uekxvYWRpbmcpICYmICghdGhpcy5uekNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpDb250cm9sKSB7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cpIHsgLy8gTGVmdFxyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7IC8vIFJpZ2h0XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7IC8vIFNwYWNlLCBFbnRlclxyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuY2hlY2tlZCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN3aXRjaEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zd2l0Y2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAvLyBXaGVuIGEgZm9jdXNlZCBlbGVtZW50IGJlY29tZXMgZGlzYWJsZWQsIHRoZSBicm93c2VyICppbW1lZGlhdGVseSogZmlyZXMgYSBibHVyIGV2ZW50LlxyXG4gICAgICAgIC8vIEFuZ3VsYXIgZG9lcyBub3QgZXhwZWN0IGV2ZW50cyB0byBiZSByYWlzZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24sIHNvIGFueSBzdGF0ZSBjaGFuZ2VcclxuICAgICAgICAvLyAoc3VjaCBhcyBhIGZvcm0gY29udHJvbCdzICduZy10b3VjaGVkJykgd2lsbCBjYXVzZSBhIGNoYW5nZWQtYWZ0ZXItY2hlY2tlZCBlcnJvci5cclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc3OTMuIFRvIHdvcmsgYXJvdW5kIHRoaXMsIHdlIGRlZmVyXHJcbiAgICAgICAgLy8gdGVsbGluZyB0aGUgZm9ybSBjb250cm9sIGl0IGhhcyBiZWVuIHRvdWNoZWQgdW50aWwgdGhlIG5leHQgdGljay5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19