'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('QuizController', function($scope, $routeParams, $http) {
	$http.get('static/quizzes.json').success(function(data) {
		$scope.quizzes = data;
		$scope.render();
	});

	$scope.render = function() {
		$scope.quizId = parseInt($routeParams.quizId);
		$scope.questions = $scope.quizzes[$scope.quizId-1].quiz;
		$scope.quiz = {currentQuestion: 0, width: 0, userAnswers: []};
		var quizLength = $scope.questions.length,
			increment = 1/quizLength*100;

		$scope.showQuestion = function(index) {
			return $scope.quiz.currentQuestion == index;
		};

		$scope.firstQuestion = function(index) {
			return $scope.quiz.currentQuestion == 0;
		};

		$scope.previousQuestion = function () {
			progressBar(false);
			$scope.quiz.currentQuestion -= 1;
		};

		$scope.nextQuestion = function(index, userAnswer) {
			logAnswer(index, userAnswer);
			progressBar(true);
			$scope.quiz.currentQuestion += 1;
			$scope.quiz.lastQuestion = ($scope.quiz.currentQuestion == quizLength);
			if ($scope.quiz.lastQuestion) { score (); }
		};

		var progressBar = function(forward) {
			forward && ($scope.quiz.width += increment) || ($scope.quiz.width -= increment);
		};

		var logAnswer = function(index, userAnswer) {
			$scope.quiz.userAnswers[index] = userAnswer;
		};	
		
		var score = function () {
			var score = 0;
			for (var i = 0; i < quizLength; i++) {
				if ($scope.quiz.userAnswers[i] == $scope.questions[i].correctAnswer) { score += 1; }
			}
			$scope.quiz.score = score;
		};
	};
  });