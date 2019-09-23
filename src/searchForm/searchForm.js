import React, { Component } from 'react';
import './searchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            printType: 'all',
            bookType: 'no filter'
        };
    }
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
                      <select value={this.state.printType}>
                          <option value="all">All</option>
                          <option value="previewable">Previewable Only</option>
                          <option value="fulltext">Full Text Only</option>
                      </select>
                      <select value={this.state.bookType}>
                          <option value="nofilter">No Filter</option>
                          <option value="ebooks">Ebooks</option>
                          <option value="free-ebooks">Free eBooks</option>
                          <option value="paid-ebooks">Paid Ebooks</option>  
                      </select>
                      <div className="searchform__buttons">
                      <button type="submit">Search</button>
                      </div>
                </form>
            </div>
        )
    }
}