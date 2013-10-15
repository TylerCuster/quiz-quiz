var mongoose = require('mongoose')
	, env = process.env.NODE_ENV || 'development'
	, config = require('../../config/config')[env]
	, Schema = mongoose.Schema;

var QuizSchema = new Schema({
	creator: {type: Schema.ObjectId, ref: 'User'},
	quizTitle: {type: String},
	questions: [{ 
			question: String, 
			choices: [{ number: Number, answer: String }],
			correctAnswer: Number
		}]
});

QuizSchema.statics = {
	load: function(id, cb) {
		this.findOne({ _id: id }).populate('creator').exec(cb);
	}
};

mongoose.model('Quiz', QuizSchema);