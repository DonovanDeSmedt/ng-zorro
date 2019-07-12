/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzThComponent } from './nz-th.component';
import { NzTableComponent } from './nz-table.component';
var NzTheadComponent = /** @class */ (function () {
    function NzTheadComponent(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    Object.defineProperty(NzTheadComponent.prototype, "nzSingleSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._singleSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._singleSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sortChange = new Subject().asObservable();
        /** @type {?} */
        var listOfTh = this.listOfNzThComponent.toArray();
        /** @type {?} */
        var sortChangeArray = listOfTh.map(function (th) { return th.nzSortChangeWithKey; });
        if (sortChangeArray.length) {
            sortChangeArray.forEach(function (sort) {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function (data) {
            _this.nzSortChange.emit(data);
            if (_this.nzSingleSort) {
                listOfTh.forEach(function (th) { return th.nzSort = (th.nzSortKey === data.key ? th.nzSort : null); });
            }
        });
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTheadComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'thead:not(.ant-table-thead)',
                    template: "<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<ng-container *ngIf=\"!nzTableComponent\">\r\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\r\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzTheadComponent.ctorParameters = function () { return [
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTheadComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['contentTemplate',] }],
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        nzSortChange: [{ type: Output }],
        nzSingleSort: [{ type: Input }]
    };
    return NzTheadComponent;
}());
export { NzTheadComponent };
function NzTheadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTheadComponent.prototype._singleSort;
    /** @type {?} */
    NzTheadComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTheadComponent.prototype.template;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF3QnRELDBCQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjsyQkFoQm5ELEtBQUs7NEJBQ0osSUFBSSxPQUFPLEVBQVE7UUFJMUMsb0JBQWtDLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBWW5GLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDL0M7S0FDRjtJQWJELHNCQUNJLDBDQUFZOzs7O1FBSWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVBELFVBQ2lCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBWUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFlQzs7UUFkQyxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBa0MsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDOUUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNwRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLG1CQUFtQixFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUMxQixVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNyRCxDQUFDLENBQUM7U0FDSjtRQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDMUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQzthQUNwRjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOztnQkFoREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUssNkJBQTZCO29CQUMxQyxvT0FBd0M7aUJBQ3pDOzs7O2dCQU5RLGdCQUFnQix1QkF3QlYsSUFBSSxZQUFJLFFBQVE7OzsyQkFiNUIsU0FBUyxTQUFDLGlCQUFpQjtzQ0FDM0IsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7K0JBQ3BELE1BQU07K0JBRU4sS0FBSzs7MkJBcENSOztTQTRCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3IgICA6ICd0aGVhZDpub3QoLmFudC10YWJsZS10aGVhZCknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aGVhZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3NpbmdsZVNvcnQgPSBmYWxzZTtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaW5nbGVTb3J0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaW5nbGVTb3J0ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNpbmdsZVNvcnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlU29ydDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQpIHtcclxuICAgIGlmICh0aGlzLm56VGFibGVDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uelRhYmxlQ29tcG9uZW50Lm56VGhlYWRDb21wb25lbnQgPSB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgbGV0IHNvcnRDaGFuZ2UgPSBuZXcgU3ViamVjdDx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCkuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZUaCA9IHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC50b0FycmF5KCk7XHJcbiAgICBjb25zdCBzb3J0Q2hhbmdlQXJyYXkgPSBsaXN0T2ZUaC5tYXAodGggPT4gdGgubnpTb3J0Q2hhbmdlV2l0aEtleSk7XHJcbiAgICBpZiAoc29ydENoYW5nZUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBzb3J0Q2hhbmdlQXJyYXkuZm9yRWFjaChzb3J0ID0+IHtcclxuICAgICAgICBzb3J0Q2hhbmdlID0gbWVyZ2Uoc29ydC5hc09ic2VydmFibGUoKSwgc29ydENoYW5nZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc29ydENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgaWYgKHRoaXMubnpTaW5nbGVTb3J0KSB7XHJcbiAgICAgICAgbGlzdE9mVGguZm9yRWFjaCh0aCA9PiB0aC5uelNvcnQgPSAodGgubnpTb3J0S2V5ID09PSBkYXRhLmtleSA/IHRoLm56U29ydCA6IG51bGwpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==