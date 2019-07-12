/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function ClickPosition() { }
function ClickPosition_tsickle_Closure_declarations() {
    /** @type {?} */
    ClickPosition.prototype.x;
    /** @type {?} */
    ClickPosition.prototype.y;
}
export class ModalUtil {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.lastPosition = null;
        this.listenDocumentClick();
    }
    /**
     * @return {?}
     */
    getLastClickPosition() {
        return this.lastPosition;
    }
    /**
     * @return {?}
     */
    listenDocumentClick() {
        this.document.addEventListener('click', (event) => {
            this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    }
}
function ModalUtil_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalUtil.prototype.lastPosition;
    /** @type {?} */
    ModalUtil.prototype.document;
}
export default new ModalUtil(document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsTUFBTSxPQUFPLFNBQVM7Ozs7SUFHcEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs0QkFGQSxJQUFJO1FBR3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjtDQUNGOzs7Ozs7O0FBRUQsZUFBZSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2xpY2tQb3NpdGlvbiB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsVXRpbCB7XHJcbiAgcHJpdmF0ZSBsYXN0UG9zaXRpb246IENsaWNrUG9zaXRpb24gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkge1xyXG4gICAgdGhpcy5saXN0ZW5Eb2N1bWVudENsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0Q2xpY2tQb3NpdGlvbigpOiBDbGlja1Bvc2l0aW9uIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5Eb2N1bWVudENsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kYWxVdGlsKGRvY3VtZW50KTtcclxuIl19