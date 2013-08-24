var app = angular.module('app', ["ngAnimate"]);

app.controller('QuestionController', function($scope) {
	var increment = 1/questions.length*100;
	$scope.questions = questions;
	$scope.quiz = {currentQuestion: 0, width: 0};

	$scope.showQuestion = function(index) {
		return $scope.quiz.currentQuestion == index;
	};

	$scope.firstQuestion = function(index) {
		return $scope.quiz.currentQuestion == 0;
	};

	$scope.previousQuestion = function () {
		progressBar(forward = false);
		$scope.quiz.currentQuestion -= 1;
	};

	$scope.nextQuestion = function(index, userAnswer) {
		logAnswer(index, userAnswer);
		progressBar(forward = true);
		$scope.quiz.currentQuestion += 1;
		$scope.quiz.lastQuestion = ($scope.quiz.currentQuestion == questions.length);
		if ($scope.quiz.lastQuestion) { score (); }
	};

	var progressBar = function(forward) {
		forward && ($scope.quiz.width += increment) || ($scope.quiz.width -= increment);
	};

	var logAnswer = function(index, userAnswer) {
		$scope.questions[index].userAnswer = userAnswer;
	};
	
	var score = function () {
		var score = 0;
		for (var i = 0; i < questions.length; i++) {
			var question = $scope.questions[i];
			if (question.userAnswer == question.correctAnswer) { score += 1; }
		}
		$scope.quiz.score = score;
	};

	$scope.reload = function () {
		window.location.reload();
	};
});