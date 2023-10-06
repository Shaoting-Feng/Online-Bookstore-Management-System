import React from "react";
import BestSeller from "../components/BestSeller";
import AdminNavBar from "../components/AdminNavBar";
import BestSellerImg from "../components/BestSellerImg";

function StatisticsView() {
    return (
        <div>
            <AdminNavBar left={0} />
            <BestSellerImg />
            <BestSeller admin={1} />
        </div>
    );
}

export default StatisticsView;