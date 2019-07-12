/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { InputBoolean } from '../core/util/convert';
export class NzAlertComponent {
    constructor() {
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
    closeAlert() {
        this.display = false;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (!this.display) {
            this.nzOnClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
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
            this.iconTheme = `fill`;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
}
NzAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-alert',
                animations: [fadeAnimation],
                template: "<div *ngIf=\"display\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"nzType === 'success'\"\r\n  [class.ant-alert-info]=\"nzType === 'info'\"\r\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\r\n  [class.ant-alert-error]=\"nzType === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\r\n  [class.ant-alert-banner]=\"nzBanner\"\r\n  [class.ant-alert-with-description]=\"!!nzDescription\"\r\n  [@fadeAnimation]\r\n  (@fadeAnimation.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"nzShowIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"nzCloseable || nzCloseText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [`nz-alert {
      display: block;
    }`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFsZXJ0L256LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBZXBELE1BQU0sT0FBTyxnQkFBZ0I7O1FBQzNCLGVBQVUsSUFBSSxDQUFDO1FBQ2YsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsZ0JBQVcsYUFBYSxDQUFDO1FBQ3pCLGlCQUFZLE1BQU0sQ0FBQztRQUNuQixpQkFBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxtQkFBdUMsS0FBSyxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsZ0JBQW9DLEtBQUssQ0FBQztRQUsxQyxjQUFrQixNQUFNLENBQUM7Ozs7O0lBRXpCLFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtTQUNUO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN6QjtLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sZ0JBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLE9BQU8scUJBQWtCLE9BQU8sVUFBTyxFQUFFO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxPQUFPLFlBQVM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFDRCxJQUFJLE9BQU8sY0FBVztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7U0FDRjtLQUNGOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7Z0JBQ3RDLDRrREFBZ0Q7Z0JBQ2hELGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSzt5QkFFdEI7O01BRUE7YUFFTDs7O3dCQU9FLE1BQU07MEJBQ04sS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7SUFQSSxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYWxlcnQnLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXHJcbiAgICAgIGBuei1hbGVydCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfWBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBkaXNwbGF5ID0gdHJ1ZTtcclxuICBpc1R5cGVTZXQgPSBmYWxzZTtcclxuICBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XHJcbiAgaWNvblR5cGUgPSAnaW5mby1jaXJjbGUnO1xyXG4gIGljb25UaGVtZSA9ICdmaWxsJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2VhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYW5uZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpJY29uVHlwZTogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpNZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelR5cGUgPSAnaW5mbyc7XHJcblxyXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzcGxheSkge1xyXG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSWNvbkNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0aGlzLm56VHlwZSkge1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2NoZWNrLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnaW5mby1jaXJjbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuaWNvblRoZW1lID0gJ291dGxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pY29uVGhlbWUgPSBgZmlsbGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uelNob3dJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNTaG93SWNvblNldCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRlc2NyaXB0aW9uIHx8IGNoYW5nZXMubnpUeXBlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uelR5cGUpIHtcclxuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpCYW5uZXIpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xyXG4gICAgICAgIHRoaXMubnpUeXBlID0gJ3dhcm5pbmcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XHJcbiAgICAgICAgdGhpcy5uelNob3dJY29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=