/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    YearPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.previousDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-10);
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.nextDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(10);
    };
    /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    YearPanelComponent.prototype.trackPanelYear = /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    function (index, yearData) {
        return yearData.content;
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    YearPanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    YearPanelComponent.prototype.chooseYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.makePanelYears = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var currentYear = this.currentYear;
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 1;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var year = previousYear + index;
                /** @type {?} */
                var content = String(year);
                /** @type {?} */
                var cell = years[rowIndex][colIndex] = {
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousDecade(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextDecade(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseYear(cell.year); };
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    YearPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'year-panel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-decade-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousDecade()\"\r\n        title=\"{{ locale.previousDecade }}\"\r\n      ></a>\r\n      <a\r\n        class=\"{{ prefixCls }}-decade-select\"\r\n        role=\"button\"\r\n        (click)=\"decadePanelShow.emit()\"\r\n        title=\"{{ locale.decadeSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-decade-select-content\">\r\n          {{ startYear }}-{{ endYear }}\r\n        </span>\r\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n        <tbody class=\"{{ prefixCls }}-tbody\">\r\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\r\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\r\n              role=\"gridcell\"\r\n              title=\"{{ yearCell.title }}\"\r\n              (click)=\"yearCell.onClick()\"\r\n              [ngClass]=\"yearCell.classMap\"\r\n            >\r\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    YearPanelComponent.ctorParameters = function () { return []; };
    YearPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        decadePanelShow: [{ type: Output }]
    };
    return YearPanelComponent;
}());
export { YearPanelComponent };
function YearPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
function PanelYearData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7QUFDbEIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTRCaEI7UUFqQkEsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFdEQsdUJBQTRCLElBQUksWUFBWSxFQUFRLENBQUM7UUFZckQsaUJBQW9CLHlCQUF5QixDQUFDO0tBRzdCO0lBYmpCLHNCQUFJLDJDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sUUFBUSxDQUFDLEtBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3REOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzNCOzs7T0FBQTs7Ozs7SUFPRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLFdBQVE7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7OztJQUVELDJDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNwQjs7OztJQUVELHVDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkI7Ozs7OztJQUVELDJDQUFjOzs7OztJQUFkLFVBQWUsS0FBYSxFQUFFLFFBQXVCO1FBQ25ELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztLQUN6Qjs7OztJQUVPLG1DQUFNOzs7O1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekM7Ozs7OztJQUlLLHFDQUFROzs7O2NBQUMsTUFBYztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUV6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7OztJQUdSLHVDQUFVOzs7O2NBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O0lBR1IsMkNBQWM7Ozs7OztRQUNwQixJQUFNLEtBQUssR0FBc0IsRUFBRSxDQUFDOztRQUNwQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztRQUNyQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztRQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztRQUM3QixJQUFNLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRyxFQUFFO1lBQ3RELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7b0NBQ1osUUFBUTs7O2dCQUNmLElBQU0sSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7O2dCQUNsQyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUU3QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUc7b0JBQ3ZDLE9BQU8sU0FBQTtvQkFDUCxJQUFJLE1BQUE7b0JBQ0osS0FBSyxFQUFFLE9BQU87b0JBQ2QsU0FBUyxFQUFFLElBQUksS0FBSyxXQUFXO29CQUMvQixnQkFBZ0IsRUFBRSxJQUFJLEdBQUcsU0FBUztvQkFDbEMsZUFBZSxFQUFFLElBQUksR0FBRyxPQUFPO29CQUMvQixRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDO2dCQUVGLElBQUksQ0FBQyxRQUFRO29CQUNYLEdBQUksT0FBSyxTQUFTLFVBQU8sSUFBRyxJQUFJO29CQUNoQyxHQUFJLE9BQUssU0FBUyxtQkFBZ0IsSUFBRyxJQUFJLENBQUMsU0FBUztvQkFDbkQsR0FBSSxPQUFLLFNBQVMsc0JBQW1CLElBQUcsSUFBSSxDQUFDLGdCQUFnQjtvQkFDN0QsR0FBSSxPQUFLLFNBQVMsc0JBQW1CLElBQUcsSUFBSSxDQUFDLGVBQWU7dUJBQzdELENBQUM7Z0JBRUYsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQztpQkFDNUM7cUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDO2lCQUNqRDtnQkFFRCxLQUFLLEVBQUcsQ0FBQzs7O1lBOUJYLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsUUFBUSxFQUFHO3dCQUE3QyxRQUFRO2FBK0JoQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7OztnQkEzR2hCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsd2hEQUF3QztpQkFDekM7Ozs7O3lCQUdFLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNO2tDQUVOLE1BQU07OzZCQW5CVDs7U0FhYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcclxuXHJcbmNvbnN0IE1BWF9ST1cgPSA0O1xyXG5jb25zdCBNQVhfQ09MID0gMztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneWVhci1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd5ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFllYXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIGRlY2FkZVBhbmVsU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgZ2V0IGN1cnJlbnRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXRZZWFyKCk7XHJcbiAgfVxyXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwYXJzZUludChgJHt0aGlzLmN1cnJlbnRZZWFyIC8gMTB9YCwgMTApICogMTA7XHJcbiAgfVxyXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5O1xyXG4gIH1cclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLXllYXItcGFuZWwnO1xyXG4gIHBhbmVsWWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmlvdXNEZWNhZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMCk7XHJcbiAgfVxyXG5cclxuICBuZXh0RGVjYWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigxMCk7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhbmVsWWVhcihpbmRleDogbnVtYmVyLCB5ZWFyRGF0YTogUGFuZWxZZWFyRGF0YSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4geWVhckRhdGEuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5wYW5lbFllYXJzID0gdGhpcy5tYWtlUGFuZWxZZWFycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmUtcmVuZGVyIHBhbmVsIGNvbnRlbnQgYnkgdGhlIGhlYWRlcidzIGJ1dHRvbnMgKE5PVEU6IERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2UpXHJcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcclxuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTsgLy8gRG8gbm90IHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaG9vc2VZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcih5ZWFyKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYW5lbFllYXJzKCk6IFBhbmVsWWVhckRhdGFbXVtdIHtcclxuICAgIGNvbnN0IHllYXJzOiBQYW5lbFllYXJEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLmN1cnJlbnRZZWFyO1xyXG4gICAgY29uc3Qgc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XHJcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xyXG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXggKyspIHtcclxuICAgICAgeWVhcnNbcm93SW5kZXhdID0gW107XHJcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBwcmV2aW91c1llYXIgKyBpbmRleDtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gU3RyaW5nKHllYXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjZWxsID0geWVhcnNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXHJcbiAgICAgICAgICBpc0N1cnJlbnQ6IHllYXIgPT09IGN1cnJlbnRZZWFyLFxyXG4gICAgICAgICAgaXNMb3dlclRoYW5TdGFydDogeWVhciA8IHN0YXJ0WWVhcixcclxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogeWVhciA+IGVuZFllYXIsXHJcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcclxuICAgICAgICAgIG9uQ2xpY2s6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWNlbGxgXTogY2VsbC5pc0N1cnJlbnQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhc3QtZGVjYWRlLWNlbGxgXTogY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxyXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWRlY2FkZS1jZWxsYF06IGNlbGwuaXNCaWdnZXJUaGFuRW5kXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNlbGwuaXNMb3dlclRoYW5TdGFydCkge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5wcmV2aW91c0RlY2FkZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5pc0JpZ2dlclRoYW5FbmQpIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMubmV4dERlY2FkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZVllYXIoY2VsbC55ZWFyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluZGV4ICsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geWVhcnM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsWWVhckRhdGEge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB5ZWFyOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc0N1cnJlbnQ6IGJvb2xlYW47XHJcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcclxuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XHJcbiAgY2xhc3NNYXA6IG9iamVjdDtcclxuICBvbkNsaWNrKCk6IHZvaWQ7XHJcbn1cclxuIl19