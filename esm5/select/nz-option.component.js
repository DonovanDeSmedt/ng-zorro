/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzOptionComponent = /** @class */ (function () {
    function NzOptionComponent() {
        this._disabled = false;
        this._customContent = false;
    }
    Object.defineProperty(NzOptionComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionComponent.prototype, "nzCustomContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customContent = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    NzOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option',
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                }] }
    ];
    NzOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        nzLabel: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzCustomContent: [{ type: Input }]
    };
    return NzOptionComponent;
}());
export { NzOptionComponent };
function NzOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionComponent.prototype._disabled;
    /** @type {?} */
    NzOptionComponent.prototype._customContent;
    /** @type {?} */
    NzOptionComponent.prototype.template;
    /** @type {?} */
    NzOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzOptionComponent.prototype.nzValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFPM0IsS0FBSzs4QkFDQSxLQUFLOztJQU05QixzQkFDSSx5Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBZTs7OztRQUluQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7Ozs7UUFQRCxVQUNvQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7T0FBQTs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssV0FBVztvQkFDeEIsMEVBQXlDO2lCQUMxQzs7OzJCQUlFLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixLQUFLOzBCQUVMLEtBQUs7NkJBRUwsS0FBSztrQ0FTTCxLQUFLOzs0QkF6QlI7O1NBUWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICA6ICduei1vcHRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9jdXN0b21Db250ZW50ID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56TGFiZWw6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogYW55O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q3VzdG9tQ29udGVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fY3VzdG9tQ29udGVudCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDdXN0b21Db250ZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==