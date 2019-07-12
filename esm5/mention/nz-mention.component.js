/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { DEFAULT_MENTION_POSITIONS } from '../core/overlay/overlay-position-map';
import { InputBoolean } from '../core/util';
import { getMentions } from '../core/util/getMentions';
import { getCaretCoordinates } from '../core/util/textarea-caret-position';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
/**
 * @record
 */
export function MentionOnSearchTypes() { }
function MentionOnSearchTypes_tsickle_Closure_declarations() {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
/**
 * @record
 */
export function Mention() { }
function Mention_tsickle_Closure_declarations() {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}
var NzMentionComponent = /** @class */ (function () {
    function NzMentionComponent(ngDocument, changeDetectorRef, ngZone, overlay, viewContainerRef) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzValueWith = function (value) { return value; }; // tslint:disable-line:no-any
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null; // tslint:disable-line:no-any
        this.activeIndex = -1;
    }
    Object.defineProperty(NzMentionComponent.prototype, "suggestionChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.suggestionTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMentionComponent.prototype, "triggerNativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.trigger.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.bindTriggerEvents();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getMentions = /**
     * @return {?}
     */
    function () {
        return getMentions(this.trigger.value, this.nzPrefix);
    };
    /**
     * @param {?} suggestion
     * @return {?}
     */
    NzMentionComponent.prototype.selectSuggestion = /**
     * @param {?} suggestion
     * @return {?}
     */
    function (suggestion) {
        /** @type {?} */
        var value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = /** @type {?} */ (event.target);
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzMentionComponent.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && (keyCode === UP_ARROW)) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && (keyCode === DOWN_ARROW)) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.resetDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.bindTriggerEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.trigger.onInput.subscribe(function (e) { return _this.handleInput(e); });
        this.trigger.onKeydown.subscribe(function (e) { return _this.handleKeydown(e); });
        this.trigger.onClick.subscribe(function () { return _this.handleClick(); });
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzMentionComponent.prototype.suggestionsFilter = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        var _this = this;
        /** @type {?} */
        var suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: this.cursorMention.substring(1),
                prefix: this.cursorMention[0]
            });
        }
        /** @type {?} */
        var searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions
            .filter(function (suggestion) { return _this.nzValueWith(suggestion).toLowerCase().includes(searchValue); });
    };
    /**
     * @param {?=} emit
     * @return {?}
     */
    NzMentionComponent.prototype.resetDropdown = /**
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        var activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1
            ? this.activeIndex + 1
            : 0;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        this.activeIndex = this.activeIndex - 1 < 0
            ? this.filteredSuggestions.length - 1
            : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.canOpen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.resetCursorMention = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        var selectionStart = this.triggerNativeElement.selectionStart;
        /** @type {?} */
        var prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        var i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            var startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            var endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            var mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ')
                || startPos < 0
                || mention.includes(prefix[i], 1)
                || mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.updatePositions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        var top = coordinates.top
            - this.triggerNativeElement.getBoundingClientRect().height
            - this.triggerNativeElement.scrollTop
            + (this.nzPlacement === 'bottom' ? coordinates.height : 0);
        /** @type {?} */
        var left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[0]]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[1]]);
        }
        this.positionStrategy.apply();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.subscribeOverlayBackdropClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend'))
            .subscribe(function (event) {
            /** @type {?} */
            var clickTarget = /** @type {?} */ (event.target);
            if (clickTarget !== _this.trigger.el.nativeElement && _this.isOpen) {
                _this.closeDropdown();
            }
        });
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    /**
     * @return {?}
     */
    NzMentionComponent.prototype.getOverlayPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    NzMentionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-mention',
                    template: "<ng-content></ng-content>\r\n<ng-template #suggestions>\r\n  <ul class=\"ant-mention-dropdown\">\r\n    <li class=\"ant-mention-dropdown-item\"\r\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\r\n        [class.focus]=\"i === activeIndex\"\r\n        (click)=\"selectSuggestion(suggestion)\">\r\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\r\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\r\n      </ng-container>\r\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\r\n    </li>\r\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\r\n        *ngIf=\"filteredSuggestions.length === 0\">\r\n      <span *ngIf=\"nzLoading\"><i nz-icon type=\"loading\"></i></span>\r\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n    .ant-mention-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzMentionComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Overlay },
        { type: ViewContainerRef }
    ]; };
    NzMentionComponent.propDecorators = {
        nzValueWith: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzSuggestions: [{ type: Input }],
        nzOnSelect: [{ type: Output }],
        nzOnSearchChange: [{ type: Output }],
        trigger: [{ type: ContentChild, args: [NzMentionTriggerDirective,] }],
        suggestionsTemp: [{ type: ViewChild, args: [TemplateRef,] }],
        suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { read: TemplateRef },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMentionComponent.prototype, "nzLoading", void 0);
    return NzMentionComponent;
}());
export { NzMentionComponent };
function NzMentionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.nzPlacement;
    /** @type {?} */
    NzMentionComponent.prototype.nzSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /** @type {?} */
    NzMentionComponent.prototype.previousValue;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMention;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionStart;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionEnd;
    /** @type {?} */
    NzMentionComponent.prototype.overlayRef;
    /** @type {?} */
    NzMentionComponent.prototype.portal;
    /** @type {?} */
    NzMentionComponent.prototype.positionStrategy;
    /** @type {?} */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzMentionComponent.prototype.ngDocument;
    /** @type {?} */
    NzMentionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzMentionComponent.prototype.ngZone;
    /** @type {?} */
    NzMentionComponent.prototype.overlay;
    /** @type {?} */
    NzMentionComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudGlvbi9uei1tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7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WyJpbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgUG9zaXRpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBERUZBVUxUX01FTlRJT05fUE9TSVRJT05TIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsJztcclxuaW1wb3J0IHsgZ2V0TWVudGlvbnMgfSBmcm9tICcuLi9jb3JlL3V0aWwvZ2V0TWVudGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDYXJldENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vY29yZS91dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uJztcclxuXHJcbmltcG9ydCB7IE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tc3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXRyaWdnZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBwcmVmaXg6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcclxuICBzdGFydFBvczogbnVtYmVyO1xyXG4gIGVuZFBvczogbnVtYmVyO1xyXG4gIG1lbnRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudGlvblBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbWVudGlvbicsXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbWVudGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxyXG4gICAgLmFudC1tZW50aW9uLWRyb3Bkb3duIHtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICBgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIG56VmFsdWVXaXRoOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nID0gdmFsdWUgPT4gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nID0gJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpSc7XHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE1lbnRpb25QbGFjZW1lbnQgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBuelN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWVudGlvbk9uU2VhcmNoVHlwZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAQ29udGVudENoaWxkKE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpIHRyaWdnZXI7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgc3VnZ2VzdGlvbnNUZW1wO1xyXG5cclxuICBAQ29udGVudENoaWxkKE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IHN1Z2dlc3Rpb25DaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvblRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09wZW4gPSBmYWxzZTtcclxuICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PiB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGFjdGl2ZUluZGV4ID0gLTE7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3Vyc29yTWVudGlvblN0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uRW5kOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+O1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdHJpZ2dlck5hdGl2ZUVsZW1lbnQoKTogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBuZ0RvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpTdWdnZXN0aW9ucycpKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMucmVzZXREcm9wZG93bihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYmluZFRyaWdnZXJFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldE1lbnRpb25zKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBnZXRNZW50aW9ucyh0aGlzLnRyaWdnZXIudmFsdWUsIHRoaXMubnpQcmVmaXgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U3VnZ2VzdGlvbihzdWdnZXN0aW9uOiBzdHJpbmcgfCB7fSk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pO1xyXG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xyXG4gICAgICBtZW50aW9uIDogdmFsdWUsXHJcbiAgICAgIHN0YXJ0UG9zOiB0aGlzLmN1cnNvck1lbnRpb25TdGFydCxcclxuICAgICAgZW5kUG9zICA6IHRoaXMuY3Vyc29yTWVudGlvbkVuZFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56T25TZWxlY3QuZW1pdChzdWdnZXN0aW9uKTtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLnRyaWdnZXIudmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICBpZiAodGhpcy5pc09wZW4gJiYga2V5Q29kZSA9PT0gRU5URVIgJiYgdGhpcy5hY3RpdmVJbmRleCAhPT0gLTEgJiYgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zWyB0aGlzLmFjdGl2ZUluZGV4IF0pO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFRBQiB8fCBrZXlDb2RlID09PSBFU0NBUEUpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSkge1xyXG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIChrZXlDb2RlID09PSBET1dOX0FSUk9XKSkge1xyXG4gICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRUcmlnZ2VyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uSW5wdXQuc3Vic2NyaWJlKChlKSA9PiB0aGlzLmhhbmRsZUlucHV0KGUpKTtcclxuICAgIHRoaXMudHJpZ2dlci5vbktleWRvd24uc3Vic2NyaWJlKChlKSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xyXG4gICAgdGhpcy50cmlnZ2VyLm9uQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1Z2dlc3Rpb25zRmlsdGVyKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLm56T25TZWFyY2hDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgdmFsdWUgOiB0aGlzLmN1cnNvck1lbnRpb24uc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgIHByZWZpeDogdGhpcy5jdXJzb3JNZW50aW9uWyAwIF1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHN1Z2dlc3Rpb25zLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMgPSB0aGlzLm56U3VnZ2VzdGlvbnNcclxuICAgIC5maWx0ZXIoc3VnZ2VzdGlvbiA9PiB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXREcm9wZG93bihlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldEN1cnNvck1lbnRpb24oKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jdXJzb3JNZW50aW9uICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5jYW5PcGVuKCkpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNGaWx0ZXIodGhpcy5jdXJzb3JNZW50aW9uLCBlbWl0KTtcclxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmluZGV4T2YodGhpcy5jdXJzb3JNZW50aW9uLnN1YnN0cmluZygxKSk7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggPj0gMCA/IGFjdGl2ZUluZGV4IDogMDtcclxuICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxIDw9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgID8gdGhpcy5hY3RpdmVJbmRleCArIDFcclxuICAgICAgOiAwO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggLSAxIDwgMFxyXG4gICAgICA/IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgIDogdGhpcy5hY3RpdmVJbmRleCAtIDE7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50O1xyXG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEN1cnNvck1lbnRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQudmFsdWUucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKSB8fCAnJztcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IHByZWZpeCA9IHR5cGVvZiB0aGlzLm56UHJlZml4ID09PSAnc3RyaW5nJyA/IFsgdGhpcy5uelByZWZpeCBdIDogdGhpcy5uelByZWZpeDtcclxuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcclxuICAgIHdoaWxlIChpID49IDApIHtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB2YWx1ZS5sYXN0SW5kZXhPZihwcmVmaXhbIGkgXSwgc2VsZWN0aW9uU3RhcnQpO1xyXG4gICAgICBjb25zdCBlbmRQb3MgPSB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpIDogdmFsdWUubGVuZ3RoO1xyXG4gICAgICBjb25zdCBtZW50aW9uID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICBpZiAoKHN0YXJ0UG9zID4gMCAmJiB2YWx1ZVsgc3RhcnRQb3MgLSAxIF0gIT09ICcgJylcclxuICAgICAgICB8fCBzdGFydFBvcyA8IDBcclxuICAgICAgICB8fCBtZW50aW9uLmluY2x1ZGVzKHByZWZpeFsgaSBdLCAxKVxyXG4gICAgICAgIHx8IG1lbnRpb24uaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSAtMTtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb25FbmQgPSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnNvck1lbnRpb24gPSBtZW50aW9uO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gZW5kUG9zO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q2FyZXRDb29yZGluYXRlcyh0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LCB0aGlzLmN1cnNvck1lbnRpb25TdGFydCk7XHJcbiAgICBjb25zdCB0b3AgPSBjb29yZGluYXRlcy50b3BcclxuICAgICAgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAtIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgICsgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gY29vcmRpbmF0ZXMuaGVpZ2h0IDogMCk7XHJcbiAgICBjb25zdCBsZWZ0ID0gY29vcmRpbmF0ZXMubGVmdCAtIHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoRGVmYXVsdE9mZnNldFgobGVmdCkud2l0aERlZmF1bHRPZmZzZXRZKHRvcCk7XHJcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWyBERUZBVUxUX01FTlRJT05fUE9TSVRJT05TWyAwIF0gXSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoWyBERUZBVUxUX01FTlRJT05fUE9TSVRJT05TWyAxIF0gXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLm5nRG9jdW1lbnQsICdjbGljaycpLFxyXG4gICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAndG91Y2hlbmQnKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoY2xpY2tUYXJnZXQgIT09IHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5zdWdnZXN0aW9uc1RlbXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgIDogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcclxuICAgIF07XHJcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy50cmlnZ2VyLmVsKVxyXG4gICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxyXG4gICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAud2l0aFB1c2goZmFsc2UpO1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==