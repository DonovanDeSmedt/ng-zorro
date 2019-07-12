/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { EXPANDED_DROPDOWN_POSITIONS } from '../core/overlay/overlay-position-map';
import { arrayEquals, toArray } from '../core/util/array';
import { InputBoolean } from '../core/util/convert';
/** @type {?} */
var defaultDisplayRender = function (label) { return label.join(' / '); };
var ɵ0 = defaultDisplayRender;
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzSize = 'default';
        this.nzPlaceHolder = 'Please select';
        this.nzMouseEnterDelay = 150; // ms
        this.nzMouseLeaveDelay = 150; // ms
        this.nzTriggerAction = /** @type {?} */ (['click']);
        this.nzSelectionChange = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.nzVisibleChange = new EventEmitter(); // Not exposed, only for test
        this.nzChange = new EventEmitter(); // Not exposed, only for test
        this.el = this.elementRef.nativeElement;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.columns = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = tslib_1.__spread(EXPANDED_DROPDOWN_POSITIONS);
        this.isSearching = false;
        this.isFocused = false;
        this.isOpening = false;
        this.selectedOptions = [];
        this.activatedOptions = [];
        this._inputValue = '';
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: /**
         * @return {?}
         */
        function () { return this.columns[0]; },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
            if (!this.isSearching) {
                if (this.defaultValue && this.columns.length) {
                    this.initOptions(0);
                }
            }
            else {
                this.prepareSearchValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () { return this._inputValue; },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this._inputValue = inputValue;
            this.toggleSearchMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzMenuClassName] = !!this.nzMenuClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzColumnClassName] = !!this.nzColumnClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    //#region Menu
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(function () {
                        _this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled) {
            return;
        }
        if (this.menuVisible !== visible) {
            this.menuVisible = visible;
            this.cdr.detectChanges();
            if (visible) {
                this.loadRootOptions();
            }
            this.nzVisibleChange.emit(visible);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.loadRootOptions = /**
     * @return {?}
     */
    function () {
        if (!this.columns.length) {
            /** @type {?} */
            var root = {};
            this.loadChildrenAsync(root, -1);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isLoaded = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.findOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _this = this;
        /** @type {?} */
        var options = this.columns[index];
        if (options) {
            /** @type {?} */
            var value_1 = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(function (o) { return value_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.activateOnInit = /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        var _a;
        /** @type {?} */
        var option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : (_a = {},
                _a["" + this.nzValueProperty] = value,
                _a["" + this.nzLabelProperty] = value,
                _a);
        }
        this.setOptionActivated(option, index, false, false);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.initOptions = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var vs = this.defaultValue;
        /** @type {?} */
        var lastIndex = vs.length - 1;
        /** @type {?} */
        var load = function () {
            _this.activateOnInit(index, vs[index]);
            if (index < lastIndex) {
                _this.initOptions(index + 1);
            }
            if (index === lastIndex) {
                _this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildrenAsync(node, index - 1, load, this.afterWriteValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionActivated = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    function (option, columnIndex, select, loadChildren) {
        if (select === void 0) { select = false; }
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        // Set parent option and all ancestor options as active.
        for (var i = columnIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        // Set child options and all success options as inactive.
        if (columnIndex < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, columnIndex + 1);
        }
        // Load child options.
        if (option.children && option.children.length && !option.isLeaf) {
            option.children.forEach(function (child) { return child.parent = option; });
            this.setColumnData(option.children, columnIndex + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildrenAsync(option, columnIndex);
        }
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.cdr.detectChanges();
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderComponent.prototype.loadChildrenAsync = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, columnIndex, success, failure) {
        var _this = this;
        if (this.nzLoadData) {
            this.isLoading = columnIndex < 0;
            option.loading = true;
            this.nzLoadData(option, columnIndex).then(function () {
                option.loading = _this.isLoading = false;
                if (option.children) {
                    option.children.forEach(function (child) { return child.parent = columnIndex < 0 ? undefined : option; });
                    _this.setColumnData(option.children, columnIndex + 1);
                    _this.cdr.detectChanges();
                }
                if (success) {
                    success();
                }
            }, function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                _this.cdr.detectChanges();
                if (failure) {
                    failure();
                }
            });
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    function (option, columnIndex) {
        var _this = this;
        /** @type {?} */
        var shouldPerformSelection = function (o, i) {
            return typeof _this.nzChangeOn === 'function' ? _this.nzChangeOn(o, i) === true : false;
        };
        this.nzSelect.emit({ option: option, index: columnIndex });
        if (option.isLeaf || this.nzChangeOnSelect || shouldPerformSelection(option, columnIndex)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setColumnData = /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    function (options, columnIndex) {
        if (!arrayEquals(this.columns[columnIndex], options)) {
            this.columns[columnIndex] = options;
            if (columnIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, columnIndex + 1);
            }
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        this.onValueChange();
    };
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var values = [];
        this.selectedOptions.forEach(function (option) {
            values.push(_this.getOptionValue(option));
        });
        return values;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onValueChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getSubmitValue();
        if (!arrayEquals(this.value, value)) {
            this.defaultValue = null;
            this.value = value;
            this.onChange(value);
            if (value.length === 0) {
                this.nzClear.emit();
            }
            this.nzSelectionChange.emit(this.selectedOptions);
            this.nzChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.afterWriteValue = /**
     * @return {?}
     */
    function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    //#endregion
    //#region Mouse and keyboard event handlers, view children
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.isSearching && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            var mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.isSearching
            ? this.setSearchOptionActivated(/** @type {?} */ (option), event)
            : this.setOptionActivated(option, columnIndex, true);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.isSearching
                ? this.setSearchOptionActivated(/** @type {?} */ (option), null)
                : this.setOptionSelected(option, columnIndex);
        }
    };
    /**
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
        if (!activeOption) { // Not selected options in this column
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.activatedOptions.length;
        /** @type {?} */
        var options = this.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find(function (o) { return !o.disabled; });
            if (nextOpt) {
                this.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySelectOption = /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(function () {
                _this.setOptionActivated(option, index);
                _this.delaySelectTimer = null;
            }, 150);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchMode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var willBeInSearch = !!this._inputValue;
        // Take a snapshot before entering search mode.
        if (!this.isSearching && willBeInSearch) {
            this.isSearching = true;
            this.activatedOptionsSnapshot = this.activatedOptions;
            this.activatedOptions = [];
            this.labelRenderText = '';
            if (this.input) {
                /** @type {?} */
                var width = this.input.nativeElement.offsetWidth;
                this.dropdownWidthStyle = width + "px";
            }
        }
        // Restore the snapshot after leaving search mode.
        if (this.isSearching && !willBeInSearch) {
            this.isSearching = false;
            this.activatedOptions = this.activatedOptionsSnapshot;
            this.columns = this.columnsSnapshot;
            this.dropdownWidthStyle = '';
            if (this.activatedOptions) {
                this.buildDisplayLabel();
            }
        }
        if (this.isSearching) {
            this.prepareSearchValue();
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.prepareSearchValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = function (inputValue, p) {
            return p.some(function (n) {
                /** @type {?} */
                var label = _this.getOptionLabel(n);
                return label && label.indexOf(inputValue) !== -1;
            });
        };
        /** @type {?} */
        var filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        var sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        var loopParent = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                } // Build parent reference when doing searching
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            });
            path.pop();
        };
        /** @type {?} */
        var loopChild = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var _a;
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(_this._inputValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.nzLabelProperty] = cPath.map(function (p) { return _this.getOptionLabel(p); }).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        };
        this.columnsSnapshot[0].forEach(function (node) { return (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node); });
        if (sorter) {
            results.sort(function (a, b) { return sorter(a.path, b.path, _this._inputValue); });
        }
        this.columns = [results];
    };
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.setSearchOptionActivated = /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    function (result, event) {
        var _this = this;
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(function () {
            _this.inputValue = '';
            /** @type {?} */
            var index = result.path.length - 1;
            /** @type {?} */
            var destinationNode = result.path[index];
            /** @type {?} */
            var mockClickParent = function (node, columnIndex) {
                if (node && node.parent) {
                    mockClickParent(node.parent, columnIndex - 1);
                }
                _this.onOptionClick(node, columnIndex, event);
            };
            mockClickParent(destinationNode, index);
        }, 300);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.value && !!this.value.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionLabel = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzLabelProperty || 'label'];
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionValue = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzValueProperty || 'value'];
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map(function (o) { return _this.getOptionLabel(o); });
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
        // When components inits with default value, this would make display label appear correctly.
        this.cdr.detectChanges();
    };
    //#endregion
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    NzCascaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-cascader,[nz-cascader]',
                    preserveWhitespaces: false,
                    template: "<div\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  #trigger>\r\n  <div *ngIf=\"nzShowInput\">\r\n    <input\r\n      #input\r\n      nz-input\r\n      class=\"ant-cascader-input\"\r\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\r\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\r\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\r\n      [attr.autoComplete]=\"'off'\"\r\n      [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder : null\"\r\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\r\n      [readonly]=\"!nzShowSearch\"\r\n      [disabled]=\"nzDisabled\"\r\n      [nzSize]=\"nzSize\"\r\n      [(ngModel)]=\"inputValue\"\r\n      (blur)=\"handleInputBlur($event)\"\r\n      (focus)=\"handleInputFocus($event)\"\r\n      (change)=\"$event.stopPropagation()\">\r\n    <i *ngIf=\"clearIconVisible\"\r\n       nz-icon\r\n       type=\"close-circle\"\r\n       theme=\"fill\"\r\n       class=\"ant-cascader-picker-clear\"\r\n       (click)=\"clearSelection($event)\"></i>\r\n    <i *ngIf=\"nzShowArrow && !isLoading\"\r\n       nz-icon\r\n       type=\"down\"\r\n       class=\"ant-cascader-picker-arrow\"\r\n       [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\r\n    </i>\r\n    <i *ngIf=\"isLoading\" nz-icon type=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\r\n    <span\r\n      class=\"ant-cascader-picker-label\"\r\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\r\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\r\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\r\n      <ng-template #labelTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\r\n      </ng-template>\r\n    </span>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  (backdropClick)=\"closeMenu()\"\r\n  (detach)=\"closeMenu()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\r\n  <div\r\n    #menu\r\n    class=\"ant-cascader-menus\"\r\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\r\n    [ngClass]=\"menuCls\"\r\n    [ngStyle]=\"nzMenuStyle\"\r\n    [@dropDownAnimation]=\"dropDownPosition\"\r\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\r\n    <ul *ngFor=\"let options of columns; let i = index;\" class=\"ant-cascader-menu\" [ngClass]=\"menuColumnCls\"\r\n        [style.height]=\"isSearching && !columns[0].length ? 'auto': ''\" [style.width]=\"dropdownWidthStyle\">\r\n      <li\r\n        nz-cascader-option\r\n        *ngFor=\"let option of options\"\r\n        [nzLabelProperty]=\"nzLabelProperty\"\r\n        [activated]=\"isOptionActivated(option, i)\"\r\n        [highlightText]=\"isSearching ? inputValue : ''\"\r\n        [option]=\"option\"\r\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\r\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\r\n        (click)=\"onOptionClick(option, i, $event)\">\r\n      </li>\r\n      <li *ngIf=\"isSearching && !columns[0].length\" class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\r\n        {{ nzNotFoundContent || ('Select.notFoundContent' | nzI18n) }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n",
                    animations: [dropDownAnimation],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzCascaderComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader]': 'true',
                        '[class.ant-cascader-picker]': 'true',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused'
                    },
                    styles: ["\n    .ant-cascader-menus {\n      margin-top: 4px;\n      margin-bottom: 4px;\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NzCascaderComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        menu: [{ type: ViewChild, args: ['menu',] }],
        nzShowInput: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzChangeOnSelect: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzColumnClassName: [{ type: Input }],
        nzExpandTrigger: [{ type: Input }],
        nzValueProperty: [{ type: Input }],
        nzLabelRender: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMenuClassName: [{ type: Input }],
        nzMenuStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzTriggerAction: [{ type: Input }],
        nzChangeOn: [{ type: Input }],
        nzLoadData: [{ type: Input }],
        nzOptions: [{ type: Input }],
        nzSelectionChange: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzClear: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        nzChange: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowInput", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzDisabled", void 0);
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
function NzCascaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /** @type {?} */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowInput;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /** @type {?} */
    NzCascaderComponent.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSize;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzTriggerAction;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOn;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLoadData;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelectionChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChange;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.columns;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.dropdownWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.isSearching;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /** @type {?} */
    NzCascaderComponent.prototype.isOpening;
    /** @type {?} */
    NzCascaderComponent.prototype.defaultValue;
    /** @type {?} */
    NzCascaderComponent.prototype.value;
    /** @type {?} */
    NzCascaderComponent.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.activatedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.columnsSnapshot;
    /** @type {?} */
    NzCascaderComponent.prototype.activatedOptionsSnapshot;
    /** @type {?} */
    NzCascaderComponent.prototype.delayMenuTimer;
    /** @type {?} */
    NzCascaderComponent.prototype.delaySelectTimer;
    /** @type {?} */
    NzCascaderComponent.prototype._inputValue;
    /** @type {?} */
    NzCascaderComponent.prototype.elementRef;
    /** @type {?} */
    NzCascaderComponent.prototype.cdr;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUlwRCxJQUFNLG9CQUFvQixHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzs7O0lBdXZCdEQsNkJBQW9CLFVBQXNCLEVBQVUsR0FBc0I7UUFBdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBN3NCMUUsbUJBQXVDLElBQUksQ0FBQztRQUM1QyxtQkFBdUMsSUFBSSxDQUFDO1FBQzVDLG9CQUF3QyxJQUFJLENBQUM7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RTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzhCQTFFMUI7O1NBaUVhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDbGFzc01hcCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEVYUEFOREVEX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XHJcbmltcG9ydCB7IGFycmF5RXF1YWxzLCB0b0FycmF5IH0gZnJvbSAnLi4vY29yZS91dGlsL2FycmF5JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5cclxuaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24sIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciwgTnpDYXNjYWRlclNpemUsIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSwgTnpTaG93U2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSBsYWJlbCA9PiBsYWJlbC5qb2luKCcgLyAnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXNjYWRlcixbbnotY2FzY2FkZXJdJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXNjYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBkcm9wRG93bkFuaW1hdGlvbiBdLFxyXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGkgICAgICA6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcclxuICAgICdbYXR0ci50YWJJbmRleF0nICAgICAgICAgICAgICAgICAgICAgICA6ICdcIjBcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlcl0nICAgICAgICAgICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXJdJyAgICAgICAgICAgOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1sZ10nICAgICAgICAgICAgICAgOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItc21dJyAgICAgICAgICAgICAgIDogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1kaXNhYmxlZF0nICA6ICduekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXScgICAgICA6ICdtZW51VmlzaWJsZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItd2l0aC12YWx1ZV0nOiAnISFpbnB1dFZhbHVlJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWZvY3VzZWRdJyAgICAgICAgICA6ICdpc0ZvY3VzZWQnXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcclxuICAgIC5hbnQtY2FzY2FkZXItbWVudXMge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIGAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWVudScpIG1lbnU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJbnB1dCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0Fycm93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGFuZ2VPblNlbGVjdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDb2x1bW5DbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcclxuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelNpemU6IE56Q2FzY2FkZXJTaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56U2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICdQbGVhc2Ugc2VsZWN0JztcclxuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBuek1lbnVTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZzsgfTtcclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyQWN0aW9uOiBOekNhc2NhZGVyVHJpZ2dlclR5cGUgfCBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXSA9IFsgJ2NsaWNrJyBdIGFzIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdO1xyXG4gIEBJbnB1dCgpIG56Q2hhbmdlT246IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpMb2FkRGF0YTogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpPcHRpb25zKCk6IENhc2NhZGVyT3B0aW9uW10geyByZXR1cm4gdGhpcy5jb2x1bW5zWyAwIF07IH1cclxuICBzZXQgbnpPcHRpb25zKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XHJcbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdCA9IHRoaXMuY29sdW1ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPyBbIG9wdGlvbnMgXSA6IFtdO1xyXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nKSB7XHJcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucygwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcmVwYXJlU2VhcmNoVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZXJPcHRpb25bXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIE5vdCBleHBvc2VkLCBvbmx5IGZvciB0ZXN0XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBOb3QgZXhwb3NlZCwgb25seSBmb3IgdGVzdFxyXG5cclxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgbWVudVZpc2libGUgPSBmYWxzZTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcclxuICBsYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcclxuICBjb2x1bW5zOiBDYXNjYWRlck9wdGlvbltdW10gPSBbXTtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkVYUEFOREVEX0RST1BET1dOX1BPU0lUSU9OUyBdO1xyXG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xyXG4gIGlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0VmFsdWU7IC8vIERlZmF1bHQgdmFsdWUgd3JpdHRlbiBieSBgW25nTW9kZWxdYFxyXG4gIHByaXZhdGUgdmFsdWU7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGNvbHVtbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXVtdO1xyXG4gIHByaXZhdGUgYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90OiBDYXNjYWRlck9wdGlvbltdO1xyXG4gIHByaXZhdGUgZGVsYXlNZW51VGltZXI7XHJcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdFRpbWVyO1xyXG5cclxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGVTZWFyY2hNb2RlKCk7XHJcbiAgfVxyXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pbnB1dFZhbHVlOyB9XHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZSA9ICcnO1xyXG5cclxuICBnZXQgbWVudUNscygpOiBDbGFzc01hcCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbIGAke3RoaXMubnpNZW51Q2xhc3NOYW1lfWAgXTogISF0aGlzLm56TWVudUNsYXNzTmFtZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBtZW51Q29sdW1uQ2xzKCk6IENsYXNzTWFwIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFsgYCR7dGhpcy5uekNvbHVtbkNsYXNzTmFtZX1gIF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBNZW51XHJcblxyXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIGlmIChkZWxheSkge1xyXG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1lbnVWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUm9vdE9wdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRlbGF5TWVudVRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlNZW51VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlNZW51VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFJvb3RPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHJvb3QgPSB7fTtcclxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhyb290LCAtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEluaXRcclxuXHJcbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWyBpbmRleCBdICYmIHRoaXMuY29sdW1uc1sgaW5kZXggXS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kT3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBDYXNjYWRlck9wdGlvbiB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gdGhpcy5jb2x1bW5zWyBpbmRleCBdO1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSA6IG9wdGlvbjtcclxuICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZChvID0+IHZhbHVlID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgYWN0aXZhdGVPbkluaXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih2YWx1ZSwgaW5kZXgpO1xyXG4gICAgaWYgKCFvcHRpb24pIHtcclxuICAgICAgb3B0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xyXG4gICAgICAgIFsgYCR7dGhpcy5uelZhbHVlUHJvcGVydHl9YCBdOiB2YWx1ZSxcclxuICAgICAgICBbIGAke3RoaXMubnpMYWJlbFByb3BlcnR5fWAgXTogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgaW5kZXgsIGZhbHNlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRPcHRpb25zKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZzID0gdGhpcy5kZWZhdWx0VmFsdWU7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2cy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVPbkluaXQoaW5kZXgsIHZzWyBpbmRleCBdKTtcclxuICAgICAgaWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhpbmRleCArIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0xvYWRlZChpbmRleCkgfHwgIXRoaXMubnpMb2FkRGF0YSkge1xyXG4gICAgICBsb2FkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCAtIDEgXSB8fCB7fTtcclxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhub2RlLCBpbmRleCAtIDEsIGxvYWQsIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTXV0YXRpbmcgZGF0YVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvbkFjdGl2YXRlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSwgbG9hZENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgaWYgKCFvcHRpb24gfHwgb3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF0gPSBvcHRpb247XHJcblxyXG4gICAgLy8gU2V0IHBhcmVudCBvcHRpb24gYW5kIGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2ZS5cclxuICAgIGZvciAobGV0IGkgPSBjb2x1bW5JbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0pIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSArIDEgXS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgY2hpbGQgb3B0aW9ucyBhbmQgYWxsIHN1Y2Nlc3Mgb3B0aW9ucyBhcyBpbmFjdGl2ZS5cclxuICAgIGlmIChjb2x1bW5JbmRleCA8IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zbGljZSgwLCBjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgY2hpbGQgb3B0aW9ucy5cclxuICAgIGlmIChvcHRpb24uY2hpbGRyZW4gJiYgb3B0aW9uLmNoaWxkcmVuLmxlbmd0aCAmJiAhb3B0aW9uLmlzTGVhZikge1xyXG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBvcHRpb24pO1xyXG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmICghb3B0aW9uLmlzTGVhZiAmJiBsb2FkQ2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhvcHRpb24sIGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkQ2hpbGRyZW5Bc3luYyhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzdWNjZXNzPzogKCkgPT4gdm9pZCwgZmFpbHVyZT86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TG9hZERhdGEpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBjb2x1bW5JbmRleCA8IDA7XHJcbiAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uekxvYWREYXRhKG9wdGlvbiwgY29sdW1uSW5kZXgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBjb2x1bW5JbmRleCA8IDAgPyB1bmRlZmluZWQgOiBvcHRpb24pO1xyXG4gICAgICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIGlmIChmYWlsdXJlKSB7XHJcbiAgICAgICAgICBmYWlsdXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5uekNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5uekNoYW5nZU9uKG8sIGkpID09PSB0cnVlIDogZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXg6IGNvbHVtbkluZGV4IH0pO1xyXG5cclxuICAgIGlmIChvcHRpb24uaXNMZWFmIHx8IHRoaXMubnpDaGFuZ2VPblNlbGVjdCB8fCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uKG9wdGlvbiwgY29sdW1uSW5kZXgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xyXG4gICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XHJcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCFhcnJheUVxdWFscyh0aGlzLmNvbHVtbnNbIGNvbHVtbkluZGV4IF0sIG9wdGlvbnMpKSB7XHJcbiAgICAgIHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSA9IG9wdGlvbnM7XHJcbiAgICAgIGlmIChjb2x1bW5JbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGNvbHVtbkluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0aW9uKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0U3VibWl0VmFsdWUoKTogYW55W10ge1xyXG4gICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVmFsdWVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcclxuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy52YWx1ZSwgdmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gbnVsbDtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMubnpDbGVhci5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyV3JpdGVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcclxuICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTW91c2UgYW5kIGtleWJvYXJkIGV2ZW50IGhhbmRsZXJzLCB2aWV3IGNoaWxkcmVuXHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xyXG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5ibHVyKCk7XHJcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVWaXNpYmxlID8gdGhpcy5mb2N1cygpIDogdGhpcy5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsgJyRldmVudCcgXSlcclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG5cclxuICAgIGlmIChrZXlDb2RlICE9PSBET1dOX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IFVQX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiZcclxuICAgICAga2V5Q29kZSAhPT0gRU5URVIgJiZcclxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEVTQ0FQRVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudS5cclxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSAmJiBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiYga2V5Q29kZSAhPT0gRVNDQVBFKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNldE1lbnVWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2UgdGhlc2Uga2V5cyB3b3JrIGFzIGRlZmF1bHQgaW4gc2VhcmNoaW5nIG1vZGUuXHJcbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZyAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcmFjdCB3aXRoIHRoZSBjb21wb25lbnQuXHJcbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxyXG4gIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2NsaWNrJykpIHtcclxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXHJcbiAgb25UcmlnZ2VyTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcclxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKHRydWUsIHRoaXMubnpNb3VzZUVudGVyRGVsYXksIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcclxuICBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSB8fCB0aGlzLmlzT3BlbmluZykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcclxuICAgICAgY29uc3QgbW91c2VUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xyXG4gICAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBY3Rpb25UcmlnZ2VyKGFjdGlvbjogJ2NsaWNrJyB8ICdob3ZlcicpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnXHJcbiAgICAgID8gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09IGFjdGlvblxyXG4gICAgICA6IHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoYWN0aW9uKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsLmZvY3VzKCk7XHJcbiAgICB0aGlzLmlzU2VhcmNoaW5nXHJcbiAgICAgID8gdGhpcy5zZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudClcclxuICAgICAgOiB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FbnRlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xyXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmdcclxuICAgICAgICA/IHRoaXMuc2V0U2VhcmNoT3B0aW9uQWN0aXZhdGVkKG9wdGlvbiBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbiwgbnVsbClcclxuICAgICAgICA6IHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVVcE9yRG93bihpc1VwOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcclxuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbHVtbnNbIGNvbHVtbkluZGV4IF0gfHwgW107XHJcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcclxuICAgIGlmICghYWN0aXZlT3B0aW9uKSB7IC8vIE5vdCBzZWxlY3RlZCBvcHRpb25zIGluIHRoaXMgY29sdW1uXHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcclxuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zWyBuZXh0SW5kZXggXTtcclxuICAgICAgaWYgKCFuZXh0T3B0aW9uIHx8IG5leHRPcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XHJcbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sdW1uc1sgbGVuZ3RoIF07XHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xyXG4gICAgICBpZiAobmV4dE9wdCkge1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHQsIGxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5kZWxheVNlbGVjdE9wdGlvbihvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5kZWxheVNlbGVjdE9wdGlvbihvcHRpb24sIGNvbHVtbkluZGV4LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRGVsYXlTZWxlY3RUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5U2VsZWN0T3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGRvU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xyXG4gICAgaWYgKGRvU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XHJcbiAgICAgIH0sIDE1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFNlYXJjaFxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVNlYXJjaE1vZGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCB3aWxsQmVJblNlYXJjaCA9ICEhdGhpcy5faW5wdXRWYWx1ZTtcclxuXHJcbiAgICAvLyBUYWtlIGEgc25hcHNob3QgYmVmb3JlIGVudGVyaW5nIHNlYXJjaCBtb2RlLlxyXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nICYmIHdpbGxCZUluU2VhcmNoKSB7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdG9yZSB0aGUgc25hcHNob3QgYWZ0ZXIgbGVhdmluZyBzZWFyY2ggbW9kZS5cclxuICAgIGlmICh0aGlzLmlzU2VhcmNoaW5nICYmICF3aWxsQmVJblNlYXJjaCkge1xyXG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90O1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnNTbmFwc2hvdDtcclxuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcclxuICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzU2VhcmNoaW5nKSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVTZWFyY2hWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IENhc2NhZGVyU2VhcmNoT3B0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0IHBhdGg6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyID0gKGlucHV0VmFsdWU6IHN0cmluZywgcDogQ2FzY2FkZXJPcHRpb25bXSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gcC5zb21lKG4gPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChuKTtcclxuICAgICAgICByZXR1cm4gbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpbnB1dFZhbHVlKSAhPT0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXI6IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pID0+IGJvb2xlYW4gPVxyXG4gICAgICB0aGlzLm56U2hvd1NlYXJjaCBpbnN0YW5jZW9mIE9iamVjdCAmJiAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyXHJcbiAgICAgICAgPyAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyXHJcbiAgICAgICAgOiBkZWZhdWx0RmlsdGVyO1xyXG5cclxuICAgIGNvbnN0IHNvcnRlcjogKGE6IENhc2NhZGVyT3B0aW9uW10sIGI6IENhc2NhZGVyT3B0aW9uW10sIGlucHV0VmFsdWU6IHN0cmluZykgPT4gbnVtYmVyID1cclxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLnNvcnRlcjtcclxuXHJcbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcclxuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7IHNOb2RlLnBhcmVudCA9IG5vZGU7IH0gLy8gQnVpbGQgcGFyZW50IHJlZmVyZW5jZSB3aGVuIGRvaW5nIHNlYXJjaGluZ1xyXG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7IGxvb3BQYXJlbnQoc05vZGUsIGRpc2FibGVkKTsgfVxyXG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHsgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7IH1cclxuICAgICAgfSk7XHJcbiAgICAgIHBhdGgucG9wKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvb3BDaGlsZCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xyXG4gICAgICBpZiAoZmlsdGVyKHRoaXMuX2lucHV0VmFsdWUsIGNQYXRoKSkge1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbjogQ2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGlzTGVhZiAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgIHBhdGggICAgICAgICAgICAgICAgICAgIDogY1BhdGgsXHJcbiAgICAgICAgICBbIHRoaXMubnpMYWJlbFByb3BlcnR5IF06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdFsgMCBdLmZvckVhY2gobm9kZSA9PiAobm9kZS5pc0xlYWYgfHwgIW5vZGUuY2hpbGRyZW4gfHwgIW5vZGUuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgICA/IGxvb3BDaGlsZChub2RlKVxyXG4gICAgICA6IGxvb3BQYXJlbnQobm9kZSkpO1xyXG4gICAgaWYgKHNvcnRlcikge1xyXG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgdGhpcy5faW5wdXRWYWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2x1bW5zID0gWyByZXN1bHRzIF07XHJcbiAgfVxyXG5cclxuICBzZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQocmVzdWx0OiBDYXNjYWRlclNlYXJjaE9wdGlvbiwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbIHJlc3VsdCBdO1xyXG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCAyMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgY29uc3QgaW5kZXggPSByZXN1bHQucGF0aC5sZW5ndGggLSAxO1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbk5vZGUgPSByZXN1bHQucGF0aFsgaW5kZXggXTtcclxuICAgICAgLy8gTk9URTogb3B0aW1pemUgdGhpcy5cclxuICAgICAgY29uc3QgbW9ja0NsaWNrUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgIG1vY2tDbGlja1BhcmVudChub2RlLnBhcmVudCwgY29sdW1uSW5kZXggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKG5vZGUsIGNvbHVtbkluZGV4LCBldmVudCk7XHJcbiAgICAgIH07XHJcbiAgICAgIG1vY2tDbGlja1BhcmVudChkZXN0aW5hdGlvbk5vZGUsIGluZGV4KTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEhlbHBlcnNcclxuXHJcbiAgcHJpdmF0ZSBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmlucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBoYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMudmFsdWUgJiYgISF0aGlzLnZhbHVlLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsZWFySWNvblZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFsbG93Q2xlYXIgJiYgIXRoaXMubnpEaXNhYmxlZCAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmhhc0lucHV0KTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhYmVsUmVuZGVyVGVtcGxhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm56TGFiZWxSZW5kZXI7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnIF07XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0T3B0aW9uVmFsdWUob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLm56VmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnIF07XHJcbiAgfVxyXG5cclxuICBpc09wdGlvbkFjdGl2YXRlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF07XHJcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwobykpO1xyXG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0geyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgIH1cclxuICAgIC8vIFdoZW4gY29tcG9uZW50cyBpbml0cyB3aXRoIGRlZmF1bHQgdmFsdWUsIHRoaXMgd291bGQgbWFrZSBkaXNwbGF5IGxhYmVsIGFwcGVhciBjb3JyZWN0bHkuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1cigpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlID0gdG9BcnJheSh2YWx1ZSk7XHJcbiAgICBpZiAodnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdnM7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICdib3R0b20nID8gJ2JvdHRvbScgOiAndG9wJztcclxuICAgIGlmICh0aGlzLmRyb3BEb3duUG9zaXRpb24gIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==