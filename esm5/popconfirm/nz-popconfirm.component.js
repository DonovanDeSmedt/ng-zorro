/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { InputBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
var NzPopconfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmComponent, _super);
    function NzPopconfirmComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        _this.nzOkType = 'primary';
        _this.nzCondition = false;
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.nzCondition) {
            this.nzVisible = true;
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.nzOnCancel.emit();
        this.nzVisible = false;
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.nzOnConfirm.emit();
        this.nzVisible = false;
    };
    NzPopconfirmComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-popconfirm',
                    preserveWhitespaces: false,
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\r\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\r\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\">\r\n        <div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <div class=\"ant-popover-message\">\r\n              <ng-container *nzStringTemplateOutlet=\"nzTitle\">\r\n                <i nz-icon type=\"exclamation-circle\" theme=\"fill\"></i>\r\n                <div class=\"ant-popover-message-title\">{{ nzTitle }}</div>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"ant-popover-buttons\">\r\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\r\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\r\n              </button>\r\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\r\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\r\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzPopconfirmComponent.propDecorators = {
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzPopconfirmComponent.prototype, "nzCondition", void 0);
    return NzPopconfirmComponent;
}(NzToolTipComponent));
export { NzPopconfirmComponent };
function NzPopconfirmComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFlMUIsaURBQWtCO0lBYTNELCtCQUFZLEdBQXNCO1FBQWxDLFlBQ0Usa0JBQU0sR0FBRyxDQUFDLFNBQ1g7UUFkRCxnQkFBVSx1QkFBdUIsQ0FBQztRQUNsQyxpQkFBVyxPQUFPLENBQUM7UUFDbkIscUJBQWUsSUFBSSxDQUFDO1FBR3BCLGlCQUE0QixTQUFTLENBQUM7UUFFdEMsb0JBQXVDLEtBQUssQ0FBQztRQUU3QyxtQkFBb0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxvQkFBcUQsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7S0FJdkU7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLFFBQVEsRUFBYSxlQUFlO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7b0JBQ3RDLGk2REFBcUQ7NkJBQzlCLDREQUl0QjtpQkFDRjs7OztnQkFqQmlDLGlCQUFpQjs7OzJCQXVCaEQsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFFTCxNQUFNOzhCQUNOLE1BQU07OztRQUhHLFlBQVksRUFBRTs7O2dDQTFCMUI7RUFrQjJDLGtCQUFrQjtTQUFoRCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZmFkZS1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wb3Bjb25maXJtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIC5hbnQtcG9wb3ZlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICBgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybUNvbXBvbmVudCBleHRlbmRzIE56VG9vbFRpcENvbXBvbmVudCB7XHJcbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xyXG4gIF90cmlnZ2VyID0gJ2NsaWNrJztcclxuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56T2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29uZGl0aW9uID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNkcik7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56Q29uZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25Db25maXJtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=