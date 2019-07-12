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
var ModalUtil = /** @class */ (function () {
    function ModalUtil(document) {
        this.document = document;
        this.lastPosition = null;
        this.listenDocumentClick();
    }
    /**
     * @return {?}
     */
    ModalUtil.prototype.getLastClickPosition = /**
     * @return {?}
     */
    function () {
        return this.lastPosition;
    };
    /**
     * @return {?}
     */
    ModalUtil.prototype.listenDocumentClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.document.addEventListener('click', function (event) {
            _this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    };
    return ModalUtil;
}());
export { ModalUtil };
function ModalUtil_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalUtil.prototype.lastPosition;
    /** @type {?} */
    ModalUtil.prototype.document;
}
export default new ModalUtil(document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBQTtJQUdFLG1CQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzRCQUZBLElBQUk7UUFHeEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7Ozs7SUFFRCx3Q0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7OztJQUVELHVDQUFtQjs7O0lBQW5CO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQWlCO1lBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNKO29CQXBCSDtJQXFCQyxDQUFBO0FBaEJELHFCQWdCQzs7Ozs7OztBQUVELGVBQWUsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENsaWNrUG9zaXRpb24ge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFV0aWwge1xyXG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBDbGlja1Bvc2l0aW9uID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQpIHtcclxuICAgIHRoaXMubGlzdGVuRG9jdW1lbnRDbGljaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdENsaWNrUG9zaXRpb24oKTogQ2xpY2tQb3NpdGlvbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGFsVXRpbChkb2N1bWVudCk7XHJcbiJdfQ==