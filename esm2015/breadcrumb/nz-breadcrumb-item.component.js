/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
export class NzBreadCrumbItemComponent {
    /**
     * @param {?} nzBreadCrumbComponent
     */
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
NzBreadCrumbItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-breadcrumb-item',
                preserveWhitespaces: false,
                template: "<span class=\"ant-breadcrumb-link\">\r\n  <ng-content></ng-content>\r\n</span>\r\n<span class=\"ant-breadcrumb-separator\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\r\n    {{ nzBreadCrumbComponent.nzSeparator }}\r\n  </ng-container>\r\n</span>",
                styles: [`
    nz-breadcrumb-item:last-child {
      color: rgba(0, 0, 0, 0.65);
    }

    nz-breadcrumb-item:last-child .ant-breadcrumb-separator {
      display: none;
    }
  `]
            }] }
];
/** @nocollapse */
NzBreadCrumbItemComponent.ctorParameters = () => [
    { type: NzBreadCrumbComponent }
];
function NzBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJicmVhZGNydW1iL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFrQmxFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFDcEMsWUFBbUIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FBSzs7O1lBakJyRSxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyxRQUFRLEVBQWEsb0JBQW9CO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix3U0FBd0Q7eUJBQ2pDOzs7Ozs7OztHQVF0QjthQUNGOzs7O1lBakJRLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpCcmVhZENydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9uei1icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYnJlYWRjcnVtYi1pdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnbnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIG56LWJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICB9XHJcblxyXG4gICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgYCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpCcmVhZENydW1iQ29tcG9uZW50OiBOekJyZWFkQ3J1bWJDb21wb25lbnQpIHsgfVxyXG59XHJcbiJdfQ==