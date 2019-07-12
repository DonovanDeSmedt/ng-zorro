/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzDropDownDirective } from './nz-dropdown.directive';
export class NzDropDownComponent {
    /**
     * @param {?} renderer
     * @param {?} changeDetector
     */
    constructor(renderer, changeDetector) {
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
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.$subOpen = new BehaviorSubject(false);
        this.$visibleChange = new Subject();
        this.nzTrigger = 'hover';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzVisibleChange = new EventEmitter();
        this.onVisibleChange = (visible) => {
            if (visible) {
                this.setTriggerWidth();
            }
            if (this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.nzVisibleChange.emit(this.nzVisible);
            }
            this.changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzClickHide(value) {
        this._clickHide = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzClickHide() {
        return this._clickHide;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        if (this._disabled) {
            this.renderer.setAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        this._visible = toBoolean(value);
        /** handle nzVisible change with mouse event **/
        this.$visibleChange.next(this._visible);
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        this.placement = value;
        this.dropDownPosition = (this.nzPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
        this.positions.unshift(/** @type {?} */ (POSITION_MAP[this.placement]));
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this.placement;
    }
    /**
     * @return {?}
     */
    onClickEvent() {
        if (this.nzTrigger === 'click') {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onMouseEnterEvent() {
        if (this.nzTrigger === 'hover') {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeaveEvent() {
        if (this.nzTrigger === 'hover') {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.$visibleChange.next(false);
    }
    /**
     * @return {?}
     */
    show() {
        this.$visibleChange.next(true);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        this.triggerWidth = this.nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
            this.cdkOverlay.overlayRef.updateSize({
                minWidth: this.triggerWidth
            });
        }
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        let $pre = observable$;
        if (this.nzClickHide && this.nzMenu) {
            /** @type {?} */
            const $menuItemClick = this.nzMenu.nzClick.asObservable().pipe(mapTo(false));
            $pre = merge($pre, $menuItemClick);
        }
        /** @type {?} */
        const final$ = combineLatest($pre, this.$subOpen).pipe(map(value => value[0] || value[1]), debounceTime(50), distinctUntilChanged());
        final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this.onVisibleChange);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzMenu) {
            this.nzMenu.nzInDropDown = true;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let mouse$;
        if (this.nzTrigger === 'hover') {
            /** @type {?} */
            const mouseEnterOrigin$ = this.nzOrigin.$mouseenter.pipe(mapTo(true));
            /** @type {?} */
            const mouseLeaveOrigin$ = this.nzOrigin.$mouseleave.pipe(mapTo(false));
            mouse$ = merge(mouseLeaveOrigin$, mouseEnterOrigin$);
        }
        if (this.nzTrigger === 'click') {
            mouse$ = this.nzOrigin.$click.pipe(mapTo(true));
        }
        /** @type {?} */
        const observable$ = merge(this.$visibleChange, mouse$);
        this.startSubscribe(observable$);
    }
    /**
     * @return {?}
     */
    get hasBackdrop() {
        return this.nzTrigger === 'click';
    }
}
NzDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\r\n  <div\r\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n    [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\"\r\n    [@dropDownAnimation]=\"dropDownPosition\"\r\n    (mouseenter)=\"onMouseEnterEvent()\"\r\n    (mouseleave)=\"onMouseLeaveEvent()\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <div [class.ant-table-filter-dropdown]=\"hasFilterButton\">\r\n      <ng-content select=\"[nz-menu]\"></ng-content>\r\n      <ng-content select=\".ant-table-filter-dropdown-btns\"></ng-content>\r\n    </div>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>",
                styles: [`
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropDownComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUEwRCxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBeUI5RCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQTRKOUIsWUFBb0IsUUFBbUIsRUFBWSxjQUFpQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQW1COzBCQTNKL0QsSUFBSTt3QkFDTixLQUFLO3lCQUNKLEtBQUs7NEJBQ0YsSUFBSSxPQUFPLEVBQVE7UUFFMUMsdUJBQTJCLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxDQUFDLENBQUM7UUFDakIsaUJBQXlCLFlBQVksQ0FBQztRQUN0Qyx3QkFBZ0QsUUFBUSxDQUFDO1FBQ3pELGlCQUFzQyxDQUFFLEdBQUcsMEJBQTBCLENBQUUsQ0FBQztRQUN4RSxnQkFBVyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUMvQyxzQkFBaUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUd4QyxpQkFBd0MsT0FBTyxDQUFDO1FBQ2hELDBCQUE4QixFQUFFLENBQUM7UUFDakMsc0JBQXVELEVBQUUsQ0FBQztRQUMxRCx1QkFBNEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtHL0UsdUJBQWtCLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ3JDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDLENBQUE7S0FnQ0E7Ozs7O0lBeElELElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ25GO0tBQ0Y7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWtCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxtQkFBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBNEIsRUFBQyxDQUFDO0tBQ2xGOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUF3QztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7S0FDekQ7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7O1FBRXpGLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWTthQUM1QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFnQzs7UUFDN0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUNuQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDcEM7O1FBQ0QsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3pJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFhRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsZUFBZTs7UUFDYixJQUFJLE1BQU0sQ0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTs7WUFDOUIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBQ3RFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRDs7UUFDRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztLQUNuQzs7O1lBL0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsYUFBYTtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixpQkFBaUI7aUJBQ2xCO2dCQUNELDhpQ0FBbUQ7eUJBRWpEOzs7Ozs7Ozs7S0FTQzthQUVKOzs7O1lBbkNDLFNBQVM7WUFSVCxpQkFBaUI7Ozs4QkFtRGhCLEtBQUs7dUJBT0wsWUFBWSxTQUFDLG1CQUFtQjtxQkFDaEMsWUFBWSxTQUFDLGVBQWU7d0JBQzVCLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLE1BQU07eUJBQ04sU0FBUyxTQUFDLG1CQUFtQjswQkFFN0IsS0FBSzt5QkFTTCxLQUFLO3dCQWNMLEtBQUs7MEJBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsIFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi4vbWVudS9uei1tZW51LmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZHJvcGRvd24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIGRyb3BEb3duQW5pbWF0aW9uXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgX2NsaWNrSGlkZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKSBoYXNGaWx0ZXJCdXR0b24gPSBmYWxzZTtcclxuICB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIHBsYWNlbWVudDogTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCc7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TIF07XHJcbiAgJHN1Yk9wZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAkdmlzaWJsZUNoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQENvbnRlbnRDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlKSBuek9yaWdpbjogTnpEcm9wRG93bkRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKE56TWVudURpcmVjdGl2ZSkgbnpNZW51OiBOek1lbnVEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2xpY2tIaWRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jbGlja0hpZGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Q2xpY2tIaWRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrSGlkZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm56T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uek9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgLyoqIGhhbmRsZSBuelZpc2libGUgY2hhbmdlIHdpdGggbW91c2UgZXZlbnQgKiovXHJcbiAgICB0aGlzLiR2aXNpYmxlQ2hhbmdlLm5leHQodGhpcy5fdmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogTnpQbGFjZW1lbnQpIHtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSAodGhpcy5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEpID8gJ3RvcCcgOiAnYm90dG9tJztcclxuICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQoUE9TSVRJT05fTUFQWyB0aGlzLnBsYWNlbWVudCBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56UGxhY2VtZW50KCk6IE56UGxhY2VtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnBsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLiR2aXNpYmxlQ2hhbmdlLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMubnpPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXHJcbiAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xyXG4gICAgICAgIG1pbldpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogdm9pZCB7XHJcbiAgICBsZXQgJHByZSA9IG9ic2VydmFibGUkO1xyXG4gICAgaWYgKHRoaXMubnpDbGlja0hpZGUgJiYgdGhpcy5uek1lbnUpIHtcclxuICAgICAgY29uc3QgJG1lbnVJdGVtQ2xpY2sgPSB0aGlzLm56TWVudS5uekNsaWNrLmFzT2JzZXJ2YWJsZSgpLnBpcGUobWFwVG8oZmFsc2UpKTtcclxuICAgICAgJHByZSA9IG1lcmdlKCRwcmUsICRtZW51SXRlbUNsaWNrKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbmFsJCA9IGNvbWJpbmVMYXRlc3QoJHByZSwgdGhpcy4kc3ViT3BlbikucGlwZShtYXAodmFsdWUgPT4gdmFsdWVbIDAgXSB8fCB2YWx1ZVsgMSBdKSwgZGVib3VuY2VUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XHJcbiAgICBmaW5hbCQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy5vblZpc2libGVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TWVudSkge1xyXG4gICAgICB0aGlzLm56TWVudS5uekluRHJvcERvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgbGV0IG1vdXNlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBjb25zdCBtb3VzZUVudGVyT3JpZ2luJCA9IHRoaXMubnpPcmlnaW4uJG1vdXNlZW50ZXIucGlwZShtYXBUbyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IG1vdXNlTGVhdmVPcmlnaW4kID0gdGhpcy5uek9yaWdpbi4kbW91c2VsZWF2ZS5waXBlKG1hcFRvKGZhbHNlKSk7XHJcbiAgICAgIG1vdXNlJCA9IG1lcmdlKG1vdXNlTGVhdmVPcmlnaW4kLCBtb3VzZUVudGVyT3JpZ2luJCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgbW91c2UkID0gdGhpcy5uek9yaWdpbi4kY2xpY2sucGlwZShtYXBUbyh0cnVlKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvYnNlcnZhYmxlJCA9IG1lcmdlKHRoaXMuJHZpc2libGVDaGFuZ2UsIG1vdXNlJCk7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxufVxyXG4iXX0=