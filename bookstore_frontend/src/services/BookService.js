import {postRequest, postRequest_noReturn} from "../utils/ajax";

export const getBooks = (callback) => {
    const url = '/getBooks';
    postRequest(url, null, callback);
};

export const getBook = (id, callback) => {
    const url = '/getBookById';
    const data = {id: id};
    postRequest(url, data, callback);
};

export const selectBooks = (ids, callback) => {
    const url = '/getBooksByIds';
    const data = {ids: ids};
    postRequest(url, data, callback);
}

export const changeBook = (id, name, author, image, inventory, ISBN, dollar, cent, description) => {
    const url = '/changeBook';
    const data = {id: id, author: author, name: name, image: image, inventory: inventory, ISBN: ISBN, dollar: dollar, cent: cent, description: description};
    postRequest_noReturn(url, data);
}

export const addBook = (name, author, image, inventory, ISBN, dollar, cent, description) => {
    const url = '/addBook';
    const data = {author: author, name: name, image: image, inventory: inventory, ISBN: ISBN, dollar: dollar, cent: cent, description: description};
    postRequest_noReturn(url, data);
}

export const deleteBook = (id) => {
    const url = '/deleteBook';
    const data = {id: id};
    postRequest_noReturn(url, data);
}