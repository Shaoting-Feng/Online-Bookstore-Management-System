import {postRequest, postRequest_noReturn} from "../utils/ajax";

export const getOrdersByUserId = (userId, callback) => {
    const url = "/getOrdersByUserId";
    const data = {userId: userId};
    postRequest(url, data, callback);
}

export const getOrders = (callback) => {
    const url = "/getOrders";
    postRequest(url, null, callback);
}

export const saveOrderWithItems = (userId, address, itemIds, itemNums, district, zip, email) => {
    const url = "/saveOrderWithItems";
    const data = {
        userId: userId,
        address: address,
        itemIds: itemIds,
        itemNums: itemNums,
        district: district,
        zip: zip,
        email: email
    };
    postRequest_noReturn(url, data);
}
