import {history} from "../utils/history";
import {postRequest} from "../utils/ajax";

export function linkTo(name, password, ret) {
    const url = "/checkUser"
    const form = {name: name,
        password: password
    };

    const callback = (msg) => {
        console.log(msg);
        if (msg.status !== 0) {
            localStorage.setItem("login", name);
            localStorage.setItem("userId", msg.userId);
            history.push(msg.status === 2 ? "/admin" :"/");
            history.go(0);
        }
        ret(msg.msg);
    }

    postRequest(url, form, callback);
}

export function linkToNoCallback(name, password, ret) {
    const url = "/checkUser"
    const form = {name: name,
        password: password
    };

    const callback = (msg) => {
        console.log(msg);
        ret(msg.msg);
    }

    postRequest(url, form, callback);
}

export function online() {
    if (!localStorage.getItem("login")) {
        history.push("/login");
        history.go(0);
    }
}