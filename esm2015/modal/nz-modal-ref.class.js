/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class NzModalRef {
}
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBLE1BQU0sT0FBZ0IsVUFBVTtDQW1DL0I7OztJQWxDQywrQkFBcUM7O0lBQ3JDLGdDQUFtQzs7Ozs7SUFFbkMsNENBQXNCOzs7Ozs7SUFDdEIsbURBQWlDOzs7Ozs7SUFDakMscURBQW1DOzs7Ozs7SUFLbkMsaURBQTJCOzs7OztJQUMzQixxREFBK0I7Ozs7Ozs7SUFZL0IsMkRBQWtDOzs7Ozs7SUFLbEMsa0RBQW1DOzs7Ozs7SUFLbkMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEFQSSBjbGFzcyB0aGF0IHB1YmxpYyB0byB1c2VycyB0byBoYW5kbGUgdGhlIG1vZGFsIGluc3RhbmNlLlxuICogTnpNb2RhbFJlZiBpcyBhaW0gdG8gYXZvaWQgYWNjZXNzaW5nIHRvIHRoZSBtb2RhbCBpbnN0YW5jZSBkaXJlY3RseSBieSB1c2Vycy5cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56TW9kYWxSZWY8VCA9IGFueSwgUiA9IGFueT4ge1xuICBhYnN0cmFjdCBhZnRlck9wZW46IE9ic2VydmFibGU8dm9pZD47XG4gIGFic3RyYWN0IGFmdGVyQ2xvc2U6IE9ic2VydmFibGU8Uj47XG5cbiAgYWJzdHJhY3Qgb3BlbigpOiB2b2lkO1xuICBhYnN0cmFjdCBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcbiAgYWJzdHJhY3QgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZDtcblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgbnpPbk9rL256T25DYW5jZWwgYnkgbWFudWFsXG4gICAqL1xuICBhYnN0cmFjdCB0cmlnZ2VyT2soKTogdm9pZDtcbiAgYWJzdHJhY3QgdHJpZ2dlckNhbmNlbCgpOiB2b2lkO1xuXG4gIC8vIC8qKlxuICAvLyAgKiBSZXR1cm4gdGhlIENvbXBvbmVudFJlZiBvZiBuekNvbnRlbnQgd2hlbiBzcGVjaWZ5IG56Q29udGVudCBhcyBhIENvbXBvbmVudFxuICAvLyAgKiBOb3RlOiB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgQ29tcG9uZW50IGhhcyBub3QgcmVhZHkgeWV0LiAoaXQgb25seSBhdmFpbGFibGUgYWZ0ZXIgTW9kYWwncyBuZ09uSW5pdClcbiAgLy8gICovXG4gIC8vIGFic3RyYWN0IGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPHt9PjtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcbiAgICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQ7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZG9tIGVsZW1lbnQgb2YgdGhpcyBNb2RhbFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgTW9kYWwgaXRzZWxmXG4gICAqL1xuICBhYnN0cmFjdCBnZXRJbnN0YW5jZSgpOiBOek1vZGFsQ29tcG9uZW50O1xufVxuIl19