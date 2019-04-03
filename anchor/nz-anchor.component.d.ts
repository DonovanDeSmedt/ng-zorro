import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { NzAnchorLinkComponent } from './nz-anchor-link.component';
export declare class NzAnchorComponent implements OnDestroy, AfterViewInit {
    private scrollSrv;
    private doc;
    private cd;
    private links;
    private animating;
    private target;
    private scroll$;
    private ink;
    visible: boolean;
    wrapperStyle: {};
    private _affix;
    nzAffix: boolean;
    private _bounds;
    nzBounds: number;
    private _offsetTop;
    nzOffsetTop: number;
    private _showInkInFixed;
    nzShowInkInFixed: boolean;
    nzTarget: string | Element;
    readonly nzClick: EventEmitter<string>;
    readonly nzScroll: EventEmitter<NzAnchorLinkComponent>;
    constructor(scrollSrv: NzScrollService, doc: any, cd: ChangeDetectorRef);
    registerLink(link: NzAnchorLinkComponent): void;
    unregisterLink(link: NzAnchorLinkComponent): void;
    private getTarget;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerScrollEvent;
    private removeListen;
    private getOffsetTop;
    handleScroll(): void;
    private clearActive;
    private handleActive;
    handleScrollTo(linkComp: NzAnchorLinkComponent): void;
}
