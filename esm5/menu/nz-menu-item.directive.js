/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(renderer, cd, nzMenuDirective, nzSubMenuComponent, hostElement) {
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
    Object.defineProperty(NzMenuItemDirective.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "nzSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = toBoolean(value);
            if (this._initialized) {
                this.setClass();
            }
        },
        enumerable: true,
        configurable: true
    });
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.onClickItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    Object.defineProperty(NzMenuItemDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setDropDownDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setMenuDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setPaddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
        this.setClass();
        this._initialized = true;
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.setClass = /**
     * @return {?}
     */
    function () {
        if (this._selected) {
            this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]'
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NzMenuDirective },
        { type: NzSubMenuComponent, decorators: [{ type: Optional }] },
        { type: ElementRef }
    ]; };
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
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtZW51L256LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBd0YxRCw2QkFBb0IsUUFBbUIsRUFBUyxFQUFxQixFQUFVLGVBQWdDLEVBQXFCLGtCQUFzQyxFQUFVLFdBQXVCO1FBQXZMLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7eUJBbEZ2TCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0YsS0FBSztRQUM1QixhQUFRLENBQUMsQ0FBQztRQUNWLGVBQVUsSUFBSSxDQUFDO1FBQ2Ysb0JBQWUsS0FBSyxDQUFDO0tBOEVwQjtJQTVFRCxzQkFDSSwyQ0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBVTs7OztRQU9kO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FB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LGlDQUFpQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzFJO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUM3STtLQUNGOztnQkExR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVZDLFNBQVM7Z0JBUlQsaUJBQWlCO2dCQWFWLGVBQWU7Z0JBQ2Ysa0JBQWtCLHVCQXdGeUYsUUFBUTtnQkFwRzFILFVBQVU7Ozs2QkF5QlQsS0FBSzs2QkFTTCxLQUFLOzhCQWFMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7b0NBa0JsQyxXQUFXLFNBQUMsOEJBQThCO3VDQUsxQyxXQUFXLFNBQUMscUJBQXFCOzBDQUtqQyxXQUFXLFNBQUMsdUNBQXVDO3NDQUtuRCxXQUFXLFNBQUMsOEJBQThCO2lDQUsxQyxXQUFXLFNBQUMsdUJBQXVCOzs4QkF4RnRDOztTQW9CYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zdWJtZW51LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1tZW51LWl0ZW1dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgbGV2ZWwgPSAwO1xyXG4gIHBhZGRpbmcgPSBudWxsO1xyXG4gIGlzSW5Ecm9wRG93biA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcclxuICBvbkNsaWNrSXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uek1lbnVEaXJlY3RpdmUuY2xpY2tJdGVtKHRoaXMpO1xyXG4gICAgaWYgKHRoaXMubnpNZW51RGlyZWN0aXZlLm56U2VsZWN0YWJsZSkge1xyXG4gICAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5jbGVhckFsbFNlbGVjdGVkKCk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uelN1Yk1lbnVDb21wb25lbnQuY2xpY2tTdWJNZW51RHJvcERvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBkZWZpbmUgaG9zdCBjbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbScpXHJcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pdGVtJylcclxuICBnZXQgaXNOb3RJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNJbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkJylcclxuICBnZXQgc2V0RHJvcERvd25EaXNhYmxlQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgdGhpcy5uekRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pdGVtLWRpc2FibGVkJylcclxuICBnZXQgc2V0TWVudURpc2FibGVDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiB0aGlzLm56RGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXHJcbiAgZ2V0IHNldFBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5uek1lbnVEaXJlY3RpdmUubnpNb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcclxuICAgICAgICAvKiogaWYgaW4gc3ViIG1lbnUgY29tcG9uZW50IGFuZCBob3N0IG1lbnUncyBtb2RlIGlzIGlubGluZSBhZGQgUEFERElOR19CQVNFICogbGV2ZWwgcGFkZGluZyAqL1xyXG4gICAgICAgIHJldHVybiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQubGV2ZWwgKyAxKSAqIHRoaXMubnpNZW51RGlyZWN0aXZlLm56SW5saW5lSW5kZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qKiBub3QgaW4gc3ViIG1lbnUgY29tcG9uZW50IGJ1dCByb290IG1lbnUncyBtb2RlIGlzIGlubGluZSByZXR1cm4gZGVmYXVsdCBwYWRkaW5nICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnpNZW51RGlyZWN0aXZlLm56SW5saW5lSW5kZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYWRkaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG56TWVudURpcmVjdGl2ZTogTnpNZW51RGlyZWN0aXZlLCBAT3B0aW9uYWwoKSBwdWJsaWMgbnpTdWJNZW51Q29tcG9uZW50OiBOelN1Yk1lbnVDb21wb25lbnQsIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek1lbnVEaXJlY3RpdmUubWVudUl0ZW1zLnB1c2godGhpcyk7XHJcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xyXG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZVsgJ3BhZGRpbmctbGVmdCcgXSkge1xyXG4gICAgICB0aGlzLnBhZGRpbmcgPSBwYXJzZUludCh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbICdwYWRkaW5nLWxlZnQnIF0sIDEwKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNJbkRyb3BEb3duID0gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbkRyb3BEb3duO1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkJyA6ICdhbnQtbWVudS1pdGVtLXNlbGVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==