import React, { Component } from 'react';
import './App.css';

import BookList from './bookList/bookList';
import SearchForm from './searchForm/searchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBook: [],
      showBookList: true
    }; 
  }
  render() {
    //const searchResults = this.state.showBookList ? <Placeholder /> : <BookList singlebook = {this.state.singleBook} />;
  return (
    <div className='App'>
      <SearchForm />
      
      
    </div>
  );
}
}

export default App;