/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlName, NgControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
export class NzFormControlComponent extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} cdr
     */
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective);
        this.cdr = cdr;
        this._hasFeedback = false;
        this.controlClassMap = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValidateStatus(value) {
        if (value instanceof FormControl) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    validateControlStatus(status) {
        return this.validateControl && (this.validateControl.dirty || this.validateControl.touched) && (this.validateControl.status === status);
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        this.controlClassMap = {
            [`has-warning`]: this.validateString === 'warning',
            [`is-validating`]: this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING'),
            [`has-error`]: this.validateString === 'error' || this.validateControlStatus('INVALID'),
            [`has-success`]: this.validateString === 'success' || this.validateControlStatus('VALID'),
            [`has-feedback`]: this.nzHasFeedback
        };
        if (this.controlClassMap['has-warning']) {
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.controlClassMap['is-validating']) {
            this.iconType = 'loading';
        }
        else if (this.controlClassMap['has-error']) {
            this.iconType = 'close-circle-fill';
        }
        else if (this.controlClassMap['has-success']) {
            this.iconType = 'check-circle-fill';
        }
        else {
            this.iconType = '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.defaultValidateControl && (!this.validateControl) && (!this.validateString)) {
            this.nzValidateStatus = this.defaultValidateControl;
        }
    }
}
NzFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-control',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <ng-content select=\"nz-form-explain\"></ng-content>\r\n</div>",
                host: {
                    '[class.ant-form-item-control-wrapper]': 'true'
                },
                styles: [`
      nz-form-control {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl,] }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
function NzFormControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormControlComponent.prototype._hasFeedback;
    /** @type {?} */
    NzFormControlComponent.prototype.validateChanges;
    /** @type {?} */
    NzFormControlComponent.prototype.validateString;
    /** @type {?} */
    NzFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.defaultValidateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFvQi9ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjOzs7Ozs7OztJQWtGeEQsWUFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixtQkFBd0MsRUFBc0IsY0FBOEIsRUFBVSxHQUFzQjtRQUN0TyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRCtILFFBQUcsR0FBSCxHQUFHLENBQW1COzRCQWpGak4sS0FBSztRQUc1Qix1QkFBK0IsRUFBRSxDQUFDO0tBZ0ZqQzs7Ozs7SUEzRUQsSUFDSSxhQUFhLENBQUMsS0FBYztRQUM5QixJQUFJLENB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WUFBSSxJQUFJO1lBekh2SyxpQkFBaUI7OztxQ0E4Q2hCLFlBQVksU0FBQyxTQUFTOzRCQUV0QixLQUFLOytCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9uZy1jbGFzcyc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LWNvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQvbnotcm93LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tY29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJdJzogJ3RydWUnXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXHJcbiAgICAgIGBcclxuICAgICAgbnotZm9ybS1jb250cm9sIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG4gIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmc7XHJcbiAgY29udHJvbENsYXNzTWFwOiBOZ0NsYXNzVHlwZSA9IHt9O1xyXG4gIGljb25UeXBlOiBzdHJpbmc7XHJcbiAgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgZGVmYXVsdFZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekhhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcclxuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpXHJcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQ29udHJvbFN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVDb250cm9sICYmICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSAmJiAodGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sQ2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgYGhhcy13YXJuaW5nYCBdICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyxcclxuICAgICAgWyBgaXMtdmFsaWRhdGluZ2AgXTogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpLFxyXG4gICAgICBbIGBoYXMtZXJyb3JgIF0gICAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJyksXHJcbiAgICAgIFsgYGhhcy1zdWNjZXNzYCBdICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSxcclxuICAgICAgWyBgaGFzLWZlZWRiYWNrYCBdIDogdGhpcy5uekhhc0ZlZWRiYWNrXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsgJ2hhcy13YXJuaW5nJyBdKSB7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsgJ2lzLXZhbGlkYXRpbmcnIF0pIHtcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdsb2FkaW5nJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdoYXMtZXJyb3InIF0pIHtcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbENsYXNzTWFwWyAnaGFzLXN1Y2Nlc3MnIF0pIHtcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjaGVjay1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQsIG56Um93RGlyZWN0aXZlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sICYmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpICYmICghdGhpcy52YWxpZGF0ZVN0cmluZykpIHtcclxuICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=