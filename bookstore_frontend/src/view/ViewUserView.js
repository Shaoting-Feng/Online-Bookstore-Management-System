import React from "react";
import AdminNavBar from "../components/AdminNavBar";
import ViewUser from "../components/ViewUser";

function ViewUserView() {
    return (
        <div>
            <AdminNavBar left={0} />
            <ViewUser />
        </div>
    );
}

export default ViewUserView;