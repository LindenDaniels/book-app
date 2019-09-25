import React, { Component } from 'react';
import './bookApp.css';
import BookList from './bookList/bookList';
import SearchForm from './searchForm/searchForm';

class BookApp extends Component {
    render() {
        return (
            <div className = "bookApp">
                <h1>Google Book Search</h1>
                <SearchForm />
                <BookList showForm={this.props.showForm}/>
            </div>
        );
    }
}

export default BookApp;