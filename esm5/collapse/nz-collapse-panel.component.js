/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { NzCollapseComponent } from './nz-collapse.component';
var NzCollapsePanelComponent = /** @class */ (function () {
    function NzCollapsePanelComponent(cdr, nzCollapseComponent) {
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
    NzCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.addPanel(this);
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.removePanel(this);
    };
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
                    styles: [" nz-collapse-panel {\n      display: block\n    }"]
                }] }
    ];
    /** @nocollapse */
    NzCollapsePanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzCollapseComponent, decorators: [{ type: Host }] }
    ]; };
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
    return NzCollapsePanelComponent;
}());
export { NzCollapsePanelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFBRSxJQUFJLEVBQ2xCLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBaUQ1RCxrQ0FBb0IsR0FBc0IsRUFBa0IsbUJBQXdDO1FBQWhGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQWtCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFoQnBHLGdCQUFtRixLQUFLLENBQUM7UUFDekYsa0JBQXVGLEtBQUssQ0FBQztRQUM3RixtQkFBdUMsSUFBSSxDQUFDO1FBRTVDLHNCQUFvQyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBYS9EOzs7O0lBWEQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztLQUNGOzs7O0lBRUQsK0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUtELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBUyxtQkFBbUI7b0JBQ3BDLDBpQkFBcUQ7b0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUksaUJBQWlCLENBQUMsSUFBSTtvQkFDdkMsVUFBVSxFQUFPO3dCQUNmLE9BQU8sQ0FBQyxlQUFlLEVBQUU7NEJBQ3ZCLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2dDQUN0QixPQUFPLEVBQUUsR0FBRztnQ0FDWixNQUFNLEVBQUcsQ0FBQzs2QkFDWCxDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0NBQ3BCLE9BQU8sRUFBRSxHQUFHO2dDQUNaLE1BQU0sRUFBRyxHQUFHOzZCQUNiLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUMxRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7b0JBTUQsSUFBSSxFQUFhO3dCQUNmLDJCQUEyQixFQUFNLE1BQU07d0JBQ3ZDLCtCQUErQixFQUFFLGNBQWM7cUJBQ2hEOzZCQVBHLG1EQUVBO2lCQU1MOzs7O2dCQXpDQyxpQkFBaUI7Z0JBV1YsbUJBQW1CLHVCQWlEbUIsSUFBSTs7OzJCQWhCaEQsS0FBSyxZQUFvQixXQUFXLFNBQUMsZ0NBQWdDOzZCQUNyRSxLQUFLLFlBQW9CLFdBQVcsU0FBQyxrQ0FBa0M7OEJBQ3ZFLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxNQUFNOzs7UUFKRyxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7OzttQ0FqRDFCOztTQThDYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgIDogJ256LWNvbGxhcHNlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9ucyAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdjb2xsYXBzZVN0YXRlJywgW1xyXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgIGhlaWdodCA6IDBcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICBoZWlnaHQgOiAnKidcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLWluJykpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcpKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHN0eWxlcyAgICAgICAgIDogW1xyXG4gICAgICBgIG56LWNvbGxhcHNlLXBhbmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgIH1gXHJcbiAgXSxcclxuICBob3N0ICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW1dJyAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLW5vLWFycm93XSc6ICchbnpTaG93QXJyb3cnXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmUnKSBuekFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkJykgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuY2xpY2sodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LmFkZFBhbmVsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlUGFuZWwodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==