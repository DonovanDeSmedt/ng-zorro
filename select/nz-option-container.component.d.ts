import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { Subscription } from 'rxjs';
import { NzOptionLiComponent } from './nz-option-li.component';
import { TFilterOption } from './nz-option.pipe';
export declare class NzOptionContainerComponent implements AfterContentInit, OnDestroy {
    private _listOfSelectedValue;
    private _searchValue;
    isInit: boolean;
    isAddTagOptionDisplay: boolean;
    listOfAllTemplateOption: NzOptionComponent[];
    optionSubscription: Subscription;
    groupSubscription: Subscription;
    listOfTagOption: NzOptionComponent[];
    listOfFilterOption: NzOptionComponent[];
    activatedOption: NzOptionComponent;
    /** can not use ViewChild since it will match sub options in option group **/
    listOfNzOptionLiComponent: QueryList<NzOptionLiComponent>;
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<NzOptionGroupComponent>;
    nzListOfSelectedValueChange: EventEmitter<any[]>;
    nzListOfTemplateOptionChange: EventEmitter<NzOptionComponent[]>;
    nzClickOption: EventEmitter<void>;
    nzScrollToBottom: EventEmitter<void>;
    nzMode: string;
    nzServerSearch: boolean;
    nzFilterOption: TFilterOption;
    nzMaxMultipleCount: number;
    nzNotFoundContent: string;
    compareWith: (o1: any, o2: any) => boolean;
    idClass: string;
    nzSearchValue: string;
    nzListOfSelectedValue: any[];
    formatId(option: string): string;
    formatIdLi(option: NzOptionComponent): string;
    addTagOption(): void;
    clickOption(option: NzOptionComponent, isPressEnter: boolean): void;
    onKeyDownUl(e: KeyboardEvent): void;
    resetActiveOption(): void;
    clearActivatedOption(): void;
    setActiveOption(option: NzOptionComponent, scroll?: boolean): void;
    scrollIntoView(): void;
    updateSelectedOption(option: NzOptionComponent, isPressEnter: boolean): void;
    refreshListOfTagOption(): void;
    refreshListOfAllTemplateOption(): void;
    refreshAllOptionStatus(isTemplateOptionChange: boolean): void;
    updateListOfFilterOption(): void;
    /** watch options change in option group **/
    watchSubOptionChanges(): void;
    unsubscribeGroup(): void;
    unsubscribeOption(): void;
    readonly isTagsMode: boolean;
    readonly isMultipleOrTags: boolean;
    readonly isNotFoundDisplay: boolean;
    updateAddTagOptionDisplay(): void;
    dropDownScroll(e: MouseEvent, ul: HTMLUListElement): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
