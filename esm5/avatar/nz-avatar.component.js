/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(elementRef, cd, updateHostClassService, renderer) {
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
    NzAvatarComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-icon"] = this.nzIcon,
            _a[this.prefixCls + "-image"] = this.hasSrc // downgrade after image error
        ,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes["nzIcon"].currentValue) {
            this.oldAPIIcon = changes["nzIcon"].currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(function () {
            _this.calcStringSize();
        });
        return this;
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzSize === 'string') {
            return;
        }
        this.renderer.setStyle(this.el, 'width', this.nzSize + "px");
        this.renderer.setStyle(this.el, 'height', this.nzSize + "px");
        this.renderer.setStyle(this.el, 'line-height', this.nzSize + "px");
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', this.nzSize / 2 + "px");
        }
    };
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
    NzAvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Renderer2 }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzIcon: [{ type: Input }],
        textEl: [{ type: ViewChild, args: ['textEl',] }]
    };
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBbUNwRiwyQkFDVSxZQUNBLElBQ0Esd0JBQ0E7UUFIQSxlQUFVLEdBQVYsVUFBVTtRQUNWLE9BQUUsR0FBRixFQUFFO1FBQ0YsMkJBQXNCLEdBQXRCLHNCQUFzQjtRQUN0QixhQUFRLEdBQVIsUUFBUTtRQXRCbEIsZUFBa0MsUUFBUSxDQUFDO1FBQzNDLGNBQWdDLFNBQVMsQ0FBQztRQUsxQyxrQkFBYSxJQUFJLENBQUM7UUFDbEIsZUFBbUIsS0FBSyxDQUFDO1FBQ3pCLGNBQWtCLElBQUksQ0FBQztRQUN2QixlQUFtQixLQUFLLENBQUM7a0JBS0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxZQUFZO3VCQUNkLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBTzdDOzs7O0lBRUQsb0NBQVE7OztJQUFSOzs7UUFDRSxJQUFNLFFBQVE7WUFDWixHQUFFLElBQUksQ0FBQyxTQUFTLElBQXdDLElBQUk7WUFDNUQsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRTtZQUNuRixHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQVMs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aGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuXHJcbmV4cG9ydCB0eXBlIE56QXZhdGFyU2hhcGUgPSAnc3F1YXJlJyB8ICdjaXJjbGUnO1xyXG5leHBvcnQgdHlwZSBOekF2YXRhclNpemUgPSBOelNpemVMRFNUeXBlIHwgbnVtYmVyO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF2YXRhcicsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBuelNoYXBlOiBOekF2YXRhclNoYXBlID0gJ2NpcmNsZSc7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOekF2YXRhclNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcclxuICBASW5wdXQoKSBuekljb246IHN0cmluZztcclxuXHJcbiAgb2xkQVBJSWNvbiA9IHRydWU7IC8vIE1ha2UgdGhlIHVzZXIgZGVmaW5lZCBpY29uIGNvbXBhdGlibGUgdG8gb2xkIEFQSS4gU2hvdWxkIGJlIHJlbW92ZWQgaW4gMi4wLlxyXG4gIGhhc1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGhhc0ljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0ZXh0U3R5bGVzOiB7fTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGV4dEVsJykgdGV4dEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xyXG4gIHByaXZhdGUgc2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3MoKTogdGhpcyB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXX1gIF06IHRoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YCBdICAgICAgICAgICAgICAgOiB0aGlzLm56U2hhcGUsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gIF0gICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uekljb24sXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWltYWdlYCBdICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNTcmMgLy8gZG93bmdyYWRlIGFmdGVyIGltYWdlIGVycm9yXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgaW1nRXJyb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYXNJY29uID0gZmFsc2U7XHJcbiAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm56SWNvbikge1xyXG4gICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xyXG4gICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpJY29uJykgJiYgY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XHJcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xyXG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMubnpTcmM7XHJcblxyXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcclxuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcclxuICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcclxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRleHRTdHlsZXMsIHtcclxuICAgICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLm56U2l6ZX1weGBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcclxuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNpemVTdHlsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uelNpemUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgYCR7dGhpcy5uelNpemV9cHhgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2hlaWdodCcsIGAke3RoaXMubnpTaXplfXB4YCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsaW5lLWhlaWdodCcsIGAke3RoaXMubnpTaXplfXB4YCk7XHJcbiAgICBpZiAodGhpcy5oYXNJY29uKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2ZvbnQtc2l6ZScsIGAke3RoaXMubnpTaXplIC8gMn1weGApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=