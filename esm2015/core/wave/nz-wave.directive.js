/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
function NzWaveConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export const NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export const NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
export class NzWaveDirective {
    /**
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} config
     */
    constructor(ngZone, elementRef, config) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        if (config && typeof config.disabled === 'boolean') {
            this.waveDisabled = config.disabled;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderWaveIfEnabled();
    }
    /**
     * @return {?}
     */
    renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    }
}
NzWaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-wave]'
            },] }
];
/** @nocollapse */
NzWaveDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] }
];
NzWaveDirective.propDecorators = {
    nzWaveExtraNode: [{ type: Input }]
};
function NzWaveDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /** @type {?} */
    NzWaveDirective.prototype.waveRenderer;
    /** @type {?} */
    NzWaveDirective.prototype.waveDisabled;
    /** @type {?} */
    NzWaveDirective.prototype.ngZone;
    /** @type {?} */
    NzWaveDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS93YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7OztBQU1wRCxhQUFhLDZCQUE2QixHQUFpQjtJQUN6RCxRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDOztBQUVGLGFBQWEscUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQWUsd0JBQXdCLEVBQUU7SUFDOUYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDZCQUE2QjtDQUN2QyxDQUFDLENBQUM7Ozs7QUFFSCxNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLE9BQU8sNkJBQTZCLENBQUM7Q0FDdEM7QUFLRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBTTFCLFlBQW9CLE1BQWMsRUFDZCxZQUNtQyxNQUFvQjtRQUZ2RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVU7UUFOOUIsdUJBQTJCLEtBQUssQ0FBQzs0QkFHRCxLQUFLO1FBS25DLElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3JDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFHO0tBQ0Y7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7Ozs7WUExQkMsTUFBTTtZQUpOLFVBQVU7NENBdUNHLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7OEJBUHBELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOeldhdmVSZW5kZXJlciB9IGZyb20gJy4vbnotd2F2ZS1yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56V2F2ZUNvbmZpZyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc6IE56V2F2ZUNvbmZpZyA9IHtcclxuICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpXYXZlQ29uZmlnPignbnotd2F2ZS1nbG9iYWwtb3B0aW9ucycsIHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgZmFjdG9yeTogTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUllcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUlkoKTogTnpXYXZlQ29uZmlnIHtcclxuICByZXR1cm4gTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXdhdmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpXYXZlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56V2F2ZUV4dHJhTm9kZSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHdhdmVSZW5kZXJlcjogTnpXYXZlUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSB3YXZlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIGNvbmZpZzogTnpXYXZlQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuZGlzYWJsZWQgPT09ICdib29sZWFuJykge1xyXG4gICAgICB0aGlzLndhdmVEaXNhYmxlZCA9IGNvbmZpZy5kaXNhYmxlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJXYXZlSWZFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJXYXZlSWZFbmFibGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLndhdmVEaXNhYmxlZCAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlciA9IG5ldyBOeldhdmVSZW5kZXJlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5uZ1pvbmUsIHRoaXMubnpXYXZlRXh0cmFOb2RlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19