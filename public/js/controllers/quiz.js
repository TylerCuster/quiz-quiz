window.angular.module('quizquiz.controllers.quiz', []).controller('QuizController', ['$scope', '$routeParams', '$location', 'Global', 'Quizzes',
	function($scope, $routeParams, $http, Global, Quizzes) {
		$scope.global = Global;

		$scope.findOne = function () {
			Quizzes.get({ quizId: $routeParams.quizId }, function (quiz) {
				$scope.quiz = quiz;
			});
		};

		$scope.play = { currentQuestion: 0, width: 0, userAnswers: [] };

		$scope.showQuestion = function(index) {
			return $scope.play.currentQuestion == index;
		};
		
		$scope.firstQuestion = function(index) {
			return $scope.play.currentQuestion == 0;
		};

		$scope.previousQuestion = function () {
			progressBar(false);
			$scope.play.currentQuestion -= 1;
		};

		$scope.nextQuestion = function(index, userAnswer) {
			logAnswer(index, userAnswer);
			progressBar(true);
			$scope.play.currentQuestion += 1;
			$scope.play.lastQuestion = ($scope.play.currentQuestion == $scope.quiz.questions.length);
			if ($scope.play.lastQuestion) { score (); }
		};

		var progressBar = function(forward) {
			var increment = 1/$scope.quiz.questions.length*100;
			forward && ($scope.play.width += increment) || ($scope.play.width -= increment);
		};

		var logAnswer = function(index, userAnswer) {
			$scope.play.userAnswers[index] = userAnswer;
		};	
		
		var score = function () {
			var score = 0;
			for (var i = 0; i < $scope.quiz.questions.length; i++) {
				if ($scope.play.userAnswers[i] == $scope.quiz.questions[i].correctAnswer) { score += 1; }
			}
			$scope.play.score = score;
		};
  }]);