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
var NzScrollStrategyOptions = /** @class */ (function () {
    function NzScrollStrategyOptions(rendererFactory, nzMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        var _this = this;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.block = function () { return new NzBlockScrollStrategy(_this.document, _this.renderer, _this.nzMeasureScrollbarService); };
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    NzScrollStrategyOptions.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NzScrollStrategyOptions.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: NzMeasureScrollbarService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollStrategyOptions_Factory() { return new NzScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.NzMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: NzScrollStrategyOptions, providedIn: "root" });
    return NzScrollStrategyOptions;
}());
export { NzScrollStrategyOptions };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9vdmVybGF5L3Njcm9sbC9uei1zY3JvbGwtc3RyYXRlZ3ktb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztJQU1qRSxpQ0FDRSxlQUFpQyxFQUN6Qjs7SUFFVSxRQUFhO1FBSmpDLGlCQVFDO1FBTlMsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQVFuQyxhQUFRLGNBQU0sT0FBQSxJQUFJLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMseUJBQXlCLENBQUMsRUFBdkYsQ0FBdUYsQ0FBQztRQUpwRyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVEOztnQkFaRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dCQUpRLGdCQUFnQjtnQkFDL0MseUJBQXlCO2dEQVc3QixNQUFNLFNBQUMsUUFBUTs7O2tDQWJwQjs7U0FNYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uei1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuL256LWJsb2NrLXNjcm9sbC1zdHJhdGVneSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU3RyYXRlZ3lPcHRpb25zIHtcclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBwcml2YXRlIG56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgYmxvY2sgPSAoKSA9PiBuZXcgTnpCbG9ja1Njcm9sbFN0cmF0ZWd5KHRoaXMuZG9jdW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMubnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSk7XHJcbn1cclxuIl19