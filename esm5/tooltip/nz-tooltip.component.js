/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzToolTipComponent = /** @class */ (function () {
    function NzToolTipComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_4_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        this.nzMouseLeaveDelay = 0.1; // second
        this.nzVisibleChange = new EventEmitter();
    }
    Object.defineProperty(NzToolTipComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.nzPlacement]));
            }
        },
        enumerable: true,
        configurable: true
    });
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzToolTipComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        for (var key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzToolTipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzToolTipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.isContentEmpty = /**
     * @return {?}
     */
    function () {
        return this.nzTitle instanceof TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
    };
    NzToolTipComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-tooltip',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@fadeAnimation]=\"''+(visible$ | async)\"\r\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-tooltip {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzToolTipComponent.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        nzTitle: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzVisibleChange: [{ type: Output }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzToolTipComponent;
}());
export { NzToolTipComponent };
function NzToolTipComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzToolTipComponent.prototype._prefix;
    /** @type {?} */
    NzToolTipComponent.prototype._positions;
    /** @type {?} */
    NzToolTipComponent.prototype._classMap;
    /** @type {?} */
    NzToolTipComponent.prototype._placement;
    /** @type {?} */
    NzToolTipComponent.prototype._trigger;
    /** @type {?} */
    NzToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    NzToolTipComponent.prototype.visible$;
    /** @type {?} */
    NzToolTipComponent.prototype.overlay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzToolTipComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxtQkFBbUIsRUFJcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXVIL0MsNEJBQW1CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBdkd6QyxvQkFBZSxLQUFLLENBQUM7UUFDckIsZUFBVSx1QkFBdUIsQ0FBQztRQUNsQyxtQ0FBNEMsbUJBQW1CLEVBQUc7UUFDbEUsaUJBQVksRUFBRSxDQUFDO1FBQ2Ysa0JBQWEsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLE9BQU8sQ0FBQztRQUVuQixxQkFBZ0IsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsZ0JBQWdDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJbEUsMEJBQThCLEVBQUUsQ0FBQztRQUNqQyxzQkFBdUQsRUFBRSxDQUFDO1FBQzFELHlCQUE2QixJ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LElBQUksQ0FBQyxrQkFBa0IsSUFBaUIsSUFBSTtZQUM5QyxHQUFLLElBQUksQ0FBQyxPQUFPLFNBQUksSUFBSSxDQUFDLFVBQVksSUFBSSxJQUFJO2VBQy9DLENBQUM7S0FDSDs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBd0I7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7S0FDN0I7Ozs7SUFJUywyQ0FBYzs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3ZHOztnQkF6SEYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtvQkFDdEMsKzZCQUFrRDtvQkFDbEQsbUJBQW1CLEVBQUUsS0FBSzs2QkFDSCw0REFJdEI7aUJBQ0Y7Ozs7Z0JBN0JDLGlCQUFpQjs7OzBCQXdDaEIsU0FBUyxTQUFDLFNBQVM7MEJBRW5CLEtBQUssWUFBSSxZQUFZLFNBQUMsWUFBWTtxQ0FDbEMsS0FBSztpQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FFTCxNQUFNOzRCQUVOLEtBQUs7NEJBYUwsS0FBSzs4QkFVTCxLQUFLOzs2QkFsRlI7O1NBdUNhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZmFkZS1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgREVGQVVMVF80X1BPU0lUSU9OUywgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdG9vbHRpcCcsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICAuYW50LXRvb2x0aXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgYCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBDb21wb25lbnQge1xyXG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkRFRkFVTFRfNF9QT1NJVElPTlMgXTtcclxuICBfY2xhc3NNYXAgPSB7fTtcclxuICBfcGxhY2VtZW50ID0gJ3RvcCc7XHJcbiAgX3RyaWdnZXIgPSAnaG92ZXInO1xyXG4gIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgdmlzaWJsZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHZpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy52aXNpYmxlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gc2Vjb25kXHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIHNlY29uZFxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGVTb3VyY2UubmV4dCh2aXNpYmxlKTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlU291cmNlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGdldCBuelRyaWdnZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucy51bnNoaWZ0KFBPU0lUSU9OX01BUFsgdGhpcy5uelBsYWNlbWVudCBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gTWFudWFsbHkgZm9yY2UgdXBkYXRpbmcgY3VycmVudCBvdmVybGF5J3MgcG9zaXRpb25cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50OiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIFBPU0lUSU9OX01BUCkge1xyXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSA9PT0gSlNPTi5zdHJpbmdpZnkoUE9TSVRJT05fTUFQWyBrZXkgXSkpIHtcclxuICAgICAgICB0aGlzLm56UGxhY2VtZW50ID0ga2V5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAvKiogVE9ETyBtYXkgY2F1c2UgcGVyZm9ybWFuY2UgcHJvYmxlbSAqL1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NvbnRlbnRFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX2FmdGVyVmlzaWJpbGl0eUFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ2ZhbHNlJyAmJiAhdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAndHJ1ZScgJiYgdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgdGhpcy5uek92ZXJsYXlDbGFzc05hbWUgXSAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gIF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5T3JpZ2luID0gb3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHByb3RlY3RlZCBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VGl0bGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogKHRoaXMubnpUaXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMubnpUaXRsZSkpO1xyXG4gIH1cclxufVxyXG4iXX0=