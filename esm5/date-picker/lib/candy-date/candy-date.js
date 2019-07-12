/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import endOfMonth from 'date-fns/end_of_month';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { firstDayOfWeek } from './util';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        // const date = new Date(this.nativeDate);
        // date.setMonth(month);
        // return new CandyDate(date);
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.endOf = /**
     * @param {?} grain
     * @return {?}
     */
    function (grain) {
        switch (grain) {
            case 'month': return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth();
                case 'day':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate();
                case 'hour':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours();
                case 'minute':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes();
                case 'second':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes()
                        && left.getSeconds() === right.getSeconds();
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isAfter = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth());
                case 'day':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate());
                case 'hour':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours());
                case 'minute':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes());
                case 'second':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() > right.getSeconds());
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isBefore = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth());
                case 'day':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate());
                case 'hour':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours());
                case 'minute':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes());
                case 'second':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() < right.getSeconds());
            }
        }
        return false;
    };
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = /**
     * @return {?}
     */
    function () {
        return this.isSame(new Date(), 'day');
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isInvalid = /**
     * @return {?}
     */
    function () {
        return isNaN(this.nativeDate.valueOf());
    };
    /**
     * 0-6 (Sunday to Saturday)
     */
    /**
     * 0-6 (Sunday to Saturday)
     * @param {?=} locale
     * @return {?}
     */
    CandyDate.prototype.firstDayOfWeek = /**
     * 0-6 (Sunday to Saturday)
     * @param {?=} locale
     * @return {?}
     */
    function (locale) {
        return firstDayOfWeek(locale);
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (date === void 0) { date = this; }
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
function CandyDate_tsickle_Closure_declarations() {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBUXhDOzs7Ozs7QUFBQTtJQUVFLGdEQUFnRDtJQUVoRCxtQkFBWSxJQUFvQjs7OztRQUs5QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7aUJBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDO2FBQ2xHO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUM5QjtLQUNGO0lBRUQsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUoseUNBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsSUFBSTtJQUVKLHdFQUF3RTtJQUN4RSxxQkFBcUI7SUFDckIsd0VBQXdFOzs7O0lBRXhFLDJCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELDRCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELDBCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNqQzs7OztJQUVELDJCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNsQzs7OztJQUVELDJCQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNsQzs7OztJQUVELDRCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELDhCQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNyQzs7OztJQUVELDhCQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNyQzs7OztJQUVELG1DQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUMxQztJQUVELHdFQUF3RTtJQUN4RSwwQkFBMEI7SUFDMUIsd0VBQXdFOzs7O0lBRXhFLHlCQUFLOzs7SUFBTDtRQUNFLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDakQ7Ozs7Ozs7SUFFRCwwQkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFZLEVBQUUsTUFBYyxFQUFFLE1BQWM7O1FBQ2pELElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCwyQkFBTzs7OztJQUFQLFVBQVEsSUFBWTs7UUFFbEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCw0QkFBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDekQ7SUFFRCw0QkFBNEI7SUFDNUIsOExBQThMOzs7OztJQUM5TCw0QkFBUTs7OztJQUFSLFVBQVMsS0FBYTs7OztRQUlwQixPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsNkJBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFFRCwwQkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxPQUFrQztRQUNwRCxPQUFPLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzdEOzs7OztJQUVELDJCQUFPOzs7O0lBQVAsVUFBUSxNQUFjOztRQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELDJCQUFPOzs7O0lBQVAsVUFBUSxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDOUM7Ozs7O0lBRUQseUJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFDbEIsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0lBRUQsMEJBQU07Ozs7O0lBQU4sVUFBTyxJQUFzQixFQUFFLEtBQTRCOztRQUN6RCxJQUFJLElBQUksRUFBRTs7WUFDUixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxNQUFNO29CQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEQsS0FBSyxPQUFPO29CQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7MkJBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVDLEtBQUssS0FBSztvQkFDUixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFOzJCQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTsyQkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUMsS0FBSyxNQUFNO29CQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7MkJBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzJCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTsyQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDNUMsS0FBSyxRQUFRO29CQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7MkJBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzJCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTsyQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7MkJBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hELEtBQUssUUFBUTtvQkFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFOzJCQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTsyQkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7MkJBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzJCQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTsyQkFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNqRDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRUQsMkJBQU87Ozs7O0lBQVAsVUFBUSxJQUFzQixFQUFFLEtBQTRCOztRQUMxRCxJQUFJLElBQUksRUFBRTs7WUFDUixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxNQUFNO29CQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEQsS0FBSyxPQUFPO29CQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOzJCQUM1QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRixLQUFLLEtBQUs7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7MkJBQzVDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzJCQUNsRixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ2hJLEtBQUssTUFBTTtvQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzsyQkFDNUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2xGLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7MkJBQ3hILENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN4SyxLQUFLLFFBQVE7b0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7MkJBQzVDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzJCQUNsRixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOzJCQUN4SCxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2hLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BOLEtBQUssUUFBUTtvQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzsyQkFDNUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2xGLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7MkJBQ3hILENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzsyQkFDaEssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7MkJBQzVNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqUTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRUQsNEJBQVE7Ozs7O0lBQVIsVUFBUyxJQUFzQixFQUFFLEtBQTRCOztRQUMzRCxJQUFJLElBQUksRUFBRTs7WUFDUixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O1lBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxNQUFNO29CQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEQsS0FBSyxPQUFPO29CQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOzJCQUM1QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRixLQUFLLEtBQUs7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7MkJBQzVDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzJCQUNsRixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ2hJLEtBQUssTUFBTTtvQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzsyQkFDNUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2xGLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7MkJBQ3hILENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN4SyxLQUFLLFFBQVE7b0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7MkJBQzVDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzJCQUNsRixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOzJCQUN4SCxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2hLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BOLEtBQUssUUFBUTtvQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzsyQkFDNUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2xGLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7MkJBQ3hILENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzsyQkFDaEssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7MkJBQzVNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqUTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELG1DQUFtQzs7OztJQUNuQywyQkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUN6QztJQUVEOztPQUVHOzs7Ozs7SUFDSCxrQ0FBYzs7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDNUIsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRU8sZ0NBQVk7Ozs7Y0FBQyxJQUE2QjtRQUE3QixxQkFBQSxFQUFBLFdBQTZCO1FBQ2hELE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztvQkFoUjlEO0lBeVJDLENBQUE7Ozs7Ozs7QUEzUUQscUJBMlFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzJztcclxuaW1wb3J0IGFkZFllYXJzIGZyb20gJ2RhdGUtZm5zL2FkZF95ZWFycyc7XHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XHJcbmltcG9ydCBzZXREYXkgZnJvbSAnZGF0ZS1mbnMvc2V0X2RheSc7XHJcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xyXG4vLyBpbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRfeWVhcic7XHJcbmltcG9ydCB7IGZpcnN0RGF5T2ZXZWVrIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxyXG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XHJcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXHJcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYW5keURhdGUge1xyXG4gIG5hdGl2ZURhdGU6IERhdGU7XHJcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nKSB7XHJcbiAgICAvLyBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FuZHlEYXRlKSkge1xyXG4gICAgLy8gICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBhbmQgXCJzdHJpbmdcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBnZXRMb2NhbGUoKTogc3RyaW5nIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IENhbmR5RGF0ZSB7XHJcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcclxuICAvLyAgIHJldHVybiB0aGlzO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGdldFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaWxsaXNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjbG9uZSgpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUobmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRIbXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlciwgc2Vjb25kOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLmRhdGUsIHllYXIpKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkWWVhcnModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIC8vIE5PVEU6IG1vbnRoIHN0YXJ0cyBmcm9tIDBcclxuICAvLyBOT1RFOiBEb24ndCB1c2UgdGhlIG5hdGl2ZSBBUEkgZm9yIG1vbnRoIG1hbmlwdWxhdGlvbiBhcyBpdCBub3QgcmVzdHJpY3QgdGhlIGRhdGUgd2hlbiBpdCBvdmVyZmxvd3MsIGVnLiAobmV3IERhdGUoJzIwMTgtNy0zMScpKS5zZXRNb250aCgxKSB3aWxsIGJlIGRhdGUgb2YgMjAxOC0zLTAzIGluc3RlYWQgb2YgMjAxOC0yLTI4XHJcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIC8vIGRhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRNb250aCh0aGlzLm5hdGl2ZURhdGUsIG1vbnRoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRNb250aHMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkTW9udGhzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXkoZGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIH0pOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGFtb3VudCk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBlbmRPZihncmFpbjogJ21vbnRoJyk6IENhbmR5RGF0ZSB7XHJcbiAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzogcmV0dXJuIG5ldyBDYW5keURhdGUoZW5kT2ZNb250aCh0aGlzLm5hdGl2ZURhdGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHsgLy8gVE9ETzogUHJlY2lwaXRhdGUgaW50byBhIGZ1bmN0aW9uIFwiY29tcGFyZSgpXCJcclxuICAgIGlmIChkYXRlKSB7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xyXG4gICAgICBjb25zdCByaWdodCA9IHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpO1xyXG4gICAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpO1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKVxyXG4gICAgICAgICAgICAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKVxyXG4gICAgICAgICAgICAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCk7XHJcbiAgICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpXHJcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpXHJcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgJiYgbGVmdC5nZXRTZWNvbmRzKCkgPT09IHJpZ2h0LmdldFNlY29uZHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlcihkYXRlOiBDYW5keURhdGUgfCBEYXRlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7IC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcclxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcclxuICAgICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpO1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID4gcmlnaHQuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA+IHJpZ2h0LmdldEhvdXJzKCkpO1xyXG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPiByaWdodC5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPiByaWdodC5nZXRNaW51dGVzKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiYgbGVmdC5nZXRTZWNvbmRzKCkgPiByaWdodC5nZXRTZWNvbmRzKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0JlZm9yZShkYXRlOiBDYW5keURhdGUgfCBEYXRlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7IC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcclxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcclxuICAgICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpO1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA8IHJpZ2h0LmdldEhvdXJzKCkpO1xyXG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPCByaWdodC5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPCByaWdodC5nZXRNaW51dGVzKCkpXHJcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiYgbGVmdC5nZXRTZWNvbmRzKCkgPCByaWdodC5nZXRTZWNvbmRzKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBFcXVhbCB0byB0b2RheSBhY2N1cmF0ZSB0byBcImRheVwiXHJcbiAgaXNUb2RheSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc0ludmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNOYU4odGhpcy5uYXRpdmVEYXRlLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAwLTYgKFN1bmRheSB0byBTYXR1cmRheSlcclxuICAgKi9cclxuICBmaXJzdERheU9mV2Vlayhsb2NhbGU/OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGZpcnN0RGF5T2ZXZWVrKGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvTmF0aXZlRGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlID0gdGhpcyk6IERhdGUge1xyXG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcGFyZShkYXRlOiBDYW5keURhdGUsIERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnbWlsbGlzZWNvbmQnKTogbnVtYmVyIHtcclxuICAvLyAgIGNvbnN0IGxldmVsID0geyAnbWlsbGlzZWNvbmQnOiAxLCAnc2Vjb25kJzogMTAwMCwgJ21pbnV0ZSc6IDEwMDAgKiA2MCwgJ2hvdXInOiAxMDAwICogNjAgKiA2MCwgJ2RheSc6IDEwMDAgKiA2MCAqIDYwICogMjQgfVsgZ3JhaW4gXTtcclxuICAvLyAgIGNvbnN0IGxlZnQgPSB0aGlzLm5hdGl2ZURhdGUuZ2V0VGltZSgpIC8gbGV2ZWw7XHJcbiAgLy8gICBjb25zdCByaWdodCA9IChkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZSkuZ2V0VGltZSgpIC8gbGV2ZWw7XHJcbiAgLy8gICByZXR1cm4gTWF0aC5mbG9vcihsZWZ0KSAtIE1hdGguZmxvb3IocmlnaHQpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ3llYXInIHwgJ21vbnRoJyB8ICdkYXknIHwgJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcclxuXHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZUNvbXBhcmVUeXBlID0gJ2VxJyB8ICdndCcgfCAnbHQnO1xyXG4iXX0=