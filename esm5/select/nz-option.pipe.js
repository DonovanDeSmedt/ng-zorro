/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var NzOptionPipe = /** @class */ (function () {
    function NzOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(function (o) { return filterOption(input, o); });
        }
    };
    NzOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
    ];
    return NzOptionPipe;
}());
export { NzOptionPipe };
var NzSubOptionPipe = /** @class */ (function () {
    function NzSubOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzSubOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(input, o); });
            });
        }
    };
    NzSubOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
    ];
    return NzSubOptionPipe;
}());
export { NzSubOptionPipe };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUFTN0QsZ0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLE9BQTJELEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sbUJBQUMsT0FBOEIsRUFBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUM3RTtLQUNGOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O3VCQVJwQzs7U0FTYSxZQUFZOzs7Ozs7Ozs7OztJQVl2QixtQ0FBUzs7Ozs7OztJQUFULFVBQVUsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFOzswQkFuQnZDOztTQW9CYSxlQUFlOzs7Ozs7QUFZNUIsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxNQUF5QjtJQUMxRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkU7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ/OiBzdHJpbmcsIG9wdGlvbj86IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xyXG5cclxuLy8gVE9ETzogY2FuIG5vdCBkeW5hbWljIGNoYW5nZSBwaXBlIHB1cmUgeWV0XHJcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uUGlwZScgfSlcclxuZXhwb3J0IGNsYXNzIE56T3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShvcHRpb25zOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiB7XHJcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFpbnB1dCkge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ256U3ViRmlsdGVyT3B0aW9uUGlwZScgfSlcclxuZXhwb3J0IGNsYXNzIE56U3ViT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD4ge1xyXG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcclxuICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xyXG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XHJcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==