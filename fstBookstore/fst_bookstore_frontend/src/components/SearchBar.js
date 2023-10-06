import React from 'react';
import '../css/bootstrap.css';
import '../css/style.css';

class SearchBar extends React.Component {
    search = (e) => {
        let needle = e.target.value.toLowerCase();
        let searchData = this.props.data.filter(this.props.search.bind(this, needle));
        this.props.update(searchData);
    };

    render () {
        return (
            <form className="example">
                <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={this.search}
                />
            </form>
        );
    }
}

export default SearchBar;