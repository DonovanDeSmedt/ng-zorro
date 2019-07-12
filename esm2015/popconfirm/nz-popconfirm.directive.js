/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
export class NzPopconfirmDirective extends NzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
        super(elementRef, hostView, resolver, renderer, tooltip);
        this.factory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this.needProxyProperties = [
            'nzTitle',
            'nzContent',
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzTrigger',
            'nzPlacement',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition'
        ];
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            this.needProxyProperties.forEach(property => this.updateCompValue(property, this[property]));
            /** @type {?} */
            const visible_ = this.tooltip.nzVisibleChange.pipe(distinctUntilChanged()).subscribe(data => {
                this.visible = data;
                this.nzVisibleChange.emit(data);
            });
            /** @type {?} */
            const cancel_ = (/** @type {?} */ (this.tooltip)).nzOnCancel.subscribe(() => {
                this.nzOnCancel.emit();
            });
            /** @type {?} */
            const confirm_ = (/** @type {?} */ (this.tooltip)).nzOnConfirm.subscribe(() => {
                this.nzOnConfirm.emit();
            });
            this.subs_.add(visible_);
            this.subs_.add(cancel_);
            this.subs_.add(confirm_);
        }
        this.tooltip.setOverlayOrigin(this);
    }
}
NzPopconfirmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popconfirm]',
                host: {
                    '[class.ant-popover-open]': 'isTooltipOpen'
                }
            },] }
];
/** @nocollapse */
NzPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopconfirmComponent, decorators: [{ type: Optional }] }
];
NzPopconfirmDirective.propDecorators = {
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
function NzPopconfirmDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopconfirmDirective.prototype.factory;
    /** @type {?} */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRbEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjs7Ozs7Ozs7SUEwQjNELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QjtRQUUxQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBaEMzRCxlQUFtRCxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFaEgsMkJBQWdDO1lBQzlCLFNBQVM7WUFDVCxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxXQUFXO1lBQ1gsYUFBYTtZQUNiLFVBQVU7WUFDVixVQUFVO1lBQ1YsY0FBYztZQUNkLGFBQWE7U0FDZCxDQUFDO1FBTUYsa0JBQWdDLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekQsbUJBQWlDLElBQUksWUFBWSxFQUFRLENBQUM7S0FVekQ7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O1lBQ2pCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztZQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUUsUUFBUSxDQUFFLENBQUMsQ0FBQyxDQUFDOztZQUMvRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQzs7WUFDSCxNQUFNLE9BQU8sR0FBRyxtQkFBQyxJQUFJLENBQUMsT0FBZ0MsRUFBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FBQzs7WUFDSCxNQUFNLFFBQVEsR0FBRyxtQkFBQyxJQUFJLENBQUMsT0FBZ0MsRUFBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNsRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsZUFBZTtpQkFDNUM7YUFDRjs7OztZQXJCQyxVQUFVO1lBT1YsZ0JBQWdCO1lBVGhCLHdCQUF3QjtZQVF4QixTQUFTO1lBUUYscUJBQXFCLHVCQXVDekIsUUFBUTs7O3VCQVpWLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsTUFBTTswQkFDTixNQUFNOzs7SUFGRyxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcG9wY29uZmlybV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwT3BlbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3Bjb25maXJtQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpQb3Bjb25maXJtQ29tcG9uZW50KTtcclxuXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpUaXRsZScsXHJcbiAgICAnbnpDb250ZW50JyxcclxuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcclxuICAgICduek1vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ256VmlzaWJsZScsXHJcbiAgICAnbnpUcmlnZ2VyJyxcclxuICAgICduelBsYWNlbWVudCcsXHJcbiAgICAnbnpPa1RleHQnLFxyXG4gICAgJ256T2tUeXBlJyxcclxuICAgICduekNhbmNlbFRleHQnLFxyXG4gICAgJ256Q29uZGl0aW9uJ1xyXG4gIF07XHJcblxyXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPa1R5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb25kaXRpb246IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Db25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgdG9vbHRpcDogTnpQb3Bjb25maXJtQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0b29sdGlwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcclxuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBDb21wb25lbnQuaW5zdGFuY2U7XHJcbiAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdoZW4gdXNlIGRpcmVjdGl2ZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTk2N1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XHJcbiAgICAgIHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlQ29tcFZhbHVlKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XHJcbiAgICAgIGNvbnN0IHZpc2libGVfID0gdGhpcy50b29sdGlwLm56VmlzaWJsZUNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjYW5jZWxfID0gKHRoaXMudG9vbHRpcCBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25DYW5jZWwuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm56T25DYW5jZWwuZW1pdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgY29uZmlybV8gPSAodGhpcy50b29sdGlwIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNvbmZpcm0uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3Vic18uYWRkKHZpc2libGVfKTtcclxuICAgICAgdGhpcy5zdWJzXy5hZGQoY2FuY2VsXyk7XHJcbiAgICAgIHRoaXMuc3Vic18uYWRkKGNvbmZpcm1fKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=