import values from "../theme/values";

const BASE_API = 'http://jsonplaceholder.typicode.com/photos';

export function getPhotos(page) {
    return fetch(BASE_API + `?_page=${ page }&_limit=${ values.LIMIT_PHOTOS }`)
        .then(response => response);
}