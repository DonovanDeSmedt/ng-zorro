import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, TemplateRef, Type } from '@angular/core';
export declare type OnClickCallback<T> = ((instance: T) => (false | void | {}) | Promise<false | void | {}>);
export declare type ModalType = 'default' | 'confirm';
export declare type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface ModalOptions<T = any, R = any> {
    nzModalType?: ModalType;
    nzVisible?: boolean;
    nzZIndex?: number;
    nzWidth?: number | string;
    nzWrapClassName?: string;
    nzClassName?: string;
    nzStyle?: object;
    nzIconType?: string;
    nzTitle?: string | TemplateRef<{}>;
    nzContent?: string | TemplateRef<{}> | Type<T>;
    nzComponentParams?: Partial<T>;
    nzClosable?: boolean;
    nzKeyboard?: boolean;
    nzMask?: boolean;
    nzMaskClosable?: boolean;
    nzMaskStyle?: object;
    nzBodyStyle?: object;
    nzFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>>;
    nzGetContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    nzAfterOpen?: EventEmitter<void>;
    nzAfterClose?: EventEmitter<R>;
    nzOkText?: string;
    nzOkType?: string;
    nzOkLoading?: boolean;
    nzOnOk?: EventEmitter<T> | OnClickCallback<T>;
    nzCancelText?: string;
    nzCancelLoading?: boolean;
    nzOnCancel?: EventEmitter<T> | OnClickCallback<T>;
}
export interface ModalOptionsForService<T = any> extends ModalOptions<T> {
    nzOnOk?: OnClickCallback<T>;
    nzOnCancel?: OnClickCallback<T>;
}
export interface ModalButtonOptions<T = any> {
    label: string;
    type?: string;
    shape?: string;
    ghost?: boolean;
    size?: string;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): (void | {}) | Promise<(void | {})>;
}
