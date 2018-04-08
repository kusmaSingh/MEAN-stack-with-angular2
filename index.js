const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database.js')
const path = require('path');
mongoose.promise = global.promise;
//creating database connection
mongoose.connect(config.uri, (err)=>{
  if(err){
  console.log("could not connect database  : "+err);
  }
  else{
    console.log("connect to database : "+  "\n  secret key: " + config.secret + " \n database name :" + config.db)
  }
});
app.use(express.static(__dirname + '/client/dist'))
app.get('*', (req, res)=>{
  res.send('<h1>Hello Kusma Singh :) </h>');
});

app.listen(8080, ()=>{
  console.log("running server at 8080 port..");
});
