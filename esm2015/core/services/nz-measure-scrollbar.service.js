/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NzMeasureScrollbarService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    /**
     * @return {?}
     */
    get scrollBarWidth() {
        if (isNotNil(this._scrollbarWidth)) {
            return this._scrollbarWidth;
        }
        this.initScrollBarWidth();
        return this._scrollbarWidth;
    }
    /**
     * @return {?}
     */
    initScrollBarWidth() {
        /** @type {?} */
        const scrollDiv = this.document.createElement('div');
        for (const scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    }
}
NzMeasureScrollbarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMeasureScrollbarService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
function NzMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLekMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQWdDcEMsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7Z0NBOUJ4QjtZQUN6QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQU8sU0FBUztZQUNuQixLQUFLLEVBQUssTUFBTTtZQUNoQixNQUFNLEVBQUksTUFBTTtZQUNoQixRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQXlCQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQXhCRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUM3Qjs7OztJQUVELGtCQUFrQjs7UUFDaEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFFLFVBQVUsQ0FBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxVQUFVLENBQUUsQ0FBQzthQUNyRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUMxQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0tBQzlCOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQWlDYyxNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9zY3JvbGxiYXJXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsYmFyTWVhc3VyZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wICAgICA6ICctOTk5OXB4JyxcclxuICAgIHdpZHRoICAgOiAnNTBweCcsXHJcbiAgICBoZWlnaHQgIDogJzUwcHgnLFxyXG4gICAgb3ZlcmZsb3c6ICdzY3JvbGwnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IHNjcm9sbEJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5fc2Nyb2xsYmFyV2lkdGgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxiYXJXaWR0aDtcclxuICAgIH1cclxuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyV2lkdGg7XHJcbiAgfVxyXG5cclxuICBpbml0U2Nyb2xsQmFyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9yIChjb25zdCBzY3JvbGxQcm9wIGluIHRoaXMuc2Nyb2xsYmFyTWVhc3VyZSkge1xyXG4gICAgICBpZiAodGhpcy5zY3JvbGxiYXJNZWFzdXJlLmhhc093blByb3BlcnR5KHNjcm9sbFByb3ApKSB7XHJcbiAgICAgICAgc2Nyb2xsRGl2LnN0eWxlWyBzY3JvbGxQcm9wIF0gPSB0aGlzLnNjcm9sbGJhck1lYXN1cmVbIHNjcm9sbFByb3AgXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XHJcbiAgICBjb25zdCB3aWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xyXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB3aWR0aDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==