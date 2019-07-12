/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzSliderMarksComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
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
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    trackById(index, attr) {
        return attr.id;
    }
    /**
     * @return {?}
     */
    buildAttrs() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            let label = config;
            /** @type {?} */
            let style;
            if (this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: `${(value - this.nzMin) / range * 100}%`
                };
            }
            else {
                /** @type {?} */
                const marksCount = this.nzMarksArray.length;
                /** @type {?} */
                const unit = 100 / (marksCount - 1);
                /** @type {?} */
                const markWidth = unit * 0.9;
                style = {
                    width: `${markWidth}%`,
                    marginLeft: `${-markWidth / 2}%`,
                    left: `${(value - this.nzMin) / range * 100}%`
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = Object.assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value,
                offset,
                classes: {
                    [`${this.nzClassName}-text`]: true
                },
                style,
                label
            };
        }); // END - map
    }
    /**
     * @return {?}
     */
    togglePointActive() {
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(attr => {
                /** @type {?} */
                const value = attr.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                attr.classes[`${this.nzClassName}-text-active`] = isActive;
            });
        }
    }
}
NzSliderMarksComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-marks',
                preserveWhitespaces: false,
                template: "<div [class]=\"nzClassName\">\r\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\r\n</div>"
            }] }
];
NzSliderMarksComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
function NzSliderMarksComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderMarksComponent.prototype._vertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype._included;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.attrs;
}
export class Marks {
}
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
export class MarksArray extends Array {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCOzt5QkFDYixLQUFLO3lCQUNMLEtBQUs7O1FBR3pCLG9CQUFnQyxJQUFJLENBQUM7UUFDckMsb0JBQWdDLElBQUksQ0FBQzs7Ozs7O0lBUXJDLElBQ0ksVUFBVSxDQUFDLEtBQWM7O1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBS0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxrQkFBZTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sb0JBQWlCLE9BQU8sZ0JBQWEsSUFBSSxPQUFPLGdCQUFhLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFzSDtRQUM3SSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCxVQUFV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UixNQUFNLE9BQU8sS0FBSztDQUVqQjs7Ozs7QUFHRCxNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQXNEO0NBTXJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLW1hcmtzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2luY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcclxuICBASW5wdXQoKSBuelVwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xyXG5cclxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xyXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpNaW46IG51bWJlcjsgLy8gUmVxdWlyZWRcclxuICBASW5wdXQoKSBuek1heDogbnVtYmVyOyAvLyBSZXF1aXJlZFxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogdXNpbmcgbmFtZWQgaW50ZXJmYWNlXHJcbiAgYXR0cnM6IEFycmF5PHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QsIGxhYmVsOiBNYXJrIH0+OyAvLyBwb2ludHMgZm9yIGlubmVyIHVzZVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcclxuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGF0dHI6IHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QsIGxhYmVsOiBNYXJrIH0pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGF0dHIuaWQ7XHJcbiAgfVxyXG5cclxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm56TWF4IC0gdGhpcy5uek1pbjtcclxuICAgIHRoaXMuYXR0cnMgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xyXG4gICAgICAvLyBjYWxjIHN0eWxlc1xyXG4gICAgICBsZXQgbGFiZWwgPSBjb25maWc7XHJcbiAgICAgIGxldCBzdHlsZTogb2JqZWN0O1xyXG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcclxuICAgICAgICAgIGJvdHRvbSAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSAqIDEwMH0lYFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWFya3NDb3VudCA9IHRoaXMubnpNYXJrc0FycmF5Lmxlbmd0aDtcclxuICAgICAgICBjb25zdCB1bml0ID0gMTAwIC8gKG1hcmtzQ291bnQgLSAxKTtcclxuICAgICAgICBjb25zdCBtYXJrV2lkdGggPSB1bml0ICogMC45O1xyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgd2lkdGggICAgIDogYCR7bWFya1dpZHRofSVgLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogYCR7LW1hcmtXaWR0aCAvIDJ9JWAsXHJcbiAgICAgICAgICBsZWZ0ICAgICAgOiBgJHsodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlICogMTAwfSVgXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvLyBjdXN0b20gY29uZmlndXJhdGlvblxyXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBsYWJlbCA9IGNvbmZpZy5sYWJlbDtcclxuICAgICAgICBpZiAoY29uZmlnLnN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgICBbIGAke3RoaXMubnpDbGFzc05hbWV9LXRleHRgIF06IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlLFxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgIH07XHJcbiAgICB9KTsgLy8gRU5EIC0gbWFwXHJcbiAgfVxyXG5cclxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XHJcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kKTtcclxuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMubnpDbGFzc05hbWV9LXRleHQtYWN0aXZlYCBdID0gaXNBY3RpdmU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIERFRklOSVRJT05TXHJcblxyXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwge1xyXG4gIHN0eWxlOiBvYmplY3Q7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrcyB7XHJcbiAgbnVtYmVyOiBNYXJrO1xyXG59XHJcblxyXG4vLyBUT0RPOiBleHRlbmRzIEFycmF5IGNvdWxkIGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiB0YXJnZXRpbmcgZXM1IG9yIGJlbG93XHJcbmV4cG9ydCBjbGFzcyBNYXJrc0FycmF5IGV4dGVuZHMgQXJyYXk8eyB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY29uZmlnOiBNYXJrIH0+IHtcclxuICBbIGluZGV4OiBudW1iZXIgXToge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIG9mZnNldDogbnVtYmVyO1xyXG4gICAgY29uZmlnOiBNYXJrO1xyXG4gIH1cclxufVxyXG4iXX0=