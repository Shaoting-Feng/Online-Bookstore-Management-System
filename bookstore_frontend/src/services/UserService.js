import {postRequest, postRequest_noReturn} from "../utils/ajax";

export const getUser = (userId, callback) => {
    const url = "/getUser";
    const data = {userId: userId};
    postRequest(url, data, callback);
}

export const forbidUser = (id, state) => {
    const url = "/forbidUser";
    const data = {userId: id, state: state};
    postRequest_noReturn(url, data);
}

export const getUsers = (callback) => {
    const url = "/getUsers";
    postRequest(url, null, callback);
}

export const saveUser = (username, password, address, email) => {
    const url = "/saveUser";
    const data = {
        username: username,
        password: password,
        address: address,
        emails: email
    };
    postRequest_noReturn(url, data);
}