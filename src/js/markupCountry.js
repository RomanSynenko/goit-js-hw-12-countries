import pnotify from './pnotify';
import fullMarkup from '../markup/fullMarkup.hbs';
import smallMarkup from '../markup/smallMarkup.hbs';
import refs from './refs';

const createMarkup = (list) => {
    if (!list.length) {
        pnotify.error()
        return
    }
    if (list.length >= 10) {
        pnotify.manyCountries()
    }
    const markup = list.length === 1 ? fullMarkup(list) : smallMarkup(list)
    refs.$resualtRef.insertAdjacentHTML('beforeend', markup)
}
export default createMarkup;