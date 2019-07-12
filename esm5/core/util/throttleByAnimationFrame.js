/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    var requestId;
    /** @type {?} */
    var later = function (args) { return function () {
        requestId = null;
        fn.apply(void 0, tslib_1.__spread(args));
    }; };
    /** @type {?} */
    var throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    (/** @type {?} */ (throttled)).cancel = function () { return cancelRequestAnimationFrame(/** @type {?} */ ((requestId))); };
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        /** @type {?} */
        var fn = descriptor.value;
        /** @type {?} */
        var definingProperty = false;
        return {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRTFGLE1BQU0sQ0FBQyxPQUFPLFVBQVUsd0JBQXdCLENBQUMsRUFBTzs7SUFDdEQsSUFBSSxTQUFTLENBQWdCOztJQUU3QixJQUFNLEtBQUssR0FBRyxVQUFDLElBQVcsSUFBSyxPQUFBO1FBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxnQ0FBSSxJQUFJLEdBQUU7S0FDYixFQUg4QixDQUc5QixDQUFDOztJQUVGLElBQU0sU0FBUyxHQUFHO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDL0IsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkM7S0FDRixDQUFDOztJQUdGLG1CQUFDLFNBQWdCLEVBQUMsQ0FBQyxNQUFNLEdBQUcsY0FBTSxPQUFBLDJCQUEyQixvQkFBQyxTQUFTLEdBQUUsRUFBdkMsQ0FBdUMsQ0FBQztJQUUxRSxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0MsT0FBTyxVQUFVLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBZTs7UUFDeEQsSUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEdBQUc7Ozs7Z0JBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEVBQUUsQ0FBQztpQkFDWDs7Z0JBRUQsSUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsS0FBSyxFQUFTLE9BQU87b0JBQ3JCLFlBQVksRUFBRSxJQUFJO29CQUNsQixRQUFRLEVBQU0sSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRixDQUFDO0tBQ0gsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXHJcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuOiBhbnkpIHtcclxuICBsZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBjb25zdCBsYXRlciA9IChhcmdzOiBhbnlbXSkgPT4gKCkgPT4ge1xyXG4gICAgcmVxdWVzdElkID0gbnVsbDtcclxuICAgIGZuKC4uLmFyZ3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3RJZCA9PSBudWxsKSB7XHJcbiAgICAgIHJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZShsYXRlcihhcmdzKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICh0aHJvdHRsZWQgYXMgYW55KS5jYW5jZWwgPSAoKSA9PiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdElkISk7XHJcblxyXG4gIHJldHVybiB0aHJvdHRsZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xyXG4gICAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0KCkge1xyXG4gICAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib3VuZEZuID0gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICAgIHZhbHVlICAgICAgIDogYm91bmRGbixcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==