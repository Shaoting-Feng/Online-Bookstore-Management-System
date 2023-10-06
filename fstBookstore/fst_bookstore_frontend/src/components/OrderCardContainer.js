import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/cart.css';
import '../css/checkbox.css';
import {getOrders, getOrdersByUserId} from "../services/OrderService";
import OutOrderCard from "./OutOrderCard";
import SearchBar from "./SearchBar";
import URL from "../assets/orders.png";

class OrderCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: parseInt(localStorage.getItem("userId")),
            orders: [],
            filterText: '',
            editedDataBySearch: [],
            finalData: [],
            startDate: '',
            endDate: ''
        };
        this.handleData = this.handleData.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }

    handleData = (searchData) => {
        this.setState({editedDataBySearch: searchData});
        let tempData = [];
        searchData.map((item, idx) => {
            if (item.time >= this.state.startDate && item.time <= this.state.endDate) {
                tempData.push(item);
            }
        });
        this.setState({finalData: tempData});
    }

    handleStart = (e) => {
        this.setState({startDate: e.target.value});
        let tempData = [];
        this.state.editedDataBySearch.map((item, idx) => {
            if (item.time >= e.target.value && item.time <= this.state.endDate) {
                tempData.push(item);
            }
        });
        this.setState({finalData: tempData});
    }

    handleEnd = (e) => {
        this.setState({endDate: e.target.value});
        let tempData = [];
        this.state.editedDataBySearch.map((item, idx) => {
            if (item.time <= e.target.value && item.time >= this.state.startDate) {
                tempData.push(item);
            }
        });
        this.setState({finalData: tempData});
        console.log(tempData)
    }

    componentDidMount() {
        if (this.props.admin === 0) {
            getOrdersByUserId(this.state.userId, (data) => {
                this.setState({
                    orders: data,
                    editedDataBySearch: data,
                    finalData: data,
                })
            });
        }
        else {
            getOrders((data) => {
                this.setState({
                    orders: data,
                    editedDataBySearch: data,
                    finalData: data,
                })
            });
        }
        this.setState({
            startDate: "2022-02-14",
            endDate: "2023-07-09"
        });
    }

    Heading = () => {
        return (
            <h1 id="encabezado__cursos">Orders</h1>
        )
    }

    Last = () => {
        const src = this.state.finalData.map((item, idx) => {
            return (
                <OutOrderCard bought={item.orderItems} time={item.time} id={item.id} userId={item.userId} />
            )
        });
        return(
            <div className="ContentDown2" id="last-margin">
                <div className="fst_cursos__container">
                    {src}
                </div>
            </div>
        )
    }

    search = (needle, row) => {
        const src = row.orderItems.map((item, idx) => {
            if (idx === 0) {
                row.new = item.name;
            }
            else row.new = row.new + item.name;
        });
        return row.new.toString().toLowerCase().indexOf(needle) > -1;
    }

    render() {
        return (
            <div id="lista-cursos" className="margin-top">
                <img src={URL} alt="User Statistics" className="orders_img" />
                <SearchBar
                    data={this.state.orders}
                    search={this.search}
                    update={this.handleData}
                />

                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                Start Date <input type="date" onChange={this.handleStart} value={this.state.startDate} />
                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}-
                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                End Date <input type="date" onChange={this.handleEnd} value={this.state.endDate} />

                <table className="orders-detail"  id="order-width">
                    <thead className="cart_head">
                    <tr className="lg:table-row">
                        <th colSpan="3" id="padding-item">Item</th>
                        <th className="px-2" id="padding-price">Price</th>
                        <th className="px-2" id="padding-Qty">Qty</th>
                    </tr>
                    </thead>
                </table>

                {this.Last()}
            </div>
        );
    }
}

export default OrderCardContainer;