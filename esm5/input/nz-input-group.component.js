/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { NzInputDirective } from './nz-input.directive';
var NzInputGroupComponent = /** @class */ (function () {
    function NzInputGroupComponent() {
        this._size = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
    }
    Object.defineProperty(NzInputGroupComponent.prototype, "nzSize", {
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
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAddOn", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffixWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isAffix) && (!this.isAddOn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(function (item) { return item.nzSize = _this.nzSize; });
        }
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenInputSize();
    };
    NzInputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-group',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\">\r\n    <i nz-icon [ngClass]=\"nzAddOnBeforeIcon\" *ngIf=\"nzAddOnBeforeIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnBefore\">{{ nzAddOnBefore }}</ng-container>\r\n  </span>\r\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\r\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n  </span>\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\">\r\n    <i nz-icon [ngClass]=\"nzAddOnAfterIcon\" *ngIf=\"nzAddOnAfterIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzAddOnAfter\">{{ nzAddOnAfter }}</ng-container>\r\n  </span>\r\n</span>\r\n<ng-container *ngIf=\"isAffix && !isAddOn\">\r\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n</ng-container>\r\n<ng-template #affixTemplate>\r\n  <span class=\"ant-input-prefix\" *ngIf=\"nzPrefix || nzPrefixIcon\">\r\n    <!-- TODO: should have a class to set its color, cc: antd-->\r\n    <i nz-icon [ngClass]=\"nzPrefixIcon\" *ngIf=\"nzPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\r\n  </span>\r\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-suffix\" *ngIf=\"nzSuffix || nzSuffixIcon\">\r\n    <i nz-icon [ngClass]=\"nzSuffixIcon\" *ngIf=\"nzSuffixIcon\"></i>\r\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    host: {
                        '[class.ant-input-group-compact]': 'nzCompact',
                        '[class.ant-input-search-enter-button]': 'nzSearch',
                        '[class.ant-input-search]': 'nzSearch',
                        '[class.ant-input-search-sm]': 'isSmallSearch',
                        '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                        '[class.ant-input-group-wrapper]': 'isAddOn',
                        '[class.ant-input-group]': 'isGroup',
                        '[class.ant-input-group-lg]': 'isLargeGroup',
                        '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                        '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                        '[class.ant-input-search-lg]': 'isLargeSearch',
                        '[class.ant-input-group-sm]': 'isSmallGroup',
                        '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                        '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputGroupComponent.ctorParameters = function () { return []; };
    NzInputGroupComponent.propDecorators = {
        listOfNzInputDirective: [{ type: ContentChildren, args: [NzInputDirective,] }],
        nzAddOnBeforeIcon: [{ type: Input }],
        nzAddOnAfterIcon: [{ type: Input }],
        nzPrefixIcon: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzAddOnBefore: [{ type: Input }],
        nzAddOnAfter: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzCompact: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzCompact", void 0);
    return NzInputGroupComponent;
}());
export { NzInputGroupComponent };
function NzInputGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputGroupComponent.prototype.listOfNzInputDirective;
    /** @type {?} */
    NzInputGroupComponent.prototype._size;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSearch;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzCompact;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBQ0wsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBK0d0RDtxQkFuRitCLFNBQVM7UUFTeEMsZ0JBQW9DLEtBQUssQ0FBQztRQUMxQyxpQkFBcUMsS0FBSyxDQUFDO0tBMEUxQztJQXhFRCxzQkFBYSx5Q0FBTTs7OztRQUtuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFQRCxVQUFvQixLQUFvQjtZQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQzs7O09BQUE7SUFNRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGOzs7T0FBQTtJ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b0MsRUFBSyxjQUFjO3dCQUN2RCxvQ0FBb0MsRUFBSyxxQkFBcUI7cUJBQy9EO2lCQUNGOzs7Ozt5Q0FHRSxlQUFlLFNBQUMsZ0JBQWdCO29DQUVoQyxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUVMLEtBQUs7OztRQUhJLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7O2dDQXBEMUI7O1NBd0NhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1pbnB1dC1ncm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJyAgICAgIDogJ256Q29tcGFjdCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uXSc6ICduelNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJyAgICAgICAgICAgICA6ICduelNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21dJyAgICAgICAgICA6ICdpc1NtYWxsU2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXJdJyAgICAgIDogJ2lzQWZmaXhXcmFwcGVyJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJyAgICAgIDogJ2lzQWRkT24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJyAgICAgICAgICAgICAgOiAnaXNHcm91cCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nICAgICAgICAgICA6ICdpc0xhcmdlR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nICAgOiAnaXNMYXJnZUdyb3VwV3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXScgICA6ICdpc0xhcmdlQWZmaXgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxnXScgICAgICAgICAgOiAnaXNMYXJnZVNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nICAgICAgICAgICA6ICdpc1NtYWxsR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nICAgOiAnaXNTbWFsbEFmZml4JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJyAgIDogJ2lzU21hbGxHcm91cFdyYXBwZXInXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJbnB1dERpcmVjdGl2ZSkgbGlzdE9mTnpJbnB1dERpcmVjdGl2ZTogUXVlcnlMaXN0PE56SW5wdXREaXJlY3RpdmU+O1xyXG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpBZGRPbkJlZm9yZUljb246IE5nQ2xhc3NUeXBlO1xyXG4gIEBJbnB1dCgpIG56QWRkT25BZnRlckljb246IE5nQ2xhc3NUeXBlO1xyXG4gIEBJbnB1dCgpIG56UHJlZml4SWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpTdWZmaXhJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekFkZE9uQWZ0ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelN1ZmZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29tcGFjdCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpTaXplKHZhbHVlOiBOelNpemVMRFNUeXBlKSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTaXplKCk6IE56U2l6ZUxEU1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJztcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnc21hbGwnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWZmaXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCEhKHRoaXMubnpTdWZmaXggfHwgdGhpcy5uelByZWZpeCB8fCB0aGlzLm56UHJlZml4SWNvbiB8fCB0aGlzLm56U3VmZml4SWNvbikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5uekFkZE9uQWZ0ZXIgfHwgdGhpcy5uekFkZE9uQmVmb3JlIHx8IHRoaXMubnpBZGRPbkFmdGVySWNvbiB8fCB0aGlzLm56QWRkT25CZWZvcmVJY29uKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FmZml4V3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0dyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghdGhpcy5pc0FmZml4KSAmJiAoIXRoaXMuaXNBZGRPbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWRkT24gJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWFyY2ggJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxHcm91cCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzR3JvdXAgJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsR3JvdXBXcmFwcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2VhcmNoICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IGl0ZW0ubnpTaXplID0gdGhpcy5uelNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==