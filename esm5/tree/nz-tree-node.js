/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function NzTreeNodeOptions() { }
function NzTreeNodeOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
var NzTreeNode = /** @class */ (function () {
    function NzTreeNode(option, parent) {
        if (parent === void 0) { parent = null; }
        var _this = this;
        this.level = 0;
        this.title = option.title || '---';
        this.key = option.key || null;
        this.isLeaf = option.isLeaf || false;
        this.origin = option;
        this.children = [];
        this.parentNode = parent;
        // option params
        this.isChecked = option.checked || false;
        this.isSelectable = option.disabled || (option.selectable === false ? false : true);
        this.isDisabled = option.disabled || false;
        this.isDisableCheckbox = option.disableCheckbox || false;
        this.isExpanded = option.isLeaf ? false : (option.expanded || false);
        this.isAllChecked = option.checked || false;
        this.isHalfChecked = false;
        this.isSelected = (!option.disabled && option.selected) || false;
        this.isLoading = false;
        this.isMatched = false;
        /**
             * parent's checked status will affect children while initializing
             */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof (option.children) !== 'undefined' && option.children !== null) {
            option.children.forEach(function (nodeOptions) {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this.children.push(new NzTreeNode(nodeOptions, _this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setChecked = /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setExpanded = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.selected = value;
        this.isSelected = value;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getParentNode = /**
     * @return {?}
     */
    function () {
        return this.parentNode;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getChildren = /**
     * @return {?}
     */
    function () {
        return this.children;
    };
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    NzTreeNode.prototype.addChildren = /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach(function (node) {
                /** @type {?} */
                var refreshLevel = function (n) {
                    n.getChildren().forEach(function (c) {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                var child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new NzTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(function (v) { return v.origin; });
            // remove loading state
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        this.children = [];
    };
    return NzTreeNode;
}());
export { NzTreeNode };
function NzTreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNode.prototype.title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.children;
    /** @type {?} */
    NzTreeNode.prototype.isLeaf;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /** @type {?} */
    NzTreeNode.prototype.isChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelectable;
    /** @type {?} */
    NzTreeNode.prototype.isDisabled;
    /** @type {?} */
    NzTreeNode.prototype.isDisableCheckbox;
    /** @type {?} */
    NzTreeNode.prototype.isExpanded;
    /** @type {?} */
    NzTreeNode.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNode.prototype.isAllChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelected;
    /** @type {?} */
    NzTreeNode.prototype.isLoading;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQUE7SUFxQkUsb0JBQVksTUFBeUIsRUFBRSxNQUF5QjtRQUF6Qix1QkFBQSxFQUFBLGFBQXlCO1FBQWhFLGlCQXFDQztRQXZERCxhQUFnQixDQUFDLENBQUM7UUFtQmhCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDOztRQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxD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Q2pCLENBQUMsQ0FBQztpQkFDSixDQUFDOztnQkFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDRixRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztpQkFFeEY7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQzs7WUFFN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7Ozs7O0lBR0ksa0NBQWE7Ozs7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7O3FCQTVJdkI7SUE4SUMsQ0FBQTtBQTdIRCxzQkE2SEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVPcHRpb25zIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaXNMZWFmPzogYm9vbGVhbjtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW47XHJcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xyXG4gIGNoaWxkcmVuPzogTnpUcmVlTm9kZU9wdGlvbnNbXTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIFsga2V5OiBzdHJpbmcgXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIGxldmVsOiBudW1iZXIgPSAwO1xyXG4gIGNoaWxkcmVuOiBOelRyZWVOb2RlW107XHJcbiAgaXNMZWFmOiBib29sZWFuO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvcmlnaW46IGFueTtcclxuICAvLyBQYXJlbnQgTm9kZVxyXG4gIHBhcmVudE5vZGU6IE56VHJlZU5vZGU7XHJcbiAgaXNDaGVja2VkOiBib29sZWFuO1xyXG4gIGlzU2VsZWN0YWJsZTogYm9vbGVhbjtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZUNoZWNrYm94OiBib29sZWFuO1xyXG4gIGlzRXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgaXNIYWxmQ2hlY2tlZDogYm9vbGVhbjtcclxuICBpc0FsbENoZWNrZWQ6IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgaXNNYXRjaGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb246IE56VHJlZU5vZGVPcHRpb25zLCBwYXJlbnQ6IE56VHJlZU5vZGUgPSBudWxsKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gb3B0aW9uLnRpdGxlIHx8ICctLS0nO1xyXG4gICAgdGhpcy5rZXkgPSBvcHRpb24ua2V5IHx8IG51bGw7XHJcbiAgICB0aGlzLmlzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9wdGlvbjtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudDtcclxuICAgIC8vIG9wdGlvbiBwYXJhbXNcclxuICAgIHRoaXMuaXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlzU2VsZWN0YWJsZSA9IG9wdGlvbi5kaXNhYmxlZCB8fCAob3B0aW9uLnNlbGVjdGFibGUgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlKTtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaXNEaXNhYmxlQ2hlY2tib3ggPSBvcHRpb24uZGlzYWJsZUNoZWNrYm94IHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gb3B0aW9uLmlzTGVhZiA/IGZhbHNlIDogKG9wdGlvbi5leHBhbmRlZCB8fCBmYWxzZSk7XHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAoIW9wdGlvbi5kaXNhYmxlZCAmJiBvcHRpb24uc2VsZWN0ZWQpIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwYXJlbnQncyBjaGVja2VkIHN0YXR1cyB3aWxsIGFmZmVjdCBjaGlsZHJlbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgICAqL1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICB0aGlzLmxldmVsID0gcGFyZW50LmxldmVsICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZihvcHRpb24uY2hpbGRyZW4pICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb24uY2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goXHJcbiAgICAgICAgKG5vZGVPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgICBub2RlT3B0aW9ucy5jaGVja2VkID0gb3B0aW9uLmNoZWNrZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gobmV3IE56VHJlZU5vZGUobm9kZU9wdGlvbnMsIHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2hlY2tlZChjaGVja2VkOiBib29sZWFuID0gZmFsc2UsIGhhbGZDaGVja2VkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMub3JpZ2luLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gaGFsZkNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3JpZ2luLmV4cGFuZGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4uc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhcmVudE5vZGUoKTogTnpUcmVlTm9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaUr+aMgeaMiee0ouW8leS9jee9ruaPkuWFpSzlj7blrZDoioLngrnkuI3lj6/mt7vliqBcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFkZENoaWxkcmVuKGNoaWxkcmVuOiBhbnlbXSwgY2hpbGRQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goXHJcbiAgICAgICAgKG5vZGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlZnJlc2hMZXZlbCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG4uZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgIGMubGV2ZWwgPSBjLmdldFBhcmVudE5vZGUoKS5sZXZlbCArIDE7XHJcbiAgICAgICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXHJcbiAgICAgICAgICAgICAgYy5vcmlnaW4ubGV2ZWwgPSBjLmxldmVsO1xyXG4gICAgICAgICAgICAgIHJlZnJlc2hMZXZlbChjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgbGV0IGNoaWxkID0gbm9kZTtcclxuICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGlsZCA9IG5ldyBOelRyZWVOb2RlKG5vZGUsIHRoaXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2hpbGQubGV2ZWwgPSB0aGlzLmxldmVsICsgMTtcclxuICAgICAgICAgIGNoaWxkLm9yaWdpbi5sZXZlbCA9IGNoaWxkLmxldmVsO1xyXG4gICAgICAgICAgcmVmcmVzaExldmVsKGNoaWxkKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNoaWxkUG9zID09PSAtMSA/IHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCkgOiB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGlsZFBvcywgMCwgY2hpbGQpO1xyXG4gICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xyXG4gICAgICAvLyByZW1vdmUgbG9hZGluZyBzdGF0ZVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==