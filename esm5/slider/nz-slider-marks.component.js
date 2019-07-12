/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    Object.defineProperty(NzSliderMarksComponent.prototype, "nzVertical", {
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
    Object.defineProperty(NzSliderMarksComponent.prototype, "nzIncluded", {
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
    NzSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    NzSliderMarksComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    function (index, attr) {
        return attr.id;
    };
    /**
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.attrs = this.nzMarksArray.map(function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var label = config;
            /** @type {?} */
            var style;
            if (_this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: (value - _this.nzMin) / range * 100 + "%"
                };
            }
            else {
                /** @type {?} */
                var marksCount = _this.nzMarksArray.length;
                /** @type {?} */
                var unit = 100 / (marksCount - 1);
                /** @type {?} */
                var markWidth = unit * 0.9;
                style = {
                    width: markWidth + "%",
                    marginLeft: -markWidth / 2 + "%",
                    left: (value - _this.nzMin) / range * 100 + "%"
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = tslib_1.__assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value: value,
                offset: offset,
                classes: (_a = {},
                    _a[_this.nzClassName + "-text"] = true,
                    _a),
                style: style,
                label: label
            };
        }); // END - map
    };
    /**
     * @return {?}
     */
    NzSliderMarksComponent.prototype.togglePointActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(function (attr) {
                /** @type {?} */
                var value = attr.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                attr.classes[_this.nzClassName + "-text-active"] = isActive;
            });
        }
    };
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
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
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
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
var MarksArray = /** @class */ (function (_super) {
    tslib_1.__extends(MarksArray, _super);
    function MarksArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarksArray;
}(Array));
export { MarksArray };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFRM0IsS0FBSzt5QkFDTCxLQUFLOztRQUd6QixvQkFBZ0MsSUFBSSxDQUFDO1FBQ3JDLG9CQUFnQyxJQUFJLENBQUM7O0lBUXJDLHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjOztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBU0QsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxrQkFBZTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sb0JBQWlCLE9BQU8sZ0JBQWEsSUFBSSxPQUFPLGdCQUFhLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsSUFBc0g7UUFDN0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7O0lB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEduQyxJQUFBOzs7Z0JBdkhBO0lBeUhDLENBQUE7QUFGRCxpQkFFQzs7Ozs7QUFHRCxJQUFBO0lBQWdDLHNDQUFzRDs7OztxQkE1SHRGO0VBNEhnQyxLQUFLLEVBTXBDLENBQUE7QUFORCxzQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1tYXJrcycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcclxuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogTWFya3NBcnJheTtcclxuXHJcbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcclxuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7IC8vIFJlcXVpcmVkXHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjsgLy8gUmVxdWlyZWRcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikgeyAvLyBSZXF1aXJlZFxyXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpJbmNsdWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxyXG4gIGF0dHJzOiBBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0LCBsYWJlbDogTWFyayB9PjsgLy8gcG9pbnRzIGZvciBpbm5lciB1c2VcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XHJcbiAgICAgIHRoaXMuYnVpbGRBdHRycygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0LCBsYWJlbDogTWFyayB9KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhdHRyLmlkO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRBdHRycygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uek1heCAtIHRoaXMubnpNaW47XHJcbiAgICB0aGlzLmF0dHJzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcclxuICAgICAgLy8gY2FsYyBzdHlsZXNcclxuICAgICAgbGV0IGxhYmVsID0gY29uZmlnO1xyXG4gICAgICBsZXQgc3R5bGU6IG9iamVjdDtcclxuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xyXG4gICAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXHJcbiAgICAgICAgICBib3R0b20gICAgICA6IGAkeyh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UgKiAxMDB9JWBcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1hcmtzQ291bnQgPSB0aGlzLm56TWFya3NBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XHJcbiAgICAgICAgY29uc3QgbWFya1dpZHRoID0gdW5pdCAqIDAuOTtcclxuICAgICAgICBzdHlsZSA9IHtcclxuICAgICAgICAgIHdpZHRoICAgICA6IGAke21hcmtXaWR0aH0lYCxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGAkey1tYXJrV2lkdGggLyAyfSVgLFxyXG4gICAgICAgICAgbGVmdCAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSAqIDEwMH0lYFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gY3VzdG9tIGNvbmZpZ3VyYXRpb25cclxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbGFiZWwgPSBjb25maWcubGFiZWw7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zdHlsZSkge1xyXG4gICAgICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZCAgICAgOiB2YWx1ZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgWyBgJHt0aGlzLm56Q2xhc3NOYW1lfS10ZXh0YCBdOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHlsZSxcclxuICAgICAgICBsYWJlbFxyXG4gICAgICB9O1xyXG4gICAgfSk7IC8vIEVORCAtIG1hcFxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdHRycyAmJiB0aGlzLm56TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLm56VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxyXG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCk7XHJcbiAgICAgICAgYXR0ci5jbGFzc2VzWyBgJHt0aGlzLm56Q2xhc3NOYW1lfS10ZXh0LWFjdGl2ZWAgXSA9IGlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBERUZJTklUSU9OU1xyXG5cclxuZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IHtcclxuICBzdHlsZTogb2JqZWN0O1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya3Mge1xyXG4gIG51bWJlcjogTWFyaztcclxufVxyXG5cclxuLy8gVE9ETzogZXh0ZW5kcyBBcnJheSBjb3VsZCBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gdGFyZ2V0aW5nIGVzNSBvciBiZWxvd1xyXG5leHBvcnQgY2xhc3MgTWFya3NBcnJheSBleHRlbmRzIEFycmF5PHsgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNvbmZpZzogTWFyayB9PiB7XHJcbiAgWyBpbmRleDogbnVtYmVyIF06IHtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxuICAgIGNvbmZpZzogTWFyaztcclxuICB9XHJcbn1cclxuIl19