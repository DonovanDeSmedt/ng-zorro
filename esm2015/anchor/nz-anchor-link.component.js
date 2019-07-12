/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export class NzAnchorLinkComponent {
    /**
     * @param {?} el
     * @param {?} anchorComp
     * @param {?} cdr
     */
    constructor(el, anchorComp, cdr) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
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
                styles: [`
    nz-link {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzAnchorLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzAnchorComponent },
    { type: ChangeDetectorRef }
];
NzAnchorLinkComponent.propDecorators = {
    nzHref: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzTemplate: [{ type: ContentChild, args: ['nzTemplate',] }],
    active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFuY2hvci9uei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWlCMUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBcUJoQyxZQUFtQixFQUFjLEVBQVUsVUFBNkIsRUFBVSxHQUFzQjtRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CeEcsY0FBa0IsR0FBRyxDQUFDO1FBRXRCLGdCQUFXLEVBQUUsQ0FBQztRQWVkLGNBQStELEtBQUssQ0FBQztLQUdwRTs7Ozs7SUFmRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixnUEFBc0Q7Z0JBQ3RELElBQUksRUFBaUI7b0JBQ25CLHlCQUF5QixFQUFFLE1BQU07aUJBQ2xDO2dCQU1ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTt5QkFONUI7Ozs7R0FJdEI7YUFHRjs7OztZQXpCQyxVQUFVO1lBU0gsaUJBQWlCO1lBWnhCLGlCQUFpQjs7O3FCQStCaEIsS0FBSztzQkFLTCxLQUFLO3lCQVVMLFlBQVksU0FBQyxZQUFZO3FCQUV6QixXQUFXLFNBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWxpbmsnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1hbmNob3ItbGlua10nOiAndHJ1ZSdcclxuICB9LFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxyXG4gICAgbnotbGluayB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIGAgXSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBbmNob3JMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBuekhyZWYgPSAnIyc7XHJcblxyXG4gIHRpdGxlU3RyID0gJyc7XHJcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy50aXRsZVN0ciA9IG51bGw7XHJcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGl0bGVTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuelRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtYW5jaG9yLWxpbmstYWN0aXZlJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBhbmNob3JDb21wOiBOekFuY2hvckNvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5jaG9yQ29tcC5yZWdpc3RlckxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnb1RvQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmFuY2hvckNvbXAuaGFuZGxlU2Nyb2xsVG8odGhpcyk7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmNob3JDb21wLnVucmVnaXN0ZXJMaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19