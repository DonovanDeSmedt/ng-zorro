/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/** @enum {number} */
var Breakpoint = {
    'xxl': 0,
    'xl': 1,
    'lg': 2,
    'md': 3,
    'sm': 4,
    'xs': 5,
};
export { Breakpoint };
Breakpoint[Breakpoint['xxl']] = 'xxl';
Breakpoint[Breakpoint['xl']] = 'xl';
Breakpoint[Breakpoint['lg']] = 'lg';
Breakpoint[Breakpoint['md']] = 'md';
Breakpoint[Breakpoint['sm']] = 'sm';
Breakpoint[Breakpoint['xs']] = 'xs';
/** @type {?} */
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export class NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    }
    /**
     * @return {?}
     */
    updateGutter() {
        this.actualGutter = this.calculateGutter();
        this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
        this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
    }
    /**
     * @return {?}
     */
    watchMedia() {
        // @ts-ignore
        Object.keys(responsiveMap).map((screen) => {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                this.breakPoint = screen;
            }
        });
        this.updateGutter();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzType"] || changes["nzAlign"] || changes["nzJustify"]) {
            this.setClassMap();
        }
        if (changes["nzGutter"]) {
            this.updateGutter();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(this.destroy$))
                    .subscribe(() => this.watchMedia());
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-row',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform }
];
NzRowComponent.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }]
};
function NzRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRowComponent.prototype.nzType;
    /** @type {?} */
    NzRowComponent.prototype.nzAlign;
    /** @type {?} */
    NzRowComponent.prototype.nzJustify;
    /** @type {?} */
    NzRowComponent.prototype.nzGutter;
    /** @type {?} */
    NzRowComponent.prototype.el;
    /** @type {?} */
    NzRowComponent.prototype.prefixCls;
    /** @type {?} */
    NzRowComponent.prototype.breakPoint;
    /** @type {?} */
    NzRowComponent.prototype.actualGutter;
    /** @type {?} */
    NzRowComponent.prototype.destroy$;
    /** @type {?} */
    NzRowComponent.prototype.elementRef;
    /** @type {?} */
    NzRowComponent.prototype.renderer;
    /** @type {?} */
    NzRowComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowComponent.prototype.mediaMatcher;
    /** @type {?} */
    NzRowComponent.prototype.ngZone;
    /** @type {?} */
    NzRowComponent.prototype.platform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7SUFPcEYsUUFBSztJQUNMLE9BQUk7SUFDSixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJOzs7c0JBTEosS0FBSyxLQUFMLEtBQUs7c0JBQ0wsSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7O0FBS04sTUFBTSxhQUFhLEdBQWtCO0lBQ25DLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLHFCQUFxQjtJQUMxQixHQUFHLEVBQUUscUJBQXFCO0NBQzNCLENBQUM7QUFVRixNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBaUR6QixZQUFtQixVQUFzQixFQUFTLFFB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Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xyXG5leHBvcnQgdHlwZSBOekFsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xyXG5leHBvcnQgdHlwZSBOelR5cGUgPSAnZmxleCcgfCBudWxsO1xyXG5cclxuZXhwb3J0IGVudW0gQnJlYWtwb2ludCB7XHJcbiAgJ3h4bCcsXHJcbiAgJ3hsJyxcclxuICAnbGcnLFxyXG4gICdtZCcsXHJcbiAgJ3NtJyxcclxuICAneHMnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnRNYXAgPSB7IFtpbmRleCBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF06IHN0cmluZyB9O1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZU1hcDogQnJlYWtwb2ludE1hcCA9IHtcclxuICB4cyA6ICcobWF4LXdpZHRoOiA1NzVweCknLFxyXG4gIHNtIDogJyhtaW4td2lkdGg6IDU3NnB4KScsXHJcbiAgbWQgOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcclxuICBsZyA6ICcobWluLXdpZHRoOiA5OTJweCknLFxyXG4gIHhsIDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxyXG4gIHh4bDogJyhtaW4td2lkdGg6IDE2MDBweCknXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotcm93JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJvdy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpUeXBlOiBOelR5cGU7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogTnpBbGlnbiA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIG56SnVzdGlmeTogTnpKdXN0aWZ5ID0gJ3N0YXJ0JztcclxuICBASW5wdXQoKSBuekd1dHRlcjogbnVtYmVyIHwgb2JqZWN0O1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XHJcbiAgcHJpdmF0ZSBicmVha1BvaW50OiBCcmVha3BvaW50O1xyXG4gIGFjdHVhbEd1dHRlcjogbnVtYmVyO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY2FsY3VsYXRlR3V0dGVyKCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJyZWFrUG9pbnQgJiYgdGhpcy5uekd1dHRlclsgdGhpcy5icmVha1BvaW50IF0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLWxlZnQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgfVxyXG5cclxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IEJyZWFrcG9pbnQpID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFsgc2NyZWVuIF0pLm1hdGNoZXM7XHJcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XHJcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gc2NyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICF0aGlzLm56VHlwZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gIF0gICAgICAgICAgICAgICAgICA6IHRoaXMubnpUeXBlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpBbGlnbn1gIF0gIDogdGhpcy5uelR5cGUgJiYgdGhpcy5uekFsaWduLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpKdXN0aWZ5fWAgXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekp1c3RpZnlcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHB1YmxpYyBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlciwgcHVibGljIG5nWm9uZTogTmdab25lLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlIHx8IGNoYW5nZXMubnpBbGlnbiB8fCBjaGFuZ2VzLm56SnVzdGlmeSkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekd1dHRlcikge1xyXG4gICAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgICAucGlwZShhdWRpdFRpbWUoMTYpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWVkaWEoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19