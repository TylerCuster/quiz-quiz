
var async = require('async')

module.exports = function (app, passport, auth) {

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  
  app.param('userId', users.user)

  var quizzes = require('../app/controllers/quizzes')
  app.get('/quizzes', quizzes.all)
  app.post('/quizzes', quizzes.create)
  app.get('/quizzes/:quizId', quizzes.show)
  app.del('/quizzes/:quizId', auth.requiresLogin, quizzes.destroy)

  app.param('quizId', quizzes.quiz)
  
  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

}
