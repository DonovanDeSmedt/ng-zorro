/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var NzSliderService = /** @class */ (function () {
    function NzSliderService() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSliderService.prototype.pauseEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @param {?} num
     * @return {?}
     */
    NzSliderService.prototype.getPrecision = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var numStr = num.toString();
        /** @type {?} */
        var dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    };
    /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    NzSliderService.prototype.cloneArray = /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return arr.slice();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSliderService.prototype.isNotTouchEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    };
    // convert value to offset in percent
    /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    NzSliderService.prototype.valueToOffset = /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    function (min, max, value) {
        return (value - min) / (max - min) * 100;
    };
    /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    NzSliderService.prototype.correctNumLimit = /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (num, min, max) {
        /** @type {?} */
        var res = +num;
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
    };
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param elem HTMLElement ref
     */
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    NzSliderService.prototype.getElementOffset = /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    function (elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        /** @type {?} */
        var rect = elem.getBoundingClientRect();
        /** @type {?} */
        var win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    };
    NzSliderService.decorators = [
        { type: Injectable }
    ];
    return NzSliderService;
}());
export { NzSliderService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQUt6QyxvQ0FBVTs7OztJQUFWLFVBQVcsQ0FBUTtRQUNqQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELHNDQUFZOzs7O0lBQVosVUFBYSxHQUFXOztRQUN0QixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzlCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RDs7Ozs7O0lBRUQsb0NBQVU7Ozs7O0lBQVYsVUFBYyxHQUFRO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELHlDQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBYTtRQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDakU7SUFFRCxxQ0FBcUM7Ozs7Ozs7SUFDckMsdUNBQWE7Ozs7OztJQUFiLFVBQWMsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ25ELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQzFDOzs7Ozs7O0lBRUQseUNBQWU7Ozs7OztJQUFmLFVBQWdCLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVzs7UUFDbkQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDZixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU8sR0FBRyxDQUFDO1NBQUU7UUFDL0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO2FBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQ2hFLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRDs7O09BR0c7Ozs7OztJQUNILDBDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsSUFBaUI7Ozs7O1FBS2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUM1Qjs7UUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFDMUMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDM0MsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXO1NBQ2xDLENBQUM7S0FDSDs7Z0JBdERGLFVBQVU7OzBCQUZYOztTQUdhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlclNlcnZpY2Uge1xyXG5cclxuICBwYXVzZUV2ZW50KGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJlY2lzaW9uKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG51bVN0ciA9IG51bS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgZG90SW5kZXggPSBudW1TdHIuaW5kZXhPZignLicpO1xyXG4gICAgcmV0dXJuIGRvdEluZGV4ID49IDAgPyBudW1TdHIubGVuZ3RoIC0gZG90SW5kZXggLSAxIDogMDtcclxuICB9XHJcblxyXG4gIGNsb25lQXJyYXk8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgcmV0dXJuIGFyci5zbGljZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNOb3RUb3VjaEV2ZW50KGU6IFRvdWNoRXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhZS50b3VjaGVzIHx8IGUudG91Y2hlcy5sZW5ndGggPiAxIHx8XHJcbiAgICAgIChlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RvdWNoZW5kJyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCk7XHJcbiAgfVxyXG5cclxuICAvLyBjb252ZXJ0IHZhbHVlIHRvIG9mZnNldCBpbiBwZXJjZW50XHJcbiAgdmFsdWVUb09mZnNldChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIGNvcnJlY3ROdW1MaW1pdChudW06IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCByZXMgPSArbnVtO1xyXG4gICAgaWYgKGlzTmFOKHJlcykpIHsgcmV0dXJuIG1pbjsgfVxyXG4gICAgaWYgKG51bSA8IG1pbikgeyByZXMgPSBtaW47IH0gZWxzZSBpZiAobnVtID4gbWF4KSB7IHJlcyA9IG1heDsgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCB0aGUgb2Zmc2V0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50IChSZWZlcmVuY2UgZnJvbSBqcXVlcnkncyBvZmZzZXQoKSlcclxuICAgKiBAcGFyYW0gZWxlbSBIVE1MRWxlbWVudCByZWZcclxuICAgKi9cclxuICBnZXRFbGVtZW50T2Zmc2V0KGVsZW06IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgLy8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXHJcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcclxuICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcclxuICAgIC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxyXG4gICAgaWYgKCFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxyXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxyXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=