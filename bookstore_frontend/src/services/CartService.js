import {postRequest, postRequest_noReturn} from "../utils/ajax";

export const getCartItems = (user_id, callback) => {
    const url = '/getCartItems';
    const data = {userId: user_id};
    postRequest(url, data, callback);
}

export const updateItemNum = (userId, itemId, itemNum) => {
    const url = '/updateItemNum';
    const data = {
        itemNum: itemNum,
        userId: userId,
        itemId: itemId,
    };
    postRequest_noReturn(url, data);
}

export const deleteItem = (userId, itemId) => {
    const url = '/deleteItem';
    const data = {
        userId: userId,
        itemId: itemId,
    };
    postRequest_noReturn(url, data);
}

export const addItem = (userId, itemId) => {
    const url = '/addItem';
    const data = {
        userId: userId,
        itemId: itemId,
    };
    postRequest_noReturn(url, data);
}