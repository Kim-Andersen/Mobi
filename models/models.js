
module.exports = function(mongoose){
	return {
		Employee: mongoose.model('Employee', mongoose.Schema({name: {type: String, required: true}, title: String})),
		Memorization: mongoose.model('Memorization', mongoose.Schema({text: {type: String, required: true}})),
	};
};