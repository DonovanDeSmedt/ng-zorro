/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzStepComponent } from './nz-step.component';
export class NzStepsComponent {
    constructor() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.showProcessDot = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzStartIndex"] || changes["nzDirection"] || changes["nzStatus"] || changes["nzCurrent"]) {
            this.updateChildrenSteps();
        }
        if (changes["nzDirection"] || changes["nzProgressDot"] || changes["nzLabelPlacement"] || changes["nzSize"]) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
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
    ngAfterContentInit() {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.destroy$)).subscribe(this.updateChildrenSteps);
        }
    }
    /**
     * @return {?}
     */
    updateChildrenSteps() {
        if (this.steps) {
            /** @type {?} */
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.detectChanges();
                });
            });
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small'
        };
    }
}
NzStepsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>"
            }] }
];
NzStepsComponent.propDecorators = {
    steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
    nzCurrent: [{ type: Input }],
    nzDirection: [{ type: Input }],
    nzLabelPlacement: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzStartIndex: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzProgressDot: [{ type: Input }]
};
function NzStepsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.nzCurrent;
    /** @type {?} */
    NzStepsComponent.prototype.nzDirection;
    /** @type {?} */
    NzStepsComponent.prototype.nzLabelPlacement;
    /** @type {?} */
    NzStepsComponent.prototype.nzSize;
    /** @type {?} */
    NzStepsComponent.prototype.nzStartIndex;
    /** @type {?} */
    NzStepsComponent.prototype.nzStatus;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.classMap;
    /** @type {?} */
    NzStepsComponent.prototype.destroy$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInN0ZXBzL256LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFJTCxTQUFTLEVBRVQsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWXRELE1BQU0sT0FBTyxnQkFBZ0I7O1FBRzNCLGlCQUFxQixDQUFDLENBQUM7UUFDdkIsbUJBQXdDLFlBQVksQ0FBQztRQUNyRCx3QkFBdUQsWUFBWSxDQUFDO1FBQ3BFLGNBQWdDLFNBQVMsQ0FBQztRQUMxQyxvQkFBd0IsQ0FBQyxDQUFDO1FBQzFCLGdCQUFrQyxTQUFTLENBQUM7UUFZNUMsc0JBQWlCLEtBQUssQ0FBQzt3QkFLSixJQUFJLE9BQU8sRUFBUTs7Ozs7O0lBZnRDLElBQ0ksYUFBYSxDQUFDLEtBQTZGO1FBQzdHLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7OztJQVFELFdBQVcsQ0FBQyxPQUFzQjtRQUNo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QUMvQixxR0FBZ0Q7YUFDakQ7OztvQkFFRSxlQUFlLFNBQUMsZUFBZTt3QkFFL0IsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQ2xhc3NNYXAgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOelNpemVEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBOelN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXN0ZXAuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zdGVwcycsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3RlcHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOelN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TnpTdGVwQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbnpDdXJyZW50ID0gMDtcclxuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpTdGFydEluZGV4ID0gMDtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpTdGF0dXNUeXBlID0gJ3Byb2Nlc3MnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelByb2dyZXNzRG90KHZhbHVlOiBib29sZWFuIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xyXG4gIH1cclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG4gIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PjtcclxuXHJcbiAgY2xhc3NNYXA6IENsYXNzTWFwO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpTdGFydEluZGV4IHx8IGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelN0YXR1cyB8fCBjaGFuZ2VzLm56Q3VycmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLm56TGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5uelNpemUpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgIGlmICh0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIHRoaXMuc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcclxuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5uelN0YXR1cztcclxuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMubnpEaXJlY3Rpb247XHJcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLm56U3RhcnRJbmRleDtcclxuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5uekN1cnJlbnQ7XHJcbiAgICAgICAgICBzdGVwLmxhc3QgPSBsZW5ndGggPT09IGluZGV4ICsgMTtcclxuICAgICAgICAgIHN0ZXAuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbIGBhbnQtc3RlcHMtJHt0aGlzLm56RGlyZWN0aW9ufWAgXTogdHJ1ZSxcclxuICAgICAgWyBgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgIF0gICA6IHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcclxuICAgICAgWyBgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYCBdICAgICA6ICh0aGlzLnNob3dQcm9jZXNzRG90IHx8IHRoaXMubnpMYWJlbFBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykgJiYgdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbIGBhbnQtc3RlcHMtZG90YCBdICAgICAgICAgICAgICAgIDogdGhpcy5zaG93UHJvY2Vzc0RvdCxcclxuICAgICAgWyAnYW50LXN0ZXBzLXNtYWxsJyBdICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=