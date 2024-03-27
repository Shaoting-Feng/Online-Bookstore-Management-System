import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import {getBook} from "../services/BookService";
import {changeBook} from "../services/BookService";
import {addBook} from "../services/BookService";
import {deleteBook} from "../services/BookService";
import {history} from "../utils/history";
import URL from "../assets/Detail.png";
import URL2 from "../assets/submit.png";
import URL3 from "../assets/delete.png";

class AdminDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.id),
            name: '',
            inventory: '',
            dollar: '',
            cent: '',
            author: '',
            image: '',
            ISBN: '',
            description: '',
        }
        this.handleName = this.handleName.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleInventory = this.handleInventory.bind(this);
        this.handleDollar = this.handleDollar.bind(this);
        this.handleCent = this.handleCent.bind(this);
        this.handleISBN = this.handleISBN.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    componentDidMount() {
        if (this.state.id !== 0) {
            getBook(this.state.id, (data) => {
                console.log(data);
                this.setState({
                    name: data.name,
                    inventory: data.inventory,
                    dollar: data.dollar,
                    cent: data.cent,
                    author: data.author,
                    image: data.image,
                    ISBN: data.isbn,
                    description: data.description
                })
            });
        }
    }

    handleName = (e) => {
        let newName = e.target.value;
        this.setState({name: newName});
    }

    handleAuthor = (e) => {
        let newAuthor = e.target.value;
        this.setState({author: newAuthor});
    }

    handleInventory = (e) => {
        let newInventory = e.target.value;
        this.setState({inventory: newInventory});
    }

    handleDollar = (e) => {
        let newInventory = e.target.value;
        this.setState({dollar: newInventory});
    }

    handleCent = (e) => {
        let newInventory = e.target.value;
        this.setState({cent: newInventory});
    }

    handleISBN = (e) => {
        let newISBN = e.target.value;
        this.setState({ISBN: newISBN});
    }

    handleImage = (e) => {
        let newISBN = e.target.value;
        this.setState({image: newISBN});
    }

    handleDescription = (e) => {
        let newISBN = e.target.value;
        this.setState({description: newISBN});
    }

    onSubmit = () => {
        this.forceUpdate();
        console.log(this.state.name);
        if (this.state.name === '') alert("Please enter the name of the book.");
        else if (this.state.author === '') alert("Please enter the author of the book.");
        else if (this.state.inventory === '') alert("Please enter the inventory of the book.");
        else if (this.state.ISBN === '') alert("Please enter the ISBN of the book.");
        else if (this.state.dollar === '') alert("Please correctly enter the cost of the book.");
        else if (this.state.cent === '') alert("Please correctly enter the cost of the book.");
        else if (this.state.id !== 0) {
            changeBook(
                this.state.id,
                this.state.name,
                this.state.author,
                this.state.image,
                this.state.inventory,
                this.state.ISBN,
                this.state.dollar,
                this.state.cent,
                this.state.description
            );
            alert("Changed Successfully!");
        }
        else {
            addBook(
                this.state.name,
                this.state.author,
                this.state.image,
                this.state.inventory,
                this.state.ISBN,
                this.state.dollar,
                this.state.cent,
                this.state.description
            );
            alert("Added Successfully!");
        }
    }

    onDelete = () => {
        deleteBook(this.state.id);
        history.push("/admin");
        history.go(0);
    }

    deleteButton = () => {
        if (this.state.id !== 0) {
            return (
                <img src={URL3} className="detail-button-buy-now" onClick={this.onDelete} alt="delete" />
            );
        }
    }

    render() {
        return (
            <div className="margin-top">
                <img src={this.state.image} className="detail-img" alt="cover"/>
                <div className="detail-text">
                    <h3 className="detail-name"><input onChange={this.handleName} type="text" value={this.state.name} id="detail-name-input" /></h3>
                    <p className="detail-author-purple"><input onChange={this.handleAuthor} type="text" value={this.state.author} id="detail-author-input" />{"\xa0"}</p>
                    <p className="detail-author-gray">(Author)</p>
                    <div className="detail-button">
                        <img src={URL2} className="detail-button-submit" alt="save" onClick={this.onSubmit} />
                        {this.deleteButton()}
                    </div>
                    <h4 className="detail-description">Description</h4>
                    <p className="detail-description-abstract"><input onChange={this.handleDescription} type="text" value={this.state.description} className="detail-input-description"/></p>
                    <h4 className="detail-description">Product Details</h4>
                    <div className="detail-product-details">
                        <div className="detail-product-price">Dollar</div>
                        <div className="detail-input-div"><input onChange={this.handleDollar} type="text" value={this.state.dollar} id="detail-product-input1" /></div>

                        <div className="detail-product-price">Cent</div>
                        <div className="detail-input-div"><input onChange={this.handleCent} type="text" value={this.state.cent} id="detail-product-input2" /></div>

                        <div className="detail-product-price">Inventory</div>
                        <div className="detail-input-div"><input onChange={this.handleInventory} type="text" value={this.state.inventory} id="detail-product-input3" /></div>

                        <div className="detail-product-price">Image URL</div>
                        <div className="detail-input-div"><input onChange={this.handleImage} type="text" value={this.state.image} id="detail-product-input4" /></div>

                        <div className="detail-product-price">ISBN</div>
                        <div className="detail-product-isbn detail-input-div"><input onChange={this.handleISBN} type="text" value={this.state.ISBN} id="detail-product-input5" /></div>
                    </div>
                    <h4 className="detail-description">Earn by promoting books</h4>
                    <img src={URL} className="detail-earn" alt="earn"/>
                </div>
            </div>
        );
    }
}

export default AdminDetail;