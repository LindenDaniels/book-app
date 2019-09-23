import React from 'react';
import './App.css';

import BookList from './bookList/bookList';
import BookSearch from './bookSearch/bookSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBook: [],
      showBookList: false;
    }; 
  }
  render() {
    const searchResults = this.state.showBookList ? <Placeholder /> : <BookList singlebook = {this.state.singleBook} />;
  return (
    <main className='App'>
      <BookSearch />
      {searchResults}
    </main>
  );
}

export default App;