/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class NzFormExplainComponent {
}
NzFormExplainComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-explain',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('formExplainAnimation', [
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'translateY(-5px)'
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 1,
                                transform: 'translateY(0)'
                            }))
                        ]),
                        transition('* => void', [
                            style({
                                opacity: 1,
                                transform: 'translateY(0)'
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 0,
                                transform: 'translateY(-5px)'
                            }))
                        ])
                    ])
                ],
                template: "<div [@formExplainAnimation]>\r\n  <ng-content></ng-content>\r\n</div>",
                host: {
                    '[class.ant-form-explain]': 'true'
                },
                styles: [`nz-form-explain {
      display: block;
    }`]
            }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeUN0RixNQUFNLE9BQU8sc0JBQXNCOzs7WUF2Q2xDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsaUJBQWlCO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLHNCQUFzQixFQUFFO3dCQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFJLENBQUM7Z0NBQ1osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDO2dDQUN6RCxPQUFPLEVBQUksQ0FBQztnQ0FDWixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUFDO3lCQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDOzRCQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7Z0NBQ3pELE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0Qsa0ZBQXVEO2dCQUN2RCxJQUFJLEVBQWlCO29CQUNuQiwwQkFBMEIsRUFBRSxNQUFNO2lCQUNuQzt5QkFFRzs7TUFFQTthQUVMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWV4cGxhaW4nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcclxuICAgIHRyaWdnZXIoJ2Zvcm1FeHBsYWluQW5pbWF0aW9uJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eSAgOiAxLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0ICAgICAgICAgICAgICAgOiB7XHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWV4cGxhaW5dJzogJ3RydWUnXHJcbiAgfSxcclxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXHJcbiAgICAgIGBuei1mb3JtLWV4cGxhaW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1gXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB7XHJcbn1cclxuIl19