/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from '../core/util';
export class NzSkeletonComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = (!!this.nzTitle && !this.nzParagraph) ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return Object.assign({}, basicProps, this.getProps(this.nzParagraph));
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    }
    /**
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzTitle"] || changes["nzAvatar"] || changes["nzParagraph"]) {
            this.updateProps();
        }
    }
}
NzSkeletonComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                template: "<ng-container *ngIf=\"nzLoading\">\r\n  <div class=\"ant-skeleton-header\">\r\n    <span\r\n      *ngIf=\"!!nzAvatar\"\r\n      class=\"ant-skeleton-avatar\"\r\n      [class.ant-skeleton-avatar-lg]=\"avatar.size === 'large'\"\r\n      [class.ant-skeleton-avatar-sm]=\"avatar.size === 'small'\"\r\n      [class.ant-skeleton-avatar-circle]=\"avatar.shape === 'circle'\"\r\n      [class.ant-skeleton-avatar-square]=\"avatar.shape === 'square'\">\r\n    </span>\r\n  </div>\r\n  <div class=\"ant-skeleton-content\">\r\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\r\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\r\n      <li *ngFor=\"let row of rowsList; let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzLoading\">\r\n  <ng-content></ng-content>\r\n</ng-container>",
                host: {
                    '[class.ant-skeleton]': 'true',
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }] }
];
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
function NzSkeletonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /** @type {?} */
    NzSkeletonComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNrZWxldG9uL256LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFjMUMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQWE5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVoxQyxnQkFBb0IsS0FBSyxDQUFDO1FBQzFCLGlCQUFxQixJQUFJLENBQUM7UUFDMUIsZUFBOEMsSUFBSSxDQUFDO1FBQ25ELGdCQUFnRCxLQUFLLENBQUM7UUFDdEQsbUJBQXNELElBQUksQ0FBQztRQUszRCxnQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLGlCQUFvQyxFQUFFLENBQUM7S0FFTzs7Ozs7SUFFOUMsU0FBUyxDQUFDLFFBQXlCLEVBQUU7UUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7Ozs7SUFFTyxhQUFhOztRQUNuQixNQUFNLFNBQVMsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7UUFDM0MsTUFBTSxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBQ2pELElBQUksS0FBSyxDQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjthQUFNLElBQUksU0FBUyxJQUFJLFlBQVksRUFBRTtZQUNwQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7UUFDRCx1QkFBUyxLQUFLLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FB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YTtnQkFDOUIsbTdCQUErQztnQkFDL0MsSUFBSSxFQUFhO29CQUNmLHNCQUFzQixFQUFjLE1BQU07b0JBQzFDLGtDQUFrQyxFQUFFLFlBQVk7b0JBQ2hELDZCQUE2QixFQUFPLFVBQVU7aUJBQy9DO2FBQ0Y7Ozs7WUFmaUMsaUJBQWlCOzs7dUJBaUJoRCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJy4uL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgIDogJ256LXNrZWxldG9uJyxcclxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LXNrZWxldG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uXScgICAgICAgICAgICA6ICd0cnVlJyxcclxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLXdpdGgtYXZhdGFyXSc6ICchIW56QXZhdGFyJyxcclxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nICAgICA6ICduekFjdGl2ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56QWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBOelNrZWxldG9uVGl0bGUgfCBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuekF2YXRhcjogTnpTa2VsZXRvbkF2YXRhciB8IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICB0aXRsZTogTnpTa2VsZXRvblRpdGxlO1xyXG4gIGF2YXRhcjogTnpTa2VsZXRvbkF2YXRhcjtcclxuICBwYXJhZ3JhcGg6IE56U2tlbGV0b25QYXJhZ3JhcGg7XHJcbiAgcm93c0xpc3Q6IG51bWJlcltdID0gW107XHJcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgdG9DU1NVbml0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdG9Dc3NQaXhlbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogTnpTa2VsZXRvblRpdGxlIHtcclxuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcclxuICAgIGNvbnN0IGhhc1BhcmFncmFwaDogYm9vbGVhbiA9ICEhdGhpcy5uelBhcmFncmFwaDtcclxuICAgIGxldCB3aWR0aDogc3RyaW5nO1xyXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XHJcbiAgICAgIHdpZHRoID0gJzM4JSc7XHJcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcclxuICAgICAgd2lkdGggPSAnNTAlJztcclxuICAgIH1cclxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpUaXRsZSkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogTnpTa2VsZXRvbkF2YXRhciB7XHJcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAoISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGgpID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcclxuICAgIGNvbnN0IHNpemU6IEF2YXRhclNpemUgPSAnbGFyZ2UnO1xyXG4gICAgcmV0dXJuIHsgc2hhcGUsIHNpemUsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uekF2YXRhcikgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFyYWdyYXBoUHJvcHMoKTogTnpTa2VsZXRvblBhcmFncmFwaCB7XHJcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XHJcbiAgICBjb25zdCBoYXNUaXRsZTogYm9vbGVhbiA9ICEhdGhpcy5uelRpdGxlO1xyXG4gICAgY29uc3QgYmFzaWNQcm9wczogTnpTa2VsZXRvblBhcmFncmFwaCA9IHt9O1xyXG4gICAgLy8gV2lkdGhcclxuICAgIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xyXG4gICAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XHJcbiAgICB9XHJcbiAgICAvLyBSb3dzXHJcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xyXG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmJhc2ljUHJvcHMsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelBhcmFncmFwaCkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJvcHM8VD4ocHJvcDogVCB8IGJvb2xlYW4gfCB1bmRlZmluZWQpOiBUIHwge30ge1xyXG4gICAgcmV0dXJuIHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnID8gcHJvcCA6IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCByb3dzIH0gPSB0aGlzLnBhcmFncmFwaDtcclxuICAgIGxldCB3aWR0aExpc3QgPSBbXTtcclxuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xyXG4gICAgICB3aWR0aExpc3QgPSB3aWR0aDtcclxuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgIUFycmF5LmlzQXJyYXkod2lkdGgpKSB7XHJcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xyXG4gICAgICB3aWR0aExpc3RbIHJvd3MgLSAxIF0gPSB3aWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB3aWR0aExpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByb3BzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xyXG4gICAgdGhpcy5hdmF0YXIgPSB0aGlzLmdldEF2YXRhclByb3BzKCk7XHJcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcclxuICAgIHRoaXMucm93c0xpc3QgPSBbIC4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpIF07XHJcbiAgICB0aGlzLndpZHRoTGlzdCA9IHRoaXMuZ2V0V2lkdGhMaXN0KCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSB8fCBjaGFuZ2VzLm56QXZhdGFyIHx8IGNoYW5nZXMubnpQYXJhZ3JhcGgpIHtcclxuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=