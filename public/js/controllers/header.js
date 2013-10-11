window.angular.module('quizquiz.controllers.header', [])
  .controller('HeaderController', ['$scope', 'Global',
    function($scope, Global) {
    	$scope.global = Global;
    }]);