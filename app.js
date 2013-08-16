var app = angular.module('app', []);

var allQuestions = [
	{
		question: "Who is Prime Minister of the United Kingdom?",
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
		correctAnswer:0
	},
	{
		question: "Who is the President of the United States?",
		choices: ["Man O Mile", "Barack Obama", "Ostrich"],
		correctAnswer:1
	},
	{
		question: "Who is the Bore?",
		choices: ["One", "Two"],
		correctAnswer:1
	},
	{
		question: "Here's a freeby",
		choices: ["Select this"],
		correctAnswer:0
	}];

app.controller('QuestionCtrl', function($scope) {
	$scope.allQuestions = allQuestions;
	$scope.currentQuestion = 0;

	$scope.nextQuestion = function(questionIndex, userAnswer) {
		$scope.allQuestions[questionIndex].userAnswer = userAnswer;
		$scope.currentQuestion += 1;
	};

	$scope.score = function() {
		var score = 0;
		for (var i=0; i < allQuestions.length; i++) {
			if ($scope.allQuestions[i].userAnswer == $scope.allQuestions[i].correctAnswer) {
				score += 1;
			}
		}
		$scope.score = score;
		return score;
	};
});

