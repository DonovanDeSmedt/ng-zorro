/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export function valueFunctionProp(prop, ...args) {
    // tslint:disable-line: no-any
    return typeof prop === 'function' ? prop(...args) : prop;
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
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, propName, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBR3pHLE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBdUI7SUFDL0MsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNyQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUksS0FBc0IsRUFBRSxRQUFXO0lBQzdELE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzlDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNuQzs7Ozs7OztBQUdELE1BQU0sVUFBVSxpQkFBaUIsQ0FBSSxJQUFxQixFQUFFLEdBQUcsSUFBVzs7SUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Q0FDMUQ7Ozs7Ozs7QUFHRCxTQUFTLG9CQUFvQixDQUFPLElBQVksRUFBRSxRQUFxQjs7Ozs7O0lBR3JFLFNBQVMsYUFBYSxDQUFDLE1BQVcsRUFBRSxRQUFnQjs7UUFDbEQsTUFBTSxlQUFlLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztRQUUxQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLGVBQWUsK0NBQStDLElBQUksYUFBYSxDQUFDLENBQUM7U0FDNUc7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFNLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFOzs7O1lBQ3RDLEdBQUc7Z0JBQ0QsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUM7YUFDaEM7Ozs7O1lBQ0QsR0FBRyxDQUFDLEtBQVE7Z0JBQ1YsSUFBSSxDQUFFLGVBQWUsQ0FBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTyxhQUFhLENBQUM7Q0FFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRCxNQUFNLFVBQVUsWUFBWTs7SUFDMUIsT0FBTyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7Q0FDeEQ7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYTs7SUFDM0IsT0FBTyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDMUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUNzc1BpeGVsVmFsdWUsIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uLXdyYXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IG51bWJlciB8IHN0cmluZywgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEIHtcclxuICByZXR1cm4gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUsIGZhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzUGl4ZWwodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGNvZXJjZUNzc1BpeGVsVmFsdWUodmFsdWUpO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGZ1bmNpdG9uLXByb3BlcnR5IHR5cGUncyB2YWx1ZVxyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGdW5jdGlvblByb3A8VD4ocHJvcDogRnVuY3Rpb25Qcm9wPFQ+LCAuLi5hcmdzOiBhbnlbXSk6IFQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBuby1hbnlcclxuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicgPyBwcm9wKC4uLmFyZ3MpIDogcHJvcDtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuZnVuY3Rpb24gcHJvcERlY29yYXRvckZhY3Rvcnk8VCwgRD4obmFtZTogc3RyaW5nLCBmYWxsYmFjazogKHY6IFQpID0+IEQpOiAodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHZvaWQge1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIGZ1bmN0aW9uIHByb3BEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSAke25hbWV9IGRlY29yYXRvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZSAgICA6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCB7XHJcbiAgICAgIGdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcclxuICAgICAgfSxcclxuICAgICAgc2V0KHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSBmYWxsYmFjayh2YWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cclxuICpcclxuICogV2h5IG5vdCB1c2luZyBASW5wdXRCb29sZWFuIGFsb25lIHdpdGhvdXQgQElucHV0PyBBT1QgbmVlZHMgQElucHV0IHRvIGJlIHZpc2libGVcclxuICpcclxuICogQGhvd1RvVXNlXHJcbiAqIGBgYFxyXG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gKlxyXG4gKiAvLyBBY3QgYXMgYmVsb3c6XHJcbiAqIC8vIEBJbnB1dCgpXHJcbiAqIC8vIGdldCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fX3Zpc2liaWxlOyB9XHJcbiAqIC8vIHNldCB2aXNpYmxlKHZhbHVlKSB7IHRoaXMuX192aXNpYmxlID0gdmFsdWU7IH1cclxuICogLy8gX192aXNpYmxlID0gZmFsc2U7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbigpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBuby1hbnlcclxuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0Qm9vbGVhbicsIHRvQm9vbGVhbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dENzc1BpeGVsKCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6IG5vLWFueVxyXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXRDc3NQaXhlbCcsIHRvQ3NzUGl4ZWwpO1xyXG59Il19