import React from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

class SearchBarContainer extends React.Component {
  booksFromServer = [];

  constructor(props) {
    super();

    this.state = {
      searchTerm: "",
      books: ""
    };
    axios.get(`${process.env.REACT_APP_API_URL}/reviews`).then(res => {
      let reviewsAll = res.data.reviews;
      reviewsAll.forEach(review => {
        this.booksFromServer.push(review.title);
      });
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    let found = [];
    if (searchTerm.length > 0) {
      window.location.href = `/show/${searchTerm}`;
    }
    if (found.length > 0) {
      this.setState({ matchReviews: found });
    } else {
    }
  };

  handleInput = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      searchTerm: value
    });

    let found = this.booksFromServer.filter(function(item) {
      return item.toLowerCase().includes(value.toLowerCase());
    });
    let optionElements = [];
    found.forEach(book => {
      optionElements.push(<option key={book}>{book}</option>);
    });
    this.setState({ books: optionElements });
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <SearchBar
          inputType={"text"}
          name={"name"}
          value={this.state.reviews}
          placeholder={"Search by Book Title"}
          handleChange={this.handleInput}
          books={this.state.books}
        />
      </form>
    );
    //  }
  }
}

export default SearchBarContainer;
