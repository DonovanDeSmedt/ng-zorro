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
const defaultDisplayRender = label => label.join(' / ');
const ɵ0 = defaultDisplayRender;
export class NzCascaderComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(elementRef, cdr) {
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
        this.positions = [...EXPANDED_DROPDOWN_POSITIONS];
        this.isSearching = false;
        this.isFocused = false;
        this.isOpening = false;
        this.selectedOptions = [];
        this.activatedOptions = [];
        this._inputValue = '';
    }
    /**
     * @return {?}
     */
    get nzOptions() { return this.columns[0]; }
    /**
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (!this.isSearching) {
            if (this.defaultValue && this.columns.length) {
                this.initOptions(0);
            }
        }
        else {
            this.prepareSearchValue();
        }
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this._inputValue = inputValue;
        this.toggleSearchMode();
    }
    /**
     * @return {?}
     */
    get inputValue() { return this._inputValue; }
    /**
     * @return {?}
     */
    get menuCls() {
        return {
            [`${this.nzMenuClassName}`]: !!this.nzMenuClassName
        };
    }
    /**
     * @return {?}
     */
    get menuColumnCls() {
        return {
            [`${this.nzColumnClassName}`]: !!this.nzColumnClassName
        };
    }
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setMenuVisible(visible) {
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
    }
    /**
     * @return {?}
     */
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    /**
     * @return {?}
     */
    loadRootOptions() {
        if (!this.columns.length) {
            /** @type {?} */
            const root = {};
            this.loadChildrenAsync(root, -1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    findOption(option, index) {
        /** @type {?} */
        const options = this.columns[index];
        if (options) {
            /** @type {?} */
            const value = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(o => value === this.getOptionValue(o));
        }
        return null;
    }
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    activateOnInit(index, value) {
        /** @type {?} */
        let option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : {
                [`${this.nzValueProperty}`]: value,
                [`${this.nzLabelProperty}`]: value
            };
        }
        this.setOptionActivated(option, index, false, false);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    initOptions(index) {
        /** @type {?} */
        const vs = this.defaultValue;
        /** @type {?} */
        const lastIndex = vs.length - 1;
        /** @type {?} */
        const load = () => {
            this.activateOnInit(index, vs[index]);
            if (index < lastIndex) {
                this.initOptions(index + 1);
            }
            if (index === lastIndex) {
                this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            const node = this.activatedOptions[index - 1] || {};
            this.loadChildrenAsync(node, index - 1, load, this.afterWriteValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    setOptionActivated(option, columnIndex, select = false, loadChildren = true) {
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        // Set parent option and all ancestor options as active.
        for (let i = columnIndex - 1; i >= 0; i--) {
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
            option.children.forEach(child => child.parent = option);
            this.setColumnData(option.children, columnIndex + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildrenAsync(option, columnIndex);
        }
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildrenAsync(option, columnIndex, success, failure) {
        if (this.nzLoadData) {
            this.isLoading = columnIndex < 0;
            option.loading = true;
            this.nzLoadData(option, columnIndex).then(() => {
                option.loading = this.isLoading = false;
                if (option.children) {
                    option.children.forEach(child => child.parent = columnIndex < 0 ? undefined : option);
                    this.setColumnData(option.children, columnIndex + 1);
                    this.cdr.detectChanges();
                }
                if (success) {
                    success();
                }
            }, () => {
                option.loading = this.isLoading = false;
                option.isLeaf = true;
                this.cdr.detectChanges();
                if (failure) {
                    failure();
                }
            });
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    setOptionSelected(option, columnIndex) {
        /** @type {?} */
        const shouldPerformSelection = (o, i) => {
            return typeof this.nzChangeOn === 'function' ? this.nzChangeOn(o, i) === true : false;
        };
        this.nzSelect.emit({ option, index: columnIndex });
        if (option.isLeaf || this.nzChangeOnSelect || shouldPerformSelection(option, columnIndex)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    setColumnData(options, columnIndex) {
        if (!arrayEquals(this.columns[columnIndex], options)) {
            this.columns[columnIndex] = options;
            if (columnIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, columnIndex + 1);
            }
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
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
    }
    /**
     * @return {?}
     */
    getSubmitValue() {
        /** @type {?} */
        const values = [];
        this.selectedOptions.forEach(option => {
            values.push(this.getOptionValue(option));
        });
        return values;
    }
    /**
     * @return {?}
     */
    onValueChange() {
        /** @type {?} */
        const value = this.getSubmitValue();
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
    }
    /**
     * @return {?}
     */
    afterWriteValue() {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputBlur(event) {
        this.menuVisible ? this.focus() : this.blur();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputFocus(event) {
        this.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerClick(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseEnter(event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            const mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            const hostEl = this.el;
            /** @type {?} */
            const menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * @param {?} action
     * @return {?}
     */
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionClick(option, columnIndex, event) {
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
    }
    /**
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const option = this.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.isSearching
                ? this.setSearchOptionActivated(/** @type {?} */ (option), null)
                : this.setOptionSelected(option, columnIndex);
        }
    }
    /**
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.columns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
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
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.activatedOptions.length;
        /** @type {?} */
        const options = this.columns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.setOptionActivated(nextOpt, length);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseLeave(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    }
    /**
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    delaySelectOption(option, index, doSelect) {
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(() => {
                this.setOptionActivated(option, index);
                this.delaySelectTimer = null;
            }, 150);
        }
    }
    /**
     * @return {?}
     */
    toggleSearchMode() {
        /** @type {?} */
        const willBeInSearch = !!this._inputValue;
        // Take a snapshot before entering search mode.
        if (!this.isSearching && willBeInSearch) {
            this.isSearching = true;
            this.activatedOptionsSnapshot = this.activatedOptions;
            this.activatedOptions = [];
            this.labelRenderText = '';
            if (this.input) {
                /** @type {?} */
                const width = this.input.nativeElement.offsetWidth;
                this.dropdownWidthStyle = `${width}px`;
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
    }
    /**
     * @return {?}
     */
    prepareSearchValue() {
        /** @type {?} */
        const results = [];
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (inputValue, p) => {
            return p.some(n => {
                /** @type {?} */
                const label = this.getOptionLabel(n);
                return label && label.indexOf(inputValue) !== -1;
            });
        };
        /** @type {?} */
        const filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        const sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        const loopParent = (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach((sNode) => {
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
        const loopChild = (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(this._inputValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.nzLabelProperty]: cPath.map(p => this.getOptionLabel(p)).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        };
        this.columnsSnapshot[0].forEach(node => (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node));
        if (sorter) {
            results.sort((a, b) => sorter(a.path, b.path, this._inputValue));
        }
        this.columns = [results];
    }
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    setSearchOptionActivated(result, event) {
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(() => {
            this.inputValue = '';
            /** @type {?} */
            const index = result.path.length - 1;
            /** @type {?} */
            const destinationNode = result.path[index];
            /** @type {?} */
            const mockClickParent = (node, columnIndex) => {
                if (node && node.parent) {
                    mockClickParent(node.parent, columnIndex - 1);
                }
                this.onOptionClick(node, columnIndex, event);
            };
            mockClickParent(destinationNode, index);
        }, 300);
    }
    /**
     * @return {?}
     */
    get hasInput() {
        return !!this.inputValue;
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !!this.value && !!this.value.length;
    }
    /**
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    /**
     * @return {?}
     */
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    /**
     * @return {?}
     */
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionLabel(option) {
        return option[this.nzLabelProperty || 'label'];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        return option[this.nzValueProperty || 'value'];
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isOptionActivated(option, index) {
        /** @type {?} */
        const activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map(o => this.getOptionLabel(o));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
        // When components inits with default value, this would make display label appear correctly.
        this.cdr.detectChanges();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
}
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
                        useExisting: forwardRef(() => NzCascaderComponent),
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
                styles: [`
    .ant-cascader-menus {
      margin-top: 4px;
      margin-bottom: 4px;
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
    }
  `]
            }] }
];
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUlwRCxNQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFzQ3hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBaXRCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3c0IxRSxtQkFBdUMsSUFBSSxDQUFDO1FBQzVDLG1CQUF1QyxJQUFJLENBQUM7UUFDNUMsb0JB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QUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFHTCxLQUFLO3dCQUVMLEtBQUs7Z0NBYUwsTUFBTTt1QkFDTixNQUFNO3NCQUNOLE1BQU07OEJBQ04sTUFBTTt1QkFDTixNQUFNO3dCQXFUTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOzZCQTBDcEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FjbEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FVdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTs7O0lBamE5QixZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ2xhc3NNYXAgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFWFBBTkRFRF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xyXG5pbXBvcnQgeyBhcnJheUVxdWFscywgdG9BcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbC9hcnJheSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuXHJcbmltcG9ydCB7IENhc2NhZGVyT3B0aW9uLCBDYXNjYWRlclNlYXJjaE9wdGlvbiwgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIsIE56Q2FzY2FkZXJTaXplLCBOekNhc2NhZGVyVHJpZ2dlclR5cGUsIE56U2hvd1NlYXJjaE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gbGFiZWwgPT4gbGFiZWwuam9pbignIC8gJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2FzY2FkZXIsW256LWNhc2NhZGVyXScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZHJvcERvd25BbmltYXRpb24gXSxcclxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYXNjYWRlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2F0dHIudGFiSW5kZXhdJyAgICAgICAgICAgICAgICAgICAgICAgOiAnXCIwXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXJdJyAgICAgICAgICAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyXScgICAgICAgICAgIDogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbGddJyAgICAgICAgICAgICAgIDogJ256U2l6ZSA9PT0gXCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXNtXScgICAgICAgICAgICAgICA6ICduelNpemUgPT09IFwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItZGlzYWJsZWRdJyAgOiAnbnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItb3Blbl0nICAgICAgOiAnbWVudVZpc2libGUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXdpdGgtdmFsdWVdJzogJyEhaW5wdXRWYWx1ZScsXHJcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1mb2N1c2VkXScgICAgICAgICAgOiAnaXNGb2N1c2VkJ1xyXG4gIH0sXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXHJcbiAgICAuYW50LWNhc2NhZGVyLW1lbnVzIHtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBtZW51OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SW5wdXQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hhbmdlT25TZWxlY3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpFeHBhbmRUcmlnZ2VyOiBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljayc7XHJcbiAgQElucHV0KCkgbnpWYWx1ZVByb3BlcnR5ID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpTaXplOiBOekNhc2NhZGVyU2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zO1xyXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnUGxlYXNlIHNlbGVjdCc7XHJcbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpNZW51U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk6IG51bWJlciA9IDE1MDsgLy8gbXNcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xyXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbICdjbGljaycgXSBhcyBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXTtcclxuICBASW5wdXQoKSBuekNoYW5nZU9uOiAob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56TG9hZERhdGE6IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56T3B0aW9ucygpOiBDYXNjYWRlck9wdGlvbltdIHsgcmV0dXJuIHRoaXMuY29sdW1uc1sgMCBdOyB9XHJcbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gWyBvcHRpb25zIF0gOiBbXTtcclxuICAgIGlmICghdGhpcy5pc1NlYXJjaGluZykge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhc2NhZGVyT3B0aW9uW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpOyAvLyBOb3QgZXhwb3NlZCwgb25seSBmb3IgdGVzdFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gTm90IGV4cG9zZWQsIG9ubHkgZm9yIHRlc3RcclxuXHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gIG1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XHJcbiAgbGFiZWxSZW5kZXJDb250ZXh0ID0ge307XHJcbiAgY29sdW1uczogQ2FzY2FkZXJPcHRpb25bXVtdID0gW107XHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5FWFBBTkRFRF9EUk9QRE9XTl9QT1NJVElPTlMgXTtcclxuICBkcm9wZG93bldpZHRoU3R5bGU6IHN0cmluZztcclxuICBpc1NlYXJjaGluZyA9IGZhbHNlO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVmYXVsdFZhbHVlOyAvLyBEZWZhdWx0IHZhbHVlIHdyaXR0ZW4gYnkgYFtuZ01vZGVsXWBcclxuICBwcml2YXRlIHZhbHVlO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IENhc2NhZGVyT3B0aW9uW11bXTtcclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXTtcclxuICBwcml2YXRlIGRlbGF5TWVudVRpbWVyO1xyXG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjtcclxuXHJcbiAgc2V0IGlucHV0VmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMudG9nZ2xlU2VhcmNoTW9kZSgpO1xyXG4gIH1cclxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZTsgfVxyXG4gIHByaXZhdGUgX2lucHV0VmFsdWUgPSAnJztcclxuXHJcbiAgZ2V0IG1lbnVDbHMoKTogQ2xhc3NNYXAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgWyBgJHt0aGlzLm56TWVudUNsYXNzTmFtZX1gIF06ICEhdGhpcy5uek1lbnVDbGFzc05hbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudUNvbHVtbkNscygpOiBDbGFzc01hcCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbIGAke3RoaXMubnpDb2x1bW5DbGFzc05hbWV9YCBdOiAhIXRoaXMubnpDb2x1bW5DbGFzc05hbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gTWVudVxyXG5cclxuICBkZWxheVNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHNldE9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICBpZiAoZGVsYXkpIHtcclxuICAgICAgaWYgKHZpc2libGUgJiYgc2V0T3BlbmluZykge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm1lbnVWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMubG9hZFJvb3RPcHRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEZWxheU1lbnVUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5TWVudVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRSb290T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCByb290ID0ge307XHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMocm9vdCwgLTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBJbml0XHJcblxyXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1sgaW5kZXggXSAmJiB0aGlzLmNvbHVtbnNbIGluZGV4IF0ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogQ2FzY2FkZXJPcHRpb24ge1xyXG4gICAgY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IHRoaXMuY29sdW1uc1sgaW5kZXggXTtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikgOiBvcHRpb247XHJcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGFjdGl2YXRlT25Jbml0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBvcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odmFsdWUsIGluZGV4KTtcclxuICAgIGlmICghb3B0aW9uKSB7XHJcbiAgICAgIG9wdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcclxuICAgICAgICBbIGAke3RoaXMubnpWYWx1ZVByb3BlcnR5fWAgXTogdmFsdWUsXHJcbiAgICAgICAgWyBgJHt0aGlzLm56TGFiZWxQcm9wZXJ0eX1gIF06IHZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4LCBmYWxzZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlO1xyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gdnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlT25Jbml0KGluZGV4LCB2c1sgaW5kZXggXSk7XHJcbiAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoaW5kZXggKyAxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMb2FkZWQoaW5kZXgpIHx8ICF0aGlzLm56TG9hZERhdGEpIHtcclxuICAgICAgbG9hZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggLSAxIF0gfHwge307XHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMobm9kZSwgaW5kZXggLSAxLCBsb2FkLCB0aGlzLmFmdGVyV3JpdGVWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIE11dGF0aW5nIGRhdGFcclxuXHJcbiAgcHJpdmF0ZSBzZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UsIGxvYWRDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmICghb3B0aW9uIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdID0gb3B0aW9uO1xyXG5cclxuICAgIC8vIFNldCBwYXJlbnQgb3B0aW9uIGFuZCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmUuXHJcbiAgICBmb3IgKGxldCBpID0gY29sdW1uSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSBdKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgKyAxIF0ucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGNoaWxkIG9wdGlvbnMgYW5kIGFsbCBzdWNjZXNzIG9wdGlvbnMgYXMgaW5hY3RpdmUuXHJcbiAgICBpZiAoY29sdW1uSW5kZXggPCB0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc2xpY2UoMCwgY29sdW1uSW5kZXggKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIGNoaWxkIG9wdGlvbnMuXHJcbiAgICBpZiAob3B0aW9uLmNoaWxkcmVuICYmIG9wdGlvbi5jaGlsZHJlbi5sZW5ndGggJiYgIW9wdGlvbi5pc0xlYWYpIHtcclxuICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gb3B0aW9uKTtcclxuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZENoaWxkcmVuKSB7XHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMob3B0aW9uLCBjb2x1bW5JbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZENoaWxkcmVuQXN5bmMob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgc3VjY2Vzcz86ICgpID0+IHZvaWQsIGZhaWx1cmU/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekxvYWREYXRhKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gY29sdW1uSW5kZXggPCAwO1xyXG4gICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMubnpMb2FkRGF0YShvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKCgpID0+IHtcclxuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gY29sdW1uSW5kZXggPCAwID8gdW5kZWZpbmVkIDogb3B0aW9uKTtcclxuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBpZiAoZmFpbHVyZSkge1xyXG4gICAgICAgICAgZmFpbHVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24gPSAobzogQ2FzY2FkZXJPcHRpb24sIGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpDaGFuZ2VPbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpDaGFuZ2VPbihvLCBpKSA9PT0gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4OiBjb2x1bW5JbmRleCB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLm56Q2hhbmdlT25TZWxlY3QgfHwgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbihvcHRpb24sIGNvbHVtbkluZGV4KSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcclxuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xyXG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uLmlzTGVhZikge1xyXG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UsIHRoaXMubnpNb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy5jb2x1bW5zWyBjb2x1bW5JbmRleCBdLCBvcHRpb25zKSkge1xyXG4gICAgICB0aGlzLmNvbHVtbnNbIGNvbHVtbkluZGV4IF0gPSBvcHRpb25zO1xyXG4gICAgICBpZiAoY29sdW1uSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5zbGljZSgwLCBjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcclxuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XHJcbiAgICBpZiAoIWFycmF5RXF1YWxzKHRoaXMudmFsdWUsIHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLm56Q2xlYXIuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlcldyaXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XHJcbiAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIE1vdXNlIGFuZCBrZXlib2FyZCBldmVudCBoYW5kbGVycywgdmlldyBjaGlsZHJlblxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5mb2N1cygpO1xyXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuYmx1cigpO1xyXG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRCbHVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51VmlzaWJsZSA/IHRoaXMuZm9jdXMoKSA6IHRoaXMuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRGb2N1cyhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICBpZiAoa2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBVUF9BUlJPVyAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEVOVEVSICYmXHJcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxyXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEVcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJlc3MgYW55IGtleXMgYWJvdmUgdG8gcmVvcGVuIG1lbnUuXHJcbiAgICBpZiAoIXRoaXMubWVudVZpc2libGUgJiYga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmIGtleUNvZGUgIT09IEVTQ0FQRSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZXRNZW51VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIHRoZXNlIGtleXMgd29yayBhcyBkZWZhdWx0IGluIHNlYXJjaGluZyBtb2RlLlxyXG4gICAgaWYgKHRoaXMuaXNTZWFyY2hpbmcgJiYgKGtleUNvZGUgPT09IEJBQ0tTUEFDRSB8fCBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW50ZXJhY3Qgd2l0aCB0aGUgY29tcG9uZW50LlxyXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bihmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcclxuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgIHRoaXMub25FbnRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcclxuICBvblRyaWdnZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdjbGljaycpKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcclxuICAgIH1cclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyAnJGV2ZW50JyBdKVxyXG4gIG9uVHJpZ2dlck1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLm56TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXHJcbiAgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubWVudVZpc2libGUgfHwgdGhpcy5pc09wZW5pbmcpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XHJcbiAgICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3QgaG9zdEVsID0gdGhpcy5lbDtcclxuICAgICAgY29uc3QgbWVudUVsID0gdGhpcy5tZW51ICYmIHRoaXMubWVudS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQWN0aW9uVHJpZ2dlcihhY3Rpb246ICdjbGljaycgfCAnaG92ZXInKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb25cclxuICAgICAgOiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKGFjdGlvbikgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgb25PcHRpb25DbGljayhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbC5mb2N1cygpO1xyXG4gICAgdGhpcy5pc1NlYXJjaGluZ1xyXG4gICAgICA/IHRoaXMuc2V0U2VhcmNoT3B0aW9uQWN0aXZhdGVkKG9wdGlvbiBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbiwgZXZlbnQpXHJcbiAgICAgIDogdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcclxuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcclxuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzU2VhcmNoaW5nXHJcbiAgICAgICAgPyB0aGlzLnNldFNlYXJjaE9wdGlvbkFjdGl2YXRlZChvcHRpb24gYXMgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIG51bGwpXHJcbiAgICAgICAgOiB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XHJcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2x1bW5zWyBjb2x1bW5JbmRleCBdIHx8IFtdO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XHJcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikgeyAvLyBOb3Qgc2VsZWN0ZWQgb3B0aW9ucyBpbiB0aGlzIGNvbHVtblxyXG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbGVuZ3RoIDogLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmluZGV4T2YoYWN0aXZlT3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbmV4dEluZGV4IC0gMSA6IG5leHRJbmRleCArIDE7XHJcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1sgbmV4dEluZGV4IF07XHJcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZUxlZnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xyXG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIG9wdGlvbnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgbGFzdCBvbmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbHVtbnNbIGxlbmd0aCBdO1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbmV4dE9wdCA9IG9wdGlvbnMuZmluZChvID0+ICFvLmRpc2FibGVkKTtcclxuICAgICAgaWYgKG5leHRPcHQpIHtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RPcHRpb24ob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RPcHRpb24ob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckRlbGF5U2VsZWN0VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVNlbGVjdFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdE9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBkb1NlbGVjdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcclxuICAgIGlmIChkb1NlbGVjdCkge1xyXG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4KTtcclxuICAgICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xyXG4gICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTZWFyY2hcclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVTZWFyY2hNb2RlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgd2lsbEJlSW5TZWFyY2ggPSAhIXRoaXMuX2lucHV0VmFsdWU7XHJcblxyXG4gICAgLy8gVGFrZSBhIHNuYXBzaG90IGJlZm9yZSBlbnRlcmluZyBzZWFyY2ggbW9kZS5cclxuICAgIGlmICghdGhpcy5pc1NlYXJjaGluZyAmJiB3aWxsQmVJblNlYXJjaCkge1xyXG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zU25hcHNob3QgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9IGAke3dpZHRofXB4YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc3RvcmUgdGhlIHNuYXBzaG90IGFmdGVyIGxlYXZpbmcgc2VhcmNoIG1vZGUuXHJcbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZyAmJiAhd2lsbEJlSW5TZWFyY2gpIHtcclxuICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zU25hcHNob3Q7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gJyc7XHJcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZykge1xyXG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlU2VhcmNoVmFsdWUoKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBDYXNjYWRlclNlYXJjaE9wdGlvbltdID0gW107XHJcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdEZpbHRlciA9IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pOiBib29sZWFuID0+IHtcclxuICAgICAgcmV0dXJuIHAuc29tZShuID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobik7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsICYmIGxhYmVsLmluZGV4T2YoaW5wdXRWYWx1ZSkgIT09IC0xO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsdGVyOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuID1cclxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlclxyXG4gICAgICAgID8gKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlclxyXG4gICAgICAgIDogZGVmYXVsdEZpbHRlcjtcclxuXHJcbiAgICBjb25zdCBzb3J0ZXI6IChhOiBDYXNjYWRlck9wdGlvbltdLCBiOiBDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpID0+IG51bWJlciA9XHJcbiAgICAgIHRoaXMubnpTaG93U2VhcmNoIGluc3RhbmNlb2YgT2JqZWN0ICYmICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5zb3J0ZXI7XHJcblxyXG4gICAgY29uc3QgbG9vcFBhcmVudCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoc05vZGUpID0+IHtcclxuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkgeyBzTm9kZS5wYXJlbnQgPSBub2RlOyB9IC8vIEJ1aWxkIHBhcmVudCByZWZlcmVuY2Ugd2hlbiBkb2luZyBzZWFyY2hpbmdcclxuICAgICAgICBpZiAoIXNOb2RlLmlzTGVhZikgeyBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7IH1cclxuICAgICAgICBpZiAoc05vZGUuaXNMZWFmIHx8ICFzTm9kZS5jaGlsZHJlbiB8fCAhc05vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7IGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpOyB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBwYXRoLnB1c2gobm9kZSk7XHJcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcclxuICAgICAgaWYgKGZpbHRlcih0aGlzLl9pbnB1dFZhbHVlLCBjUGF0aCkpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBvcHRpb246IENhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBpc0xlYWYgICAgICAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgICAgICBwYXRoICAgICAgICAgICAgICAgICAgICA6IGNQYXRoLFxyXG4gICAgICAgICAgWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSBdOiBjUGF0aC5tYXAocCA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKHApKS5qb2luKCcgLyAnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgcGF0aC5wb3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3RbIDAgXS5mb3JFYWNoKG5vZGUgPT4gKG5vZGUuaXNMZWFmIHx8ICFub2RlLmNoaWxkcmVuIHx8ICFub2RlLmNoaWxkcmVuLmxlbmd0aClcclxuICAgICAgPyBsb29wQ2hpbGQobm9kZSlcclxuICAgICAgOiBsb29wUGFyZW50KG5vZGUpKTtcclxuICAgIGlmIChzb3J0ZXIpIHtcclxuICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBzb3J0ZXIoYS5wYXRoLCBiLnBhdGgsIHRoaXMuX2lucHV0VmFsdWUpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sdW1ucyA9IFsgcmVzdWx0cyBdO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VhcmNoT3B0aW9uQWN0aXZhdGVkKHJlc3VsdDogQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWyByZXN1bHQgXTtcclxuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgMjAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzdWx0LnBhdGgubGVuZ3RoIC0gMTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb25Ob2RlID0gcmVzdWx0LnBhdGhbIGluZGV4IF07XHJcbiAgICAgIC8vIE5PVEU6IG9wdGltaXplIHRoaXMuXHJcbiAgICAgIGNvbnN0IG1vY2tDbGlja1BhcmVudCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICBtb2NrQ2xpY2tQYXJlbnQobm9kZS5wYXJlbnQsIGNvbHVtbkluZGV4IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25PcHRpb25DbGljayhub2RlLCBjb2x1bW5JbmRleCwgZXZlbnQpO1xyXG4gICAgICB9O1xyXG4gICAgICBtb2NrQ2xpY2tQYXJlbnQoZGVzdGluYXRpb25Ob2RlLCBpbmRleCk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBIZWxwZXJzXHJcblxyXG4gIHByaXZhdGUgZ2V0IGhhc0lucHV0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLnZhbHVlICYmICEhdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbGVhckljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBbGxvd0NsZWFyICYmICF0aGlzLm56RGlzYWJsZWQgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5oYXNJbnB1dCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYWJlbFJlbmRlclRlbXBsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5uekxhYmVsUmVuZGVyO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJyBdO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvblZhbHVlKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJyBdO1xyXG4gIH1cclxuXHJcbiAgaXNPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYWN0aXZlT3B0ID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCBdO1xyXG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZERpc3BsYXlMYWJlbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKG8pKTtcclxuICAgIGlmICh0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gZGVmYXVsdERpc3BsYXlSZW5kZXIuY2FsbCh0aGlzLCBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBXaGVuIGNvbXBvbmVudHMgaW5pdHMgd2l0aCBkZWZhdWx0IHZhbHVlLCB0aGlzIHdvdWxkIG1ha2UgZGlzcGxheSBsYWJlbCBhcHBlYXIgY29ycmVjdGx5LlxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgIH1cclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXIoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xyXG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcclxuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xyXG4gICAgaWYgKHZzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZzO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=