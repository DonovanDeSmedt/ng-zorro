/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, QueryList, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { findFirstNotEmptyNode, findLastNotEmptyNode } from '../core/util/dom';
import { NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG } from '../core/wave/nz-wave.directive';
import { NzIconDirective } from '../icon/nz-icon.directive';
var NzButtonComponent = /** @class */ (function () {
    function NzButtonComponent(elementRef, cdr, renderer, nzUpdateHostClassService, ngZone, waveConfig) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.waveConfig = waveConfig;
        this.el = this.elementRef.nativeElement;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig);
        this._ghost = false;
        this._search = false;
        this._loading = false;
        this._block = false;
        this.iconOnly = false;
        this.prefixCls = 'ant-btn';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    Object.defineProperty(NzButtonComponent.prototype, "nzBlock", {
        get: /**
         * @return {?}
         */
        function () {
            return this._block;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._block = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzGhost", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ghost;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ghost = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._search;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._search = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzShape", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shape;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shape = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzSize", {
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
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
            this.setClassMap();
            this.updateIconDisplay(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzButtonComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-loading"] = this.nzLoading,
            _a[this.prefixCls + "-icon-only"] = this.iconOnly,
            _a[this.prefixCls + "-background-ghost"] = this.nzGhost,
            _a[this.prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && (firstChildElement === this.listOfIconElement.first.nativeElement)) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = /** @type {?} */ (firstChildElement);
            }
            else if (lastChildElement && (lastChildElement === this.listOfIconElement.last.nativeElement)) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzWave.ngOnDestroy();
    };
    NzButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-button]',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<i nz-icon type=\"loading\" *ngIf=\"nzLoading\"></i>\r\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>"
                }] }
    ];
    /** @nocollapse */
    NzButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] }
    ]; };
    NzButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzType: [{ type: Input }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzLoading: [{ type: Input }]
    };
    return NzButtonComponent;
}());
export { NzButtonComponent };
function NzButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzButtonComponent.prototype.el;
    /** @type {?} */
    NzButtonComponent.prototype.contentElement;
    /** @type {?} */
    NzButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzWave;
    /** @type {?} */
    NzButtonComponent.prototype._ghost;
    /** @type {?} */
    NzButtonComponent.prototype._search;
    /** @type {?} */
    NzButtonComponent.prototype._type;
    /** @type {?} */
    NzButtonComponent.prototype._shape;
    /** @type {?} */
    NzButtonComponent.prototype._size;
    /** @type {?} */
    NzButtonComponent.prototype._loading;
    /** @type {?} */
    NzButtonComponent.prototype._block;
    /** @type {?} */
    NzButtonComponent.prototype.iconElement;
    /** @type {?} */
    NzButtonComponent.prototype.iconOnly;
    /** @type {?} */
    NzButtonComponent.prototype.prefixCls;
    /** @type {?} */
    NzButtonComponent.prototype.sizeMap;
    /** @type {?} */
    NzButtonComponent.prototype.elementRef;
    /** @type {?} */
    NzButtonComponent.prototype.cdr;
    /** @type {?} */
    NzButtonComponent.prototype.renderer;
    /** @type {?} */
    NzButtonComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzButtonComponent.prototype.ngZone;
    /** @type {?} */
    NzButtonComponent.prototype.waveConfig;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJidXR0b24vbnotYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVFLFFBQVEsRUFDaEIsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0UsT0FBTyxFQUFnQixlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBMEYxRCwyQkFBb0IsVUFBc0IsRUFBVSxHQUFzQixFQUFVLFFBQW1CLEVBQ25GLDBCQUE0RCxNQUFjLEVBQy9CLFVBQXdCO1FBRm5FLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkYsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUFvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQWM7UUE5RXZGLFVBQTJCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBR3pELGNBQXND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QUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7S0FDRjs7OztJQUVELDhDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzNCOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxhQUFhO29CQUNsQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxpS0FBaUQ7aUJBQ2xEOzs7O2dCQS9CQyxVQUFVO2dCQUhWLGlCQUFpQjtnQkFXakIsU0FBUztnQkFLRix3QkFBd0I7Z0JBVC9CLE1BQU07Z0RBMkdPLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7aUNBN0VwRCxTQUFTLFNBQUMsZ0JBQWdCO29DQUMxQixlQUFlLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTt5QkFDckQsV0FBVyxTQUFDLGNBQWM7MEJBRTFCLEtBQUs7MEJBVUwsS0FBSzsyQkFVTCxLQUFLO3lCQVVMLEtBQUs7MEJBVUwsS0FBSzt5QkFVTCxLQUFLOzRCQVVMLEtBQUs7OzRCQXhHUjs7U0FzQ2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgZmluZEZpcnN0Tm90RW1wdHlOb2RlLCBmaW5kTGFzdE5vdEVtcHR5Tm9kZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9kb20nO1xyXG5pbXBvcnQgeyBOeldhdmVDb25maWcsIE56V2F2ZURpcmVjdGl2ZSwgTlpfV0FWRV9HTE9CQUxfQ09ORklHIH0gZnJvbSAnLi4vY29yZS93YXZlL256LXdhdmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInO1xyXG5leHBvcnQgdHlwZSBOekJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCBudWxsIDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotYnV0dG9uXScsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1idXR0b24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbGlzdE9mSWNvbkVsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubnotd2F2ZScpIG56V2F2ZSA9IG5ldyBOeldhdmVEaXJlY3RpdmUodGhpcy5uZ1pvbmUsIHRoaXMuZWxlbWVudFJlZiwgdGhpcy53YXZlQ29uZmlnKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpCbG9jayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56QmxvY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmxvY2s7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekdob3N0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9naG9zdCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpHaG9zdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9naG9zdDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpCdXR0b25UeXBlKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUeXBlKCk6IE56QnV0dG9uVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hhcGUodmFsdWU6IE56QnV0dG9uU2hhcGUpIHtcclxuICAgIHRoaXMuX3NoYXBlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaGFwZSgpOiBOekJ1dHRvblNoYXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaGFwZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZykge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2hvc3QgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zZWFyY2ggPSBmYWxzZTtcclxuICBwcml2YXRlIF90eXBlOiBOekJ1dHRvblR5cGU7XHJcbiAgcHJpdmF0ZSBfc2hhcGU6IE56QnV0dG9uU2hhcGU7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYmxvY2sgPSBmYWxzZTtcclxuICBwcml2YXRlIGljb25FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGljb25Pbmx5ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWJ0bic7XHJcbiAgcHJpdmF0ZSBzaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuXHJcbiAgdXBkYXRlSWNvbkRpc3BsYXkodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmljb25FbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pY29uRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5ICovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAgXSAgICAgICAgICAgICAgICA6IHRoaXMubnpUeXBlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTaGFwZX1gIF0gICAgICAgICAgICAgICA6IHRoaXMubnpTaGFwZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF0sXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWxvYWRpbmdgIF0gICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uekxvYWRpbmcsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb24tb25seWAgXSAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pY29uT25seSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGAgXSAgICAgICAgICAgICAgOiB0aGlzLm56R2hvc3QsXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrYCBdICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uekJsb2NrLFxyXG4gICAgICBbIGBhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpTZWFyY2hcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9ICEhaGFzSWNvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLmljb25Pbmx5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMubnpMb2FkaW5nKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG1vdmVJY29uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaW5kRmlyc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgbGFzdENoaWxkRWxlbWVudCA9IGZpbmRMYXN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGlmIChmaXJzdENoaWxkRWxlbWVudCAmJiAoZmlyc3RDaGlsZEVsZW1lbnQgPT09IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQuZmlyc3QubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiAobGFzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sYXN0Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCBsYXN0Q2hpbGRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5ueldhdmUubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ueldhdmUubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19