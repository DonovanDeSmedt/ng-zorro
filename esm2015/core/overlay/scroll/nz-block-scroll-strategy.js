/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class NzBlockScrollStrategy {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} nzMeasureScrollbarService
     */
    constructor(document, renderer, nzMeasureScrollbarService) {
        this.document = document;
        this.renderer = renderer;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
    }
    /**
     * @return {?}
     */
    attach() { }
    /**
     * @return {?}
     */
    enable() {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'padding-right', `${this.nzMeasureScrollbarService.scrollBarWidth}px`);
    }
    /**
     * @return {?}
     */
    disable() {
        this.renderer.removeStyle(document.body, 'overflow');
        this.renderer.removeStyle(document.body, 'padding-right');
    }
}
function NzBlockScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBlockScrollStrategy.prototype.document;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.renderer;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9zY3JvbGwvbnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFFaEMsWUFBb0IsUUFBa0IsRUFBVSxRQUFtQixFQUFVLHlCQUFvRDtRQUE3RyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7S0FDaEk7Ozs7SUFFRCxNQUFNLE1BQVc7Ozs7SUFFakIsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0tBRW5IOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMzRDtDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBTY3JvbGxTdHJhdGVneSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoKCk6IHZvaWQge31cclxuXHJcbiAgZW5hYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnLCBgJHt0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGh9cHhgKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnKTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==