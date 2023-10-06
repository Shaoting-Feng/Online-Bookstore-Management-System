import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {Link} from "react-router-dom";
import {getBook} from "../services/BookService";
import {addItem} from "../services/CartService";
import {history} from "../utils/history";
import URL from "../assets/Detail.png";
import URL2 from "../assets/add_to_cart.png";
import URL3 from "../assets/buy now.png";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.id),
            data: [],
        }
    }

    componentDidMount() {
        getBook(this.state.id, (data) => {
            this.setState({data: data});
            console.log(data);
        })
    }

    addToCart = () => {
        let userId = parseInt(localStorage.getItem("userId"));
        addItem(userId, this.state.id);
    }

    LinkToCart = () => {
        if (this.state.data.inventory > 0) {
            this.addToCart();
            history.push("/?cart")
            history.go(0);
        } else {
            alert("Fail: Understock!!!");
        }
    }

    linkToPayment = () => {
        if (this.state.data.inventory > 0) {
            let search = "";
            let a = 1;
            search += "?id=" +
                this.state.id.toString() +
                "@" +
                a.toString() +
                "&";
            return (
                <Link to={{
                    pathname: "/confirm",
                    search: search,
                }}
                      target="_blank"
                      className="detail-button-buy"
                >
                    <img src={URL3} className="detail-button-buy-now" alt="buy now" />
                </Link>
            );
        }
    }

    render() {
        return (
            <div className="margin-top">
                <img src={this.state.data.image} className="detail-img" alt="cover"/>
                <div className="detail-text">
                    <h3 className="detail-name">{this.state.data.name}</h3>
                    <p className="detail-author-purple">{this.state.data.author}{"\xa0"}</p>
                    <p className="detail-author-gray">(Author)</p>
                    <div className="detail-button">
                        <img src={URL2} className="detail-button-cart" alt="add_to_cart" onClick={()=>this.LinkToCart()} />
                        {this.linkToPayment()}
                    </div>
                    <h4 className="detail-description">Description</h4>
                    <p className="detail-description-abstract">{this.state.data.description}</p>
                    <h4 className="detail-description">Product Details</h4>
                    <div className="detail-product-details">
                        <div className="detail-product-price">Price</div>
                        <div>${this.state.data.dollar}.{this.state.data.cent}</div>

                        <div className="detail-product-price">Inventory</div>
                        <div>{this.state.data.inventory}</div>

                        <div className="detail-product-price">Language</div>
                        <div>English</div>

                        <div className="detail-product-price">Type</div>
                        <div>Paperback</div>

                        <div className="detail-product-price">ISBN</div>
                        <div className="detail-product-isbn">{this.state.data.isbn}</div>
                    </div>
                    <h4 className="detail-description">Earn by promoting books</h4>
                    <img src={URL} className="detail-earn" alt="earn"/>
                </div>
            </div>
        );
    }
}

export default Detail;