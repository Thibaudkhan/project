// Importing required modules
/*const cors = require('cors');
const express = require('express');

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;

*/
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const apiRouter = require('./routes')

app.use(express.json());
app.use('/api/db',apiRouter)
app.listen(port,()=>{
    console.log("server running "+port)

});
 