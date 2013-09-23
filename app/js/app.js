'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', "ngAnimate", "ngRoute"]).
  config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/quiz/:quizId', 
		{
			templateUrl: 'partials/quiz.html', 
			controller: 'QuizController'
		}).
		otherwise({
			redirectTo: 'index.html'
		});
  }]);