/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzListComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} updateHostClassService
     * @param {?} i18n
     */
    constructor(el, cd, updateHostClassService, i18n) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.i18n = i18n;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        this.prefixCls = 'ant-list';
    }
    /**
     * @return {?}
     */
    _setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.nzItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-split`]: this.nzSplit,
            [`${this.prefixCls}-bordered`]: this.nzBordered,
            [`${this.prefixCls}-loading`]: this.nzLoading,
            [`${this.prefixCls}-grid`]: this.nzGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.nzLoadMore || this.nzPagination || this.nzFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cd.detectChanges();
        });
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list',
                template: "<ng-template #itemsTpl>\r\n  <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\r\n    <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"nzLoading\">\r\n  <ng-container *ngIf=\"nzDataSource\">\r\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\r\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\r\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      {{locale.emptyText}}\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\r\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\r\n</div>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    nz-list, nz-list nz-spin {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: NzI18nService }
];
NzListComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGrid: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzItemLayout: [{ type: Input }],
    nzRenderItem: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadMore: [{ type: Input }],
    nzPagination: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSplit: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzBordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzListComponent.prototype, "nzSplit", void 0);
function NzListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListComponent.prototype.locale;
    /** @type {?} */
    NzListComponent.prototype.i18n$;
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.prefixCls;
    /** @type {?} */
    NzListComponent.prototype.el;
    /** @type {?} */
    NzListComponent.prototype.cd;
    /** @type {?} */
    NzListComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzListComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibGlzdC9uei1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWlCeEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFzRDFCLFlBQW9CLEVBQWMsRUFBVSxFQUFxQixFQUFVLHNCQUFnRCxFQUFVLElBQW1CO1FBQXBJLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOztRQXBEeEosY0FBYyxFQUFFLENBQUM7UUFPakIsa0JBQXNDLEtBQUssQ0FBQztRQVE1QyxvQkFBbUQsWUFBWSxDQUFDO1FBSWhFLGlCQUFxQyxLQUFLLENBQUM7UUFNM0MsY0FBaUMsU0FBUyxDQUFDO1FBRTNDLGVBQW1DLElBQUksQ0FBQzt5QkFNcEIsVUFBVTtLQW9CN0I7Ozs7SUFsQk8sWUFBWTs7UUFDbEIsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBaUMsSUFBSTtZQUN2RCxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFFLEVBQW1CLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUNuRixDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFFLEVBQXlCLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUMxRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFFLEVBQXlCLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUMxRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFFLEVBQXNCLElBQUksQ0FBQyxPQUFPO1lBQy9ELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUUsRUFBbUIsSUFBSSxDQUFDLFVBQVU7WUFDbEUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBRSxFQUFvQixJQUFJLENBQUMsU0FBUztZQUNqRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFFLEVBQXVCLElBQUksQ0FBQyxNQUFNO1lBQzlELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdHLENBQUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7OztJQVEvRSxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDMUI7OztZQXBGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFNBQVM7Z0JBQzlCLG1vREFBK0M7Z0JBQy9DLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07eUJBQzVCOzs7O0dBSXRCO2FBQ0Y7Ozs7WUE3QkMsVUFBVTtZQUZWLGlCQUFpQjtZQVlWLHdCQUF3QjtZQUd4QixhQUFhOzs7MkJBd0JuQixLQUFLO3lCQUVMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLO3FCQUVMLEtBQUs7c0JBRUwsS0FBSzs7O0lBcEJJLFlBQVksRUFBRTs7OztJQVlkLFlBQVksRUFBRTs7OztJQVFkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgTnpMaXN0R3JpZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1saXN0JyxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxyXG4gICAgbnotbGlzdCwgbnotbGlzdCBuei1zcGluIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgYCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG56R3JpZDogTnpMaXN0R3JpZDtcclxuXHJcbiAgQElucHV0KCkgbnpIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIG56SXRlbUxheW91dDogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgQElucHV0KCkgbnpSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBuekxvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGxpdCA9IHRydWU7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWxpc3QnO1xyXG5cclxuICBwcml2YXRlIF9zZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgICAgICAgICAgICAgICAgOiB0aGlzLm56SXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbGdgIF0gICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNtYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zcGxpdGAgXSAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56U3BsaXQsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWJvcmRlcmVkYCBdICAgICAgICAgICAgICAgICA6IHRoaXMubnpCb3JkZXJlZCxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2AgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5uekxvYWRpbmcsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWdyaWRgIF0gICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpHcmlkLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtYCBdOiAhISh0aGlzLm56TG9hZE1vcmUgfHwgdGhpcy5uelBhZ2luYXRpb24gfHwgdGhpcy5uekZvb3RlcilcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=