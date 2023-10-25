// FileName: index.js
// Import express
let express = require('express');
let bodyParser = require('body-parser');
var mongoose = require('mongoose');
let PersonModel = require('/Users/archijain/resthub/personModel');
let orderModel = require('/Users/archijain/resthub/orderModel');
// Initialize the app
let app = express();

app.use(bodyParser.urlencoded({
     extended: true
  }));
app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8082;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
     // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
     //res.setHeader("Access-Control-Allow-Origin", "http://localhost:8082/getAgeName");
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept"
     );
     next();
 });

app.get('/getAgeName', function (req, res) {
     res.json({
          age: req.query.age,
          name: req.query.name
     });
 });

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

// Send message for default URL
//API made by get api
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon11'));

app.get('/getAge', function (req, res) {
     //console.log("India");
     console.log(req.query.country);//to print on terminal(server)
     res.json({
          age: 21,
          name: "Archi",
          city: "Indore",
          country: req.query.country//to take i/p from client and show that in response(o/p)
     });
 });

// http://localhost:8081/getAgeName?age=18&name=Archi
//  app.get('/getAgeName', function (req, res) {
//      res.json({
//           age: req.query.age,
//           name: req.query.name
//      });
//  });

// http://localhost:8081/getAgeAndName/20/Amey
 app.get('/getAgeAndName/:age/:name', function (req, res) {
     res.json({
          age: req.params.age,
          name: req.params.name
     });
 });

//http://localhost:8082/getAge
 app.post('/getAge', function (req, res) {
     res.json({
          age: 25,
          name: req.body.name,
          city: req.body.city,
          country: req.body.country
     });
 });

 //http://localhost:8081/getSum
 app.post('/getSum', function (req, res) {
     let sum=req.body.x+req.body.y
     res.json({
          a: req.body.x,
          b: req.body.y,
          sumRes: sum
     });
     
 });

 //connecting api with database using mongo db
 //archidb=database
 //  http://localhost:8082/saveApi1
 mongoose.connect('mongodb://localhost/Archidb', { useNewUrlParser: true});
 var db = mongoose.connection;

 app.post('/saveApi', async function (req, res) {
     var personVar=new PersonModel()
     personVar.Name=req.body.name
     personVar.Age=req.body.age
     await personVar.save()
     res.json({
          message:"Person Details Saved In MondoDB"
     });
 });



//order
// http://localhost:8082/saveApi2
 mongoose.connect('mongodb://localhost/Archidb', { useNewUrlParser: true});
 var db = mongoose.connection;

 app.post('/saveApi2', async function (req, res) {
     var orderVar=new orderModel()
     orderVar.Restaurant=req.body.Restaurant
     orderVar.Name=req.body.Name
     orderVar.DishName=req.body.DishName
     orderVar.ContactNo=req.body.ContactNo
     orderVar.DishQuantity=req.body.DishQuantity
     await orderVar.save()
     res.json({
          message:"Order Placed",
          Restaurant:req.body.Restaurant,
          Name:req.body.Name,
          DishName:req.body.DishName,
          ContactNo:req.body.ContactNo,
          DishQuantity:req.body.DishQuantity
     });
 });