import React from 'react';
import '../css/carousel.css';

class Carousel extends React.Component {
    carousel = () => {
        return (
            <div className="carousel margin-top">
                <div id="ppt">
                    <img src={require("../assets/carousel/slide-1-2.jpg")} className="new-carousel" alt="book1"/>
                    <img src={require("../assets/carousel/slide-2-2.jpg")} className="new-carousel" alt="book2"/>
                    <img src={require("../assets/carousel/slide-3-2.jpg")} className="new-carousel" alt="book3"/>
                    <img src={require("../assets/carousel/slide-1-2.jpg")} className="new-carousel" alt="book1"/>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.carousel()}
            </div>
        );
    }
}

export default Carousel;