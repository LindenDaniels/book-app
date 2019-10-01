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

    handleSubmit = e => {
        e.preventDefault()
        const { title, url, description } = e.target
        const book = {
            title: items.volumeInfo.title.value,
            url: url.value,
            description: description.value
        }
        this.setState({error: null})
        const url2 = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer",
        "Content-Type": "application/json",
        
        
      }
    };
    fetch(url2, options)
    .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        items.volumeInfo.title.value = ''
        url.value = ''
        description.value = ''
        
        //this.props.onAddBookmark(data)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

    render() {
        return (
            <div className="searchform">
                <form className="searchform__form"
                      onSubmit = {this.handleSubmit}>
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