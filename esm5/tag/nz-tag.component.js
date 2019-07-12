/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer) {
        this.renderer = renderer;
        this.closed = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @param {?=} color
     * @return {?}
     */
    NzTagComponent.prototype.isPresetColor = /**
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var isPresetColor = this.isPresetColor(this.nzColor);
        this.classMap = (_a = {},
            _a["ant-tag"] = true,
            _a["ant-tag-has-color"] = this.nzColor && !isPresetColor,
            _a["ant-tag-" + this.nzColor] = isPresetColor,
            _a["ant-tag-checkable"] = this.nzMode === 'checkable',
            _a["ant-tag-checkable-checked"] = this.nzChecked,
            _a);
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateColorStatus = /**
     * @return {?}
     */
    function () {
        if (this.wrapperElement && this.nzColor) {
            if (this.isPresetColor(this.nzColor)) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.nzColor);
            }
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.closed && !e.fromState) {
            this.nzAfterClose.emit();
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTagComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzColor"]) {
            this.updateColorStatus();
        }
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateColorStatus();
    };
    NzTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tag',
                    preserveWhitespaces: false,
                    animations: [trigger('tagAnimation', [
                            state('*', style({ opacity: 1 })),
                            transition('void => *', [
                                style({ opacity: 0 }),
                                animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                            ]),
                            state('void', style({ opacity: 0 })),
                            transition('* => void', [
                                style({ opacity: 1 }),
                                animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                            ])
                        ])],
                    template: "<div\r\n  *ngIf=\"!closed\"\r\n  [ngClass]=\"classMap\"\r\n  #wrapperElement\r\n  [@tagAnimation]\r\n  (@tagAnimation.done)=\"afterAnimation($event)\"\r\n  (click)=\"updateCheckedStatus()\">\r\n  <ng-content></ng-content>\r\n  <i nz-icon type=\"close\" *ngIf=\"nzMode==='closeable'\" (click)=\"closeTag($event)\"></i>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzTagComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzTagComponent.propDecorators = {
        wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
        nzMode: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzAfterClose: [{ type: Output }],
        nzOnClose: [{ type: Output }],
        nzCheckedChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTagComponent.prototype, "nzChecked", void 0);
    return NzTagComponent;
}());
export { NzTagComponent };
function NzTagComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTagComponent.prototype.classMap;
    /** @type {?} */
    NzTagComponent.prototype.closed;
    /** @type {?} */
    NzTagComponent.prototype.wrapperElement;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTagComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWcvbnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFrQ2xELHdCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWHZDLGNBQVMsS0FBSyxDQUFDO1FBSWYsY0FBMkIsU0FBUyxDQUFDO1FBRXJDLGlCQUE4QyxLQUFLLENBQUM7UUFDcEQsb0JBQWtDLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0QsaUJBQStCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUQsdUJBQXFDLElBQUksWUFBWSxFQUFXLENBQUM7S0FFckI7Ozs7O0lBRXBDLHNDQUFhOzs7O2NBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FDTCxpR0FBaUc7YUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNiLENBQUM7Ozs7O0lBR0ksdUNBQWM7Ozs7OztRQUNwQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUTtZQUNYLEdBQUUsU0FBUyxJQUFzQixJQUFJO1lBQ3JDLEdBQUUsbUJBQW1C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QUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7aUJBQzVDOzs7O2dCQTNCQyxTQUFTOzs7aUNBZ0NSLFNBQVMsU0FBQyxnQkFBZ0I7eUJBRTFCLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLE1BQU07NEJBQ04sTUFBTTtrQ0FDTixNQUFNOzs7UUFIRyxZQUFZLEVBQUU7Ozt5QkF0RDFCOztTQThDYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICBBbmltYXRpb25FdmVudFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnVHlwZSA9ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgdHJpZ2dlcigndGFnQW5pbWF0aW9uJywgW1xyXG4gICAgc3RhdGUoJyonLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxyXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScpXHJcbiAgICBdKSxcclxuICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxyXG4gICAgICBhbmltYXRlKCczMDBtcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiknKVxyXG4gICAgXSlcclxuICBdKSBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIGNsYXNzTWFwO1xyXG4gIGNsb3NlZCA9IGZhbHNlO1xyXG5cclxuICBAVmlld0NoaWxkKCd3cmFwcGVyRWxlbWVudCcpIHByaXZhdGUgd3JhcHBlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIG56TW9kZTogVGFnVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBwcml2YXRlIGlzUHJlc2V0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgL14ocGlua3xyZWR8eWVsbG93fG9yYW5nZXxjeWFufGdyZWVufGJsdWV8cHVycGxlfGdlZWtibHVlfG1hZ2VudGF8dm9sY2Fub3xnb2xkfGxpbWUpKC1pbnZlcnNlKT8kL1xyXG4gICAgICAudGVzdChjb2xvcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNQcmVzZXRDb2xvciA9IHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLm56Q29sb3IpO1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgWyBgYW50LXRhZ2AgXSAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgYW50LXRhZy1oYXMtY29sb3JgIF0gICAgICAgIDogdGhpcy5uekNvbG9yICYmICFpc1ByZXNldENvbG9yLFxyXG4gICAgICBbIGBhbnQtdGFnLSR7dGhpcy5uekNvbG9yfWAgXSAgOiBpc1ByZXNldENvbG9yLFxyXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZWAgXSAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScsXHJcbiAgICAgIFsgYGFudC10YWctY2hlY2thYmxlLWNoZWNrZWRgIF06IHRoaXMubnpDaGVja2VkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDb2xvclN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLndyYXBwZXJFbGVtZW50ICYmIHRoaXMubnpDb2xvcikge1xyXG4gICAgICBpZiAodGhpcy5pc1ByZXNldENvbG9yKHRoaXMubnpDb2xvcikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMud3JhcHBlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMud3JhcHBlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLm56Q29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJykge1xyXG4gICAgICB0aGlzLm56Q2hlY2tlZCA9ICF0aGlzLm56Q2hlY2tlZDtcclxuICAgICAgdGhpcy5uekNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q2hlY2tlZCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVGFnKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoZSk7XHJcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xvc2VkICYmICFlLmZyb21TdGF0ZSkge1xyXG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29sb3IpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb2xvclN0YXR1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDb2xvclN0YXR1cygpO1xyXG4gIH1cclxufVxyXG4iXX0=