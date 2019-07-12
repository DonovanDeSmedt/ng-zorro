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
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    // endregion
    /* tslint:disable-next-line:no-any */
    function NzAnchorComponent(scrollSrv, doc, cd) {
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
    Object.defineProperty(NzAnchorComponent.prototype, "nzAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._affix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._affix = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzBounds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bounds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bounds = toNumber(value, 5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzShowInkInFixed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showInkInFixed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showInkInFixed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function () { return _this.handleScroll(); });
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(function () { return _this.handleScroll(); });
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target && _this.getOffsetTop(target) < scope) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                sections.push({
                    top: top_1,
                    comp: comp
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
            var maxSection = sections.reduce(function (prev, curr) { return curr.top > prev.top ? curr : prev; });
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @return {?}
     */
    function () {
        this.links.forEach(function (i) {
            i.active = false;
            i.markForCheck();
        });
    };
    /**
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        var linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.cd.detectChanges();
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    };
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
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhbmNob3IvbnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTM0QsSUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7O0lBOEVuQyxZQUFZO0lBRVoscUNBQXFDO0lBQ3JDLDJCQUFvQixTQUEwQixFQUE0QixHQUFRLEVBQVUsRUFBcUI7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO3FCQXRFeEUsRUFBRTt5QkFDdkIsS0FBSztzQkFDQyxJQUFJO3VCQUNFLElBQUk7UUFFcEMsZUFBVSxLQUFLLENBQUM7UUFDaEIsb0JBQW1CLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO3NCQUluQixJQUFJO3VCQVdKLENBQUM7K0JBeUJRLEtBQUs7UUFpQnhDLGVBQW1ELElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEUs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QUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07aUJBQ3BEOzs7O2dCQWxCUSxlQUFlO2dEQTJGMkIsTUFBTSxTQUFDLFFBQVE7Z0JBeEdoRSxpQkFBaUI7OztzQkFzQ2hCLFNBQVMsU0FBQyxLQUFLOzBCQVFmLEtBQUs7MkJBV0wsS0FBSzs4QkFXTCxLQUFLO21DQWNMLEtBQUs7MkJBU0wsS0FBSzswQkFNTCxNQUFNOzJCQUVOLE1BQU07OzRCQXZHVDs7U0FvQ2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelNjcm9sbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3Njcm9sbC9uei1zY3JvbGwuc2VydmljZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBOekFuY2hvckxpbmtDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci1saW5rLmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgU2VjdGlvbiB7XHJcbiAgY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50O1xyXG4gIHRvcDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYW5jaG9yJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hbmNob3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gIEBWaWV3Q2hpbGQoJ2luaycpIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuICB3cmFwcGVyU3R5bGU6IHt9ID0geyAnbWF4LWhlaWdodCc6ICcxMDB2aCcgfTtcclxuXHJcbiAgLy8gcmVnaW9uOiBmaWVsZHNcclxuXHJcbiAgcHJpdmF0ZSBfYWZmaXg6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFmZml4KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hZmZpeCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hZmZpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2JvdW5kczogbnVtYmVyID0gNTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpCb3VuZHModmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fYm91bmRzID0gdG9OdW1iZXIodmFsdWUsIDUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Qm91bmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYm91bmRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcclxuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xyXG4gICAgICAnbWF4LWhlaWdodCc6IGBjYWxjKDEwMHZoIC0gJHt0aGlzLl9vZmZzZXRUb3B9cHgpYFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Nob3dJbmtJbkZpeGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd0lua0luRml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dJbmtJbkZpeGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dJbmtJbkZpeGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dJbmtJbkZpeGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEVsZW1lbnQpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XHJcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsOiBFdmVudEVtaXR0ZXI8TnpBbmNob3JMaW5rQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgdW5yZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtzLnNwbGljZSh0aGlzLmxpbmtzLmluZGV4T2YobGluayksIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHRoaXMuZ2V0VGFyZ2V0KCksICdzY3JvbGwnKVxyXG4gICAgICAucGlwZSh0aHJvdHRsZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xyXG4gICAgLy8g55Sx5LqO6aG16Z2i5Yi35paw5pe25rua5Yqo5p2h5L2N572u55qE6K6w5b+GXHJcbiAgICAvLyDlgJLnva7lnKhkb23mnKrmuLLmn5PlrozmiJDvvIzlr7zoh7TorqHnrpfkuI3mraPnoa5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcclxuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9mZnNldFRvcChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmICghcmVjdC53aWR0aCAmJiAhcmVjdC5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHJlY3QudG9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3A7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xyXG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xyXG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcclxuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsgMSBdKTtcclxuICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpIDwgc2NvcGUpIHtcclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xyXG4gICAgICAgIHNlY3Rpb25zLnB1c2goe1xyXG4gICAgICAgICAgdG9wLFxyXG4gICAgICAgICAgY29tcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYXhTZWN0aW9uID0gc2VjdGlvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpO1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IHtcclxuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgaS5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcblxyXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY29tcC5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICBjb25zdCBsaW5rTm9kZSA9IChjb21wLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtYW5jaG9yLWxpbmstdGl0bGUnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLm56U2Nyb2xsLmVtaXQoY29tcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKTtcclxuICAgIGNvbnN0IGVsT2Zmc2V0VG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0T2Zmc2V0KGVsKS50b3A7XHJcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xyXG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQobGlua0NvbXAubnpIcmVmKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==