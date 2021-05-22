const express = require('express');
//const https = require('https');
const http = require('http');
//const fs = require('fs');
//const bodyParser = require('body-parser');
const app = express()


// your express configuration here
/*
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
var httpsServer = https.createServer(credentials, app);
*/

var httpServer = http.createServer(app);

/*
app.get('/', (req, res) => {
   console.log('http get:' + req.url);
   //console.log('get param=' + req.query.name);
	var content  = fs.readFileSync('html/tv.html', 'utf8');
	//var content  = fs.readFileSync('test-lg-keyboard.html', 'utf8');
	res.set('Access-Control-Allow-Origin: *');
	res.send(content);
});

app.get("/images/*", function(req, res) {
	console.log('get image:' + 'html' + req.url);
	var content  = fs.readFileSync('html' + req.url, '');
	res.send(content);
});

*/
/*
app.get("/images/a-green.png", function(req, res) {
	console.log('get image:' + 'html' + req.url);
	var content  = fs.readFileSync('html' + req.url, '');
	res.send(content);
});
app.get("/images/b-orange.png", function(req, res) {
	console.log('get image:' + 'html' + req.url);
	var content  = fs.readFileSync('html' + req.url, '');
	res.send(content);
});

app.post('/', (req, res) => {
	//console.log('body object='+req.body);
	//console.log(JSON.stringify(req.body, null, 2));
	//res.set('Content-Type: application/json;charset=UTF-8');
	//res.send(r);
	
});
*/
app.get("/", function(req, res) {
	console.log('hello world');
	res.status(200).send('hello world');
});
app.get("/health", function(req, res) {
	res.status(200).send('I am alive');
});

httpServer.listen(80);
//httpsServer.listen(443);
console.log('Listen 80');

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('text/json');
  next();
});

app.get('/', function(req, res, next) {
	console.log('get param=' + req.query.name + req.query.age);
	res.status(200).send({
	"nombre":req.query.name,
	"apellido":"saul",
	"edad":req.query.age,
	"colores":["negro","rojo","violeta", "naranja"]
	});
});
app.get('/productos', function(req, res, next) {
	console.log('get param=' + req.query.name + req.query.age);
	res.status(200).send({
	"nombre":req.query.name,
	"apellido":"saul",
	"edad":req.query.age,
	"colores":["negro","rojo","violeta", "naranja"]
	});
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/