import React, { Component } from 'react';
import Books from '../books/books';

class BookList extends Component {
    render() {
        const books = this.props.books.map((book, i) => <Books { ...book} key={i}/>);
    return (
        <div className="bookList">
            {books}
        </div>
    );
}
}
BookList.defaultProps = {
    bookmarks: []
}

export default BookList;