/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** 设置 `el` 滚动条位置 */
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    };
    /** 获取 `el` 相对于视窗距离 */
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** 获取 `el` 滚动条位置 */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    NzScrollService.prototype.getScroll = /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param containerEl 容器，默认 `window`
     * @param targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param easing 动作算法，默认：`easeInOutCubic`
     * @param callback 动画结束后回调
     */
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzScrollService;
}());
export { NzScrollService };
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFJN0QsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7SUFDaEUsSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEM7U0FBTTtRQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0NBQ0Y7O0lBTUMscUNBQXFDO0lBQ3JDLHlCQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCO0lBRUQsb0JBQW9COzs7Ozs7O0lBQ3BCLHNDQUFZOzs7Ozs7SUFBWixVQUFhLEVBQW9CLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFD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U0FBUyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUYsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7YUFDMUI7U0FDRixDQUFDO1FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pCOztnQkFsRkYsVUFBVTs7OztnREFLSSxNQUFNLFNBQUMsUUFBUTs7MEJBdEI5Qjs7U0FrQmEsZUFBZTs7Ozs7Ozs7OztBQXFGNUIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxXQUFhLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBSyxlQUFlO0lBQzNCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFRLENBQUUsUUFBUSxFQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFFO0NBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xyXG5cclxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBjYyA9IGMgLSBiO1xyXG4gIGxldCB0dCA9IHQgLyAoZCAvIDIpO1xyXG4gIGlmICh0dCA8IDEpIHtcclxuICAgIHJldHVybiBjYyAvIDIgKiB0dCAqIHR0ICogdHQgKyBiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gY2MgLyAyICogKCh0dCAtPSAyKSAqIHR0ICogdHQgKyAyKSArIGI7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZG9jOiBEb2N1bWVudDtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7XHJcbiAgICB0aGlzLmRvYyA9IGRvYztcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva4gYGVsYCDmu5rliqjmnaHkvY3nva4gKi9cclxuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICBpZiAoZWwgPT09IHdpbmRvdykge1xyXG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xyXG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+WIGBlbGAg55u45a+55LqO6KeG56qX6Led56a7ICovXHJcbiAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICB0b3AgOiAwLFxyXG4gICAgICBsZWZ0OiAwXHJcbiAgICB9O1xyXG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHJldHVybiByZXQ7XHJcblxyXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgZG9jID0gZWwub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcCAtIGRvYy5jbGllbnRUb3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jLmNsaWVudExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+WIGBlbGAg5rua5Yqo5p2h5L2N572uICovXHJcbiAgLy8gVE9ETzogcmVtb3ZlICd8IFdpbmRvdycgYXMgdGhlIGZhbGxiYWNrIGFscmVhZHkgaGFwcGVucyBoZXJlXHJcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xyXG4gICAgY29uc3QgcHJvcCA9IHRvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnO1xyXG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xyXG4gICAgbGV0IHJldCA9IGlzV2luZG93ID8gdGFyZ2V0WyBwcm9wIF0gOiB0YXJnZXRbIG1ldGhvZCBdO1xyXG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFsgbWV0aG9kIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5L2/55So5Yqo55S75b2i5byP5bCGIGBlbGAg5rua5Yqo6Iez5p+Q5L2N572uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwg5a655Zmo77yM6buY6K6kIGB3aW5kb3dgXHJcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIOa7muWKqOiHs+ebruaghyBgdG9wYCDlgLzvvIzpu5jorqTvvJow77yM55u45b2T5LqO6aG26YOoXHJcbiAgICogQHBhcmFtIGVhc2luZyDliqjkvZznrpfms5XvvIzpu5jorqTvvJpgZWFzZUluT3V0Q3ViaWNgXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWKqOeUu+e7k+adn+WQjuWbnuiwg1xyXG4gICAqL1xyXG4gIHNjcm9sbFRvKFxyXG4gICAgY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csXHJcbiAgICB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCxcclxuICAgIGVhc2luZz86IEVhc3lpbmdGbixcclxuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZFxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyRWwgPyBjb250YWluZXJFbCA6IHdpbmRvdztcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xyXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcCh0YXJnZXQsIChlYXNpbmcgfHwgZWFzZUluT3V0Q3ViaWMpKHRpbWUsIHNjcm9sbFRvcCwgdGFyZ2V0VG9wVmFsdWUsIDQ1MCkpO1xyXG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xyXG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGRvYzogRG9jdW1lbnQsIHNjcm9sbFNlcnZpY2U6IE56U2Nyb2xsU2VydmljZSk6IE56U2Nyb2xsU2VydmljZSB7XHJcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IE56U2Nyb2xsU2VydmljZShkb2MpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGUgICA6IE56U2Nyb2xsU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHMgICAgICA6IFsgRE9DVU1FTlQsIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOelNjcm9sbFNlcnZpY2UgXSBdXHJcbn07XHJcbiJdfQ==