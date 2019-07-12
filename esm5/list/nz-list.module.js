/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from '../avatar/nz-avatar.module';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzGridModule } from '../grid/nz-grid.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListItemComponent } from './nz-list-item.component';
import { NzListComponent } from './nz-list.component';
var NzListModule = /** @class */ (function () {
    function NzListModule() {
    }
    NzListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzI18nModule, NzAddOnModule],
                    declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                    exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
                },] }
    ];
    return NzListModule;
}());
export { NzListModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibGlzdC9uei1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O2dCQUVyRCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFTLENBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUU7b0JBQ3pHLFlBQVksRUFBSSxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBRTtvQkFDakYsT0FBTyxFQUFTLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFFO2lCQUNwRjs7dUJBakJEOztTQWtCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnLi4vYXZhdGFyL256LWF2YXRhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hZGRvbi9hZGRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICcuLi9ncmlkL256LWdyaWQubW9kdWxlJztcclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJy4uL3NwaW4vbnotc3Bpbi5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWxpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekxpc3RDb21wb25lbnQgfSBmcm9tICcuL256LWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiAgICAgICAgWyBDb21tb25Nb2R1bGUsIE56U3Bpbk1vZHVsZSwgTnpHcmlkTW9kdWxlLCBOekF2YXRhck1vZHVsZSwgTnpJMThuTW9kdWxlLCBOekFkZE9uTW9kdWxlIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6ICAgWyBOekxpc3RDb21wb25lbnQsIE56TGlzdEl0ZW1Db21wb25lbnQsIE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IF0sXHJcbiAgICBleHBvcnRzOiAgICAgICAgWyBOekxpc3RDb21wb25lbnQsIE56TGlzdEl0ZW1Db21wb25lbnQsIE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56TGlzdE1vZHVsZSB7XHJcbn1cclxuIl19