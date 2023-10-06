import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/checkbox.css';
import '../css/cart.css';
import OrderCard from './OrderCard';

class OutOrderCard extends React.Component {
    handleText = () => {
        let text1 = this.props.time.toString();
        let text2 = text1.slice(0, 10);
        let text3 = text1.slice(11,19);
        let text4 = "id: " + this.props.id.toString();
        let text5 = "userId: " + this.props.userId.toString();
        let text6 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        let text = "\xa0" + text2 + "\xa0" + text3 + text6 + text4 + text6 + text5;
        return <p className="fst_curso_text">{text}</p>
    }

    render() {
        let src = this.props.bought.map((i, idx) => {
            return (
                <OrderCard
                    name = {i.name}
                    dollar = {i.dollar}
                    cent = {i.cent}
                    image = {i.image}
                    num={i.item_num}
                />
            )
        })
        return (
            <div className="fst_curso__container leftImgStress">
                {this.handleText()}
                {src}
            </div>
        );
    }
}

export default OutOrderCard;
