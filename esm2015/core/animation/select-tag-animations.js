/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export const selectTagAnimation = trigger('selectTagAnimation', [
    state('*', style({ opacity: 1, transform: 'scale(1)' })),
    transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('150ms linear')
    ]),
    state('void', style({ opacity: 0, transform: 'scale(0)' })),
    transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('150ms linear')
    ])
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRhZy1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvYW5pbWF0aW9uL3NlbGVjdC10YWctYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsYUFBYSxrQkFBa0IsR0FBNkIsT0FBTyxDQUFDLG9CQUFvQixFQUFFO0lBQ3hGLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN4RCxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDeEIsQ0FBQztJQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzRCxVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDeEIsQ0FBQztDQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VGFnQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzZWxlY3RUYWdBbmltYXRpb24nLCBbXHJcbiAgc3RhdGUoJyonLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSksXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXHJcbiAgICBhbmltYXRlKCcxNTBtcyBsaW5lYXInKVxyXG4gIF0pLFxyXG4gIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpLFxyXG4gIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxyXG4gICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcclxuICBdKVxyXG5dKTtcclxuIl19