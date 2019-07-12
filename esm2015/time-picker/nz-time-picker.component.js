/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
export class NzTimePickerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} positionBuilder
     * @param {?} i18n
     * @param {?} updateCls
     */
    constructor(element, renderer, overlay, positionBuilder, i18n, updateCls) {
        this.element = element;
        this.renderer = renderer;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.i18n = i18n;
        this.updateCls = updateCls;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [{
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideDisabledOptions(value) {
        this._hideDisabledOptions = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideDisabledOptions() {
        return this._hideDisabledOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        this._allowEmpty = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get nzAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        /** @type {?} */
        const input = /** @type {?} */ (this.inputRef.nativeElement);
        if (this._disabled) {
            this.renderer.setAttribute(input, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(input, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.nzSize}`]: isNotNil(this.nzSize)
        });
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this._value = time;
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
        this.nzDisabled = isDisabled;
    }
}
NzTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-time-picker',
                template: "<input\r\n  type=\"text\"\r\n  [nzTime]=\"nzFormat\"\r\n  class=\"ant-time-picker-input\"\r\n  [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n  [(ngModel)]=\"value\"\r\n  readonly=\"readonly\"\r\n  (click)=\"open()\"\r\n  #inputElement>\r\n<span class=\"ant-time-picker-icon\">\r\n  <i nz-icon type=\"clock-circle\"></i>\r\n</span>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\r\n  [cdkConnectedOverlayOffsetY]=\"-2\"\r\n  (detach)=\"close()\"\r\n  (backdropClick)=\"close()\">\r\n  <nz-time-picker-panel\r\n    [ngClass]=\"nzPopupClassName\"\r\n    [@dropDownAnimation]=\"'bottom'\"\r\n    [format]=\"nzFormat\"\r\n    [nzHourStep]=\"nzHourStep\"\r\n    [nzMinuteStep]=\"nzMinuteStep\"\r\n    [nzSecondStep]=\"nzSecondStep\"\r\n    [nzDisabledHours]=\"nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"nzDisabledSeconds\"\r\n    [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n    [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\r\n    [nzAddOn]=\"nzAddOn\"\r\n    [opened]=\"nzOpen\"\r\n    [nzClearText]=\"nzClearText\"\r\n    [nzAllowEmpty]=\"nzAllowEmpty\"\r\n    (timeClear)=\"close()\"\r\n    [(ngModel)]=\"value\">\r\n  </nz-time-picker-panel>\r\n</ng-template>\r\n\r\n",
                animations: [
                    trigger('dropDownAnimation', [
                        state('void', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        state('*', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                        ]),
                        transition('* => void', [
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                providers: [
                    UpdateCls,
                    { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }
                ]
            }] }
];
/** @nocollapse */
NzTimePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: OverlayPositionBuilder },
    { type: I18n },
    { type: UpdateCls }
];
NzTimePickerComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputElement',] }],
    nzSize: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPopupClassName: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzHideDisabledOptions: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }]
};
function NzTimePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimePickerComponent.prototype._disabled;
    /** @type {?} */
    NzTimePickerComponent.prototype._value;
    /** @type {?} */
    NzTimePickerComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype._autoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype._onChange;
    /** @type {?} */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype._hideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.element;
    /** @type {?} */
    NzTimePickerComponent.prototype.renderer;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlay;
    /** @type {?} */
    NzTimePickerComponent.prototype.positionBuilder;
    /** @type {?} */
    NzTimePickerComponent.prototype.i18n;
    /** @type {?} */
    NzTimePickerComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pILE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBc0NoRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7Ozs7SUFzSWhDLFlBQW9CLE9BQW1CLEVBQ25CLFVBQ0EsU0FDQSxpQkFDQSxNQUNBO1FBTEEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUTtRQUNSLFlBQU8sR0FBUCxPQUFPO1FBQ1Asb0JBQWUsR0FBZixlQUFlO1FBQ2YsU0FBSSxHQUFKLElBQUk7UUFDSixjQUFTLEdBQVQsU0FBUzt5QkExSVQsS0FBSztzQkFDSyxJQUFJOzJCQUNa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QU8sQ0FBQyw4Q0FBOEMsRUFBRSxLQUFLLENBQUM7Z0NBQzVELE9BQU8sRUFBVSxDQUFDO2dDQUNsQixTQUFTLEVBQVEsYUFBYTtnQ0FDOUIsZUFBZSxFQUFFLE9BQU87NkJBQ3pCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFJO29CQUNYLFNBQVM7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2hGO2FBQ0Y7Ozs7WUFuREMsVUFBVTtZQUtWLFNBQVM7WUFUd0MsT0FBTztZQUFFLHNCQUFzQjtZQWtCeEQsSUFBSTtZQUhPLFNBQVM7Ozt1QkEyRDNDLFNBQVMsU0FBQyxjQUFjO3FCQUN4QixLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsTUFBTTtvQ0FFTixLQUFLOzJCQVNMLEtBQUs7MEJBU0wsS0FBSzt5QkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBPdmVybGF5LCBPdmVybGF5UG9zaXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3IgICA6ICduei10aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zIDogW1xyXG4gICAgdHJpZ2dlcignZHJvcERvd25BbmltYXRpb24nLCBbXHJcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHByb3ZpZGVycyAgOiBbXHJcbiAgICBVcGRhdGVDbHMsXHJcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTnpUaW1lUGlja2VyQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcclxuICBpc0luaXQgPSBmYWxzZTtcclxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyB7XHJcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcclxuICAgIG9yaWdpblkgOiAndG9wJyxcclxuICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgIG9mZnNldFggOiAwLFxyXG4gICAgb2Zmc2V0WSA6IDBcclxuICB9IF07XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuekhvdXJTdGVwID0gMTtcclxuICBASW5wdXQoKSBuek1pbnV0ZVN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIG56U2Vjb25kU3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpDbGVhclRleHQgPSAnY2xlYXInO1xyXG4gIEBJbnB1dCgpIG56UG9wdXBDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpEZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBuekRpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0ID0gJ0hIOm1tOnNzJztcclxuICBASW5wdXQoKSBuek9wZW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekhpZGVEaXNhYmxlZE9wdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SGlkZURpc2FibGVkT3B0aW9ucygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHwgc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbIGBhbnQtdGltZS1waWNrZXJgIF0gICAgICAgICAgICAgICA6IHRydWUsXHJcbiAgICAgIFsgYGFudC10aW1lLXBpY2tlci0ke3RoaXMubnpTaXplfWAgXTogaXNOb3ROaWwodGhpcy5uelNpemUpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHBvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGkxOG46IEkxOG4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscykge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh0aW1lOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==