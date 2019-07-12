import { ElementRef } from '@angular/core';
export declare class NzTabLabelDirective {
    elementRef: ElementRef;
    disabled: boolean;
    constructor(elementRef: ElementRef);
    getOffsetLeft(): number;
    getOffsetWidth(): number;
    getOffsetTop(): number;
    getOffsetHeight(): number;
}
