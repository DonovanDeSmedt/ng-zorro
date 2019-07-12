/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DatePipe } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from '../core/util/logger/logger.service';
import parse from 'date-fns/parse';
import zh_CN from './languages/zh_CN';
import { NZ_I18N } from './nz-i18n.token';
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, _logger, datePipe) {
        this._logger = _logger;
        this.datePipe = datePipe;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    NzI18nService.prototype.translate = /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        /** @type {?} */
        var content = /** @type {?} */ (this._getObjectPath(this._locale, path));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach(function (key) { return content = content.replace(new RegExp("%" + key + "%", 'g'), data[key]); });
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param locale The translating letters
     */
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    NzI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    NzI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    };
    /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    NzI18nService.prototype.formatDate = /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    function (date, format, locale) {
        return date ? this.datePipe.transform(date, format, null, locale || this.getLocale().locale) : '';
    };
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     */
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    NzI18nService.prototype.formatDateCompatible = /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    function (date, format, locale) {
        return this.formatDate(date, this.compatDateFormat(format), locale);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NzI18nService.prototype.parseDate = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return parse(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NzI18nService.prototype.parseTime = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return parse("1970-01-01 " + text);
    };
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    NzI18nService.prototype._getObjectPath = /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    NzI18nService.prototype.compatDateFormat = /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    function (format) {
        return format && format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
    };
    NzI18nService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NZ_I18N,] }] },
        { type: LoggerService },
        { type: DatePipe }
    ]; };
    return NzI18nService;
}());
export { NzI18nService };
function NzI18nService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzI18nService.prototype._locale;
    /** @type {?} */
    NzI18nService.prototype._change;
    /** @type {?} */
    NzI18nService.prototype._logger;
    /** @type {?} */
    NzI18nService.prototype.datePipe;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @param {?} logger
 * @param {?} datePipe
 * @return {?}
 */
