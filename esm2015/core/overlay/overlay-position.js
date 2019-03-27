/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionPositionPair } from '@angular/cdk/overlay';
/** @type {?} */
export const POSITION_MAP = {
    'top': new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    'topCenter': new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    'topLeft': new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    'topRight': new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    'right': new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    'rightTop': new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    'rightBottom': new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    'bottom': new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    'bottomCenter': new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    'bottomLeft': new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    'bottomRight': new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    'left': new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    'leftTop': new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    'leftBottom': new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
/** @type {?} */
export const DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
/** @type {?} */
export const DEFAULT_DROPDOWN_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.topLeft];
/** @type {?} */
export const DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
/** @type {?} */
export const DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight];
/** @type {?} */
export const DEFAULT_MENTION_POSITIONS = [POSITION_MAP.bottomLeft, new ConnectionPositionPair({
        originX: 'start',
        originY: 'bottom'
    }, { overlayX: 'start', overlayY: 'bottom' })];
/**
 * @param {?} position
 * @return {?}
 */
export function getPlacementName(position) {
    /** @type {?} */
    const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    for (const placement in POSITION_MAP) {
        // @ts-ignore
        if (keyList.every((/**
         * @param {?} key
         * @return {?}
         */
        key => position.connectionPair[key] === POSITION_MAP[placement][key]))) {
            return placement;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQyxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUU5RixNQUFNLE9BQU8sWUFBWSxHQUFnRDtJQUN2RSxLQUFLLEVBQVcsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDckMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDM0M7SUFDRCxXQUFXLEVBQUssSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDckMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDM0M7SUFDRCxTQUFTLEVBQU8sSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDMUM7SUFDRCxVQUFVLEVBQU0sSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDbEMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDeEM7SUFDRCxPQUFPLEVBQVMsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDckMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDMUM7SUFDRCxVQUFVLEVBQU0sSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDbEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDdkM7SUFDRCxhQUFhLEVBQUcsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDckMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDMUM7SUFDRCxRQUFRLEVBQVEsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDeEMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDeEM7SUFDRCxjQUFjLEVBQUUsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDeEMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDeEM7SUFDRCxZQUFZLEVBQUksSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDdkM7SUFDRCxhQUFhLEVBQUcsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDckMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDckM7SUFDRCxNQUFNLEVBQVUsSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDeEM7SUFDRCxTQUFTLEVBQU8sSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDckM7SUFDRCxZQUFZLEVBQUksSUFBSSxzQkFBc0IsQ0FDeEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDeEM7Q0FDRjs7QUFFRCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsQ0FBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFFOztBQUN6SCxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsQ0FBRSxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUU7O0FBQzNGLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxDQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBRTs7QUFDeEYsTUFBTSxPQUFPLDBCQUEwQixHQUFHLENBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBRTs7QUFDNUksTUFBTSxPQUFPLHlCQUF5QixHQUFHLENBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLHNCQUFzQixDQUFDO1FBQzdGLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxRQUFRO0tBQ2xCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFFOzs7OztBQUUvQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBd0M7O1VBQ2pFLE9BQU8sR0FBRyxDQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBRTtJQUNoRSxLQUFLLE1BQU0sU0FBUyxJQUFJLFlBQVksRUFBRTtRQUNwQyxhQUFhO1FBQ2IsSUFBSSxPQUFPLENBQUMsS0FBSzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBRSxHQUFHLENBQUUsS0FBSyxZQUFZLENBQUUsU0FBUyxDQUFFLENBQUUsR0FBRyxDQUFFLEVBQUMsRUFBRTtZQUM3RixPQUFPLFNBQVMsQ0FBQztTQUNsQjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuZXhwb3J0IGNvbnN0IFBPU0lUSU9OX01BUDogeyBbIGtleTogc3RyaW5nIF06IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSA9IHtcbiAgJ3RvcCcgICAgICAgICA6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgIHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9XG4gICksXG4gICd0b3BDZW50ZXInICAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgIHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfVxuICApLFxuICAndG9wTGVmdCcgICAgIDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9XG4gICksXG4gICd0b3BSaWdodCcgICAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfVxuICApLFxuICAncmlnaHQnICAgICAgIDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfSxcbiAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfVxuICApLFxuICAncmlnaHRUb3AnICAgIDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfVxuICApLFxuICAncmlnaHRCb3R0b20nIDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfVxuICApLFxuICAnYm90dG9tJyAgICAgIDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH1cbiAgKSxcbiAgJ2JvdHRvbUNlbnRlcic6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgIHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9XG4gICksXG4gICdib3R0b21MZWZ0JyAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH1cbiAgKSxcbiAgJ2JvdHRvbVJpZ2h0JyA6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9XG4gICksXG4gICdsZWZ0JyAgICAgICAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH0sXG4gICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9XG4gICksXG4gICdsZWZ0VG9wJyAgICAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9XG4gICksXG4gICdsZWZ0Qm90dG9tJyAgOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9XG4gIClcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TID0gWyBQT1NJVElPTl9NQVAudG9wLCBQT1NJVElPTl9NQVAucmlnaHQsIFBPU0lUSU9OX01BUC5ib3R0b20sIFBPU0lUSU9OX01BUC5sZWZ0IF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgPSBbIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LCBQT1NJVElPTl9NQVAudG9wTGVmdCBdO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMgPSBbIFBPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3AgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBU0NBREVSX1BPU0lUSU9OUyA9IFsgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCwgUE9TSVRJT05fTUFQLnRvcExlZnQsIFBPU0lUSU9OX01BUC50b3BSaWdodCBdO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUVOVElPTl9QT1NJVElPTlMgPSBbIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LCBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7XG4gIG9yaWdpblg6ICdzdGFydCcsXG4gIG9yaWdpblk6ICdib3R0b20nXG59LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSkgXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWNlbWVudE5hbWUocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGtleUxpc3QgPSBbICdvcmlnaW5YJywgJ29yaWdpblknLCAnb3ZlcmxheVgnLCAnb3ZlcmxheVknIF07XG4gIGZvciAoY29uc3QgcGxhY2VtZW50IGluIFBPU0lUSU9OX01BUCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoa2V5TGlzdC5ldmVyeShrZXkgPT4gcG9zaXRpb24uY29ubmVjdGlvblBhaXJbIGtleSBdID09PSBQT1NJVElPTl9NQVBbIHBsYWNlbWVudCBdWyBrZXkgXSkpIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuICB9XG59XG4iXX0=