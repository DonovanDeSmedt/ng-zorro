import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class NzTdComponent {
    private elementRef;
    private renderer;
    private _showExpand;
    private _indentSize;
    private _expand;
    private _showCheckbox;
    isIndentSizeSet: boolean;
    el: HTMLElement;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    readonly nzCheckedChange: EventEmitter<boolean>;
    readonly nzExpandChange: EventEmitter<boolean>;
    nzIndentSize: number;
    nzExpand: boolean;
    nzShowExpand: boolean;
    nzShowCheckbox: boolean;
    nzLeft: string;
    nzRight: string;
    updateExpandIconClass(): void;
    expandChange(e: Event): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
