/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { toBoolean, toNumber } from '../core/util/convert';
/**
 * @record
 */
function Section() { }
function Section_tsickle_Closure_declarations() {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cd
     */
    constructor(scrollSrv, doc, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cd = cd;
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this._affix = true;
        this._bounds = 5;
        this._showInkInFixed = false;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAffix(value) {
        this._affix = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAffix() {
        return this._affix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBounds(value) {
        this._bounds = toNumber(value, 5);
    }
    /**
     * @return {?}
     */
    get nzBounds() {
        return this._bounds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowInkInFixed(value) {
        this._showInkInFixed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowInkInFixed() {
        return this._showInkInFixed;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
    /**
     * @return {?}
     */
    registerScrollEvent() {
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(() => this.handleScroll());
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(() => this.handleScroll());
    }
    /**
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target && this.getOffsetTop(target) < scope) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                sections.push({
                    top,
                    comp
                });
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cd.detectChanges();
        }
        else {
            /** @type {?} */
            const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @return {?}
     */
    clearActive() {
        this.links.forEach(i => {
            i.active = false;
            i.markForCheck();
        });
    }
    /**
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        const linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.cd.detectChanges();
        this.nzScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, () => {
            this.animating = false;
            this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</nz-affix>\r\n<ng-template #content>\r\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\r\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\r\n      <div class=\"ant-anchor-ink\">\r\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
NzAnchorComponent.propDecorators = {
    ink: [{ type: ViewChild, args: ['ink',] }],
    nzAffix: [{ type: Input }],
    nzBounds: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzShowInkInFixed: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzScroll: [{ type: Output }]
};
function NzAnchorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorComponent.prototype.links;
    /** @type {?} */
    NzAnchorComponent.prototype.animating;
    /** @type {?} */
    NzAnchorComponent.prototype.target;
    /** @type {?} */
    NzAnchorComponent.prototype.scroll$;
    /** @type {?} */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    NzAnchorComponent.prototype._affix;
    /** @type {?} */
    NzAnchorComponent.prototype._bounds;
    /** @type {?} */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype._showInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAnchorComponent.prototype.doc;
    /** @type {?} */
    NzAnchorComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhbmNob3IvbnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTM0QsTUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7QUFTckMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBd0U1QixZQUFvQixTQUEwQixFQUE0QixHQUFRLEVBQVUsRUFBcUI7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO3FCQXRFeEUsRUFBRTt5QkFDdkIsS0FBSztzQkFDQyxJQUFJO3VCQUNFLElBQUk7UUFFcEMsZUFBVSxLQUFLLENBQUM7UUFDaEIsb0JBQW1CLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO3NCQUluQixJQUFJO3VCQVdKLENBQUM7K0JBeUJRLEtBQUs7UUFpQnhDLGVBQW1ELElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEUsZ0JBQW1FLElBQUksWUFBWSxFQUFFLENBQUM7S0FNckY7Ozs7O0lBM0RELElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBSUQsSUFDSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBSUQsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixZQUFZLEVBQUUsZ0JBQWdCLElBQUksQ0FBQyxVQUFVLEtBQUs7U0FDbkQsQ0FBQztLQUNIOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUlELElBQ0ksZ0JBQWdCLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxFQUFvQjtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2RSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFZRCxZQUFZLENBQUMsSUFBMkI7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQTJCO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOzs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7Ozs7O0lBRy9CLGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLENBQUM7YUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2FBQzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7O1FBR3hDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFHaEMsWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1Qjs7Ozs7O0lBR0ssWUFBWSxDQUFDLE9BQW9CO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7O1FBQ0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7Ozs7O0lBR3BFLFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTztTQUNSOztRQUVELE1BQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQzs7UUFDL0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O1lBQ3hCLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTzthQUNSOztZQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFFOztnQkFDL0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixHQUFHO29CQUNILElBQUk7aUJBQ0wsQ0FBQyxDQUFDO2FBQ0o7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCO2FBQU07O1lBQ0wsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztLQUNGOzs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDbEIsQ0FBQyxDQUFDOzs7Ozs7SUFHRyxZQUFZLENBQUMsSUFBMkI7UUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFFcEIsTUFBTSxRQUFRLHFCQUFHLG1CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBK0IsRUFBQyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBZ0IsRUFBQztRQUNsSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMvRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHM0IsY0FBYyxDQUFDLFFBQStCOztRQUM1QyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztRQUN0QixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDOztRQUN0RSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7O1FBQ3JELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDOzs7WUFwTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixxakJBQWlEO2dCQUNqRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07YUFDcEQ7Ozs7WUFsQlEsZUFBZTs0Q0EyRjJCLE1BQU0sU0FBQyxRQUFRO1lBeEdoRSxpQkFBaUI7OztrQkFzQ2hCLFNBQVMsU0FBQyxLQUFLO3NCQVFmLEtBQUs7dUJBV0wsS0FBSzswQkFXTCxLQUFLOytCQWNMLEtBQUs7dUJBU0wsS0FBSztzQkFNTCxNQUFNO3VCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IE56QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBTZWN0aW9uIHtcclxuICBjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQ7XHJcbiAgdG9wOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hbmNob3InLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFuY2hvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBFbGVtZW50ID0gbnVsbDtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnaW5rJykgcHJpdmF0ZSBpbms6IEVsZW1lbnRSZWY7XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIHdyYXBwZXJTdHlsZToge30gPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xyXG5cclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBwcml2YXRlIF9hZmZpeDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QWZmaXgodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FmZml4ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FmZml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYm91bmRzOiBudW1iZXIgPSA1O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekJvdW5kcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9ib3VuZHMgPSB0b051bWJlcih2YWx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpCb3VuZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XHJcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hvd0lua0luRml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaG93SW5rSW5GaXhlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd0lua0luRml4ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2hvd0lua0luRml4ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd0lua0luRml4ZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRhcmdldChlbDogc3RyaW5nIHwgRWxlbWVudCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGw6IEV2ZW50RW1pdHRlcjxOekFuY2hvckxpbmtDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXHJcbiAgICAgIC5waXBlKHRocm90dGxlVGltZSg1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XHJcbiAgICAvLyDnlLHkuo7pobXpnaLliLfmlrDml7bmu5rliqjmnaHkvY3nva7nmoTorrDlv4ZcclxuICAgIC8vIOWAkue9ruWcqGRvbeacqua4suafk+WujOaIkO+8jOWvvOiHtOiuoeeul+S4jeato+ehrlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xyXG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKCFyZWN0LndpZHRoICYmICFyZWN0LmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gcmVjdC50b3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVjdC50b3AgLSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFuaW1hdGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xyXG4gICAgY29uc3Qgc2NvcGUgPSAodGhpcy5uek9mZnNldFRvcCB8fCAwKSArIHRoaXMubnpCb3VuZHM7XHJcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XHJcbiAgICAgIGNvbnN0IHNoYXJwTGlua01hdGNoID0gc2hhcnBNYXRjaGVyUmVneC5leGVjKGNvbXAubnpIcmVmLnRvU3RyaW5nKCkpO1xyXG4gICAgICBpZiAoIXNoYXJwTGlua01hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHNoYXJwTGlua01hdGNoWyAxIF0pO1xyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCkgPCBzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCk7XHJcbiAgICAgICAgc2VjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICBjb21wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZSA9ICEhc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldik7XHJcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKG1heFNlY3Rpb24uY29tcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBpLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUFjdGl2ZShjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuXHJcbiAgICBjb21wLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBjb21wLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtOb2RlID0gKGNvbXAuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1hbmNob3ItbGluay10aXRsZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihsaW5rQ29tcC5uekhyZWYpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgY29udGFpbmVyU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0VGFyZ2V0KCkpO1xyXG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRPZmZzZXQoZWwpLnRvcDtcclxuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XHJcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldFRhcmdldCgpLCB0YXJnZXRTY3JvbGxUb3AsIG51bGwsICgpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19