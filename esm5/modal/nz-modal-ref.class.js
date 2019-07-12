/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
var /**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
NzModalRef = /** @class */ (function () {
    function NzModalRef() {
    }
    return NzModalRef;
}());
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
export { NzModalRef };
function NzModalRef_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getInstance = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUE7Ozs7OztBQUFBOzs7cUJBUkE7SUEyQ0MsQ0FBQTs7Ozs7OztBQW5DRCxzQkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEFQSSBjbGFzcyB0aGF0IHB1YmxpYyB0byB1c2VycyB0byBoYW5kbGUgdGhlIG1vZGFsIGluc3RhbmNlLlxyXG4gKiBOek1vZGFsUmVmIGlzIGFpbSB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gdGhlIG1vZGFsIGluc3RhbmNlIGRpcmVjdGx5IGJ5IHVzZXJzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56TW9kYWxSZWY8VCA9IGFueSwgUiA9IGFueT4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGFic3RyYWN0IGFmdGVyT3BlbjogT2JzZXJ2YWJsZTx2b2lkPjtcclxuICBhYnN0cmFjdCBhZnRlckNsb3NlOiBPYnNlcnZhYmxlPFI+O1xyXG5cclxuICBhYnN0cmFjdCBvcGVuKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0aGUgbnpPbk9rL256T25DYW5jZWwgYnkgbWFudWFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgdHJpZ2dlck9rKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgdHJpZ2dlckNhbmNlbCgpOiB2b2lkO1xyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBSZXR1cm4gdGhlIENvbXBvbmVudFJlZiBvZiBuekNvbnRlbnQgd2hlbiBzcGVjaWZ5IG56Q29udGVudCBhcyBhIENvbXBvbmVudFxyXG4gIC8vICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxyXG4gIC8vICAqL1xyXG4gIC8vIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPHt9PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcclxuICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZG9tIGVsZW1lbnQgb2YgdGhpcyBNb2RhbFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIE1vZGFsIGl0c2VsZlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldEluc3RhbmNlKCk6IE56TW9kYWxDb21wb25lbnQ7XHJcbn1cclxuIl19