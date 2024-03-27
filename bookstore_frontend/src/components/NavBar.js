import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import LogoURL from '../assets/logo3.png';
import {online} from "../services/LoginService";
import {history} from "../utils/history";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: parseInt(localStorage.getItem("userId")),
            css: "mid_container2",
        }
    }

    componentDidMount() {
        if (this.props.left === 1) this.setState({css: "mid_container3"});
    }

    myMouseOver = () => {
        const t=document.getElementById('mid_container_A');
        t.style.display="block";
    };
    myMouseOut = () => {
        const t=document.getElementById('mid_container_A');
        t.style.display="none";
    };

    backHome = () => {
        history.push("/")
        history.go(0);
    };

    signOut = () => {
        localStorage.clear();
        history.go(0);
    }

    ViewMore = () => {
        history.push("/?browse")
        history.go(0);
    }

    ViewCart4 = () => {
        history.push("/?cart")
        history.go(0);
    }

    ViewOrder = () => {
        history.push("/?order")
        history.go(0);
    }

    render() {
        online();
        return (
            <nav className="navbar navbar-expand-lg" id="fixed">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <img src={LogoURL} alt="logo" onClick={this.backHome} className="hand_cursor logo"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav navbar-right" id="no-float">
                            <li className="nav-item"><a className="nav-link hand_cursor" onClick={this.ViewMore}>Search</a></li>
                            <li className="nav-item"><a className="nav-link hand_cursor nav-link_Name"
                                                        onMouseOver={this.myMouseOver}
                                                        onMouseOut={this.myMouseOut}
                            >Account</a></li>
                        </ul>
                        <div id="mid_container_A" className={this.state.css}
                             onMouseOver={this.myMouseOver}
                             onMouseOut={this.myMouseOut}
                        >
                            <div id="mid_A_1" className="mid" onClick={this.ViewCart4}>
                                <a className="nav-link hand_cursor B_top">Cart</a>
                            </div>
                            <div id="mid_A_2" className="mid mid2" onClick={this.ViewOrder}>
                                <a className="nav-link hand_cursor B_rest">Order</a>
                            </div>
                            <div id="mid_A_3" className="mid mid2" onClick={()=>this.signOut()}>
                                <a className="nav-link hand_cursor B_rest">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
