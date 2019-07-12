/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { coerceBooleanProperty, coerceCssPixelValue, coerceNumberProperty } from '@angular/cdk/coercion';
/**
 * @param {?} value
 * @return {?}
 */
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @template D
 * @param {?} value
 * @param {?} fallback
 * @return {?}
 */
export function toNumber(value, fallback) {
    return coerceNumberProperty(value, fallback);
}
/**
 * @param {?} value
 * @return {?}
 */
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
/**
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // tslint:disable-line: no-any
    return typeof prop === 'function' ? prop.apply(void 0, tslib_1.__spread(args)) : prop;
}
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @return {?}
 */
function propDecoratorFactory(name, fallback) {
    /**
     * @param {?} target
     * @param {?} propName
     * @return {?}
     */
    function propDecorator(target, propName) {
        /** @type {?} */
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, propName, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = fallback(value); // tslint:disable-line:no-invalid-this
            }
        });
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visibile; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
export function InputBoolean() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputBoolean', toBoolean);
}
/**
 * @return {?}
 */
export function InputCssPixel() {
    // tslint:disable-line: no-any
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUd6RyxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQXVCO0lBQy9DLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDckM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFJLEtBQXNCLEVBQUUsUUFBVztJQUM3RCxPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM5Qzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQXNCO0lBQy9DLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDbkM7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQUksSUFBcUI7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOzs7SUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksZ0NBQUksSUFBSSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Q0FDMUQ7Ozs7Ozs7QUFHRCxTQUFTLG9CQUFvQixDQUFPLElBQVksRUFBRSxRQUFxQjs7Ozs7O0lBR3JFLFNBQVMsYUFBYSxDQUFDLE1BQVcsRUFBRSxRQUFnQjs7UUFDbEQsSUFBTSxlQUFlLEdBQUcsU0FBTyxRQUFVLENBQUM7UUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWEsZUFBZSxxREFBK0MsSUFBSSxnQkFBYSxDQUFDLENBQUM7U0FDNUc7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFNLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO1lBQ3RDLEdBQUc7OztZQUFIO2dCQUNFLE9BQU8sSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO2FBQ2hDO1lBQ0QsR0FBRzs7OztZQUFILFVBQUksS0FBUTtnQkFDVixJQUFJLENBQUUsZUFBZSxDQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLGFBQWEsQ0FBQztDQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JELE1BQU0sVUFBVSxZQUFZOztJQUMxQixPQUFPLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztDQUN4RDs7OztBQUVELE1BQU0sVUFBVSxhQUFhOztJQUMzQixPQUFPLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUMxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlQ3NzUGl4ZWxWYWx1ZSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi90eXBlcy9jb21tb24td3JhcCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQge1xyXG4gIHJldHVybiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSwgZmFsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3NQaXhlbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgZnVuY2l0b24tcHJvcGVydHkgdHlwZSdzIHZhbHVlXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZ1bmN0aW9uUHJvcDxUPihwcm9wOiBGdW5jdGlvblByb3A8VD4sIC4uLmFyZ3M6IGFueVtdKTogVCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6IG5vLWFueVxyXG4gIHJldHVybiB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3AoLi4uYXJncykgOiBwcm9wO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG5mdW5jdGlvbiBwcm9wRGVjb3JhdG9yRmFjdG9yeTxULCBEPihuYW1lOiBzdHJpbmcsIGZhbGxiYWNrOiAodjogVCkgPT4gRCk6ICh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4gdm9pZCB7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgZnVuY3Rpb24gcHJvcERlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke3Byb3BOYW1lfWA7XHJcblxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5ICR7bmFtZX0gZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsIHtcclxuICAgICAgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IGZhbGxiYWNrKHZhbHVlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcERlY29yYXRvcjtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxyXG4gKlxyXG4gKiBXaHkgbm90IHVzaW5nIEBJbnB1dEJvb2xlYW4gYWxvbmUgd2l0aG91dCBASW5wdXQ/IEFPVCBuZWVkcyBASW5wdXQgdG8gYmUgdmlzaWJsZVxyXG4gKlxyXG4gKiBAaG93VG9Vc2VcclxuICogYGBgXHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqXHJcbiAqIC8vIEFjdCBhcyBiZWxvdzpcclxuICogLy8gQElucHV0KClcclxuICogLy8gZ2V0IHZpc2libGUoKSB7IHJldHVybiB0aGlzLl9fdmlzaWJpbGU7IH1cclxuICogLy8gc2V0IHZpc2libGUodmFsdWUpIHsgdGhpcy5fX3Zpc2libGUgPSB2YWx1ZTsgfVxyXG4gKiAvLyBfX3Zpc2libGUgPSBmYWxzZTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6IG5vLWFueVxyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRCb29sZWFuJywgdG9Cb29sZWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q3NzUGl4ZWwoKTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTogbm8tYW55XHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dENzc1BpeGVsJywgdG9Dc3NQaXhlbCk7XHJcbn0iXX0=