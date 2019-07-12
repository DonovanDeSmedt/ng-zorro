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
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform, cdr) {
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
    Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return "0 0 " + this.nzCollapsedWidth + "px";
            }
            else {
                return "0 0 " + this.nzWidth + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return this.nzCollapsedWidth;
            }
            else {
                return this.nzWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.watchMatchMedia = /**
     * @return {?}
     */
    function () {
        if (this.nzBreakpoint) {
            /** @type {?} */
            var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            this.nzCollapsedChange.emit(matchBelow);
            this.cdr.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    };
    Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth === 0) && ((this.nzBreakpoint && this.below) || (!this.nzBreakpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth !== 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.initSider();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            Promise.resolve().then(function () { return _this.watchMatchMedia(); });
            this.ngZone.runOutsideAngular(function () {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this.destroy$))
                    .subscribe(function () { return _this.watchMatchMedia(); });
            });
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.destroySider();
        }
    };
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
    NzSiderComponent.ctorParameters = function () { return [
        { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzSiderComponent;
}());
export { NzSiderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxheW91dC9uei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBOEV4RCwwQkFBd0MsaUJBQW9DLEVBQVUsWUFBMEIsRUFBVSxNQUFjLEVBQVUsUUFBa0IsRUFBVSxHQUFzQjtRQUE1SixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO3FCQTFEcEwsS0FBSzt3QkFDRixJQUFJLE9BQU8sRUFBRTs0QkFDVDtZQUNyQixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFHLE9BQU87WUFD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OzJCQTVEMUI7O1NBMkNhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1sYXlvdXQuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56QnJlYWtQb2ludCA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2lkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXJdJyAgICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aF0nOiAnbnpDb2xsYXBzZWQgJiYgKG56Q29sbGFwc2VkV2lkdGg9PT0wKScsXHJcbiAgICAnW3N0eWxlLmZsZXhdJyAgICAgICAgICAgICAgICAgICAgICAgOiAnZmxleFNldHRpbmcnLFxyXG4gICAgJ1tzdHlsZS5tYXgtd2lkdGgucHhdJyAgICAgICAgICAgICAgIDogJ3dpZHRoU2V0dGluZycsXHJcbiAgICAnW3N0eWxlLm1pbi13aWR0aC5weF0nICAgICAgICAgICAgICAgOiAnd2lkdGhTZXR0aW5nJyxcclxuICAgICdbc3R5bGUud2lkdGgucHhdJyAgICAgICAgICAgICAgICAgICA6ICd3aWR0aFNldHRpbmcnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGJlbG93ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkaW1lbnNpb25NYXAgPSB7XHJcbiAgICB4cyA6ICc0ODBweCcsXHJcbiAgICBzbSA6ICc1NzZweCcsXHJcbiAgICBtZCA6ICc3NjhweCcsXHJcbiAgICBsZyA6ICc5OTJweCcsXHJcbiAgICB4bCA6ICcxMjAwcHgnLFxyXG4gICAgeHhsOiAnMTYwMHB4J1xyXG4gIH07XHJcbiAgQElucHV0KCkgbnpXaWR0aCA9IDIwMDtcclxuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoID0gODA7XHJcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29sbGFwc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAVmlld0NoaWxkKCdkZWZhdWx0VHJpZ2dlcicpIG56VHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQnKSBuekNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZ2V0IGZsZXhTZXR0aW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMubnpDb2xsYXBzZWRXaWR0aH1weGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMubnpXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGhTZXR0aW5nKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNlZFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpXaWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QnJlYWtwb2ludCkge1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmRpbWVuc2lvbk1hcFsgdGhpcy5uekJyZWFrcG9pbnQgXX0pYCkubWF0Y2hlcztcclxuICAgICAgdGhpcy5iZWxvdyA9IG1hdGNoQmVsb3c7XHJcbiAgICAgIHRoaXMubnpDb2xsYXBzZWQgPSBtYXRjaEJlbG93O1xyXG4gICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VkID0gIXRoaXMubnpDb2xsYXBzZWQ7XHJcbiAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5uekNvbGxhcHNlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy5uelRyaWdnZXIgJiYgKHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCkgJiYgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAoIXRoaXMubnpCcmVha3BvaW50KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMubnpUcmlnZ2VyICYmICh0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56TGF5b3V0Q29tcG9uZW50OiBOekxheW91dENvbXBvbmVudCwgcHJpdmF0ZSBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekxheW91dENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50LmluaXRTaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgICAucGlwZShhdWRpdFRpbWUoMTYpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uekxheW91dENvbXBvbmVudC5kZXN0cm95U2lkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==