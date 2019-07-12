/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzTdComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showExpand = false;
        this._expand = false;
        this._showCheckbox = false;
        this.isIndentSizeSet = false;
        this.el = this.elementRef.nativeElement;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIndentSize(value) {
        this._indentSize = value;
        this.isIndentSizeSet = isNotNil(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzIndentSize() {
        return this._indentSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        this._expand = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzExpand() {
        return this._expand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowExpand(value) {
        this._showExpand = toBoolean(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzShowExpand() {
        return this._showExpand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get nzShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @return {?}
     */
    updateExpandIconClass() {
        if (this.nzShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    expandChange(e) {
        e.stopPropagation();
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    }
}
NzTdComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td)',
                template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\r\n<label\r\n  *ngIf=\"nzShowCheckbox\"\r\n  nz-checkbox\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [(ngModel)]=\"nzChecked\"\r\n  [nzIndeterminate]=\"nzIndeterminate\"\r\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n</label>\r\n<span\r\n  *ngIf=\"!nzShowExpand && nzIndentSize != null\"\r\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\r\n<span\r\n  *ngIf=\"nzShowExpand\"\r\n  class=\"ant-table-row-expand-icon\"\r\n  (click)=\"expandChange($event)\"\r\n  [class.ant-table-row-expanded]=\"nzExpand\"\r\n  [class.ant-table-row-collapsed]=\"!nzExpand\"></span>\r\n<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzTdComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTdComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzIndentSize: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzLeft: [{ type: Input }],
    nzRight: [{ type: Input }]
};
function NzTdComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTdComponent.prototype._showExpand;
    /** @type {?} */
    NzTdComponent.prototype._indentSize;
    /** @type {?} */
    NzTdComponent.prototype._expand;
    /** @type {?} */
    NzTdComponent.prototype._showCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.isIndentSizeSet;
    /** @type {?} */
    NzTdComponent.prototype.el;
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTdComponent.prototype.elementRef;
    /** @type {?} */
    NzTdComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPakQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBNkZ4QixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzJCQTVGakQsS0FBSzt1QkFFVCxLQUFLOzZCQUNDLEtBQUs7UUFDN0IsdUJBQWtCLEtBQUssQ0FBQztRQUN4QixVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxpQkFBcUIsS0FBSyxDQUFDO1FBQzNCLGtCQUFzQixLQUFLLENBQUM7UUFDNUIsdUJBQTJCLEtBQUssQ0FBQztRQUNqQyx1QkFBcUMsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNqRSxzQkFBb0MsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQW1GL0Q7Ozs7O0lBakZELElBQ0ksWUFBWSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMs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Ozs7WUFoR0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUssd0JBQXdCO2dCQUNyQyxxdUJBQXFDO2FBQ3RDOzs7O1lBZEMsVUFBVTtZQUlWLFNBQVM7Ozt3QkFrQlIsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNOzJCQUVOLEtBQUs7dUJBV0wsS0FBSzsyQkFTTCxLQUFLOzZCQVVMLEtBQUs7cUJBY0wsS0FBSztzQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3IgICA6ICd0ZDpub3QoLm56LWRpc2FibGUtdGQpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRkQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9zaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5kZW50U2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2V4cGFuZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3Nob3dDaGVja2JveCA9IGZhbHNlO1xyXG4gIGlzSW5kZW50U2l6ZVNldCA9IGZhbHNlO1xyXG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpJbmRlbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2luZGVudFNpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNJbmRlbnRTaXplU2V0ID0gaXNOb3ROaWwodmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekluZGVudFNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmRlbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpFeHBhbmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93RXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93RXhwYW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dFeHBhbmQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNob3dDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd0NoZWNrYm94ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9zaG93Q2hlY2tib3gpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaG93Q2hlY2tib3goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NoZWNrYm94O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpMZWZ0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLWxlZnQtc3RpY2t5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtbGVmdC1zdGlja3knKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpSaWdodCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1yaWdodC1zdGlja3knKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncmlnaHQnLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtcmlnaHQtc3RpY2t5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3JpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNob3dFeHBhbmQgJiYgIXRoaXMuaXNJbmRlbnRTaXplU2V0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24tY2VsbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRDaGFuZ2UoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm56RXhwYW5kID0gIXRoaXMubnpFeHBhbmQ7XHJcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodGhpcy5uekV4cGFuZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxufVxyXG4iXX0=