/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from '../core/dom/reverse';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export class NzTimelineComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const modeChanges = changes["nzMode"];
        /** @type {?} */
        const reverseChanges = changes["nzReverse"];
        /** @type {?} */
        const pendingChanges = changes["nzPending"];
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges && reverseChanges.previousValue !== reverseChanges.currentValue && !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.updateChildren();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position = this.nzMode === 'left' || !this.nzMode
                    ? undefined
                    : this.nzMode === 'right'
                        ? 'right'
                        : this.nzMode === 'alternate' && index % 2 === 0 ? 'left' : 'right';
                item.detectChanges();
            });
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    reverseChildTimelineDots() {
        reverseChildNodes(/** @type {?} */ (this.timeline.nativeElement));
        this.updateChildren();
    }
}
NzTimelineComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                template: "<ul\r\n  class=\"ant-timeline\"\r\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\r\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\r\n  [class.ant-timeline-pending]=\"!!nzPending\"\r\n  [class.ant-timeline-reverse]=\"nzReverse\"\r\n  #timeline>\r\n  <!-- User inserted timeline dots. -->\r\n  <ng-content></ng-content>\r\n  <!-- Pending dot. -->\r\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\r\n    <div class=\"ant-timeline-item-tail\"></div>\r\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\r\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon type=\"loading\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"ant-timeline-item-content\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\r\n        {{ isPendingBoolean ? '' : nzPending }}\r\n      </ng-container>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"
            }] }
];
/** @nocollapse */
NzTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTimelineComponent.propDecorators = {
    timeline: [{ type: ViewChild, args: ['timeline',] }],
    listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
    _pendingContent: [{ type: ContentChild, args: ['pending',] }],
    nzMode: [{ type: Input }],
    nzPending: [{ type: Input }],
    nzPendingDot: [{ type: Input }],
    nzReverse: [{ type: Input }]
};
function NzTimelineComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimelineComponent.prototype.timeline;
    /** @type {?} */
    NzTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    NzTimelineComponent.prototype._pendingContent;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /** @type {?} */
    NzTimelineComponent.prototype.destroy$;
    /** @type {?} */
    NzTimelineComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWVsaW5lL256LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFXdkUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQWM5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQU4xQyxpQkFBOEIsS0FBSyxDQUFDO1FBRXBDLHdCQUE0QixLQUFLLENBQUM7d0JBRWYsSUFBSSxPQUFPLEVBQVE7S0FFUTs7Ozs7SUFFOUMsV0FBVyxDQUFDLE9BQXNCOztRQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLFdBQVE7O1FBQ25DLE1BQU0sY0FBYyxHQUFHLE9BQU8sY0FBVzs7UUFDekMsTUFBTSxjQUFjLEdBQUcsT0FBTyxjQUFXO1FBRXpDLElBQUksV0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO1lBQzFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksY0FBYyxJQUFJLGNBQWMsQ0FBQyxhQUFhLEtBQUssY0FBYyxDQUFDLFlBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNySCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztTQUM5RDtLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN4RSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTs7WUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUNwRCxDQUFDLENBQUMsU0FBUztvQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO3dCQUN2QixDQUFDLENBQUMsT0FBTzt3QkFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6Qjs7Ozs7SUFHSyx3QkFBd0I7UUFDOUIsaUJBQWlCLG1CQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBNEIsRUFBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7OztZQXZFekIsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLHVnQ0FBbUQ7YUFDcEQ7Ozs7WUE1QkMsaUJBQWlCOzs7dUJBOEJoQixTQUFTLFNBQUMsVUFBVTs2QkFDcEIsZUFBZSxTQUFDLHVCQUF1Qjs4QkFDdkMsWUFBWSxTQUFDLFNBQVM7cUJBRXRCLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHJldmVyc2VDaGlsZE5vZGVzIH0gZnJvbSAnLi4vY29yZS9kb20vcmV2ZXJzZSc7XHJcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelRpbWVsaW5lTW9kZSA9ICdsZWZ0JyB8ICdhbHRlcm5hdGUnIHwgJ3JpZ2h0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10aW1lbGluZScsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ3RpbWVsaW5lJykgdGltZWxpbmU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnKSBfcGVuZGluZ0NvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuek1vZGU6IE56VGltZWxpbmVNb2RlO1xyXG4gIEBJbnB1dCgpIG56UGVuZGluZzogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UGVuZGluZ0RvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpSZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGlzUGVuZGluZ0Jvb2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kZUNoYW5nZXMgPSBjaGFuZ2VzLm56TW9kZTtcclxuICAgIGNvbnN0IHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlcy5uelJldmVyc2U7XHJcbiAgICBjb25zdCBwZW5kaW5nQ2hhbmdlcyA9IGNoYW5nZXMubnpQZW5kaW5nO1xyXG5cclxuICAgIGlmIChtb2RlQ2hhbmdlcyAmJiAobW9kZUNoYW5nZXMucHJldmlvdXNWYWx1ZSAhPT0gbW9kZUNoYW5nZXMuY3VycmVudFZhbHVlIHx8IG1vZGVDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJldmVyc2VDaGFuZ2VzICYmIHJldmVyc2VDaGFuZ2VzLnByZXZpb3VzVmFsdWUgIT09IHJldmVyc2VDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAmJiAhcmV2ZXJzZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJzZUNoaWxkVGltZWxpbmVEb3RzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAocGVuZGluZ0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gcGVuZGluZ0NoYW5nZXMuY3VycmVudFZhbHVlID09PSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lICYmIHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoO1xyXG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaXNMYXN0ID0gIXRoaXMubnpSZXZlcnNlID8gaW5kZXggPT09IGxlbmd0aCAtIDEgOiBpbmRleCA9PT0gMDtcclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gdGhpcy5uek1vZGUgPT09ICdsZWZ0JyB8fCAhdGhpcy5uek1vZGVcclxuICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICA6IHRoaXMubnpNb2RlID09PSAncmlnaHQnXHJcbiAgICAgICAgICAgID8gJ3JpZ2h0J1xyXG4gICAgICAgICAgICA6IHRoaXMubnpNb2RlID09PSAnYWx0ZXJuYXRlJyAmJiBpbmRleCAlIDIgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgICAgIGl0ZW0uZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldmVyc2VDaGlsZFRpbWVsaW5lRG90cygpOiB2b2lkIHtcclxuICAgIHJldmVyc2VDaGlsZE5vZGVzKHRoaXMudGltZWxpbmUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==