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
export class NzTreeNode {
    /**
     * @param {?} option
     * @param {?=} parent
     */
    constructor(option, parent = null) {
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
            option.children.forEach((nodeOptions) => {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this.children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setChecked(checked = false, halfChecked = false) {
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setExpanded(value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelected(value) {
        this.origin.selected = value;
        this.isSelected = value;
    }
    /**
     * @return {?}
     */
    getParentNode() {
        return this.parentNode;
    }
    /**
     * @return {?}
     */
    getChildren() {
        return this.children;
    }
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach((node) => {
                /** @type {?} */
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children = [];
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0sT0FBTyxVQUFVOzs7OztJQXFCckIsWUFBWSxNQUF5QixFQUFFLFNBQXFCLElBQUk7UUFsQmhFLGFBQWdCLENBQUMsQ0FBQztRQW1CaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7O1FBRXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENB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LElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDRixRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztpQkFFeEY7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUU3RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7Ozs7SUFHSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztDQUV0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZU9wdGlvbnMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpc0xlYWY/OiBib29sZWFuO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcclxuICBleHBhbmRlZD86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBOelRyZWVOb2RlT3B0aW9uc1tdO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgWyBrZXk6IHN0cmluZyBdOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgbGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgY2hpbGRyZW46IE56VHJlZU5vZGVbXTtcclxuICBpc0xlYWY6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9yaWdpbjogYW55O1xyXG4gIC8vIFBhcmVudCBOb2RlXHJcbiAgcGFyZW50Tm9kZTogTnpUcmVlTm9kZTtcclxuICBpc0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RhYmxlOiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgaXNEaXNhYmxlQ2hlY2tib3g6IGJvb2xlYW47XHJcbiAgaXNFeHBhbmRlZDogYm9vbGVhbjtcclxuICBpc0hhbGZDaGVja2VkOiBib29sZWFuO1xyXG4gIGlzQWxsQ2hlY2tlZDogYm9vbGVhbjtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBpc01hdGNoZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbjogTnpUcmVlTm9kZU9wdGlvbnMsIHBhcmVudDogTnpUcmVlTm9kZSA9IG51bGwpIHtcclxuICAgIHRoaXMudGl0bGUgPSBvcHRpb24udGl0bGUgfHwgJy0tLSc7XHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXkgfHwgbnVsbDtcclxuICAgIHRoaXMuaXNMZWFmID0gb3B0aW9uLmlzTGVhZiB8fCBmYWxzZTtcclxuICAgIHRoaXMub3JpZ2luID0gb3B0aW9uO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50O1xyXG4gICAgLy8gb3B0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBvcHRpb24uY2hlY2tlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaXNTZWxlY3RhYmxlID0gb3B0aW9uLmRpc2FibGVkIHx8IChvcHRpb24uc2VsZWN0YWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpO1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Rpc2FibGVDaGVja2JveCA9IG9wdGlvbi5kaXNhYmxlQ2hlY2tib3ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiAob3B0aW9uLmV4cGFuZGVkIHx8IGZhbHNlKTtcclxuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICghb3B0aW9uLmRpc2FibGVkICYmIG9wdGlvbi5zZWxlY3RlZCkgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgICovXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mKG9wdGlvbi5jaGlsZHJlbikgIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbi5jaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChcclxuICAgICAgICAobm9kZU9wdGlvbnMpID0+IHtcclxuICAgICAgICAgIGlmIChvcHRpb24uY2hlY2tlZCAmJiAhb3B0aW9uLmRpc2FibGVkICYmICFub2RlT3B0aW9ucy5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGVPcHRpb25zLmNoZWNrZWQgPSBvcHRpb24uY2hlY2tlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgTnpUcmVlTm9kZShub2RlT3B0aW9ucywgdGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBoYWxmQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4uZXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNlbGVjdGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbi5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFyZW50Tm9kZSgpOiBOelRyZWVOb2RlIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5pSv5oyB5oyJ57Si5byV5L2N572u5o+S5YWlLOWPtuWtkOiKgueCueS4jeWPr+a3u+WKoFxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwdWJsaWMgYWRkQ2hpbGRyZW4oY2hpbGRyZW46IGFueVtdLCBjaGlsZFBvczogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0xlYWYpIHtcclxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChcclxuICAgICAgICAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVmcmVzaExldmVsID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgYy5sZXZlbCA9IGMuZ2V0UGFyZW50Tm9kZSgpLmxldmVsICsgMTtcclxuICAgICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cclxuICAgICAgICAgICAgICBjLm9yaWdpbi5sZXZlbCA9IGMubGV2ZWw7XHJcbiAgICAgICAgICAgICAgcmVmcmVzaExldmVsKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkID0gbmV3IE56VHJlZU5vZGUobm9kZSwgdGhpcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGlsZC5sZXZlbCA9IHRoaXMubGV2ZWwgKyAxO1xyXG4gICAgICAgICAgY2hpbGQub3JpZ2luLmxldmVsID0gY2hpbGQubGV2ZWw7XHJcbiAgICAgICAgICByZWZyZXNoTGV2ZWwoY2hpbGQpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2hpbGRQb3MgPT09IC0xID8gdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKSA6IHRoaXMuY2hpbGRyZW4uc3BsaWNlKGNoaWxkUG9zLCAwLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9yaWdpbi5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5tYXAodiA9PiB2Lm9yaWdpbik7XHJcbiAgICAgIC8vIHJlbW92ZSBsb2FkaW5nIHN0YXRlXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcbn1cclxuIl19