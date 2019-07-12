/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
export class NzDropDownButtonComponent extends NzDropDownComponent {
    /**
     * @param {?} renderer
     * @param {?} changeDetector
     */
    constructor(renderer, changeDetector) {
        super(renderer, changeDetector);
        this.nzSize = 'default';
        this.nzType = 'default';
        this.nzClick = new EventEmitter();
        this.onVisibleChange = (visible) => {
            if (this.nzDisabled) {
                return;
            }
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
     * rewrite afterViewInit hook
     * @return {?}
     */
    ngAfterViewInit() {
        this.startSubscribe(this.$visibleChange);
    }
}
NzDropDownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-button',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\r\n  <button\r\n    type=\"button\"\r\n    nz-button\r\n    [disabled]=\"nzDisabled\"\r\n    [nzType]=\"nzType\"\r\n    [nzSize]=\"nzSize\"\r\n    (click)=\"nzClick.emit($event)\">\r\n    <span><ng-content></ng-content></span>\r\n  </button>\r\n  <button\r\n    nz-button\r\n    type=\"button\"\r\n    class=\"ant-dropdown-trigger\"\r\n    [nzType]=\"nzType\"\r\n    [nzSize]=\"nzSize\"\r\n    [disabled]=\"nzDisabled\"\r\n    (click)=\"onClickEvent()\"\r\n    (mouseenter)=\"onMouseEnterEvent()\"\r\n    (mouseleave)=\"onMouseLeaveEvent()\">\r\n    <i nz-icon type=\"ellipsis\"></i>\r\n  </button>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\r\n  <div\r\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\r\n    [@dropDownAnimation]=\"dropDownPosition\"\r\n    (mouseenter)=\"onMouseEnterEvent()\"\r\n    (mouseleave)=\"onMouseLeaveEvent()\"\r\n    [style.minWidth.px]=\"triggerWidth\">\r\n    <ng-content select=\"[nz-menu]\"></ng-content>\r\n  </div>\r\n</ng-template>",
                styles: [`
    :host {
      position: relative;
      display: inline-block;
    }

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
NzDropDownButtonComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzDropDownButtonComponent.propDecorators = {
    nzSize: [{ type: Input }],
    nzType: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content',] }],
    nzClick: [{ type: Output }],
    nzOrigin: [{ type: ViewChild, args: [NzDropDownDirective,] }]
};
function NzDropDownButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.content;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzOrigin;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.onVisibleChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBMEI5RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1COzs7OztJQXFCaEUsWUFBWSxRQUFtQixFQUFFLGNBQWlDO1FBQ2hFLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFyQmxDLGNBQWtCLFNBQVMsQ0FBQztRQUM1QixjQUFrQixTQUFTLENBQUM7UUFFNUIsZUFBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUc1RCx1QkFBa0IsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQyxDQUFBO0tBSUE7Ozs7O0lBR0QsZUFBZTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxvQkFBb0I7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsaUJBQWlCO2lCQUNsQjtnQkFDRCxtNUNBQTBEO3lCQUNuQzs7Ozs7Ozs7Ozs7Ozs7R0FjdEI7YUFDRjs7OztZQS9CQyxTQUFTO1lBUFQsaUJBQWlCOzs7cUJBeUNoQixLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsU0FBUyxTQUFDLFNBQVM7c0JBQ25CLE1BQU07dUJBQ04sU0FBUyxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWRyb3Bkb3duLWJ1dHRvbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xyXG4gICAgZHJvcERvd25BbmltYXRpb25cclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICB0b3A6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gIGAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQFZpZXdDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlKSBuek9yaWdpbjtcclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIocmVuZGVyZXIsIGNoYW5nZURldGVjdG9yKTtcclxuICB9XHJcblxyXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhcnRTdWJzY3JpYmUodGhpcy4kdmlzaWJsZUNoYW5nZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==