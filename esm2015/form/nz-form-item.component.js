/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzFormExplainComponent } from './nz-form-explain.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
export class NzFormItemComponent extends NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform);
        this.cdr = cdr;
        this._flex = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFlex(value) {
        this._flex = toBoolean(value);
        if (this._flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.listOfNzFormExplainComponent) {
            this.listOfNzFormExplainComponent.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.cdr.markForCheck();
            });
        }
    }
}
NzFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-item',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item]': 'true',
                    '[class.ant-form-item-with-help]': 'listOfNzFormExplainComponent && (listOfNzFormExplainComponent.length>0)'
                },
                styles: [`
      nz-form-item {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
NzFormItemComponent.propDecorators = {
    listOfNzFormExplainComponent: [{ type: ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }],
    nzFlex: [{ type: Input }]
};
function NzFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormItemComponent.prototype._flex;
    /** @type {?} */
    NzFormItemComponent.prototype.listOfNzFormExplainComponent;
    /** @type {?} */
    NzFormItemComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQXNCckUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7SUFjckQsWUFBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsd0JBQWtELEVBQUUsWUFBMEIsRUFBRSxNQUFjLEVBQUUsUUFBa0IsRUFBVSxHQUFzQjtRQUN6TSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRDZGLFFBQUcsR0FBSCxHQUFHLENBQW1CO3FCQWIzTCxLQUFLO0tBZXBCOzs7OztJQVpELElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRTtLQUNGOzs7O0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3JDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGNBQWM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELHFDQUFvRDtnQkFDcEQsSUFBSSxFQUFpQjtvQkFDbkIsdUJBQXVCLEVBQVksTUFBTTtvQkFDekMsaUNBQWlDLEVBQUUseUVBQXlFO2lCQUM3Rzt5QkFFRzs7OztLQUlEO2FBRUo7Ozs7WUFqQ0MsVUFBVTtZQUtWLFNBQVM7WUFJRix3QkFBd0I7WUFqQnhCLFlBQVk7WUFVbkIsTUFBTTtZQVRDLFFBQVE7WUFJZixpQkFBaUI7OzsyQ0F1Q2hCLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7cUJBRTdELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LXJvdy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekZvcm1FeHBsYWluQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50JztcclxuXHJcbi8qKiBzaG91bGQgYWRkIG56LXJvdyBkaXJlY3RpdmUgdG8gaG9zdCwgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvODc4NSAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0taXRlbScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbV0nICAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnbGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiAobGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudC5sZW5ndGg+MCknXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXHJcbiAgICAgIGBcclxuICAgICAgbnotZm9ybS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfZmxleCA9IGZhbHNlO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpGb3JtRXhwbGFpbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpGb3JtRXhwbGFpbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RmxleCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZmxleCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fZmxleCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIG1lZGlhTWF0Y2hlciwgbmdab25lLCBwbGF0Zm9ybSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudC5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19