/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isEmpty, isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.spinning$ = new BehaviorSubject(true);
        this.debounceSpinning$ = this.spinning$.asObservable().pipe(debounceTime(0));
        this.nzSize = 'default';
    }
    Object.defineProperty(NzSpinComponent.prototype, "nzDelay", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.debounceSpinning$ = this.spinning$.asObservable().pipe(debounceTime(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSpinComponent.prototype, "nzSpinning", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spinning$.next(toBoolean(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.checkNested = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var containerElement = this.containerElement.nativeElement;
        /** @type {?} */
        var nestedElement = this.nestedElement.nativeElement;
        /** no way to detect empty https://github.com/angular/angular/issues/12530 **/
        /** https://github.com/angular/material2/issues/11280 **/
        if (!isEmpty(containerElement)) {
            this.renderer.removeStyle(containerElement, 'display');
            this.renderer.setStyle(el, 'display', 'block');
            this.renderer.addClass(nestedElement, 'ant-spin-nested-loading');
        }
        else {
            this.renderer.setStyle(containerElement, 'display', 'none');
            this.renderer.removeStyle(el, 'display');
            this.renderer.removeClass(nestedElement, 'ant-spin-nested-loading');
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkNested();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #defaultIndicatorTemplate>\r\n  <span class=\"ant-spin-dot\"\r\n    [class.ant-spin-dot-spin]=\"(debounceSpinning$ | async) === true\">\r\n    <i></i><i></i><i></i><i></i>\r\n  </span>\r\n</ng-template>\r\n<div #nestedElement>\r\n  <div [hidden]=\"!((debounceSpinning$ | async) === true)\">\r\n    <div class=\"ant-spin\"\r\n      [class.ant-spin-spinning]=\"(debounceSpinning$ | async) === true\"\r\n      [class.ant-spin-lg]=\"nzSize === 'large'\"\r\n      [class.ant-spin-sm]=\"nzSize === 'small'\"\r\n      [class.ant-spin-show-text]=\"nzTip\">\r\n      <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\r\n      <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\r\n    </div>\r\n  </div>\r\n  <div #containerElement\r\n    class=\"ant-spin-container\"\r\n    [class.ant-spin-blur]=\"(debounceSpinning$ | async) === true\"\r\n    (cdkObserveContent)=\"checkNested()\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzSpinComponent.propDecorators = {
        containerElement: [{ type: ViewChild, args: ['containerElement',] }],
        nestedElement: [{ type: ViewChild, args: ['nestedElement',] }],
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    return NzSpinComponent;
}());
export { NzSpinComponent };
function NzSpinComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSpinComponent.prototype.spinning$;
    /** @type {?} */
    NzSpinComponent.prototype.debounceSpinning$;
    /** @type {?} */
    NzSpinComponent.prototype.containerElement;
    /** @type {?} */
    NzSpinComponent.prototype.nestedElement;
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.elementRef;
    /** @type {?} */
    NzSpinComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3Bpbi9uei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBK0MvQyx5QkFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXJDdkUsaUJBQVksSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMseUJBQXlDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBSTdGLGNBQWtCLFNBQVMsQ0FBQztLQWlDM0I7SUE5QkQsc0JBQ0ksb0NBQU87Ozs7O1FBRFgsVUFDWSxLQUFhO1lBQ3ZCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEY7U0FDRjs7O09BQUE7SUFFRCxzQkFDSSx1Q0FBVTs7Ozs7UUFEZCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkM7OztPQUFBOzs7O0lBRUQscUNBQVc7OztJQUFYOztRQUNFLElBQU0sRUFBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7UUFDdEQsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztRQUM3RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7O1FBR3ZELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3JFO0tBQ0Y7Ozs7SUFLRCx5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFNBQVM7b0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsOCtCQUErQztpQkFDaEQ7Ozs7Z0JBbkJDLFVBQVU7Z0JBRVYsU0FBUzs7O21DQXFCUixTQUFTLFNBQUMsa0JBQWtCO2dDQUM1QixTQUFTLFNBQUMsZUFBZTs4QkFDekIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBRUwsS0FBSzs2QkFPTCxLQUFLOzswQkF4Q1I7O1NBd0JhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNFbXB0eSwgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3BpbicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3Bpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3BpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIHNwaW5uaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbiAgZGVib3VuY2VTcGlubmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNwaW5uaW5nJC5hc09ic2VydmFibGUoKS5waXBlKGRlYm91bmNlVGltZSgwKSk7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyRWxlbWVudCcpIGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbmVzdGVkRWxlbWVudCcpIG5lc3RlZEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRpcDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5kZWJvdW5jZVNwaW5uaW5nJCA9IHRoaXMuc3Bpbm5pbmckLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNwaW5uaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNwaW5uaW5nJC5uZXh0KHRvQm9vbGVhbih2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tOZXN0ZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IG5lc3RlZEVsZW1lbnQgPSB0aGlzLm5lc3RlZEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIC8qKiBubyB3YXkgdG8gZGV0ZWN0IGVtcHR5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xyXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvMTEyODAgKiovXHJcbiAgICBpZiAoIWlzRW1wdHkoY29udGFpbmVyRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCAnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5lc3RlZEVsZW1lbnQsICdhbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZWwsICdkaXNwbGF5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MobmVzdGVkRWxlbWVudCwgJ2FudC1zcGluLW5lc3RlZC1sb2FkaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja05lc3RlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=