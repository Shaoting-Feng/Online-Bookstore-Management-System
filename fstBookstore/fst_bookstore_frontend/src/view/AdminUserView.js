import React from "react";
import AdminNavBar from "../components/AdminNavBar";
import AdminUser from "../components/AdminUser";

function AdminUserView() {
    return (
        <div>
            <AdminNavBar left={0} />
            <AdminUser />
        </div>
    );
}

export default AdminUserView;