import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from '../../../core/types/common-wrap';
import { NzCalendarI18nInterface } from '../../../i18n/nz-i18n.interface';
import { DisabledDateFn, DisabledTimeConfig, DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from '../../standard-types';
import { CandyDate } from '../candy-date';
export declare class DateRangePopupComponent implements OnInit, OnChanges {
    isRange: boolean;
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string | string[];
    disabledDate: DisabledDateFn;
    disabledTime: DisabledTimeFn;
    showToday: boolean;
    showTime: SupportTimeOptions | boolean;
    extraFooter: TemplateRef<void> | string;
    ranges: FunctionProp<PresetRanges>;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    popupStyle: object;
    dropdownClassName: string;
    panelMode: PanelMode | PanelMode[];
    panelModeChange: EventEmitter<"time" | "month" | "year" | "decade" | "date" | PanelMode[]>;
    value: CandyDate | CandyDate[];
    valueChange: EventEmitter<CandyDate | CandyDate[]>;
    resultOk: EventEmitter<void>;
    closePicker: EventEmitter<void>;
    prefixCls: string;
    showTimePicker: boolean;
    timeOptions: SupportTimeOptions | SupportTimeOptions[];
    valueForRangeShow: CandyDate[];
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    readonly hasTimePicker: boolean;
    readonly hasFooter: boolean;
    private partTypeMap;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onShowTimePickerChange(show: boolean): void;
    onClickToday(value: CandyDate): void;
    onDayHover(value: CandyDate): void;
    onPanelModeChange(mode: PanelMode, partType?: RangePartType): void;
    onHeaderChange(value: CandyDate, partType?: RangePartType): void;
    onSelectTime(value: CandyDate, partType?: RangePartType): void;
    changeValue(value: CandyDate, partType?: RangePartType): void;
    changeValueFromSelect(value: CandyDate): void;
    enablePrevNext(direction: 'prev' | 'next', partType?: RangePartType): boolean;
    getPanelMode(partType?: RangePartType): PanelMode;
    getValue(partType?: RangePartType): CandyDate;
    getValueBySelector(partType?: RangePartType): CandyDate;
    getPartTypeIndex(partType: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    hasSelectedValue(): boolean;
    disabledStartTime: (value: Date) => DisabledTimeConfig;
    disabledEndTime: (value: Date) => DisabledTimeConfig;
    isAllowedSelectedValue(): boolean;
    timePickerDisabled(): boolean;
    okDisabled(): boolean;
    getTimeOptions(partType?: RangePartType): SupportTimeOptions;
    onClickPresetRange(val: Date[]): void;
    onPresetRangeMouseLeave(): void;
    onHoverPresetRange(val: Date[]): void;
    getObjectKeys(obj: object): string[];
    private closePickerPanel;
    private clearHoverValue;
    private buildTimeOptions;
    private overrideTimeOptions;
    private setValue;
    private overrideHms;
    private isValidRange;
    private normalizeRangeValue;
    private sortRangeValue;
    private setRangeValue;
    private cloneRangeDate;
    private initialArray;
}
export declare type RangePartType = 'left' | 'right';
