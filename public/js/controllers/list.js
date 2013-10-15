window.angular.module('quizquiz.controllers.list', []).controller('ListController', ['$scope', '$routeParams', '$location', 'Global', 'Quizzes',
	function($scope, $routeParams, $http, Global, Quizzes) {
		$scope.global = Global;
	
		$scope.find = function(query) {
			Quizzes.query(query, function(quizzes) {
				$scope.quizzes = quizzes;
			});
		};
	}]);