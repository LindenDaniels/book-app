import React, { Component } from React;
import './bookApp.css';
import bookList from '../bookList/Booklist';

class BookApp extends Component {
    render() {
        return (
            <div className = "BookApp">
                
                <h1>Google Book Search</h1>
                <bookSearch />
                <bookList singlebook = {this.props.singlebook} />
            </div>
        );
    }
}

export default BookApp;