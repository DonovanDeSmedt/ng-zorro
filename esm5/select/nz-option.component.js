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
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    NzOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        nzLabel: [{ type: Input }],
        nzValue: [{ type: Input }],
        idClass: [{ type: Input }],
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
    /** @type {?} */
    NzOptionComponent.prototype.idClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFPM0IsS0FBSzs4QkFDQSxLQUFLOztJQVE5QixzQkFDSSx5Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBZTs7OztRQUluQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7Ozs7UUFQRCxVQUNvQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7T0FBQTs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsc0VBQXlDO2lCQUMxQzs7OzJCQUlFLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixLQUFLOzBCQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLO2tDQVNMLEtBQUs7OzRCQTNCUjs7U0FRYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Db21wb25lbnQge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXN0b21Db250ZW50ID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcblxuICBASW5wdXQoKSBpZENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDdXN0b21Db250ZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tQ29udGVudCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDdXN0b21Db250ZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21Db250ZW50O1xuICB9XG59XG4iXX0=