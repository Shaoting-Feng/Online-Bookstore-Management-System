import React from "react";
import {useLocation} from "react-router-dom";
import Detail from "../components/Detail";
import AdminDetail from "../components/AdminDetail";
import NavBar from "../components/NavBar";
import AdminNavBar from "../components/AdminNavBar";

function BookView() {
    let location = useLocation();
    const query = location.search;
    const arr = query.split('&');
    const bookId = arr[0].substr(4);
    const arr2 = query.split('?');
    const ident = arr2[2][6];

    if (ident !== '0') {
        return (
            <div>
                <AdminNavBar left={0} />
                <AdminDetail id={bookId}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <NavBar left={0} />
                <Detail id={bookId}/>
            </div>
        );
    }
}

export default BookView;