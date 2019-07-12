/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
const iconTypeRE = /^anticon\-\w/;
/** @type {?} */
const getIconTypeClass = (className) => {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        const classArr = className.split(/\s/);
        /** @type {?} */
        const index = classArr.findIndex((cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE)));
        return index === -1 ? undefined : { name: classArr[index], index };
    }
};
const ɵ0 = getIconTypeClass;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(iconService, elementRef, renderer) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.spin = false;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param {?=} oldAPI
     * @return {?}
     */
    changeIcon2(oldAPI = false) {
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then(svg => {
            this.setSVGData(svg);
            if (!oldAPI) {
                this.toggleSpin(svg);
            }
        }).catch((err) => {
            if (err) {
                console.error(err);
                console.warn('[NG-ZORRO]', `You can find more about this error on http://ng.ant.design/components/icon/en`);
            }
        });
    }
    /**
     * @param {?} className
     * @return {?}
     */
    classChangeHandler(className) {
        /** @type {?} */
        const ret = getIconTypeClass(className);
        if (ret) {
            /** @type {?} */
            let type = ret.name.replace('anticon-', '');
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
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    toggleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @return {?}
     */
    setClassName() {
        if (typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            const ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, `anticon-${this.type}`);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        if (typeof this.type === 'string') {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.iconfont) {
            this.changeIcon2();
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            // Add `class` mutation observer.
            this.classNameObserver = new MutationObserver((mutations) => {
                mutations
                    .filter((mutation) => mutation.attributeName === 'class')
                    .forEach((mutation) => this.classChangeHandler((/** @type {?} */ (mutation.target)).className));
            });
            this.classNameObserver.observe(this.el, { attributes: true });
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = this.el.children;
        /** @type {?} */
        let length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                const child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement(/** @type {?} */ (child));
                }
            }
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 }
];
NzIconDirective.propDecorators = {
    spin: [{ type: Input }],
    iconfont: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaWNvbi9uei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVsRCxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUM7O0FBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxTQUFpQixFQUFtQyxFQUFFO0lBQzlFLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztRQUNMLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEgsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3BFO0NBQ0YsQ0FBQzs7Ozs7Ozs7O0FBWUYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTs7Ozs7O0lBeUVoRCxZQUFtQixXQUEwQixFQUFTLFVBQXNCLEVBQVMsUUFBbUI7UUFDdEcsS0FBSyxDQUFDLFdBQVcsRUFB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LE9BQU8sTUFBTSxFQUFFLEVBQUU7O2dCQUNmLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQUMsS0FBbUIsRUFBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7S0FDRjs7O1lBaElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBdkJRLGFBQWE7WUFScEIsVUFBVTtZQUtWLFNBQVM7OzttQkE0QlIsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBpc0Rldk1vZGUsXHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XHJcblxyXG5jb25zdCBnZXRJY29uVHlwZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfSA9PiB7XHJcbiAgaWYgKCFjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNsYXNzQXJyID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY2xhc3NBcnIuZmluZEluZGV4KChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSkpO1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHsgbmFtZTogY2xhc3NBcnJbaW5kZXhdLCBpbmRleCB9O1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcclxuICpcclxuICogLSBJY29uRm9udCBzdXBwb3J0XHJcbiAqIC0gc3Bpbm5pbmdcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaS5hbnRpY29uLCBbbnotaWNvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGljb25mb250OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NOYW1lT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgcHJpdmF0ZSBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cclxuICAgKiBAcGFyYW0gb2xkQVBJXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMihvbGRBUEk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFvbGRBUEkpIHsgdGhpcy5zZXRDbGFzc05hbWUoKTsgfVxyXG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oc3ZnID0+IHtcclxuICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Zyk7XHJcbiAgICAgIGlmICghb2xkQVBJKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTcGluKHN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgWW91IGNhbiBmaW5kIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBvbiBodHRwOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW5gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsYXNzQ2hhbmdlSGFuZGxlcihjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgaWYgKHJldCkge1xyXG4gICAgICBsZXQgdHlwZSA9IHJldC5uYW1lLnJlcGxhY2UoJ2FudGljb24tJywgJycpO1xyXG4gICAgICBpZiAodHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xyXG4gICAgICAgIHR5cGUgPSB0eXBlLnJlcGxhY2UoJ3ZlcnRpY2xlJywgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdjcm9zcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcclxuICAgICAgICB0eXBlID0gdHlwZS5yZXBsYWNlKCdjcm9zcycsICdjbG9zZScpO1xyXG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgndmVydGljYWwnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTmFtZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5lbC5jbGFzc05hbWUuc3BsaXQoL1xccy8pO1xyXG4gICAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKHRoaXMuZWwuY2xhc3NOYW1lKTtcclxuICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgIGljb25DbGFzc05hbWVBcnIuc3BsaWNlKHJldC5pbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgaWNvbkNsYXNzTmFtZUFyci5qb2luKCcgJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmljb25mb250KSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlSWNvbjIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJZiBgdGhpcy50eXBlYCBpcyBub3Qgc3BlY2lmaWVkIGFuZCBgY2xhc3NMaXN0YCBjb250YWlucyBgYW50aWNvbmAsIGl0IHNob3VsZCBiZSBhbiBpY29uIHVzaW5nIG9sZCBBUEkuXHJcbiAgICBpZiAoIXRoaXMudHlwZSAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XHJcbiAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgnb2xkJyk7XHJcbiAgICAgIC8vIEdldCBgdHlwZWAgZnJvbSBgY2xhc3NOYW1lYC4gSWYgbm90LCBpbml0aWFsIHJlbmRlcmluZyB3b3VsZCBiZSBtaXNzZWQuXHJcbiAgICAgIHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKHRoaXMuZWwuY2xhc3NOYW1lKTtcclxuICAgICAgLy8gQWRkIGBjbGFzc2AgbXV0YXRpb24gb2JzZXJ2ZXIuXHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XHJcbiAgICAgICAgbXV0YXRpb25zXHJcbiAgICAgICAgICAuZmlsdGVyKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpXHJcbiAgICAgICAgICAuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLmNsYXNzQ2hhbmdlSGFuZGxlcigobXV0YXRpb24udGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBJZiBgY2xhc3NMaXN0YCBkb2VzIG5vdCBjb250YWluIGBhbnRpY29uYCwgYWRkIGl0IGJlZm9yZSBvdGhlciBjbGFzcyBuYW1lcy5cclxuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIpIHtcclxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiBjdXN0b20gY29udGVudCBpcyBwcm92aWRlZCwgdHJ5IHRvIG5vcm1hbGl6ZSBTVkcgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xyXG4gICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XHJcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICAgIHRoaXMuaWNvblNlcnZpY2Uubm9ybWFsaXplU3ZnRWxlbWVudChjaGlsZCBhcyBTVkdFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19