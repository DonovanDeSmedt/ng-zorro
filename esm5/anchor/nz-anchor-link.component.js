/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
var NzAnchorLinkComponent = /** @class */ (function () {
    function NzAnchorLinkComponent(el, anchorComp, cdr) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleStr = null;
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.anchorComp.registerLink(this);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.goToClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.anchorComp.unregisterLink(this);
    };
    NzAnchorLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-link',
                    preserveWhitespaces: false,
                    template: "<a (click)=\"goToClick($event)\" href=\"{{nzHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\r\n  <span *ngIf=\"titleStr; else (titleTpl || nzTemplate)\">{{ titleStr }}</span>\r\n</a>\r\n<ng-content></ng-content>",
                    host: {
                        '[class.ant-anchor-link]': 'true'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n    nz-link {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzAnchorLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzAnchorComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzAnchorLinkComponent.propDecorators = {
        nzHref: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzTemplate: [{ type: ContentChild, args: ['nzTemplate',] }],
        active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
    };
    return NzAnchorLinkComponent;
}());
export { NzAnchorLinkComponent };
function NzAnchorLinkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzHref;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzTemplate;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.active;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.el;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.anchorComp;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFuY2hvci9uei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFzQ3hELCtCQUFtQixFQUFjLEVBQVUsVUFBNkIsRUFBVSxHQUFzQjtRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CeEcsY0FBa0IsR0FBRyxDQUFDO1FBRXRCLGdCQUFXLEVBQUUsQ0FBQztRQWVkLGNBQStELEtBQUssQ0FBQztLQUdwRTtJQWZELHNCQUNJLDBDQUFPOzs7OztRQURYLFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7U0FDRjs7O09BQUE7Ozs7SUFTRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsQ0FBUTtRQUNoQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixnUEFBc0Q7b0JBQ3RELElBQUksRUFBaUI7d0JBQ25CLHlCQUF5QixFQUFFLE1BQU07cUJBQ2xDO29CQU1ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTs2QkFONUIsbURBSXRCO2lCQUdGOzs7O2dCQXpCQyxVQUFVO2dCQVNILGlCQUFpQjtnQkFaeEIsaUJBQWlCOzs7eUJBK0JoQixLQUFLOzBCQUtMLEtBQUs7NkJBVUwsWUFBWSxTQUFDLFlBQVk7eUJBRXpCLFdBQVcsU0FBQyw4QkFBOEI7O2dDQWxEN0M7O1NBK0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QW5jaG9yQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1saW5rJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtYW5jaG9yLWxpbmtdJzogJ3RydWUnXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIG56LWxpbmsge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBgIF0sXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QW5jaG9yTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgbnpIcmVmID0gJyMnO1xyXG5cclxuICB0aXRsZVN0ciA9ICcnO1xyXG4gIHRpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMudGl0bGVTdHIgPSBudWxsO1xyXG4gICAgICB0aGlzLnRpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpdGxlU3RyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWFuY2hvci1saW5rLWFjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgYW5jaG9yQ29tcDogTnpBbmNob3JDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuY2hvckNvbXAucmVnaXN0ZXJMaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub0NsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5hbmNob3JDb21wLmhhbmRsZVNjcm9sbFRvKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5jaG9yQ29tcC51bnJlZ2lzdGVyTGluayh0aGlzKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==