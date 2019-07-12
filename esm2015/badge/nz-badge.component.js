/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { AnimationCurves } from '../core/animation/animation';
import { isEmpty } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
/** @type {?} */
const ANIMATION_TRANSITION_IN = `0.3s ${AnimationCurves.EASE_IN_BACK}`;
/** @type {?} */
const ANIMATION_TRANSITION_OUT = `0.3s ${AnimationCurves.EASE_IN_BACK}`;
export class NzBadgeComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCount(value) {
        if (value < 0) {
            this._count = 0;
        }
        else {
            this._count = value;
        }
        this.countArray = this._count.toString().split('');
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @return {?}
     */
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.nzCount > 0 || ((this.nzCount === 0) && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkContent();
    }
}
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('zoomAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scale(0) translateX(50%)' }),
                            animate(ANIMATION_TRANSITION_IN, style({
                                opacity: 1,
                                transform: 'scale(1) translateX(50%)'
                            }))
                        ]),
                        transition(':leave', [
                            style({ opacity: 1, transform: 'scale(1) translateX(50%)' }),
                            animate(ANIMATION_TRANSITION_OUT, style({
                                opacity: 0,
                                transform: 'scale(0) translateX(50%)'
                            }))
                        ])
                    ])
                ],
                template: "<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\r\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus}}\" *ngIf=\"nzStatus\" [ngStyle]=\"nzStyle\"></span>\r\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus\">{{ nzText }}</span>\r\n<sup class=\"ant-scroll-number\"\r\n  *ngIf=\"showSup\"\r\n  @zoomAnimation\r\n  [ngStyle]=\"nzStyle\"\r\n  [class.ant-badge-count]=\"!nzDot\"\r\n  [class.ant-badge-dot]=\"nzDot\"\r\n  [class.ant-badge-multiple-words]=\"countArray.length>=2\">\r\n  <ng-container *ngFor=\"let number of maxNumberArray;let i= index;\">\r\n    <span class=\"ant-scroll-number-only\"\r\n      *ngIf=\"nzCount <= nzOverflowCount\"\r\n      [style.transform]=\"'translateY('+((-countArray[i]*100))+'%)'\">\r\n        <ng-container *ngIf=\"(!nzDot)&&(countArray[i]!=null)\">\r\n          <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p==countArray[i]\">{{ p }}</p>\r\n        </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"nzCount > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\r\n</sup>",
                host: {
                    '[class.ant-badge]': 'true',
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }] }
];
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement',] }],
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzText: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
function NzBadgeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype._count;
    /** @type {?} */
    NzBadgeComponent.prototype.renderer;
    /** @type {?} */
    NzBadgeComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhZGdlL256LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVwRCxNQUFNLHVCQUF1QixHQUFHLFFBQVEsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDOztBQUN2RSxNQUFNLHdCQUF3QixHQUFHLFFBQVEsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBaUN4RSxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQStCM0IsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTlCdkUsc0JBQWlCLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxFQUFFLENBQUM7UUFDaEIsd0JBQW1CLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFFcEQsa0JBQXNDLEtBQUssQ0FBQztRQUM1QyxpQkFBcUMsSUFBSSxDQUFDO1FBQzFDLGFBQWlD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OztJQUNkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmNvbnN0IEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOID0gYDAuM3MgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9CQUNLfWA7XHJcbmNvbnN0IEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCA9IGAwLjNzICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fQkFDS31gO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpCYWRnZVN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJhZGdlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCd6b29tQW5pbWF0aW9uJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKSB0cmFuc2xhdGVYKDUwJSknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoQU5JTUFUSU9OX1RSQU5TSVRJT05fSU4sIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZVgoNTAlKSdcclxuICAgICAgICB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZVgoNTAlKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZShBTklNQVRJT05fVFJBTlNJVElPTl9PVVQsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApIHRyYW5zbGF0ZVgoNTAlKSdcclxuICAgICAgICB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2VdJyAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgbWF4TnVtYmVyQXJyYXkgPSBbXTtcclxuICBjb3VudEFycmF5ID0gW107XHJcbiAgY291bnRTaW5nbGVBcnJheSA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSBdO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1plcm8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RG90ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek92ZXJmbG93Q291bnQgPSA5OTtcclxuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56QmFkZ2VTdGF0dXNUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnRBcnJheSA9IHRoaXMuX2NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Q291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jb3VudDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLm56U2hvd0RvdCAmJiB0aGlzLm56RG90KSB8fCB0aGlzLm56Q291bnQgPiAwIHx8ICgodGhpcy5uekNvdW50ID09PSAwKSAmJiB0aGlzLm56U2hvd1plcm8pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb3VudDogbnVtYmVyO1xyXG5cclxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==