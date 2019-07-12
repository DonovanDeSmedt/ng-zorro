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
    const children = parent.childNodes;
    /** @type {?} */
    let length = children.length;
    if (length) {
        /** @type {?} */
        const nodes = [];
        children.forEach((node, i) => nodes[i] = node);
        while (length--) {
            parent.appendChild(nodes[length]);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2RvbS9yZXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztJQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDOztJQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksTUFBTSxFQUFFOztRQUNWLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELE9BQU8sTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXZlcnNlQ2hpbGROb2RlcyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcclxuICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIGlmIChsZW5ndGgpIHtcclxuICAgIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goKG5vZGUsIGkpID0+IG5vZGVzWyBpIF0gPSBub2RlKTtcclxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZXNbIGxlbmd0aCBdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19