const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
let detail = require("./models/customerSchema");

app.listen(3000, function() {
    console.log('listening on 3000')
  })
  app.get('/', (req, res) => {
    res.send('Hello World')
  })
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("collection1");
    // dbo.createCollection("customers", function(err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });
  });
  