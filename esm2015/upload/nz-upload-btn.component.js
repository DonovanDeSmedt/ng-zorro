/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzUploadBtnComponent {
    /**
     * @param {?} http
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(http, el, updateHostClassService) {
        this.http = http;
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        (/** @type {?} */ (this.file.nativeElement)).click();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === ENTER) {
            this.onClick();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            /** @type {?} */
            const files = Array.prototype.slice.call(e.dataTransfer.files).filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        const hie = /** @type {?} */ (e.target);
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    /**
     * @param {?} files
     * @return {?}
     */
    traverseFileTree(files) {
        /** @type {?} */
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                /** @type {?} */
                const dirReader = item.createReader();
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        // tslint:disable-next-line:no-any
        for (const file of /** @type {?} */ (files)) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    /**
     * @param {?} file
     * @param {?} acceptedFiles
     * @return {?}
     */
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            const fileName = '' + file.name;
            /** @type {?} */
            const mimeType = '' + file.type;
            /** @type {?} */
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                /** @type {?} */
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random().toString(36).substring(2);
        }
        return file;
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    uploadFiles(fileList) {
        /** @type {?} */
        let filters$ = of(Array.prototype.slice.call(fileList));
        this.options.filters.forEach(f => {
            filters$ = filters$.pipe(switchMap(list => {
                /** @type {?} */
                const fnRes = f.fn(list);
                return fnRes instanceof Observable ? fnRes : of(fnRes);
            }));
        });
        filters$.subscribe(list => {
            list.forEach((file) => {
                this.attachUid(file);
                this.upload(file, list);
            });
        }, e => {
            console.warn(`Unhandled upload filter error`, e);
        });
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof Observable) {
            before.subscribe((processedFile) => {
                /** @type {?} */
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }, e => {
                console.warn(`Unhandled upload beforeUpload error`, e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    post(file) {
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        const opt = this.options;
        const { uid } = file;
        let { data, headers } = opt;
        if (typeof data === 'function') {
            data = (/** @type {?} */ (data))(file);
        }
        if (typeof headers === 'function') {
            headers = (/** @type {?} */ (headers))(file);
        }
        /** @type {?} */
        const args = {
            action: opt.action,
            name: opt.name,
            headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress ? e => {
                opt.onProgress(e, file);
            } : null,
            onSuccess: (ret, xhr) => {
                this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: (xhr) => {
                this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        /** @type {?} */
        const req$ = (opt.customRequest || this.xhr).call(this, args);
        if (!(req$ instanceof Subscription)) {
            console.warn(`Must return Subscription type in '[nzCustomRequest]' property`);
        }
        this.reqs[uid] = req$;
        opt.onStart(file);
    }
    /**
     * @param {?} args
     * @return {?}
     */
    xhr(args) {
        /** @type {?} */
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append(args.name, /** @type {?} */ (args.file));
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        const req = new HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((event) => {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    // tslint:disable-next-line:no-any
                    (/** @type {?} */ (event)).percent = event.loaded / event.total * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof HttpResponse) {
                args.onSuccess(event.body, args.file, event);
            }
        }, (err) => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    /**
     * @param {?} uid
     * @return {?}
     */
    clean(uid) {
        /** @type {?} */
        const req$ = this.reqs[uid];
        if (req$ instanceof Subscription) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    /**
     * @param {?=} file
     * @return {?}
     */
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((uid) => this.clean(uid));
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
NzUploadBtnComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-upload-btn]',
                template: "<input type=\"file\" #file (change)=\"onChange($event)\"\r\n  [attr.accept]=\"options.accept\"\r\n  [attr.directory]=\"options.directory ? 'directory': null\"\r\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory': null\"\r\n  [multiple]=\"options.multiple\" style=\"display: none;\">\r\n<ng-content></ng-content>",
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"'
                },
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzUploadBtnComponent.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: ViewChild, args: ['file',] }],
    classes: [{ type: Input }],
    options: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onFileDrop: [{ type: HostListener, args: ['drop', ['$event'],] }, { type: HostListener, args: ['dragover', ['$event'],] }]
};
function NzUploadBtnComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadBtnComponent.prototype.reqs;
    /** @type {?} */
    NzUploadBtnComponent.prototype.inited;
    /** @type {?} */
    NzUploadBtnComponent.prototype.destroy;
    /** @type {?} */
    NzUploadBtnComponent.prototype.file;
    /** @type {?} */
    NzUploadBtnComponent.prototype.classes;
    /** @type {?} */
    NzUploadBtnComponent.prototype.options;
    /** @type {?} */
    NzUploadBtnComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadBtnComponent.prototype.http;
    /** @type {?} */
    NzUploadBtnComponent.prototype.el;
    /** @type {?} */
    NzUploadBtnComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidXBsb2FkL256LXVwbG9hZC1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFldEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBc1EvQixZQUFnQyxJQUFnQixFQUFVLEVBQWMsRUFBVSxzQkFBZ0Q7UUFBbEcsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBclFsSSxZQUEwQyxFQUFFLENBQUM7c0JBQzVCLEtBQUs7dUJBQ0osS0FBSzs7UUFLdkIsZUFBdUIsRUFBRSxDQUFDO3lCQWlQTixZQUFZO1FBYzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7U0FDbkc7S0FDRjs7OztJQTdQRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFB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b0JBQ25CLGlCQUFpQixFQUFFLEtBQUs7b0JBQ3hCLGFBQWEsRUFBTSxVQUFVO2lCQUM5QjtnQkFDRCxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7YUFDNUM7Ozs7WUE5QlEsVUFBVSx1QkFxU0osUUFBUTtZQWxTckIsVUFBVTtZQWFILHdCQUF3Qjs7O21CQW9COUIsU0FBUyxTQUFDLE1BQU07c0JBR2hCLEtBQUs7c0JBQ0wsS0FBSztzQkFHTCxZQUFZLFNBQUMsT0FBTzt3QkFRcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTt5QkFVcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFFLFFBQVEsQ0FBRSxjQUNqQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJncywgWmlwQnV0dG9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotdXBsb2FkLWJ0bl0nLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnXCIwXCInLFxyXG4gICAgJ1thdHRyLnJvbGVdJyAgICA6ICdcImJ1dHRvblwiJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelVwbG9hZEJ0bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHJlcXM6IHsgWyBrZXk6IHN0cmluZyBdOiBTdWJzY3JpcHRpb24gfSA9IHt9O1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnKSBmaWxlOiBFbGVtZW50UmVmO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHt9ID0ge307XHJcbiAgQElucHV0KCkgb3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCAhdGhpcy5vcHRpb25zLm9wZW5GaWxlRGlhbG9nT25DbGljaykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAodGhpcy5maWxlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyAnJGV2ZW50JyBdKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyAnJGV2ZW50JyBdKVxyXG4gIG9uRmlsZURyb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8IGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0b3J5KSB7XHJcbiAgICAgIHRoaXMudHJhdmVyc2VGaWxlVHJlZShlLmRhdGFUcmFuc2Zlci5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5kYXRhVHJhbnNmZXIuZmlsZXMpLmZpbHRlcihcclxuICAgICAgICAoZmlsZTogRmlsZSkgPT4gdGhpcy5hdHRyQWNjZXB0KGZpbGUsIHRoaXMub3B0aW9ucy5hY2NlcHQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGhpZSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnVwbG9hZEZpbGVzKGhpZS5maWxlcyk7XHJcbiAgICBoaWUudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhdmVyc2VGaWxlVHJlZShmaWxlczogRGF0YVRyYW5zZmVySXRlbUxpc3QpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IF90cmF2ZXJzZUZpbGVUcmVlID0gKGl0ZW06IGFueSwgcGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlzRmlsZSkge1xyXG4gICAgICAgIGl0ZW0uZmlsZSgoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXR0ckFjY2VwdChmaWxlLCB0aGlzLm9wdGlvbnMuYWNjZXB0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVzKFtmaWxlXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGRpclJlYWRlciA9IGl0ZW0uY3JlYXRlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcygoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBlbnRyaWVJdGVtIG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZW50cmllSXRlbSwgYCR7cGF0aH0ke2l0ZW0ubmFtZX0vYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMgYXMgYW55KSB7XHJcbiAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGZpbGUud2Via2l0R2V0QXNFbnRyeSgpLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dHJBY2NlcHQoZmlsZTogRmlsZSwgYWNjZXB0ZWRGaWxlczogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcclxuICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gJycgKyBmaWxlLm5hbWU7XHJcbiAgICAgIGNvbnN0IG1pbWVUeXBlID0gJycgKyBmaWxlLnR5cGU7XHJcbiAgICAgIGNvbnN0IGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcclxuXHJcbiAgICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZSh0eXBlID0+IHtcclxuICAgICAgICBjb25zdCB2YWxpZFR5cGUgPSB0eXBlLnRyaW0oKTtcclxuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCAtIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCkgIT09IC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1xcL1xcKiQvLnRlc3QodmFsaWRUeXBlKSkge1xyXG4gICAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXHJcbiAgICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoVWlkKGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcclxuICAgIGlmICghZmlsZS51aWQpIHtcclxuICAgICAgZmlsZS51aWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGVzKGZpbGVMaXN0OiBGaWxlTGlzdCB8IEZpbGVbXSk6IHZvaWQge1xyXG4gICAgbGV0IGZpbHRlcnMkOiBPYnNlcnZhYmxlPFVwbG9hZEZpbGVbXT4gPSBvZihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlTGlzdCkpO1xyXG4gICAgdGhpcy5vcHRpb25zLmZpbHRlcnMuZm9yRWFjaChmID0+IHtcclxuICAgICAgZmlsdGVycyQgPSBmaWx0ZXJzJC5waXBlKHN3aXRjaE1hcChsaXN0ID0+IHtcclxuICAgICAgICBjb25zdCBmblJlcyA9IGYuZm4obGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuICAgIGZpbHRlcnMkLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgbGlzdC5mb3JFYWNoKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hVaWQoZmlsZSk7XHJcbiAgICAgICAgdGhpcy51cGxvYWQoZmlsZSwgbGlzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIHVwbG9hZCBmaWx0ZXIgZXJyb3JgLCBlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGxvYWQoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLm9wdGlvbnMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIGlmIChiZWZvcmUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIGJlZm9yZS5zdWJzY3JpYmUoKHByb2Nlc3NlZEZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XHJcbiAgICAgICAgICB0aGlzLmF0dGFjaFVpZChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICAgIHRoaXMucG9zdChwcm9jZXNzZWRGaWxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzZWRGaWxlID09PSAnYm9vbGVhbicgJiYgcHJvY2Vzc2VkRmlsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMucG9zdChmaWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIHVwbG9hZCBiZWZvcmVVcGxvYWQgZXJyb3JgLCBlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zdChmaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcG9zdChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZXN0cm95KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9wdCA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgdWlkIH0gPSBmaWxlO1xyXG4gICAgbGV0IHsgZGF0YSwgaGVhZGVycyB9ID0gb3B0O1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGRhdGEgPSAoZGF0YSBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGhlYWRlcnMgPSAoaGVhZGVycyBhcyAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXJnczogVXBsb2FkWEhSQXJncyA9IHtcclxuICAgICAgYWN0aW9uICAgICAgICAgOiBvcHQuYWN0aW9uLFxyXG4gICAgICBuYW1lICAgICAgICAgICA6IG9wdC5uYW1lLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBmaWxlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdC53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIG9uUHJvZ3Jlc3MgICAgIDogb3B0Lm9uUHJvZ3Jlc3MgPyBlID0+IHtcclxuICAgICAgICBvcHQub25Qcm9ncmVzcyhlLCBmaWxlKTtcclxuICAgICAgfSA6IG51bGwsXHJcbiAgICAgIG9uU3VjY2VzcyAgICAgIDogKHJldCwgeGhyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhbih1aWQpO1xyXG4gICAgICAgIG9wdC5vblN1Y2Nlc3MocmV0LCBmaWxlLCB4aHIpO1xyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yICAgICAgICA6ICh4aHIpID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFuKHVpZCk7XHJcbiAgICAgICAgb3B0Lm9uRXJyb3IoeGhyLCBmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcSQgPSAob3B0LmN1c3RvbVJlcXVlc3QgfHwgdGhpcy54aHIpLmNhbGwodGhpcywgYXJncyk7XHJcbiAgICBpZiAoIShyZXEkIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYE11c3QgcmV0dXJuIFN1YnNjcmlwdGlvbiB0eXBlIGluICdbbnpDdXN0b21SZXF1ZXN0XScgcHJvcGVydHlgKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxc1sgdWlkIF0gPSByZXEkO1xyXG4gICAgb3B0Lm9uU3RhcnQoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHhocihhcmdzOiBVcGxvYWRYSFJBcmdzKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoYXJncy5uYW1lLCBhcmdzLmZpbGUgYXMgYW55KTtcclxuICAgIGlmIChhcmdzLmRhdGEpIHtcclxuICAgICAgT2JqZWN0LmtleXMoYXJncy5kYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBhcmdzLmRhdGFbIGtleSBdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFyZ3MuaGVhZGVycykge1xyXG4gICAgICBhcmdzLmhlYWRlcnMgPSB7fTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmhlYWRlcnNbICdYLVJlcXVlc3RlZC1XaXRoJyBdICE9PSBudWxsKSB7XHJcbiAgICAgIGFyZ3MuaGVhZGVyc1sgJ1gtUmVxdWVzdGVkLVdpdGgnIF0gPSBgWE1MSHR0cFJlcXVlc3RgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIGFyZ3MuaGVhZGVyc1sgJ1gtUmVxdWVzdGVkLVdpdGgnIF07XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCBhcmdzLmFjdGlvbiwgZm9ybURhdGEsIHtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3MgOiB0cnVlLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGFyZ3Mud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICBoZWFkZXJzICAgICAgICA6IG5ldyBIdHRwSGVhZGVycyhhcmdzLmhlYWRlcnMpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpLnN1YnNjcmliZSgoZXZlbnQ6IEh0dHBFdmVudDx7fT4pID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICBpZiAoZXZlbnQudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAoZXZlbnQgYXMgYW55KS5wZXJjZW50ID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZ3Mub25Qcm9ncmVzcyhldmVudCwgYXJncy5maWxlKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgIGFyZ3Mub25TdWNjZXNzKGV2ZW50LmJvZHksIGFyZ3MuZmlsZSwgZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuYWJvcnQoYXJncy5maWxlKTtcclxuICAgICAgYXJncy5vbkVycm9yKGVyciwgYXJncy5maWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbih1aWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVxJCA9IHRoaXMucmVxc1sgdWlkIF07XHJcbiAgICBpZiAocmVxJCBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xyXG4gICAgICByZXEkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5yZXFzWyB1aWQgXTtcclxuICB9XHJcblxyXG4gIGFib3J0KGZpbGU/OiBVcGxvYWRGaWxlKTogdm9pZCB7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICB0aGlzLmNsZWFuKGZpbGUgJiYgZmlsZS51aWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5yZXFzKS5mb3JFYWNoKCh1aWQpID0+IHRoaXMuY2xlYW4odWlkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF06IHRoaXMub3B0aW9ucy5kaXNhYmxlZCxcclxuICAgICAgLi4udGhpcy5jbGFzc2VzXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xyXG4gICAgaWYgKCFodHRwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kICdIdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuYWJvcnQoKTtcclxuICB9XHJcbn1cclxuIl19