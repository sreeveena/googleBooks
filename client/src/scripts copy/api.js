const mongoose = require("mongoose");
const axios = require("axios");
const db = require("../models");
const apikey = 'AIzaSyBuXcKW78t3F6lYssaD0pn_tPBUrDg1CTU';

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlesearch"
  );


export default {
    getBook: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+query+"&key="+apikey)
    }
};

