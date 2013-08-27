
module.exports = function(mongoose){
	return {
		Employee: mongoose.model('Employee', mongoose.Schema({name: {type: String, required: true}, title: String}))
	};
};