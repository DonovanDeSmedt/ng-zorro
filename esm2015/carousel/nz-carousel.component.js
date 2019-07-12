/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean, toNumber } from '../core/util/convert';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
export class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._autoPlay = false;
        this._autoPlaySpeed = 3000;
        this._dots = true;
        this._vertical = false;
        this._effect = 'scrollx';
        this.unsubscribe$ = new Subject();
        this.activeIndex = 0;
        this.transform = 'translate3d(0px, 0px, 0px)';
        this.nzAfterChange = new EventEmitter();
        this.nzBeforeChange = new EventEmitter();
        this.nzEnableSwipe = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.renderContent();
    }
    /**
     * @return {?}
     */
    get nextIndex() {
        return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
    }
    /**
     * @return {?}
     */
    get prevIndex() {
        return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDots(value) {
        this._dots = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDots() {
        return this._dots;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzEffect(value) {
        this._effect = value;
        this.updateMode();
    }
    /**
     * @return {?}
     */
    get nzEffect() {
        return this._effect;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoPlay(value) {
        this._autoPlay = toBoolean(value);
        this.setUpAutoPlay();
    }
    /**
     * @return {?}
     */
    get nzAutoPlay() {
        return this._autoPlay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoPlaySpeed(value) {
        this._autoPlaySpeed = toNumber(value, null);
        this.setUpAutoPlay();
    }
    /**
     * @return {?}
     */
    get nzAutoPlaySpeed() {
        return this._autoPlaySpeed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        this._vertical = toBoolean(value);
        this.updateMode();
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    setActive(content, i) {
        if (this.slideContents && this.slideContents.length) {
            this.setUpAutoPlay();
            /** @type {?} */
            const beforeIndex = this.slideContents.toArray().findIndex(slide => slide.isActive);
            this.nzBeforeChange.emit({ from: beforeIndex, to: i });
            this.activeIndex = i;
            if (this.nzEffect === 'scrollx') {
                if (this.nzVertical) {
                    this.transform = `translate3d(0px, ${-this.activeIndex * this.elementRef.nativeElement.offsetHeight}px, 0px)`;
                }
                else {
                    this.transform = `translate3d(${-this.activeIndex * this.elementRef.nativeElement.offsetWidth}px, 0px, 0px)`;
                }
            }
            else {
                this.transform = 'translate3d(0px, 0px, 0px)';
            }
            this.slideContents.forEach(slide => slide.isActive = slide === content);
            this.nzAfterChange.emit(i);
        }
    }
    /**
     * @return {?}
     */
    renderContent() {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach((content, i) => {
                content.width = this.elementRef.nativeElement.offsetWidth;
                if (this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (this.nzVertical) {
                        content.top = -i * this.elementRef.nativeElement.offsetHeight;
                    }
                    else {
                        content.left = -i * content.width;
                    }
                }
                else {
                    content.fadeMode = false;
                    content.left = null;
                    content.top = null;
                }
            });
            if (this.nzVertical) {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.setStyle(this.slickList.nativeElement, 'height', `${this.slideContents.first.el.offsetHeight}px`);
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'height', `${this.slideContents.length * this.elementRef.nativeElement.offsetHeight}px`);
            }
            else {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'width', `${this.slideContents.length * this.elementRef.nativeElement.offsetWidth}px`);
            }
            this.setUpAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    setUpAutoPlay() {
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.timeout = setTimeout(_ => {
                this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
            }, this.nzAutoPlaySpeed);
        }
    }
    /**
     * @return {?}
     */
    updateMode() {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setActive(this.slideContents.first, 0);
        }
    }
    /**
     * @return {?}
     */
    clearTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
    }
    /**
     * @return {?}
     */
    pre() {
        this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setActive(this.slideContents.toArray()[index], index);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === LEFT_ARROW) { // Left
            // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === RIGHT_ARROW) { // Right
            // Right
            this.next();
            e.preventDefault();
        }
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = 'swipeleft') {
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    swipeInProgress(e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            const final = e.isFinal;
            /** @type {?} */
            const scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            const totalWidth = this.elementRef.nativeElement.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                const totalHeight = this.elementRef.nativeElement.offsetHeight;
                /** @type {?} */
                const scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                const scrollHeight = scrollPercent * totalHeight;
                this.transform = `translate3d(0px, ${-this.activeIndex * totalHeight + scrollHeight}px, 0px)`;
            }
            else {
                this.transform = `translate3d(${-this.activeIndex * totalWidth + scrollWidth}px, 0px, 0px)`;
            }
        }
        if (e.isFinal) {
            this.setUpAutoPlay();
        }
        else {
            this.clearTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.slideContents.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.renderContent();
        });
        this.renderContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.clearTimeout();
    }
}
NzCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-carousel',
                preserveWhitespaces: false,
                template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\r\n  <div class=\"slick-list\" #slickList tabindex=\"-1\" (keydown)=\"onKeyDown($event)\" \r\n    (swipeleft)=\"swipe('swipeleft')\" (swiperight)=\"swipe('swiperight')\" (pan)=\"swipeInProgress($event);\">\r\n    <div class=\"slick-track\" [style.transform]=\"transform\" #slickTrack (mousedown)=\"$event.preventDefault()\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\r\n    <li\r\n      *ngFor=\"let content of slideContents; let i =index\"\r\n      [class.slick-active]=\"content.isActive\"\r\n      (click)=\"setActive(content,i)\">\r\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #renderDotTemplate let-index>\r\n  <button>{{index + 1}}</button>\r\n</ng-template>",
                host: {
                    '[class.ant-carousel]': 'true'
                },
                styles: [`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
        transition: all 0.5s ease;
      }

      .slick-slide {
        transition: opacity 500ms ease;
      }

    `]
            }] }
];
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzCarouselComponent.propDecorators = {
    slideContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
    slickList: [{ type: ViewChild, args: ['slickList',] }],
    slickTrack: [{ type: ViewChild, args: ['slickTrack',] }],
    nzAfterChange: [{ type: Output }],
    nzBeforeChange: [{ type: Output }],
    nzEnableSwipe: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    nzDotRender: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzEffect: [{ type: Input }],
    nzAutoPlay: [{ type: Input }],
    nzAutoPlaySpeed: [{ type: Input }],
    nzVertical: [{ type: Input }, { type: HostBinding, args: ['class.ant-carousel-vertical',] }]
};
function NzCarouselComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype._dots;
    /** @type {?} */
    NzCarouselComponent.prototype._vertical;
    /** @type {?} */
    NzCarouselComponent.prototype._effect;
    /** @type {?} */
    NzCarouselComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.transform;
    /** @type {?} */
    NzCarouselComponent.prototype.timeout;
    /** @type {?} */
    NzCarouselComponent.prototype.slideContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.elementRef;
    /** @type {?} */
    NzCarouselComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXFDN0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFxTjlCLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7eUJBcE5sRCxLQUFLOzhCQUNBLElBQUk7cUJBQ2IsSUFBSTt5QkFDQSxLQUFLO3VCQUNQLFNBQVM7NEJBQ0osSUFBSSxPQUFPLEVBQVE7UUFFMUMsbUJBQWMsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFZLDRCQUE0QixDQUFDO1FBTXpDLHFCQUF5RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVFLHNCQUFnRixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25HLHFCQUF5QixJQUFJLENBQUM7S0FxTTdCOzs7OztJQWxNRCxjQUFjLENBQUMsQ0FBVTtRQUN2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QUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7OztZQTVRRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGc5QkFBbUQ7Z0JBQ25ELElBQUksRUFBaUI7b0JBQ25CLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JDO2FBRUo7Ozs7WUFuREMsVUFBVTtZQVFWLFNBQVM7Ozs0QkF3RFIsZUFBZSxTQUFDLDBCQUEwQjt3QkFDMUMsU0FBUyxTQUFDLFdBQVc7eUJBQ3JCLFNBQVMsU0FBQyxZQUFZOzRCQUN0QixNQUFNOzZCQUNOLE1BQU07NEJBQ04sS0FBSzs2QkFFTCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFOzBCQWExQyxLQUFLO3FCQUVMLEtBQUs7dUJBU0wsS0FBSzt5QkFVTCxLQUFLOzhCQVVMLEtBQUs7eUJBVUwsS0FBSyxZQUNMLFdBQVcsU0FBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnIHwgJ3N3aXBlcmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcm91c2VsJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWxdJzogJ3RydWUnXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXHJcbiAgICBgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay1kb3RzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLXRyYWNrIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay1zbGlkZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHByaXZhdGUgX2F1dG9QbGF5ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXV0b1BsYXlTcGVlZCA9IDMwMDA7XHJcbiAgcHJpdmF0ZSBfZG90cyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcclxuICBwcml2YXRlIF9lZmZlY3QgPSAnc2Nyb2xseCc7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBhY3RpdmVJbmRleCA9IDA7XHJcbiAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJztcclxuICB0aW1lb3V0O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBzbGlkZUNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xyXG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTGlzdCcpIHNsaWNrTGlzdDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzbGlja1RyYWNrJykgc2xpY2tUcmFjazogRWxlbWVudFJlZjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmVmb3JlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgbnpFbmFibGVTd2lwZSA9IHRydWU7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXHJcbiAgb25XaW5kb3dSZXNpemUoZTogVUlFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmV4dEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA8IHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxID8gKHRoaXMuYWN0aXZlSW5kZXggKyAxKSA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJldkluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyAodGhpcy5hY3RpdmVJbmRleCAtIDEpIDogKHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56RG90UmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyIH0+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRvdHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RvdHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56RG90cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kb3RzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFZmZlY3QodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZWZmZWN0ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekVmZmVjdCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b1BsYXkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F1dG9QbGF5ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QXV0b1BsYXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b1BsYXk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekF1dG9QbGF5U3BlZWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYXV0b1BsYXlTcGVlZCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcclxuICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QXV0b1BsYXlTcGVlZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9QbGF5U3BlZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcm91c2VsLXZlcnRpY2FsJylcclxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZShjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSwgaTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XHJcbiAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gdGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKS5maW5kSW5kZXgoc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUpO1xyXG4gICAgICB0aGlzLm56QmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiBiZWZvcmVJbmRleCwgdG86IGkgfSk7XHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpO1xyXG4gICAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMHB4LCAkey10aGlzLmFjdGl2ZUluZGV4ICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4LCAwcHgpYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstdGhpcy5hY3RpdmVJbmRleCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4LCAwcHgsIDBweClgO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUgPSBzbGlkZSA9PT0gY29udGVudCk7XHJcbiAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZm9yRWFjaCgoY29udGVudCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQud2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ2ZhZGUnKSB7XHJcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcclxuICAgICAgICAgICAgY29udGVudC50b3AgPSAtaSAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubGVmdCA9IC1pICogY29udGVudC53aWR0aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgY29udGVudC5sZWZ0ID0gbnVsbDtcclxuICAgICAgICAgIGNvbnRlbnQudG9wID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHt0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QuZWwub2Zmc2V0SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHt0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXBBdXRvUGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XHJcbiAgICBpZiAodGhpcy5uekF1dG9QbGF5ICYmIHRoaXMubnpBdXRvUGxheVNwZWVkID4gMCkge1xyXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIHRoaXMubmV4dEluZGV4IF0sIHRoaXMubmV4dEluZGV4KTtcclxuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW9kZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5uZXh0SW5kZXggXSwgdGhpcy5uZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5wcmV2SW5kZXggXSwgdGhpcy5wcmV2SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyBpbmRleCBdLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykgeyAvLyBMZWZ0XHJcbiAgICAgIHRoaXMucHJlKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykgeyAvLyBSaWdodFxyXG4gICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3dpcGUoYWN0aW9uOiBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpFbmFibGVTd2lwZSkgeyByZXR1cm47IH1cclxuICAgIGlmIChhY3Rpb24gPT09ICdzd2lwZWxlZnQnKSB7IHRoaXMubmV4dCgpOyB9XHJcbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVyaWdodCcpIHsgdGhpcy5wcmUoKTsgfVxyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXHJcbiAgc3dpcGVJblByb2dyZXNzKGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpFZmZlY3QgPT09ICdzY3JvbGx4Jykge1xyXG4gICAgICBjb25zdCBmaW5hbCA9IGUuaXNGaW5hbDtcclxuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBmaW5hbCA/IDAgOiBlLmRlbHRhWCAqIDEuMjtcclxuICAgICAgY29uc3QgdG90YWxXaWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsUGVyY2VudCA9IHNjcm9sbFdpZHRoIC8gdG90YWxXaWR0aDtcclxuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSAgc2Nyb2xsUGVyY2VudCAqIHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRvdGFsSGVpZ2h0ICsgc2Nyb2xsSGVpZ2h0fXB4LCAwcHgpYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdG90YWxXaWR0aCArIHNjcm9sbFdpZHRofXB4LCAwcHgsIDBweClgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZS5pc0ZpbmFsKSB7XHJcbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZUNvbnRlbnRzLmNoYW5nZXNcclxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==