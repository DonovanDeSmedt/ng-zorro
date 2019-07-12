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
var NzAffixComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzAffixComponent(scrollSrv, _el, doc, cd) {
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
    Object.defineProperty(NzAffixComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clearEventListeners();
            this._target = typeof value === 'string' ? this.doc.querySelector(value) : value || window;
            this.setTargetEventListeners();
            this.updatePosition({});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetTop", {
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
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetTop = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetBottom", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetBottom = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timeout = setTimeout(function () {
            _this.setTargetEventListeners();
            _this.updatePosition({});
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        // tslint:disable-next-line:no-any
        (/** @type {?} */ (this.updatePosition)).cancel();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect(target);
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.doc.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.setTargetEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearEventListeners();
        this.events.forEach(function (eventName) {
            _this._target.addEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.clearEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.events.forEach(function (eventName) {
            _this._target.removeEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    };
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.genStyle = /**
     * @param {?} affixStyle
     * @return {?}
     */
    function (affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(function (key) {
            /** @type {?} */
            var val = affixStyle[key];
            return key + ":" + (typeof val === 'string' ? val : val + 'px');
        }).join(';');
    };
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        var cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var targetNode = this._target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        var elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        var elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
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
        var targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        var targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    template: "<div #wrap>\r\n  <ng-content></ng-content>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n    nz-affix {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzAffixComponent;
}());
export { NzAffixComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFmZml4L256LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQThDeEYsa0NBQWtDO0lBQ2xDLDBCQUFvQixTQUEwQixFQUFVLEdBQWUsRUFBNEIsR0FBUSxFQUFVLEVBQXFCO1FBQXRILGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFKMUksZ0JBQzJDLElBQUksWUFBWSxFQUFFLENBQUM7c0JBTzdDO1lBQ2YsUUFBUTtZQUNSLFFBQVE7WUFDUixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsTUFBTTtTQUNQO3VCQU1tQyxNQUFNO0tBakJ6QztJQWpDRCxzQkFDSSxzQ0FBUTs7Ozs7UUFEWixVQUNhLEtBQWdDO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFP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LElBQUk7Z0JBQzNDLEtBQUssT0FBQTthQUNOLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdkIsS0FBSyxPQUFBO2dCQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTthQUMxQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO2dCQUMzRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQU8sSUFBSSxDQUFDLFVBQVUsSUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsSUFBRyxDQUFDO2FBQzdFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7O2dCQTdPRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFTLFVBQVU7b0JBQzNCLGdFQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBTS9DLGFBQWEsRUFBSSxpQkFBaUIsQ0FBQyxJQUFJOzZCQUxwQixvREFJbEI7aUJBRUY7Ozs7Z0JBZlEsZUFBZTtnQkFYdEIsVUFBVTtnREE2RGdFLE1BQU0sU0FBQyxRQUFRO2dCQS9EekYsaUJBQWlCOzs7MkJBK0JoQixLQUFLOzhCQVFMLEtBQUs7aUNBWUwsS0FBSzsyQkFRTCxNQUFNO3VCQW9CTixTQUFTLFNBQUMsTUFBTTs7O1FBOEdoQixpQ0FBaUMsRUFBRTtRQUNwQyxrQ0FBa0M7Ozs7OzBEQWlFakM7MkJBbFFIOztTQWdDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvciB9IGZyb20gJy4uL2NvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotYWZmaXgnLFxyXG4gIHRlbXBsYXRlVXJsICAgIDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlcyAgICAgICAgIDogWyBgXHJcbiAgICBuei1hZmZpeCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIGAgXSxcclxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGFyZ2V0KHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93KSB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3RhcmdldCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlIHx8IHdpbmRvdztcclxuICAgIHRoaXMuc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRCb3R0b20odmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb2Zmc2V0Qm90dG9tID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0aW1lb3V0O1xyXG4gIHByaXZhdGUgZXZlbnRzID0gW1xyXG4gICAgJ3Jlc2l6ZScsXHJcbiAgICAnc2Nyb2xsJyxcclxuICAgICd0b3VjaHN0YXJ0JyxcclxuICAgICd0b3VjaG1vdmUnLFxyXG4gICAgJ3RvdWNoZW5kJyxcclxuICAgICdwYWdlc2hvdycsXHJcbiAgICAnbG9hZCdcclxuICBdO1xyXG4gIHByaXZhdGUgYWZmaXhTdHlsZTtcclxuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3dyYXAnKSBwcml2YXRlIHdyYXA6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX3RhcmdldDogRWxlbWVudCB8IFdpbmRvdyA9IHdpbmRvdztcclxuXHJcbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX29mZnNldEJvdHRvbTogbnVtYmVyO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAodGhpcy51cGRhdGVQb3NpdGlvbiBhcyBhbnkpLmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwpOiB7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHtcclxuICAgIGNvbnN0IGVsZW1SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jLmJvZHk7XHJcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xyXG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcCAgIDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXHJcbiAgICAgIGxlZnQgIDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxyXG4gICAgICB3aWR0aCA6IGVsZW1SZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IENsaWVudFJlY3Qge1xyXG4gICAgcmV0dXJuIHRhcmdldCAhPT0gd2luZG93ID9cclxuICAgICAgKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOlxyXG4gICAgICB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwIH0gYXMgQ2xpZW50UmVjdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU3R5bGUoYWZmaXhTdHlsZToge30pOiBzdHJpbmcge1xyXG4gICAgaWYgKGFmZml4U3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWZmaXhTdHlsZSkubWFwKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGFmZml4U3R5bGVbIGtleSBdO1xyXG4gICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xyXG4gICAgfSkuam9pbignOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlOiB7fSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLl90YXJnZXQgPT09IHdpbmRvdztcclxuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XHJcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLndyYXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShhZmZpeFN0eWxlKTtcclxuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBjbHMgPSAnYW50LWFmZml4JztcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGFmZml4U3R5bGUgJiYgIW9yaWdpbmFsQWZmaXhTdHlsZSkgfHwgKCFhZmZpeFN0eWxlICYmIG9yaWdpbmFsQWZmaXhTdHlsZSkpIHtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlOiB7fSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlID0gdGhpcy5wbGFjZWhvbGRlclN0eWxlO1xyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShwbGFjZWhvbGRlclN0eWxlKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgfVxyXG5cclxuICBAdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlUG9zaXRpb24oZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fdGFyZ2V0O1xyXG4gICAgLy8gQmFja3dhcmRzIHN1cHBvcnRcclxuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xyXG4gICAgY29uc3QgYWZmaXhOb2RlID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGVsZW1PZmZzZXQgPSB0aGlzLmdldE9mZnNldChhZmZpeE5vZGUsIHRhcmdldE5vZGUpO1xyXG4gICAgY29uc3QgZWxlbVNpemUgPSB7XHJcbiAgICAgIHdpZHRoIDogYWZmaXhOb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGFmZml4Tm9kZS5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xyXG4gICAgICB0b3AgICA6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxyXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcclxuICAgICAgb2Zmc2V0VG9wID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPVxyXG4gICAgICAgICAgICAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcclxuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xyXG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGxlZnQgICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxyXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxyXG4gICAgICAgIHdpZHRoXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc2Nyb2xsVG9wIDwgZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJlxyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSk7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBib3R0b20gIDogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXHJcbiAgICAgICAgbGVmdCAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiYgdGhpcy5hZmZpeFN0eWxlICYmIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiBhZmZpeE5vZGUub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgeyAuLi50aGlzLmFmZml4U3R5bGUsIHdpZHRoOiBhZmZpeE5vZGUub2Zmc2V0V2lkdGggfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19