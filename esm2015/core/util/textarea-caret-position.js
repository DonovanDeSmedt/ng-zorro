/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
export const properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
/** @type {?} */
const isBrowser = (typeof window !== 'undefined');
/** @type {?} */
const isFirefox = (isBrowser && (/** @type {?} */ (window)).mozInnerScreenX != null);
/** @type {?} */
const _parseInt = (str) => parseInt(str, 10);
const ɵ0 = _parseInt;
/**
 * @record
 */
export function Coordinates() { }
function Coordinates_tsickle_Closure_declarations() {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
export function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    const debug = options && options.debug || false;
    if (debug) {
        /** @type {?} */
        const el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    /** @type {?} */
    const div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    const style = div.style;
    /** @type {?} */
    const computed = window.getComputedStyle ? window.getComputedStyle(element) : (/** @type {?} */ (element)).currentStyle;
    /** @type {?} */
    const isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach((prop) => {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            style[prop] = computed[prop];
        }
    });
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    /** @type {?} */
    const span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    const coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
export function createDebugEle(element, coordinates) {
    /** @type {?} */
    const fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    const rect = (/** @type {?} */ (document.querySelector('#DEBUG')))
        || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = `${element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top}px`;
    rect.style.left = `${element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left}px`;
    console.log(rect.style.top);
    console.log(rect.style.left);
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsYUFBYSxVQUFVLEdBQUc7SUFDeEIsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBRVgsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFFYixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBR2IsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFFWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsZUFBZTtJQUNmLGFBQWE7SUFFYixTQUFTO0lBQ1QsWUFBWTtDQUViLENBQUM7O0FBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQzs7QUFHbEQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFTLElBQUksbUJBQUMsTUFBYSxFQUFDLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDOztBQUV6RSxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE9BQStDLEVBQUUsUUFBZ0IsRUFBRSxPQUE2QjtJQUNsSSxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO0tBQ25HOztJQUVELE1B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Q0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDM0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2NvbXBvbmVudC90ZXh0YXJlYS1jYXJldC1wb3NpdGlvblxyXG5cclxuLy8gV2UnbGwgY29weSB0aGUgcHJvcGVydGllcyBiZWxvdyBpbnRvIHRoZSBtaXJyb3IgZGl2LlxyXG4vLyBOb3RlIHRoYXQgc29tZSBicm93c2Vycywgc3VjaCBhcyBGaXJlZm94LCBkbyBub3QgY29uY2F0ZW5hdGUgcHJvcGVydGllc1xyXG4vLyBpbnRvIHRoZWlyIHNob3J0aGFuZCAoZS5nLiBwYWRkaW5nLXRvcCwgcGFkZGluZy1ib3R0b20gZXRjLiAtPiBwYWRkaW5nKSxcclxuLy8gc28gd2UgaGF2ZSB0byBsaXN0IGV2ZXJ5IHNpbmdsZSBwcm9wZXJ0eSBleHBsaWNpdGx5LlxyXG5leHBvcnQgY29uc3QgcHJvcGVydGllcyA9IFtcclxuICAnZGlyZWN0aW9uJywgIC8vIFJUTCBzdXBwb3J0XHJcbiAgJ2JveFNpemluZycsXHJcbiAgJ3dpZHRoJywgIC8vIG9uIENocm9tZSBhbmQgSUUsIGV4Y2x1ZGUgdGhlIHNjcm9sbGJhciwgc28gdGhlIG1pcnJvciBkaXYgd3JhcHMgZXhhY3RseSBhcyB0aGUgdGV4dGFyZWEgZG9lc1xyXG4gICdoZWlnaHQnLFxyXG4gICdvdmVyZmxvd1gnLFxyXG4gICdvdmVyZmxvd1knLCAgLy8gY29weSB0aGUgc2Nyb2xsYmFyIGZvciBJRVxyXG5cclxuICAnYm9yZGVyVG9wV2lkdGgnLFxyXG4gICdib3JkZXJSaWdodFdpZHRoJyxcclxuICAnYm9yZGVyQm90dG9tV2lkdGgnLFxyXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxyXG4gICdib3JkZXJTdHlsZScsXHJcblxyXG4gICdwYWRkaW5nVG9wJyxcclxuICAncGFkZGluZ1JpZ2h0JyxcclxuICAncGFkZGluZ0JvdHRvbScsXHJcbiAgJ3BhZGRpbmdMZWZ0JyxcclxuXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnRcclxuICAnZm9udFN0eWxlJyxcclxuICAnZm9udFZhcmlhbnQnLFxyXG4gICdmb250V2VpZ2h0JyxcclxuICAnZm9udFN0cmV0Y2gnLFxyXG4gICdmb250U2l6ZScsXHJcbiAgJ2ZvbnRTaXplQWRqdXN0JyxcclxuICAnbGluZUhlaWdodCcsXHJcbiAgJ2ZvbnRGYW1pbHknLFxyXG5cclxuICAndGV4dEFsaWduJyxcclxuICAndGV4dFRyYW5zZm9ybScsXHJcbiAgJ3RleHRJbmRlbnQnLFxyXG4gICd0ZXh0RGVjb3JhdGlvbicsICAvLyBtaWdodCBub3QgbWFrZSBhIGRpZmZlcmVuY2UsIGJ1dCBiZXR0ZXIgYmUgc2FmZVxyXG5cclxuICAnbGV0dGVyU3BhY2luZycsXHJcbiAgJ3dvcmRTcGFjaW5nJyxcclxuXHJcbiAgJ3RhYlNpemUnLFxyXG4gICdNb3pUYWJTaXplJ1xyXG5cclxuXTtcclxuXHJcbmNvbnN0IGlzQnJvd3NlciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmNvbnN0IGlzRmlyZWZveCA9IChpc0Jyb3dzZXIgJiYgKHdpbmRvdyBhcyBhbnkpLm1veklubmVyU2NyZWVuWCAhPSBudWxsKTtcclxuXHJcbmNvbnN0IF9wYXJzZUludCA9IChzdHI6IHN0cmluZykgPT4gcGFyc2VJbnQoc3RyLCAxMCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcclxuICB0b3A6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJldENvb3JkaW5hdGVzKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCBwb3NpdGlvbjogbnVtYmVyLCBvcHRpb25zPzogeyBkZWJ1Zz86IGJvb2xlYW4gfSk6IENvb3JkaW5hdGVzIHtcclxuICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0ZXh0YXJlYS1jYXJldC1wb3NpdGlvbiNnZXRDYXJldENvb3JkaW5hdGVzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpbiBhIGJyb3dzZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlYnVnID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xyXG4gIGlmIChkZWJ1Zykge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtdGV4dGFyZWEtY2FyZXQtcG9zaXRpb24tbWlycm9yLWRpdicpO1xyXG4gICAgaWYgKGVsKSB7IGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpOyB9XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgbWlycm9yIGRpdiB3aWxsIHJlcGxpY2F0ZSB0aGUgdGV4dGFyZWEncyBzdHlsZVxyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5pZCA9ICdpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2JztcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0gZGl2LnN0eWxlO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQgYXMgYW55KS5jdXJyZW50U3R5bGU7ICAvLyBjdXJyZW50U3R5bGUgZm9yIElFIDwgOVxyXG4gIGNvbnN0IGlzSW5wdXQgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnO1xyXG5cclxuICAvLyBEZWZhdWx0IHRleHRhcmVhIHN0eWxlc1xyXG4gIHN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xyXG4gIGlmICghaXNJbnB1dCkge1xyXG4gICAgc3R5bGUud29yZFdyYXAgPSAnYnJlYWstd29yZCc7IC8vIG9ubHkgZm9yIHRleHRhcmVhLXNcclxuICB9XHJcblxyXG4gIC8vIFBvc2l0aW9uIG9mZi1zY3JlZW5cclxuICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7ICAvLyByZXF1aXJlZCB0byByZXR1cm4gY29vcmRpbmF0ZXMgcHJvcGVybHlcclxuICBpZiAoIWRlYnVnKSB7XHJcbiAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgfSAgLy8gbm90ICdkaXNwbGF5OiBub25lJyBiZWNhdXNlIHdlIHdhbnQgcmVuZGVyaW5nXHJcblxyXG4gIC8vIFRyYW5zZmVyIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcyB0byB0aGUgZGl2XHJcbiAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChpc0lucHV0ICYmIHByb3AgPT09ICdsaW5lSGVpZ2h0Jykge1xyXG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDxpbnB1dD5zIGJlY2F1c2UgdGV4dCBpcyByZW5kZXJlZCBjZW50ZXJlZCBhbmQgbGluZSBoZWlnaHQgbWF5IGJlICE9IGhlaWdodFxyXG4gICAgICBzdHlsZS5saW5lSGVpZ2h0ID0gY29tcHV0ZWQuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGVbcHJvcF0gPSBjb21wdXRlZFtwcm9wXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgLy8gRmlyZWZveCBsaWVzIGFib3V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWFzOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05ODQyNzVcclxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCA+IF9wYXJzZUludChjb21wdXRlZC5oZWlnaHQpKSB7XHJcbiAgICAgIHN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAgLy8gZm9yIENocm9tZSB0byBub3QgcmVuZGVyIGEgc2Nyb2xsYmFyOyBJRSBrZWVwcyBvdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gIH1cclxuXHJcbiAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24pO1xyXG4gIC8vIFRoZSBzZWNvbmQgc3BlY2lhbCBoYW5kbGluZyBmb3IgaW5wdXQgdHlwZT1cInRleHRcIiB2cyB0ZXh0YXJlYTpcclxuICAvLyBzcGFjZXMgbmVlZCB0byBiZSByZXBsYWNlZCB3aXRoIG5vbi1icmVha2luZyBzcGFjZXMgLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzQwMjAzNS8xMjY5MDM3XHJcbiAgaWYgKGlzSW5wdXQpIHtcclxuICAgIGRpdi50ZXh0Q29udGVudCA9IGRpdi50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgJ1xcdTAwYTAnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgLy8gV3JhcHBpbmcgbXVzdCBiZSByZXBsaWNhdGVkICpleGFjdGx5KiwgaW5jbHVkaW5nIHdoZW4gYSBsb25nIHdvcmQgZ2V0c1xyXG4gIC8vIG9udG8gdGhlIG5leHQgbGluZSwgd2l0aCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYmVmb3JlICgjNykuXHJcbiAgLy8gVGhlICAqb25seSogcmVsaWFibGUgd2F5IHRvIGRvIHRoYXQgaXMgdG8gY29weSB0aGUgKmVudGlyZSogcmVzdCBvZiB0aGVcclxuICAvLyB0ZXh0YXJlYSdzIGNvbnRlbnQgaW50byB0aGUgPHNwYW4+IGNyZWF0ZWQgYXQgdGhlIGNhcmV0IHBvc2l0aW9uLlxyXG4gIC8vIEZvciBpbnB1dHMsIGp1c3QgJy4nIHdvdWxkIGJlIGVub3VnaCwgYnV0IG5vIG5lZWQgdG8gYm90aGVyLlxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSBlbGVtZW50LnZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbikgfHwgJy4nOyAgLy8gfHwgYmVjYXVzZSBhIGNvbXBsZXRlbHkgZW1wdHkgZmF1eCBzcGFuIGRvZXNuJ3QgcmVuZGVyIGF0IGFsbFxyXG4gIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcbiAgICB0b3A6IHNwYW4ub2Zmc2V0VG9wICsgX3BhcnNlSW50KGNvbXB1dGVkLmJvcmRlclRvcFdpZHRoKSxcclxuICAgIGxlZnQ6IHNwYW4ub2Zmc2V0TGVmdCArIF9wYXJzZUludChjb21wdXRlZC5ib3JkZXJMZWZ0V2lkdGgpLFxyXG4gICAgaGVpZ2h0OiBfcGFyc2VJbnQoY29tcHV0ZWQubGluZUhlaWdodClcclxuICB9O1xyXG5cclxuICBpZiAoZGVidWcpIHtcclxuICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWUnO1xyXG4gICAgY3JlYXRlRGVidWdFbGUoZWxlbWVudCwgY29vcmRpbmF0ZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWJ1Z0VsZShlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCwgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzKTogdm9pZCB7XHJcbiAgY29uc3QgZm9udFNpemUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xyXG4gIGNvbnN0IHJlY3Q6IEhUTUxTcGFuRWxlbWVudCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjREVCVUcnKSBhcyBIVE1MU3BhbkVsZW1lbnQpXHJcbiAgICB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlY3QpO1xyXG4gIHJlY3QuaWQgPSAnREVCVUcnO1xyXG4gIHJlY3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIHJlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgcmVjdC5zdHlsZS5oZWlnaHQgPSBmb250U2l6ZTtcclxuICByZWN0LnN0eWxlLndpZHRoID0gJzFweCc7XHJcbiAgcmVjdC5zdHlsZS50b3AgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgY29vcmRpbmF0ZXMudG9wfXB4YDtcclxuICByZWN0LnN0eWxlLmxlZnQgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSBlbGVtZW50LnNjcm9sbExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgKyBjb29yZGluYXRlcy5sZWZ0fXB4YDtcclxuICBjb25zb2xlLmxvZyhyZWN0LnN0eWxlLnRvcCk7XHJcbiAgY29uc29sZS5sb2cocmVjdC5zdHlsZS5sZWZ0KTtcclxufVxyXG4iXX0=