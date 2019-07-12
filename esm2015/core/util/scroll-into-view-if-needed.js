/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    // Non-standard
    /* tslint:disable-next-line:no-string-literal */
    if (node['scrollIntoViewIfNeeded']) {
        /* tslint:disable-next-line:no-string-literal */
        node['scrollIntoViewIfNeeded'](false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFpQjs7O0lBSTlDLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7O1FBRWxDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU87S0FDUjtJQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG5vZGU6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gIC8vIE5vbi1zdGFuZGFyZFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gIGlmIChub2RlWydzY3JvbGxJbnRvVmlld0lmTmVlZGVkJ10pIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gICAgbm9kZVsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKGZhbHNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChub2RlLnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICBub2RlLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19