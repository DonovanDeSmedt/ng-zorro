/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { shallowEqual } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { throttleByAnimationFrameDecorator } from '../core/util/throttleByAnimationFrame';
export class NzAffixComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} _el
     * @param {?} doc
     * @param {?} cd
     */
    constructor(scrollSrv, _el, doc, cd) {
        this.scrollSrv = scrollSrv;
        this._el = _el;
        this.doc = doc;
        this.cd = cd;
        this.nzChange = new EventEmitter();
        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];
        this._target = window;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTarget(value) {
        this.clearEventListeners();
        this._target = typeof value === 'string' ? this.doc.querySelector(value) : value || window;
        this.setTargetEventListeners();
        this.updatePosition({});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetTop = toNumber(value, null);
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
    set nzOffsetBottom(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetBottom = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timeout = setTimeout(() => {
            this.setTargetEventListeners();
            this.updatePosition({});
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        // tslint:disable-next-line:no-any
        (/** @type {?} */ (this.updatePosition)).cancel();
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect(target);
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = this.doc.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @return {?}
     */
    setTargetEventListeners() {
        this.clearEventListeners();
        this.events.forEach((eventName) => {
            this._target.addEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @return {?}
     */
    clearEventListeners() {
        this.events.forEach(eventName => {
            this._target.removeEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    }
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    genStyle(affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(key => {
            /** @type {?} */
            const val = affixStyle[key];
            return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
        }).join(';');
    }
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        const cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        /** @type {?} */
        const targetNode = this._target;
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        const elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        const elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this._offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this._offsetBottom === 'number';
        }
        /** @type {?} */
        const targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        const targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                template: "<div #wrap>\r\n  <ng-content></ng-content>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
    nz-affix {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: NzScrollService },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
NzAffixComponent.propDecorators = {
    nzTarget: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzOffsetBottom: [{ type: Input }],
    nzChange: [{ type: Output }],
    wrap: [{ type: ViewChild, args: ['wrap',] }]
};
tslib_1.__decorate([
    throttleByAnimationFrameDecorator()
    // tslint:disable-next-line:no-any
    ,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NzAffixComponent.prototype, "updatePosition", null);
function NzAffixComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /** @type {?} */
    NzAffixComponent.prototype.timeout;
    /** @type {?} */
    NzAffixComponent.prototype.events;
    /** @type {?} */
    NzAffixComponent.prototype.affixStyle;
    /** @type {?} */
    NzAffixComponent.prototype.placeholderStyle;
    /** @type {?} */
    NzAffixComponent.prototype.wrap;
    /** @type {?} */
    NzAffixComponent.prototype._target;
    /** @type {?} */
    NzAffixComponent.prototype._offsetTop;
    /** @type {?} */
    NzAffixComponent.prototype._offsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAffixComponent.prototype._el;
    /** @type {?} */
    NzAffixComponent.prototype.doc;
    /** @type {?} */
    NzAffixComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFmZml4L256LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBYTFGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFrQzNCLFlBQW9CLFNBQTBCLEVBQVUsR0FBZSxFQUE0QixHQUFRLEVBQVUsRUFBcUI7UUFBdEgsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUoxSSxnQkFDMkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztzQkFPN0M7WUFDZixRQUFRO1lBQ1IsUUFBUTtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixNQUFNO1NBQ1A7dUJBTW1DLE1BQU07S0FqQnpDOzs7OztJQWpDRCxJQUNJLFFBQVEsQ0FBQyxLQUFnQztRQUMzQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7UUFDM0YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBQyxLQUFhO1FBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1Qzs7OztJQThCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFM0IsbUJBQUMsSUFBSSxDQUFDLGNBQXFCLEVBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN2Qzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWdCLEVBQUUsTUFBK0I7O1FBTXpELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUNqRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUU5QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFFM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O1FBQzlCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDOztRQUN6QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUUzQyxPQUFPO1lBQ0wsR0FBRyxFQUFLLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUM3RCxJQUFJLEVBQUksUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxVQUFVO1lBQ2pFLEtBQUssRUFBRyxRQUFRLENBQUMsS0FBSztZQUN0QixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07U0FDeEIsQ0FBQztLQUNIOzs7O0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEUsQ0FBQyxDQUFDOzs7OztJQUdHLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pFLENBQUMsQ0FBQzs7Ozs7O0lBR0csYUFBYSxDQUFDLE1BQStCO1FBQ25ELE9BQU8sTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLG1CQUFDLE1BQXFCLEVBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsbUJBQ2pELEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQWdCLENBQUEsQ0FBQzs7Ozs7O0lBR3pDLFFBQVEsQ0FBQyxVQUFjO1FBQzdCLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs7WUFDdkMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQzlCLE9BQU8sR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0lBR1AsYUFBYSxDQUFDLENBQVEsRUFBRSxVQUFjOztRQUM1QyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O1FBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksa0JBQWtCLElBQUksVUFBVSxJQUFJLFFBQVEsRUFBRTtZQUN2RSxPQUFPO1NBQ1I7UUFDRCxJQUFJLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7O1FBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQzs7UUFDM0IsTUFBTSxNQUFNLHFCQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNEIsRUFBQztRQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDOztRQUM3QixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDeEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLGtCQUFrQixDQUFDLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7Ozs7OztJQUdLLG1CQUFtQixDQUFDLGdCQUFvQjs7UUFDOUMsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdkQsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLENBQUMsRUFBRTtZQUM1RCxPQUFPO1NBQ1I7UUFDRCxtQkFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQTRCLEVBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Ozs7OztJQUszQyxjQUFjLENBQUMsQ0FBTTs7UUFDbkIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7UUFFaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUM3RCxNQUFNLFNBQVMscUJBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUE0QixFQUFDOztRQUN4RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7UUFDekQsTUFBTSxRQUFRLEdBQUc7WUFDZixLQUFLLEVBQUcsU0FBUyxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUFFLFNBQVMsQ0FBQyxZQUFZO1NBQy9CLENBQUM7O1FBQ0YsTUFBTSxVQUFVLEdBQUc7WUFDakIsR0FBRyxFQUFLLEtBQUs7WUFDYixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUM7O1FBRUYsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUMzRSxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUN0QixTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFVBQVUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQztTQUM1RDs7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUNsRCxNQUFNLGlCQUFpQixHQUNmLG1CQUFDLFVBQW9CLEVBQUMsQ0FBQyxXQUFXLElBQUksbUJBQUMsVUFBeUIsRUFBQyxDQUFDLFlBQVksQ0FBQztRQUN2RixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLG1CQUFDLFNBQW1CLEVBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFOztZQUN4RSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOztZQUMvQixNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLG1CQUFDLFNBQW1CLEVBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRTtnQkFDcEIsUUFBUSxFQUFHLE9BQU87Z0JBQ2xCLEdBQUc7Z0JBQ0gsSUFBSSxFQUFPLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7Z0JBQzVDLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRyxLQUFLO2dCQUNuQyxLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUN2QixLQUFLO2dCQUNMLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTthQUN4QixDQUFDLENBQUM7U0FDSjthQUFNLElBQ0wsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxtQkFBQyxJQUFJLENBQUMsYUFBdUIsRUFBQyxHQUFHLGlCQUFpQjtZQUNqRyxVQUFVLENBQUMsTUFBTSxFQUNqQjs7WUFDQSxNQUFNLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDL0YsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRTtnQkFDcEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE1BQU0sRUFBSSxpQkFBaUIsR0FBRyxtQkFBQyxJQUFJLENBQUMsYUFBdUIsRUFBQztnQkFDNUQsSUFBSSxFQUFNLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7Z0JBQzNDLEtBQUs7YUFDTixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3ZCLEtBQUs7Z0JBQ0wsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO2FBQzFCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxvQkFBTyxJQUFJLENBQUMsVUFBVSxJQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsV0FBVyxJQUFHLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7O1lBN09GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQVMsVUFBVTtnQkFDM0IsZ0VBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFNL0MsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7eUJBTHBCOzs7O0dBSWxCO2FBRUY7Ozs7WUFmUSxlQUFlO1lBWHRCLFVBQVU7NENBNkRnRSxNQUFNLFNBQUMsUUFBUTtZQS9EekYsaUJBQWlCOzs7dUJBK0JoQixLQUFLOzBCQVFMLEtBQUs7NkJBWUwsS0FBSzt1QkFRTCxNQUFNO21CQW9CTixTQUFTLFNBQUMsTUFBTTs7O0lBOEdoQixpQ0FBaUMsRUFBRTtJQUNwQyxrQ0FBa0M7Ozs7O3NEQWlFakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvciB9IGZyb20gJy4uL2NvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotYWZmaXgnLFxyXG4gIHRlbXBsYXRlVXJsICAgIDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlcyAgICAgICAgIDogWyBgXHJcbiAgICBuei1hZmZpeCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIGAgXSxcclxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGFyZ2V0KHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93KSB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3RhcmdldCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlIHx8IHdpbmRvdztcclxuICAgIHRoaXMuc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRCb3R0b20odmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb2Zmc2V0Qm90dG9tID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0aW1lb3V0O1xyXG4gIHByaXZhdGUgZXZlbnRzID0gW1xyXG4gICAgJ3Jlc2l6ZScsXHJcbiAgICAnc2Nyb2xsJyxcclxuICAgICd0b3VjaHN0YXJ0JyxcclxuICAgICd0b3VjaG1vdmUnLFxyXG4gICAgJ3RvdWNoZW5kJyxcclxuICAgICdwYWdlc2hvdycsXHJcbiAgICAnbG9hZCdcclxuICBdO1xyXG4gIHByaXZhdGUgYWZmaXhTdHlsZTtcclxuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3dyYXAnKSBwcml2YXRlIHdyYXA6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX3RhcmdldDogRWxlbWVudCB8IFdpbmRvdyA9IHdpbmRvdztcclxuXHJcbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX29mZnNldEJvdHRvbTogbnVtYmVyO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAodGhpcy51cGRhdGVQb3NpdGlvbiBhcyBhbnkpLmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwpOiB7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHtcclxuICAgIGNvbnN0IGVsZW1SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jLmJvZHk7XHJcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xyXG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcCAgIDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXHJcbiAgICAgIGxlZnQgIDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxyXG4gICAgICB3aWR0aCA6IGVsZW1SZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IENsaWVudFJlY3Qge1xyXG4gICAgcmV0dXJuIHRhcmdldCAhPT0gd2luZG93ID9cclxuICAgICAgKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOlxyXG4gICAgICB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwIH0gYXMgQ2xpZW50UmVjdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU3R5bGUoYWZmaXhTdHlsZToge30pOiBzdHJpbmcge1xyXG4gICAgaWYgKGFmZml4U3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWZmaXhTdHlsZSkubWFwKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGFmZml4U3R5bGVbIGtleSBdO1xyXG4gICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xyXG4gICAgfSkuam9pbignOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlOiB7fSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLl90YXJnZXQgPT09IHdpbmRvdztcclxuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XHJcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLndyYXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShhZmZpeFN0eWxlKTtcclxuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBjbHMgPSAnYW50LWFmZml4JztcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGFmZml4U3R5bGUgJiYgIW9yaWdpbmFsQWZmaXhTdHlsZSkgfHwgKCFhZmZpeFN0eWxlICYmIG9yaWdpbmFsQWZmaXhTdHlsZSkpIHtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlOiB7fSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlID0gdGhpcy5wbGFjZWhvbGRlclN0eWxlO1xyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShwbGFjZWhvbGRlclN0eWxlKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgfVxyXG5cclxuICBAdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlUG9zaXRpb24oZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fdGFyZ2V0O1xyXG4gICAgLy8gQmFja3dhcmRzIHN1cHBvcnRcclxuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xyXG4gICAgY29uc3QgYWZmaXhOb2RlID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGVsZW1PZmZzZXQgPSB0aGlzLmdldE9mZnNldChhZmZpeE5vZGUsIHRhcmdldE5vZGUpO1xyXG4gICAgY29uc3QgZWxlbVNpemUgPSB7XHJcbiAgICAgIHdpZHRoIDogYWZmaXhOb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGFmZml4Tm9kZS5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xyXG4gICAgICB0b3AgICA6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxyXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcclxuICAgICAgb2Zmc2V0VG9wID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPVxyXG4gICAgICAgICAgICAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGxlZnQgICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc2Nyb2xsVG9wIDwgZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJlxyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSk7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBib3R0b20gIDogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXHJcbiAgICAgICAgbGVmdCAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiYgdGhpcy5hZmZpeFN0eWxlICYmIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiBhZmZpeE5vZGUub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgeyAuLi50aGlzLmFmZml4U3R5bGUsIHdpZHRoOiBhZmZpeE5vZGUub2Zmc2V0V2lkdGggfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19