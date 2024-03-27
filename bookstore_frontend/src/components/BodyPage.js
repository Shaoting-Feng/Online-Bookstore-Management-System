import React from 'react';
import NavBar from './NavBar';
import Carousel from '../components/Carousel';
import CartCardContainer from "./CartCardContainer";
import OrderCardContainer from "./OrderCardContainer";
import FilterProductTable from "./FilterProductTable";
import BestSeller from "./BestSeller";
import URL from "../assets/statistical-info.png";

class BodyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        };
    }
    item = () => {
        switch (this.state.page) {
            case 0: return (
                <div>
                    <NavBar left={0} />
                    <Carousel />
                    <img src={URL} alt="statistical_info" className="statistical-info" />
                    <BestSeller admin={0} />
                </div>
            );
            case 1: return (
                <div>
                    <NavBar left={0} />
                    <CartCardContainer />
                </div>
            );
            case 2: return (
                <div>
                    <NavBar left={0} />
                    <OrderCardContainer admin = {0} />
                </div>
            );
            case 3: return (
                <div>
                    <NavBar left={0} />
                    <FilterProductTable admin = {0} />
                </div>
            );
            default: return null;
        }
    }
    render() {
        return (
            <div>
                {this.item()}
            </div>
        )
    }
}

export default BodyPage;