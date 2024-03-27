import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import LogoURL from '../assets/logo3.png';
import {online} from "../services/LoginService";
import {history} from "../utils/history";

class AdminNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: parseInt(localStorage.getItem("userId")),
            css1: "admin_mid_container",
            css2: "mid_container_B",
            css3: "statistics-book",
            css4: "statistics-user",
        }
    }

    componentDidMount() {
        if (this.props.left === 1) {
            this.setState({css1: "admin_mid_container-left"});
            this.setState({css2: "mid_container_B-left"});
            this.setState({css3: "statistics-book-left"});
            this.setState({css4: "statistics-user-left"});
        }
    }

    myMouseOver = () => {
        const t=document.getElementById('mid_container_A');
        t.style.display="block";
    };

    myMouseOut = () => {
        const t=document.getElementById('mid_container_A');
        t.style.display="none";
    };

    myMouseOver_B = () => {
        const t=document.getElementById('mid_container_B');
        t.style.display="block";
    };

    myMouseOut_B = () => {
        const t=document.getElementById('mid_container_B');
        t.style.display="none";
    };

    backHome = () => {
        history.push("/admin")
        history.go(0);
    };

    signOut = () => {
        localStorage.clear();
        history.go(0);
    }

    AdminOrder = () => {
        history.push("/adminOrder");
        history.go(0);
    }

    AdminUser = () => {
        history.push("/adminUser");
        history.go(0);
    }

    ViewStatistics = () => {
        history.push("/statistics")
        history.go(0);
    }

    ViewUsers = () => {
        history.push("/viewUser")
        history.go(0);
    }

    render() {
        online();
        return (
            <nav className="navbar navbar-expand-lg" id="fixed">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" >
                            <img src={LogoURL} alt="logo" onClick={this.backHome} className="hand_cursor logo"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav navbar-right" id="no-float2">
                            <li className="nav-item nav-item_Admin">
                                <a className="nav-link hand_cursor nav-link_Admin"
                                   onMouseOver={this.myMouseOver_B}
                                   onMouseOut={this.myMouseOut_B}
                                >Admin</a>
                            </li>
                            <li className="nav-item nav-item_Statistics">
                                <a className="nav-link hand_cursor nav-link_Statistics"
                                   onMouseOver={this.myMouseOver}
                                   onMouseOut={this.myMouseOut}
                                >Statistics</a>
                            </li>
                            <li className="nav-item nav-item_Sign">
                                <a className="nav-link hand_cursor nav-link_Sign"
                                   onClick={()=>this.signOut()}
                                >Sign out</a>
                            </li>
                        </ul>
                        <div id="mid_container_A" className={this.state.css1}
                             onMouseOver={this.myMouseOver}
                             onMouseOut={this.myMouseOut}
                        >
                            <div id="mid_A_2" className={this.state.css3} onClick={this.ViewStatistics}>
                                <a className="nav-link hand_cursor A_top">Books</a>
                            </div>
                            <div id="mid_A_3" className={this.state.css4} onClick={this.ViewUsers}>
                                <a className="nav-link hand_cursor A_rest">Users</a>
                            </div>
                        </div>
                        <div id="mid_container_B" className={this.state.css2}
                             onMouseOver={this.myMouseOver_B}
                             onMouseOut={this.myMouseOut_B}
                        >
                            <div id="mid_A_2" className="mid admin_mid2" onClick={this.AdminOrder}>
                                <a className="nav-link hand_cursor B_top">Orders</a>
                            </div>
                            <div id="mid_A_3" className="mid mid2" onClick={this.backHome}>
                                <a className="nav-link hand_cursor B_rest">Books</a>
                            </div>
                            <div id="mid_A_3" className="mid mid2" onClick={this.AdminUser}>
                                <a className="nav-link hand_cursor B_rest">Users</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AdminNavBar;
