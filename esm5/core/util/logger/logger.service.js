/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            /** @type {?} */
            var arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export var NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBSS9GLHVCQUE2QyxZQUFxQjtRQUFyQixpQkFBWSxHQUFaLFlBQVksQ0FBUztLQUFJOzs7OztJQUV0RSwyQkFBRzs7OztJQUFIO1FBQUksY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMO1FBQU0sY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekM7S0FDRjs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMO1FBQU0sY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDtLQUNGOztnQkF0Q0YsVUFBVTs7Ozs4Q0FFSSxNQUFNLFNBQUMsZUFBZTs7d0JBTHJDOztTQUlhLGFBQWE7Ozs7OztBQXdDMUIsV0FBYSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVUsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7O0FBRTlFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFvQixFQUFFLFdBQW9CLElBQW1CLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7O0FBRTlKLFdBQWEsdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUUsRUFBRSxlQUFlLENBQUU7Q0FDN0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0xPR0dFUl9TVEFURSkgcHJpdmF0ZSBfbG9nZ2VyU3RhdGU6IGJvb2xlYW4pIHt9XHJcblxyXG4gIGxvZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2FybiguLi5hcmdzKTtcclxuICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZm8oLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcclxuICAgICAgY29uc3QgYXJycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnW05HLVpPUlJPLURFQlVHXSddLmNvbmNhdChhcnJzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfTE9HR0VSX1NUQVRFID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCduei1sb2dnZXItc3RhdGUnKTsgLy8gV2hldGhlciBwcmludCB0aGUgbG9nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHsgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBMb2dnZXJTZXJ2aWNlLFxyXG4gIHVzZUZhY3Rvcnk6IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXHJcbiAgZGVwczogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTG9nZ2VyU2VydmljZSBdLCBOWl9MT0dHRVJfU1RBVEUgXVxyXG59O1xyXG4iXX0=