/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Position() { }
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
export class NzGlobalMonitorService {
    constructor() {
        this.counter = 0;
        this.lastClickPos = {
            x: 0,
            y: 0
        };
        this._navItemSource = new EventEmitter();
        this._observeGlobalEvents();
    }
    /**
     * @return {?}
     */
    getGlobalCount() {
        return ++this.counter;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setDocumentOverflowHidden(status) {
        document.body.style.overflow = status ? 'hidden' : '';
    }
    /**
     * @return {?}
     */
    _observeGlobalEvents() {
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', (e) => {
            this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            this._navItemSource.emit('documentClick');
        });
    }
}
function NzGlobalMonitorService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQU83QyxNQUFNLE9BQU8sc0JBQXNCO0lBNEJqQztRQTNCQSxlQUFVLENBQUMsQ0FBQztRQUNaLG9CQUF5QjtZQUN2QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUVGLHNCQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0J4RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQXJCRCxjQUFjO1FBQ1osT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkI7Ozs7O0lBRUQseUJBQXlCLENBQUMsTUFBZTtRQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN2RDs7OztJQUVELG9CQUFvQjs7UUFFbEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTztnQkFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDYixDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7Q0FLRjs7Ozs7Ozs7O0FBRUQsZUFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOekdsb2JhbE1vbml0b3JTZXJ2aWNlIHtcclxuICBjb3VudGVyID0gMDtcclxuICBsYXN0Q2xpY2tQb3M6IFBvc2l0aW9uID0ge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDBcclxuICB9O1xyXG5cclxuICBfbmF2SXRlbVNvdXJjZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGdldEdsb2JhbENvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKyt0aGlzLmNvdW50ZXI7XHJcbiAgfVxyXG5cclxuICBzZXREb2N1bWVudE92ZXJmbG93SGlkZGVuKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHN0YXR1cyA/ICdoaWRkZW4nIDogJyc7XHJcbiAgfVxyXG5cclxuICBfb2JzZXJ2ZUdsb2JhbEV2ZW50cygpOiB2b2lkIHtcclxuICAgIC8vIOebkeWQrGRvY3VtZW5055qE54K55Ye75LqL5Lu277yM6K6w5b2V54K55Ye75Z2Q5qCH77yM5bm25oqb5Ye6IGRvY3VtZW50Q2xpY2sg5LqL5Lu2XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMubGFzdENsaWNrUG9zID0ge1xyXG4gICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICB5OiBlLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fbmF2SXRlbVNvdXJjZS5lbWl0KCdkb2N1bWVudENsaWNrJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZUdsb2JhbEV2ZW50cygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE56R2xvYmFsTW9uaXRvclNlcnZpY2UoKTtcclxuIl19