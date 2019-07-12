/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './nz-drawer.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/**
 * @template R
 */
export class DrawerBuilderForService {
    /**
     * @param {?} overlay
     * @param {?} options
     */
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        this.createDrawer();
        this.updateOptions(options);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.instance.savePreviouslyFocusedElement();
        this.drawerRef.instance.nzOnViewInit
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.drawerRef.instance.open();
        });
        this.drawerRef.instance.nzOnClose
            .subscribe(() => {
            this.drawerRef.instance.close();
        });
        this.drawerRef.instance.afterClose
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.drawerRef && this.drawerRef.instance;
    }
    /**
     * @return {?}
     */
    createDrawer() {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    updateOptions(options) {
        Object.assign(this.drawerRef.instance, options);
    }
}
function DrawerBuilderForService_tsickle_Closure_declarations() {
    /** @type {?} */
    DrawerBuilderForService.prototype.drawerRef;
    /** @type {?} */
    DrawerBuilderForService.prototype.overlayRef;
    /** @type {?} */
    DrawerBuilderForService.prototype.unsubscribe$;
    /** @type {?} */
    DrawerBuilderForService.prototype.overlay;
    /** @type {?} */
    DrawerBuilderForService.prototype.options;
}
export class NzDrawerService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzDrawerService.ngInjectableDef = i0.defineInjectable({ factory: function NzDrawerService_Factory() { return new i1.NzDrawerService(i0.inject(i2.Overlay)); }, token: i1.NzDrawerService, providedIn: "root" });
function NzDrawerService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDrawerService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJhd2VyL256LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTFELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBS2xDLFlBQW9CLE9BQWdCLEVBQVUsT0FBd0I7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCOzRCQUYvQyxJQUFJLE9BQU8sRUFBUTtRQUd4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTO2FBQ2hDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVO2FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7S0FDbEQ7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0tBQ2pGOzs7OztJQUVELGFBQWEsQ0FBQyxPQUF3QjtRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUFHRCxNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0tBQ25DOzs7Ozs7SUFHRCxNQUFNLENBQTRCLE9BQThCO1FBQzlELE9BQU8sSUFBSSx1QkFBdUIsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVFOzs7WUFURixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBdER4QixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnLi9uei1kcmF3ZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9uei1kcmF3ZXItcmVmJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL256LWRyYXdlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdlckJ1aWxkZXJGb3JTZXJ2aWNlPFI+IHtcclxuICBwcml2YXRlIGRyYXdlclJlZjogQ29tcG9uZW50UmVmPE56RHJhd2VyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgb3B0aW9uczogTnpEcmF3ZXJPcHRpb25zKSB7XHJcbiAgICB0aGlzLmNyZWF0ZURyYXdlcigpO1xyXG4gICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgLy8gUHJldmVudCByZXBlYXRlZGx5IG9wZW4gZHJhd2VyIHdoZW4gdGFwIGZvY3VzIGVsZW1lbnQuXHJcbiAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5uek9uVmlld0luaXRcclxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2Uub3BlbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2UubnpPbkNsb3NlXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2UuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZHJhd2VyUmVmLmluc3RhbmNlLmFmdGVyQ2xvc2VcclxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5kcmF3ZXJSZWYgPSBudWxsO1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IE56RHJhd2VyUmVmPFI+IHtcclxuICAgIHJldHVybiB0aGlzLmRyYXdlclJlZiAmJiB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURyYXdlcigpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcclxuICAgIHRoaXMuZHJhd2VyUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56RHJhd2VyQ29tcG9uZW50KSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyYXdlclJlZi5pbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBOekRyYXdlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjcmVhdGU8VCA9IGFueSwgRCA9IGFueSwgUiA9IGFueT4ob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zPFQsIEQ+KTogTnpEcmF3ZXJSZWY8Uj4ge1xyXG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==