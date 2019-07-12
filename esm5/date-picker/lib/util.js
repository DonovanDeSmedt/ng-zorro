/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : /** @type {?} */ ({});
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLG1CQUFtQixHQUF1QjtJQUM5QyxlQUFlOzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Q0FDRixDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O0lBQzFFLElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFDLEVBQXdCLENBQUEsQ0FBQztJQUMzRyxrQkFBa0Isd0JBQ2IsbUJBQW1CLEVBQ25CLGtCQUFrQixDQUN0QixDQUFDO0lBQ0YsT0FBTyxrQkFBa0IsQ0FBQztDQUMzQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWdCLEVBQUUsa0JBQXNDOztJQUMxRixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxLQUFLLEVBQUU7O1FBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUM5QixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ25DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDbkMsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztZQUN0QyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2dCQUMzQyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztJQUN4RSxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztDQUN2RDs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE2QixFQUFFLFlBQTZCO0lBQzFHLElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vY2FuZHktZGF0ZSc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgbnpEaXNhYmxlZEhvdXJzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG4gIG56RGlzYWJsZWRNaW51dGVzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG4gIG56RGlzYWJsZWRTZWNvbmRzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogRGlzYWJsZWRUaW1lQ29uZmlnIHtcclxuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDoge30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnO1xyXG4gIGRpc2FibGVkVGltZUNvbmZpZyA9IHtcclxuICAgIC4uLmRlZmF1bHREaXNhYmxlZFRpbWUsXHJcbiAgICAuLi5kaXNhYmxlZFRpbWVDb25maWdcclxuICB9O1xyXG4gIHJldHVybiBkaXNhYmxlZFRpbWVDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZUNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgbGV0IGludmFsaWRUaW1lID0gZmFsc2U7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xyXG4gICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgIGlmIChkaXNhYmxlZEhvdXJzLmluZGV4T2YoaG91cikgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkTWludXRlcyhob3VyKTtcclxuICAgICAgaWYgKGRpc2FibGVkTWludXRlcy5pbmRleE9mKG1pbnV0ZXMpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkU2Vjb25kcyhob3VyLCBtaW51dGVzKTtcclxuICAgICAgICBpbnZhbGlkVGltZSA9IGRpc2FibGVkU2Vjb25kcy5pbmRleE9mKHNlY29uZHMpICE9PSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnZhbGlkVGltZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICFpbnZhbGlkVGltZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcclxuICBjb25zdCBkaXNhYmxlZFRpbWVDb25maWcgPSBnZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWUpO1xyXG4gIHJldHVybiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVDb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxvd2VkRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbiwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcclxuICBpZiAoZGlzYWJsZWREYXRlKSB7XHJcbiAgICBpZiAoZGlzYWJsZWREYXRlKHZhbHVlLm5hdGl2ZURhdGUpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGRpc2FibGVkVGltZSkge1xyXG4gICAgaWYgKCFpc1RpbWVWYWxpZCh2YWx1ZSwgZGlzYWJsZWRUaW1lKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiJdfQ==