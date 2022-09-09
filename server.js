'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const mongoose = require('mongoose'); // 0 - import mongoose

const server = express();

server.use(cors()); //make my server open for any request
server.use(express.json());

//IP : http://localhost:PORT

const PORT = process.env.PORT;

// const mongoURL = process.env.MONGO
// // mongoose config
// mongoose.connect(`${mongoURL}`, { useNewUrlParser: true, useUnifiedTopology: true }); // 1 - connect mongoose with DB (301d35-books)

// const bookSchema = new mongoose.Schema({ //define the schema (structure)
//   title: String,
//   description: String,
//   status: String
// });

// const BookModel = mongoose.model('Book', bookSchema); //compile the schema into a model

//seed data (insert initial data)

// async function seedData() {


//   await firstBook.save();
//   await secondBook.save();
//   await thirdBook.save();
// }

// seedData();

//Routes
server.get('/', homeHandler);
server.get('/test', testHandler);
server.get('*', defualtHandler);
server.get('/news', getNews)

// http://localhost:3000/
function homeHandler(req, res) {
  res.send("Hi from the home route");
}

// http://localhost:3000/test
function testHandler(req, res) {
  res.status(200).send("You are requesting the test route");
}

// http://localhost:3000/*
function defualtHandler(req, res) {
  res.status(404).send("Sorry, Page not found");
}

// listener
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

function getNews() {

  const news = new News(NewYorktimes, AP, TheGuardian)

}

let NewYorktimes = function getNewYorktimes() {

}

let AP = function getAP() {

}

let TheGuardian = function getTheGuardian() {

}

class news {
  constructor(NewYorktimes, AP, TheGuardian) {
    this.NewYorktimes = NewYorktimes;
    this.AP = AP;
    this.TheGuardian = TheGuardian;
  }
}