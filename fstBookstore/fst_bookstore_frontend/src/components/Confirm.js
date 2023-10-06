import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {saveOrderWithItems} from "../services/OrderService";
import {selectBooks} from "../services/BookService";
import {history} from "../utils/history";
import {getUser} from "../services/UserService"; // 为了获得address
import URL from "../assets/confirm.png";
import URL2 from "../assets/confirm2.png";
import URL3 from "../assets/submit.png";

class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            email: '',
            district: '',
            zip: '',
            id: this.props.id,
            num: this.props.num,
            userId: parseInt(localStorage.getItem("userId")),
            items: [],
            sum: []
        }
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handleDistrict = this.handleDistrict.bind(this);
    }

    componentDidMount() {
        getUser(this.state.userId, (user) => {
            console.log(user);
            selectBooks(this.state.id, (data) => {
                this.setState({address: user.address, items: data, email: user.emails[0]}, () => {
                    let sum = 0, i = 0;
                    for (i = 0; i < this.state.id.length; i++) {
                        sum = sum + this.state.num[i] * (this.state.items[i].dollar+this.state.items[i].cent*0.01);
                    }
                    this.setState({sum: sum.toFixed(2)});
                });
            });
        });
    }

    compute2 = () => {
        let i, sum = 0;
        for (i = 0; i < this.state.id.length; i++) {
            sum = sum + this.state.num[i];
        }
        return(
            <p className="confirm-item">{sum}</p>
        )
    }

    handleAddress = (e) => {
        let newAddress = e.target.value;
        this.setState({address: newAddress});
    }

    handleEmail = (e) => {
        let newAddress = e.target.value;
        this.setState({email: newAddress});
    }

    handleDistrict = (e) => {
        let newAddress = e.target.value;
        this.setState({district: newAddress});
    }

    handleZip = (e) => {
        let newAddress = e.target.value;
        this.setState({zip: newAddress});
    }

    handleSubmit = () => {
        return(
            <img src={URL3} className="confirm-button-submit" alt="checkout" onClick={this.onSubmitOrder} />
        )
    }

    onSubmitOrder = () => {
        if (this.state.address === '') {
            alert("Please enter your street address.")
        }
        else if (this.state.district === '') {
            alert("Please enter your district.")
        }
        else if (this.state.zip === '') {
            alert("Please enter your zip code.")
        }
        else if (this.state.email === '') {
            alert("Please enter your email.")
        }
        else {
            saveOrderWithItems(
                this.state.userId,
                this.state.address,
                this.state.id,
                this.state.num,
                this.state.district,
                this.state.zip,
                this.state.email
            )
            history.push("/?order")
            history.go(0);
        }
    }

    render() {
        return (
            <div className="margin-top">
                <div>
                    <div className="confirm-left">
                        <h3 className="confirm-title-email">Email Address</h3>
                        <input onChange={this.handleEmail} type="text" value={this.state.email} id="confirm-input1" />
                        <h3 className="confirm-title-billing">Shipping Address</h3>
                        <img src={URL2} alt="warn" className="confirm-image2" />
                        <div>
                            <p className="confirm-title-detail">Street Address</p>
                            <p className="confirm-title-detail confirm-title-right">District</p>
                        </div>
                        <div>
                            <input onChange={this.handleAddress} type="text" value={this.state.address} id="confirm-input4" />
                            <input onChange={this.handleDistrict} type="text" value={this.state.district} id="confirm-input5" />
                        </div>
                        <div>
                            <p className="confirm-title-detail">Zip</p>
                            <p className="confirm-title-detail confirm-title-right">City</p>
                        </div>
                        <div>
                            <input onChange={this.handleZip} type="text" value={this.state.zip} id="confirm-input6" />
                            <input type="text" id="confirm-input7" value="Shanghai" disabled="true" />
                        </div>
                    </div>
                    <div className="confirm-right">
                        <p className="confirm-title-summary">Order Summary</p>
                        <div className="confirm-title-item">
                            <p className="confirm-title-item-total">Item Total</p>
                            {this.compute2()}
                        </div>
                        <div className="confirm-title-item confirm-title-order">
                            <p className="confirm-title-item-total">Order Total</p>
                            <p className="confirm-item">${this.state.sum}</p>
                        </div>
                        <img src={URL} alt="raise" className="confirm-image" />
                    </div>
                </div>
                {this.handleSubmit()}
            </div>
        );
    }
}

export default Confirm;
