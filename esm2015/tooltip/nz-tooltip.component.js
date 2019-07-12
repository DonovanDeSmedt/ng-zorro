/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzToolTipComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...DEFAULT_4_POSITIONS];
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this.visibleSource.value !== visible) {
            this.visibleSource.next(visible);
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this.visibleSource.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.nzPlacement]));
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    updatePosition() {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        for (const key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.nzVisible = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _afterVisibilityAnimation(e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.overlayOrigin = origin;
    }
    /**
     * @return {?}
     */
    isContentEmpty() {
        return this.nzTitle instanceof TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
    }
}
NzToolTipComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-tooltip',
                animations: [fadeAnimation],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [@fadeAnimation]=\"''+(visible$ | async)\"\r\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                preserveWhitespaces: false,
                styles: [`
    .ant-tooltip {
      position: relative;
    }
  `]
            }] }
];
/** @nocollapse */
NzToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLG1CQUFtQixFQUlwQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFlakQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQXdHN0IsWUFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF2R3pDLG9CQUFlLEtBQUssQ0FBQztRQUNyQixlQUFVLHVCQUF1QixDQUFDO1FBQ2xDLGtCQUF1QyxDQUFFLEdBQUcsbUJBQW1CLENBQUUsQ0FBQztRQUNsRSxpQkFBWSxFQUFFLENBQUM7UUFDZixrQkFBYSxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsT0FBTyxDQUFDO1FBRW5CLHFCQUFnQixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNwRCxnQkFBZ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUlsRSwwQkFBOEIsRUFBRSxDQUFD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QUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsRUFBRSxJQUFJO1NBQy9DLENBQUM7S0FDSDs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF3QjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7OztJQUlTLGNBQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3ZHOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsUUFBUSxFQUFhLFlBQVk7Z0JBQ2pDLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtnQkFDdEMsKzZCQUFrRDtnQkFDbEQsbUJBQW1CLEVBQUUsS0FBSzt5QkFDSDs7OztHQUl0QjthQUNGOzs7O1lBN0JDLGlCQUFpQjs7O3NCQXdDaEIsU0FBUyxTQUFDLFNBQVM7c0JBRW5CLEtBQUssWUFBSSxZQUFZLFNBQUMsWUFBWTtpQ0FDbEMsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFFTCxNQUFNO3dCQUVOLEtBQUs7d0JBYUwsS0FBSzswQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBERUZBVUxUXzRfUE9TSVRJT05TLCBQT1NJVElPTl9NQVAgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10b29sdGlwJyxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIC5hbnQtdG9vbHRpcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICBgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VG9vbFRpcENvbXBvbmVudCB7XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF80X1BPU0lUSU9OUyBdO1xyXG4gIF9jbGFzc01hcCA9IHt9O1xyXG4gIF9wbGFjZW1lbnQgPSAndG9wJztcclxuICBfdHJpZ2dlciA9ICdob3Zlcic7XHJcbiAgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICB2aXNpYmxlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZpc2libGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScpIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gc2Vjb25kXHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlU291cmNlLnZhbHVlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZVNvdXJjZS5uZXh0KHZpc2libGUpO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVTb3VyY2UudmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fcG9zaXRpb25zLnVuc2hpZnQoUE9TSVRJT05fTUFQWyB0aGlzLm56UGxhY2VtZW50IF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBNYW51YWxseSBmb3JjZSB1cGRhdGluZyBjdXJyZW50IG92ZXJsYXkncyBwb3NpdGlvblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQ6IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gUE9TSVRJT05fTUFQKSB7XHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeSgkZXZlbnQuY29ubmVjdGlvblBhaXIpID09PSBKU09OLnN0cmluZ2lmeShQT1NJVElPTl9NQVBbIGtleSBdKSkge1xyXG4gICAgICAgIHRoaXMubnpQbGFjZW1lbnQgPSBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIC8qKiBUT0RPIG1heSBjYXVzZSBwZXJmb3JtYW5jZSBwcm9ibGVtICovXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfYWZ0ZXJWaXNpYmlsaXR5QW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAnZmFsc2UnICYmICF0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd0cnVlJyAmJiB0aGlzLm56VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLm56T3ZlcmxheUNsYXNzTmFtZSBdICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWAgXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlPcmlnaW4gPSBvcmlnaW47XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgcHJvdGVjdGVkIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiAodGhpcy5uelRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5uelRpdGxlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==