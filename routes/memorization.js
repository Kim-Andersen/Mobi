module.exports = function(app, models){
	var apiRoot = "/api/memorization";

	app.get(apiRoot, function(req, res){
		models.Memorization.find(function(err, item){
			res.json(item);
		});
	});

	app.post(apiRoot, function(req, res){
		var newModel = new models.Memorization({text: req.param("text")});

		newModel.save(function(error, item){
			if(error){
				res.json(400, error);
			}
			else {
				res.json(item);	
			}
		});
	});
};