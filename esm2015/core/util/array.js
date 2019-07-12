/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function toArray(value) {
    /** @type {?} */
    let ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
export function arrayEquals(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    const len = array1.length;
    for (let i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUksS0FBYzs7SUFDdkMsSUFBSSxHQUFHLENBQU07SUFDYixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEMsR0FBRyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7S0FDakI7U0FBTTtRQUNMLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFJLE1BQVcsRUFBRSxNQUFXO0lBQ3JELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ3pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O0lBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFFLENBQUMsQ0FBRSxLQUFLLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXk8VD4odmFsdWU6IFQgfCBUW10pOiBUW10ge1xyXG4gIGxldCByZXQ6IFRbXTtcclxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgcmV0ID0gW107XHJcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHJldCA9IFsgdmFsdWUgXTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0ID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFsczxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10pOiBib29sZWFuIHtcclxuICBpZiAoIWFycmF5MSB8fCAhYXJyYXkyIHx8IGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxlbiA9IGFycmF5MS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKGFycmF5MVsgaSBdICE9PSBhcnJheTJbIGkgXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiJdfQ==