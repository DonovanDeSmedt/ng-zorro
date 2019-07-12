/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { NzCollapseComponent } from './nz-collapse.component';
export class NzCollapsePanelComponent {
    /**
     * @param {?} cdr
     * @param {?} nzCollapseComponent
     */
    constructor(cdr, nzCollapseComponent) {
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzShowArrow = true;
        this.nzActiveChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
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
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse-panel',
                template: "<div role=\"tab\" [attr.aria-expanded]=\"nzActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <i nz-icon type=\"right\" class=\"arrow anticon-right\" *ngIf=\"nzShowArrow\"></i>\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"nzActive\"\r\n  [@collapseState]=\"nzActive?'active':'inactive'\">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('collapseState', [
                        state('inactive', style({
                            opacity: '0',
                            height: 0
                        })),
                        state('active', style({
                            opacity: '1',
                            height: '*'
                        })),
                        transition('inactive => active', animate('150ms ease-in')),
                        transition('active => inactive', animate('150ms ease-out'))
                    ])
                ],
                host: {
                    '[class.ant-collapse-item]': 'true',
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow'
                },
                styles: [` nz-collapse-panel {
      display: block
    }`]
            }] }
];
/** @nocollapse */
NzCollapsePanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzCollapseComponent, decorators: [{ type: Host }] }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-active',] }],
    nzDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-disabled',] }],
    nzShowArrow: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzActiveChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
function NzCollapsePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActive;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzHeader;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.cdr;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFBRSxJQUFJLEVBQ2xCLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFnQzlELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBaUJuQyxZQUFvQixHQUFzQixFQUFrQixtQkFBd0M7UUFBaEYsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBa0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQWhCcEcsZ0JBQW1GLEtBQUssQ0FBQztRQUN6RixrQkFBdUYsS0FBSyxDQUFDO1FBQzdGLG1CQUF1QyxJQUFJLENBQUM7UUFFNUMsc0JBQW9DLElBQUksWUFBWSxFQUFXLENBQUM7S0FhL0Q7Ozs7SUFYRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBUyxtQkFBbUI7Z0JBQ3BDLDBpQkFBcUQ7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUksaUJBQWlCLENBQUMsSUFBSTtnQkFDdkMsVUFBVSxFQUFPO29CQUNmLE9BQU8sQ0FBQyxlQUFlLEVBQUU7d0JBQ3ZCLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDOzRCQUN0QixPQUFPLEVBQUUsR0FBRzs0QkFDWixNQUFNLEVBQUcsQ0FBQzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSxHQUFHOzRCQUNaLE1BQU0sRUFBRyxHQUFHO3lCQUNiLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUMxRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7Z0JBTUQsSUFBSSxFQUFhO29CQUNmLDJCQUEyQixFQUFNLE1BQU07b0JBQ3ZDLCtCQUErQixFQUFFLGNBQWM7aUJBQ2hEO3lCQVBHOztNQUVBO2FBTUw7Ozs7WUF6Q0MsaUJBQWlCO1lBV1YsbUJBQW1CLHVCQWlEbUIsSUFBSTs7O3VCQWhCaEQsS0FBSyxZQUFvQixXQUFXLFNBQUMsZ0NBQWdDO3lCQUNyRSxLQUFLLFlBQW9CLFdBQVcsU0FBQyxrQ0FBa0M7MEJBQ3ZFLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxNQUFNOzs7SUFKRyxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgIDogJ256LWNvbGxhcHNlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9ucyAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdjb2xsYXBzZVN0YXRlJywgW1xyXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgIGhlaWdodCA6IDBcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICBoZWlnaHQgOiAnKidcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLWluJykpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcpKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHN0eWxlcyAgICAgICAgIDogW1xyXG4gICAgICBgIG56LWNvbGxhcHNlLXBhbmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgIH1gXHJcbiAgXSxcclxuICBob3N0ICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW1dJyAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLW5vLWFycm93XSc6ICchbnpTaG93QXJyb3cnXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmUnKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkJykgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuY2xpY2sodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LmFkZFBhbmVsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlUGFuZWwodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==