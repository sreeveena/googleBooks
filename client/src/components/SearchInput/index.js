import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    return (
      <div
        style={{ height: 175, clear: "both", paddingTop: 20, paddingLeft: 20, paddingRight:20}}
        className="search-input"
      >
        <h3> Book Search</h3>
        <h6> Book</h6>
        <input type="text" id="query" className="text" placeholder="Search for a book" />
        <button type="submit" className="search-button btn btn-primary" onClick={()=>{this.props.cb(document.getElementById("query").value)}}>Search</button>
      </div>
    );
  }
  
}

export default SearchInput;
