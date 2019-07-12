/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isLabelString = !(value instanceof TemplateRef);
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    NzOptionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option-group',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    NzOptionGroupComponent.propDecorators = {
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        nzLabel: [{ type: Input }]
    };
    return NzOptionGroupComponent;
}());
export { NzOptionGroupComponent };
function NzOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionGroupComponent.prototype._label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7SUFXeEQsc0JBQ0ksMkNBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssaUJBQWlCO29CQUM5QixxQ0FBK0M7aUJBQ2hEOzs7MENBSUUsZUFBZSxTQUFDLGlCQUFpQjswQkFFakMsS0FBSzs7aUNBWlI7O1NBT2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgOiAnbnotb3B0aW9uLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Hcm91cENvbXBvbmVudCB7XHJcbiAgX2xhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBpc0xhYmVsU3RyaW5nOiBib29sZWFuO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Db21wb25lbnQpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcclxuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=