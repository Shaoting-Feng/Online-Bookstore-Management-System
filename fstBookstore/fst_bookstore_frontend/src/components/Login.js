import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {linkTo} from "../services/LoginService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remember: false,
            name: "",
            password: "",
            message: "",
            user: [],
        };
    }

    handleName = (e) => {
        this.setState({name: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    Message = () => {
        if (this.state.name === '') {
            alert("Please enter your username.");
        }
        else {
            if (this.state.password === '') {
                alert("Please enter your password.");
            }
            else {
                linkTo(this.state.name, this.state.password, (msg) => {
                    this.setState({message: msg});
                })
            }
        }

    }

    renderMessage = () => {
        if (this.state.message !== "") {
            alert(this.state.message);
            this.state.message = "";
        }
        else return null;
    }

    render() {
        return (
            <div id="Container">
                <img src={require("../assets/open book lot.jpg")} className="img-responsive" alt="Background"/>
                <div id="form" className="center-in-center2">
                    <form>
                        <h3 className="littlemargin">Login</h3>
                        <br/>
                        <div className="form-group littlemargin">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                onChange={this.handleName}
                            />
                        </div>

                        <div className="form-group littlemargin">
                            <label htmlFor="phone">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                required
                                onChange={this.handlePassword}
                            />
                        </div>
                    </form>
                    <button className="littlemargin" id="place_order" onClick={this.Message}>LOGIN</button>
                    <p className="littlemargin">
                        or <a className="nav-link2" href="/register">Create a new account</a>
                    </p>
                    {this.renderMessage()}
                </div>
            </div>
        );
    }
}

export default Login;