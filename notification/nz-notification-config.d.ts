import { InjectionToken } from '@angular/core';
import { NzMessageConfig } from '../message/nz-message-config';
export interface NzNotificationConfig extends NzMessageConfig {
    nzTop?: string | number;
    nzBottom?: string | number;
    nzPlacement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | string;
}
export declare const NZ_NOTIFICATION_DEFAULT_CONFIG: InjectionToken<NzNotificationConfig>;
export declare const NZ_NOTIFICATION_CONFIG: InjectionToken<NzNotificationConfig>;
export declare const NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<NzNotificationConfig>;
    useValue: {
        nzTop: string;
        nzBottom: string;
        nzPlacement: string;
        nzDuration: number;
        nzMaxStack: number;
        nzPauseOnHover: boolean;
        nzAnimate: boolean;
    };
};
