/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './nz-slider-marks.component';
export class NzSliderStepComponent {
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
        const orient = this.nzVertical ? 'bottom' : 'left';
        /** @type {?} */
        const prefixCls = this.nzPrefixCls;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset } = mark;
            return {
                id: value,
                value,
                offset,
                style: {
                    [orient]: `${offset}%`
                },
                classes: {
                    [`${prefixCls}-dot`]: true,
                    [`${prefixCls}-dot-active`]: false
                }
            };
        });
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
                attr.classes[`${this.nzPrefixCls}-dot-active`] = isActive;
            });
        }
    }
}
NzSliderStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-step',
                preserveWhitespaces: false,
                template: "<div class=\"{{nzPrefixCls}}-step\">\r\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\r\n</div>"
            }] }
];
NzSliderStepComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzPrefixCls: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
function NzSliderStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderStepComponent.prototype._vertical;
    /** @type {?} */
    NzSliderStepComponent.prototype._included;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzPrefixCls;
    /** @type {?} */
    NzSliderStepComponent.prototype.attrs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3pELE1BQU0sT0FBTyxxQkFBcUI7O3lCQUNaLEtBQUs7eUJBQ0wsS0FBSzs7UUFHekIsb0JBQWdDLElBQUksQ0FBQztRQUNyQyxvQkFBZ0MsSUFBSSxDQUFDOzs7Ozs7SUFNckMsSUFDSSxVQUFVLENBQUMsS0FBYzs7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFLRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxvQkFBaUIsT0FBTyxnQkFBYSxJQUFJLE9BQU8sZ0JBQWEsRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQXlHO1FBQ2hJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUMvQixPQUFPO2dCQUNMLEVBQUUsRUFBTyxLQUFLO2dCQUNkLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixLQUFLLEVBQUk7b0JBQ1AsQ0FBRSxNQUFNLENBQUUsRUFBRSxHQUFHLE1BQU0sR0FBRztpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLENBQUUsR0FBRyxTQUFTLE1BQU0sQ0FBRSxFQUFTLElBQUk7b0JBQ25DLENBQUUsR0FBRyxTQUFTLGFBQWEsQ0FBRSxFQUFFLEtBQUs7aUJBQ3JDO2FBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3pCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBRSxHQUFHLElBQUksQ0FBQyxXQUFXLGFBQWEsQ0FBRSxHQUFHLFFBQVEsQ0FBQzthQUM3RCxDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxnQkFBZ0I7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGtMQUFzRDthQUN2RDs7OzJCQU1FLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUdMLEtBQUs7eUJBRUwsS0FBSzt5QkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5pbXBvcnQgeyBNYXJrc0FycmF5IH0gZnJvbSAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zbGlkZXItc3RlcCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLXN0ZXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlclN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gRHluYW1pYyBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1hcmtzQXJyYXk6IE1hcmtzQXJyYXk7XHJcblxyXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXHJcbiAgQElucHV0KCkgbnpQcmVmaXhDbHM6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikgeyAvLyBSZXF1aXJlZFxyXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpJbmNsdWRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxyXG4gIGF0dHJzOiBBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0IH0+O1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcclxuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGF0dHI6IHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QgfSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYXR0ci5pZDtcclxuICB9XHJcblxyXG4gIGJ1aWxkQXR0cnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLm56VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JztcclxuICAgIGNvbnN0IHByZWZpeENscyA9IHRoaXMubnpQcmVmaXhDbHM7XHJcbiAgICB0aGlzLmF0dHJzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQgfSA9IG1hcms7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQgICAgIDogdmFsdWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgIHN0eWxlICA6IHtcclxuICAgICAgICAgIFsgb3JpZW50IF06IGAke29mZnNldH0lYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdGAgXSAgICAgICA6IHRydWUsXHJcbiAgICAgICAgICBbIGAke3ByZWZpeENsc30tZG90LWFjdGl2ZWAgXTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXR0cnMgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcclxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQgJiYgdmFsdWUgPj0gdGhpcy5uekxvd2VyQm91bmQpO1xyXG4gICAgICAgIGF0dHIuY2xhc3Nlc1sgYCR7dGhpcy5uelByZWZpeENsc30tZG90LWFjdGl2ZWAgXSA9IGlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==