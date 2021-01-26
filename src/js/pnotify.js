import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
const manyCountries = () =>
    error({
        title: 'Too many matches found. Please enter a more specific query',
        delay: 5000
    }, 200, )
const notFound = () =>
    error({
        title: 'Not found',
        delay: 5000
    }, 200, )

export default {
    manyCountries,
    error: notFound
}