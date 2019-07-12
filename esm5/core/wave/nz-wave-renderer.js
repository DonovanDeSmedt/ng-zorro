/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
var NzWaveRenderer = /** @class */ (function () {
    function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.onClick = function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                (/** @type {?} */ (event.target)).tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        };
        /** @type {?} */
        var platform = new Platform();
        if (platform.isBrowser) {
            this.bindTriggerEvent();
        }
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.bindTriggerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.triggerElement) {
                _this.triggerElement.addEventListener('click', _this.onClick, true);
            }
        });
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeTriggerEvent = /**
     * @return {?}
     */
    function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.onClick, true);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeStyleAndExtraNode = /**
     * @return {?}
     */
    function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.fadeOutWave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = this.triggerElement;
        /** @type {?} */
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML =
                "[ant-click-animating-without-extra-node]:after { border-color: " + waveColor + "; }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone(function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isValidColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color
            && color !== '#ffffff'
            && color !== 'rgb(255, 255, 255)'
            && this.isNotGrey(color)
            && !/rgba\(\d*, \d*, \d*, 0\)/.test(color)
            && color !== 'transparent';
    };
    /**
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isNotGrey = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzWaveRenderer.prototype.getWaveColor = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var nodeStyle = getComputedStyle(node);
        return nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color');
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    NzWaveRenderer.prototype.runTimeoutOutsideZone = /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    function (fn, delay) {
        this.ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return NzWaveRenderer;
}());
export { NzWaveRenderer };
function NzWaveRenderer_tsickle_Closure_declarations() {
    /** @type {?} */
    NzWaveRenderer.prototype.waveTransitionDuration;
    /** @type {?} */
    NzWaveRenderer.prototype.styleForPseudo;
    /** @type {?} */
    NzWaveRenderer.prototype.extraNode;
    /** @type {?} */
    NzWaveRenderer.prototype.lastTime;
    /** @type {?} */
    NzWaveRenderer.prototype.onClick;
    /** @type {?} */
    NzWaveRenderer.prototype.triggerElement;
    /** @type {?} */
    NzWaveRenderer.prototype.ngZone;
    /** @type {?} */
    NzWaveRenderer.prototype.insertExtraNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3dhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELElBQUE7SUFXRSx3QkFBb0IsY0FBMkIsRUFBVSxNQUFjLEVBQVUsZUFBd0I7UUFBekcsaUJBS0M7UUFMbUIsbUJBQWMsR0FBZCxjQUFjLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVM7c0NBVHhFLEdBQUc7d0JBR2pCLENBQUM7UUFhcEIsZUFBVSxVQUFDLEtBQWlCO1lBQzFCLElBQ0UsQ0FBQyxLQUFJLENBQUMsY0FBYztnQkFDcEIsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7Z0JBQ2pDLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsbUJBQUMsS0FBSyxDQUFDLE1BQXFCLEVBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDakQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEQsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCLENBQUE7O1FBaEJDLElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7SUFURCxzQkFBSSw2Q0FBaUI7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQztTQUNoRzs7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QUFDLENBQUM7O3lCQXpIL0Q7SUEySEMsQ0FBQTtBQXhIRCwwQkF3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE56V2F2ZVJlbmRlcmVyIHtcclxuXHJcbiAgcHJpdmF0ZSB3YXZlVHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xyXG4gIHByaXZhdGUgc3R5bGVGb3JQc2V1ZG86IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG4gIHByaXZhdGUgZXh0cmFOb2RlOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXN0VGltZSA9IDA7XHJcblxyXG4gIGdldCB3YXZlQXR0cmlidXRlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0cmFOb2RlID8gJ2FudC1jbGljay1hbmltYXRpbmcnIDogJ2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGluc2VydEV4dHJhTm9kZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oKTtcclxuICAgIGlmIChwbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50IHx8XHJcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSB8fFxyXG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZhZGVPdXRXYXZlKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRyaWdnZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdHlsZUZvclBzZXVkbyAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVGb3JQc2V1ZG8pKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5zdHlsZUZvclBzZXVkbyk7XHJcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMudHJpZ2dlckVsZW1lbnQuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgdGhpcy5yZW1vdmVUcmlnZ2VyRXZlbnQoKTtcclxuICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmYWRlT3V0V2F2ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRyaWdnZXJFbGVtZW50O1xyXG4gICAgY29uc3Qgd2F2ZUNvbG9yID0gdGhpcy5nZXRXYXZlQ29sb3Iobm9kZSk7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lLCAndHJ1ZScpO1xyXG4gICAgaWYgKERhdGUubm93KCkgPCB0aGlzLmxhc3RUaW1lICsgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkQ29sb3Iod2F2ZUNvbG9yKSkge1xyXG4gICAgICBpZiAoIXRoaXMuc3R5bGVGb3JQc2V1ZG8pIHtcclxuICAgICAgICB0aGlzLnN0eWxlRm9yUHNldWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdHlsZUZvclBzZXVkby5pbm5lckhUTUwgPVxyXG4gICAgICAgIGBbYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGVdOmFmdGVyIHsgYm9yZGVyLWNvbG9yOiAke3dhdmVDb2xvcn07IH1gO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSkge1xyXG4gICAgICBpZiAoIXRoaXMuZXh0cmFOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5leHRyYU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmV4dHJhTm9kZS5jbGFzc05hbWUgPSAnYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlJztcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmV4dHJhTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xyXG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gICAgfSwgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZENvbG9yKGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjb2xvclxyXG4gICAgICAmJiBjb2xvciAhPT0gJyNmZmZmZmYnXHJcbiAgICAgICYmIGNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJ1xyXG4gICAgICAmJiB0aGlzLmlzTm90R3JleShjb2xvcilcclxuICAgICAgJiYgIS9yZ2JhXFwoXFxkKiwgXFxkKiwgXFxkKiwgMFxcKS8udGVzdChjb2xvcilcclxuICAgICAgJiYgY29sb3IgIT09ICd0cmFuc3BhcmVudCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTm90R3JleShjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGNvbG9yLm1hdGNoKC9yZ2JhP1xcKChcXGQqKSwgKFxcZCopLCAoXFxkKikoLCBbXFwuXFxkXSopP1xcKS8pO1xyXG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWyAxIF0gJiYgbWF0Y2hbIDIgXSAmJiBtYXRjaFsgMyBdKSB7XHJcbiAgICAgIHJldHVybiAhKG1hdGNoWyAxIF0gPT09IG1hdGNoWyAyIF0gJiYgbWF0Y2hbIDIgXSA9PT0gbWF0Y2hbIDMgXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2F2ZUNvbG9yKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICByZXR1cm4gbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3AtY29sb3InKSB8fCAvLyBGaXJlZm94IENvbXBhdGlibGVcclxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8XHJcbiAgICAgIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogKCkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcclxuICB9XHJcbn1cclxuIl19