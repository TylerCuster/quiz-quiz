window.angular.module('quizquiz.controllers.list', []).controller('ListController', ['$scope', '$routeParams', '$location', 'Global', 'Stock',
	function($scope, $routeParams, $http, Global, Stock) {
		$scope.global = Global;
		
		$scope.quizzes = Stock.quizzes;
	}]);