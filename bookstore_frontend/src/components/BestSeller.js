import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {getBooks} from "../services/BookService";
import {getOrders, getOrdersByUserId} from "../services/OrderService";
import URL from "../assets/statistical-info-summary.png";

class BestSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            editedData: [],
            startDate: "2022-02-14",
            endDate: "2022-07-09",
            orders: [],
            finalData: [],
            item: 0,
            order: 0,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.calculateOrder = this.calculateOrder.bind(this);
        this.choose = this.choose.bind(this);
    }

    componentDidMount() {
        getBooks((data) => {
            this.setState(
                {data: data, editedData: data,},
                () => {
                    if (this.props.admin === 1) {
                        getOrders((data) => {
                            this.setState(
                                {orders: data, finalData: data},
                                () => {
                                    this.calculateOrder();
                                }
                            );
                            }
                        )
                    }
                    else {
                        getOrdersByUserId(parseInt(localStorage.getItem("userId")),(data) => {
                            this.setState(
                                {orders: data, finalData: data},
                                () => {
                                    this.calculateOrder();
                                }
                            );
                            }
                        )
                    }
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
        let tempItem = 0;
        let tempOrder = 0;

        const src = this.state.finalData.map((item, idx) => {
            const src2 = item.orderItems.map((i, idx) => {
                if (!tempSales[i.item_id]) tempSales[i.item_id] = i.item_num;
                else tempSales[i.item_id] += i.item_num;
            });
        });

        let data = this.state.data;
        data.map((item, idx) => {
           if (!tempSales[item.id]) item.new = 0;
           else item.new = tempSales[item.id];
        });
        data.sort(function(a, b){return a.new<b.new?1:-1;});
        this.setState({editedData: data});

        const src3 = data.map((row, IDX) => {
            tempItem += row.new;
            tempOrder += row.new*(row.dollar+0.01*row.cent);
        });
        this.setState({item: tempItem});
        this.setState({order:tempOrder});
    }

    sales_purchased = (e) => {
        if (this.props.admin === 1) {
            return (
                <div className="best_seller_name">
                    Sales: {e}
                </div>
            );
        }
        else {
            return (
                <div className="best_seller_name">
                    Purchased: {e}
                </div>
            );
        }
    }

    choose = () => {
        let flag = 0;
        const src = this.state.editedData.map((row, IDX) => {
            if (row.new !== 0) {
                flag = 1;
                return (
                    <div className="best_seller_card">
                        <div className="cover-wrapper">
                            <img
                                src={row.image} alt="cover"
                                className="best_seller_cover"
                            >
                            </img>
                        </div>
                        <div className="best_seller_No">
                            No.{IDX + 1}
                        </div>
                        <div className="best_seller_name">
                            {row.name}
                        </div>
                        {this.sales_purchased(row.new)}
                    </div>
                );
            }
        });
        if (flag === 0 && this.props.admin === 1) {
            return (
                <div className="no_sales_record">No sales record in specified period.</div>
            );
        } else if (flag === 0 && this.props.admin === 0) {
            return (
                <div className="no_sales_record">No purchase record in specified period.</div>
            );
        } else {
            return (
                <div className="best_seller_container">
                    {src}
                </div>
            )
        }
    }

    total = () => {
        if (this.props.admin === 0) {
            return (
                <div>
                    <div className="statistical-info-bottom">
                        <p className="confirm-title-summary">Order Summary</p>
                        <div className="confirm-title-item">
                            <p className="confirm-title-item-total">Item Total</p>
                            <p className="confirm-item">{this.state.item}</p>
                        </div>
                        <div className="confirm-title-item confirm-title-order">
                            <p className="confirm-title-item-total">Order Total</p>
                            <p className="confirm-item">${this.state.order.toFixed(2)}</p>
                        </div>
                    </div>
                    <img src={URL} alt="summary" className="statistical-info-summary" />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div>{"\xa0"}</div>
                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                Start Date <input type="date" onChange={this.handleStart} value={this.state.startDate} />
                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}-
                {"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                End Date <input type="date" onChange={this.handleEnd} value={this.state.endDate} />

                {this.choose()}
                {this.total()}
            </div>
        );
    }
}

export default BestSeller;
