/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzListItemMetaComponent {
    constructor() {
        this.avatarStr = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = null;
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
}
NzListItemMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-meta',
                template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"nzTitle || nzDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"nzTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"nzDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-list-item-meta]': 'true'
                }
            }] }
];
NzListItemMetaComponent.propDecorators = {
    nzAvatar: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }]
};
function NzListItemMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzListItemMetaComponent.prototype.nzDescription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxpc3QvbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZMUcsTUFBTSxPQUFPLHVCQUF1Qjs7UUFFbEMsaUJBQVksRUFBRSxDQUFDOzs7Ozs7SUFHZixJQUNJLFFBQVEsQ0FBQyxLQUFpQztRQUM1QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0tBQ0Y7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLG1CQUFtQjtnQkFDeEMsdXBCQUF5RDtnQkFDekQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyxJQUFJLEVBQWlCO29CQUNuQiw0QkFBNEIsRUFBRSxNQUFNO2lCQUNyQzthQUNGOzs7dUJBTUUsS0FBSztzQkFVTCxLQUFLOzRCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGlzdC1pdGVtLW1ldGEnLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1saXN0LWl0ZW0tbWV0YV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB7XHJcblxyXG4gIGF2YXRhclN0ciA9ICcnO1xyXG4gIGF2YXRhclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSBudWxsO1xyXG4gICAgICB0aGlzLmF2YXRhclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxufVxyXG4iXX0=