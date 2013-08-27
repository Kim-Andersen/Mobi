module.exports = function(app, models){
	app.get('/employees', function(req, res){
		models.Employee.find(function(err, employees){
			res.json(employees);
		});
	});

	app.post('/employees', function(req, res){
		var newEmpl = new models.Employee({name: req.param("name"), title: req.param("title")});

		newEmpl.save(function(error, employee){
			if(error){
				res.json(400, error);
			}
			else {
				res.json(employee);	
			}
		});
	});

	app.put('/employees/:id', function(req, res) {
		models.Employee.update({_id: req.param("id")}, {name: req.param('name'), title: req.param('title')}, function(error, empl){
			if(error){
				res.json(400, error);
			}
			else {
				res.json(empl);	
			}
		});
	});

	app.delete('/employees/:id', function(req, res){
		models.Employee.remove({_id: req.param("id")}, function(error){
			res.json(error || 200);
		});
	});
};