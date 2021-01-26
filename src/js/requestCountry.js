import pnotify from './pnotify';
const searchCountry = (search) => {
    const URL = `https://restcountries.eu/rest/v2/name/${search}`;
    return fetch(URL).then(response => response.json()).catch(pnotify.somethingWentWrong())
};
export default searchCountry;