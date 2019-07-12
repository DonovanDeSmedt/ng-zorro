/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { toNumber } from '../core/util/convert';
var NzBackTopComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzBackTopComponent(scrollSrv, doc, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this._visibilityHeight = 400;
        this.nzClick = new EventEmitter();
    }
    Object.defineProperty(NzBackTopComponent.prototype, "nzVisibilityHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visibilityHeight;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visibilityHeight = toNumber(value, 400);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBackTopComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.clickBackTop = /**
     * @return {?}
     */
    function () {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.removeListen = /**
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.registerScrollEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function () { return _this.handleScroll(); });
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    NzBackTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-back-top',
                    animations: [
                        trigger('enterLeave', [
                            transition(':enter', [
                                style({ opacity: 0 }),
                                animate(300, style({ opacity: 1 }))
                            ]),
                            transition(':leave', [
                                style({ opacity: 1 }),
                                animate(300, style({ opacity: 0 }))
                            ])
                        ])
                    ],
                    template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" [@enterLeave] *ngIf=\"visible\">\r\n  <ng-template #defaultContent>\r\n    <div class=\"ant-back-top-content\">\r\n      <div class=\"ant-back-top-icon\"></div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzBackTopComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    NzBackTopComponent.propDecorators = {
        nzTemplate: [{ type: Input }],
        nzVisibilityHeight: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }]
    };
    return NzBackTopComponent;
}());
export { NzBackTopComponent };
function NzBackTopComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBackTopComponent.prototype.scroll$;
    /** @type {?} */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype._visibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /** @type {?} */
    NzBackTopComponent.prototype.scrollSrv;
    /** @type {?} */
    NzBackTopComponent.prototype.doc;
    /** @type {?} */
    NzBackTopComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhY2stdG9wL256LWJhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBaUQ5QyxrQ0FBa0M7SUFDbEMsNEJBQW9CLFNBQTBCLEVBQTRCLEdBQVEsRUFBVSxFQUFxQjtRQUE3RixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7dUJBM0JqRixJQUFJO3NCQUNOLElBQUk7UUFFbEMsZUFBbUIsS0FBSyxDQUFDO2lDQUlXLEdBQUc7UUFpQnZDLGVBQW9ELElBQUksWUFBWSxFQUFFLENBQUM7S0FJdEU7SUFuQkQsc0JBQ0ksa0RBQWtCOzs7O1FBSXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7O1FBUEQsVUFDdUIsS0FB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Z0JBckJRLGVBQWU7Z0RBbUQyQixNQUFNLFNBQUMsUUFBUTtnQkFsRWhFLGlCQUFpQjs7OzZCQTRDaEIsS0FBSztxQ0FJTCxLQUFLOzJCQVNMLEtBQUs7MEJBTUwsTUFBTTs7NkJBeEVUOztTQThDYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYmFjay10b3AnLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1iYWNrLXRvcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QmFja1RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblxyXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIHByaXZhdGUgX3Zpc2liaWxpdHlIZWlnaHQ6IG51bWJlciA9IDQwMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpWaXNpYmlsaXR5SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3Zpc2liaWxpdHlIZWlnaHQgPSB0b051bWJlcih2YWx1ZSwgNDAwKTtcclxuICB9XHJcblxyXG4gIGdldCBuelZpc2liaWxpdHlIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmlsaXR5SGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNjcm9sbCQpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja0JhY2tUb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldFRhcmdldCgpLCAwKTtcclxuICAgIHRoaXMubnpDbGljay5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogSFRNTEVsZW1lbnQgfCBXaW5kb3cge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSA9PT0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0VGFyZ2V0KCkpID4gdGhpcy5uelZpc2liaWxpdHlIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcclxuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xyXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJykucGlwZSh0aHJvdHRsZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==