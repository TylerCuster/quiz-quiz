window.angular.module('quizquiz.controllers.create', []).controller('CreateController', ['$scope', '$routeParams', '$location', 'Global', 'Quizzes',
	function($scope, $routeParams, $location, Global, Quizzes) {

        var blankQuiz = {
			quizTitle: "",
			questions: [
				{
					question: "",
					choices: [
					{
						number: 1,
						answer: ""
					},
					{
						number: 2,
						answer: ""
					},
					{
						number: 3,
						answer: ""
					}
					]
				}
			]
		};

		$scope.quiz = blankQuiz;

        $scope.addQuestion = function() {
        	$scope.quiz.questions.push({
					question: "",
					choices: [
					{
						number: 1,
						answer: ""
					},
					{
						number: 2,
						answer: ""
					},
					{
						number: 3,
						answer: ""
					}
					]
			});
        };
        $scope.deleteQuestion = function(questionIndex) {
        	var quiz = $scope.quiz.questions;
        	if (quiz.length > 1) {
    			quiz.splice(questionIndex, 1);
    		}
        }
      	$scope.addAnswer = function(questionIndex) {
      		var choices = $scope.quiz.questions[questionIndex].choices;
      		choices.push({
						number: choices.length,
						answer: ""
					});
        };
        $scope.deleteAnswer = function(questionIndex, answerIndex) {
        	var choices = $scope.quiz.questions[questionIndex].choices;
        	if (choices.length > 1) {
        		choices.splice(answerIndex, 1);
        	}
        };

        $scope.create = function () {
			var quiz = new Quizzes();

			quiz.quizTitle = $scope.quiz.quizTitle;
			quiz.questions = $scope.quiz.questions;

			quiz.$save(function(response) {
				$location.path("quizzes/" + response._id);
			});

			this.quiz = blankQuiz;
		};

	}]);