import React, { Component } from 'react';
import './App.css';

import BookList from './bookList/bookList';
import SearchForm from './searchForm/searchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filters: [],
      showBookList: false,
      selected: null
    }; 
  }



  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer",
        "Content-Type": "application/json",
        
        
      }
    };
    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      const books = Object.keys(data).map(key => data[key.item[0]]);
      this.setState({
        books,
        error: null
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }
  setFilter(filter) {
    this.setState({
      filter
    });
  }
  
  setShowBookList(show) {
    this.setState({
      showBookList: show
    });
  }

  searchBooks(books, show) {
    this.setState({
      books: [...this.state.books, books],
      showBookList: show
    })
  }
  render() {
    const results = this.state.showBookList 
          ? <SearchForm /> 
          : <React.Fragment>
            <SearchForm
            filter={this.state.selected}
            showForm={show => this.setShowBookList(show)} /> 
            <BookList
              books={this.state.books} />
            </React.Fragment>;
  
            return (
    <div className='App'>
      {results} 
    </div>
  );
 }
}

export default App;