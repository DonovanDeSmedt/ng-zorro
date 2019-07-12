/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent() {
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
                    styles: ["nz-form-explain {\n      display: block;\n    }"]
                }] }
    ];
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztnQkFFckYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxpQkFBaUI7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsc0JBQXNCLEVBQUU7NEJBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUksQ0FBQztvQ0FDWixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7b0NBQ3pELE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSxlQUFlO2lDQUMzQixDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGVBQWU7aUNBQzNCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztvQ0FDekQsT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGtCQUFrQjtpQ0FDOUIsQ0FBQyxDQUFDOzZCQUNKLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCxrRkFBdUQ7b0JBQ3ZELElBQUksRUFBaUI7d0JBQ25CLDBCQUEwQixFQUFFLE1BQU07cUJBQ25DOzZCQUVHLGlEQUVBO2lCQUVMOztpQ0F6Q0Q7O1NBMENhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZm9ybS1leHBsYWluJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zICAgICAgICAgOiBbXHJcbiAgICB0cmlnZ2VyKCdmb3JtRXhwbGFpbkFuaW1hdGlvbicsIFtcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHkgIDogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5ICA6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1leHBsYWluXSc6ICd0cnVlJ1xyXG4gIH0sXHJcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xyXG4gICAgICBgbnotZm9ybS1leHBsYWluIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybUV4cGxhaW5Db21wb25lbnQge1xyXG59XHJcbiJdfQ==