/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, HostBinding, Input, Optional, Output, QueryList, SkipSelf, ViewChild } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, map, takeUntil } from 'rxjs/operators';
import { POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzDropDownButtonComponent } from '../dropdown/nz-dropdown-button.component';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
import { NzMenuDirective } from './nz-menu.directive';
export class NzSubMenuComponent {
    /**
     * @param {?} nzMenuDirective
     * @param {?} cd
     * @param {?} nzSubMenuComponent
     * @param {?} nzDropDownComponent
     * @param {?} nzDropDownButtonComponent
     */
    constructor(nzMenuDirective, cd, nzSubMenuComponent, nzDropDownComponent, nzDropDownButtonComponent) {
        this.nzMenuDirective = nzMenuDirective;
        this.cd = cd;
        this.nzSubMenuComponent = nzSubMenuComponent;
        this.nzDropDownComponent = nzDropDownComponent;
        this.nzDropDownButtonComponent = nzDropDownButtonComponent;
        this._open = false;
        this._disabled = false;
        this.$mouseSubject = new Subject();
        this.unsubscribe$ = new Subject();
        this.placement = 'rightTop';
        this.$subOpen = new BehaviorSubject(false);
        this.isInDropDown = false;
        this.isInSubMenu = false;
        this.level = 1;
        this.triggerWidth = null;
        this.nzOpenChange = new EventEmitter();
        this.handleOpenEvent = (data) => {
            if (this.nzDisabled) {
                return;
            }
            if (this.nzOpen !== data) {
                this.nzOpen = data;
                this.nzOpenChange.emit(this.nzOpen);
            }
            if (this.nzSubMenuComponent) {
                this.nzSubMenuComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownComponent) {
                this.nzDropDownComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownButtonComponent) {
                this.nzDropDownButtonComponent.$subOpen.next(this.nzOpen);
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOpen(value) {
        this._open = toBoolean(value);
        this.setTriggerWidth();
    }
    /**
     * @return {?}
     */
    get nzOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    get subItemSelected() {
        return !!this.nzMenuDirective.menuItems.find(e => e.nzSelected && e.nzSubMenuComponent === this);
    }
    /**
     * @return {?}
     */
    get submenuSelected() {
        return !!this.subMenus.toArray().find(e => e !== this && e.subItemSelected);
    }
    /**
     * @return {?}
     */
    get expandState() {
        if (this.nzOpen && this.subMenuMode === 'inline') {
            return 'expand';
        }
        else if (this.nzOpen && this.subMenuMode === 'horizontal') {
            return 'bottom';
        }
        else if (this.nzOpen && this.subMenuMode === 'vertical') {
            return 'fade';
        }
        else {
            return 'hidden';
        }
    }
    /**
     * @return {?}
     */
    get overlayPositions() {
        if (this.subMenuMode === 'horizontal') {
            return [POSITION_MAP["bottomLeft"]];
        }
        else {
            return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    clickSubMenuTitle($event) {
        if (this.nzDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @return {?}
     */
    clickSubMenuDropDown() {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get subMenuMode() {
        if (this.nzMenuDirective.nzMode === 'inline') {
            return 'inline';
        }
        else if ((this.nzMenuDirective.nzMode === 'vertical') || (this.isInSubMenu)) {
            return 'vertical';
        }
        else {
            return 'horizontal';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnterEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeaveEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get setDropDownSubmenuClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuOpenClass() {
        return (!this.isInDropDown) && (this.nzOpen);
    }
    /**
     * @return {?}
     */
    get setDropDownVerticalClass() {
        return this.isInDropDown && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setDropDownHorizontalClass() {
        return this.isInDropDown && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setDropDownDisabled() {
        return this.isInDropDown && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuSelectedClass() {
        return this.submenuSelected || this.subItemSelected;
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuDisabled() {
        return (!this.isInDropDown) && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            const originMap = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(key => originMap[key] === POSITION_MAP["leftTop"][key])) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(key => originMap[key] === POSITION_MAP["rightTop"][key])) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzSubMenuComponent) {
            this.level = this.nzSubMenuComponent.level + 1;
            this.isInSubMenu = true;
        }
        this.nzMenuDirective.subMenus.push(this);
        /** @type {?} */
        const $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(value => value[0] || value[1]), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzSubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu]',
                preserveWhitespaces: false,
                animations: [
                    trigger('expandAnimation', [
                        state('expand', style({ height: '*' })),
                        state('hidden', style({ height: 0, overflow: 'hidden' })),
                        transition('expand => hidden', animate(150)),
                        transition('hidden => expand', animate(150)),
                        state('fade', style({ opacity: 1 })),
                        transition('fade => void', [
                            animate(150, style({ opacity: 0 }))
                        ]),
                        transition('void => fade', [
                            style({ opacity: '0' }),
                            animate(150)
                        ]),
                        state('bottom', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => bottom', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
                        ]),
                        transition('bottom => void', [
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                template: "<div\r\n  #trigger\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  [class.ant-dropdown-menu-submenu-title]=\"isInDropDown\"\r\n  [class.ant-menu-submenu-title]=\"!isInDropDown\"\r\n  (mouseenter)=\"onMouseEnterEvent($event)\"\r\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\r\n  (click)=\"clickSubMenuTitle($event)\"\r\n  [style.paddingLeft.px]=\"(nzMenuDirective.nzMode === 'inline')?(level*nzMenuDirective.nzInlineIndent):null\">\r\n  <ng-content select=\"[title]\"></ng-content>\r\n  <span *ngIf=\"isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl>\r\n    <i class=\"ant-menu-submenu-arrow\"></i>\r\n  </ng-template>\r\n</div>\r\n<ul\r\n  [class.ant-dropdown-menu]=\"isInDropDown\"\r\n  [@expandAnimation]=\"expandState\"\r\n  [class.ant-menu]=\"!isInDropDown\"\r\n  [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\r\n  [class.ant-menu-inline]=\"!isInDropDown\"\r\n  [class.ant-dropdown-menu-sub]=\"isInDropDown\"\r\n  [class.ant-menu-sub]=\"!isInDropDown\"\r\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\r\n  (mouseenter)=\"onMouseEnterEvent($event)\"\r\n  *ngIf=\"(nzMenuDirective.nzMode=='inline')\">\r\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen&&(nzMenuDirective.nzMode!='inline')\">\r\n  <div\r\n    class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n    [class.ant-menu-light]=\"nzMenuDirective.nzTheme=='light'\"\r\n    [class.ant-menu-dark]=\"nzMenuDirective.nzTheme=='dark'\"\r\n    [class.ant-menu-submenu-placement-bottomLeft]=\"subMenuMode=='horizontal'\"\r\n    [class.ant-menu-submenu-placement-rightTop]=\"(subMenuMode=='vertical')&&(placement=='rightTop')\"\r\n    [class.ant-menu-submenu-placement-leftTop]=\"(subMenuMode=='vertical')&&(placement=='leftTop')\"\r\n    [@expandAnimation]=\"expandState\"\r\n    (mouseleave)=\"onMouseLeaveEvent($event)\"\r\n    (mouseenter)=\"onMouseEnterEvent($event)\">\r\n    <ul\r\n      [class.ant-dropdown-menu]=\"isInDropDown\"\r\n      [class.ant-menu]=\"!isInDropDown\"\r\n      [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\r\n      [class.ant-menu-vertical]=\"!isInDropDown\"\r\n      [class.ant-dropdown-menu-sub]=\"isInDropDown\"\r\n      [class.ant-menu-sub]=\"!isInDropDown\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                styles: [`
      .ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      .ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      .ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzSubMenuComponent.ctorParameters = () => [
    { type: NzMenuDirective },
    { type: ChangeDetectorRef },
    { type: NzSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: NzDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzSubMenuComponent.propDecorators = {
    subMenus: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzOpenChange: [{ type: Output }],
    cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    trigger: [{ type: ViewChild, args: ['trigger',] }],
    nzOpen: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    setDropDownSubmenuClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu',] }],
    setMenuSubmenuOpenClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-open',] }],
    setDropDownVerticalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-vertical',] }],
    setDropDownHorizontalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-horizontal',] }],
    setDropDownDisabled: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-disabled',] }],
    setMenuSubmenuClass: [{ type: HostBinding, args: ['class.ant-menu-submenu',] }],
    setMenuSubmenuSelectedClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-selected',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-inline',] }],
    setMenuDisabled: [{ type: HostBinding, args: ['class.ant-menu-submenu-disabled',] }]
};
function NzSubMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSubMenuComponent.prototype._open;
    /** @type {?} */
    NzSubMenuComponent.prototype._disabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.$mouseSubject;
    /** @type {?} */
    NzSubMenuComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzSubMenuComponent.prototype.placement;
    /** @type {?} */
    NzSubMenuComponent.prototype.$subOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInDropDown;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInSubMenu;
    /** @type {?} */
    NzSubMenuComponent.prototype.level;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.subMenus;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlay;
    /** @type {?} */
    NzSubMenuComponent.prototype.trigger;
    /** @type {?} */
    NzSubMenuComponent.prototype.handleOpenEvent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuDirective;
    /** @type {?} */
    NzSubMenuComponent.prototype.cd;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownButtonComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUE4RHRELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBaU43QixZQUFtQixlQUFnQyxFQUFVLEVBQXFCLEVBQWtDLGtCQUFzQyxFQUE4QixtQkFBd0MsRUFBOEIseUJBQW9EO1FBQS9SLG9CQUFlLEdB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bFJ0Syx5QkFBeUIsdUJBa1JtTSxJQUFJLFlBQUksUUFBUTs7O3VCQXJNbFAsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkFDekQsTUFBTTt5QkFDTixTQUFTLFNBQUMsbUJBQW1CO3NCQUM3QixTQUFTLFNBQUMsU0FBUztxQkFFbkIsS0FBSzt5QkFVTCxLQUFLO3NDQTZFTCxXQUFXLFNBQUMsaUNBQWlDO3NDQUs3QyxXQUFXLFNBQUMsNkJBQTZCO3VDQUt6QyxXQUFXLFNBQUMsMENBQTBDO3lDQUt0RCxXQUFXLFNBQUMsNENBQTRDO2tDQUt4RCxXQUFXLFNBQUMsMENBQTBDO2tDQUt0RCxXQUFXLFNBQUMsd0JBQXdCOzBDQUtwQyxXQUFXLFNBQUMsaUNBQWlDO21DQUs3QyxXQUFXLFNBQUMsaUNBQWlDO3FDQUs3QyxXQUFXLFNBQUMsbUNBQW1DO2lDQUsvQyxXQUFXLFNBQUMsK0JBQStCOzhCQUszQyxXQUFXLFNBQUMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNraXBTZWxmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQT1NJVElPTl9NQVAgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56RHJvcERvd25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotc3VibWVudV0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIHRyaWdnZXIoJ2V4cGFuZEFuaW1hdGlvbicsIFtcclxuICAgICAgc3RhdGUoJ2V4cGFuZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZCA9PiBoaWRkZW4nLCBhbmltYXRlKDE1MCkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZXhwYW5kJywgYW5pbWF0ZSgxNTApKSxcclxuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdmYWRlID0+IHZvaWQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZSgxNTAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZmFkZScsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcclxuICAgICAgICBhbmltYXRlKDE1MClcclxuICAgICAgXSksXHJcbiAgICAgIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBib3R0b20nLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xyXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LXJpZ2h0VG9wIHtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgJG1vdXNlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xyXG4gICRzdWJPcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgaXNJbkRyb3BEb3duID0gZmFsc2U7XHJcbiAgaXNJblN1Yk1lbnUgPSBmYWxzZTtcclxuICBsZXZlbCA9IDE7XHJcbiAgdHJpZ2dlcldpZHRoID0gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBzdWJNZW51czogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGdldCBzdWJJdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm56TWVudURpcmVjdGl2ZS5tZW51SXRlbXMuZmluZChlID0+IGUubnpTZWxlY3RlZCAmJiBlLm56U3ViTWVudUNvbXBvbmVudCA9PT0gdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3VibWVudVNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5zdWJNZW51cy50b0FycmF5KCkuZmluZChlID0+IGUgIT09IHRoaXMgJiYgZS5zdWJJdGVtU2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGV4cGFuZFN0YXRlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgcmV0dXJuICdleHBhbmQnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgIHJldHVybiAnZmFkZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgb3ZlcmxheVBvc2l0aW9ucygpOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xyXG4gICAgaWYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gWyBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcCBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tTdWJNZW51VGl0bGUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpICYmICghdGhpcy5pc0luRHJvcERvd24pKSB7XHJcbiAgICAgIHRoaXMubnpPcGVuID0gIXRoaXMubnpPcGVuO1xyXG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrU3ViTWVudURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNJbkRyb3BEb3duIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSkge1xyXG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc3ViTWVudU1vZGUoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLm56TWVudURpcmVjdGl2ZS5uek1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgIHJldHVybiAnaW5saW5lJztcclxuICAgIH0gZWxzZSBpZiAoKHRoaXMubnpNZW51RGlyZWN0aXZlLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgKHRoaXMuaXNJblN1Yk1lbnUpKSB7XHJcbiAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlckV2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcclxuICAgICAgdGhpcy4kbW91c2VTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmVFdmVudChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8IHRoaXMuaXNJbkRyb3BEb3duKSB7XHJcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudScpXHJcbiAgZ2V0IHNldERyb3BEb3duU3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LW9wZW4nKVxyXG4gIGdldCBzZXRNZW51U3VibWVudU9wZW5DbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5uek9wZW4pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXZlcnRpY2FsJylcclxuICBnZXQgc2V0RHJvcERvd25WZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1ob3Jpem9udGFsJylcclxuICBnZXQgc2V0RHJvcERvd25Ib3Jpem9udGFsQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWQnKVxyXG4gIGdldCBzZXREcm9wRG93bkRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmIHRoaXMubnpEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudScpXHJcbiAgZ2V0IHNldE1lbnVTdWJtZW51Q2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNJbkRyb3BEb3duO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkJylcclxuICBnZXQgc2V0TWVudVN1Ym1lbnVTZWxlY3RlZENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3VibWVudVNlbGVjdGVkIHx8IHRoaXMuc3ViSXRlbVNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LXZlcnRpY2FsJylcclxuICBnZXQgc2V0TWVudVZlcnRpY2FsQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxyXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWlubGluZScpXHJcbiAgZ2V0IHNldE1lbnVJbmxpbmVDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkJylcclxuICBnZXQgc2V0TWVudURpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMubnpEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLnRyaWdnZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXHJcbiAgICAgIGlmICh0aGlzLmNka092ZXJsYXkgJiYgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka092ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQ6IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudC5jb25uZWN0aW9uUGFpcikge1xyXG4gICAgICBjb25zdCBvcmlnaW5NYXAgPSB7XHJcbiAgICAgICAgb3JpZ2luWCA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5YLFxyXG4gICAgICAgIG9yaWdpblkgOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3JpZ2luWSxcclxuICAgICAgICBvdmVybGF5WDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYLFxyXG4gICAgICAgIG92ZXJsYXlZOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3ZlcmxheVlcclxuICAgICAgfTtcclxuICAgICAgY29uc3Qga2V5TGlzdCA9IFsgJ29yaWdpblgnLCAnb3JpZ2luWScsICdvdmVybGF5WCcsICdvdmVybGF5WScgXTtcclxuICAgICAgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IG9yaWdpbk1hcFsga2V5IF0gPT09IFBPU0lUSU9OX01BUC5sZWZ0VG9wWyBrZXkgXSkpIHtcclxuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICdsZWZ0VG9wJztcclxuICAgICAgfSBlbHNlIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAucmlnaHRUb3BbIGtleSBdKSkge1xyXG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ3JpZ2h0VG9wJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU9wZW5FdmVudCA9IChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56T3BlbiAhPT0gZGF0YSkge1xyXG4gICAgICB0aGlzLm56T3BlbiA9IGRhdGE7XHJcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpTdWJNZW51Q29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpEcm9wRG93bkNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56RHJvcERvd25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLm56T3Blbik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekRyb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMubnpPcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuek1lbnVEaXJlY3RpdmU6IE56TWVudURpcmVjdGl2ZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpTdWJNZW51Q29tcG9uZW50OiBOelN1Yk1lbnVDb21wb25lbnQsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekRyb3BEb3duQ29tcG9uZW50OiBOekRyb3BEb3duQ29tcG9uZW50LCBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudDogTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubnpTdWJNZW51Q29tcG9uZW50LmxldmVsICsgMTtcclxuICAgICAgdGhpcy5pc0luU3ViTWVudSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5zdWJNZW51cy5wdXNoKHRoaXMpO1xyXG4gICAgY29uc3QgJGNvbWJpbmVBbGwgPSBjb21iaW5lTGF0ZXN0KHRoaXMuJHN1Yk9wZW4sIHRoaXMuJG1vdXNlU3ViamVjdC5hc09ic2VydmFibGUoKSkucGlwZShtYXAodmFsdWUgPT4gdmFsdWVbIDAgXSB8fCB2YWx1ZVsgMSBdKSwgYXVkaXRUaW1lKDE1MCkpO1xyXG4gICAgJGNvbWJpbmVBbGwucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy5oYW5kbGVPcGVuRXZlbnQpO1xyXG4gICAgdGhpcy5pc0luRHJvcERvd24gPSB0aGlzLm56TWVudURpcmVjdGl2ZS5uekluRHJvcERvd247XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==