/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from '../core/util/convert';
var NzTabComponent = /** @class */ (function () {
    function NzTabComponent() {
        this.position = null;
        this.origin = null;
        this.isActive = false;
        this.stateChanges = new Subject();
        this.nzForceRender = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzTitle"] || changes["nzForceRender"] || changes["nzDisabled"]) {
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    NzTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    NzTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tab',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    host: {
                        '[class.ant-tabs-tabpane]': 'true'
                    }
                }] }
    ];
    NzTabComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        nzTitle: [{ type: Input }],
        nzForceRender: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzDeselect: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzForceRender", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabComponent.prototype, "nzDisabled", void 0);
    return NzTabComponent;
}());
export { NzTabComponent };
function NzTabComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabComponent.prototype.position;
    /** @type {?} */
    NzTabComponent.prototype.origin;
    /** @type {?} */
    NzTabComponent.prototype.isActive;
    /** @type {?} */
    NzTabComponent.prototype.stateChanges;
    /** @type {?} */
    NzTabComponent.prototype.content;
    /** @type {?} */
    NzTabComponent.prototype.nzTitle;
    /** @type {?} */
    NzTabComponent.prototype.nzForceRender;
    /** @type {?} */
    NzTabComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTabComponent.prototype.nzClick;
    /** @type {?} */
    NzTabComponent.prototype.nzSelect;
    /** @type {?} */
    NzTabComponent.prototype.nzDeselect;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O1FBYWxELGdCQUFtQixJQUFJLENBQUM7UUFDeEIsY0FBaUIsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEtBQUssQ0FBQztRQUNqQixvQkFBd0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUc1QyxxQkFBeUMsS0FBSyxDQUFDO1FBQy9DLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsZUFBNkIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RCxnQkFBOEIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN2RCxrQkFBZ0MsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7O0lBRXpELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sZUFBWSxPQUFPLGlCQUFjLElBQUksT0FBTyxjQUFXLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsUUFBUTtvQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCwwRUFBOEM7b0JBQzlDLElBQUksRUFBaUI7d0JBQ25CLDBCQUEwQixFQUFFLE1BQU07cUJBQ25DO2lCQUNGOzs7MEJBTUUsU0FBUyxTQUFDLFdBQVc7MEJBQ3JCLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLE1BQU07MkJBQ04sTUFBTTs2QkFDTixNQUFNOzs7UUFKRyxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozt5QkFsQzFCOztTQTBCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcywgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGFiJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwb3NpdGlvbjogbnVtYmVyID0gbnVsbDtcclxuICBvcmlnaW46IG51bWJlciA9IG51bGw7XHJcbiAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICByZWFkb25seSBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHByaXZhdGUgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Rm9yY2VSZW5kZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEZXNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSB8fCBjaGFuZ2VzLm56Rm9yY2VSZW5kZXIgfHwgY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19