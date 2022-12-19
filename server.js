const express = require('express');
const app = express();

// express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// connect database with our js
const MongoClient = require('mongoose')

// import schema with js
const{Abc} = require("./models/customerSchema");

// const router = express.Router(); alternative of app=express
app.listen(3000, function() {
    console.log('listening on 3000')
  })


//   just to check if the root folder is operational
  app.get('/', (req, res) => {
    res.send('Hello World')
  })


  var url = "mongodb://localhost:27017/collectionunique";
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

//   MongoClient.connect(url,{ useUnifiedTopology: true },{ useNewUrlParser : true}, function(err, db) {
//     if (err) throw err;
//     else{
//         console.log("no error ")
//     }
//     // });
//   });



//   post the data from postman to database
// async details will be given tommorow
  app.post("/posts", async (req, res) => {
    // collection name is abc
	const detail = new Abc({
		name: req.body.nametwo,
	});
	res.json(await detail.save())
    console.log(detail)

})
  