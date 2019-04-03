/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopoverComponent } from './nz-popover.component';
export class NzPopoverDirective extends NzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
        super(elementRef, hostView, resolver, renderer, tooltip);
        this.factory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
}
NzPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popover]',
                host: {
                    '[class.ant-popover-open]': 'isTooltipOpen'
                }
            },] }
];
/** @nocollapse */
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopoverComponent, decorators: [{ type: Optional }] }
];
function NzPopoverDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopoverDirective.prototype.factory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wb3Zlci9uei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxrQkFBa0I7Ozs7Ozs7O0lBR3hELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUEyQjtRQUV2QyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBVDNELGVBQWdELElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQVV6Rzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLGVBQWU7aUJBQzVDO2FBQ0Y7Ozs7WUFiQyxVQUFVO1lBR1YsZ0JBQWdCO1lBTGhCLHdCQUF3QjtZQUl4QixTQUFTO1lBSUYsa0JBQWtCLHVCQWdCdEIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL256LXBvcG92ZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXBvcG92ZXJdJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwT3BlbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBEaXJlY3RpdmUge1xuICBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wb3ZlckNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56UG9wb3ZlckNvbXBvbmVudCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbHRpcDogTnpQb3BvdmVyQ29tcG9uZW50XG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXApO1xuICB9XG59XG4iXX0=