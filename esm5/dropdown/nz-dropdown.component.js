/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownComponent = /** @class */ (function () {
    function NzDropDownComponent(renderer, changeDetector) {
        var _this = this;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this._clickHide = true;
        this._visible = false;
        this._disabled = false;
        this.unsubscribe$ = new Subject();
        this.hasFilterButton = false;
        this.triggerWidth = 0;
        this.placement = 'bottomLeft';
        this.dropDownPosition = 'bottom';
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.$subOpen = new BehaviorSubject(false);
        this.$visibleChange = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzVisibleChange = new EventEmitter();
        this.onVisibleChange = function (visible) {
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
            }
            _this.changeDetector.markForCheck();
        };
    }
    Object.defineProperty(NzDropDownComponent.prototype, "nzClickHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clickHide;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clickHide = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzDisabled", {
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
            if (this._disabled) {
                this.renderer.setAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = toBoolean(value);
            /** handle nzVisible change with mouse event **/
            this.$visibleChange.next(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.placement = value;
            this.dropDownPosition = (this.nzPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this.positions.unshift(/** @type {?} */ (POSITION_MAP[this.placement]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onClickEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'click') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onMouseEnterEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'hover') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onMouseLeaveEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'hover') {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(false);
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(true);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzDropDownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
            this.cdkOverlay.overlayRef.updateSize({
                minWidth: this.triggerWidth
            });
        }
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    NzDropDownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        /** @type {?} */
        var $pre = observable$;
        if (this.nzClickHide && this.nzMenu) {
            /** @type {?} */
            var $menuItemClick = this.nzMenu.nzClick.asObservable().pipe(mapTo(false));
            $pre = merge($pre, $menuItemClick);
        }
        /** @type {?} */
        var final$ = combineLatest($pre, this.$subOpen).pipe(map(function (value) { return value[0] || value[1]; }), debounceTime(50), distinctUntilChanged());
        final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this.onVisibleChange);
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzMenu) {
            this.nzMenu.nzInDropDown = true;
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mouse$;
        if (this.nzTrigger === 'hover') {
            /** @type {?} */
            var mouseEnterOrigin$ = this.nzOrigin.$mouseenter.pipe(mapTo(true));
            /** @type {?} */
            var mouseLeaveOrigin$ = this.nzOrigin.$mouseleave.pipe(mapTo(false));
            mouse$ = merge(mouseLeaveOrigin$, mouseEnterOrigin$);
        }
        if (this.nzTrigger === 'click') {
            mouse$ = this.nzOrigin.$click.pipe(mapTo(true));
        }
        /** @type {?} */
        var observable$ = merge(this.$visibleChange, mouse$);
        this.startSubscribe(observable$);
    };
    Object.defineProperty(NzDropDownComponent.prototype, "hasBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTrigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    NzDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\r\n  <div\r\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n    [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\"\r\n    [@dropDownAnimation]=\"dropDownPosition\"\r\n    (mouseenter)=\"onMouseEnterEvent()\"\r\n    (mouseleave)=\"onMouseLeaveEvent()\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <div [class.ant-table-filter-dropdown]=\"hasFilterButton\">\r\n      <ng-content select=\"[nz-menu]\"></ng-content>\r\n      <ng-content select=\".ant-table-filter-dropdown-btns\"></ng-content>\r\n    </div>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>",
                    styles: ["\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzDropDownComponent.propDecorators = {
        hasFilterButton: [{ type: Input }],
        nzOrigin: [{ type: ContentChild, args: [NzDropDownDirective,] }],
        nzMenu: [{ type: ContentChild, args: [NzMenuDirective,] }],
        nzTrigger: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzVisibleChange: [{ type: Output }],
        cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzDropDownComponent;
}());
export { NzDropDownComponent };
function NzDropDownComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownComponent.prototype._clickHide;
    /** @type {?} */
    NzDropDownComponent.prototype._visible;
    /** @type {?} */
    NzDropDownComponent.prototype._disabled;
    /** @type {?} */
    NzDropDownComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzDropDownComponent.prototype.hasFilterButton;
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.placement;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.$subOpen;
    /** @type {?} */
    NzDropDownComponent.prototype.$visibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOrigin;
    /** @type {?} */
    NzDropDownComponent.prototype.nzMenu;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.cdkOverlay;
    /** @type {?} */
    NzDropDownComponent.prototype.onVisibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.renderer;
    /** @type {?} */
    NzDropDownComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFxTDVELDZCQUFvQixRQUFtQixFQUFZLGNBQWlDO1FBQXBGLGlCQUNDO1FBRG1CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7MEJBM0ovRCxJQUFJO3dCQUNOLEtBQUs7eUJBQ0osS0FBSzs0QkFDRixJQUFJLE9BQU8sRUFBUTtRQUUxQyx1QkFBMkIsS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLENBQUMsQ0FB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aUIsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pEOztRQUNELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbEM7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztTQUNuQzs7O09BQUE7O2dCQS9LRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGFBQWE7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBVzt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCw4aUNBQW1EOzZCQUVqRCx3TEFTQztpQkFFSjs7OztnQkFuQ0MsU0FBUztnQkFSVCxpQkFBaUI7OztrQ0FtRGhCLEtBQUs7MkJBT0wsWUFBWSxTQUFDLG1CQUFtQjt5QkFDaEMsWUFBWSxTQUFDLGVBQWU7NEJBQzVCLEtBQUs7cUNBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLE1BQU07NkJBQ04sU0FBUyxTQUFDLG1CQUFtQjs4QkFFN0IsS0FBSzs2QkFTTCxLQUFLOzRCQWNMLEtBQUs7OEJBV0wsS0FBSzs7OEJBdkdSOztTQWdEYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBQT1NJVElPTl9NQVAgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWRyb3Bkb3duJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICBkcm9wRG93bkFuaW1hdGlvblxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIF9jbGlja0hpZGUgPSB0cnVlO1xyXG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgQElucHV0KCkgaGFzRmlsdGVyQnV0dG9uID0gZmFsc2U7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICBwbGFjZW1lbnQ6IE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyBdO1xyXG4gICRzdWJPcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgJHZpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBDb250ZW50Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSkgbnpPcmlnaW46IE56RHJvcERvd25EaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChOek1lbnVEaXJlY3RpdmUpIG56TWVudTogTnpNZW51RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0gPSB7fTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNsaWNrSGlkZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fY2xpY2tIaWRlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekNsaWNrSGlkZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGlja0hpZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uek9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMubnpPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIC8qKiBoYW5kbGUgbnpWaXNpYmxlIGNoYW5nZSB3aXRoIG1vdXNlIGV2ZW50ICoqL1xyXG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KHRoaXMuX3Zpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IE56UGxhY2VtZW50KSB7XHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gKHRoaXMubnpQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xKSA/ICd0b3AnIDogJ2JvdHRvbSc7XHJcbiAgICB0aGlzLnBvc2l0aW9ucy51bnNoaWZ0KFBPU0lUSU9OX01BUFsgdGhpcy5wbGFjZW1lbnQgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcclxuICB9XHJcblxyXG4gIGdldCBuelBsYWNlbWVudCgpOiBOelBsYWNlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRW50ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VMZWF2ZUV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHZpc2libGVDaGFuZ2UubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLm56T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIC8qKiBzaG91bGQgcmVtb3ZlIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9wdWxsLzg3NjUgbWVyZ2VkICoqL1xyXG4gICAgaWYgKHRoaXMuY2RrT3ZlcmxheSAmJiB0aGlzLmNka092ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNka092ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHtcclxuICAgICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGhcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydFN1YnNjcmliZShvYnNlcnZhYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPik6IHZvaWQge1xyXG4gICAgbGV0ICRwcmUgPSBvYnNlcnZhYmxlJDtcclxuICAgIGlmICh0aGlzLm56Q2xpY2tIaWRlICYmIHRoaXMubnpNZW51KSB7XHJcbiAgICAgIGNvbnN0ICRtZW51SXRlbUNsaWNrID0gdGhpcy5uek1lbnUubnpDbGljay5hc09ic2VydmFibGUoKS5waXBlKG1hcFRvKGZhbHNlKSk7XHJcbiAgICAgICRwcmUgPSBtZXJnZSgkcHJlLCAkbWVudUl0ZW1DbGljayk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaW5hbCQgPSBjb21iaW5lTGF0ZXN0KCRwcmUsIHRoaXMuJHN1Yk9wZW4pLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlWyAwIF0gfHwgdmFsdWVbIDEgXSksIGRlYm91bmNlVGltZSg1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xyXG4gICAgZmluYWwkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHRoaXMub25WaXNpYmxlQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uek1lbnUpIHtcclxuICAgICAgdGhpcy5uek1lbnUubnpJbkRyb3BEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGxldCBtb3VzZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgY29uc3QgbW91c2VFbnRlck9yaWdpbiQgPSB0aGlzLm56T3JpZ2luLiRtb3VzZWVudGVyLnBpcGUobWFwVG8odHJ1ZSkpO1xyXG4gICAgICBjb25zdCBtb3VzZUxlYXZlT3JpZ2luJCA9IHRoaXMubnpPcmlnaW4uJG1vdXNlbGVhdmUucGlwZShtYXBUbyhmYWxzZSkpO1xyXG4gICAgICBtb3VzZSQgPSBtZXJnZShtb3VzZUxlYXZlT3JpZ2luJCwgbW91c2VFbnRlck9yaWdpbiQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIG1vdXNlJCA9IHRoaXMubnpPcmlnaW4uJGNsaWNrLnBpcGUobWFwVG8odHJ1ZSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb2JzZXJ2YWJsZSQgPSBtZXJnZSh0aGlzLiR2aXNpYmxlQ2hhbmdlLCBtb3VzZSQpO1xyXG4gICAgdGhpcy5zdGFydFN1YnNjcmliZShvYnNlcnZhYmxlJCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcbn1cclxuIl19