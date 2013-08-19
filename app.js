var app = angular.module('app', []);

app.controller('QuestionController', function($scope) {
	$scope.questions = questions;
	$scope.currentQuestion = 0;

	$scope.nextQuestion = function(questionIndex, userAnswer) {
		$scope.questions[questionIndex].userAnswer = userAnswer;
		$scope.currentQuestion += 1;
		$scope.lastQuestion = ($scope.currentQuestion == questions.length);
		if ($scope.lastQuestion) { 
			var score = 0;
			for (var i = 0; i < questions.length; i++) {
				var question = $scope.questions[i];
				if (question.userAnswer == question.correctAnswer) { score += 1; }
			}
			$scope.score = score;
		}
	};
});