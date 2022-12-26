/**
 * Converts a date object to an ISO locale date string.
 * @param date - The date to convert.
 * @param options - The options to use.
 * @returns The ISO locale date string.
 */
export const toLocaleTimezoneDate = (
    date: Date | string | number,
    options?: {
        throwInvalidException?: boolean,
        customOffset?: number,
    }
): string | null => {
    if (!date) {
        return null;
    }
    let dateToParse = date;
    if (!isValidDate(date)) {
        if (options?.throwInvalidException) {
            throw new Error('Invalid date');
        }
        return null;
    }
    dateToParse = new Date(date); // convert date to JS Date object
    let tzo = -dateToParse.getTimezoneOffset(); // get timezone offset
    if (typeof options?.customOffset !== 'undefined') {
        if (typeof options?.customOffset === 'number') {
            tzo = -options.customOffset;
        } else {
            throw new Error('Invalid offset');
        }
    }
    const dif = tzo >= 0 ? '+' : '-'; // determine + or -
    const pad = (num: number) => ((num < 10 ? '0' : '') + num); // pad with leading zero

    return dateToParse.getFullYear() + // get year
        '-' + pad(dateToParse.getMonth() + 1) + // get month, add 1 because getMonth() is 0-based
        '-' + pad(dateToParse.getDate()) + // get day
        'T' + pad(dateToParse.getHours()) + // get hours
        ':' + pad(dateToParse.getMinutes()) + // get minutes
        ':' + pad(dateToParse.getSeconds()) + // get seconds
        dif + pad(Math.floor(Math.abs(tzo) / 60)) + // get timezone offset hours, pad with leading zero
        ':' + pad(Math.abs(tzo) % 60); // get timezone offset minutes, pad with leading zero
}

/** 
 * Checks if a date is valid.
 * @param date - The date to check.
 * @returns true if date is valid.
 * @returns false if date is not valid.
 */
const isValidDate = (date: Date | string | number): boolean => {
    // if date is a string or number, then convert to a date object
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    // if date is not a date object, then return false
    if (!(date instanceof Date)) {
        return false;
    }
    // returns true if the date is valid
    // returns false if the date is not valid
    return !isNaN(date.getDate());
}

console.log(toLocaleTimezoneDate(new Date('2022-12-24')))