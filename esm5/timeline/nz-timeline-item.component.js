/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tryUpdateCustomColor();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzColor"]) {
            this.tryUpdateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.tryUpdateCustomColor = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    };
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    template: "<li\r\n  class=\"ant-timeline-item\"\r\n  [class.ant-timeline-item-right]=\"position === 'right'\"\r\n  [class.ant-timeline-item-left]=\"position === 'left'\"\r\n  [class.ant-timeline-item-last]=\"isLast\"\r\n  #liTemplate>\r\n  <div class=\"ant-timeline-item-tail\"></div>\r\n  <div\r\n    class=\"ant-timeline-item-head\"\r\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\r\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\r\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\r\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-timeline-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</li>"
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
        nzColor: [{ type: Input }],
        nzDot: [{ type: Input }]
    };
    return NzTimelineItemComponent;
}());
export { NzTimelineItemComponent };
function NzTimelineItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /** @type {?} */
    NzTimelineItemComponent.prototype.renderer;
    /** @type {?} */
    NzTimelineItemComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZWxpbmUvbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFHVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztJQW1CckIsaUNBQW9CLFFBQW1CLEVBQVUsR0FBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTnZFLGVBQTJCLE1BQU0sQ0FBQztRQUdsQyxjQUFTLEtBQUssQ0FBQztLQUc0RDs7OztJQUUzRSwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGFBQVU7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7S0FDRjs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFTyxzREFBb0I7Ozs7O1FBQzFCLElBQU0sYUFBYSxHQUFHLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQzs7UUFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdEYsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EOzs7Z0JBdENKLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBYSxzQ0FBc0M7b0JBQzNELGt4QkFBd0Q7aUJBQ3pEOzs7O2dCQWZDLFNBQVM7Z0JBTFQsaUJBQWlCOzs7NkJBc0JoQixTQUFTLFNBQUMsWUFBWTswQkFDdEIsS0FBSzt3QkFDTCxLQUFLOztrQ0ExQlI7O1NBdUJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelRpbWVsaW5lTW9kZSB9IGZyb20gJy4vbnotdGltZWxpbmUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10aW1lbGluZS1pdGVtLCBbbnotdGltZWxpbmUtaXRlbV0nLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJykgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuekNvbG9yOiBzdHJpbmcgPSAnYmx1ZSc7XHJcbiAgQElucHV0KCkgbnpEb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBpc0xhc3QgPSBmYWxzZTtcclxuICBwb3NpdGlvbjogTnpUaW1lbGluZU1vZGUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q29sb3IpIHtcclxuICAgICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29sb3JzID0gWyAnYmx1ZScsICdyZWQnLCAnZ3JlZW4nIF07XHJcbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xyXG4gICAgaWYgKGRlZmF1bHRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpID09PSAtMSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicsIHRoaXMubnpDb2xvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=