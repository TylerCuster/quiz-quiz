
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    //db: 'mongodb://localhost/quizquiz-dev',
    db: 'mongodb://******@paulo.mongohq.com:10099/app18682558',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'QuizQuiz - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/quizquiz-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'QuizQuiz - Test'
    }
  },
  production: {
    db: 'mongodb://******@paulo.mongohq.com:10099/app18682558',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'QuizQuiz - Production'
    }
  }
}
