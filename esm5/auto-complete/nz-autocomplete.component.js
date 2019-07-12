/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { InputBoolean } from '../core/util/convert';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
function AutocompleteDataSourceItem_tsickle_Closure_declarations() {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.selectionChange = new EventEmitter();
        this.showPanel = false;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, tslib_1.__spread(_this.options.map(function (option) { return option.selectionChange; })));
            }
            return _this.ngZone.onStable
                .asObservable()
                .pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: /**
         * Options accessor, its source may be content or dataSource
         * @return {?}
         */
        function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.optionsInit();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteComponent.prototype.getOptionIndex = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.optionsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe(function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout(function () { return _this.setVisibility(); });
            }
            _this.subscribeOptionChanges();
        });
    };
    /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach(function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter(function (event) { return event.isUserInput; }))
            .subscribe(function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        });
    };
    NzAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-autocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [@dropDownAnimation]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\" [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                    animations: [
                        dropDownAnimation
                    ],
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzAutocompleteComponent.propDecorators = {
        nzWidth: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzDefaultActiveFirstOption: [{ type: Input }],
        nzBackfill: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        selectionChange: [{ type: Output }],
        fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
        fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        content: [{ type: ViewChild, args: ['content',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());
export { NzAutocompleteComponent };
function NzAutocompleteComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDataSource;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dropDownPosition;
    /**
     * Provided by content
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * Provided by dataSource
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * cdk-overlay
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
    /**
     * Options changes listener
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /** @type {?} */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzAutocompleteComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUMzQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw2QkFBNkIsRUFBMkIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lBaUYxRyxpQ0FBb0IsaUJBQW9DLEVBQVUsTUFBYztRQUFoRixpQkFDQztRQURtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQS9DaEYsMEJBQThCLEVBQUUsQ0FBQztRQUNqQyxzQkFBdUQsRUFBRSxDQUFDO1FBQzFELGtDQUFzRCxJQUFJLENBQUM7UUFDM0Qsa0JBQXNDLEtBQUssQ0FBQztRQUU1Qyx1QkFBa0YsSUFBSSxZQUFZLEVBQWlDLENBQUM7UUFFcEksaUJBQXFCLEtBQUssQ0FBQztRQUMzQixjQUFrQixLQUFLLENBQUM7UUFFeEIsd0JB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QUFJLEVBQUU7d0NBRXBFLFlBQVksU0FBQyw2QkFBNkI7MkJBRzFDLFNBQVMsU0FBQyxXQUFXO3dCQUNyQixTQUFTLFNBQUMsT0FBTzswQkFDakIsU0FBUyxTQUFDLFNBQVM7OztRQTlCVixZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7OztrQ0F6RDFCOztTQW1EYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3R5cGVzL2Ryb3AtZG93bi1wb3NpdGlvbic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2UgPSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbVtdIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hdXRvY29tcGxldGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xyXG4gICAgZHJvcERvd25BbmltYXRpb25cclxuICBdLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcclxuICAgICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCYWNrZmlsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4oKTtcclxuXHJcbiAgc2hvd1BhbmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWN0aXZlSXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgYWNjZXNzb3IsIGl0cyBzb3VyY2UgbWF5IGJlIGNvbnRlbnQgb3IgZGF0YVNvdXJjZVxyXG4gICAqL1xyXG4gIGdldCBvcHRpb25zKCk6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgLy8gZmlyc3QgZGF0YVNvdXJjZVxyXG4gICAgaWYgKHRoaXMubnpEYXRhU291cmNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21Db250ZW50T3B0aW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBQcm92aWRlZCBieSBjb250ZW50ICovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBmcm9tQ29udGVudE9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XHJcbiAgLyoqIFByb3ZpZGVkIGJ5IGRhdGFTb3VyY2UgKi9cclxuICBAVmlld0NoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIC8qKiBjZGstb3ZlcmxheSAqL1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICAvKiogT3B0aW9ucyBjaGFuZ2VzIGxpc3RlbmVyICovXHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4gPSBkZWZlcigoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBtZXJnZSguLi50aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0aW9uQ2hhbmdlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUub25TdGFibGVcclxuICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgLnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb25zSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKVsgaW5kZXggXTtcclxuICAgIGlmIChhY3RpdmVJdGVtICYmICFhY3RpdmVJdGVtLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtO1xyXG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRBY3RpdmVTdHlsZXMoKTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDw9IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxID8gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDogMDtcclxuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMSA8IDAgPyB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMTtcclxuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShwcmV2aW91c0luZGV4KTtcclxuICB9XHJcblxyXG4gIGdldE9wdGlvbkluZGV4KG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWR1Y2UoKHJlc3VsdDogbnVtYmVyLCBjdXJyZW50OiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyAob3B0aW9uID09PSBjdXJyZW50ID8gaW5kZXggOiB1bmRlZmluZWQpIDogcmVzdWx0O1xyXG4gICAgfSwgdW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpO1xyXG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMubnpEYXRhU291cmNlID8gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnMuY2hhbmdlcyA6IHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zLmNoYW5nZXM7XHJcblxyXG4gICAgLy8gYXN5bmNcclxuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICBpZiAoIWUuZGlydHkgJiYgdGhpcy5pc09wZW4pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0VmlzaWJpbGl0eSgpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIHN0YXR1cyBvZiBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIGRlc2VsZWN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcclxuICAgICAgICBpZiAoZGVzZWxlY3QpIHtcclxuICAgICAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXNcclxuICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKSA9PiBldmVudC5pc1VzZXJJbnB1dCkpXHJcbiAgICAuc3Vic2NyaWJlKChldmVudDogTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IHtcclxuICAgICAgZXZlbnQuc291cmNlLnNlbGVjdCgpO1xyXG4gICAgICBldmVudC5zb3VyY2Uuc2V0QWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGV2ZW50LnNvdXJjZTtcclxuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSB0aGlzLmdldE9wdGlvbkluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XHJcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQuc291cmNlLCB0cnVlKTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChldmVudC5zb3VyY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==