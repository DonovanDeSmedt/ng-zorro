/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { NzToolTipComponent } from './nz-tooltip.component';
var NzTooltipDirective = /** @class */ (function () {
    function NzTooltipDirective(elementRef, hostView, resolver, renderer, tooltip) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.tooltip = tooltip;
        // [NOTE] Here hard coded, and nzTitle used only under NzTooltipDirective currently.
        this.isTooltipOpen = false;
        this.isDynamicTooltip = false; // Indicate whether current tooltip is dynamic created
        this.factory = this.resolver.resolveComponentFactory(NzToolTipComponent);
        /**
         * Names of properties that should be proxy to child component.
         */
        this.needProxyProperties = [
            'nzTitle',
            'nzContent',
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzTrigger',
            'nzPlacement'
        ];
        this.subs_ = new Subscription();
        this.nzVisibleChange = new EventEmitter();
    }
    Object.defineProperty(NzTooltipDirective.prototype, "setTitle", {
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) { this.nzTitle = title; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateProxies(changes);
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            this.needProxyProperties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            /** @type {?} */
            var visible_ = this.tooltip.nzVisibleChange.pipe(distinctUntilChanged()).subscribe(function (data) {
                _this.visible = data;
                _this.nzVisibleChange.emit(data);
            });
            this.subs_.add(visible_);
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip.nzTrigger === 'hover') {
            /** @type {?} */
            var overlayElement_1 = void 0;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', function () { return _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay); });
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.renderer.listen(overlayElement_1, 'mouseenter', function () { return _this.delayEnterLeave(false, true); });
                    _this.renderer.listen(overlayElement_1, 'mouseleave', function () { return _this.delayEnterLeave(false, false); });
                }
            });
        }
        else if (this.tooltip.nzTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', function () { return _this.show(); });
            this.renderer.listen(this.elementRef.nativeElement, 'blur', function () { return _this.hide(); });
        }
        else if (this.tooltip.nzTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
                _this.show();
            });
        }
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzTooltipDirective.prototype.updateCompValue = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.tooltip.show();
        this.isTooltipOpen = true;
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    };
    /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzTooltipDirective.prototype.delayEnterLeave = /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) { // Clear timer during the delay time
            // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(function () {
                _this.delayTimer = null;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    };
    /**
     * Set inputs of child components when this component's inputs change.
     * @param {?} changes
     * @return {?}
     */
    NzTooltipDirective.prototype.updateProxies = /**
     * Set inputs of child components when this component's inputs change.
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.tooltip) {
            Object.keys(changes).forEach(function (key) {
                /** @type {?} */
                var change = changes[key];
                if (change) {
                    _this.updateCompValue(key, change.currentValue);
                }
            });
        }
    };
    NzTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tooltip]',
                    host: {
                        '[class.ant-tooltip-open]': 'isTooltipOpen'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzToolTipComponent, decorators: [{ type: Optional }] }
    ]; };
    NzTooltipDirective.propDecorators = {
        nzVisibleChange: [{ type: Output }],
        nzTitle: [{ type: Input, args: ['nz-tooltip',] }],
        setTitle: [{ type: Input, args: ['nzTitle',] }],
        nzContent: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzTooltipDirective;
}());
export { NzTooltipDirective };
function NzTooltipDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTooltipDirective.prototype.isTooltipOpen;
    /** @type {?} */
    NzTooltipDirective.prototype.isDynamicTooltip;
    /** @type {?} */
    NzTooltipDirective.prototype.delayTimer;
    /** @type {?} */
    NzTooltipDirective.prototype.visible;
    /** @type {?} */
    NzTooltipDirective.prototype.factory;
    /**
     * Names of properties that should be proxy to child component.
     * @type {?}
     */
    NzTooltipDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzTooltipDirective.prototype.subs_;
    /** @type {?} */
    NzTooltipDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipDirective.prototype.nzTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.nzContent;
    /** @type {?} */
    NzTooltipDirective.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipDirective.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipDirective.prototype.nzTrigger;
    /** @type {?} */
    NzTooltipDirective.prototype.nzVisible;
    /** @type {?} */
    NzTooltipDirective.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipDirective.prototype.elementRef;
    /** @type {?} */
    NzTooltipDirective.prototype.hostView;
    /** @type {?} */
    NzTooltipDirective.prototype.resolver;
    /** @type {?} */
    NzTooltipDirective.prototype.renderer;
    /** @type {?} */
    NzTooltipDirective.prototype.tooltip;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQTRDMUQsNEJBQ1MsWUFDQSxVQUNBLFVBQ0EsVUFDWSxPQUEyQjtRQUp2QyxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNJLFlBQU8sR0FBUCxPQUFPLENBQW9COztRQXZDaEQscUJBQXlCLEtBQUssQ0FBQztRQUMvQix3QkFBbUIsS0FBSyxDQUFDO1FBR3pCLGVBQWdELElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7OztRQUcxRywyQkFBZ0M7WUFDOUIsU0FBUztZQUNULFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFdBQVc7WUFDWCxhQUFhO1NBQ2QsQ0FBQztRQUVGLGFBQWtCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsdUJBQXFDLElBQUksWUFBWSxFQUFXLENB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RSxDQUFDO2dCQUM5QixJQUFJLE1BQU0sRUFBRTtvQkFDVixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2hEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7OztnQkEvSUosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osMEJBQTBCLEVBQUUsZUFBZTtxQkFDNUM7aUJBQ0Y7Ozs7Z0JBeEJDLFVBQVU7Z0JBVVYsZ0JBQWdCO2dCQVpoQix3QkFBd0I7Z0JBVXhCLFNBQVM7Z0JBU0Ysa0JBQWtCLHVCQWlEdEIsUUFBUTs7O2tDQWxCVixNQUFNOzBCQUVOLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSztxQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7OzZCQWhFUjs7U0E4QmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgTnpUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9uei10b29sdGlwLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei10b29sdGlwXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBPcGVuJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIFtOT1RFXSBIZXJlIGhhcmQgY29kZWQsIGFuZCBuelRpdGxlIHVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxyXG4gIGlzVG9vbHRpcE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgY3VycmVudCB0b29sdGlwIGlzIGR5bmFtaWMgY3JlYXRlZFxyXG4gIGRlbGF5VGltZXI7IC8vIFRpbWVyIGZvciBkZWxheSBlbnRlci9sZWF2ZVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelRvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelRvb2xUaXBDb21wb25lbnQpO1xyXG5cclxuICAvKiogTmFtZXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSBwcm94eSB0byBjaGlsZCBjb21wb25lbnQuICovXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpUaXRsZScsXHJcbiAgICAnbnpDb250ZW50JyxcclxuICAgICduek92ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcclxuICAgICduek1vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ256VmlzaWJsZScsXHJcbiAgICAnbnpUcmlnZ2VyJyxcclxuICAgICduelBsYWNlbWVudCdcclxuICBdO1xyXG5cclxuICBwcm90ZWN0ZWQgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgnbnotdG9vbHRpcCcpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgnbnpUaXRsZScpIHNldCBzZXRUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHsgdGhpcy5uelRpdGxlID0gdGl0bGU7IH1cclxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56VmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuelBsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHVibGljIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB0b29sdGlwOiBOelRvb2xUaXBDb21wb25lbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlUHJveGllcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gU3VwcG9ydCBmYXN0ZXIgdG9vbHRpcCBtb2RlOiA8YSBuei10b29sdGlwPVwieHh4XCI+PC9hPi4gW05PVEVdIFVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcclxuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBDb21wb25lbnQuaW5zdGFuY2U7XHJcbiAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdoZW4gdXNlIGRpcmVjdGl2ZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTk2N1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XHJcbiAgICAgIHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlQ29tcFZhbHVlKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XHJcbiAgICAgIGNvbnN0IHZpc2libGVfID0gdGhpcy50b29sdGlwLm56VmlzaWJsZUNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnN1YnNfLmFkZCh2aXNpYmxlXyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXAubnpUcmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHsgLy8gTk9URTogd2UgYmluZCBldmVudHMgdW5kZXIgXCJtb3VzZWxlYXZlXCIgZHVlIHRvIHRoZSBvdmVybGF5UmVmIGlzIG9ubHkgY3JlYXRlZCBhZnRlciB0aGUgb3ZlcmxheSB3YXMgY29tcGxldGVseSBzaG93biB1cFxyXG4gICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSB0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5uelRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb2N1cycsICgpID0+IHRoaXMuc2hvdygpKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAubnpUcmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic18udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcm90ZWN0ZWQgdXBkYXRlQ29tcFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0R5bmFtaWNUb29sdGlwICYmIGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBbIGtleSBdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xyXG4gICAgdGhpcy5pc1Rvb2x0aXBPcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHsgLy8gQ2xlYXIgdGltZXIgZHVyaW5nIHRoZSBkZWxheSB0aW1lXHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBpbnB1dHMgb2YgY2hpbGQgY29tcG9uZW50cyB3aGVuIHRoaXMgY29tcG9uZW50J3MgaW5wdXRzIGNoYW5nZS5cclxuICAgKiBAcGFyYW0gY2hhbmdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBkYXRlUHJveGllcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzWyBrZXkgXTtcclxuICAgICAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShrZXksIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==