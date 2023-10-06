import React from "react";
import FilterProductTable from "../components/FilterProductTable";
import AdminNavBar from "../components/AdminNavBar";

function AdminView() {
    return (
        <div>
            <AdminNavBar left={0} />
            <FilterProductTable admin = {1} />
        </div>
    );
}

export default AdminView;