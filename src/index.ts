export const toIsoLocaleDate = (date: Date | string | number): string | null => {
    if (!date) {
        return null;
    }
    let dateToParse = date;
    if (!isValidDate(date)) {
        return null;
    }
    dateToParse = new Date(date); // convert date to JS Date object

    const tzo = -dateToParse.getTimezoneOffset(); // get timezone offset
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
* function checks if a date is valid
* @param date - date to check
* @returns true if date is valid
* @returns false if date is not valid
*/
const isValidDate = (date: Date | string | number): boolean => {
    // create a new date object and pass in the date parameter
    const dateWrapper = new Date(date);
    // returns true if the date is valid
    // returns false if the date is not valid
    return !isNaN(dateWrapper.getDate());
}
