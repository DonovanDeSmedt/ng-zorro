/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
export class NzTagComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.closed = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const isPresetColor = this.isPresetColor(this.nzColor);
        this.classMap = {
            [`ant-tag`]: true,
            [`ant-tag-has-color`]: this.nzColor && !isPresetColor,
            [`ant-tag-${this.nzColor}`]: isPresetColor,
            [`ant-tag-checkable`]: this.nzMode === 'checkable',
            [`ant-tag-checkable-checked`]: this.nzChecked
        };
    }
    /**
     * @return {?}
     */
    updateColorStatus() {
        if (this.wrapperElement && this.nzColor) {
            if (this.isPresetColor(this.nzColor)) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.nzColor);
            }
        }
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (this.closed && !e.fromState) {
            this.nzAfterClose.emit();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzColor"]) {
            this.updateColorStatus();
        }
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateColorStatus();
    }
}
NzTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tag',
                preserveWhitespaces: false,
                animations: [trigger('tagAnimation', [
                        state('*', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                        ]),
                        state('void', style({ opacity: 0 })),
                        transition('* => void', [
                            style({ opacity: 1 }),
                            animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                        ])
                    ])],
                template: "<div\r\n  *ngIf=\"!closed\"\r\n  [ngClass]=\"classMap\"\r\n  #wrapperElement\r\n  [@tagAnimation]\r\n  (@tagAnimation.done)=\"afterAnimation($event)\"\r\n  (click)=\"updateCheckedStatus()\">\r\n  <ng-content></ng-content>\r\n  <i nz-icon type=\"close\" *ngIf=\"nzMode==='closeable'\" (click)=\"closeTag($event)\"></i>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NzTagComponent.propDecorators = {
    wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
    nzMode: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzAfterClose: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzCheckedChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTagComponent.prototype, "nzChecked", void 0);
function NzTagComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTagComponent.prototype.classMap;
    /** @type {?} */
    NzTagComponent.prototype.closed;
    /** @type {?} */
    NzTagComponent.prototype.wrapperElement;
    /** @type {?} */
    NzTagComponent.prototype.nzMode;
    /** @type {?} */
    NzTagComponent.prototype.nzColor;
    /** @type {?} */
    NzTagComponent.prototype.nzChecked;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTagComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWcvbnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXFCcEQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFhekIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVh2QyxjQUFTLEtBQUssQ0FBQztRQUlmLGNBQTJCLFNBQVMsQ0FBQztRQUVyQyxpQkFBOEMsS0FBSyxDQUFDO1FBQ3BELG9CQUFrQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNELGlCQUErQixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlELHVCQUFxQyxJQUFJLFlBQVksRUFBVyxDQUFDO0tBRXJCOzs7OztJQUVwQyxhQUFhLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FDTCxpR0FBaUc7YUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNiLENBQUM7Ozs7O0lBR0ksY0FBYzs7UUFDcEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUUsU0FBUyxDQUFFLEVBQW9C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QUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2FBQzVDOzs7O1lBM0JDLFNBQVM7Ozs2QkFnQ1IsU0FBUyxTQUFDLGdCQUFnQjtxQkFFMUIsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsTUFBTTt3QkFDTixNQUFNOzhCQUNOLE1BQU07OztJQUhHLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uRXZlbnRcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ1R5cGUgPSAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGFnJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbIHRyaWdnZXIoJ3RhZ0FuaW1hdGlvbicsIFtcclxuICAgIHN0YXRlKCcqJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcclxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICBhbmltYXRlKCczMDBtcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiknKVxyXG4gICAgXSksXHJcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXHJcbiAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcclxuICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJylcclxuICAgIF0pXHJcbiAgXSkgXSxcclxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBjbGFzc01hcDtcclxuICBjbG9zZWQgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnd3JhcHBlckVsZW1lbnQnKSBwcml2YXRlIHdyYXBwZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBuek1vZGU6IFRhZ1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC9cclxuICAgICAgLnRlc3QoY29sb3IpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzUHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsgYGFudC10YWdgIF0gICAgICAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYGFudC10YWctaGFzLWNvbG9yYCBdICAgICAgICA6IHRoaXMubnpDb2xvciAmJiAhaXNQcmVzZXRDb2xvcixcclxuICAgICAgWyBgYW50LXRhZy0ke3RoaXMubnpDb2xvcn1gIF0gIDogaXNQcmVzZXRDb2xvcixcclxuICAgICAgWyBgYW50LXRhZy1jaGVja2FibGVgIF0gICAgICAgIDogdGhpcy5uek1vZGUgPT09ICdjaGVja2FibGUnLFxyXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZS1jaGVja2VkYCBdOiB0aGlzLm56Q2hlY2tlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29sb3JTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy53cmFwcGVyRWxlbWVudCAmJiB0aGlzLm56Q29sb3IpIHtcclxuICAgICAgaWYgKHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLm56Q29sb3IpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLndyYXBwZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyYXBwZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5uekNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcclxuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XHJcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25DbG9zZS5lbWl0KGUpO1xyXG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNsb3NlZCAmJiAhZS5mcm9tU3RhdGUpIHtcclxuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcclxuICB9XHJcbn1cclxuIl19