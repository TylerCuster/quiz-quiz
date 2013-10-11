window.angular.module('quizquiz.controllers.create', []).controller('CreateController', ['$scope', '$routeParams', '$location', 'Global',
	function($scope, $routeParams, $http, Global) {
        $scope.create = {
			quizTitle: "",
			quiz: [
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
        $scope.addQuestion = function() {
        	$scope.create.quiz.push({
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
        	var quiz = $scope.create.quiz;
        	if (quiz.length > 1) {
    			quiz.splice(questionIndex, 1);
    		}
        }
      	$scope.addAnswer = function(questionIndex) {
      		var choices = $scope.create.quiz[questionIndex].choices;
      		choices.push({
						number: choices.length,
						answer: ""
					});
        };
        $scope.deleteAnswer = function(questionIndex, answerIndex) {
        	var choices = $scope.create.quiz[questionIndex].choices;
        	if (choices.length > 1) {
        		choices.splice(answerIndex, 1);
        	}
        }
	}]);