const server = 'http://localhost:8080';

export const postRequest = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data) {
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(server + url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const postRequest_noReturn = (url, data) => {
    let formData = new FormData();

    for (let p in data) {
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(server + url, opts);
};