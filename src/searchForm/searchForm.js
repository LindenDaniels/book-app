import React, { Component } from 'react';
import './searchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: '',
            filter: '',
            printType: 'all'
             
        };
    }
    setFilter(filter) {
        this.setState({
          filter: this.state.filter
        });
    render() {
        return (
            <div className="searchform">
                <form className="searchform__form">
                    <label htmlFor="search">Search:</label>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search" />
                      <select value={this.state.filter}>
                          <option value="partial">Partial</option>
                          <option value="fullt">Full</option>
                          <option value="nofilter">No Filter</option>
                          <option value="ebooks">Ebooks</option>
                          <option value="free-ebooks">Free EBooks</option>
                          <option value="paid-ebooks">Paid Ebooks</option>  
                      </select>
                      <select value={this.state.printType}>
                          <option value="all">All</option>
                          <option value="books">Books</option>
                          <option value="magazines">Magazines</option>
                      </select>
                      <div className="searchform__buttons">
                      <button type="submit" onClick={e => this.props.showForm(true)}>Search</button>
                      </div>
                </form>
            </div>
        )
    }
}
    export default SearchForm;