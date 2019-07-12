/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            /** @type {?} */
            const arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
];
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export const NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakcsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBNkMsWUFBcUI7UUFBckIsaUJBQVksR0FBWixZQUFZLENBQVM7S0FBSTs7Ozs7SUFFdEUsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2QztLQUNGOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLElBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2QztLQUNGOzs7OztJQUVELEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDtLQUNGOzs7WUF0Q0YsVUFBVTs7OzswQ0FFSSxNQUFNLFNBQUMsZUFBZTs7Ozs7OztBQXVDckMsYUFBYSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVUsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7O0FBRTlFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFvQixFQUFFLFdBQW9CLElBQW1CLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7O0FBRTlKLGFBQWEsdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUUsRUFBRSxlQUFlLENBQUU7Q0FDN0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0xPR0dFUl9TVEFURSkgcHJpdmF0ZSBfbG9nZ2VyU3RhdGU6IGJvb2xlYW4pIHt9XHJcblxyXG4gIGxvZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2FybiguLi5hcmdzKTtcclxuICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZm8oLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcclxuICAgICAgY29uc3QgYXJycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnW05HLVpPUlJPLURFQlVHXSddLmNvbmNhdChhcnJzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfTE9HR0VSX1NUQVRFID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCduei1sb2dnZXItc3RhdGUnKTsgLy8gV2hldGhlciBwcmludCB0aGUgbG9nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHsgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTsgfVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBMb2dnZXJTZXJ2aWNlLFxyXG4gIHVzZUZhY3Rvcnk6IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXHJcbiAgZGVwczogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTG9nZ2VyU2VydmljZSBdLCBOWl9MT0dHRVJfU1RBVEUgXVxyXG59O1xyXG4iXX0=