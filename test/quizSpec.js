// Quiz page tests

var url = 'http://quiz-quiz.herokuapp.com/';

describe('Cats quiz page', function () {
	beforeEach(function () {
		browser.get(url + '#!/quizzes/52788774f1bcdd9d1000000d');
	});
	it('should display question', function () {
		var question = element(by.css('#question'));
		expect(question.getText()).toEqual("Which animal's brain is more similar to a human brain?");
	});
	it('should display title', function () {
		var title = element(by.css('#quiz-details-box h1'));
		expect(title.getText()).toEqual("Cats");
	});
	it('should have access to title', function () {
		expect(browser.isElementPresent(by.binding('quiz.quizTitle'))).toBe(true);
	});
	it('should display created by', function () {
		var createdBy = element(by.css('#quiz-details-box div'));
		expect(createdBy.getText()).toEqual('created by: tump mump');
	});
	it('should have access to creator name', function() {
		expect(browser.isElementPresent(by.binding('quiz.creator.name'))).toBe(true);
	});
	it('should display the first question', function () {
		expect(element(by.repeater('(questionIndex, question) in quiz.questions').row(0)).isPresent()).toBe(true);
	});
	it('should load all questions', function () {
		var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
		questions.then(function(arr) {
			// Doubles count due to questionIndex, should be 4 questions total
			expect(arr.length).toEqual(8);
		});
	});
	it('should load 3 answers for first question', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			expect(arr[0].getText()).toEqual('Tortoise');
			expect(arr[1].getText()).toEqual('Cat');
			expect(arr[2].getText()).toEqual('Dog');
		});
	});
	it('should load 13 answers total', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			// Doubles count due to choiceIndex, should be 13 answer total
			expect(arr.length).toEqual(26);
		});
	})
	xit('should enable Next button after selecting radio button option', function () {
		var radioButton = element(by.css('#quiz-box label'));
		radioButton.click();
		var nextButton = element(by.css('#buttons-container button:last-child'));
		nextButton.click();
		expect(element(by.css('#question')).getText()).toEqual("How many degrees is a cat's field of vision?");
	});
});