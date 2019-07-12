/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { NzMeasureScrollbarService } from '../../services/nz-measure-scrollbar.service';
import { NzBlockScrollStrategy } from './nz-block-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../services/nz-measure-scrollbar.service";
import * as i2 from "@angular/common";
export class NzScrollStrategyOptions {
    /**
     * @param {?} rendererFactory
     * @param {?} nzMeasureScrollbarService
     * @param {?} document
     */
    constructor(rendererFactory, nzMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.block = () => new NzBlockScrollStrategy(this.document, this.renderer, this.nzMeasureScrollbarService);
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
}
NzScrollStrategyOptions.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NzScrollStrategyOptions.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: NzMeasureScrollbarService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollStrategyOptions_Factory() { return new NzScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.NzMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: NzScrollStrategyOptions, providedIn: "root" });
function NzScrollStrategyOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollStrategyOptions.prototype.document;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.renderer;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.block;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9vdmVybGF5L3Njcm9sbC9uei1zY3JvbGwtc3RyYXRlZ3ktb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBR25FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUdsQyxZQUNFLGVBQWlDLEVBQ3pCOztJQUVVLFFBQWE7UUFGdkIsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQVFuQyxhQUFRLEdBQUcsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBSnBHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUQ7OztZQVpGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7WUFKUSxnQkFBZ0I7WUFDL0MseUJBQXlCOzRDQVc3QixNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnXHJcbmltcG9ydCB7IE56QmxvY2tTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vbnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTdHJhdGVneU9wdGlvbnMge1xyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByaXZhdGUgbnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBibG9jayA9ICgpID0+IG5ldyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy5kb2N1bWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5uek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlKTtcclxufVxyXG4iXX0=