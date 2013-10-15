var mongoose = require('mongoose')
	, async = require('async')
	, Quiz = mongoose.model('Quiz')
	, _ = require('underscore')

exports.create = function(req, res) {
	var quiz = new Quiz(req.body)

	quiz.creator = req.user
	quiz.save()
	res.jsonp(quiz)
}

exports.show = function(req, res) {
	res.jsonp(req.quiz)
}

exports.quiz = function(req, res, next, id) {
	var Quiz = mongoose.model('Quiz')

	Quiz.load(id, function(err, quiz) {
		if (err) {
			return next(err)
		}
		if (!quiz) {
			return next(new Error('Failed to load quiz ' + id))
		}
		req.quiz = quiz
		next()
	})
}

exports.all = function(req, res) {
	Quiz.find().populate('creator').exec(function(err, quizzes) {
		if (err) {
			res.render('error', {status: 500});
		} else {
			res.jsonp(quizzes);
		}
	});
}

exports.update = function(req, res) {
	var quiz = req.quiz
	quiz = _.extend(quiz, req,body)

	quiz.save(function(err) {
		res.jsonp(quiz)
	})
}

exports.destroy = function(req, res) {
	var quiz = req.quiz
	quiz.remove(function(err) {
		if (err) {
			res.render('error', {status: 500});
		} else {
			res.jsonp(1);
		}
	})
}