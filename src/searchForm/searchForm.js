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
                      
                      <div className="searchform__buttons">
                      <button type="submit" onClick={e => this.props.showForm(true)}>Search</button>
                      </div>
                </form>
            </div>
        )
    }
}

    export default SearchForm;