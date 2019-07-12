/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { NzCardTabComponent } from './nz-card-tab.component';
export class NzCardComponent {
    constructor() {
        this.nzBordered = true;
        this.nzLoading = false;
        this.nzHoverable = false;
        this.nzActions = [];
    }
}
NzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-card',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || tab\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\r\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\r\n  <ng-container *ngIf=\"!nzLoading\">\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\r\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>",
                host: {
                    '[class.ant-card]': 'true',
                    '[class.ant-card-loading]': 'nzLoading',
                    '[class.ant-card-bordered]': 'nzBordered',
                    '[class.ant-card-hoverable]': 'nzHoverable',
                    '[class.ant-card-type-inner]': `nzType === 'inner'`,
                    '[class.ant-card-contain-tabs]': '!!tab'
                },
                styles: [`
    nz-card {
      display: block;
    }
  `]
            }] }
];
NzCardComponent.propDecorators = {
    nzBordered: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzHoverable: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzCover: [{ type: Input }],
    nzActions: [{ type: Input }],
    nzType: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzExtra: [{ type: Input }],
    tab: [{ type: ContentChild, args: [NzCardTabComponent,] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCardComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCardComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCardComponent.prototype, "nzHoverable", void 0);
function NzCardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.tab;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2FyZC9uei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFzQjdELE1BQU0sT0FBTyxlQUFlOztRQUMxQixrQkFBc0MsSUFBSSxDQUFDO1FBQzNDLGlCQUFxQyxLQUFLLENBQUM7UUFDM0MsbUJBQXVDLEtBQUssQ0FBQztRQUc3QyxpQkFBK0MsRUFBRSxDQUFDOzs7O1lBMUJuRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFNBQVM7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0Msb3FDQUErQztnQkFNL0MsSUFBSSxFQUFpQjtvQkFDbkIsa0JBQWtCLEVBQWUsTUFBTTtvQkFDdkMsMEJBQTBCLEVBQU8sV0FBVztvQkFDNUMsMkJBQTJCLEVBQU0sWUFBWTtvQkFDN0MsNEJBQTRCLEVBQUssYUFBYTtvQkFDOUMsNkJBQTZCLEVBQUksb0JBQW9CO29CQUNyRCwrQkFBK0IsRUFBRSxPQUFPO2lCQUN6Qzt5QkFac0I7Ozs7R0FJdEI7YUFTRjs7O3lCQUVFLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO2tCQUNMLFlBQVksU0FBQyxrQkFBa0I7OztJQVR0QixZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgSW5wdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL256LWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICBuei1jYXJkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgYCBdLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmRdJyAgICAgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nICAgICA6ICduekxvYWRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nICAgIDogJ256Qm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJyAgIDogJ256SG92ZXJhYmxlJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nICA6IGBuelR5cGUgPT09ICdpbm5lcidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FyZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIb3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekJvZHlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIG56Q292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgbnpUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChOekNhcmRUYWJDb21wb25lbnQpIHRhYjogTnpDYXJkVGFiQ29tcG9uZW50O1xyXG59XHJcbiJdfQ==