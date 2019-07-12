/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { InputBoolean } from '../core/util/convert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent() {
        this.display = true;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.iconType = 'info-circle';
        this.iconTheme = 'fill';
        this.nzOnClose = new EventEmitter();
        this.nzCloseable = false;
        this.nzShowIcon = false;
        this.nzBanner = false;
        this.nzType = 'info';
    }
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.display = false;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (!this.display) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        switch (this.nzType) {
            case 'error':
                this.iconType = 'close-circle';
                break;
            case 'success':
                this.iconType = 'check-circle';
                break;
            case 'info':
                this.iconType = 'info-circle';
                break;
            case 'warning':
                this.iconType = 'exclamation-circle';
                break;
        }
        if (this.nzDescription) {
            this.iconTheme = 'outline';
        }
        else {
            this.iconTheme = "fill";
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzShowIcon"]) {
            this.isShowIconSet = true;
        }
        if (changes["nzDescription"] || changes["nzType"]) {
            this.updateIconClassMap();
        }
        if (changes["nzType"]) {
            this.isTypeSet = true;
        }
        if (changes["nzBanner"]) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    animations: [fadeAnimation],
                    template: "<div *ngIf=\"display\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"nzType === 'success'\"\r\n  [class.ant-alert-info]=\"nzType === 'info'\"\r\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\r\n  [class.ant-alert-error]=\"nzType === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\r\n  [class.ant-alert-banner]=\"nzBanner\"\r\n  [class.ant-alert-with-description]=\"!!nzDescription\"\r\n  [@fadeAnimation]\r\n  (@fadeAnimation.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"nzShowIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"nzCloseable || nzCloseText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["nz-alert {\n      display: block;\n    }"]
                }] }
    ];
    NzAlertComponent.propDecorators = {
        nzOnClose: [{ type: Output }],
        nzCloseable: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzBanner: [{ type: Input }],
        nzCloseText: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzMessage: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzType: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
function NzAlertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAlertComponent.prototype.display;
    /** @type {?} */
    NzAlertComponent.prototype.isTypeSet;
    /** @type {?} */
    NzAlertComponent.prototype.isShowIconSet;
    /** @type {?} */
    NzAlertComponent.prototype.iconType;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFsZXJ0L256LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7UUFnQmxELGVBQVUsSUFBSSxDQUFDO1FBQ2YsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsZ0JBQVcsYUFBYSxDQUFDO1FBQ3pCLGlCQUFZLE1BQU0sQ0FBQztRQUNuQixpQkFBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxtQkFBdUMsS0FBSyxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsZ0JBQW9DLEtBQUssQ0FBQztRQUsxQyxjQUFrQixNQUFNLENBQUM7Ozs7O0lBRXpCLHFDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBRUQsOENBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFDRSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUMvQixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUMvQixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3JDLE1BQU07U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDekI7S0FDRjs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxPQUFPLHFCQUFrQixPQUFPLFVBQU8sRUFBRTtZQUMzQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksT0FBTyxZQUFTO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxPQUFPLGNBQVc7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1NBQ0Y7S0FDRjs7Z0JBL0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsVUFBVTtvQkFDL0IsVUFBVSxFQUFXLENBQUUsYUFBYSxDQUFFO29CQUN0Qyw0a0RBQWdEO29CQUNoRCxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7NkJBRXRCLDBDQUVBO2lCQUVMOzs7NEJBT0UsTUFBTTs4QkFDTixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7OztRQVBJLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzJCQXJDMUI7O1NBNEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9uZy1jbGFzcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hbGVydCcsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcclxuICAgICAgYG56LWFsZXJ0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGRpc3BsYXkgPSB0cnVlO1xyXG4gIGlzVHlwZVNldCA9IGZhbHNlO1xyXG4gIGlzU2hvd0ljb25TZXQgPSBmYWxzZTtcclxuICBpY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XHJcbiAgaWNvblRoZW1lID0gJ2ZpbGwnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZWFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhbm5lciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekljb25UeXBlOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuek1lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VHlwZSA9ICdpbmZvJztcclxuXHJcbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNwbGF5KSB7XHJcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubnpUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56RGVzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5pY29uVGhlbWUgPSAnb3V0bGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmljb25UaGVtZSA9IGBmaWxsYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U2hvd0ljb24pIHtcclxuICAgICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGVzY3JpcHRpb24gfHwgY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VHlwZSkge1xyXG4gICAgICB0aGlzLmlzVHlwZVNldCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekJhbm5lcikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XHJcbiAgICAgICAgdGhpcy5uelR5cGUgPSAnd2FybmluZyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcclxuICAgICAgICB0aGlzLm56U2hvd0ljb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==