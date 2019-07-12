/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class NzSliderService {
    /**
     * @param {?} e
     * @return {?}
     */
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @param {?} num
     * @return {?}
     */
    getPrecision(num) {
        /** @type {?} */
        const numStr = num.toString();
        /** @type {?} */
        const dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    }
    /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    cloneArray(arr) {
        return arr.slice();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isNotTouchEvent(e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    }
    /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    valueToOffset(min, max, value) {
        return (value - min) / (max - min) * 100;
    }
    /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    correctNumLimit(num, min, max) {
        /** @type {?} */
        let res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    }
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    getElementOffset(elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        /** @type {?} */
        const rect = elem.getBoundingClientRect();
        /** @type {?} */
        const win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    }
}
NzSliderService.decorators = [
    { type: Injectable }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUUxQixVQUFVLENBQUMsQ0FBUTtRQUNqQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELFlBQVksQ0FBQyxHQUFXOztRQUN0QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzlCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RDs7Ozs7O0lBRUQsVUFBVSxDQUFJLEdBQVE7UUFDcEIsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsZUFBZSxDQUFDLENBQWE7UUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOzs7Ozs7O0lBR0QsYUFBYSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUNuRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUMxQzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7O1FBQ25ELElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLEdBQUcsQ0FBQztTQUFFO1FBQy9CLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTthQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTtRQUNoRSxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxJQUFpQjs7Ozs7UUFLaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzVCOztRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVc7WUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVc7U0FDbEMsQ0FBQztLQUNIOzs7WUF0REYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyU2VydmljZSB7XHJcblxyXG4gIHBhdXNlRXZlbnQoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb24obnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbnVtU3RyID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBkb3RJbmRleCA9IG51bVN0ci5pbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gZG90SW5kZXggPj0gMCA/IG51bVN0ci5sZW5ndGggLSBkb3RJbmRleCAtIDEgOiAwO1xyXG4gIH1cclxuXHJcbiAgY2xvbmVBcnJheTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICByZXR1cm4gYXJyLnNsaWNlKCk7XHJcbiAgfVxyXG5cclxuICBpc05vdFRvdWNoRXZlbnQoZTogVG91Y2hFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFlLnRvdWNoZXMgfHwgZS50b3VjaGVzLmxlbmd0aCA+IDEgfHxcclxuICAgICAgKGUudHlwZS50b0xvd2VyQ2FzZSgpID09PSAndG91Y2hlbmQnICYmIGUudG91Y2hlcy5sZW5ndGggPiAwKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnZlcnQgdmFsdWUgdG8gb2Zmc2V0IGluIHBlcmNlbnRcclxuICB2YWx1ZVRvT2Zmc2V0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pICogMTAwO1xyXG4gIH1cclxuXHJcbiAgY29ycmVjdE51bUxpbWl0KG51bTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHJlcyA9ICtudW07XHJcbiAgICBpZiAoaXNOYU4ocmVzKSkgeyByZXR1cm4gbWluOyB9XHJcbiAgICBpZiAobnVtIDwgbWluKSB7IHJlcyA9IG1pbjsgfSBlbHNlIGlmIChudW0gPiBtYXgpIHsgcmVzID0gbWF4OyB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IHRoZSBvZmZzZXQgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQgKFJlZmVyZW5jZSBmcm9tIGpxdWVyeSdzIG9mZnNldCgpKVxyXG4gICAqIEBwYXJhbSBlbGVtIEhUTUxFbGVtZW50IHJlZlxyXG4gICAqL1xyXG4gIGdldEVsZW1lbnRPZmZzZXQoZWxlbTogSFRNTEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICAvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcclxuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxyXG4gICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxyXG4gICAgLy8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXHJcbiAgICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICB9XHJcbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXHJcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==