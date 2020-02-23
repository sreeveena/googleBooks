import React, { Component } from "react";
import "../../App.css";
import Nav from "../Nav";
import Header from "../Header";
import Card from "../Card";
import CardList from "../CardList";
import SavedCard from "../SaveCard";
import Footer from "../Footer";
import $ from 'jquery';

const background = {
  backgroundImage: "url('https://i.imgur.com/UP2Hz0a.jpg')",
  backgroundSize: 'cover',
  color: 'white'
}

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    this.getSavedBooks(this);
  }
  
  getSavedBooks = (some) => {
    $.get("/books",
    function(res, err){
      console.log("fetched from db" + res);
      some.setState({books:res});
    });
  }

  render() {
    return (
      <div style = {background}>
      <div className="saved-results" style = {background}>
        <h4 style={{ paddingTop: 5, paddingLeft: 5 }}>Saved Books</h4>
        <div className="card-dis">
          {this.state.books.length ? (
            <CardList>
              {this.state.books.map(book => (
                <div>
                  <SavedCard bid={book._id} description={book.description} image={book.image} title={book.title} authors={book.authors} link={book.link} id={book._id}/>
                </div>
              ))}
            </CardList>
          ) : (
              <h3>No Saved books to Display</h3>
            )}
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default Saved;
