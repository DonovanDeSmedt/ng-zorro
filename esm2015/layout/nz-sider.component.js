/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Host, HostBinding, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzLayoutComponent } from './nz-layout.component';
export class NzSiderComponent {
    /**
     * @param {?} nzLayoutComponent
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.below = false;
        this.destroy$ = new Subject();
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzWidth = 200;
        this.nzCollapsedWidth = 80;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.nzCollapsedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get flexSetting() {
        if (this.nzCollapsed) {
            return `0 0 ${this.nzCollapsedWidth}px`;
        }
        else {
            return `0 0 ${this.nzWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    get widthSetting() {
        if (this.nzCollapsed) {
            return this.nzCollapsedWidth;
        }
        else {
            return this.nzWidth;
        }
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth === 0) && ((this.nzBreakpoint && this.below) || (!this.nzBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth !== 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            Promise.resolve().then(() => this.watchMatchMedia());
            this.ngZone.runOutsideAngular(() => {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(this.destroy$))
                    .subscribe(() => this.watchMatchMedia());
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    }
}
NzSiderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-sider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<div class=\"ant-layout-sider-children\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<span class=\"ant-layout-sider-zero-width-trigger\"\r\n  *ngIf=\"isZeroTrigger\"\r\n  (click)=\"toggleCollapse()\">\r\n  <i nz-icon type=\"bars\"></i>\r\n</span>\r\n<div class=\"ant-layout-sider-trigger\"\r\n  *ngIf=\"isSiderTrigger\"\r\n  (click)=\"toggleCollapse()\"\r\n  [style.width.px]=\"nzCollapsed ? nzCollapsedWidth : nzWidth\">\r\n  <ng-template [ngTemplateOutlet]=\"nzTrigger\"></ng-template>\r\n</div>\r\n<ng-template #defaultTrigger>\r\n  <i nz-icon [type]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\r\n  <i nz-icon [type]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\r\n</ng-template>",
                host: {
                    '[class.ant-layout-sider]': 'true',
                    '[class.ant-layout-sider-zero-width]': 'nzCollapsed && (nzCollapsedWidth===0)',
                    '[style.flex]': 'flexSetting',
                    '[style.max-width.px]': 'widthSetting',
                    '[style.min-width.px]': 'widthSetting',
                    '[style.width.px]': 'widthSetting'
                }
            }] }
];
/** @nocollapse */
NzSiderComponent.ctorParameters = () => [
    { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
NzSiderComponent.propDecorators = {
    nzWidth: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzCollapsible: [{ type: Input }],
    nzTrigger: [{ type: Input }, { type: ViewChild, args: ['defaultTrigger',] }],
    nzCollapsed: [{ type: Input }, { type: HostBinding, args: ['class.ant-layout-sider-collapsed',] }],
    nzCollapsedChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
function NzSiderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSiderComponent.prototype.below;
    /** @type {?} */
    NzSiderComponent.prototype.destroy$;
    /** @type {?} */
    NzSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzLayoutComponent;
    /** @type {?} */
    NzSiderComponent.prototype.mediaMatcher;
    /** @type {?} */
    NzSiderComponent.prototype.ngZone;
    /** @type {?} */
    NzSiderComponent.prototype.platform;
    /** @type {?} */
    NzSiderComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxheW91dC9uei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFtQjFELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBMkQzQixZQUF3QyxpQkFBb0MsRUFBVSxZQUEwQixFQUFVLE1BQWMsRUFBVSxRQUFrQixFQUFVLEdBQXNCO1FBQTVKLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7cUJBMURwTCxLQUFLO3dCQUNGLElBQUksT0FBTyxFQUFFOzRCQUNUO1lBQ3JCLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFH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LENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztLQUNGOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGt1QkFBZ0Q7Z0JBQ2hELElBQUksRUFBaUI7b0JBQ25CLDBCQUEwQixFQUFhLE1BQU07b0JBQzdDLHFDQUFxQyxFQUFFLHVDQUF1QztvQkFDOUUsY0FBYyxFQUF5QixhQUFhO29CQUNwRCxzQkFBc0IsRUFBaUIsY0FBYztvQkFDckQsc0JBQXNCLEVBQWlCLGNBQWM7b0JBQ3JELGtCQUFrQixFQUFxQixjQUFjO2lCQUN0RDthQUNGOzs7O1lBbEJRLGlCQUFpQix1QkE4RVgsUUFBUSxZQUFJLElBQUk7WUFuRnRCLFlBQVk7WUFWbkIsTUFBTTtZQVdDLFFBQVE7WUFqQmYsaUJBQWlCOzs7c0JBbURoQixLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSyxZQUFJLFNBQVMsU0FBQyxnQkFBZ0I7MEJBQ25DLEtBQUssWUFBb0IsV0FBVyxTQUFDLGtDQUFrQztnQ0FDdkUsTUFBTTs7O0lBSkcsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBRWQsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpCcmVha1BvaW50ID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zaWRlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2lkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlcl0nICAgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoXSc6ICduekNvbGxhcHNlZCAmJiAobnpDb2xsYXBzZWRXaWR0aD09PTApJyxcclxuICAgICdbc3R5bGUuZmxleF0nICAgICAgICAgICAgICAgICAgICAgICA6ICdmbGV4U2V0dGluZycsXHJcbiAgICAnW3N0eWxlLm1heC13aWR0aC5weF0nICAgICAgICAgICAgICAgOiAnd2lkdGhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUubWluLXdpZHRoLnB4XScgICAgICAgICAgICAgICA6ICd3aWR0aFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS53aWR0aC5weF0nICAgICAgICAgICAgICAgICAgIDogJ3dpZHRoU2V0dGluZydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYmVsb3cgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcclxuICAgIHhzIDogJzQ4MHB4JyxcclxuICAgIHNtIDogJzU3NnB4JyxcclxuICAgIG1kIDogJzc2OHB4JyxcclxuICAgIGxnIDogJzk5MnB4JyxcclxuICAgIHhsIDogJzEyMDBweCcsXHJcbiAgICB4eGw6ICcxNjAwcHgnXHJcbiAgfTtcclxuICBASW5wdXQoKSBueldpZHRoID0gMjAwO1xyXG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcclxuICBASW5wdXQoKSBuekJyZWFrcG9pbnQ6IE56QnJlYWtQb2ludDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXZlcnNlQXJyb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJykgbnpUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCcpIG56Q29sbGFwc2VkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBnZXQgZmxleFNldHRpbmcoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XHJcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5uekNvbGxhcHNlZFdpZHRofXB4YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5ueldpZHRofXB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB3aWR0aFNldHRpbmcoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2VkV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5ueldpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2F0Y2hNYXRjaE1lZGlhKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpCcmVha3BvaW50KSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwWyB0aGlzLm56QnJlYWtwb2ludCBdfSlgKS5tYXRjaGVzO1xyXG4gICAgICB0aGlzLmJlbG93ID0gbWF0Y2hCZWxvdztcclxuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdChtYXRjaEJlbG93KTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcclxuICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1plcm9UcmlnZ2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzaWJsZSAmJiB0aGlzLm56VHJpZ2dlciAmJiAodGhpcy5uekNvbGxhcHNlZFdpZHRoID09PSAwKSAmJiAoKHRoaXMubnpCcmVha3BvaW50ICYmIHRoaXMuYmVsb3cpIHx8ICghdGhpcy5uekJyZWFrcG9pbnQpKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpZGVyVHJpZ2dlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy5uelRyaWdnZXIgJiYgKHRoaXMubnpDb2xsYXBzZWRXaWR0aCAhPT0gMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpMYXlvdXRDb21wb25lbnQ6IE56TGF5b3V0Q29tcG9uZW50LCBwcml2YXRlIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuaW5pdFNpZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgIC5waXBlKGF1ZGl0VGltZSgxNiksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNYXRjaE1lZGlhKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmRlc3Ryb3lTaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19