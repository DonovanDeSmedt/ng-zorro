/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
        : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    var prefix = availablePrefixs.filter(function (key) {
        return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window;
    })[0];
    return prefix ?
        ((/** @type {?} */ (window))[prefix + "CancelAnimationFrame"] ||
            (/** @type {?} */ (window))[prefix + "CancelRequestAnimationFrame"]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU0sZ0JBQWdCLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDOzs7O0FBRW5ELFNBQVMsNkJBQTZCOztJQUNwQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxVQUFVLFFBQThCOztRQUM3QyxJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFDM0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMzQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQ2pDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDZixRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUM7Q0FDSDs7OztBQUVELFNBQVMsd0JBQXdCO0lBQy9CLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7S0FDbkI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTs7UUFFaEMsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztJQUVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsMEJBQXVCLElBQUksTUFBTSxFQUF2QyxDQUF1QyxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFFNUYsT0FBTyxNQUFNO1FBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBSyxNQUFNLDBCQUF1QixDQUFFO1FBQzVDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7SUFDRCxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHO1FBQ3hDLE9BQUcsR0FBRyx5QkFBc0IsSUFBSSxNQUFNLElBQU8sR0FBRyxnQ0FBNkIsSUFBSSxNQUFNO0lBQXZGLENBQXVGLENBQ3hGLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFFUCxPQUFPLE1BQU0sQ0FBQyxDQUFDO1FBQ2IsQ0FDRSxtQkFBQyxNQUFhLEVBQUMsQ0FBSyxNQUFNLHlCQUFzQixDQUFFO1lBQ2xELG1CQUFDLE1BQWEsRUFBQyxDQUFLLE1BQU0sZ0NBQTZCLENBQUUsQ0FDMUQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdkM7O0FBRUQsV0FBYSxZQUFZLEdBQUcsd0JBQXdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSB0eXBlZGVmIG5vLWludmFsaWQtdGhpc1xyXG5jb25zdCBhdmFpbGFibGVQcmVmaXhzID0gWyAnbW96JywgJ21zJywgJ3dlYmtpdCcgXTtcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xyXG4gIGxldCBsYXN0VGltZSA9IDA7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIge1xyXG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICBjb25zdCBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgIH0sIHRpbWVUb0NhbGwpO1xyXG4gICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuICgpID0+IG51bGw7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy80NDY1XHJcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhzLmZpbHRlcihrZXkgPT4gYCR7a2V5fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93KVsgMCBdO1xyXG5cclxuICByZXR1cm4gcHJlZml4XHJcbiAgICA/IHdpbmRvd1sgYCR7cHJlZml4fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgXVxyXG4gICAgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGlkOiBudW1iZXIpOiBhbnkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xyXG4gIH1cclxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhzLmZpbHRlcihrZXkgPT5cclxuICAgIGAke2tleX1DYW5jZWxBbmltYXRpb25GcmFtZWAgaW4gd2luZG93IHx8IGAke2tleX1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvd1xyXG4gIClbIDAgXTtcclxuXHJcbiAgcmV0dXJuIHByZWZpeCA/XHJcbiAgICAoXHJcbiAgICAgICh3aW5kb3cgYXMgYW55KVsgYCR7cHJlZml4fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBdIHx8XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KVsgYCR7cHJlZml4fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgXVxyXG4gICAgKS5jYWxsKHRoaXMsIGlkKSA6IGNsZWFyVGltZW91dChpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXFBbmltRnJhbWUgPSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuIl19