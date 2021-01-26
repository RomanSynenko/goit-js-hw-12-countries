import './styles/styles.scss';
import searchCountry from './js/requestCountry';
import debounce from 'lodash.debounce';
import createMarkup from './js/markupCountry'
import refs from './js/refs';
const { $inputRef, $resualtRef } = refs;
const debouceInput = debounce(
    event => {
        const country = event.target.value;
        $resualtRef.innerHTML = '';
        searchCountry(country).then(createMarkup)
    },
    300)
$inputRef.addEventListener('input', debouceInput)