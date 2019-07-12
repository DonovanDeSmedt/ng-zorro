/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = window.setTimeout(() => {
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
        return () => null;
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
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
    const prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix ?
        ((/** @type {?} */ (window))[`${prefix}CancelAnimationFrame`] ||
            (/** @type {?} */ (window))[`${prefix}CancelRequestAnimationFrame`]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDOzs7O0FBRW5ELFNBQVMsNkJBQTZCOztJQUNwQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxVQUFVLFFBQThCOztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFDM0QsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztTQUNqQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2YsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDO0NBQ0g7Ozs7QUFFRCxTQUFTLHdCQUF3QjtJQUMvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNuQjtJQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFOztRQUVoQyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O0lBRUQsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLHVCQUF1QixJQUFJLE1BQU0sQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBRTVGLE9BQU8sTUFBTTtRQUNYLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBRyxNQUFNLHVCQUF1QixDQUFFO1FBQzVDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7SUFDRCxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDM0MsR0FBRyxHQUFHLHNCQUFzQixJQUFJLE1BQU0sSUFBSSxHQUFHLEdBQUcsNkJBQTZCLElBQUksTUFBTSxDQUN4RixDQUFFLENBQUMsQ0FBRSxDQUFDO0lBRVAsT0FBTyxNQUFNLENBQUMsQ0FBQztRQUNiLENBQ0UsbUJBQUMsTUFBYSxFQUFDLENBQUUsR0FBRyxNQUFNLHNCQUFzQixDQUFFO1lBQ2xELG1CQUFDLE1BQWEsRUFBQyxDQUFFLEdBQUcsTUFBTSw2QkFBNkIsQ0FBRSxDQUMxRCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN2Qzs7QUFFRCxhQUFhLFlBQVksR0FBRyx3QkFBd0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXHJcbmNvbnN0IGF2YWlsYWJsZVByZWZpeHMgPSBbICdtb3onLCAnbXMnLCAnd2Via2l0JyBdO1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XHJcbiAgbGV0IGxhc3RUaW1lID0gMDtcclxuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XHJcbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgIGNvbnN0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG4gICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgIHJldHVybiBpZDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcclxuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeHMuZmlsdGVyKGtleSA9PiBgJHtrZXl9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cpWyAwIF07XHJcblxyXG4gIHJldHVybiBwcmVmaXhcclxuICAgID8gd2luZG93WyBgJHtwcmVmaXh9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBdXHJcbiAgICA6IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaWQ6IG51bWJlcik6IGFueSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XHJcbiAgfVxyXG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeHMuZmlsdGVyKGtleSA9PlxyXG4gICAgYCR7a2V5fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cgfHwgYCR7a2V5fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93XHJcbiAgKVsgMCBdO1xyXG5cclxuICByZXR1cm4gcHJlZml4ID9cclxuICAgIChcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpWyBgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgIF0gfHxcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpWyBgJHtwcmVmaXh9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBdXHJcbiAgICApLmNhbGwodGhpcywgaWQpIDogY2xlYXJUaW1lb3V0KGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG4iXX0=