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
export class NzDropdownService {
    /**
     * @param {?} overlay
     * @param {?} document
     * @param {?} zone
     */
    constructor(overlay, document, zone) {
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
    createOverlay($event) {
        this.createPoint($event);
        /** @type {?} */
        const fakeElementRef = new ElementRef(this.locatePoint);
        this.positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElementRef);
        this.handlePositionChanges(this.positionStrategy);
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.positionStrategy
        });
        return this.overlay.create(overlayConfig);
    }
    /**
     * @param {?} strategy
     * @return {?}
     */
    handlePositionChanges(strategy) {
        strategy.withPositions(this.positions);
        this.onPositionChangeSubscription = this.positionStrategy.positionChanges.subscribe(data => {
            /** @type {?} */
            const position = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            this.instance.setDropDownPosition(position);
        });
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    handleCloseEvent(overlayRef) {
        this.backdropClickSubscription = overlayRef.backdropClick().subscribe(_ => this.instance.close());
        this.detachmentsSubscription = overlayRef.detachments().subscribe(_ => this.close());
    }
    /**
     * @param {?} e
     * @return {?}
     */
    createPoint(e) {
        if (!this.locatePoint) {
            /** @type {?} */
            const container = this.document.createElement('span');
            this.document.body.appendChild(container);
            this.locatePoint = container;
        }
        this.locatePoint.style.position = `fixed`;
        this.locatePoint.style.top = `${e.clientY}px`;
        this.locatePoint.style.left = `${e.clientX}px`;
    }
    /**
     * @return {?}
     */
    removePoint() {
        if (this.locatePoint) {
            this.document.body.removeChild(this.locatePoint);
            this.locatePoint = null;
        }
    }
    /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    setInstanceValue(instance, template) {
        instance.open = true;
        instance.setTemplateRef(template);
        instance.setControl(this);
    }
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    create($event, template) {
        $event.preventDefault();
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.dispose();
        }
        else {
            this.overlayRef = this.createOverlay($event);
            setTimeout(() => {
                if (this.overlayRef.backdropElement) {
                    this.zone.runOutsideAngular(() => {
                        this.overlayRef.backdropElement.addEventListener('contextmenu', (e) => e.preventDefault());
                    });
                }
            });
            this.instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
            this.setInstanceValue(this.instance, template);
            this.handleCloseEvent(this.overlayRef);
            return this.instance;
        }
    }
    /**
     * @return {?}
     */
    close() {
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
    }
}
NzDropdownService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDropdownService.ctorParameters = () => [
    { type: Overlay },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/** @nocollapse */ NzDropdownService.ngInjectableDef = i0.defineInjectable({ factory: function NzDropdownService_Factory() { return new i1.NzDropdownService(i0.inject(i2.Overlay), i0.inject(i3.DOCUMENT), i0.inject(i0.NgZone)); }, token: i1.NzDropdownService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBSzdFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXdCNUIsWUFBb0IsT0FBZ0IsRUFBNEIsUUFBYSxFQUFVLElBQVk7UUFBL0UsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTt5QkFoQi9FO1lBQ2xCLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUM1QyxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNw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RUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtLQUNGOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztTQUMxQztLQUNGOzs7WUFuSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYkMsT0FBTzs0Q0FzQ2dDLE1BQU0sU0FBQyxRQUFRO1lBaENmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93blNlcnZpY2Uge1xyXG4gIHByb3RlY3RlZCBpbnN0YW5jZTogTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgbG9jYXRlUG9pbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgZGV0YWNobWVudHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHBvc2l0aW9ucyA9IFtcclxuICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcclxuICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxyXG4gICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXHJcbiAgXTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCRldmVudDogTW91c2VFdmVudCk6IE92ZXJsYXlSZWYge1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludCgkZXZlbnQpO1xyXG4gICAgY29uc3QgZmFrZUVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZih0aGlzLmxvY2F0ZVBvaW50KTtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5oYW5kbGVQb3NpdGlvbkNoYW5nZXModGhpcy5wb3NpdGlvblN0cmF0ZWd5KTtcclxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIGhhc0JhY2tkcm9wICAgICA6IHRydWUsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUG9zaXRpb25DaGFuZ2VzKHN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcclxuICAgIHN0cmF0ZWd5LndpdGhQb3NpdGlvbnModGhpcy5wb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5vblBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZGF0YS5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldERyb3BEb3duUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsb3NlRXZlbnQob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQge1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gdGhpcy5pbnN0YW5jZS5jbG9zZSgpKTtcclxuICAgIHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24gPSBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCkuc3Vic2NyaWJlKF8gPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxvY2F0ZVBvaW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5sb2NhdGVQb2ludCA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIHRoaXMubG9jYXRlUG9pbnQuc3R5bGUucG9zaXRpb24gPSBgZml4ZWRgO1xyXG4gICAgdGhpcy5sb2NhdGVQb2ludC5zdHlsZS50b3AgPSBgJHtlLmNsaWVudFl9cHhgO1xyXG4gICAgdGhpcy5sb2NhdGVQb2ludC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYfXB4YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlUG9pbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sb2NhdGVQb2ludCkge1xyXG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5sb2NhdGVQb2ludCk7XHJcbiAgICAgIHRoaXMubG9jYXRlUG9pbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnN0YW5jZVZhbHVlKGluc3RhbmNlOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XHJcbiAgICBpbnN0YW5jZS5vcGVuID0gdHJ1ZTtcclxuICAgIGluc3RhbmNlLnNldFRlbXBsYXRlUmVmKHRlbXBsYXRlKTtcclxuICAgIGluc3RhbmNlLnNldENvbnRyb2wodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgkZXZlbnQpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlOiBNb3VzZUV2ZW50KSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCkpLmluc3RhbmNlO1xyXG4gICAgICB0aGlzLnNldEluc3RhbmNlVmFsdWUodGhpcy5pbnN0YW5jZSwgdGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmhhbmRsZUNsb3NlRXZlbnQodGhpcy5vdmVybGF5UmVmKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlUG9pbnQoKTtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICBpZiAodGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5kZXRhY2htZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5vblBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMub25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==