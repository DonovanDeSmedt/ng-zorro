/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NzBlockScrollStrategy = /** @class */ (function () {
    function NzBlockScrollStrategy(document, renderer, nzMeasureScrollbarService) {
        this.document = document;
        this.renderer = renderer;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
    }
    /**
     * @return {?}
     */
    NzBlockScrollStrategy.prototype.attach = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzBlockScrollStrategy.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'padding-right', this.nzMeasureScrollbarService.scrollBarWidth + "px");
    };
    /**
     * @return {?}
     */
    NzBlockScrollStrategy.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.renderer.removeStyle(document.body, 'overflow');
        this.renderer.removeStyle(document.body, 'padding-right');
    };
    return NzBlockScrollStrategy;
}());
export { NzBlockScrollStrategy };
function NzBlockScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBlockScrollStrategy.prototype.document;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.renderer;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9zY3JvbGwvbnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxJQUFBO0lBRUUsK0JBQW9CLFFBQWtCLEVBQVUsUUFBbUIsRUFBVSx5QkFBb0Q7UUFBN0csYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0tBQ2hJOzs7O0lBRUQsc0NBQU07OztJQUFOLGVBQWlCOzs7O0lBRWpCLHNDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBSyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxPQUFJLENBQUMsQ0FBQztLQUVuSDs7OztJQUVELHVDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMzRDtnQ0FwQkg7SUFzQkMsQ0FBQTtBQWxCRCxpQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JvbGxTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uei1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE56QmxvY2tTY3JvbGxTdHJhdGVneSBpbXBsZW1lbnRzIFNjcm9sbFN0cmF0ZWd5IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBhdHRhY2goKTogdm9pZCB7fVxyXG5cclxuICBlbmFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcsIGAke3RoaXMubnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZS5zY3JvbGxCYXJXaWR0aH1weGApO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShkb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19