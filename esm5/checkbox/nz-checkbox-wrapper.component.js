/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter(function (item) { return item.nzChecked; });
        return checkedList.map(function (item) { return item.nzValue; });
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    NzCheckboxWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-wrapper',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-checkbox-group]': 'true'
                    }
                }] }
    ];
    NzCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
    return NzCheckboxWrapperComponent;
}());
export { NzCheckboxWrapperComponent };
function NzCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O1FBZTFHLGtCQUFnQyxJQUFJLFlBQVksRUFBWSxDQUFDOzRCQUNmLEVBQUU7Ozs7OztJQUVoRCxnREFBVzs7OztJQUFYLFVBQVksS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsbURBQWM7Ozs7SUFBZCxVQUFlLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9EOzs7O0lBRUQsZ0RBQVc7OztJQUFYOztRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDMUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLHFCQUFxQjtvQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxxQ0FBMkQ7b0JBQzNELElBQUksRUFBaUI7d0JBQ25CLDRCQUE0QixFQUFFLE1BQU07cUJBQ3JDO2lCQUNGOzs7NkJBRUUsTUFBTTs7cUNBZlQ7O1NBY2EsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNoZWNrYm94LXdyYXBwZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IE56Q2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBhZGRDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveExpc3QucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdGhpcy5jaGVja2JveExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uekNoZWNrZWQpO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==