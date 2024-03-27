import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/checkbox.css';
import '../css/cart.css';

class OrderCard extends React.Component {
    compute1 = () => {
        let sum = 0, p, d, c;
        d = this.props.dollar;
        c = this.props.cent;
        p = d + 0.01 * c;
        sum = this.props.num * p;
        let text = "$" + sum.toFixed(2).toString();
        return (
            <p>{text}</p>
        )
    }
    render() {
        const name = this.props.name;
        const url = this.props.image;
        return (
            <div className="fst_curso__item" id="delId">
                <img src={url} alt="" width="73.5px" height="105px" className="littlemargin"/>
                <p className="fst_order_item_text">{name}</p>
                <p className="fst_order_item_text">{this.compute1()}</p>
                <p className="fst_order_item_text">{this.props.num}</p>
            </div>
        );
    }
}

export default OrderCard;
