const BASE_API = 'http://jsonplaceholder.typicode.com/photos';

export function getPhotos(page, limit) {
    return fetch(BASE_API + `?_page=${page}&_limit=${limit}`)
        .then(response => response.json());
}