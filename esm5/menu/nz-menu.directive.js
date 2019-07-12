/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(el) {
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
    Object.defineProperty(NzMenuDirective.prototype, "nzInDropDown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inDropDown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._inDropDown = toBoolean(value);
            this.nzSelectable = !this._inDropDown;
            this.menuItems.forEach(function (menu) { return menu.isInDropDown = _this._inDropDown; });
            this.subMenus.forEach(function (subMenu) { return subMenu.isInDropDown = _this._inDropDown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzInlineCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inlineCollapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inlineCollapsed = toBoolean(value);
            if (this.isInit) {
                this.updateInlineCollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.nzMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.nzMode = this.cacheMode;
        }
    };
    Object.defineProperty(NzMenuDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineCollapsedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode !== 'horizontal') && this.nzInlineCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    /** trigger when menu item clicked */
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    NzMenuDirective.prototype.clearAllSelected = /**
     * trigger when menu item clicked
     * @return {?}
     */
    function () {
        this.menuItems.forEach(function (menu) { return menu.nzSelected = false; });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.hideSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex = [];
        this.subMenus.forEach(function (submenu, index) {
            if (submenu.nzOpen) {
                _this.subMenusOpenIndex.push(index);
            }
            submenu.nzOpen = false;
        });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.reductionSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex.forEach(function (i) { return _this.subMenus[i].nzOpen = true; });
        this.subMenusOpenIndex = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuDirective.prototype.clickItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzClick.emit(value);
    };
    NzMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu]'
                },] }
    ];
    /** @nocollapse */
    NzMenuDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return NzMenuDirective;
}());
export { NzMenuDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFnSS9DLHlCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTsyQkFwSFgsSUFBSTtnQ0FDQyxLQUFLOzJCQUNWLEtBQUs7Ozs7c0JBRVYsS0FBSzs7OztpQ0FJTSxFQUFFOzs7O1FBRzlCLGlCQUFtQyxFQUFFLENBQUM7Ozs7UUFFdEMsZ0JBQWlDLEVBQUUsQ0FBQztRQUNwQyxlQUFxQyxPQUFPLENBQUM7UUFDN0Msc0JBQTBCLEVBQUUsQ0FBQztRQUM3QixjQUEwQixVQUFVLENBQUM7UUFDckMsZUFBNkIsSUFBSSxZQUFZLEVBQXVCLENBQUM7S0FxR3BFO0lBbkdELHNCQUNJLHlDQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVZELFVBQ2lCLEtBQWM7WUFEL0IsaUJBTUM7WUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJ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LFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFoQkMsVUFBVTs7OzBCQWlDVCxLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNOytCQUVOLEtBQUs7K0JBWUwsS0FBSztvQ0FTTCxLQUFLO29DQXVCTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLFdBQVcsU0FBQyxrQ0FBa0MsY0FDOUMsV0FBVyxTQUFDLDhCQUE4Qjt1Q0FLMUMsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixXQUFXLFNBQUMscUJBQXFCOzZDQUtqQyxXQUFXLFNBQUMsK0JBQStCOzRDQUszQyxXQUFXLFNBQUMsOEJBQThCO3lDQUsxQyxXQUFXLFNBQUMsc0JBQXNCO3dDQUtsQyxXQUFXLFNBQUMscUJBQXFCO3VDQUtqQyxXQUFXLFNBQUMseUJBQXlCO3lDQUtyQyxXQUFXLFNBQUMsMkJBQTJCO3FDQUt2QyxXQUFXLFNBQUMsdUJBQXVCOzhDQUtuQyxXQUFXLFNBQUMsaUNBQWlDOzswQkFySWhEOztTQXFCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56TW9kZSA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgfCAnaW5saW5lJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHByaXZhdGUgX3NlbGVjdGFibGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2lubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luRHJvcERvd24gPSBmYWxzZTtcclxuICAvKiogdmlldyBpbml0IGZsYXQgKi9cclxuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xyXG4gIC8qKiBjYWNoZSBtb2RlICovXHJcbiAgcHJpdmF0ZSBjYWNoZU1vZGU6IE56TW9kZTtcclxuICAvKiogb3BlbmVkIGluZGV4IG9mIGFycmF5ICovXHJcbiAgcHJpdmF0ZSBzdWJNZW51c09wZW5JbmRleCA9IFtdO1xyXG5cclxuICAvKiogY29sbGVjdGlvbiBvZiBtZW51IGl0ZW0gKi9cclxuICBtZW51SXRlbXM6IE56TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xyXG4gIC8qKiBjb2xsZWN0aW9uIG9mIHN1YiBtZW51ICovXHJcbiAgc3ViTWVudXM6IE56U3ViTWVudUNvbXBvbmVudFtdID0gW107XHJcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XHJcbiAgQElucHV0KCkgbnpJbmxpbmVJbmRlbnQgPSAyNDtcclxuICBASW5wdXQoKSBuek1vZGU6IE56TW9kZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5Ecm9wRG93bih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5Ecm9wRG93biA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0YWJsZSA9ICF0aGlzLl9pbkRyb3BEb3duO1xyXG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XHJcbiAgICB0aGlzLnN1Yk1lbnVzLmZvckVhY2goc3ViTWVudSA9PiBzdWJNZW51LmlzSW5Ecm9wRG93biA9IHRoaXMuX2luRHJvcERvd24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SW5Ecm9wRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNlbGVjdGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5saW5lQ29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbmxpbmVDb2xsYXBzZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBueklubGluZUNvbGxhcHNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmxpbmVDb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5oaWRlU3ViTWVudXMoKTtcclxuICAgICAgdGhpcy5uek1vZGUgPSAndmVydGljYWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZWR1Y3Rpb25TdWJNZW51cygpO1xyXG4gICAgICB0aGlzLm56TW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudScpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kcm9wZG93bi12ZXJ0aWNhbCcpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290JylcclxuICBnZXQgaXNJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51JylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXJvb3QnKVxyXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5uekluRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0JylcclxuICBnZXQgc2V0RHJvcERvd25UaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd24gJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2xpZ2h0Jyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmsnKVxyXG4gIGdldCBzZXREcm9wRG93blRoZW1lRGFya0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdkYXJrJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWxpZ2h0JylcclxuICBnZXQgc2V0TWVudVRoZW1lTGlnaHRDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uelRoZW1lID09PSAnbGlnaHQnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtZGFyaycpXHJcbiAgZ2V0IHNldE1lbnVUaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uelRoZW1lID09PSAnZGFyaycpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbCcpXHJcbiAgZ2V0IHNldE1lbnVWZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWhvcml6b250YWwnKVxyXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ2hvcml6b250YWwnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lJylcclxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ2lubGluZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkJylcclxuICBnZXQgc2V0TWVudUlubGluZUNvbGxhcHNlZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSAhPT0gJ2hvcml6b250YWwnKSAmJiB0aGlzLm56SW5saW5lQ29sbGFwc2VkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcclxuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0cmlnZ2VyIHdoZW4gbWVudSBpdGVtIGNsaWNrZWQgKi9cclxuICBjbGVhckFsbFNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUubnpTZWxlY3RlZCA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGhpZGVTdWJNZW51cygpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcclxuICAgIHRoaXMuc3ViTWVudXMuZm9yRWFjaCgoc3VibWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHN1Ym1lbnUubnpPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5wdXNoKGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBzdWJtZW51Lm56T3BlbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWR1Y3Rpb25TdWJNZW51cygpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXguZm9yRWFjaChpID0+IHRoaXMuc3ViTWVudXNbIGkgXS5uek9wZW4gPSB0cnVlKTtcclxuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcclxuICB9XHJcblxyXG4gIGNsaWNrSXRlbSh2YWx1ZTogTnpNZW51SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=