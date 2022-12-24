## Convert a date to a string appended with time zone

This is a simple function that converts a GMT date to a date string appended and added with your current system time zone.

## Usage
    
    toIsoLocaleDate(date, options)

## Example
    
    const { toIsoLocaleDate } = require('to-locale-timezone-date'); // for CommonJS require

    import { toIsoLocaleDate } from 'to-locale-timezone-date'; // for ES6 import

    toIsoLocaleDate(new Date()) // 2022-12-24T23:02:57+05:30

    toIsoLocaleDate('Some invalid date', { throwInvalidException: true }) // Error: Invalid date

    toIsoLocaleDate('Some invalid date') // null

## Options
    
    {
        throwInvalidException: false // if true, throws an exception when the date is invalid
    }