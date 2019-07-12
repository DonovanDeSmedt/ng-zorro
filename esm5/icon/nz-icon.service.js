/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { BarsOutline, CalendarOutline, CaretDownFill, CaretDownOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, SearchOutline, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
function NzIconfontOption_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export var NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    SearchOutline,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconService, _super);
    function NzIconService(rendererFactory, handler, 
    // tslint:disable-next-line:no-any
    document, icons, defaultColor) {
        var _this = _super.call(this, rendererFactory, handler, document) || this;
        _this.rendererFactory = rendererFactory;
        _this.handler = handler;
        _this.document = document;
        _this.icons = icons;
        _this.defaultColor = defaultColor;
        _this.iconfontCache = new Set();
        _this.warnedAboutAPI = false;
        _this.warnedAboutCross = false;
        _this.warnedAboutVertical = false;
        _this.addIcon.apply(_this, tslib_1.__spread(NZ_ICONS_USED_BY_ZORRO, (_this.icons || [])));
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (_this.defaultColor) {
            if (_this.defaultColor.startsWith('#')) {
                primaryColor = _this.defaultColor;
            }
            else {
                console.warn('[NG-ZORRO]: twotone color must be a hex color!');
            }
        }
        _this.twoToneColor = { primaryColor: primaryColor };
        return _this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.warnAPI = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'old' && !this.warnedAboutAPI) {
            console.warn("<i class=\"anticon\"></i> would be deprecated soon. Please use <i nz-icon type=\"\"></i> API.");
            this.warnedAboutAPI = true;
        }
        if (type === 'cross' && !this.warnedAboutCross) {
            console.warn("'cross' icon is replaced by 'close' icon.");
            this.warnedAboutCross = true;
        }
        if (type === 'vertical' && !this.warnedAboutVertical) {
            console.warn("'verticle' is misspelled, would be corrected in the next major version.");
            this.warnedAboutVertical = true;
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this.document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this.document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ngInjectableDef = i0.defineInjectable({ factory: function NzIconService_Factory() { return new i1.NzIconService(i0.inject(i0.RendererFactory2), i0.inject(i2.HttpBackend, 8), i0.inject(i3.DOCUMENT, 8), i0.inject(i1.NZ_ICONS, 8), i0.inject(i1.NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: i1.NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
function NzIconService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconService.prototype.iconfontCache;
    /** @type {?} */
    NzIconService.prototype.warnedAboutAPI;
    /** @type {?} */
    NzIconService.prototype.warnedAboutCross;
    /** @type {?} */
    NzIconService.prototype.warnedAboutVertical;
    /** @type {?} */
    NzIconService.prototype.rendererFactory;
    /** @type {?} */
    NzIconService.prototype.handler;
    /** @type {?} */
    NzIconService.prototype.document;
    /** @type {?} */
    NzIconService.prototype.icons;
    /** @type {?} */
    NzIconService.prototype.defaultColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImljb24vbnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQU16QyxXQUFhLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFDdkQsV0FBYSw2QkFBNkIsR0FBRyxJQUFJLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztBQUNqRyxXQUFhLHFCQUFxQixHQUFHLFNBQVMsQ0FBQzs7QUFDL0MsV0FBYSxzQkFB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QUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWxGc0QsZ0JBQWdCO2dCQUQ5RCxXQUFXLHVCQXVJZixRQUFRO2dEQUVSLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs0Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzZDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLDZCQUE2Qjs7O3dCQTVJckQ7RUFxRm1DLFdBQVc7U0FBakMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBJY29uU2VydmljZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5pbXBvcnQge1xyXG4gIEJhcnNPdXRsaW5lLFxyXG4gIENhbGVuZGFyT3V0bGluZSxcclxuICBDYXJldERvd25GaWxsLFxyXG4gIENhcmV0RG93bk91dGxpbmUsXHJcbiAgQ2hlY2tDaXJjbGVGaWxsLFxyXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcclxuICBDaGVja091dGxpbmUsXHJcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlQ2lyY2xlRmlsbCxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VPdXRsaW5lLFxyXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcclxuICBEb3duT3V0bGluZSxcclxuICBFbGxpcHNpc091dGxpbmUsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBFeWVPdXRsaW5lLFxyXG4gIEZpbGVGaWxsLFxyXG4gIEZpbGVPdXRsaW5lLFxyXG4gIEZpbHRlckZpbGwsXHJcbiAgSW5mb0NpcmNsZUZpbGwsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmUsXHJcbiAgTGVmdE91dGxpbmUsXHJcbiAgTG9hZGluZ091dGxpbmUsXHJcbiAgUGFwZXJDbGlwT3V0bGluZSxcclxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgUmlnaHRPdXRsaW5lLFxyXG4gIFNlYXJjaE91dGxpbmUsXHJcbiAgVXBsb2FkT3V0bGluZSxcclxuICBVcE91dGxpbmVcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpJY29uZm9udE9wdGlvbiB7XHJcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcclxuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UV09UT05FX0NPTE9SID0gJyMxODkwZmYnO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTlNfVVNFRF9CWV9aT1JSTzogSWNvbkRlZmluaXRpb25bXSA9IFtcclxuICBCYXJzT3V0bGluZSxcclxuICBDYWxlbmRhck91dGxpbmUsXHJcbiAgQ2FyZXREb3duRmlsbCxcclxuICBDYXJldERvd25PdXRsaW5lLFxyXG4gIENoZWNrQ2lyY2xlRmlsbCxcclxuICBDaGVja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2hlY2tPdXRsaW5lLFxyXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlT3V0bGluZSxcclxuICBEb3VibGVMZWZ0T3V0bGluZSxcclxuICBEb3VibGVSaWdodE91dGxpbmUsXHJcbiAgRG93bk91dGxpbmUsXHJcbiAgRWxsaXBzaXNPdXRsaW5lLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgRXllT3V0bGluZSxcclxuICBGaWxlRmlsbCxcclxuICBGaWxlT3V0bGluZSxcclxuICBGaWx0ZXJGaWxsLFxyXG4gIEluZm9DaXJjbGVGaWxsLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lLFxyXG4gIExlZnRPdXRsaW5lLFxyXG4gIExvYWRpbmdPdXRsaW5lLFxyXG4gIFBhcGVyQ2xpcE91dGxpbmUsXHJcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxyXG4gIFJpZ2h0T3V0bGluZSxcclxuICBTZWFyY2hPdXRsaW5lLFxyXG4gIFVwbG9hZE91dGxpbmUsXHJcbiAgVXBPdXRsaW5lXHJcbl07XHJcblxyXG4vKipcclxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJY29uU2VydmljZSBleHRlbmRzIEljb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGljb25mb250Q2FjaGUgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIHdhcm5lZEFib3V0QVBJID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3YXJuZWRBYm91dENyb3NzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3YXJuZWRBYm91dFZlcnRpY2FsID0gZmFsc2U7XHJcblxyXG4gIHdhcm5BUEkodHlwZTogJ29sZCcgfCAnY3Jvc3MnIHwgJ3ZlcnRpY2FsJyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGUgPT09ICdvbGQnICYmICF0aGlzLndhcm5lZEFib3V0QVBJKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgPGkgY2xhc3M9XCJhbnRpY29uXCI+PC9pPiB3b3VsZCBiZSBkZXByZWNhdGVkIHNvb24uIFBsZWFzZSB1c2UgPGkgbnotaWNvbiB0eXBlPVwiXCI+PC9pPiBBUEkuYCk7XHJcbiAgICAgIHRoaXMud2FybmVkQWJvdXRBUEkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdjcm9zcycgJiYgIXRoaXMud2FybmVkQWJvdXRDcm9zcykge1xyXG4gICAgICBjb25zb2xlLndhcm4oYCdjcm9zcycgaWNvbiBpcyByZXBsYWNlZCBieSAnY2xvc2UnIGljb24uYCk7XHJcbiAgICAgIHRoaXMud2FybmVkQWJvdXRDcm9zcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJyAmJiAhdGhpcy53YXJuZWRBYm91dFZlcnRpY2FsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgJ3ZlcnRpY2xlJyBpcyBtaXNzcGVsbGVkLCB3b3VsZCBiZSBjb3JyZWN0ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5gKTtcclxuICAgICAgdGhpcy53YXJuZWRBYm91dFZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAndmlld0JveCcsICcwIDAgMTAyNCAxMDI0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcclxuICAgIH1cclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHNjcmlwdFVybCB9ID0gb3B0O1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQgJiYgIXRoaXMuaWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ3NyYycsIHNjcmlwdFVybCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xyXG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJY29uZm9udEljb24odHlwZTogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05TKSBwcml2YXRlIGljb25zOiBJY29uRGVmaW5pdGlvbltdLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUikgcHJpdmF0ZSBkZWZhdWx0Q29sb3I6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgc3VwZXIocmVuZGVyZXJGYWN0b3J5LCBoYW5kbGVyLCBkb2N1bWVudCk7XHJcblxyXG4gICAgdGhpcy5hZGRJY29uKC4uLk5aX0lDT05TX1VTRURfQllfWk9SUk8sIC4uLih0aGlzLmljb25zIHx8IFtdKSk7XHJcblxyXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcclxuICAgIGlmICh0aGlzLmRlZmF1bHRDb2xvcikge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0Q29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XHJcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbTkctWk9SUk9dOiB0d290b25lIGNvbG9yIG11c3QgYmUgYSBoZXggY29sb3IhJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0geyBwcmltYXJ5Q29sb3IgfTtcclxuICB9XHJcbn1cclxuIl19