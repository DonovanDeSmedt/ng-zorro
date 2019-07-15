/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** get some code from https://github.com/angular/material2 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toNumber } from '../core/util/convert';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
/**
 * @record
 */
export function NzAnimatedInterface() { }
function NzAnimatedInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    NzAnimatedInterface.prototype.tabPane;
}
var NzTabChangeEvent = /** @class */ (function () {
    function NzTabChangeEvent() {
    }
    return NzTabChangeEvent;
}());
export { NzTabChangeEvent };
function NzTabChangeEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
var NzTabSetComponent = /** @class */ (function () {
    function NzTabSetComponent(renderer, nzUpdateHostClassService, elementRef, cdr, 
    // tslint:disable-next-line:no-any
    document) {
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.document = document;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabPositionMode = 'horizontal';
        this.nzShowPagination = true;
        this.nzAnimated = true;
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzSize = 'default';
        this.nzType = 'line';
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.indexToSelect = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).inkBar === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).tabPane === true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["ant-tabs"] = true,
            _a["ant-tabs-vertical"] = (this.nzTabPosition === 'left') || (this.nzTabPosition === 'right'),
            _a["ant-tabs-" + this.nzTabPosition] = this.nzTabPosition,
            _a["ant-tabs-no-animation"] = (this.nzAnimated === false) || ((/** @type {?} */ (this.nzAnimated)).tabPane === false),
            _a["ant-tabs-" + this.nzType] = this.nzType,
            _a["ant-tabs-large"] = this.nzSize === 'large',
            _a["ant-tabs-small"] = this.nzSize === 'small',
            _a));
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    NzTabSetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        if (!disabled) {
            this.nzSelectedIndex = index;
            this.listOfNzTabComponent.toArray()[index].nzClick.emit();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach(function (item, i) {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    };
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.clampTabIndex = /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.subscribeToTabLabels = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge.apply(void 0, tslib_1.__spread(this.listOfNzTabComponent.map(function (tab) { return tab.stateChanges; }))).subscribe(function () { return _this.cdr.markForCheck(); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzTabPosition"]) {
            if ((this.nzTabPosition === 'top') || (this.nzTabPosition === 'bottom')) {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.nzTabPosition);
        }
        if (changes["nzType"]) {
            if (this.nzType === 'card') {
                this.nzAnimated = false;
            }
        }
        if (changes["nzSize"] || changes["nzAnimated"] || changes["nzTabPosition"] || changes["nzType"]) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            /** @type {?} */
            var indexToSelect_1 = this.indexToSelect = this.clampTabIndex(this.indexToSelect);
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                /** @type {?} */
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(function () {
                    _this.listOfNzTabComponent.forEach(function (tab, index) { return tab.isActive = index === indexToSelect_1; });
                    if (!isFirstRun_1) {
                        _this.nzSelectedIndexChange.emit(indexToSelect_1);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach(function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            });
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe(function () {
            /** @type {?} */
            var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                /** @type {?} */
                var tabs = _this.listOfNzTabComponent.toArray();
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        _this.indexToSelect = _this._selectedIndex = i;
                        break;
                    }
                }
            }
            _this.subscribeToTabLabels();
            _this.cdr.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setPosition(this.nzTabPosition);
    };
    NzTabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tabset',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-container *ngIf=\"listOfNzTabComponent\">\n  <div nz-tabs-nav\n    role=\"tablist\"\n    tabindex=\"0\"\n    class=\"ant-tabs-bar\"\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\n    [nzType]=\"nzType\"\n    [nzShowPagination]=\"nzShowPagination\"\n    [nzPositionMode]=\"tabPositionMode\"\n    [nzAnimated]=\"inkBarAnimated\"\n    [ngStyle]=\"nzTabBarStyle\"\n    [nzHideBar]=\"nzHideAll\"\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n    [selectedIndex]=\"nzSelectedIndex\"\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\n    <div nz-tab-label\n      role=\"tab\"\n      [style.margin-right.px]=\"nzTabBarGutter\"\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n      [disabled]=\"tab.nzDisabled\"\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle\">{{ tab.nzTitle }}</ng-container>\n    </div>\n  </div>\n  <div #tabContent\n    class=\"ant-tabs-content\"\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n    [style.margin-left.%]=\"tabPaneAnimated && (-nzSelectedIndex*100)\">\n    <div nz-tab-body\n      class=\"ant-tabs-tabpane\"\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n      [forceRender]=\"tab.nzForceRender\"\n      [content]=\"tab.content\">\n    </div>\n  </div>\n</ng-container>",
                    styles: ["\n    nz-tabset {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzTabSetComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzTabSetComponent.propDecorators = {
        listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
        nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent,] }],
        tabContent: [{ type: ViewChild, args: ['tabContent',] }],
        nzTabBarExtraContent: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzAnimated: [{ type: Input }],
        nzHideAll: [{ type: Input }],
        nzTabPosition: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTabBarGutter: [{ type: Input }],
        nzTabBarStyle: [{ type: Input }],
        nzType: [{ type: Input }],
        nzOnNextClick: [{ type: Output }],
        nzOnPrevClick: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzSelectedIndexChange: [{ type: Output }],
        nzSelectedIndex: [{ type: Input }]
    };
    return NzTabSetComponent;
}());
export { NzTabSetComponent };
function NzTabSetComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabSetComponent.prototype.indexToSelect;
    /** @type {?} */
    NzTabSetComponent.prototype.el;
    /** @type {?} */
    NzTabSetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     */
    NzTabSetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     */
    NzTabSetComponent.prototype.tabLabelSubscription;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSize;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzType;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectedIndexChange;
    /** @type {?} */
    NzTabSetComponent.prototype.renderer;
    /** @type {?} */
    NzTabSetComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzTabSetComponent.prototype.elementRef;
    /** @type {?} */
    NzTabSetComponent.prototype.cdr;
    /** @type {?} */
    NzTabSetComponent.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQU83RCxJQUFBOzs7MkJBdkNBO0lBMENDLENBQUE7QUFIRCw0QkFHQzs7Ozs7Ozs7SUE0SEMsMkJBQ1UsVUFDQSwwQkFDQSxZQUNBOztJQUU4QixRQUFhO1FBTDNDLGFBQVEsR0FBUixRQUFRO1FBQ1IsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4QixlQUFVLEdBQVYsVUFBVTtRQUNWLFFBQUcsR0FBSCxHQUFHO1FBRTJCLGFBQVEsR0FBUixRQUFRLENBQUs7NkJBOUdkLENBQUM7a0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOzhCQUNmLElBQUk7Ozs7Z0NBRWpCLFlBQVksQ0FBQyxLQUFL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Q2hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELDJzRUFBaUQ7NkJBQzFCLHFEQUl0QjtpQkFDRjs7OztnQkF6Q0MsU0FBUztnQkFRRix3QkFBd0I7Z0JBakIvQixVQUFVO2dCQUhWLGlCQUFpQjtnREFxS2QsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7dUNBdEc3QixlQUFlLFNBQUMsY0FBYztxQ0FDOUIsU0FBUyxTQUFDLGtCQUFrQjs2QkFDNUIsU0FBUyxTQUFDLFlBQVk7dUNBQ3RCLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLE1BQU07Z0NBQ04sTUFBTTtpQ0FDTixNQUFNO3dDQUNOLE1BQU07a0NBRU4sS0FBSzs7NEJBdkZSOztTQTZEYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcywgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFicy1uYXYuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBOekFuaW1hdGVkSW50ZXJmYWNlIHtcbiAgaW5rQmFyOiBib29sZWFuO1xuICB0YWJQYW5lOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTnpUYWJDaGFuZ2VFdmVudCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHRhYjogTnpUYWJDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIE56VGFiUG9zaXRpb24gPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIE56VGFiVHlwZSA9ICdsaW5lJyB8ICdjYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWJzZXQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICBuei10YWJzZXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJTZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGFicyBiZWluZyBhZGRlZC9yZW1vdmVkLiAqL1xuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gY2hhbmdlcyBpbiB0aGUgdGFiIGxhYmVscy4gKi9cbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgdGFiUG9zaXRpb25Nb2RlOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgQENvbnRlbnRDaGlsZHJlbihOelRhYkNvbXBvbmVudCkgbGlzdE9mTnpUYWJDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRhYkNvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoTnpUYWJzTmF2Q29tcG9uZW50KSBuelRhYnNOYXZDb21wb25lbnQ6IE56VGFic05hdkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QW5pbWF0ZWQ6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpIaWRlQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VGFiUG9zaXRpb246IE56VGFiUG9zaXRpb24gPSAndG9wJztcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRhYkJhckd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBuelRhYkJhclN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIG56VHlwZTogTnpUYWJUeXBlID0gJ2xpbmUnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IG56U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSkgfHwgKCh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkuaW5rQmFyID09PSB0cnVlKTtcbiAgfVxuXG4gIGdldCB0YWJQYW5lQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUpIHx8ICgodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IHRydWUpO1xuICB9XG5cbiAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJDb250ZW50KSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCxcbiAgICAgIHtcbiAgICAgICAgWyBgYW50LXRhYnNgIF0gICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBbIGBhbnQtdGFicy12ZXJ0aWNhbGAgXSAgICAgICAgICAgICA6ICh0aGlzLm56VGFiUG9zaXRpb24gPT09ICdsZWZ0JykgfHwgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0JyksXG4gICAgICAgIFsgYGFudC10YWJzLSR7dGhpcy5uelRhYlBvc2l0aW9ufWAgXTogdGhpcy5uelRhYlBvc2l0aW9uLFxuICAgICAgICBbIGBhbnQtdGFicy1uby1hbmltYXRpb25gIF0gICAgICAgICA6ICh0aGlzLm56QW5pbWF0ZWQgPT09IGZhbHNlKSB8fCAoKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZSksXG4gICAgICAgIFsgYGFudC10YWJzLSR7dGhpcy5uelR5cGV9YCBdICAgICAgIDogdGhpcy5uelR5cGUsXG4gICAgICAgIFsgYGFudC10YWJzLWxhcmdlYCBdICAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXG4gICAgICAgIFsgYGFudC10YWJzLXNtYWxsYCBdICAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdzbWFsbCdcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKVsgaW5kZXggXS5uekNsaWNrLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpWyBpbmRleCBdO1xuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIGl0ZW0ubnpEZXNlbGVjdC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXZlbnQudGFiLm56U2VsZWN0LmVtaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubWFwKHRhYiA9PiB0YWIuc3RhdGVDaGFuZ2VzKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VGFiUG9zaXRpb24pIHtcbiAgICAgIGlmICgodGhpcy5uelRhYlBvc2l0aW9uID09PSAndG9wJykgfHwgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpKSB7XG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAndmVydGljYWwnO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLm56VGFiUG9zaXRpb24pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelR5cGUpIHtcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NhcmQnKSB7XG4gICAgICAgIHRoaXMubnpBbmltYXRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelNpemUgfHwgY2hhbmdlcy5uekFuaW1hdGVkIHx8IGNoYW5nZXMubnpUYWJQb3NpdGlvbiB8fCBjaGFuZ2VzLm56VHlwZSkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLl9zZWxlY3RlZEluZGV4ID09IG51bGw7XG4gICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gdGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpO1xuXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XG4gICAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBOelRhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxuICAgIC8vIGFibGUgdG8gcmUtcmVuZGVyIHRoZSBjb250ZW50IGFzIG5ldyB0YWJzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xuXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGFic1sgaSBdLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYF9pbmRleFRvU2VsZWN0YCBhbmQgYF9zZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXG4gICAgICAgICAgICAvLyBhZGRpbmcgYSB0YWIgd2l0aGluIHRoZSBgc2VsZWN0ZWRJbmRleENoYW5nZWAgZXZlbnQuXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XG4gIH1cblxufVxuIl19