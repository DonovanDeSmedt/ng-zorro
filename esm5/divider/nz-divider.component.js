/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util';
var NzDividerComponent = /** @class */ (function () {
    function NzDividerComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = '';
        this.nzDashed = false;
    }
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var orientationPrefix = (this.nzOrientation.length > 0) ? '-' + this.nzOrientation : this.nzOrientation;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.nzType] = true,
            _a["ant-divider-with-text" + orientationPrefix] = this.nzText,
            _a["ant-divider-dashed"] = this.nzDashed,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClass();
    };
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NzDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-divider',
                    template: "<span *ngIf=\"nzText\" class=\"ant-divider-inner-text\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\r\n</span>",
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzDividerComponent.propDecorators = {
        nzText: [{ type: Input }],
        nzType: [{ type: Input }],
        nzOrientation: [{ type: Input }],
        nzDashed: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDividerComponent.prototype, "nzDashed", void 0);
    return NzDividerComponent;
}());
export { NzDividerComponent };
function NzDividerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDividerComponent.prototype.nzText;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype.nzDashed;
    /** @type {?} */
    NzDividerComponent.prototype.elementRef;
    /** @type {?} */
    NzDividerComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGl2aWRlci9uei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBMkIxQyw0QkFBb0IsVUFBc0IsRUFBVSx3QkFBa0Q7UUFBbEYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFmdEcsY0FBNkMsWUFBWSxDQUFDO1FBQzFELHFCQUFnRCxFQUFFLENBQUM7UUFDbkQsZ0JBQW9DLEtBQUssQ0FBQztLQWN6Qzs7OztJQVpPLHFDQUFROzs7Ozs7UUFDZCxJQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztRQUMxRyxJQUFNLFFBQVE7WUFDWixHQUFFLGFBQWEsSUFBa0MsSUFBSTtZQUNyRCxHQUFFLGlCQUFlLElBQUksQ0FBQyxNQUFRLElBQW1CLElBQUk7WUFDckQsR0FBRSwwQkFBd0IsaUJBQW1CLElBQUksSUFBSSxDQUFDLE1BQU07WUFDNUQsR0FBRSxvQkFBb0IsSUFBMkIsSUFBSSxDQUFDLFFBQVE7Z0JBQzlEO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7O0lBTXpGLHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLGlLQUFrRDtvQkFDbEQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBbkJDLFVBQVU7Z0JBU0gsd0JBQXdCOzs7eUJBWTlCLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OztRQUFJLFlBQVksRUFBRTs7OzZCQTNCMUI7O1NBdUJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGl2aWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56VHlwZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBuek9yaWVudGF0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJycgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEYXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9yaWVudGF0aW9uUHJlZml4ID0gKHRoaXMubnpPcmllbnRhdGlvbi5sZW5ndGggPiAwKSA/ICctJyArIHRoaXMubnpPcmllbnRhdGlvbiA6IHRoaXMubnpPcmllbnRhdGlvbjtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbICdhbnQtZGl2aWRlcicgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgYW50LWRpdmlkZXItJHt0aGlzLm56VHlwZX1gIF0gICAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYGFudC1kaXZpZGVyLXdpdGgtdGV4dCR7b3JpZW50YXRpb25QcmVmaXh9YCBdOiB0aGlzLm56VGV4dCxcclxuICAgICAgWyBgYW50LWRpdmlkZXItZGFzaGVkYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpEYXNoZWRcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==