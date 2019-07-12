/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent() {
        this.nzActions = [];
    }
    NzListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item',
                    template: "<ng-template #contentTpl>\r\n  <div *ngIf=\"nzContent\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #actionsTpl>\r\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of nzActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #mainTpl>\r\n  <ng-content></ng-content>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<div *ngIf=\"nzExtra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  </div>\r\n</div>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-list-item]': 'true'
                    }
                }] }
    ];
    NzListItemComponent.propDecorators = {
        metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
        nzActions: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzExtra: [{ type: Input }]
    };
    return NzListItemComponent;
}());
export { NzListItemComponent };
function NzListItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJsaXN0L256LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7UUFldEUsaUJBQStDLEVBQUUsQ0FBQzs7O2dCQWJuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGNBQWM7b0JBQ25DLGlvQ0FBb0Q7b0JBQ3BELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsSUFBSSxFQUFpQjt3QkFDbkIsdUJBQXVCLEVBQUUsTUFBTTtxQkFDaEM7aUJBQ0Y7Ozt3QkFFRSxlQUFlLFNBQUMsdUJBQXVCOzRCQUV2QyxLQUFLOzRCQUVMLEtBQUs7MEJBRUwsS0FBSzs7OEJBckJSOztTQWNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1saXN0LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtbGlzdC1pdGVtXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TGlzdEl0ZW1Db21wb25lbnQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzICE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtTWV0YUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcblxyXG4gIEBJbnB1dCgpIG56Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56RXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG59XHJcbiJdfQ==