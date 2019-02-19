const express = require('express');
//Creating Router() object
const router = express.Router();

// Provide all routes here, this is for Home page.
// router.get("/", function(req, res) {
//     res.json({"message" : "Hello World"});
// });

//rest api to get a single tasks data
router.get('/taks/:id', function(req, res) {
	console.log(2);
	console.log(req);  // gives :uid
	
	res.end(JSON.stringify({"test" : "No"})); 
	//console.log(req);
	//res.send('hello ' + req.id + '!');
	// connection.query('SELECT * from tasks where id=?', [req.params.id], function (error, results, fields) {
	//    if (error) throw error;
	//    res.end(JSON.stringify(results));
	//  });
 });

//rest api to get all results
/* GET users listing. */
router.get('/tasks', function(req, res, next) {
	connection.query('SELECT * from tasks', function (error, results, fields) {
		console.log('1');
		if (error) throw error;
	    res.end(JSON.stringify(results));  
		// if(error){
	  	// 	res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	// 	//If there is error, we send the error in the error section with 500 status
	  	// } else {
  		// 	res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  		// 	//If there is no error, all is good and response is 200OK.
	  	// }
  	});
});


  

//rest api to create a new record into mysql database
router.post('/tasks', function (req, res) {
	// console.log(req.body);
	var postData = req.body;
	connection.query('INSERT INTO tasks SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  // console.log(results.insertId); // Auto increment id
	  res.end(JSON.stringify(results));
	});
});

router.put('/task', function(req, res) {
	console.log(req.body);
	//connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
	connection.query('UPDATE tasks SET task=?, status=? where id=?', [req.body.task, req.body.status, req.body.id], function(error, results, fields){
		if (error) throw error;
		res.end(JSON.stringify(result));
	})
});
module.exports = router;
