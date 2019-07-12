/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NzMeasureScrollbarService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzMeasureScrollbarService(document) {
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
    Object.defineProperty(NzMeasureScrollbarService.prototype, "scrollBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (isNotNil(this._scrollbarWidth)) {
                return this._scrollbarWidth;
            }
            this.initScrollBarWidth();
            return this._scrollbarWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMeasureScrollbarService.prototype.initScrollBarWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.document.createElement('div');
        for (var scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    };
    NzMeasureScrollbarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzMeasureScrollbarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
    return NzMeasureScrollbarService;
}());
export { NzMeasureScrollbarService };
function NzMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBb0N2QyxrQ0FBa0M7SUFDbEMsbUNBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO2dDQTlCeEI7WUFDekIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFPLFNBQVM7WUFDbkIsS0FBSyxFQUFLLE1BQU07WUFDaEIsTUFBTSxFQUFJLE1BQU07WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUF5QkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7SUF4QkQsc0JBQUkscURBQWM7Ozs7UUFBbEI7WUFDRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3Qjs7O09BQUE7Ozs7SUFFRCxzREFBa0I7OztJQUFsQjs7UUFDRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLElBQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BELFNBQVMsQ0FBQyxLQUFLLENBQUUsVUFBVSxDQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFVBQVUsQ0FBRSxDQUFDO2FBQ3JFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBQzFDLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7S0FDOUI7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQWlDYyxNQUFNLFNBQUMsUUFBUTs7O29DQXZDOUI7O1NBT2EseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi91dGlsL2NoZWNrJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3Njcm9sbGJhcldpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzY3JvbGxiYXJNZWFzdXJlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3AgICAgIDogJy05OTk5cHgnLFxyXG4gICAgd2lkdGggICA6ICc1MHB4JyxcclxuICAgIGhlaWdodCAgOiAnNTBweCcsXHJcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCdcclxuICB9O1xyXG5cclxuICBnZXQgc2Nyb2xsQmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLl9zY3JvbGxiYXJXaWR0aCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcldpZHRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0U2Nyb2xsQmFyV2lkdGgoKTtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGxiYXJXaWR0aDtcclxuICB9XHJcblxyXG4gIGluaXRTY3JvbGxCYXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3IgKGNvbnN0IHNjcm9sbFByb3AgaW4gdGhpcy5zY3JvbGxiYXJNZWFzdXJlKSB7XHJcbiAgICAgIGlmICh0aGlzLnNjcm9sbGJhck1lYXN1cmUuaGFzT3duUHJvcGVydHkoc2Nyb2xsUHJvcCkpIHtcclxuICAgICAgICBzY3JvbGxEaXYuc3R5bGVbIHNjcm9sbFByb3AgXSA9IHRoaXMuc2Nyb2xsYmFyTWVhc3VyZVsgc2Nyb2xsUHJvcCBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcclxuICAgIGNvbnN0IHdpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XHJcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5pbml0U2Nyb2xsQmFyV2lkdGgoKTtcclxuICB9XHJcbn1cclxuIl19