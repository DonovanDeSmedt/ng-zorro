/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
export class NzStepComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.isIconString = true;
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
            this.isIconString = false;
        }
        this._icon = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        return this._currentIndex;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
}
NzStepComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                preserveWhitespaces: false,
                template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\r\n<div class=\"ant-steps-item-icon\">\r\n  <ng-template [ngIf]=\"!showProcessDot\">\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon type=\"check\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon type=\"close\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{\r\n      index + 1\r\n    }}</span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\r\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\r\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n      </ng-container>\r\n      <ng-template #iconTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzIcon\" [ngTemplateOutletContext]=\"nzCtx\"></ng-template>\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"showProcessDot\">\r\n    <span class=\"ant-steps-icon\">\r\n      <ng-template #processDotTemplate> <span class=\"ant-steps-icon-dot\"></span> </ng-template>\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"customProcessTemplate || processDotTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status: nzStatus, index: index }\"\r\n      >\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</div>\r\n<div class=\"ant-steps-item-content\">\r\n  <div class=\"ant-steps-item-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-steps-item-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '[class.ant-steps-item]': 'true',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }] }
];
/** @nocollapse */
NzStepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCtx: [{ type: Input }],
    nzIcon: [{ type: Input }]
};
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.nzCtx;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFvQnZCLE1BQU0sT0FBTyxlQUFlOzs7O0lBdUQxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXpDMUMsc0JBQWlCLEtBQUssQ0FBQzt1QkFDTCxNQUFNO1FBa0J4QixrQkFBYSxJQUFJLENBQUM7UUFDbEIsb0JBQWUsSUFBSSxDQUFDO1FBSXBCLGlCQUFZLFlBQVksQ0FBQztRQUN6QixhQUFRLENBQUMsQ0FBQztRQUNWLFlBQU8sS0FBSyxDQUFDO1FBQ2IsaUJBQVksU0FBUyxDQUFDO1FBQ3RCLHNCQUFpQixLQUFLLENBQUM7NkJBV0MsQ0FBQztLQUVxQjs7OztJQWpEOUMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksUUFBUSxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7S0FDNUI7Ozs7SUFPRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBc0M7UUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDcEI7Ozs7SUFZRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsT0FBZTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3pHO0tBQ0Y7Ozs7SUFLRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwyd0RBQXVDO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtvQkFDaEMsNkJBQTZCLEVBQUUscUJBQXFCO29CQUNwRCxnQ0FBZ0MsRUFBRSx3QkFBd0I7b0JBQzFELCtCQUErQixFQUFFLHVCQUF1QjtvQkFDeEQsOEJBQThCLEVBQUUsc0JBQXNCO29CQUN0RCwwQkFBMEIsRUFBRSxVQUFVO29CQUN0Qyw4QkFBOEIsRUFBRSx5REFBeUQ7aUJBQzFGO2FBQ0Y7Ozs7WUF6QkMsaUJBQWlCOzs7aUNBMkJoQixTQUFTLFNBQUMsb0JBQW9CO3NCQUU5QixLQUFLOzRCQUNMLEtBQUs7dUJBRUwsS0FBSztvQkFXTCxLQUFLO3FCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9uZy1jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotc3RlcCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW1dJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XSc6ICduelN0YXR1cyA9PT0gXCJ3YWl0XCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzXSc6ICduelN0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1maW5pc2hdJzogJ256U3RhdHVzID09PSBcImZpbmlzaFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ256U3RhdHVzID09PSBcImVycm9yXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtY3VzdG9tXSc6ICchIW56SWNvbicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1uZXh0LWVycm9yXSc6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnKSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgfVxyXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3RhdHVzID0gJ3dhaXQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG56Q3R4OiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuICBzZXQgbnpJY29uKHZhbHVlOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuICBvbGRBUElJY29uID0gdHJ1ZTtcclxuICBpc0ljb25TdHJpbmcgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2ljb246IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGN1c3RvbVByb2Nlc3NUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9PjsgLy8gU2V0IGJ5IHBhcmVudC5cclxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgaW5kZXggPSAwO1xyXG4gIGxhc3QgPSBmYWxzZTtcclxuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XHJcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcclxuICB9XHJcbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXggPyAnZmluaXNoJyA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXggPyB0aGlzLm91dFN0YXR1cyB8fCAnJyA6ICd3YWl0JztcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iXX0=