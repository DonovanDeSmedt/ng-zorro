/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
var NzI18nPipe = /** @class */ (function () {
    function NzI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    NzI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        return this._locale.translate(path, keyValue);
    };
    NzI18nPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzI18n'
                },] }
    ];
    /** @nocollapse */
    NzI18nPipe.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzI18nPipe;
}());
export { NzI18nPipe };
function NzI18nPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    NzI18nPipe.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBTWhELG9CQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0tBQ3pDOzs7Ozs7SUFFRCw4QkFBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxRQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMvQzs7Z0JBVEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmOzs7O2dCQUpRLGFBQWE7O3FCQUZ0Qjs7U0FPYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbnpJMThuJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZTogTnpJMThuU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHBhdGg6IHN0cmluZywga2V5VmFsdWU/OiBvYmplY3QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS50cmFuc2xhdGUocGF0aCwga2V5VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=