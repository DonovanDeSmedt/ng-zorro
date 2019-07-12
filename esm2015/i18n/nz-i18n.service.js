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
export class NzI18nService {
    /**
     * @param {?} locale
     * @param {?} _logger
     * @param {?} datePipe
     */
    constructor(locale, _logger, datePipe) {
        this._logger = _logger;
        this.datePipe = datePipe;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        /** @type {?} */
        let content = /** @type {?} */ (this._getObjectPath(this._locale, path));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    }
    /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDate(date, format, locale) {
        return date ? this.datePipe.transform(date, format, null, locale || this.getLocale().locale) : '';
    }
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDateCompatible(date, format, locale) {
        return this.formatDate(date, this.compatDateFormat(format), locale);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return parse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return parse(`1970-01-01 ${text}`);
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
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
    compatDateFormat(format) {
        return format && format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
    }
}
NzI18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NZ_I18N,] }] },
    { type: LoggerService },
    { type: DatePipe }
];
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
export const NZ_I18N_SERVICE_PROVIDER = {
    provide: NzI18nService,
    useFactory: NZ_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), NzI18nService], NZ_I18N, LoggerService, DatePipe]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEtBQUssTUFBTSxtQkFBbUIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHMUMsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUl4QixZQUE2QixNQUF1QixFQUFVLE9BQXNCLEVBQVUsUUFBa0I7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7dUJBRjlGLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDO1FBR2xFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3BDOzs7Ozs7SUFLRCxTQUFTLENBQUMsSUFBWSxFQUFFLElBQVU7O1FBRWhDLElBQUksT0FBTyxxQkFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFXLEVBQUM7UUFDaEUsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQzthQUN6RztZQUNELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztJQU9ELFNBQVMsQ0FBQyxNQUF1QjtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN6RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ2hEOzs7Ozs7O0lBT0QsYUFBYSxDQUFDLElBQWEsRUFBRSxZQUFrQjs7UUFDN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0UsT0FBTyxNQUFNLElBQUksWUFBWSxDQUFDO0tBQy9COzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVUsRUFBRSxNQUFlLEVBQUUsTUFBZTtRQUNyRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ25HOzs7Ozs7Ozs7SUFNRCxvQkFBb0IsQ0FBQyxJQUFVLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFDL0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckU7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFDRCxPQUFPLEtBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUM7S0FDcEM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxHQUFXLEVBQUUsSUFBWTs7UUFDOUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDOztRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQzlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O1FBQzNCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBRSxLQUFLLENBQUUsS0FBSyxFQUFFLENBQUUsQ0FBRSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztJQWE5QixnQkFBZ0IsQ0FBQyxNQUFjO1FBQ3JDLE9BQU8sTUFBTSxJQUFJLE1BQU07YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDbEIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzs7OztZQTdHdkIsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsT0FBTztZQWJwQixhQUFhO1lBSmIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZIakIsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLEtBQW9CLEVBQUUsTUFBdUIsRUFBRSxNQUFxQixFQUFFLFFBQWtCO0lBQ3pJLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDN0Q7O0FBRUQsYUFBYSx3QkFBd0IsR0FBYTtJQUNoRCxPQUFPLEVBQUssYUFBYTtJQUN6QixVQUFVLEVBQUUsa0NBQWtDO0lBQzlDLElBQUksRUFBUSxDQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFFO0NBQ3BHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3V0aWwvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XHJcblxyXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xyXG5pbXBvcnQgeyBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTlpfSTE4TiB9IGZyb20gJy4vbnotaTE4bi50b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOekkxOG5TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2NhbGU6IE56STE4bkludGVyZmFjZTtcclxuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56STE4bkludGVyZmFjZT4odGhpcy5fbG9jYWxlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9JMThOKSBsb2NhbGU6IE56STE4bkludGVyZmFjZSwgcHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcclxuICB9XHJcblxyXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxOekkxOG5JbnRlcmZhY2U+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBbTk9URV0gUGVyZm9ybWFuY2UgaXNzdWU6IHRoaXMgbWV0aG9kIG1heSBjYWxsZWQgYnkgZXZlcnkgY2hhbmdlIGRldGVjdGlvbnNcclxuICAvLyBUT0RPOiBjYWNoZSBtb3JlIGRlZXBseSBwYXRocyBmb3IgcGVyZm9ybWFuY2VcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdHJhbnNsYXRlKHBhdGg6IHN0cmluZywgZGF0YT86IGFueSk6IHN0cmluZyB7XHJcbiAgICAvLyB0aGlzLl9sb2dnZXIuZGVidWcoYFtOekkxOG5TZXJ2aWNlXSBUcmFuc2xhdGluZygke3RoaXMuX2xvY2FsZS5sb2NhbGV9KTogJHtwYXRofWApO1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgYXMgc3RyaW5nO1xyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4gY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAlJHtrZXl9JWAsICdnJyksIGRhdGFbIGtleSBdKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cclxuICAgKiBbTk9URV0gSWYgY2FsbGVkIGF0IHJ1bnRpbWUsIHJlbmRlcmVkIGludGVyZmFjZSBtYXkgbm90IGNoYW5nZSBhbG9uZyB3aXRoIHRoZSBsb2NhbGUgY2hhbmdlIChiZWNhdXNlIHRoaXMgZG8gbm90IHRyaWdnZXIgYW5vdGhlciByZW5kZXIgc2NoZWR1bGUpXHJcbiAgICogQHBhcmFtIGxvY2FsZSBUaGUgdHJhbnNsYXRpbmcgbGV0dGVyc1xyXG4gICAqL1xyXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUubG9jYWxlID09PSBsb2NhbGUubG9jYWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGUoKTogTnpJMThuSW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA/IHRoaXMuX2xvY2FsZS5sb2NhbGUgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBsb2NhbGUgZGF0YVxyXG4gICAqIEBwYXJhbSBwYXRoIGRvdCBwYXRocyBmb3IgZmluZGluZyBleGlzdCB2YWx1ZSBmcm9tIGxvY2FsZSBkYXRhLCBlZy4gXCJhLmIuY1wiXHJcbiAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIGlmIHRoZSByZXN1bHQgaXMgbm90IFwidHJ1dGh5XCJcclxuICAgKi9cclxuICBnZXRMb2NhbGVEYXRhKHBhdGg/OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXRoID8gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIDogdGhpcy5fbG9jYWxlO1xyXG4gICAgcmV0dXJuIHJlc3VsdCB8fCBkZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlID8gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZm9ybWF0LCBudWxsLCBsb2NhbGUgfHwgdGhpcy5nZXRMb2NhbGUoKS5sb2NhbGUpIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgZGF0ZSB3aXRoIGNvbXBhdGlibGUgZm9yIHRoZSBmb3JtYXQgb2YgbW9tZW50IGFuZCBvdGhlcnNcclxuICAgKiBXaHk/IEZvciBub3csIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZXhpc3RpbmcgbGFuZ3VhZ2UgZm9ybWF0cyBpbiBBbnRELCBhbmQgQW50RCB1c2VzIHRoZSBkZWZhdWx0IHRlbXBvcmFsIHN5bnRheC5cclxuICAgKi9cclxuICBmb3JtYXREYXRlQ29tcGF0aWJsZShkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlKGRhdGUsIHRoaXMuY29tcGF0RGF0ZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZyk6IERhdGUge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZSh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2UoYDE5NzAtMDEtMDEgJHt0ZXh0fWApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IG9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGxldCByZXMgPSBvYmo7XHJcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcclxuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xyXG4gICAgICByZXMgPSByZXNbIHBhdGhzWyBpbmRleCsrIF0gXTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleCA9PT0gZGVwdGggPyByZXMgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29tcGF0aWJsZSB0cmFuc2xhdGUgdGhlIG1vbWVudC1saWtlIGZvcm1hdCBwYXR0ZXJuIHRvIGFuZ3VsYXIncyBwYXR0ZXJuXHJcbiAgICogV2h5PyBGb3Igbm93LCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGV4aXN0aW5nIGxhbmd1YWdlIGZvcm1hdHMgaW4gQW50RCwgYW5kIEFudEQgdXNlcyB0aGUgZGVmYXVsdCB0ZW1wb3JhbCBzeW50YXguXHJcbiAgICpcclxuICAgKiBUT0RPOiBjb21wYXJlIGFuZCBjb21wbGV0ZSBhbGwgZm9ybWF0IHBhdHRlcm5zXHJcbiAgICogRWFjaCBmb3JtYXQgZG9jcyBhcyBiZWxvdzpcclxuICAgKiBAbGluayBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXHJcbiAgICogQGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vRGF0ZVBpcGUjZGVzY3JpcHRpb25cclxuICAgKiBAcGFyYW0gZm9ybWF0IGlucHV0IGZvcm1hdCBwYXR0ZXJuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjb21wYXREYXRlRm9ybWF0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBmb3JtYXQgJiYgZm9ybWF0XHJcbiAgICAucmVwbGFjZSgvWS9nLCAneScpIC8vIG9ubHkgc3VwcG9ydCB5LCB5eSwgeXl5LCB5eXl5XHJcbiAgICAucmVwbGFjZSgvRC9nLCAnZCcpOyAvLyBkLCBkZCByZXByZXNlbnQgb2YgRCwgREQgZm9yIG1vbWVudGpzLCBvdGhlcnMgYXJlIG5vdCBzdXBwb3J0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTlpfTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTnpJMThuU2VydmljZSwgbG9jYWxlOiBOekkxOG5JbnRlcmZhY2UsIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgZGF0ZVBpcGU6IERhdGVQaXBlKTogTnpJMThuU2VydmljZSB7XHJcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBOekkxOG5TZXJ2aWNlKGxvY2FsZSwgbG9nZ2VyLCBkYXRlUGlwZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOWl9JMThOX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGUgICA6IE56STE4blNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogTlpfTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOekkxOG5TZXJ2aWNlIF0sIE5aX0kxOE4sIExvZ2dlclNlcnZpY2UsIERhdGVQaXBlIF1cclxufTtcclxuIl19