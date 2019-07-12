/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzSliderTrackComponent = /** @class */ (function () {
    function NzSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderTrackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzIncluded"]) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes["nzVertical"] || changes["nzOffset"] || changes["nzLength"]) {
            if (this.nzVertical) {
                this.style.bottom = this.nzOffset + "%";
                this.style.height = this.nzLength + "%";
            }
            else {
                this.style.left = this.nzOffset + "%";
                this.style.width = this.nzLength + "%";
            }
        }
    };
    NzSliderTrackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-track',
                    preserveWhitespaces: false,
                    template: "<div [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    NzSliderTrackComponent.propDecorators = {
        nzOffset: [{ type: Input }],
        nzLength: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    return NzSliderTrackComponent;
}());
export { NzSliderTrackComponent };
function NzSliderTrackComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderTrackComponent.prototype._vertical;
    /** @type {?} */
    NzSliderTrackComponent.prototype._included;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderTrackComponent.prototype.style;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O3lCQVEzQixLQUFLO3lCQUNMLEtBQUs7UUEyQnpCLGFBQWtHLEVBQUUsQ0FBQzs7SUFsQnJHLHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjOztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBUUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxnQkFBYTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxrQkFBZSxPQUFPLFlBQVMsSUFBSSxPQUFPLFlBQVMsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsaUJBQWlCO29CQUN0QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixtRUFBdUQ7aUJBQ3hEOzs7MkJBTUUsS0FBSzsyQkFDTCxLQUFLOzhCQUdMLEtBQUs7NkJBRUwsS0FBSzs2QkFTTCxLQUFLOztpQ0E3QlI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLXRyYWNrJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0O1xyXG4gIEBJbnB1dCgpIG56TGVuZ3RoO1xyXG5cclxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xyXG4gIH1cclxuXHJcbiAgc3R5bGU6IHsgYm90dG9tPzogc3RyaW5nLCBoZWlnaHQ/OiBzdHJpbmcsIGxlZnQ/OiBzdHJpbmcsIHdpZHRoPzogc3RyaW5nLCB2aXNpYmlsaXR5Pzogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpJbmNsdWRlZCkge1xyXG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLm56SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56VmVydGljYWwgfHwgY2hhbmdlcy5uek9mZnNldCB8fCBjaGFuZ2VzLm56TGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm56TGVuZ3RofSVgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMubnpPZmZzZXR9JWA7XHJcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==