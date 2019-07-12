/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NzOptionPipe {
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(o => filterOption(input, o));
        }
    }
}
NzOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
];
export class NzSubOptionPipe {
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(input, o));
            });
        }
    }
}
NzSubOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
];
/**
 * @param {?} input
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(input, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVEvRCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFDdkIsU0FBUyxDQUFDLE9BQTJELEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sbUJBQUMsT0FBOEIsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RTtLQUNGOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBWXBDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQUMxQixTQUFTLENBQUMsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7Ozs7Ozs7QUFhdkMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxNQUF5QjtJQUMxRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkU7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ/OiBzdHJpbmcsIG9wdGlvbj86IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xyXG5cclxuLy8gVE9ETzogY2FuIG5vdCBkeW5hbWljIGNoYW5nZSBwaXBlIHB1cmUgeWV0XHJcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uUGlwZScgfSlcclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShvcHRpb25zOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiB7XHJcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFpbnB1dCkge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ256U3ViRmlsdGVyT3B0aW9uUGlwZScgfSlcclxuZXhwb3J0IGNsYXNzIE56U3ViT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD4ge1xyXG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcclxuICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xyXG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XHJcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==