/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzSliderTrackComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzIncluded"]) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes["nzVertical"] || changes["nzOffset"] || changes["nzLength"]) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
            }
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCOzt5QkFDYixLQUFLO3lCQUNMLEtBQUs7UUEyQnpCLGFBQWtHLEVBQUUsQ0FBQzs7Ozs7O0lBbEJyRyxJQUNJLFVBQVUsQ0FBQyxLQUFjOztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUlELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sZ0JBQWE7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEU7UUFDRCxJQUFJLE9BQU8sa0JBQWUsT0FBTyxZQUFTLElBQUksT0FBTyxZQUFTLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsaUJBQWlCO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtRUFBdUQ7YUFDeEQ7Ozt1QkFNRSxLQUFLO3VCQUNMLEtBQUs7MEJBR0wsS0FBSzt5QkFFTCxLQUFLO3lCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zbGlkZXItdHJhY2snLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gRHluYW1pYyBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbnpPZmZzZXQ7XHJcbiAgQElucHV0KCkgbnpMZW5ndGg7XHJcblxyXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbnpDbGFzc05hbWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcclxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XHJcbiAgfVxyXG5cclxuICBzdHlsZTogeyBib3R0b20/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZywgbGVmdD86IHN0cmluZywgd2lkdGg/OiBzdHJpbmcsIHZpc2liaWxpdHk/OiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekluY2x1ZGVkKSB7XHJcbiAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMubnpJbmNsdWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpWZXJ0aWNhbCB8fCBjaGFuZ2VzLm56T2Zmc2V0IHx8IGNoYW5nZXMubnpMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gYCR7dGhpcy5uek9mZnNldH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5uek9mZnNldH0lYDtcclxuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19