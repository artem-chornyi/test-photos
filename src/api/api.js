import values from "../theme/values";

const BASE_API = 'http://jsonplaceholder.typicode.com';



export function getAllPhotos(page) {
    return fetch(BASE_API + '/photos')
        .then(response => response.json());
}

export function getPhotos(page) {
    return fetch(BASE_API + `/photos?_page=${ page }&_limit=${ values.LIMIT_PHOTOS }`)
        .then(response => response);
}

export function getByAlbumIdPhotos(id) {
    return fetch(BASE_API + `/albums/${ id }/photos`)
        .then(response => response.json());
}

