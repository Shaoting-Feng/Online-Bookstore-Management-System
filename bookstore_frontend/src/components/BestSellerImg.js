import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import URL from "../assets/BestSeller.png";

class BestSeller extends React.Component {
    render() {
        return (
            <div className="margin-top">
                <img src={URL} alt="Best Seller" className="best_seller_image" />
            </div>
        );
    }
}

export default BestSeller;
