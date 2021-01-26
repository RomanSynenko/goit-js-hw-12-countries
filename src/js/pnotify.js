import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
const manyCountries = () =>
    error({
        title: 'Too many matches found. Please enter a more specific query',
        delay: 2000
    })
const notFound = () =>
    error({
        title: 'Not found',
        delay: 1000
    })
export default {
    manyCountries,
    error: notFound
}