/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzAvatarComponent {
    /**
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} updateHostClassService
     * @param {?} renderer
     */
    constructor(elementRef, cd, updateHostClassService, renderer) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize],
            [`${this.prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${this.prefixCls}-icon`]: this.nzIcon,
            [`${this.prefixCls}-image`]: this.hasSrc // downgrade after image error
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    /**
     * @return {?}
     */
    imgError() {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.nzIcon) {
            this.hasIcon = true;
        }
        else if (this.nzText) {
            this.hasText = true;
        }
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzIcon') && changes["nzIcon"].currentValue) {
            this.oldAPIIcon = changes["nzIcon"].currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    /**
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: `${this.nzSize}px`
            });
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(() => {
            this.calcStringSize();
        });
        return this;
    }
    /**
     * @return {?}
     */
    setSizeStyle() {
        if (typeof this.nzSize === 'string') {
            return;
        }
        this.renderer.setStyle(this.el, 'width', `${this.nzSize}px`);
        this.renderer.setStyle(this.el, 'height', `${this.nzSize}px`);
        this.renderer.setStyle(this.el, 'line-height', `${this.nzSize}px`);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', `${this.nzSize / 2}px`);
        }
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n<img [src]=\"nzSrc\" *ngIf=\"nzSrc && hasSrc\" (error)=\"imgError()\"/>\r\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: Renderer2 }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzIcon: [{ type: Input }],
    textEl: [{ type: ViewChild, args: ['textEl',] }]
};
function NzAvatarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /** @type {?} */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.prefixCls;
    /** @type {?} */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype.elementRef;
    /** @type {?} */
    NzAvatarComponent.prototype.cd;
    /** @type {?} */
    NzAvatarComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzAvatarComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFldEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQW9CNUIsWUFDVSxZQUNBLElBQ0Esd0JBQ0E7UUFIQSxlQUFVLEdBQVYsVUFBVTtRQUNWLE9BQUUsR0FBRixFQUFFO1FBQ0YsMkJBQXNCLEdBQXRCLHNCQUFzQjtRQUN0QixhQUFRLEdBQVIsUUFBUTtRQXRCbEIsZUFBa0MsUUFBUSxDQUFDO1FBQzNDLGNBQWdDLFNBQVMsQ0FBQztRQUsxQyxrQkFBYSxJQUFJLENBQUM7UUFDbEIsZUFBbUIsS0FBSyxDQUFDO1FBQ3pCLGNBQWtCLElBQUksQ0FBQztRQUN2QixlQUFtQixLQUFLLENBQUM7a0JBS0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxZQUFZO3VCQUNkLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBTzdDOzs7O0lBRUQsUUFBUTs7UUFDTixNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFzQyxJQUFJO1lBQzVELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUU7WUFD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LFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvc2l6ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekF2YXRhclNoYXBlID0gJ3NxdWFyZScgfCAnY2lyY2xlJztcclxuZXhwb3J0IHR5cGUgTnpBdmF0YXJTaXplID0gTnpTaXplTERTVHlwZSB8IG51bWJlcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hdmF0YXInLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF2YXRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbnpTaGFwZTogTnpBdmF0YXJTaGFwZSA9ICdjaXJjbGUnO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpBdmF0YXJTaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cclxuICBoYXNUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcclxuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgdGV4dFN0eWxlczoge307XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcpIHRleHRFbDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYXZhdGFyJztcclxuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIHNldENsYXNzKCk6IHRoaXMge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF0sXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNoYXBlfWAgXSAgICAgICAgICAgICAgIDogdGhpcy5uelNoYXBlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCBdICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpJY29uLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pbWFnZWAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzU3JjIC8vIGRvd25ncmFkZSBhZnRlciBpbWFnZSBlcnJvclxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGltZ0Vycm9yKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYXNTcmMgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5uekljb24pIHtcclxuICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcclxuICAgICAgdGhpcy5oYXNUZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XHJcbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256SWNvbicpICYmIGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9sZEFQSUljb24gPSBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhc1RleHQgPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpUZXh0O1xyXG4gICAgdGhpcy5oYXNJY29uID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56SWNvbjtcclxuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLm56U3JjO1xyXG5cclxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XHJcbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5oYXNUZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGlsZHJlbldpZHRoID0gdGhpcy50ZXh0RWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aCA6IDE7XHJcbiAgICB0aGlzLnRleHRTdHlsZXMgPSB7XHJcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGVYKC01MCUpYFxyXG4gICAgfTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uelNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50ZXh0U3R5bGVzLCB7XHJcbiAgICAgICAgbGluZUhlaWdodDogYCR7dGhpcy5uelNpemV9cHhgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vdGlmeUNhbGMoKTogdGhpcyB7XHJcbiAgICAvLyBJZiB1c2UgbmdBZnRlclZpZXdDaGVja2VkLCBhbHdheXMgZGVtYW5kcyBtb3JlIGNvbXB1dGF0aW9ucywgc28uLi4uLi5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhbGNTdHJpbmdTaXplKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd3aWR0aCcsIGAke3RoaXMubnpTaXplfXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdoZWlnaHQnLCBgJHt0aGlzLm56U2l6ZX1weGApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm56U2l6ZX1weGApO1xyXG4gICAgaWYgKHRoaXMuaGFzSWNvbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdmb250LXNpemUnLCBgJHt0aGlzLm56U2l6ZSAvIDJ9cHhgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19