/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
export class NzCollapseComponent {
    constructor() {
        this.listOfNzCollapsePanelComponent = [];
        this.nzAccordion = false;
        this.nzBordered = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent.filter(item => item !== collapse).forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
}
NzCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\r\n  <ng-content></ng-content>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`nz-collapse {
      display: block;
    }`]
            }] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCollapseComponent.prototype, "nzBordered", void 0);
function NzCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapseComponent.prototype.listOfNzCollapsePanelComponent;
    /** @type {?} */
    NzCollapseComponent.prototype.nzAccordion;
    /** @type {?} */
    NzCollapseComponent.prototype.nzBordered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBY3BELE1BQU0sT0FBTyxtQkFBbUI7OzhDQUN1QyxFQUFFO1FBQ3ZFLG1CQUF1QyxLQUFLLENBQUM7UUFDN0Msa0JBQXNDLElBQUksQ0FBQzs7Ozs7O0lBRTNDLFFBQVEsQ0FBQyxLQUErQjtRQUN0QyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQUVELFdBQVcsQ0FBQyxLQUErQjtRQUN6QyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkc7Ozs7O0lBRUQsS0FBSyxDQUFDLFFBQWtDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25GLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pEOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBUyxhQUFhO2dCQUM5QixpSUFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUksaUJBQWlCLENBQUMsSUFBSTt5QkFFbkM7O01BRUE7YUFFTDs7OzBCQUdFLEtBQUs7eUJBQ0wsS0FBSzs7O0lBREksWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NoZWNrYm94JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICA6ICduei1jb2xsYXBzZScsXHJcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9uei1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlcyAgICAgICAgIDogW1xyXG4gICAgICBgbnotY29sbGFwc2Uge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1gXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2xsYXBzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQ6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudFtdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWNjb3JkaW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQgPSB0cnVlO1xyXG5cclxuICBhZGRQYW5lbCh2YWx1ZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBhbmVsKHZhbHVlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgfVxyXG5cclxuICBjbGljayhjb2xsYXBzZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekFjY29yZGlvbiAmJiAhY29sbGFwc2UubnpBY3RpdmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY29sbGFwc2UpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ubnpBY3RpdmUpIHtcclxuICAgICAgICAgIGl0ZW0ubnpBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0ubnpBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLm56QWN0aXZlKTtcclxuICAgICAgICAgIGl0ZW0ubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbGxhcHNlLm56QWN0aXZlID0gIWNvbGxhcHNlLm56QWN0aXZlO1xyXG4gICAgY29sbGFwc2UubnpBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5uekFjdGl2ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==