import React from 'react';
import '../css/adminUser.css';
import {forbidUser, getUsers} from "../services/UserService";
import URL from "../assets/user_admin.png";

class AdminUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], // 购物车每个样品的全部信息
            selected: [], // 购物车每个样品是否被选中
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        getUsers((data) => {
            console.log(data);
            let selected = [], users = [];

            data.forEach(x => {
                if (x.ident === true) {
                    users.push([x.id, x.username, x.address, "administrator", null]);
                }
                else {
                    users.push([x.id, x.username, x.address, "user", null]);
                }
                selected.push(x.forbidden);
            })

            this.setState({
                users: users,
                selected: selected,
            });
        })

    }

    handleSelect = (id) => {
        let newSelected = this.state.selected;
        newSelected[id] = !newSelected[id];
        this.setState({selected: newSelected});
        forbidUser(id+1, newSelected[id]);
        console.log(id+1);
    }

    renderTable = () => {
        let headers = ["User Id","Name","Address","Type","Forbidden"];
        return (
            <table className="table_position">
                <thead>
                <tr>{
                    headers.map(function (title, idx) {
                        return <th key={idx} className="table_head">{title}</th>;
                    }, this)
                }</tr>
                </thead>
                <tbody>
                {this.state.users.map(function (row, rowidx) {
                    let type = "";
                    if (rowidx % 2 === 0) type = "table_white";
                    else type = "table_gray";
                    return (
                        <tr key={rowidx} className={type}>{
                            row.map(function (cell, idx) {
                                if (idx !== 4) {
                                    return <td key={idx} data-row={rowidx} className="table_text">{cell}</td>;
                                }
                                else {
                                    return<td key={idx} data-row={rowidx} className="table_text">
                                            <input
                                                checked = {this.state.selected[rowidx]}
                                                type="checkbox"
                                                onChange = {() => this.handleSelect(rowidx)}
                                            />
                                        </td>;
                                }
                            }, this)}
                        </tr>
                    );
                }, this)}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div id="lista-cursos" className="margin-top">
                <img src={URL} alt="User Statistics" className="user_statistics_img" />
                {this.renderTable()}
            </div>
        );
    }
}

export default AdminUser;