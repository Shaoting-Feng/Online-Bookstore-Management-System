import React from 'react';
import '../css/adminUser.css';
import {getUsers} from "../services/UserService";
import {getOrders} from "../services/OrderService";
import URL from "../assets/user_statistics.png";

class ViewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            editedData: [],
            startDate: "2022-02-14",
            endDate: "2023-07-09",
            orders: [],
            finalData: []
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.calculateOrder = this.calculateOrder.bind(this);
    }

    componentDidMount() {
        getUsers((users) => {
            this.setState(
                {data: users, editedData: users},
                () => {
                    getOrders((data) => {
                        this.setState(
                            {orders: data, finalData: data,},
                            () => {this.calculateOrder();}
                        );}
                    )
                }
            );
        });
    }

    handleStart = (e) => {
        this.setState({startDate: e.target.value});
        let tempData = [];
        this.state.orders.map((item, idx) => {
            if (item.time >= e.target.value && item.time <= this.state.endDate) {
                tempData.push(item);
            }
        });
        this.setState({finalData: tempData}, () => {
            this.calculateOrder();
        });
    }

    handleEnd = (e) => {
        this.setState({endDate: e.target.value});
        let tempData = [];
        this.state.orders.map((item, idx) => {
            console.log(item);
            if (item.time <= e.target.value && item.time >= this.state.startDate) {
                tempData.push(item);
            }
        });
        this.setState({finalData: tempData}, () => {
            this.calculateOrder();
        });
    }

    calculateOrder = () => {
        let tempSales = [];
        const src = this.state.finalData.map((item, idx) => {
            const src2 = item.orderItems.map((i, idx) => {
                if (!tempSales[item.userId]) tempSales[item.userId] = i.item_num * (i.dollar + 0.01 * i.cent);
                else tempSales[item.userId] += i.item_num * (i.dollar + 0.01 * i.cent);
            });
        });

        let data = this.state.data;
        data.map((item, idx) => {
            if (!tempSales[item.id]) item.new = 0;
            else item.new = tempSales[item.id].toFixed(2);
            console.log(item);
        });

        console.log(data);

        data.sort(function (a, b) {
            return a.new-b.new < 0 ? 1 : -1;
        });

        let users = [];
        data.forEach(x => {
            if (x.ident === true) {
                users.push([x.id.toString(), x.username, x.address, "administrator", x.new.toString()]);
            } else {
                users.push([x.id.toString(), x.username, x.address, "user", x.new.toString()]);
            }
        });

        this.setState(
            {editedData: users},
        );
    }

    renderTable = () => {
        let headers = ["Ranking","User Id","Name","Type","Spending"];
        const src = this.state.editedData.map((row, rowidx) => {
            let type = "";
            if (rowidx % 2 === 0) type = "table_white";
            else type = "table_gray";
            return (
                <tr key={rowidx} className={type}>
                    <td key={0} data-row={rowidx} className="table_text">{rowidx+1}</td>
                    <td key={1} data-row={rowidx} className="table_text">{row[0]}</td>
                    <td key={2} data-row={rowidx} className="table_text">{row[1]}</td>
                    <td key={3} data-row={rowidx} className="table_text">{row[3]}</td>
                    <td key={4} data-row={rowidx} className="table_text">{row[4]}</td>
                </tr>
            );
        });
        return(
            <table className="table_position">
                <thead>
                <tr>{
                    headers.map(function (title, idx) {
                        return <th key={idx} className="table_head">{title}</th>;
                    }, this)
                }</tr>
                </thead>
                <tbody>
                    {src}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div id="lista-cursos" className="margin-top">
                <img src={URL} alt="User Statistics" className="user_statistics_img" />

                <div className="date_user_statistics">
                    Start Date <input type="date" onChange={this.handleStart} value={this.state.startDate} />
                    {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}-
                    {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                    End Date <input type="date" onChange={this.handleEnd} value={this.state.endDate} />
                </div>

                {this.renderTable()}
            </div>
        );
    }
}

export default ViewUser;