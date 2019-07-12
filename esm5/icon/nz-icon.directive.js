/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
var iconTypeRE = /^anticon\-\w/;
/** @type {?} */
var getIconTypeClass = function (className) {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        var classArr = className.split(/\s/);
        /** @type {?} */
        var index = classArr.findIndex((function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
        return index === -1 ? undefined : { name: classArr[index], index: index };
    }
};
var ɵ0 = getIconTypeClass;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(iconService, elementRef, renderer) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.spin = false;
        _this.el = _this.elementRef.nativeElement;
        return _this;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param {?=} oldAPI
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @param {?=} oldAPI
     * @return {?}
     */
    function (oldAPI) {
        var _this = this;
        if (oldAPI === void 0) { oldAPI = false; }
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then(function (svg) {
            _this.setSVGData(svg);
            if (!oldAPI) {
                _this.toggleSpin(svg);
            }
        }).catch(function (err) {
            if (err) {
                console.error(err);
                console.warn('[NG-ZORRO]', "You can find more about this error on http://ng.ant.design/components/icon/en");
            }
        });
    };
    /**
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype.classChangeHandler = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        /** @type {?} */
        var ret = getIconTypeClass(className);
        if (ret) {
            /** @type {?} */
            var type = ret.name.replace('anticon-', '');
            if (type.includes('verticle')) {
                type = type.replace('verticle', 'vertical');
                this.iconService.warnAPI('cross');
            }
            if (type.startsWith('cross')) {
                type = type.replace('cross', 'close');
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this.type = type;
                this.changeIcon2(true);
            }
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.toggleSpin = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @return {?}
     */
    function () {
        if (typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            var ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string') {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.iconfont) {
            this.changeIcon2();
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            // Add `class` mutation observer.
            this.classNameObserver = new MutationObserver(function (mutations) {
                mutations
                    .filter(function (mutation) { return mutation.attributeName === 'class'; })
                    .forEach(function (mutation) { return _this.classChangeHandler((/** @type {?} */ (mutation.target)).className); });
            });
            this.classNameObserver.observe(this.el, { attributes: true });
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = this.el.children;
        /** @type {?} */
        var length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                var child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement(/** @type {?} */ (child));
                }
            }
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzIconDirective.propDecorators = {
        spin: [{ type: Input }],
        iconfont: [{ type: Input }]
    };
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
function NzIconDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconDirective.prototype.spin;
    /** @type {?} */
    NzIconDirective.prototype.iconfont;
    /** @type {?} */
    NzIconDirective.prototype.classNameObserver;
    /** @type {?} */
    NzIconDirective.prototype.el;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaWNvbi9uei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFbEQsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDOztBQUVsQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsU0FBaUI7SUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO1NBQU07O1FBQ0wsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDdkMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUMsQ0FBQztRQUNsSCxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztLQUNwRTtDQUNGLENBQUM7Ozs7Ozs7Ozs7SUFZbUMsMkNBQWE7SUF5RWhELHlCQUFtQixXQUEwQixFQUFTLFVBQXNCLEVBQVMsUUFBbUI7UUFBeEcsWUFDRSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFB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QztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxFQUFFLEVBQUU7O2dCQUNmLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQUMsS0FBbUIsRUFBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7S0FDRjs7Z0JBaElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7OztnQkF2QlEsYUFBYTtnQkFScEIsVUFBVTtnQkFLVixTQUFTOzs7dUJBNEJSLEtBQUs7MkJBQ0wsS0FBSzs7MEJBdENSO0VBb0NxQyxhQUFhO1NBQXJDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGlzRGV2TW9kZSxcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBpY29uVHlwZVJFID0gL15hbnRpY29uXFwtXFx3LztcclxuXHJcbmNvbnN0IGdldEljb25UeXBlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlciB9ID0+IHtcclxuICBpZiAoIWNsYXNzTmFtZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgY2xhc3NBcnIgPSBjbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgY29uc3QgaW5kZXggPSBjbGFzc0Fyci5maW5kSW5kZXgoKGNscyA9PiBjbHMgIT09ICdhbnRpY29uJyAmJiBjbHMgIT09ICdhbnRpY29uLXNwaW4nICYmICEhY2xzLm1hdGNoKGljb25UeXBlUkUpKSk7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IC0xID8gdW5kZWZpbmVkIDogeyBuYW1lOiBjbGFzc0FycltpbmRleF0sIGluZGV4IH07XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxyXG4gKlxyXG4gKiAtIEljb25Gb250IHN1cHBvcnRcclxuICogLSBzcGlubmluZ1xyXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eVxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpLmFudGljb24sIFtuei1pY29uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBzcGluID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbmZvbnQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxyXG4gICAqIEBwYXJhbSBvbGRBUElcclxuICAgKi9cclxuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIW9sZEFQSSkgeyB0aGlzLnNldENsYXNzTmFtZSgpOyB9XHJcbiAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbihzdmcgPT4ge1xyXG4gICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnKTtcclxuICAgICAgaWYgKCFvbGRBUEkpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNwaW4oc3ZnKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybignW05HLVpPUlJPXScsIGBZb3UgY2FuIGZpbmQgbW9yZSBhYm91dCB0aGlzIGVycm9yIG9uIGh0dHA6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi9lbmApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICBpZiAocmV0KSB7XHJcbiAgICAgIGxldCB0eXBlID0gcmV0Lm5hbWUucmVwbGFjZSgnYW50aWNvbi0nLCAnJyk7XHJcbiAgICAgIGlmICh0eXBlLmluY2x1ZGVzKCd2ZXJ0aWNsZScpKSB7XHJcbiAgICAgICAgdHlwZSA9IHR5cGUucmVwbGFjZSgndmVydGljbGUnLCAndmVydGljYWwnKTtcclxuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgnY3Jvc3MnKSkge1xyXG4gICAgICAgIHR5cGUgPSB0eXBlLnJlcGxhY2UoJ2Nyb3NzJywgJ2Nsb3NlJyk7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbjIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5zcGluIHx8IHRoaXMudHlwZSA9PT0gJ2xvYWRpbmcnKSAmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uLXNwaW4nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGljb25DbGFzc05hbWVBcnIgPSB0aGlzLmVsLmNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XHJcbiAgICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3ModGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgaWNvbkNsYXNzTmFtZUFyci5zcGxpY2UocmV0LmluZGV4LCAxLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBpY29uQ2xhc3NOYW1lQXJyLmpvaW4oJyAnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTVkdEYXRhKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaWNvbmZvbnQpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cclxuICAgIGlmICghdGhpcy50eXBlICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdvbGQnKTtcclxuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cclxuICAgICAgdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cclxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcclxuICAgICAgICBtdXRhdGlvbnNcclxuICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcclxuICAgICAgICAgIC5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIC8vIElmIGBjbGFzc0xpc3RgIGRvZXMgbm90IGNvbnRhaW4gYGFudGljb25gLCBhZGQgaXQgYmVmb3JlIG90aGVyIGNsYXNzIG5hbWVzLlxyXG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGBhbnRpY29uICR7dGhpcy5lbC5jbGFzc05hbWV9YC50cmltKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbGFzc05hbWVPYnNlcnZlcikge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cclxuICAgKi9cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XHJcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgaWYgKCF0aGlzLnR5cGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcclxuICAgICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xyXG4gICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=