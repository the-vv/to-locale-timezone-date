## Convert a date to a string appended with time zone

This is a simple function that converts a GMT date to an ISO date string appended and added with your current system time zone.

Usefull when you want to convert a date to a string and send it to the server. so that when comparing with dates on the server, timezones wont create any issue.

### Installation
    
    npm install to-locale-timezone-date

### Usage
    
    toLocaleTimezoneDate(date, options)

### Example
    
    const { toLocaleTimezoneDate } = require('to-locale-timezone-date'); // for CommonJS require

    import { toLocaleTimezoneDate } from 'to-locale-timezone-date'; // for ES6 import

    toLocaleTimezoneDate(new Date()) // 2022-12-24T23:02:57+05:30

    toLocaleTimezoneDate(new Date('2022-12-24')) // 2022-12-24T05:30:00+05:30

    toLocaleTimezoneDate(new Date(), { customOffset: 0 }) // 2022-12-27T00:57:21+00:00

    toLocaleTimezoneDate(new Date(), { customOffset: 60 }) // 2022-12-27T00:57:21-01:00

    toLocaleTimezoneDate(new Date(), { customOffset: -60 }) // 2022-12-27T00:57:21+01:00

    toLocaleTimezoneDate('Some invalid date', { throwInvalidException: true }) // Error: Invalid date

    toLocaleTimezoneDate('Some invalid date') // null

### Options
    
    {
        throwInvalidException: false // if true, throws an exception when the date is invalid,
        customOffset: null // if set, uses the custom offset instead of the system time zone
    }