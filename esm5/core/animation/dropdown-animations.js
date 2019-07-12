/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var dropDownAnimation = trigger('dropDownAnimation', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('bottom => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('top => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFFUixNQUFNLHFCQUFxQixDQUFDOztBQUU3QixXQUFhLGlCQUFpQixHQUE2QixPQUFPLENBQUMsbUJBQW1CLEVBQUU7SUFDdEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDcEIsT0FBTyxFQUFVLENBQUM7UUFDbEIsU0FBUyxFQUFRLFdBQVc7UUFDNUIsZUFBZSxFQUFFLE9BQU87S0FDekIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUM7UUFDRixPQUFPLENBQUMsc0NBQXNDLENBQUM7S0FDaEQsQ0FBQztJQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUMzQixPQUFPLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDO1lBQ3BELE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUMsQ0FBQztLQUNKLENBQUM7SUFDRixLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUNqQixPQUFPLEVBQVUsQ0FBQztRQUNsQixTQUFTLEVBQVEsV0FBVztRQUM1QixlQUFlLEVBQUUsU0FBUztLQUMzQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsYUFBYSxFQUFFO1FBQ3hCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxTQUFTO1NBQzNCLENBQUM7UUFDRixPQUFPLENBQUMsc0NBQXNDLENBQUM7S0FDaEQsQ0FBQztJQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDeEIsT0FBTyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQztZQUNwRCxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsU0FBUztTQUMzQixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBkcm9wRG93bkFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignZHJvcERvd25BbmltYXRpb24nLCBbXHJcbiAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcclxuICAgIG9wYWNpdHkgICAgICAgIDogMSxcclxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICB9KSksXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiBib3R0b20nLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKCdib3R0b20gPT4gdm9pZCcsIFtcclxuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxyXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xyXG4gICAgfSkpXHJcbiAgXSksXHJcbiAgc3RhdGUoJ3RvcCcsIHN0eWxlKHtcclxuICAgIG9wYWNpdHkgICAgICAgIDogMSxcclxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gIH0pKSxcclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHRvcCcsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxyXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbigndG9wID0+IHZvaWQnLCBbXHJcbiAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcclxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xyXG4gICAgfSkpXHJcbiAgXSlcclxuXSk7XHJcbiJdfQ==