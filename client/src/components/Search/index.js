import React, { Component } from "react";
import "../../App.css";
import Card from "../Card";
import CardList from "../CardList";
import API from "../../scripts/api";
import Button from "../Button";
import SearchInput from "../SearchInput";
import Footer from "../Footer";

const background = {
  backgroundImage: "url('https://i.imgur.com/UP2Hz0a.jpg')",
  backgroundSize: 'cover',
  color: 'white'
}

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
      title: '',
      authors: '',
      description: ''

    };
  }
  componentDidMount() {
    this.searchBook("Harry potter");
    console.log(this.state.books);
  }
  searchBook = (query) => {
    API.getBook(query)
      .then((res) => {

        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.searchBook('Harry potter');
    this.printState(event);
  }

  printState(event) {
    event.preventDefault();
    console.log(this.state);
    console.log(this.state.books[0].volumeInfo.imageLinks.thumbnail);
  }

  render() {
    return (
      <>
      <div style = {background}>
      <SearchInput cb={this.searchBook}/>
      <div className="search-results">
        <h4 style={{paddingTop: 5, paddingLeft: 5}}>Results</h4>
        <div className="card-dis">
          {this.state.books.length ? (
            <CardList>
              {this.state.books.map(book => (
                <div>
                  <Card bid={book.id} link={book.volumeInfo.previewLink} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"} title={book.volumeInfo.title} authors={book.volumeInfo.authors} />
                </div>
              ))}
            </CardList>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
      <Footer />
      </div>
      </>
    )
  }
}


export default Search;
