window.app = angular.module('quizquiz', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'quizquiz.controllers', 'quizquiz.directives', 'quizquiz.services']);

// bundling dependencies
window.angular.module('quizquiz.controllers', ['quizquiz.controllers.header', 'quizquiz.controllers.index', 'quizquiz.controllers.create', 'quizquiz.controllers.list', 'quizquiz.controllers.quiz']);
window.angular.module('quizquiz.services',['quizquiz.services.global','quizquiz.services.stock', 'quizquiz.services.quizzes']);