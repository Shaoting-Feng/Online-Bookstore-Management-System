import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import SearchBar from "./SearchBar";
import {getBooks} from "../services/BookService";
import {Link} from "react-router-dom";
import URL from "../assets/FilterProductTable.png";
import URL2 from "../assets/add.png";

class FilterProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            data: [],
            editedData: [],
            path: '/detail'
        };
        this.handleData = this.handleData.bind(this);
    }

    handleData = (searchData) => {
        this.setState({editedData: searchData});
        console.log(this.state.editedData);
    }

    componentDidMount() {
        getBooks((data) => {
            this.setState({data: data, editedData: data});
        })
    }

    books = () => {
        let IDX = 0;
        const src = this.state.editedData.map((item, idx) => {
            IDX = idx;
            return (
                <Link to={{
                    pathname: this.state.path,
                    search: '?id=' + (item.id).toString() + '?ident=' + (this.props.admin).toString()
                }}
                      target="_blank"
                      key={idx}
                      id="link-underscore"
                >
                    <div className="best_seller_card text-black">
                        <div className="cover-wrapper">
                            <img
                                src={item.image} alt="cover"
                                className="best_seller_cover2"
                            >
                            </img>
                        </div>
                        <div className="best_seller_No">
                            {item.name}
                        </div>
                        <div className="best_seller_name">
                            {item.author}
                        </div>
                        <div className="best_seller_name">
                            ${item.dollar}.{item.cent}
                        </div>
                    </div>
                </Link>
            );
        })
        if (this.props.admin === 1) {
            src.push(
                <Link to={{
                    pathname: this.state.path,
                    search: '?id=0?ident=' + (this.props.admin).toString()
                }}
                      target="_blank"
                      key={IDX + 1}
                      id="link-underscore"
                >
                    <div className="best_seller_card text-black">
                        <div className="cover-wrapper">
                            <img
                                src={URL2} alt="cover"
                                className="best_seller_cover3"
                            >
                            </img>
                        </div>
                        <div className="best_seller_No">
                            Add a New Book
                        </div>
                    </div>
                </Link>
            );
        }

        return (
            <div className="best_seller_container">
                {src}
            </div>
        )
    }

    search = (needle, row) => {
        return row.name.toString().toLowerCase().indexOf(needle) > -1;
    }

    render() {
        return (
            <div className="margin-top">
                <img src={URL} alt="Best Seller" className="best_seller_image2" />

                <div>{"\xa0"}</div>

                <SearchBar
                    data={this.state.data}
                    search={this.search}
                    update={this.handleData}
                />
                {this.books()}
            </div>
        );
    }
}

export default FilterProductTable;
