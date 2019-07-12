/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzCardMetaComponent {
}
NzCardMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-card-meta',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\r\n  <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\r\n  <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>",
                host: {
                    '[class.ant-card-meta]': 'true'
                },
                styles: [`
    nz-card-meta {
      display: block;
    }
  `]
            }] }
];
NzCardMetaComponent.propDecorators = {
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzAvatar: [{ type: Input }]
};
function NzCardMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYXJkL256LWNhcmQtbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWlCMUcsTUFBTSxPQUFPLG1CQUFtQjs7O1lBZi9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsY0FBYztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyxxakJBQW9EO2dCQU1wRCxJQUFJLEVBQWlCO29CQUNuQix1QkFBdUIsRUFBRSxNQUFNO2lCQUNoQzt5QkFQc0I7Ozs7R0FJdEI7YUFJRjs7O3NCQUVFLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcmQtbWV0YScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIG56LWNhcmQtbWV0YSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIGAgXSxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLW1ldGFdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXJkTWV0YUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpBdmF0YXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG59XHJcbiJdfQ==