window.angular.module('quizquiz.controllers.list', []).controller('ListController', ['$scope', '$routeParams', '$location', 'Global', 'Quizzes',
	function($scope, $routeParams, $http, Global, Quizzes) {
		$scope.global = Global;
	
		$scope.find = function(query) {
			Quizzes.query(query, function(quizzes) {
				$scope.quizzes = quizzes;
				for (var i=0; i<$scope.quizzes.length; i++) {
					if ($scope.quizzes[i].quizTitle === "test") {
						$scope.quizzes.splice(i,1);
					}
				}
			});
		};
	}]);