/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} parent
 * @return {?}
 */
export function reverseChildNodes(parent) {
    /** @type {?} */
    var children = parent.childNodes;
    /** @type {?} */
    var length = children.length;
    if (length) {
        /** @type {?} */
        var nodes_1 = [];
        children.forEach(function (node, i) { return nodes_1[i] = node; });
        while (length--) {
            parent.appendChild(nodes_1[length]);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2RvbS9yZXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztJQUNuRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDOztJQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksTUFBTSxFQUFFOztRQUNWLElBQU0sT0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxPQUFBLE9BQUssQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQztTQUNyQztLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUNoaWxkTm9kZXMocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XHJcbiAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICBpZiAobGVuZ3RoKSB7XHJcbiAgICBjb25zdCBub2RlczogTm9kZVtdID0gW107XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpKSA9PiBub2Rlc1sgaSBdID0gbm9kZSk7XHJcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGVzWyBsZW5ndGggXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==