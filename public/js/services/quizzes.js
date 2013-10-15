window.angular.module('quizquiz.services.quizzes', [])
	.factory('Quizzes', ['$resource', 
		function($resource) {
			return $resource(
				'quizzes/:quizId',
				{
					quizId: '@_id'
				},
				{
					update: {method: 'PUT'}
				}
			)
		}]);