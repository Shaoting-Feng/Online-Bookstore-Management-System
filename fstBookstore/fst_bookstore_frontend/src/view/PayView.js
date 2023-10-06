import React from "react";
import {useLocation} from "react-router-dom";
import Confirm from "../components/Confirm";
import {online} from "../services/LoginService";
import NavBar from "../components/NavBar";

function PayView() {
    online();
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    let bookId = [], nums = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let inf = arr[i].split('@');
        bookId.push(parseInt(inf[0].substr(4)));
        nums.push(parseInt(inf[1]));
    }

    return (
        <div>
            <NavBar left={0} />
            <Confirm id={bookId} num={nums}/>
        </div>
    );
}

export default PayView;