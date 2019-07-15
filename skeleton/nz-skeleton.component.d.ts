import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzSkeletonAvatar, NzSkeletonParagraph, NzSkeletonTitle } from './nz-skeleton.type';
export declare class NzSkeletonComponent implements OnInit, OnChanges {
    private cdr;
    nzActive: boolean;
    nzLoading: boolean;
    nzTitle: NzSkeletonTitle | boolean;
    nzAvatar: NzSkeletonAvatar | boolean;
    nzParagraph: NzSkeletonParagraph | boolean;
    title: NzSkeletonTitle;
    avatar: NzSkeletonAvatar;
    paragraph: NzSkeletonParagraph;
    rowsList: number[];
    widthList: Array<number | string>;
    constructor(cdr: ChangeDetectorRef);
    toCSSUnit(value?: number | string): string;
    private getTitleProps;
    private getAvatarProps;
    private getParagraphProps;
    private getProps;
    private getWidthList;
    private updateProps;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
