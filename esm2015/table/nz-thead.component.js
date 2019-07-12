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
export class NzTheadComponent {
    /**
     * @param {?} nzTableComponent
     */
    constructor(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSingleSort(value) {
        this._singleSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSingleSort() {
        return this._singleSort;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        let sortChange = new Subject().asObservable();
        /** @type {?} */
        const listOfTh = this.listOfNzThComponent.toArray();
        /** @type {?} */
        const sortChangeArray = listOfTh.map(th => th.nzSortChangeWithKey);
        if (sortChangeArray.length) {
            sortChangeArray.forEach(sort => {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
            this.nzSortChange.emit(data);
            if (this.nzSingleSort) {
                listOfTh.forEach(th => th.nzSort = (th.nzSortKey === data.key ? th.nzSort : null));
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTheadComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                template: "<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<ng-container *ngIf=\"!nzTableComponent\">\r\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\r\n</ng-container>"
            }] }
];
/** @nocollapse */
NzTheadComponent.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzTheadComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['contentTemplate',] }],
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    nzSortChange: [{ type: Output }],
    nzSingleSort: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU94RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBaUIzQixZQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjsyQkFoQm5ELEtBQUs7NEJBQ0osSUFBSSxPQUFPLEVBQVE7UUFJMUMsb0JBQWtDLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBWW5GLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDL0M7S0FDRjs7Ozs7SUFiRCxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBUUQsa0JBQWtCOztRQUNoQixJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBa0MsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDOUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNwRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JELENBQUMsQ0FBQztTQUNKO1FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDcEY7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7OztZQWhERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBSyw2QkFBNkI7Z0JBQzFDLG9PQUF3QzthQUN6Qzs7OztZQU5RLGdCQUFnQix1QkF3QlYsSUFBSSxZQUFJLFFBQVE7Ozt1QkFiNUIsU0FBUyxTQUFDLGlCQUFpQjtrQ0FDM0IsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7MkJBQ3BELE1BQU07MkJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvciAgIDogJ3RoZWFkOm5vdCguYW50LXRhYmxlLXRoZWFkKScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRoZWFkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfc2luZ2xlU29ydCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJykgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUaENvbXBvbmVudD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNpbmdsZVNvcnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NpbmdsZVNvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2luZ2xlU29ydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTb3J0O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCkge1xyXG4gICAgaWYgKHRoaXMubnpUYWJsZUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56VGFibGVDb21wb25lbnQubnpUaGVhZENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBsZXQgc29ydENoYW5nZSA9IG5ldyBTdWJqZWN0PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKS5hc09ic2VydmFibGUoKTtcclxuICAgIGNvbnN0IGxpc3RPZlRoID0gdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IHNvcnRDaGFuZ2VBcnJheSA9IGxpc3RPZlRoLm1hcCh0aCA9PiB0aC5uelNvcnRDaGFuZ2VXaXRoS2V5KTtcclxuICAgIGlmIChzb3J0Q2hhbmdlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIHNvcnRDaGFuZ2VBcnJheS5mb3JFYWNoKHNvcnQgPT4ge1xyXG4gICAgICAgIHNvcnRDaGFuZ2UgPSBtZXJnZShzb3J0LmFzT2JzZXJ2YWJsZSgpLCBzb3J0Q2hhbmdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzb3J0Q2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5uelNpbmdsZVNvcnQpIHtcclxuICAgICAgICBsaXN0T2ZUaC5mb3JFYWNoKHRoID0+IHRoLm56U29ydCA9ICh0aC5uelNvcnRLZXkgPT09IGRhdGEua2V5ID8gdGgubnpTb3J0IDogbnVsbCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19