export function NZ_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale, logger, datePipe) {
    return exist || new NzI18nService(locale, logger, datePipe);
}
/** @type {?} */
export var NZ_I18N_SERVICE_PROVIDER = {
    provide: NzI18nService,
    useFactory: NZ_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), NzI18nService], NZ_I18N, LoggerService, DatePipe]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEtBQUssTUFBTSxtQkFBbUIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBT3hDLHVCQUE2QixNQUF1QixFQUFVLE9BQXNCLEVBQVUsUUFBa0I7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7dUJBRjlGLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDO1FBR2xFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsc0JBQUksdUNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7OztPQUFBO0lBRUQsOEVBQThFO0lBQzlFLGdEQUFnRDtJQUNoRCxxQ0FBcUM7Ozs7OztJQUNyQyxpQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxJQUFVOztRQUVoQyxJQUFJLE9BQU8scUJBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBVyxFQUFDO1FBQ2hFLElBQUksT0FB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QUFHLEtBQUssRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxDQUFFLEtBQUssQ0FBRSxLQUFLLEVBQUUsQ0FBRSxDQUFFLENBQUM7U0FDL0I7UUFDRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0lBYTlCLHdDQUFnQjs7Ozs7Ozs7Ozs7Y0FBQyxNQUFjO1FBQ3JDLE9BQU8sTUFBTSxJQUFJLE1BQU07YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDbEIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzs7O2dCQTdHdkIsVUFBVTs7OztnREFLSSxNQUFNLFNBQUMsT0FBTztnQkFicEIsYUFBYTtnQkFKYixRQUFROzt3QkFBakI7O1NBYWEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0gxQixNQUFNLFVBQVUsa0NBQWtDLENBQUMsS0FBb0IsRUFBRSxNQUF1QixFQUFFLE1BQXFCLEVBQUUsUUFBa0I7SUFDekksT0FBTyxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM3RDs7QUFFRCxXQUFhLHdCQUF3QixHQUFhO0lBQ2hELE9BQU8sRUFBSyxhQUFhO0lBQ3pCLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUMsSUFBSSxFQUFRLENBQUUsQ0FBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUU7Q0FDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuXHJcbmltcG9ydCB6aF9DTiBmcm9tICcuL2xhbmd1YWdlcy96aF9DTic7XHJcbmltcG9ydCB7IE56STE4bkludGVyZmFjZSB9IGZyb20gJy4vbnotaTE4bi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOWl9JMThOIH0gZnJvbSAnLi9uei1pMThuLnRva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56STE4blNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2xvY2FsZTogTnpJMThuSW50ZXJmYWNlO1xyXG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLCBwcml2YXRlIF9sb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7XHJcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhfQ04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE56STE4bkludGVyZmFjZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xyXG4gIC8vIFRPRE86IGNhY2hlIG1vcmUgZGVlcGx5IHBhdGhzIGZvciBwZXJmb3JtYW5jZVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVsga2V5IF0pKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0L0NoYW5nZSBjdXJyZW50IGxvY2FsZSBnbG9iYWxseSB0aHJvdWdob3V0IHRoZSBXSE9MRSBhcHBsaWNhdGlvblxyXG4gICAqIFtOT1RFXSBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UgKGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZSlcclxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXHJcbiAgICovXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5sb2NhbGUgPT09IGxvY2FsZS5sb2NhbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xyXG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlID8gdGhpcy5fbG9jYWxlLmxvY2FsZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGxvY2FsZSBkYXRhXHJcbiAgICogQHBhcmFtIHBhdGggZG90IHBhdGhzIGZvciBmaW5kaW5nIGV4aXN0IHZhbHVlIGZyb20gbG9jYWxlIGRhdGEsIGVnLiBcImEuYi5jXCJcclxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxyXG4gICAqL1xyXG4gIGdldExvY2FsZURhdGEocGF0aD86IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGggPyB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgOiB0aGlzLl9sb2NhbGU7XHJcbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQsIG51bGwsIGxvY2FsZSB8fCB0aGlzLmdldExvY2FsZSgpLmxvY2FsZSkgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBkYXRlIHdpdGggY29tcGF0aWJsZSBmb3IgdGhlIGZvcm1hdCBvZiBtb21lbnQgYW5kIG90aGVyc1xyXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxyXG4gICAqL1xyXG4gIGZvcm1hdERhdGVDb21wYXRpYmxlKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGUoZGF0ZSwgdGhpcy5jb21wYXREYXRlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlKHRleHQpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZShgMTk3MC0wMS0wMSAke3RleHR9YCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogb2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgbGV0IHJlcyA9IG9iajtcclxuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XHJcbiAgICAgIHJlcyA9IHJlc1sgcGF0aHNbIGluZGV4KysgXSBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wYXRpYmxlIHRyYW5zbGF0ZSB0aGUgbW9tZW50LWxpa2UgZm9ybWF0IHBhdHRlcm4gdG8gYW5ndWxhcidzIHBhdHRlcm5cclxuICAgKiBXaHk/IEZvciBub3csIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZXhpc3RpbmcgbGFuZ3VhZ2UgZm9ybWF0cyBpbiBBbnRELCBhbmQgQW50RCB1c2VzIHRoZSBkZWZhdWx0IHRlbXBvcmFsIHN5bnRheC5cclxuICAgKlxyXG4gICAqIFRPRE86IGNvbXBhcmUgYW5kIGNvbXBsZXRlIGFsbCBmb3JtYXQgcGF0dGVybnNcclxuICAgKiBFYWNoIGZvcm1hdCBkb2NzIGFzIGJlbG93OlxyXG4gICAqIEBsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cclxuICAgKiBAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9EYXRlUGlwZSNkZXNjcmlwdGlvblxyXG4gICAqIEBwYXJhbSBmb3JtYXQgaW5wdXQgZm9ybWF0IHBhdHRlcm5cclxuICAgKi9cclxuICBwcml2YXRlIGNvbXBhdERhdGVGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZvcm1hdCAmJiBmb3JtYXRcclxuICAgIC5yZXBsYWNlKC9ZL2csICd5JykgLy8gb25seSBzdXBwb3J0IHksIHl5LCB5eXksIHl5eXlcclxuICAgIC5yZXBsYWNlKC9EL2csICdkJyk7IC8vIGQsIGRkIHJlcHJlc2VudCBvZiBELCBERCBmb3IgbW9tZW50anMsIG90aGVycyBhcmUgbm90IHN1cHBvcnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOWl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBOekkxOG5TZXJ2aWNlLCBsb2NhbGU6IE56STE4bkludGVyZmFjZSwgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBkYXRlUGlwZTogRGF0ZVBpcGUpOiBOekkxOG5TZXJ2aWNlIHtcclxuICByZXR1cm4gZXhpc3QgfHwgbmV3IE56STE4blNlcnZpY2UobG9jYWxlLCBsb2dnZXIsIGRhdGVQaXBlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0kxOE5fU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZSAgIDogTnpJMThuU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBOWl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56STE4blNlcnZpY2UgXSwgTlpfSTE4TiwgTG9nZ2VyU2VydmljZSwgRGF0ZVBpcGUgXVxyXG59O1xyXG4iXX0=