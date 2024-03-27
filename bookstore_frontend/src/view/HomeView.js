import React from 'react';
import {useLocation} from "react-router-dom";
import BodyPage from "../components/BodyPage";
import {online} from "../services/LoginService";

function HomeView() {
    online();
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    let pageIdx;
    if (arr[0] === "") pageIdx = 0;
    else if (arr[0] === "?cart") pageIdx = 1;
    else if (arr[0] === "?order") pageIdx = 2;
    else if (arr[0] === "?browse") pageIdx = 3;

    return (
        <BodyPage page={pageIdx} />
    )
}

export default HomeView;