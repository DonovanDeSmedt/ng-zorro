/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, HostBinding, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
var NzColComponent = /** @class */ (function () {
    function NzColComponent(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    Object.defineProperty(NzColComponent.prototype, "paddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzColComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach(function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if ((typeof (_this[name]) === 'number') || (typeof (_this[name]) === 'string')) {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name].span] = _this[name] && isNotNil(_this[name].span);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-pull-" + _this[name].pull] = _this[name] && isNotNil(_this[name].pull);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-push-" + _this[name].push] = _this[name] && isNotNil(_this[name].push);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-offset-" + _this[name].offset] = _this[name] && isNotNil(_this[name].offset);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-order-" + _this[name].order] = _this[name] && isNotNil(_this[name].order);
                }
            }
        });
        return listClassMap;
    };
    Object.defineProperty(NzColComponent.prototype, "nzRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRowComponent || this.nzRowDirective;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzColComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-col',
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzColComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    NzColComponent.propDecorators = {
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColComponent;
}());
export { NzColComponent };
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUVSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0ZsRCx3QkFBb0Isd0JBQWtELEVBQVUsVUFBc0IsRUFBNkIsY0FBOEIsRUFBNkIsY0FBOEI7UUFBeE0sNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBNkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtrQkFuRWxNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt5QkFDbkMsU0FBUztLQW1FNUI7SUFqRUQsc0JBQ0ksdUNBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDbEQ7OztPQUFBO0lBRUQsc0JBQ0ksd0NBQVk7Ozs7UUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEOzs7T0FBQTtJQWNELHVHQUF1Rzs7Ozs7SUFDdkcsb0NBQVc7Ozs7SUFBWDs7O1FBQ0UsSUFBTSxRQUFRLGlDQUNQLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE1BQVEsSUFBYSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUNqRSxJQUFJLENBQUMsU0FBUyxlQUFVLElBQUksQ0FBQyxPQUFTLElBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FDbEUsSUFBSSxDQUFDLFNBQVMsZ0JBQVcsSUFBSSxDQUFDLFFBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUNuRSxJQUFJLENBQUMsU0FBUyxjQUFTLElBQUksQ0FBQyxNQUFRLElBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FDakUsSUFBSSxDQUFDLFNBQVMsY0FBUyxJQUFJLENBQUMsTUFBUSxJQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQ25FLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFDdkI7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbEU7Ozs7SUFFRCxzQ0FBYTs7O0lBQWI7UUFBQSxpQkFtQkM7O1FBbEJDLElBQU0sbUJBQW1CLEdBQUcsQ0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBRSxDQUFDOztRQUNoRixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7WUFDOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEQsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7b0JBQ2hGLFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsU0FBSSxLQUFJLENBQUUsSUFBSSxDQUFJLENBQUUsR0FBRyxJQUFJLENBQUM7aUJBQ3hFO3FCQUFNO29CQUNMLFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsU0FBSSxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBTSxDQUFFLEdBQUcsS0FBSSxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25ILFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsY0FBUyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBTSxDQUFFLEdBQUcsS0FBSSxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hILFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsY0FBUyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBTSxDQUFFLEdBQUcsS0FBSSxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hILFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsZ0JBQVcsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLE1BQVEsQ0FBRSxHQUFHLEtBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5SCxZQUFZLENBQUssS0FBSSxDQUFDLFNBQVMsU0FBSSxRQUFRLGVBQVUsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLEtBQU8sQ0FBRSxHQUFHLEtBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFFLElBQUksQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1SDthQUNGO1NBRUYsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxZQUFZLENBQUM7S0FDckI7SUFFRCxzQkFBSSxpQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDbkQ7OztPQUFBOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFtRDtRQUM3RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFLRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7O2dCQWpGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFFBQVE7b0JBQzdCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHFDQUE4QztpQkFDL0M7Ozs7Z0JBckJRLHdCQUF3QjtnQkFYL0IsVUFBVTtnQkFjSCxjQUFjLHVCQXVGb0YsUUFBUSxZQUFJLElBQUk7Z0JBdEZsSCxjQUFjLHVCQXNGK0ksUUFBUSxZQUFJLElBQUk7Ozs4QkFoRW5MLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7eUJBS3BDLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7eUJBNURSOztTQW9DYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcblxyXG5pbXBvcnQgeyBOelJvd0NvbXBvbmVudCB9IGZyb20gJy4vbnotcm93LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XHJcbiAgc3BhbjogbnVtYmVyO1xyXG4gIHB1bGw6IG51bWJlcjtcclxuICBwdXNoOiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgb3JkZXI6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNvbCcsXHJcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jb2wnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uelJvdyAmJiB0aGlzLm56Um93LmFjdHVhbEd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxyXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG56U3BhbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3JkZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UHVzaDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UHVsbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56WHM6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuek1kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56TGc6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelhYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuXHJcbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YCBdICAgICAgICAgOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5uek9yZGVyfWAgXSAgOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWAgXTogaXNOb3ROaWwodGhpcy5uek9mZnNldCksXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1bGwtJHt0aGlzLm56UHVsbH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLm56UHVzaH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLm56UHVzaCksXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcclxuICAgIGNvbnN0IGxpc3RPZlNpemVJbnB1dE5hbWUgPSBbICduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnIF07XHJcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXAgPSB7fTtcclxuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgY29uc3Qgc2l6ZU5hbWUgPSBuYW1lLnJlcGxhY2UoJ256JywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzWyBuYW1lIF0pKSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgKHRoaXNbIG5hbWUgXSkgPT09ICdudW1iZXInKSB8fCAodHlwZW9mICh0aGlzWyBuYW1lIF0pID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdfWAgXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdLnNwYW59YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5zcGFuKTtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LXB1bGwtJHt0aGlzWyBuYW1lIF0ucHVsbH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnB1bGwpO1xyXG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tcHVzaC0ke3RoaXNbIG5hbWUgXS5wdXNofWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ucHVzaCk7XHJcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vZmZzZXQtJHt0aGlzWyBuYW1lIF0ub2Zmc2V0fWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub2Zmc2V0KTtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9yZGVyLSR7dGhpc1sgbmFtZSBdLm9yZGVyfWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcclxuICB9XHJcblxyXG4gIGdldCBuelJvdygpOiBOelJvd0NvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5uelJvd0NvbXBvbmVudCB8fCB0aGlzLm56Um93RGlyZWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbIHByb3BlcnR5TmFtZTogc3RyaW5nIF06IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIl19