/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
    }
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then(function () {
                _this.radios.forEach(function (radio) {
                    radio.checked = radio.nzValue === _this.value;
                    if (isNotNil(_this.nzDisabled)) {
                        radio.nzDisabled = _this.nzDisabled;
                    }
                    if (_this.nzName) {
                        radio.name = _this.nzName;
                    }
                    radio.markForCheck();
                });
            });
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(takeUntil(_this.destroy$)).subscribe(function (radio) {
                if (_this.value !== radio.nzValue) {
                    _this.value = radio.nzValue;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            });
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(takeUntil(_this.destroy$)).subscribe(function () {
                Promise.resolve().then(function () { return _this.onTouched(); });
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzDisabled"] || changes["nzName"]) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-radio-group',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRadioGroupComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group]': 'true',
                        '[class.ant-radio-group-large]': "nzSize === 'large'",
                        '[class.ant-radio-group-small]': "nzSize === 'small'",
                        '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef(function () { return NzRadioComponent; }), { descendants: true },] }],
        nzDisabled: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzName: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
    return NzRadioGroupComponent;
}());
export { NzRadioGroupComponent };
function NzRadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioGroupComponent.prototype.value;
    /** @type {?} */
    NzRadioGroupComponent.prototype.destroy$;
    /** @type {?} */
    NzRadioGroupComponent.prototype.selectSubscription;
    /** @type {?} */
    NzRadioGroupComponent.prototype.touchedSubscription;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzName;
    /** @type {?} */
    NzRadioGroupComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInJhZGlvL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXVEdEQsK0JBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO3dCQTVCdkIsSUFBSSxPQUFPLEVBQUU7UUFHaEMsZ0JBQWdDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQzNDLGlCQUF3QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUduQyxxQkFBNkMsU0FBUyxDQUFDO1FBQ3ZELGNBQWlDLFNBQVMsQ0FBQztLQXFCMUM7Ozs7SUFsQkQsb0RBQW9COzs7SUFBcEI7UUFBQSxpQkFlQztRQWRDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcbmltcG9ydCB7IE56UmFkaW9Db21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZScgfCAnc29saWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXJhZGlvLWdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Hcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cF0nICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1sYXJnZV0nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNtYWxsXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc29saWRdJzogYG56QnV0dG9uU3R5bGUgPT09ICdzb2xpZCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc2VsZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSB0b3VjaGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgb25DaGFuZ2U6IChfOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHJhZGlvczogUXVlcnlMaXN0PE56UmFkaW9Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG56QnV0dG9uU3R5bGU6IE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJztcclxuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmFkaW9zKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvLm56VmFsdWUgPT09IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5uekRpc2FibGVkKSkge1xyXG4gICAgICAgICAgICByYWRpby5uekRpc2FibGVkID0gdGhpcy5uekRpc2FibGVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubnpOYW1lKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLm56TmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJhZGlvLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb3MuY2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8uc2VsZWN0JCkpLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICkuc3Vic2NyaWJlKChyYWRpbykgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSByYWRpby5uelZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gcmFkaW8ubnpWYWx1ZTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby50b3VjaGVkJCkpLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQgfHwgY2hhbmdlcy5uek5hbWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19