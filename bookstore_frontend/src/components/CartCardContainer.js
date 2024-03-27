import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/cart.css';
import '../css/checkbox.css';
import {Link} from "react-router-dom";
import {deleteItem, getCartItems, updateItemNum} from "../services/CartService";
import {getUser} from "../services/UserService";
import URL2 from "../assets/delete.png";
import URL3 from "../assets/checkout.png";

class AddSub extends React.Component {
    submit = (e) => {
        let num = e.target.value;
        if (num > this.props.max) num = this.props.max;
        this.props.setNum(num, this.props.idx);
    }

    render() {
        return (
            <div className="no-margin-top">
                <input
                    type="number"
                    max={this.props.max}
                    min={1}
                    className="num_container"
                    value={this.props.num}
                    onChange={this.submit}
                    disabled={this.props.lock}
                />
            </div>
        );
    }
}

class CartCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: parseInt(localStorage.getItem("userId")),
            books: [], // 购物车每个样品的全部信息
            selected: [], // 购物车每个样品是否被选中
            items: [], // 购物车每个样品的数量
            num: 0, // 购物车的样品数量
            userName: "",
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCart = this.handleCart.bind(this);
        this.deleteSelect = this.deleteSelect.bind(this);
    }

    componentDidMount() {
        getCartItems(this.state.user_id, (data) => {
            console.log(data);
            let selected = [], books = [], items = [];
            let num = 0;

            data.forEach(x => {
                books.push(x.item);
                items.push(x.item_num);
                selected.push(false);
                num++;
            })

            this.setState({
                books: books,
                selected: selected,
                items: items,
                num: num
            });
        })
        getUser(this.state.user_id, (user) => {
            this.setState({userName:user.username});
        });
    }

    handleSelect = (id) => {
        let newSelected = this.state.selected;
        newSelected[id] = !newSelected[id];
        this.setState({selected: newSelected});
    }

    handleCart = (num, id) => {
        let items = this.state.items;
        let n = parseInt(num);
        items[id] = n;
        this.setState({items: items});
        updateItemNum(this.state.user_id, this.state.books[id].id, n);
    }

    deleteSelect = () => {
        let newCart = this.state.books;
        let newSelected = this.state.selected;
        let newItems = this.state.items;
        for (let i = newCart.length - 1; i >= 0; i--) {
            if (newSelected[i]) {
                deleteItem(this.state.user_id, this.state.books[i].id);
                newSelected.splice(i, 1);
                newCart.splice(i, 1);
                newItems.splice(i, 1);
            }
        }

        this.setState({
            num: newCart.length,
            books: newCart,
            selected: newSelected,
            items: newItems,
        });
    }

    getPermission = (idx) => {
        return (this.state.books[idx].inventory > 0);
    }

    linkToPayment = () => {
        let search = "";
        let flag = true;
        for (let i = 0; i <= this.state.selected.length-1; i++) {
            if (this.state.selected[i]) {
                search += "?id=" +
                    this.state.books[i].id.toString() +
                    "@" +
                    this.state.items[i].toString() +
                    "&";
                if (!this.getPermission(i)) {
                    flag = false;
                }
            }
        }
        if (search === "") return <img src={URL3} className="cart-button-checkout" alt="checkout" onClick={()=>this.wrongAlert2()} />;
        if (flag)
            return (
                <Link to={{
                    pathname: "/confirm",
                    search: search,
                }}
                      target="_blank"
                >
                    <img src={URL3} className="cart-button-checkout" alt="checkout" />
                </Link>
            );
        else return (
            <img src={URL3} className="cart-button-checkout" alt="checkout" onClick={()=>this.wrongAlert()} />
        )
    }

    wrongAlert = () => {
        alert("Stock not enough!");
    }

    wrongAlert2 = () => {
        alert("Please select the book you want to buy!");
    }

    Heading = () => {
        return (
            <h1 id="encabezado__cursos">Shopping Cart</h1>
        )
    }

    ContentRight3 = () => {
        return (
            <div className="ContentRight3">
                {this.linkToPayment()}
                <img src={URL2} className="detail-button-cart-delete" alt="add_to_cart" onClick={()=>this.deleteSelect()} />
            </div>
        )
    }

    text_gray = (e) => {
        if (e > 0) return (
            <h4 className="text-gray">
                Available
            </h4>
        )
        else return (
            <h4 className="text-gray">
                NOT Available
            </h4>
        )
    }

    Last = () => {
        const src = this.state.books.map((item, idx) => {
            return (
                <tr className="border-t">
                    <td className="cart-item-image">
                        <img src={item.image} className="imagen__curso cart-image" alt="" />
                    </td>
                    <td colSpan="2" className="cart-item-description">
                        <h4 className="text-xl">
                            {item.name}
                        </h4>
                        <h4 className="text-l">
                            {item.author}
                        </h4>
                        {this.text_gray(item.inventory)}
                    </td>
                    <td className="cart-item-addsub">
                        <AddSub
                            idx={idx}
                            num={this.state.items[idx]}
                            setNum={this.handleCart}
                            max={this.state.books[idx].inventory}
                            lock={!this.getPermission(idx)}
                        />
                    </td>
                    <td className="cart-item-price">
                        <h4 className="text-xl-light">
                            ${item.dollar}.{item.cent}
                        </h4>
                    </td>
                    <td className="cart-item-choose">
                        <input
                            checked = {this.state.selected[idx]}
                            type="checkbox"
                            onChange = {() => this.handleSelect(idx)}
                            className="no-margin-top"
                        />
                    </td>
                </tr>
            )
        });
        return(
            <div className="ContentDown3">
                <h4 className="cart_user">Hi, {this.state.userName}!</h4>
                <table id="cart-detail">
                    <thead className="cart_head">
                        <tr className="lg:table-row">
                            <th colSpan="3">Item</th>
                            <th className="px-2">Qty</th>
                            <th className="px-2">Price</th>
                            <th>{"\xa0"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {src}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
            <div id="lista-cursos2" className="margin-top">
                {this.Heading()}
                {this.ContentRight3()}
                {this.Last()}
            </div>
        );
    }
}

export default CartCardContainer;