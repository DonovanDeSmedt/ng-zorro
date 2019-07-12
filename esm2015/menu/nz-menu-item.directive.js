/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export class NzMenuItemDirective {
    /**
     * @param {?} renderer
     * @param {?} cd
     * @param {?} nzMenuDirective
     * @param {?} nzSubMenuComponent
     * @param {?} hostElement
     */
    constructor(renderer, cd, nzMenuDirective, nzSubMenuComponent, hostElement) {
        this.renderer = renderer;
        this.cd = cd;
        this.nzMenuDirective = nzMenuDirective;
        this.nzSubMenuComponent = nzSubMenuComponent;
        this.hostElement = hostElement;
        this._disabled = false;
        this._selected = false;
        this._initialized = false;
        this.level = 0;
        this.padding = null;
        this.isInDropDown = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelected(value) {
        this._selected = toBoolean(value);
        if (this._initialized) {
            this.setClass();
        }
    }
    /**
     * @return {?}
     */
    get nzSelected() {
        return this._selected;
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    onClickItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuDirective.clickItem(this);
        if (this.nzMenuDirective.nzSelectable) {
            this.nzMenuDirective.clearAllSelected();
            this.nzSelected = true;
        }
        if (this.nzSubMenuComponent) {
            this.nzSubMenuComponent.clickSubMenuDropDown();
        }
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownDisableClass() {
        return this.isInDropDown && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuDisableClass() {
        return (!this.isInDropDown) && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setPaddingLeft() {
        if (this.nzMenuDirective.nzMode === 'inline') {
            if (this.nzSubMenuComponent) {
                /** if in sub menu component and host menu's mode is inline add PADDING_BASE * level padding */
                return (this.nzSubMenuComponent.level + 1) * this.nzMenuDirective.nzInlineIndent;
            }
            else {
                /** not in sub menu component but root menu's mode is inline return default padding */
                return this.nzMenuDirective.nzInlineIndent;
            }
        }
        else {
            return this.padding;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
        this.setClass();
        this._initialized = true;
    }
    /**
     * @return {?}
     */
    setClass() {
        if (this._selected) {
            this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
    }
}
NzMenuItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu-item]'
            },] }
];
/** @nocollapse */
NzMenuItemDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NzMenuDirective },
    { type: NzSubMenuComponent, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
NzMenuItemDirective.propDecorators = {
    nzDisabled: [{ type: Input }],
    nzSelected: [{ type: Input }],
    onClickItem: [{ type: HostListener, args: ['click', ['$event'],] }],
    isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item',] }],
    isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu-item',] }],
    setDropDownDisableClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item-disabled',] }],
    setMenuDisableClass: [{ type: HostBinding, args: ['class.ant-menu-item-disabled',] }],
    setPaddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }]
};
function NzMenuItemDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMenuItemDirective.prototype._disabled;
    /** @type {?} */
    NzMenuItemDirective.prototype._selected;
    /** @type {?} */
    NzMenuItemDirective.prototype._initialized;
    /** @type {?} */
    NzMenuItemDirective.prototype.level;
    /** @type {?} */
    NzMenuItemDirective.prototype.padding;
    /** @type {?} */
    NzMenuItemDirective.prototype.isInDropDown;
    /** @type {?} */
    NzMenuItemDirective.prototype.renderer;
    /** @type {?} */
    NzMenuItemDirective.prototype.cd;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMenuDirective;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSubMenuComponent;
    /** @type {?} */
    NzMenuItemDirective.prototype.hostElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtZW51L256LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLNUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFtRjlCLFlBQW9CLFFBQW1CLEVBQVMsRUFBcUIsRUFBVSxlQUFnQyxFQUFxQixrQkFBc0MsRUFBVSxXQUF1QjtRQUF2TCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBcUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3lCQWxGdkwsS0FBSzt5QkFDTCxLQUFLOzRCQUNGLEtBQUs7UUFDNUIsYUFBUSxDQUFDLENBQUM7UUFDVixlQUFVLElBQUksQ0FBQztRQUNmLG9CQUFlLEtBQUssQ0FBQztLQThFcEI7Ozs7O0lBNUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMs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QyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDN0k7S0FDRjs7O1lBMUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBVkMsU0FBUztZQVJULGlCQUFpQjtZQWFWLGVBQWU7WUFDZixrQkFBa0IsdUJBd0Z5RixRQUFRO1lBcEcxSCxVQUFVOzs7eUJBeUJULEtBQUs7eUJBU0wsS0FBSzswQkFhTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO2dDQWtCbEMsV0FBVyxTQUFDLDhCQUE4QjttQ0FLMUMsV0FBVyxTQUFDLHFCQUFxQjtzQ0FLakMsV0FBVyxTQUFDLHVDQUF1QztrQ0FLbkQsV0FBVyxTQUFDLDhCQUE4Qjs2QkFLMUMsV0FBVyxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBsZXZlbCA9IDA7XHJcbiAgcGFkZGluZyA9IG51bGw7XHJcbiAgaXNJbkRyb3BEb3duID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxyXG4gIG9uQ2xpY2tJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5jbGlja0l0ZW0odGhpcyk7XHJcbiAgICBpZiAodGhpcy5uek1lbnVEaXJlY3RpdmUubnpTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMubnpNZW51RGlyZWN0aXZlLmNsZWFyQWxsU2VsZWN0ZWQoKTtcclxuICAgICAgdGhpcy5uelNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56U3ViTWVudUNvbXBvbmVudC5jbGlja1N1Yk1lbnVEcm9wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtJylcclxuICBnZXQgaXNJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWl0ZW0nKVxyXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0luRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQnKVxyXG4gIGdldCBzZXREcm9wRG93bkRpc2FibGVDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93biAmJiB0aGlzLm56RGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWl0ZW0tZGlzYWJsZWQnKVxyXG4gIGdldCBzZXRNZW51RGlzYWJsZUNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMubnpEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcclxuICBnZXQgc2V0UGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm56TWVudURpcmVjdGl2ZS5uek1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgIGlmICh0aGlzLm56U3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgIC8qKiBpZiBpbiBzdWIgbWVudSBjb21wb25lbnQgYW5kIGhvc3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIGFkZCBQQURESU5HX0JBU0UgKiBsZXZlbCBwYWRkaW5nICovXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm56U3ViTWVudUNvbXBvbmVudC5sZXZlbCArIDEpICogdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbmxpbmVJbmRlbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLyoqIG5vdCBpbiBzdWIgbWVudSBjb21wb25lbnQgYnV0IHJvb3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIHJldHVybiBkZWZhdWx0IHBhZGRpbmcgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbmxpbmVJbmRlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhZGRpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbnpNZW51RGlyZWN0aXZlOiBOek1lbnVEaXJlY3RpdmUsIEBPcHRpb25hbCgpIHB1YmxpYyBuelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudCwgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5tZW51SXRlbXMucHVzaCh0aGlzKTtcclxuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXHJcbiAgICBpZiAodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlWyAncGFkZGluZy1sZWZ0JyBdKSB7XHJcbiAgICAgIHRoaXMucGFkZGluZyA9IHBhcnNlSW50KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZVsgJ3BhZGRpbmctbGVmdCcgXSwgMTApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0luRHJvcERvd24gPSB0aGlzLm56TWVudURpcmVjdGl2ZS5uekluRHJvcERvd247XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnYW50LW1lbnUtaXRlbS1zZWxlY3RlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19