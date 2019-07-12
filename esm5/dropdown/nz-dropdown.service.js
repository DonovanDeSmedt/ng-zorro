/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
var NzDropdownService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzDropdownService(overlay, document, zone) {
        this.overlay = overlay;
        this.document = document;
        this.zone = zone;
        this.positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NzDropdownService.prototype.createOverlay = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.createPoint($event);
        /** @type {?} */
        var fakeElementRef = new ElementRef(this.locatePoint);
        this.positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElementRef);
        this.handlePositionChanges(this.positionStrategy);
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.positionStrategy
        });
        return this.overlay.create(overlayConfig);
    };
    /**
     * @param {?} strategy
     * @return {?}
     */
    NzDropdownService.prototype.handlePositionChanges = /**
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        var _this = this;
        strategy.withPositions(this.positions);
        this.onPositionChangeSubscription = this.positionStrategy.positionChanges.subscribe(function (data) {
            /** @type {?} */
            var position = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.instance.setDropDownPosition(position);
        });
    };
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    NzDropdownService.prototype.handleCloseEvent = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.backdropClickSubscription = overlayRef.backdropClick().subscribe(function (_) { return _this.instance.close(); });
        this.detachmentsSubscription = overlayRef.detachments().subscribe(function (_) { return _this.close(); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropdownService.prototype.createPoint = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.locatePoint) {
            /** @type {?} */
            var container = this.document.createElement('span');
            this.document.body.appendChild(container);
            this.locatePoint = container;
        }
        this.locatePoint.style.position = "fixed";
        this.locatePoint.style.top = e.clientY + "px";
        this.locatePoint.style.left = e.clientX + "px";
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.removePoint = /**
     * @return {?}
     */
    function () {
        if (this.locatePoint) {
            this.document.body.removeChild(this.locatePoint);
            this.locatePoint = null;
        }
    };
    /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    NzDropdownService.prototype.setInstanceValue = /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    function (instance, template) {
        instance.open = true;
        instance.setTemplateRef(template);
        instance.setControl(this);
    };
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    NzDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    function ($event, template) {
        var _this = this;
        $event.preventDefault();
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.dispose();
        }
        else {
            this.overlayRef = this.createOverlay($event);
            setTimeout(function () {
                if (_this.overlayRef.backdropElement) {
                    _this.zone.runOutsideAngular(function () {
                        _this.overlayRef.backdropElement.addEventListener('contextmenu', function (e) { return e.preventDefault(); });
                    });
                }
            });
            this.instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
            this.setInstanceValue(this.instance, template);
            this.handleCloseEvent(this.overlayRef);
            return this.instance;
        }
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removePoint();
        this.overlayRef.dispose();
        if (this.backdropClickSubscription) {
            this.backdropClickSubscription.unsubscribe();
            this.backdropClickSubscription = null;
        }
        if (this.detachmentsSubscription) {
            this.detachmentsSubscription.unsubscribe();
            this.detachmentsSubscription = null;
        }
        if (this.onPositionChangeSubscription) {
            this.onPositionChangeSubscription.unsubscribe();
            this.onPositionChangeSubscription = null;
        }
    };
    NzDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDropdownService.ctorParameters = function () { return [
        { type: Overlay },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ NzDropdownService.ngInjectableDef = i0.defineInjectable({ factory: function NzDropdownService_Factory() { return new i1.NzDropdownService(i0.inject(i2.Overlay), i0.inject(i3.DOCUMENT), i0.inject(i0.NgZone)); }, token: i1.NzDropdownService, providedIn: "root" });
    return NzDropdownService;
}());
export { NzDropdownService };
function NzDropdownService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropdownService.prototype.instance;
    /** @type {?} */
    NzDropdownService.prototype.overlayRef;
    /** @type {?} */
    NzDropdownService.prototype.locatePoint;
    /** @type {?} */
    NzDropdownService.prototype.positionStrategy;
    /** @type {?} */
    NzDropdownService.prototype.backdropClickSubscription;
    /** @type {?} */
    NzDropdownService.prototype.detachmentsSubscription;
    /** @type {?} */
    NzDropdownService.prototype.onPositionChangeSubscription;
    /** @type {?} */
    NzDropdownService.prototype.positions;
    /** @type {?} */
    NzDropdownService.prototype.overlay;
    /** @type {?} */
    NzDropdownService.prototype.document;
    /** @type {?} */
    NzDropdownService.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztJQTRCM0UscUNBQXFDO0lBQ3JDLDJCQUFvQixPQUFnQixFQUE0QixRQUFhLEVBQVUsSUFBWTtRQUEvRSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO3lCQWhCL0U7WUFDbEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN6QyxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzVDLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxF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LGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELGlDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztTQUMxQztLQUNGOztnQkFuSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiQyxPQUFPO2dEQXNDZ0MsTUFBTSxTQUFDLFFBQVE7Z0JBaENmLE1BQU07Ozs0QkFUL0M7O1NBaUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWZcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duU2VydmljZSB7XHJcbiAgcHJvdGVjdGVkIGluc3RhbmNlOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSBsb2NhdGVQb2ludDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgcHJpdmF0ZSBiYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBkZXRhY2htZW50c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgb25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgcG9zaXRpb25zID0gW1xyXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxyXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcclxuICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcclxuICBdO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoJGV2ZW50OiBNb3VzZUV2ZW50KTogT3ZlcmxheVJlZiB7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50KCRldmVudCk7XHJcbiAgICBjb25zdCBmYWtlRWxlbWVudFJlZiA9IG5ldyBFbGVtZW50UmVmKHRoaXMubG9jYXRlUG9pbnQpO1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudFJlZik7XHJcbiAgICB0aGlzLmhhbmRsZVBvc2l0aW9uQ2hhbmdlcyh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpO1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgaGFzQmFja2Ryb3AgICAgIDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgIDogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5wb3NpdGlvblN0cmF0ZWd5XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVQb3NpdGlvbkNoYW5nZXMoc3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xyXG4gICAgc3RyYXRlZ3kud2l0aFBvc2l0aW9ucyh0aGlzLnBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBkYXRhLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RHJvcERvd25Qb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2xvc2VFdmVudChvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiB0aGlzLmluc3RhbmNlLmNsb3NlKCkpO1xyXG4gICAgdGhpcy5kZXRhY2htZW50c1N1YnNjcmlwdGlvbiA9IG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKS5zdWJzY3JpYmUoXyA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubG9jYXRlUG9pbnQpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICB0aGlzLmxvY2F0ZVBvaW50ID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2NhdGVQb2ludC5zdHlsZS5wb3NpdGlvbiA9IGBmaXhlZGA7XHJcbiAgICB0aGlzLmxvY2F0ZVBvaW50LnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WX1weGA7XHJcbiAgICB0aGlzLmxvY2F0ZVBvaW50LnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFh9cHhgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQb2ludCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvY2F0ZVBvaW50KSB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmxvY2F0ZVBvaW50KTtcclxuICAgICAgdGhpcy5sb2NhdGVQb2ludCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEluc3RhbmNlVmFsdWUoaW5zdGFuY2U6IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcclxuICAgIGluc3RhbmNlLm9wZW4gPSB0cnVlO1xyXG4gICAgaW5zdGFuY2Uuc2V0VGVtcGxhdGVSZWYodGVtcGxhdGUpO1xyXG4gICAgaW5zdGFuY2Uuc2V0Q29udHJvbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgkZXZlbnQ6IE1vdXNlRXZlbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCRldmVudCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGU6IE1vdXNlRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50KSkuaW5zdGFuY2U7XHJcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VWYWx1ZSh0aGlzLmluc3RhbmNlLCB0ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFdmVudCh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVQb2ludCgpO1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kZXRhY2htZW50c1N1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5vblBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19