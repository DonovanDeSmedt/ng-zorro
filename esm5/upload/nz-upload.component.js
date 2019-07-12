/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, toNumber, InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
var NzUploadComponent = /** @class */ (function () {
    // #endregion
    function NzUploadComponent(cdr, i18n) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #region fields
        this.nzType = 'select';
        this._limit = 0;
        this._size = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzChange = new EventEmitter();
        this.nzFileListChange = new EventEmitter();
        this.onStart = function (file) {
            if (!_this.nzFileList) {
                _this.nzFileList = [];
            }
            /** @type {?} */
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.nzFileList.push(targetItem);
            _this.genThumb(targetItem);
            _this.nzFileListChange.emit(_this.nzFileList);
            _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
            _this.cdr.markForCheck();
        };
        this.onProgress = function (e, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            _this.nzChange.emit({
                event: e,
                file: tslib_1.__assign({}, targetItem),
                fileList: _this.nzFileList,
                type: 'progress'
            });
            _this.cdr.detectChanges();
        };
        this.onSuccess = function (res, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'success'
            });
            _this.cdr.detectChanges();
        };
        this.onError = function (err, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = _this.genErr(targetItem);
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'error'
            });
            _this.cdr.detectChanges();
        };
        // #endregion
        // #region list
        this.onRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            var fnRes = typeof _this.nzRemove === 'function' ?
                _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter(function (res) { return res; }))
                .subscribe(function () {
                _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                _this.nzChange.emit({
                    file: file,
                    fileList: _this.nzFileList,
                    type: 'removed'
                });
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.cdr.detectChanges();
            });
        };
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    Object.defineProperty(NzUploadComponent.prototype, "nzLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._limit = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showUploadList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.zipOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        var filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
            });
        }
        if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return (w.size / 1024) <= _this.nzSize; }); }
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            /** @type {?} */
            var types_1 = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            openFileDialogOnClick: this.nzOpenFileDialogOnClick,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.fileToObject = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-any
            originFileObj: /** @type {?} */ (file)
        };
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.getFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid === file.uid; })[0];
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.removeFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid !== file.uid; });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genErr = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genThumb = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var win = /** @type {?} */ (window);
        if ((this.nzListType !== 'picture' && this.nzListType !== 'picture-card') ||
            typeof document === 'undefined' ||
            typeof win === 'undefined' ||
            !win.FileReader ||
            !win.File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl != null) {
            return;
        }
        file.thumbUrl = '';
        /** @type {?} */
        var reader = new FileReader();
        reader.onloadend = function () { return file.thumbUrl = /** @type {?} */ (reader.result); };
        reader.readAsDataURL(file.originFileObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadComponent.prototype.fileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subCls = [];
        if (this.nzType === 'drag') {
            subCls = [
                this.nzFileList.some(function (file) { return file.status === 'uploading'; }) && this.prefixCls + "-drag-uploading",
                this.dragState === 'dragover' && this.prefixCls + "-drag-hover"
            ];
        }
        else {
            subCls = [
                this.prefixCls + "-select-" + this.nzListType
            ];
        }
        this.classList = tslib_1.__spread([
            this.prefixCls,
            this.prefixCls + "-" + this.nzType
        ], subCls, [
            this.nzDisabled && this.prefixCls + "-disabled"
        ]).filter(function (item) { return !!item; });
        this.cdr.detectChanges();
    };
    // #endregion
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.localeChange.subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Upload');
            _this.cdr.detectChanges();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(function (file) { return file["message"] = _this.genErr(file); });
        }
        this.zipOptions().setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    NzUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-upload',
                    template: "<ng-template #list>\r\n  <nz-upload-list *ngIf=\"nzShowUploadList\"\r\n    [locale]=\"locale\"\r\n    [listType]=\"nzListType\"\r\n    [items]=\"nzFileList\"\r\n    [icons]=\"nzShowUploadList\"\r\n    [onPreview]=\"nzPreview\"\r\n    [onRemove]=\"onRemove\"></nz-upload-list>\r\n</ng-template>\r\n<ng-template #con><ng-content></ng-content></ng-template>\r\n<ng-template #btn>\r\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\r\n    <div nz-upload-btn #upload [options]=\"_btnOptions\">\r\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\r\n  <div [ngClass]=\"classList\"\r\n    (drop)=\"fileDrop($event)\"\r\n    (dragover)=\"fileDrop($event)\"\r\n    (dragleave)=\"fileDrop($event)\">\r\n    <div nz-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\r\n      <div class=\"ant-upload-drag-container\">\r\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-container>\r\n<ng-template #select>\r\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\r\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #pic>\r\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-template>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzUploadComponent.propDecorators = {
        upload: [{ type: ViewChild, args: ['upload',] }],
        nzType: [{ type: Input }],
        nzLimit: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFileType: [{ type: Input }],
        nzAccept: [{ type: Input }],
        nzAction: [{ type: Input }],
        nzDirectory: [{ type: Input }],
        nzOpenFileDialogOnClick: [{ type: Input }],
        nzBeforeUpload: [{ type: Input }],
        nzCustomRequest: [{ type: Input }],
        nzData: [{ type: Input }],
        nzFilter: [{ type: Input }],
        nzFileList: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzHeaders: [{ type: Input }],
        nzListType: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzName: [{ type: Input }],
        nzShowUploadList: [{ type: Input }],
        nzShowButton: [{ type: Input }],
        nzWithCredentials: [{ type: Input }],
        nzRemove: [{ type: Input }],
        nzPreview: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzFileListChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzDirectory", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzShowButton", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzUploadComponent.prototype, "nzWithCredentials", void 0);
    return NzUploadComponent;
}());
export { NzUploadComponent };
function NzUploadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadComponent.prototype.i18n$;
    /** @type {?} */
    NzUploadComponent.prototype.upload;
    /** @type {?} */
    NzUploadComponent.prototype.locale;
    /** @type {?} */
    NzUploadComponent.prototype.nzType;
    /** @type {?} */
    NzUploadComponent.prototype._limit;
    /** @type {?} */
    NzUploadComponent.prototype._size;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileType;
    /** @type {?} */
    NzUploadComponent.prototype.nzAccept;
    /** @type {?} */
    NzUploadComponent.prototype.nzAction;
    /** @type {?} */
    NzUploadComponent.prototype.nzDirectory;
    /** @type {?} */
    NzUploadComponent.prototype.nzOpenFileDialogOnClick;
    /** @type {?} */
    NzUploadComponent.prototype.nzBeforeUpload;
    /** @type {?} */
    NzUploadComponent.prototype.nzCustomRequest;
    /** @type {?} */
    NzUploadComponent.prototype.nzData;
    /** @type {?} */
    NzUploadComponent.prototype.nzFilter;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileList;
    /** @type {?} */
    NzUploadComponent.prototype.nzDisabled;
    /** @type {?} */
    NzUploadComponent.prototype.nzHeaders;
    /** @type {?} */
    NzUploadComponent.prototype.nzListType;
    /** @type {?} */
    NzUploadComponent.prototype.nzMultiple;
    /** @type {?} */
    NzUploadComponent.prototype.nzName;
    /** @type {?} */
    NzUploadComponent.prototype._showUploadList;
    /** @type {?} */
    NzUploadComponent.prototype.nzShowButton;
    /** @type {?} */
    NzUploadComponent.prototype.nzWithCredentials;
    /** @type {?} */
    NzUploadComponent.prototype.nzRemove;
    /** @type {?} */
    NzUploadComponent.prototype.nzPreview;
    /** @type {?} */
    NzUploadComponent.prototype.nzChange;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileListChange;
    /** @type {?} */
    NzUploadComponent.prototype._btnOptions;
    /** @type {?} */
    NzUploadComponent.prototype.onStart;
    /** @type {?} */
    NzUploadComponent.prototype.onProgress;
    /** @type {?} */
    NzUploadComponent.prototype.onSuccess;
    /** @type {?} */
    NzUploadComponent.prototype.onError;
    /** @type {?} */
    NzUploadComponent.prototype.dragState;
    /** @type {?} */
    NzUploadComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadComponent.prototype.classList;
    /** @type {?} */
    NzUploadComponent.prototype.cdr;
    /** @type {?} */
    NzUploadComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQWlJL0QsYUFBYTtJQUViLDJCQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQXZFLGlCQUNDO1FBRG1CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs7UUF0SHZFLGNBQWMsRUFBRSxDQUFDOztRQUlqQixjQUE4QixRQUFRLENBQUM7c0JBRWQsQ0FBQztxQkFXRixDQUFDO1FBY3pCLG1CQUF1QyxLQUFLLENBQUM7UUFDN0MsK0JBQW1ELElBQUksQ0FBQztRQUl4RCxnQkFBb0MsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFvQyxFQUFFLENBQUM7UUFDdkMsa0JBQXNDLEtBQUssQ0FBQztRQUU1QyxrQkFBc0MsTUFBTSxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsY0FBa0IsTUFBTSxDQUFDOytCQUVvQyxJQUFJO1FBV2pFLG9CQUF3QyxJ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RUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBckNDLGlCQUFpQjtnQkFpQlYsYUFBYTs7O3lCQXVCbkIsU0FBUyxTQUFDLFFBQVE7eUJBTWxCLEtBQUs7MEJBSUwsS0FBSzt5QkFXTCxLQUFLOzZCQVNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MENBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUlMLEtBQUs7K0JBU0wsS0FBSztvQ0FDTCxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNO21DQUNOLE1BQU07OztRQS9CRyxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFNZCxZQUFZLEVBQUU7Ozs7UUFHZCxZQUFZLEVBQUU7Ozs7UUFjZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs0QkFwRzFCOztTQXdDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsXHJcbiAgVXBsb2FkQ2hhbmdlUGFyYW0sXHJcbiAgVXBsb2FkRmlsZSxcclxuICBVcGxvYWRGaWx0ZXIsXHJcbiAgVXBsb2FkTGlzdFR5cGUsXHJcbiAgVXBsb2FkVHlwZSxcclxuICBVcGxvYWRYSFJBcmdzLFxyXG4gIFppcEJ1dHRvbk9wdGlvbnNcclxufSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdXBsb2FkJyxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBAVmlld0NoaWxkKCd1cGxvYWQnKSB1cGxvYWQ6IE56VXBsb2FkQnRuQ29tcG9uZW50O1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2NhbGU6IGFueSA9IHt9O1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBuelR5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcclxuXHJcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TGltaXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbGltaXQgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpMaW1pdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NpemUgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56RmlsZVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekFjY2VwdDogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbnpBY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3RvcnkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2sgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56QmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIG56RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXTtcclxuICBASW5wdXQoKSBuekZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56SGVhZGVyczoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TmFtZSA9ICdmaWxlJztcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1VwbG9hZExpc3QodmFsdWU6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5fc2hvd1VwbG9hZExpc3QgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyA/IHRvQm9vbGVhbih2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dVcGxvYWRMaXN0KCk6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpXaXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBASW5wdXQoKSBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPigpO1xyXG5cclxuICBfYnRuT3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSB6aXBPcHRpb25zKCk6IHRoaXMge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyAmJiB0aGlzLm56U2hvd1VwbG9hZExpc3QpIHtcclxuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xyXG4gICAgICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcclxuICAgICAgICBzaG93UmVtb3ZlSWNvbiA6IHRydWVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGZpbHRlcnNcclxuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5uekZpbHRlci5zbGljZSgpO1xyXG4gICAgaWYgKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLm56TGltaXQgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnbGltaXQnKSA9PT0gLTEpIHtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnbGltaXQnLFxyXG4gICAgICAgIGZuICA6IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5zbGljZSgtdGhpcy5uekxpbWl0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U2l6ZSA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdzaXplJykgPT09IC0xKSB7XHJcbiAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3NpemUnLFxyXG4gICAgICAgIGZuICA6IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiAody5zaXplIC8gMTAyNCkgPD0gdGhpcy5uelNpemUpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpGaWxlVHlwZSAmJiB0aGlzLm56RmlsZVR5cGUubGVuZ3RoID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3R5cGUnKSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLm56RmlsZVR5cGUuc3BsaXQoJywnKTtcclxuICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAndHlwZScsXHJcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnRuT3B0aW9ucyA9IHtcclxuICAgICAgZGlzYWJsZWQgICAgICAgOiB0aGlzLm56RGlzYWJsZWQsXHJcbiAgICAgIGFjY2VwdCAgICAgICAgIDogdGhpcy5uekFjY2VwdCxcclxuICAgICAgYWN0aW9uICAgICAgICAgOiB0aGlzLm56QWN0aW9uLFxyXG4gICAgICBkaXJlY3RvcnkgICAgICA6IHRoaXMubnpEaXJlY3RvcnksXHJcbiAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayAgICAgIDogdGhpcy5uek9wZW5GaWxlRGlhbG9nT25DbGljayxcclxuICAgICAgYmVmb3JlVXBsb2FkICAgOiB0aGlzLm56QmVmb3JlVXBsb2FkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0ICA6IHRoaXMubnpDdXN0b21SZXF1ZXN0LFxyXG4gICAgICBkYXRhICAgICAgICAgICA6IHRoaXMubnpEYXRhLFxyXG4gICAgICBoZWFkZXJzICAgICAgICA6IHRoaXMubnpIZWFkZXJzLFxyXG4gICAgICBuYW1lICAgICAgICAgICA6IHRoaXMubnpOYW1lLFxyXG4gICAgICBtdWx0aXBsZSAgICAgICA6IHRoaXMubnpNdWx0aXBsZSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLm56V2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBmaWx0ZXJzLFxyXG4gICAgICBvblN0YXJ0ICAgICAgICA6IHRoaXMub25TdGFydCxcclxuICAgICAgb25Qcm9ncmVzcyAgICAgOiB0aGlzLm9uUHJvZ3Jlc3MsXHJcbiAgICAgIG9uU3VjY2VzcyAgICAgIDogdGhpcy5vblN1Y2Nlc3MsXHJcbiAgICAgIG9uRXJyb3IgICAgICAgIDogdGhpcy5vbkVycm9yXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIHVwbG9hZFxyXG5cclxuICBwcml2YXRlIGZpbGVUb09iamVjdChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0TW9kaWZpZWQgICAgOiBmaWxlLmxhc3RNb2RpZmllZCxcclxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxyXG4gICAgICBuYW1lICAgICAgICAgICAgOiBmaWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSxcclxuICAgICAgc2l6ZSAgICAgICAgICAgIDogZmlsZS5zaXplLFxyXG4gICAgICB0eXBlICAgICAgICAgICAgOiBmaWxlLnR5cGUsXHJcbiAgICAgIHVpZCAgICAgICAgICAgICA6IGZpbGUudWlkLFxyXG4gICAgICByZXNwb25zZSAgICAgICAgOiBmaWxlLnJlc3BvbnNlLFxyXG4gICAgICBlcnJvciAgICAgICAgICAgOiBmaWxlLmVycm9yLFxyXG4gICAgICBwZXJjZW50ICAgICAgICAgOiAwLFxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgIG9yaWdpbkZpbGVPYmogICA6IGZpbGUgYXMgYW55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZSB7XHJcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVsgMCBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcclxuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCAhPT0gZmlsZS51aWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5FcnIoZmlsZTogVXBsb2FkRmlsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycgP1xyXG4gICAgICBmaWxlLnJlc3BvbnNlIDpcclxuICAgICAgKGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0KSB8fCB0aGlzLmxvY2FsZS51cGxvYWRFcnJvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuVGh1bWIoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcclxuICAgIGlmIChcclxuICAgICAgKHRoaXMubnpMaXN0VHlwZSAhPT0gJ3BpY3R1cmUnICYmIHRoaXMubnpMaXN0VHlwZSAhPT0gJ3BpY3R1cmUtY2FyZCcpIHx8XHJcbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgdHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcclxuICAgICAgIXdpbi5GaWxlUmVhZGVyIHx8XHJcbiAgICAgICF3aW4uRmlsZSB8fFxyXG4gICAgICAhKGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUpIHx8XHJcbiAgICAgIGZpbGUudGh1bWJVcmwgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlLnRodW1iVXJsID0gJyc7XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBmaWxlLnRodW1iVXJsID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblN0YXJ0ID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGlmICghdGhpcy5uekZpbGVMaXN0KSB7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZmlsZVRvT2JqZWN0KGZpbGUpO1xyXG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAndXBsb2FkaW5nJztcclxuICAgIHRoaXMubnpGaWxlTGlzdC5wdXNoKHRhcmdldEl0ZW0pO1xyXG4gICAgdGhpcy5nZW5UaHVtYih0YXJnZXRJdGVtKTtcclxuICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUHJvZ3Jlc3MgPSAoZTogeyBwZXJjZW50OiBudW1iZXIgfSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBldmVudCAgIDogZSxcclxuICAgICAgZmlsZSAgICA6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxyXG4gICAgICB0eXBlICAgIDogJ3Byb2dyZXNzJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3VjY2VzcyA9IChyZXM6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xyXG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlcztcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FcnJvciA9IChlcnI6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0uZXJyb3IgPSBlcnI7XHJcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICB0YXJnZXRJdGVtLm1lc3NhZ2UgPSB0aGlzLmdlbkVycih0YXJnZXRJdGVtKTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ2Vycm9yJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gZHJhZ1xyXG5cclxuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xyXG5cclxuICBmaWxlRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLnR5cGUgPT09IHRoaXMuZHJhZ1N0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZHJhZ1N0YXRlID0gZS50eXBlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIGxpc3RcclxuXHJcbiAgb25SZW1vdmUgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy51cGxvYWQuYWJvcnQoZmlsZSk7XHJcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcclxuICAgIGNvbnN0IGZuUmVzID0gdHlwZW9mIHRoaXMubnpSZW1vdmUgPT09ICdmdW5jdGlvbicgP1xyXG4gICAgICB0aGlzLm56UmVtb3ZlKGZpbGUpIDogdGhpcy5uelJlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMubnpSZW1vdmU7XHJcbiAgICAoZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcykpXHJcbiAgICAucGlwZShmaWx0ZXIoKHJlczogYm9vbGVhbikgPT4gcmVzKSlcclxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLnJlbW92ZUZpbGVJdGVtKGZpbGUsIHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZmlsZSxcclxuICAgICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxyXG4gICAgICAgIHR5cGUgICAgOiAncmVtb3ZlZCdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcclxuICBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBsZXQgc3ViQ2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZHJhZycpIHtcclxuICAgICAgc3ViQ2xzID0gW1xyXG4gICAgICAgIHRoaXMubnpGaWxlTGlzdC5zb21lKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSAmJiBgJHt0aGlzLnByZWZpeENsc30tZHJhZy11cGxvYWRpbmdgLFxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInICYmIGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLWhvdmVyYFxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViQ2xzID0gW1xyXG4gICAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0ID0gW1xyXG4gICAgICB0aGlzLnByZWZpeENscyxcclxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCxcclxuICAgICAgLi4uc3ViQ2xzLFxyXG4gICAgICB0aGlzLm56RGlzYWJsZWQgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYFxyXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdVcGxvYWQnKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekZpbGVMaXN0KSB7XHJcbiAgICAgICh0aGlzLm56RmlsZUxpc3QgfHwgW10pLmZvckVhY2goZmlsZSA9PiBmaWxlLm1lc3NhZ2UgPSB0aGlzLmdlbkVycihmaWxlKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==