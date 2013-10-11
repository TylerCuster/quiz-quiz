//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', 
	{ 
		templateUrl: 'views/home.html' 
	})
	.when('/quiz/',
	{
		templateUrl: 'views/quiz/list.html'
	})
	.when('/create/',
	{
		templateUrl: 'views/create.html'
	})
	.when('/quiz/:quizId',
	{
		templateUrl: 'views/quiz/view.html'
	})
	.otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);