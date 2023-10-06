import React from "react";
import OrderCardContainer from "../components/OrderCardContainer";
import AdminNavBar from "../components/AdminNavBar";

function AdminOrderView() {
    return (
        <div>
            <AdminNavBar left={0} />
            <OrderCardContainer admin={1} />
        </div>
    );
}

export default AdminOrderView;