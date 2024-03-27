import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {saveUser} from "../services/UserService";
import {history} from "../utils/history";
import {linkToNoCallback} from "../services/LoginService";
import URL3 from "../assets/submit.png";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            address: '',
            address2: '',
            address3: '',
            email: '',
            email2: [],
            emailAmount: 1,
            message: [],
            password2: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleEmail2 = this.handleEmail2.bind(this);
        this.handlePassword2 = this.handlePassword2.bind(this);
    }

    handleUsername = (e) => {
        let newAddress = e.target.value;
        this.setState({username: newAddress});
    }

    handlePassword = (e) => {
        let newAddress = e.target.value;
        this.setState({password: newAddress});
    }

    handlePassword2 = (e) => {
        let newAddress = e.target.value;
        this.setState({password2: newAddress});
    }

    handleAddress = (e) => {
        let newAddress = e.target.value;
        this.setState({address: newAddress});
    }

    handleAddress2 = (e) => {
        let newAddress = e.target.value;
        this.setState({address2: newAddress});
    }

    handleAddress3 = (e) => {
        let newAddress = e.target.value;
        this.setState({address3: newAddress});
    }

    handleEmail = (e) => {
        let newAddress = e.target.value;
        this.setState({email: newAddress});
    }

    handleEmail2 = (e) => {
        let newAddress = e.target.value;
        this.setState({email2: newAddress});
        this.setState({emailAmount: 2});
        if (e.target.value === '') this.setState({emailAmount: 1});
    }

    onClick = () => {
        linkToNoCallback(this.state.username, this.state.password, (msg) => {
            this.setState({message: msg}, () => {
                if (this.state.username === '') {
                    alert("Please enter your username.");
                }
                else if (this.state.address === '') {
                    alert("Please enter your street address.");
                }
                else {
                    let t = this.state.email.indexOf("@");
                    if (t === -1 || t === 0 || t === this.state.email.length-1) {
                        alert("Incorrect email.");
                    }
                    else {
                        if (this.state.message !== "User not found") {
                            alert("The proposed username is already taken!");
                        } else {
                            if (this.state.password2 !== this.state.password) {
                                alert("The two passwords are not consistent with each other!");
                            } else {
                                if (this.state.password.length >= 4) {
                                    if (this.state.emailAmount === 2) {
                                        saveUser(
                                            this.state.username,
                                            this.state.password,
                                            this.state.address + this.state.address2 + this.state.address3,
                                            [this.state.email, this.state.email2]
                                        );
                                    } else {
                                        saveUser(
                                            this.state.username,
                                            this.state.password,
                                            this.state.address + this.state.address2 + this.state.address3,
                                            this.state.email
                                        );
                                    }
                                    history.push("/login");
                                    history.go(0);
                                } else {
                                    alert("Password requires at least 4 characters!");
                                }
                            }
                        }
                    }
                }
            });
        })
    }

    render() {
        return (
            <div className="container background-color width">
                <div className="row">
                    <div id="form">
                        <form>
                            <h3>Create an Account</h3>
                            <br/>
                            <div className="register-color">
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    required
                                    onChange={this.handleUsername}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="At least 4 characters"
                                    required
                                    onChange={this.handlePassword}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Password Confirmation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                    onChange={this.handlePassword2}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="In case we want to reach you"
                                    required
                                    onChange={this.handleEmail}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="aphone">Alternative Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="aphone"
                                    name="aphone"
                                    placeholder="Optional"
                                    onChange={this.handleEmail2}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Street Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="To receive your order"
                                    required
                                    onChange={this.handleAddress}
                                />
                                <br/>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address1"
                                    name="address1"
                                    placeholder="In case your address doesn't fit in one line"
                                    onChange={this.handleAddress2}
                                />
                                <br/>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    name="address2"
                                    placeholder="In case your address doesn't fit in two lines"
                                    onChange={this.handleAddress3}
                                />
                                </div>
                            </div>
                        </form>
                        {/*<button id="place_order" onClick={this.onClick}>Submit</button>*/}
                        <img src={URL3} className="register-button-submit" alt="submit" onClick={this.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;