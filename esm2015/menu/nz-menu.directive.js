/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzMenuDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._selectable = true;
        this._inlineCollapsed = false;
        this._inDropDown = false;
        /**
         * view init flat
         */
        this.isInit = false;
        /**
         * opened index of array
         */
        this.subMenusOpenIndex = [];
        /**
         * collection of menu item
         */
        this.menuItems = [];
        /**
         * collection of sub menu
         */
        this.subMenus = [];
        this.nzTheme = 'light';
        this.nzInlineIndent = 24;
        this.nzMode = 'vertical';
        this.nzClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzInDropDown(value) {
        this._inDropDown = toBoolean(value);
        this.nzSelectable = !this._inDropDown;
        this.menuItems.forEach(menu => menu.isInDropDown = this._inDropDown);
        this.subMenus.forEach(subMenu => subMenu.isInDropDown = this._inDropDown);
    }
    /**
     * @return {?}
     */
    get nzInDropDown() {
        return this._inDropDown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectable(value) {
        this._selectable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSelectable() {
        return this._selectable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzInlineCollapsed(value) {
        this._inlineCollapsed = toBoolean(value);
        if (this.isInit) {
            this.updateInlineCollapse();
        }
    }
    /**
     * @return {?}
     */
    get nzInlineCollapsed() {
        return this._inlineCollapsed;
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.nzMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.nzMode = this.cacheMode;
        }
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.nzInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.nzInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownThemeLightClass() {
        return this.nzInDropDown && (this.nzTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setDropDownThemeDarkClass() {
        return this.nzInDropDown && (this.nzTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuThemeLightClass() {
        return (!this.nzInDropDown) && (this.nzTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setMenuThemeDarkClass() {
        return (!this.nzInDropDown) && (this.nzTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuInlineCollapsedClass() {
        return (!this.nzInDropDown) && (this.nzMode !== 'horizontal') && this.nzInlineCollapsed;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    }
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    clearAllSelected() {
        this.menuItems.forEach(menu => menu.nzSelected = false);
    }
    /**
     * @return {?}
     */
    hideSubMenus() {
        this.subMenusOpenIndex = [];
        this.subMenus.forEach((submenu, index) => {
            if (submenu.nzOpen) {
                this.subMenusOpenIndex.push(index);
            }
            submenu.nzOpen = false;
        });
    }
    /**
     * @return {?}
     */
    reductionSubMenus() {
        this.subMenusOpenIndex.forEach(i => this.subMenus[i].nzOpen = true);
        this.subMenusOpenIndex = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    clickItem(value) {
        this.nzClick.emit(value);
    }
}
NzMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu]'
            },] }
];
/** @nocollapse */
NzMenuDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzMenuDirective.propDecorators = {
    nzTheme: [{ type: Input }],
    nzInlineIndent: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzInDropDown: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu',] }, { type: HostBinding, args: ['class.ant-menu-dropdown-vertical',] }, { type: HostBinding, args: ['class.ant-dropdown-menu-root',] }],
    isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu',] }, { type: HostBinding, args: ['class.ant-menu-root',] }],
    setDropDownThemeLightClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-light',] }],
    setDropDownThemeDarkClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-dark',] }],
    setMenuThemeLightClass: [{ type: HostBinding, args: ['class.ant-menu-light',] }],
    setMenuThemeDarkClass: [{ type: HostBinding, args: ['class.ant-menu-dark',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-inline',] }],
    setMenuInlineCollapsedClass: [{ type: HostBinding, args: ['class.ant-menu-inline-collapsed',] }]
};
function NzMenuDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMenuDirective.prototype._selectable;
    /** @type {?} */
    NzMenuDirective.prototype._inlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype._inDropDown;
    /**
     * view init flat
     * @type {?}
     */
    NzMenuDirective.prototype.isInit;
    /**
     * cache mode
     * @type {?}
     */
    NzMenuDirective.prototype.cacheMode;
    /**
     * opened index of array
     * @type {?}
     */
    NzMenuDirective.prototype.subMenusOpenIndex;
    /**
     * collection of menu item
     * @type {?}
     */
    NzMenuDirective.prototype.menuItems;
    /**
     * collection of sub menu
     * @type {?}
     */
    NzMenuDirective.prototype.subMenus;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVdqRCxNQUFNLE9BQU8sZUFBZTs7OztJQXFIMUIsWUFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7MkJBcEhYLElBQUk7Z0NBQ0MsS0FBSzsyQkFDVixLQUFLOzs7O3NCQUVWLEtBQUs7Ozs7aUNBSU0sRUFBRTs7OztRQUc5QixpQkFBbUMsRUFBRSxDQUFDOzs7O1FBRXRDLGdCQUFpQyxFQUFFLENBQUM7UUFDcEMsZUFBcUMsT0FBTyxDQUFDO1FBQzdDLHNCQUEwQixFQUFFLENBQUM7UUFDN0IsY0FBMEIsVUFBVSxDQUFDO1FBQ3JDLGVBQTZCLElBQUksWUFBWSxFQUF1QixDQUFDO0tBcUdwRTs7Ozs7SUFuR0QsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7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LFNBQUMsOEJBQThCO3FDQUsxQyxXQUFXLFNBQUMsc0JBQXNCO29DQUtsQyxXQUFXLFNBQUMscUJBQXFCO21DQUtqQyxXQUFXLFNBQUMseUJBQXlCO3FDQUtyQyxXQUFXLFNBQUMsMkJBQTJCO2lDQUt2QyxXQUFXLFNBQUMsdUJBQXVCOzBDQUtuQyxXQUFXLFNBQUMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56TW9kZSA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgfCAnaW5saW5lJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHByaXZhdGUgX3NlbGVjdGFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2lubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luRHJvcERvd24gPSBmYWxzZTtcclxuICAvKiogdmlldyBpbml0IGZsYXQgKi9cclxuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xyXG4gIC8qKiBjYWNoZSBtb2RlICovXHJcbiAgcHJpdmF0ZSBjYWNoZU1vZGU6IE56TW9kZTtcclxuICAvKiogb3BlbmVkIGluZGV4IG9mIGFycmF5ICovXHJcbiAgcHJpdmF0ZSBzdWJNZW51c09wZW5JbmRleCA9IFtdO1xyXG5cclxuICAvKiogY29sbGVjdGlvbiBvZiBtZW51IGl0ZW0gKi9cclxuICBtZW51SXRlbXM6IE56TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xyXG4gIC8qKiBjb2xsZWN0aW9uIG9mIHN1YiBtZW51ICovXHJcbiAgc3ViTWVudXM6IE56U3ViTWVudUNvbXBvbmVudFtdID0gW107XHJcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XHJcbiAgQElucHV0KCkgbnpJbmxpbmVJbmRlbnQgPSAyNDtcclxuICBASW5wdXQoKSBuek1vZGU6IE56TW9kZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5Ecm9wRG93bih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5Ecm9wRG93biA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0YWJsZSA9ICF0aGlzLl9pbkRyb3BEb3duO1xyXG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XHJcbiAgICB0aGlzLnN1Yk1lbnVzLmZvckVhY2goc3ViTWVudSA9PiBzdWJNZW51LmlzSW5Ecm9wRG93biA9IHRoaXMuX2luRHJvcERvd24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SW5Ecm9wRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNlbGVjdGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5saW5lQ29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbmxpbmVDb2xsYXBzZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBueklubGluZUNvbGxhcHNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmxpbmVDb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5oaWRlU3ViTWVudXMoKTtcclxuICAgICAgdGhpcy5uek1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWR1Y3Rpb25TdWJNZW51cygpO1xyXG4gICAgICB0aGlzLm56TW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudScpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kcm9wZG93bi12ZXJ0aWNhbCcpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290JylcclxuICBnZXQgaXNJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51JylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXJvb3QnKVxyXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5uekluRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0JylcclxuICBnZXQgc2V0RHJvcERvd25UaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd24gJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2xpZ2h0Jyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmsnKVxyXG4gIGdldCBzZXREcm9wRG93blRoZW1lRGFya0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdkYXJrJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWxpZ2h0JylcclxuICBnZXQgc2V0TWVudVRoZW1lTGlnaHRDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uelRoZW1lID09PSAnbGlnaHQnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtZGFyaycpXHJcbiAgZ2V0IHNldE1lbnVUaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uelRoZW1lID09PSAnZGFyaycpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbCcpXHJcbiAgZ2V0IHNldE1lbnVWZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWhvcml6b250YWwnKVxyXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ2hvcml6b250YWwnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lJylcclxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ2lubGluZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkJylcclxuICBnZXQgc2V0TWVudUlubGluZUNvbGxhcHNlZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSAhPT0gJ2hvcml6b250YWwnKSAmJiB0aGlzLm56SW5saW5lQ29sbGFwc2VkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcclxuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0cmlnZ2VyIHdoZW4gbWVudSBpdGVtIGNsaWNrZWQgKi9cclxuICBjbGVhckFsbFNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUubnpTZWxlY3RlZCA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGhpZGVTdWJNZW51cygpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcclxuICAgIHRoaXMuc3ViTWVudXMuZm9yRWFjaCgoc3VibWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHN1Ym1lbnUubnpPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5wdXNoKGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBzdWJtZW51Lm56T3BlbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWR1Y3Rpb25TdWJNZW51cygpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXguZm9yRWFjaChpID0+IHRoaXMuc3ViTWVudXNbIGkgXS5uek9wZW4gPSB0cnVlKTtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcclxuICB9XHJcblxyXG4gIGNsaWNrSXRlbSh2YWx1ZTogTnpNZW51SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=