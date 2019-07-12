import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
export declare class NzCheckboxComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzCheckboxWrapperComponent;
    private cdr;
    private focusMonitor;
    onChange: (value: any) => void;
    onTouched: () => any;
    private inputElement;
    private contentElement;
    readonly nzCheckedChange: EventEmitter<boolean>;
    nzValue: string;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzChecked: boolean;
    onClick(e: MouseEvent): void;
    updateAutoFocus(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    checkContent(): void;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, nzCheckboxWrapperComponent: NzCheckboxWrapperComponent, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
