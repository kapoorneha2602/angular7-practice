// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/<name-of-app>'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log('-----in server.js file-----');
const path = require('path');

let express = require('express')

let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

app.get('/', function (req, res) {
  // var x=path.join(__dirname, 'dist/emp-app/index.html');
  var x=path.join(__dirname, 'src/index.html');
  // console.log('=====x is====',x);
  res.sendFile(x);
  // res.sendFile(path.join(__dirname, 'dummy.html'));
  //res.send('hello people');
})

const port = process.env.PORT || 3000;


//app.use(express.static(__dirname + '/dist/emp-app/index.html'));  
//var index = require('./dist/emp-app/index.html');
//var index = require('./abc.html');
//var apis = require('./routes/apis')(http);
// I am skipping codes which are common
//add the routes 
//Pointing to Index file of routes
//app.use('/', index);

io.on('connection', (socket) => {
  console.log('user connected');
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});