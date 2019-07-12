/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzUploadListComponent = /** @class */ (function () {
    // #endregion
    function NzUploadListComponent(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        // #region fields
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.prefixCls = 'ant-upload-list';
    }
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.listType] = true,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    // #endregion
    // #region render
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handlePreview = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handleRemove = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    };
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzUploadListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-upload-list',
                    template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\r\n  <ng-template #icon>\r\n    <ng-container *ngIf=\"listType === 'picture' || listType === 'picture-card'; else defIcon\">\r\n      <ng-container *ngIf=\"file.status === 'uploading' || (!file.thumbUrl && !file.url); else thumbIcon\">\r\n        <div *ngIf=\"listType === 'picture-card'\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\r\n        <i *ngIf=\"listType !== 'picture-card'\" class=\"anticon anticon-picture ant-upload-list-item-thumbnail\"></i>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-template #defIcon>\r\n      <i nz-icon [type]=\"file.status === 'uploading' ? 'loading' : 'paper-clip'\"></i>\r\n    </ng-template>\r\n    <ng-template #thumbIcon>\r\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n        [href]=\"file.thumbUrl || file.url\"\r\n        (click)=\"handlePreview(file, $event)\">\r\n        <img [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\r\n      </a>\r\n    </ng-template>\r\n  </ng-template>\r\n  <ng-template #preview>\r\n    <ng-container *ngIf=\"file.url; else prevText\">\r\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\"\r\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\r\n    </ng-container>\r\n    <ng-template #prevText>\r\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\r\n    </ng-template>\r\n  </ng-template>\r\n  <div class=\"ant-upload-list-item-info\">\r\n    <nz-tooltip *ngIf=\"file.status === 'error'\" [nzTitle]=\"file.message\">\r\n        <span nz-tooltip>\r\n          <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\r\n          <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\r\n        </span>\r\n    </nz-tooltip>\r\n    <span *ngIf=\"file.status !== 'error'\">\r\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\r\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\r\n      </span>\r\n  </div>\r\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else close\">\r\n      <span class=\"ant-upload-list-item-actions\">\r\n        <a *ngIf=\"icons.showPreviewIcon\" [href]=\"file.thumbUrl || file.url\"\r\n          target=\"_blank\" rel=\"noopener noreferrer\"\r\n          title=\"{{ locale.previewFile }}\"\r\n          [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\r\n          (click)=\"handlePreview(file, $event)\">\r\n            <i nz-icon type=\"eye-o\"></i>\r\n        </a>\r\n        <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" class=\"anticon anticon-delete\" title=\"{{ locale.removeFile }}\"></i>\r\n      </span>\r\n  </ng-container>\r\n  <ng-template #close>\r\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon type=\"close\" title=\"{{ locale.removeFile }}\"></i>\r\n  </ng-template>\r\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\r\n    <nz-progress [nzPercent]=\"file.percent\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"2\"></nz-progress>\r\n  </div>\r\n</div>",
                    providers: [NzUpdateHostClassService],
                    animations: [
                        trigger('itemState', [
                            transition(':enter', [
                                style({ height: '0', width: '0', opacity: 0 }),
                                animate(150, style({ height: '*', width: '*', opacity: 1 }))
                            ]),
                            transition(':leave', [
                                animate(150, style({ height: '0', width: '0', opacity: 0 }))
                            ])
                        ])
                    ],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzUploadListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzUploadListComponent.propDecorators = {
        locale: [{ type: Input }],
        listType: [{ type: Input }],
        items: [{ type: Input }],
        icons: [{ type: Input }],
        onPreview: [{ type: Input }],
        onRemove: [{ type: Input }]
    };
    return NzUploadListComponent;
}());
export { NzUploadListComponent };
function NzUploadListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadListComponent.prototype.locale;
    /** @type {?} */
    NzUploadListComponent.prototype.listType;
    /** @type {?} */
    NzUploadListComponent.prototype.items;
    /** @type {?} */
    NzUploadListComponent.prototype.icons;
    /** @type {?} */
    NzUploadListComponent.prototype.onPreview;
    /** @type {?} */
    NzUploadListComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadListComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadListComponent.prototype.el;
    /** @type {?} */
    NzUploadListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInVwbG9hZC9uei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBb0VwRixhQUFhO0lBRWIsK0JBQW9CLEVBQWMsRUFBVSxzQkFBZ0Q7UUFBeEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7OztRQTVDNUYsY0FBdUIsRUFBRSxDQUFDO3lCQVdOLGlCQUFpQjtLQWtDcEM7Ozs7SUFoQ08sMkNBQVc7Ozs7OztRQUNqQixJQUFNLFFBQVE7WUFDWixHQUFFLElBQUksQ0FBQyxTQUFTLElBQTBCLElBQUk7WUFDOUMsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLElBQUksSUFBSTtnQkFDOUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztJQUcvRSxhQUFhO0lBRWIsaUJBQWlCOzs7Ozs7SUFFakIsNkNBQWE7Ozs7O0lBQWIsVUFBYyxJQUFnQixFQUFFLENBQVE7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O0lBRUQsNENBQVk7Ozs7O0lBQVosVUFBYSxJQUFnQixFQUFFLENBQVE7UUFDckMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTztLQUNSOzs7O0lBT0QsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkF2RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLDIyR0FBc0Q7b0JBQ3RELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ25CLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQzlDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUM3RCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUM3RCxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7aUJBQzVDOzs7O2dCQXZCbUIsVUFBVTtnQkFFckIsd0JBQXdCOzs7eUJBMEI5QixLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7Z0NBbENSOztTQXlCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZEZpbGUsIFVwbG9hZExpc3RUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXVwbG9hZC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdpdGVtU3RhdGUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGxvY2FsZTogYW55ID0ge307XHJcbiAgQElucHV0KCkgbGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBVcGxvYWRGaWxlW107XHJcbiAgQElucHV0KCkgaWNvbnM6IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIG9uUHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XHJcbiAgQElucHV0KCkgb25SZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmxpc3RUeXBlfWAgXTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gcmVuZGVyXHJcblxyXG4gIGhhbmRsZVByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vblByZXZpZXcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiB0aGlzLm9uUHJldmlldyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZShmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMub25SZW1vdmUpIHtcclxuICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=