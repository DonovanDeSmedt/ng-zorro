/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Host, HostBinding, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
export class NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if ((typeof (this[name]) === 'number') || (typeof (this[name]) === 'string')) {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name].span}`] = this[name] && isNotNil(this[name].span);
                    listClassMap[`${this.prefixCls}-${sizeName}-pull-${this[name].pull}`] = this[name] && isNotNil(this[name].pull);
                    listClassMap[`${this.prefixCls}-${sizeName}-push-${this[name].push}`] = this[name] && isNotNil(this[name].push);
                    listClassMap[`${this.prefixCls}-${sizeName}-offset-${this[name].offset}`] = this[name] && isNotNil(this[name].offset);
                    listClassMap[`${this.prefixCls}-${sizeName}-order-${this[name].order}`] = this[name] && isNotNil(this[name].order);
                }
            }
        });
        return listClassMap;
    }
    /**
     * @return {?}
     */
    get nzRow() {
        return this.nzRowComponent || this.nzRowDirective;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
NzColComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-col',
                providers: [NzUpdateHostClassService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzColComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
];
NzColComponent.propDecorators = {
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCcEQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFvRXpCLFlBQW9CLHdCQUFrRCxFQUFVLFVBQXNCLEVBQTZCLGNBQThCLEVBQTZCLGNBQThCO1FBQXhNLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7a0JBbkVsTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7eUJBQ25DLFNBQVM7S0FtRTVCOzs7O0lBakVELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7S0FDbEQ7Ozs7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQWVELFdBQVc7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O29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuXHJcbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcclxuICBzcGFuOiBudW1iZXI7XHJcbiAgcHVsbDogbnVtYmVyO1xyXG4gIHB1c2g6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuICBvcmRlcjogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY29sJyxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNvbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcclxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpSb3cgJiYgdGhpcy5uelJvdy5hY3R1YWxHdXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U3Bhbn1gIF0gICAgICAgICA6IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tb3JkZXItJHt0aGlzLm56T3JkZXJ9YCBdICA6IGlzTm90TmlsKHRoaXMubnpPcmRlciksXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YCBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMubnpQdWxsfWAgXSAgICA6IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVzaC0ke3RoaXMubnpQdXNofWAgXSAgICA6IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcclxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZSA9IFsgJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCcgXTtcclxuICAgIGNvbnN0IGxpc3RDbGFzc01hcCA9IHt9O1xyXG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbIG5hbWUgXSkpIHtcclxuICAgICAgICBpZiAoKHR5cGVvZiAodGhpc1sgbmFtZSBdKSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgKHRoaXNbIG5hbWUgXSkgPT09ICdzdHJpbmcnKSkge1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzWyBuYW1lIF19YCBdID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzWyBuYW1lIF0uc3Bhbn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnNwYW4pO1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tcHVsbC0ke3RoaXNbIG5hbWUgXS5wdWxsfWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ucHVsbCk7XHJcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdXNoLSR7dGhpc1sgbmFtZSBdLnB1c2h9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdXNoKTtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9mZnNldC0ke3RoaXNbIG5hbWUgXS5vZmZzZXR9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5vZmZzZXQpO1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tb3JkZXItJHt0aGlzWyBuYW1lIF0ub3JkZXJ9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5vcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Um93KCk6IE56Um93Q29tcG9uZW50IHtcclxuICAgIHJldHVybiB0aGlzLm56Um93Q29tcG9uZW50IHx8IHRoaXMubnpSb3dEaXJlY3RpdmU7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFsgcHJvcGVydHlOYW1lOiBzdHJpbmcgXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=