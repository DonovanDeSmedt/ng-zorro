/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
/** @type {?} */
export var fadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => void', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEdBRVIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsV0FBYSxhQUFhLEdBQThCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDL0UsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN4RSxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0NBQ3ZFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9ICB0cmlnZ2VyKCdmYWRlQW5pbWF0aW9uJywgW1xyXG4gIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICBzdGF0ZSgndHJ1ZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXHJcbiAgc3RhdGUoJ2ZhbHNlJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICB0cmFuc2l0aW9uKCcqID0+IHRydWUnLCBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknKSksXHJcbiAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKScpKSxcclxuXSk7XHJcbiJdfQ==