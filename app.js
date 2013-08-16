var app = angular.module('app', []);

app.controller('QuestionCtrl', function($scope) {
	$scope.questions = questions;
	$scope.questionsCount = questions.length;
	$scope.currentQuestion = 0;

	$scope.nextQuestion = function(questionIndex, userAnswer) {
		$scope.questions[questionIndex].userAnswer = userAnswer;
		$scope.currentQuestion += 1;
		$scope.lastQuestion = ($scope.currentQuestion == $scope.questionsCount);
		if ($scope.lastQuestion) {
			$scope.score();
		}
	};

	$scope.score = function() {
		var score = 0;
		for (var i = 0; i < $scope.questionsCount; i++) {
			var question = $scope.questions[i];
			if (question.userAnswer == question.correctAnswer) {
				score += 1;
			}
		}
		$scope.score = score;
	};
});