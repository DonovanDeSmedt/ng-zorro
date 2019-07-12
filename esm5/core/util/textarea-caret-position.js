/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
export var properties = [
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
var isBrowser = (typeof window !== 'undefined');
/** @type {?} */
var isFirefox = (isBrowser && (/** @type {?} */ (window)).mozInnerScreenX != null);
/** @type {?} */
var _parseInt = function (str) { return parseInt(str, 10); };
var ɵ0 = _parseInt;
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
    var debug = options && options.debug || false;
    if (debug) {
        /** @type {?} */
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    /** @type {?} */
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    var style = div.style;
    /** @type {?} */
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : (/** @type {?} */ (element)).currentStyle;
    /** @type {?} */
    var isInput = element.nodeName === 'INPUT';
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
    properties.forEach(function (prop) {
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
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    var coordinates = {
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
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    var rect = (/** @type {?} */ (document.querySelector('#DEBUG')))
        || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left + "px";
    console.log(rect.style.top);
    console.log(rect.style.left);
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBYSxVQUFVLEdBQUc7SUFDeEIsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBRVgsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFFYixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBR2IsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFFWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsZUFBZTtJQUNmLGFBQWE7SUFFYixTQUFTO0lBQ1QsWUFBWTtDQUViLENBQUM7O0FBRUYsSUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQzs7QUFHbEQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxTQUFTLElBQUksbUJBQUMsTUFBYSxFQUFDLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFDOztBQUV6RSxJQUFNLFNBQVMsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxPQUErQyxFQUFFLFFBQWdCLEVBQUUsT0FBNkI7SUFDbEksSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztLQUNuRzs7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RyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLE9BQUksQ0FBQztJQUMzSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY29tcG9uZW50L3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uXHJcblxyXG4vLyBXZSdsbCBjb3B5IHRoZSBwcm9wZXJ0aWVzIGJlbG93IGludG8gdGhlIG1pcnJvciBkaXYuXHJcbi8vIE5vdGUgdGhhdCBzb21lIGJyb3dzZXJzLCBzdWNoIGFzIEZpcmVmb3gsIGRvIG5vdCBjb25jYXRlbmF0ZSBwcm9wZXJ0aWVzXHJcbi8vIGludG8gdGhlaXIgc2hvcnRoYW5kIChlLmcuIHBhZGRpbmctdG9wLCBwYWRkaW5nLWJvdHRvbSBldGMuIC0+IHBhZGRpbmcpLFxyXG4vLyBzbyB3ZSBoYXZlIHRvIGxpc3QgZXZlcnkgc2luZ2xlIHByb3BlcnR5IGV4cGxpY2l0bHkuXHJcbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzID0gW1xyXG4gICdkaXJlY3Rpb24nLCAgLy8gUlRMIHN1cHBvcnRcclxuICAnYm94U2l6aW5nJyxcclxuICAnd2lkdGgnLCAgLy8gb24gQ2hyb21lIGFuZCBJRSwgZXhjbHVkZSB0aGUgc2Nyb2xsYmFyLCBzbyB0aGUgbWlycm9yIGRpdiB3cmFwcyBleGFjdGx5IGFzIHRoZSB0ZXh0YXJlYSBkb2VzXHJcbiAgJ2hlaWdodCcsXHJcbiAgJ292ZXJmbG93WCcsXHJcbiAgJ292ZXJmbG93WScsICAvLyBjb3B5IHRoZSBzY3JvbGxiYXIgZm9yIElFXHJcblxyXG4gICdib3JkZXJUb3BXaWR0aCcsXHJcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxyXG4gICdib3JkZXJCb3R0b21XaWR0aCcsXHJcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXHJcbiAgJ2JvcmRlclN0eWxlJyxcclxuXHJcbiAgJ3BhZGRpbmdUb3AnLFxyXG4gICdwYWRkaW5nUmlnaHQnLFxyXG4gICdwYWRkaW5nQm90dG9tJyxcclxuICAncGFkZGluZ0xlZnQnLFxyXG5cclxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udFxyXG4gICdmb250U3R5bGUnLFxyXG4gICdmb250VmFyaWFudCcsXHJcbiAgJ2ZvbnRXZWlnaHQnLFxyXG4gICdmb250U3RyZXRjaCcsXHJcbiAgJ2ZvbnRTaXplJyxcclxuICAnZm9udFNpemVBZGp1c3QnLFxyXG4gICdsaW5lSGVpZ2h0JyxcclxuICAnZm9udEZhbWlseScsXHJcblxyXG4gICd0ZXh0QWxpZ24nLFxyXG4gICd0ZXh0VHJhbnNmb3JtJyxcclxuICAndGV4dEluZGVudCcsXHJcbiAgJ3RleHREZWNvcmF0aW9uJywgIC8vIG1pZ2h0IG5vdCBtYWtlIGEgZGlmZmVyZW5jZSwgYnV0IGJldHRlciBiZSBzYWZlXHJcblxyXG4gICdsZXR0ZXJTcGFjaW5nJyxcclxuICAnd29yZFNwYWNpbmcnLFxyXG5cclxuICAndGFiU2l6ZScsXHJcbiAgJ01velRhYlNpemUnXHJcblxyXG5dO1xyXG5cclxuY29uc3QgaXNCcm93c2VyID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKTtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuY29uc3QgaXNGaXJlZm94ID0gKGlzQnJvd3NlciAmJiAod2luZG93IGFzIGFueSkubW96SW5uZXJTY3JlZW5YICE9IG51bGwpO1xyXG5cclxuY29uc3QgX3BhcnNlSW50ID0gKHN0cjogc3RyaW5nKSA9PiBwYXJzZUludChzdHIsIDEwKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q29vcmRpbmF0ZXMoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsIHBvc2l0aW9uOiBudW1iZXIsIG9wdGlvbnM/OiB7IGRlYnVnPzogYm9vbGVhbiB9KTogQ29vcmRpbmF0ZXMge1xyXG4gIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uI2dldENhcmV0Q29vcmRpbmF0ZXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGluIGEgYnJvd3NlcicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVidWcgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XHJcbiAgaWYgKGRlYnVnKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2Jyk7XHJcbiAgICBpZiAoZWwpIHsgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7IH1cclxuICB9XHJcblxyXG4gIC8vIFRoZSBtaXJyb3IgZGl2IHdpbGwgcmVwbGljYXRlIHRoZSB0ZXh0YXJlYSdzIHN0eWxlXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ2lucHV0LXRleHRhcmVhLWNhcmV0LXBvc2l0aW9uLW1pcnJvci1kaXYnO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSBkaXYuc3R5bGU7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgOiAoZWxlbWVudCBhcyBhbnkpLmN1cnJlbnRTdHlsZTsgIC8vIGN1cnJlbnRTdHlsZSBmb3IgSUUgPCA5XHJcbiAgY29uc3QgaXNJbnB1dCA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCc7XHJcblxyXG4gIC8vIERlZmF1bHQgdGV4dGFyZWEgc3R5bGVzXHJcbiAgc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XHJcbiAgaWYgKCFpc0lucHV0KSB7XHJcbiAgICBzdHlsZS53b3JkV3JhcCA9ICdicmVhay13b3JkJzsgLy8gb25seSBmb3IgdGV4dGFyZWEtc1xyXG4gIH1cclxuXHJcbiAgLy8gUG9zaXRpb24gb2ZmLXNjcmVlblxyXG4gIHN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgIC8vIHJlcXVpcmVkIHRvIHJldHVybiBjb29yZGluYXRlcyBwcm9wZXJseVxyXG4gIGlmICghZGVidWcpIHtcclxuICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9ICAvLyBub3QgJ2Rpc3BsYXk6IG5vbmUnIGJlY2F1c2Ugd2Ugd2FudCByZW5kZXJpbmdcclxuXHJcbiAgLy8gVHJhbnNmZXIgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIHRvIHRoZSBkaXZcclxuICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3A6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGlzSW5wdXQgJiYgcHJvcCA9PT0gJ2xpbmVIZWlnaHQnKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgPGlucHV0PnMgYmVjYXVzZSB0ZXh0IGlzIHJlbmRlcmVkIGNlbnRlcmVkIGFuZCBsaW5lIGhlaWdodCBtYXkgYmUgIT0gaGVpZ2h0XHJcbiAgICAgIHN0eWxlLmxpbmVIZWlnaHQgPSBjb21wdXRlZC5oZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZVtwcm9wXSA9IGNvbXB1dGVkW3Byb3BdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAvLyBGaXJlZm94IGxpZXMgYWJvdXQgdGhlIG92ZXJmbG93IHByb3BlcnR5IGZvciB0ZXh0YXJlYXM6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTk4NDI3NVxyXG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gX3BhcnNlSW50KGNvbXB1dGVkLmhlaWdodCkpIHtcclxuICAgICAgc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7ICAvLyBmb3IgQ2hyb21lIHRvIG5vdCByZW5kZXIgYSBzY3JvbGxiYXI7IElFIGtlZXBzIG92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgfVxyXG5cclxuICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50LnZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbik7XHJcbiAgLy8gVGhlIHNlY29uZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBpbnB1dCB0eXBlPVwidGV4dFwiIHZzIHRleHRhcmVhOlxyXG4gIC8vIHNwYWNlcyBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggbm9uLWJyZWFraW5nIHNwYWNlcyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDAyMDM1LzEyNjkwMzdcclxuICBpZiAoaXNJbnB1dCkge1xyXG4gICAgZGl2LnRleHRDb250ZW50ID0gZGl2LnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCAnXFx1MDBhMCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAvLyBXcmFwcGluZyBtdXN0IGJlIHJlcGxpY2F0ZWQgKmV4YWN0bHkqLCBpbmNsdWRpbmcgd2hlbiBhIGxvbmcgd29yZCBnZXRzXHJcbiAgLy8gb250byB0aGUgbmV4dCBsaW5lLCB3aXRoIHdoaXRlc3BhY2UgYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBiZWZvcmUgKCM3KS5cclxuICAvLyBUaGUgICpvbmx5KiByZWxpYWJsZSB3YXkgdG8gZG8gdGhhdCBpcyB0byBjb3B5IHRoZSAqZW50aXJlKiByZXN0IG9mIHRoZVxyXG4gIC8vIHRleHRhcmVhJ3MgY29udGVudCBpbnRvIHRoZSA8c3Bhbj4gY3JlYXRlZCBhdCB0aGUgY2FyZXQgcG9zaXRpb24uXHJcbiAgLy8gRm9yIGlucHV0cywganVzdCAnLicgd291bGQgYmUgZW5vdWdoLCBidXQgbm8gbmVlZCB0byBib3RoZXIuXHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGVsZW1lbnQudmFsdWUuc3Vic3RyaW5nKHBvc2l0aW9uKSB8fCAnLic7ICAvLyB8fCBiZWNhdXNlIGEgY29tcGxldGVseSBlbXB0eSBmYXV4IHNwYW4gZG9lc24ndCByZW5kZXIgYXQgYWxsXHJcbiAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgIHRvcDogc3Bhbi5vZmZzZXRUb3AgKyBfcGFyc2VJbnQoY29tcHV0ZWQuYm9yZGVyVG9wV2lkdGgpLFxyXG4gICAgbGVmdDogc3Bhbi5vZmZzZXRMZWZ0ICsgX3BhcnNlSW50KGNvbXB1dGVkLmJvcmRlckxlZnRXaWR0aCksXHJcbiAgICBoZWlnaHQ6IF9wYXJzZUludChjb21wdXRlZC5saW5lSGVpZ2h0KVxyXG4gIH07XHJcblxyXG4gIGlmIChkZWJ1Zykge1xyXG4gICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XHJcbiAgICBjcmVhdGVEZWJ1Z0VsZShlbGVtZW50LCBjb29yZGluYXRlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYnVnRWxlKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcclxuICBjb25zdCBmb250U2l6ZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XHJcbiAgY29uc3QgcmVjdDogSFRNTFNwYW5FbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNERUJVRycpIGFzIEhUTUxTcGFuRWxlbWVudClcclxuICAgIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVjdCk7XHJcbiAgcmVjdC5pZCA9ICdERUJVRyc7XHJcbiAgcmVjdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgcmVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICByZWN0LnN0eWxlLmhlaWdodCA9IGZvbnRTaXplO1xyXG4gIHJlY3Quc3R5bGUud2lkdGggPSAnMXB4JztcclxuICByZWN0LnN0eWxlLnRvcCA9IGAke2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgKyBjb29yZGluYXRlcy50b3B9cHhgO1xyXG4gIHJlY3Quc3R5bGUubGVmdCA9IGAke2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIGVsZW1lbnQuc2Nyb2xsTGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCArIGNvb3JkaW5hdGVzLmxlZnR9cHhgO1xyXG4gIGNvbnNvbGUubG9nKHJlY3Quc3R5bGUudG9wKTtcclxuICBjb25zb2xlLmxvZyhyZWN0LnN0eWxlLmxlZnQpO1xyXG59XHJcbiJdfQ==