import React, { Component } from "react";
import $ from 'jquery';

const cardStyle1 = {
  width: '100px',
  height: '100px'
}
const cardStyle = {
  base:{
    backgroundImage: "url('https://i7.pngguru.com/preview/219/171/634/nappa-leather-goatskin-suede-leather.jpg')",
    marginTop: '1%',
    marginLeft: '.5%',
    marginRight: '.5%',
    marginBottom: '3%',
    height: '80vh',
    width: '15vw',
    float: 'left',
    border: '8px solid #17212C',
    transition: 'all 0.3s',
    ':hover': {
      transform: "translate(0px, -20px)"
    }
  }
}
const imgStyle = {
  base:{
    width: '100%',
    height: '44vh',
    objectFit: 'cover',
  }
}
const textStyle = {
  fontFamily: 'Trade Winds',
  color: 'gold'
}
class SavedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  deleteABook = (id, some) => {
    $.ajax("/books/" + id, {
      type: "DELETE"
    }).then(
    function (dres, derr) {
      console.log("deleted from db" + dres);
      window.location.href="/saved";
    });
  }

  flipCard = (bookid) => {
    if(document.getElementById('front' + bookid).style.transform.includes("rotateY(180deg)")) {
        document.getElementById('front' + bookid).style.transform = "rotateY(0deg)";
        document.getElementById('back' + bookid).style.transform = "rotateY(180deg)";
        } else {
            document.getElementById('back' + bookid).style.transform = "rotateY(0deg)";
            document.getElementById('front' + bookid).style.transform = "rotateY(180deg)";
            
    }
  }

  render() {

    return <div className="card" style = {cardStyle.base}>
      <div className="card-front" id={'front' + this.props.bid } >
          <div className="card-body" onClick={(ev)=> {if(ev.target.tagName != "BUTTON")this.flipCard(this.props.bid)}}>
            <h5 class="card-title">{this.props.title}</h5>
            <p className="card-text">{(this.props.authors) ? this.props.authors.map((author) => (author + " ")) : ""}</p>
            <button type="submit" className="search-button btn btn-primary " onClick={() => { this.deleteABook(this.props.id, this) }}>Delete</button>
            <button type="submit" className="search-button btn btn-primary mr-3" onClick={() => { window.location.href = this.props.link }}>View</button>
          </div>
          <div className="card-image">
            <img onClick={()=> {this.flipCard(this.props.bid)}} style={imgStyle.base} className="card-img-top" src={this.props.image} alt="CardImage"></img>
          </div>
      </div>
      <div className="card-back" id={'back' + this.props.bid } onClick={()=> {this.flipCard(this.props.bid)}} >
        <p className="card-description">{this.props.description}</p>
      </div>
    </div>
  }
}
export default SavedCard;
