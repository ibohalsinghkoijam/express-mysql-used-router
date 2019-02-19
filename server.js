const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

var port = process.env.PORT || 8080;

/* Single file */
//Creating Router() object
//const router = express.Router();

// Provide all routes here, this is for Home page.
// router.get("/", function(req, res) {
//     res.json({"message" : "Hello World"});
// });


const home = require('./routes/home');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

/*****   R & D *****/
// const router = express.Router();
// router.use(function(req, res, next) {
//     global.connection = mysql.createConnection({
//         host:     'localhost',
//         user:     'root',
//         password: 'olive@123',
//         database: 'mydb'
//     });
//     connection.connect();
//     next();
// });


app.use(function(req, res, next) {
    global.connection = mysql.createConnection({
        host:     'localhost',
        user:     'root',
        password: 'olive@123',
        database: 'mydb'
    });
    connection.connect();
    next();
});
/**** End ******/


// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.
//app.use("/api",router);
app.use("/api", home);

app.listen(port, function() {
    //console.log("Live at Port ${port}");
    console.log(`Live at Port ${port}`);
});

