/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, Directive, ElementRef, Inject, Input, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map } from 'rxjs/operators';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
/** @type {?} */
export const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
    multi: true
};
/**
 * @return {?}
 */
export function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
export class NzAutocompleteTriggerDirective {
    /**
     * @param {?} elementRef
     * @param {?} _overlay
     * @param {?} viewContainerRef
     * @param {?} document
     */
    constructor(elementRef, _overlay, viewContainerRef, 
    // tslint:disable-next-line:no-any
    document) {
        this.elementRef = elementRef;
        this._overlay = _overlay;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this._onChange = () => { };
        this._onTouched = () => { };
        this.panelOpen = false;
    }
    /**
     * Current active option
     * @return {?}
     */
    get activeOption() {
        if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
            return this.nzAutocomplete.activeItem;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setTriggerValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.attachOverlay();
    }
    /**
     * @return {?}
     */
    closePanel() {
        if (this.panelOpen) {
            this.nzAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
                this.overlayRef.detach();
                this.overlayRef = null;
                this.portal = null;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // Reset value when tab / ESC close
            if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            event.preventDefault();
            if (this.nzAutocomplete.showPanel && this.activeOption) {
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
            event.stopPropagation();
            if (keyCode === UP_ARROW) {
                this.nzAutocomplete.setPreviousItemActive();
            }
            else {
                this.nzAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = /** @type {?} */ (event.target);
        /** @type {?} */
        let value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.canOpen() && document.activeElement === event.target &&
            this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleFocus() {
        if (this.canOpen()) {
            this.previousValue = this.elementRef.nativeElement.value;
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this._onTouched();
    }
    /**
     * Subscription data source changes event
     * @return {?}
     */
    subscribeOptionsChange() {
        return this.nzAutocomplete.options.changes.pipe(delay(0)).subscribe(() => {
            this.resetActiveItem();
        });
    }
    /**
     * Subscription option changes event and set the value
     * @return {?}
     */
    subscribeSelectionChange() {
        return this.nzAutocomplete.selectionChange
            .subscribe((option) => {
            this.setValueAndClose(option);
        });
    }
    /**
     * Subscription external click and close panel
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend'))
            .subscribe((event) => {
            /** @type {?} */
            const clickTarget = /** @type {?} */ (event.target);
            // Make sure is not self
            if (clickTarget !== this.elementRef.nativeElement && !this.overlayRef.overlayElement.contains(clickTarget) && this.panelOpen) {
                this.closePanel();
            }
        });
    }
    /**
     * Subscription overlay position changes and reset dropdown position
     * @return {?}
     */
    subscribeOverlayPositionChange() {
        return this.positionStrategy.positionChanges
            .pipe(map((position) => position.connectionPair.originY), distinct())
            .subscribe((position) => {
            this.nzAutocomplete.dropDownPosition = position;
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        if (!this.nzAutocomplete) {
            throw getNzAutocompleteMissingPanelError();
        }
        if (!this.portal) {
            this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
        }
        if (!this.overlayRef) {
            this.overlayRef = this._overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.nzAutocomplete.isOpen = this.panelOpen = true;
        this.nzAutocomplete.setVisibility();
        this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        setTimeout(() => {
            if (this.overlayRef) {
                this.overlayRef.updatePosition();
            }
        }, 150);
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    }
    /**
     * @return {?}
     */
    destroyPanel() {
        if (this.overlayRef) {
            this.closePanel();
        }
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    }
    /**
     * @return {?}
     */
    getConnectedElement() {
        return this.elementRef;
    }
    /**
     * @return {?}
     */
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    resetActiveItem() {
        if (this.nzAutocomplete.activeItem && this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem)) {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem));
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    setValueAndClose(option) {
        /** @type {?} */
        const value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTriggerValue(value) {
        this.elementRef.nativeElement.value = value || '';
    }
    /**
     * @return {?}
     */
    doBackfill() {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    }
    /**
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    }
}
NzAutocompleteTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
                providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                host: {
                    'autocomplete': 'off',
                    'aria-autocomplete': 'list',
                    '(focusin)': 'handleFocus()',
                    '(blur)': 'handleBlur()',
                    '(input)': 'handleInput($event)',
                    '(keydown)': 'handleKeydown($event)'
                }
            },] }
];
/** @nocollapse */
NzAutocompleteTriggerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NzAutocompleteTriggerDirective.propDecorators = {
    nzAutocomplete: [{ type: Input }]
};
function NzAutocompleteTriggerDirective_tsickle_Closure_declarations() {
    /**
     * Bind nzAutocomplete component
     * @type {?}
     */
    NzAutocompleteTriggerDirective.prototype.nzAutocomplete;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onChange;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onTouched;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.panelOpen;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.portal;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.positionStrategy;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.previousValue;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.elementRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._overlay;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.viewContainerRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUvbnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFFTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RSxhQUFhLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQU0saUJBQWlCO0lBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUM7SUFDN0QsS0FBSyxFQUFRLElBQUk7Q0FDbEIsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSxrQ0FBa0M7SUFDaEQsT0FBTyxLQUFLLENBQUMsaUVBQWlFO1FBQzVFLDJFQUEyRTtRQUMzRSxrRUFBa0UsQ0FBQyxDQUFDO0NBQ3ZFO0FBY0QsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7OztJQXlCekMsWUFDVSxZQUNBLFVBQ0E7O0lBRThCLFFBQWE7UUFKM0MsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFFYyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBekJyRCxpQkFBaUMsR0FBRyxFQUFFLElBQUcsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLEVBQUUsSUFBRyxDQUFDO1FBQ3RCLGlCQUFxQixLQUFLLENBQUM7S0F3QjFCOzs7OztJQXJCRCxJQUFJLFlBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7U0FDdkM7S0FDRjs7OztJQW1CRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUdELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBcUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjs7UUFDbEMsTUFBTSxPQUFPLEdBQXFCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXBELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO0tBQ0Y7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQW9COztRQUNoQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDOztRQUM5QixNQUFNLFVBQVUsR0FBRyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxVQUFVLENBQUM7UUFFbEUsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFOztZQUU3RCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxQztZQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQzlDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUMxQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtZQUN4RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FDRjs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBb0I7O1FBQzlCLE1BQU0sTUFBTSxxQkFBRyxLQUFLLENBQUMsTUFBMEIsRUFBQzs7UUFDaEQsSUFBSSxLQUFLLEdBQTJCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixLQUFLLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxNQUFNO1lBQzNELElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7OztJQUtPLHNCQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDVCxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7SUFNRyx3QkFBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWU7YUFDekMsU0FBUyxDQUFDLENBQUMsTUFBcUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7Ozs7OztJQU1HLDZCQUE2QjtRQUNuQyxPQUFPLEtBQUssQ0FDVixTQUFTLENBQWEsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFDN0MsU0FBUyxDQUFhLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQ2pEO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFOztZQUM1QyxNQUFNLFdBQVcscUJBQUcsS0FBSyxDQUFDLE1BQXFCLEVBQUM7O1lBR2hELElBQUksV0FBVyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGLENBQUMsQ0FBQzs7Ozs7O0lBTUcsOEJBQThCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWU7YUFDM0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLFFBQXdDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQ2xGLFFBQVEsRUFBRSxDQUNYO2FBQ0EsU0FBUyxDQUFDLENBQUMsUUFBK0IsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1NBQ2pELENBQUMsQ0FBQzs7Ozs7SUFHRyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLE1BQU0sa0NBQWtDLEVBQUUsQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdkY7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7WUFDL0UsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUM3RSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNsQztTQUNGLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM1Qzs7Ozs7SUFHSyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7Ozs7O0lBR0ssZ0JBQWdCO1FBQ3RCLE9BQU8sSUFBSSxhQUFhLENBQUM7WUFDdkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNDLGNBQWMsRUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTs7WUFFN0QsS0FBSyxFQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7U0FDckUsQ0FBQyxDQUFDOzs7OztJQUdHLG1CQUFtQjtRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7O0lBR2pCLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7Ozs7O0lBR3hFLGtCQUFrQjs7UUFDeEIsTUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDNUcsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTthQUMvQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUMvQyxhQUFhLENBQUMsU0FBUyxDQUFDO2FBQ3hCLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Ozs7O0lBR3ZCLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN2RzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGOzs7Ozs7SUFHSyxnQkFBZ0IsQ0FBQyxNQUFxQzs7UUFDNUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUFHWixlQUFlLENBQUMsS0FBNkI7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7Ozs7O0lBRzVDLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakU7Ozs7O0lBR0ssT0FBTzs7UUFDYixNQUFNLE9BQU8sR0FBcUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOzs7O1lBMVNqRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLGlEQUFpRDtnQkFDNUQsU0FBUyxFQUFFLENBQUUsOEJBQThCLENBQUU7Z0JBQzdDLElBQUksRUFBTztvQkFDVCxjQUFjLEVBQU8sS0FBSztvQkFDMUIsbUJBQW1CLEVBQUUsTUFBTTtvQkFDM0IsV0FBVyxFQUFVLGVBQWU7b0JBQ3BDLFFBQVEsRUFBYSxjQUFjO29CQUNuQyxTQUFTLEVBQVkscUJBQXFCO29CQUMxQyxXQUFXLEVBQVUsdUJBQXVCO2lCQUM3QzthQUNGOzs7O1lBdkNDLFVBQVU7WUFYVixPQUFPO1lBaUJQLGdCQUFnQjs0Q0FnRWIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7NkJBM0I3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxuICBPdmVybGF5UmVmLFxyXG4gIFBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFeGlzdGluZ1Byb3ZpZGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgTlpfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUpLFxyXG4gIG11bHRpICAgICAgOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnpBdXRvY29tcGxldGVNaXNzaW5nUGFuZWxFcnJvcigpOiBFcnJvciB7XHJcbiAgcmV0dXJuIEVycm9yKCdBdHRlbXB0aW5nIHRvIG9wZW4gYW4gdW5kZWZpbmVkIGluc3RhbmNlIG9mIGBuei1hdXRvY29tcGxldGVgLiAnICtcclxuICAgICdNYWtlIHN1cmUgdGhhdCB0aGUgaWQgcGFzc2VkIHRvIHRoZSBgbnpBdXRvY29tcGxldGVgIGlzIGNvcnJlY3QgYW5kIHRoYXQgJyArXHJcbiAgICAneW91XFwncmUgYXR0ZW1wdGluZyB0byBvcGVuIGl0IGFmdGVyIHRoZSBuZ0FmdGVyQ29udGVudEluaXQgaG9vay4nKTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3IgOiBgaW5wdXRbbnpBdXRvY29tcGxldGVdLCB0ZXh0YXJlYVtuekF1dG9jb21wbGV0ZV1gLFxyXG4gIHByb3ZpZGVyczogWyBOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1IgXSxcclxuICBob3N0ICAgICA6IHtcclxuICAgICdhdXRvY29tcGxldGUnICAgICA6ICdvZmYnLFxyXG4gICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxyXG4gICAgJyhmb2N1c2luKScgICAgICAgIDogJ2hhbmRsZUZvY3VzKCknLFxyXG4gICAgJyhibHVyKScgICAgICAgICAgIDogJ2hhbmRsZUJsdXIoKScsXHJcbiAgICAnKGlucHV0KScgICAgICAgICAgOiAnaGFuZGxlSW5wdXQoJGV2ZW50KScsXHJcbiAgICAnKGtleWRvd24pJyAgICAgICAgOiAnaGFuZGxlS2V5ZG93bigkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKiogQmluZCBuekF1dG9jb21wbGV0ZSBjb21wb25lbnQgKi9cclxuICBASW5wdXQoKSBuekF1dG9jb21wbGV0ZTogTnpBdXRvY29tcGxldGVDb21wb25lbnQ7XHJcblxyXG4gIF9vbkNoYW5nZTogKHZhbHVlOiB7fSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuICBwYW5lbE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgYWN0aXZlIG9wdGlvbiAqL1xyXG4gIGdldCBhY3RpdmVPcHRpb24oKTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQge1xyXG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcclxuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+O1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgb3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95UGFuZWwoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZToge30pID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICB9XHJcblxyXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xyXG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmlzT3BlbiA9IHRoaXMucGFuZWxPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvcnRhbCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgY29uc3QgaXNBcnJvd0tleSA9IGtleUNvZGUgPT09IFVQX0FSUk9XIHx8IGtleUNvZGUgPT09IERPV05fQVJST1c7XHJcblxyXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAoa2V5Q29kZSA9PT0gRVNDQVBFIHx8IGtleUNvZGUgPT09IFRBQikpIHtcclxuICAgICAgLy8gUmVzZXQgdmFsdWUgd2hlbiB0YWIgLyBFU0MgY2xvc2VcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uICYmIHRoaXMuYWN0aXZlT3B0aW9uLmdldExhYmVsKCkgIT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWxPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCAmJiB0aGlzLmFjdGl2ZU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNlbGVjdFZpYUludGVyYWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbE9wZW4gJiYgaXNBcnJvd0tleSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldE5leHRJdGVtQWN0aXZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZG9CYWNrZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbGV0IHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhbk9wZW4oKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYW5PcGVuKCkpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gZGF0YSBzb3VyY2UgY2hhbmdlcyBldmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgIGRlbGF5KDApXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmlwdGlvbiBvcHRpb24gY2hhbmdlcyBldmVudCBhbmQgc2V0IHRoZSB2YWx1ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5zZWxlY3Rpb25DaGFuZ2VcclxuICAgIC5zdWJzY3JpYmUoKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZUFuZENsb3NlKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmlwdGlvbiBleHRlcm5hbCBjbGljayBhbmQgY2xvc2UgcGFuZWxcclxuICAgKi9cclxuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2U8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KFxyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5kb2N1bWVudCwgJ2NsaWNrJyksXHJcbiAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50Pih0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIGlzIG5vdCBzZWxmXHJcbiAgICAgIGlmIChjbGlja1RhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgdGhpcy5wYW5lbE9wZW4pIHtcclxuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb24gb3ZlcmxheSBwb3NpdGlvbiBjaGFuZ2VzIGFuZCByZXNldCBkcm9wZG93biBwb3NpdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlc1xyXG4gICAgLnBpcGUoXHJcbiAgICAgIG1hcCgocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSkgPT4gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSksXHJcbiAgICAgIGRpc3RpbmN0KClcclxuICAgIClcclxuICAgIC5zdWJzY3JpYmUoKHBvc2l0aW9uOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MpID0+IHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekF1dG9jb21wbGV0ZSkge1xyXG4gICAgICB0aHJvdyBnZXROekF1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBvcnRhbCkge1xyXG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56QXV0b2NvbXBsZXRlLnRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcclxuICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XHJcbiAgICAgIHRoaXMub3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRWaXNpYmlsaXR5KCk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKSB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDE1MCk7XHJcbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveVBhbmVsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcclxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICA6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXHJcbiAgICAgIC8vIGRlZmF1bHQgaG9zdCBlbGVtZW50IHdpZHRoXHJcbiAgICAgIHdpZHRoICAgICAgICAgICA6IHRoaXMubnpBdXRvY29tcGxldGUubnpXaWR0aCB8fCB0aGlzLmdldEhvc3RXaWR0aCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29ubmVjdGVkRWxlbWVudCgpOiBFbGVtZW50UmVmIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXHJcbiAgICBdO1xyXG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKSlcclxuICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcclxuICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgLndpdGhQdXNoKGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QWN0aXZlSXRlbSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0gJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5nZXRPcHRpb25JbmRleCh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0pKSB7XHJcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0QWN0aXZlSXRlbSh0aGlzLm56QXV0b2NvbXBsZXRlLmdldE9wdGlvbkluZGV4KHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKHRoaXMubnpBdXRvY29tcGxldGUubnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPyAwIDogLTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZUFuZENsb3NlKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uLm56VmFsdWU7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZShvcHRpb24uZ2V0TGFiZWwoKSk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRyaWdnZXJWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9CYWNrZmlsbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLm56QmFja2ZpbGwgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtKSB7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbS5nZXRMYWJlbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuT3BlbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcclxuICB9XHJcbn1cclxuIl19