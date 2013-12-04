// Create page tests

var url = 'http://localhost:3000/';

describe('Create page', function () {
	beforeEach(function () {
		browser.get(url + '#!/quizzes/create');
	});
	it('should display 3 create boxes, 1 question, 3 answers', function () {
		expect(element.all(by.css('.create-box')).count()).toEqual(3);
		var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
		questions.then(function(arr) {
			expect(arr.length).toEqual(1);
		});
		var answers = browser.findElements(by.repeater('(answerIndex, answer) in question.choices track by $index'));
		answers.then(function(arr) {
			expect(arr.length).toEqual(3);
		});
	});
	describe('Add, delete answers', function () {
		beforeEach(function () {
			var addAnswer = element(by.css('.add-answer'));
			addAnswer.click();
		});
		it('should add answer when Add Answer is clicked', function () {
			var answers = browser.findElements(by.repeater('(answerIndex, answer) in question.choices track by $index'));
			answers.then(function(arr) {
				expect(arr.length).toEqual(4);
			});
		});
		it('should delete answer when Delete Answer is clicked', function () {
			var answers = browser.findElements(by.repeater('(answerIndex, answer) in question.choices track by $index'));
			answers.then(function(arr) {
				// Selects second delete answer because the first is hidden
				arr[1].findElement(by.css('.icon-minus-sign')).click();
				// Adds answer before each, so the count should be 5 before delete answer is clicked
				expect(arr.length).toEqual(4);
			});
		});
	});
	describe('Add, delete questions', function () {
		beforeEach(function () {
			var addQuestion = element(by.css('.add-question i'));
			addQuestion.click();
		});
		it('should add question when Add Question is clicked', function () {
			var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
			questions.then(function(arr) {
				expect(arr.length).toEqual(2);
			});
		});
		it('should delete question 2 when Delete Question 2 is clicked', function () {
			var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
			questions.then(function(arr) {
				arr[1].findElement(by.css('.icon-minus-sign')).click();
				// Adds question before each, so the could should be 3 before delete question is called
				expect(arr.length).toEqual(2);
			});
		});
	});
	describe('Quiz submit', function () {
		it('should submit a quiz', function () {
			var addAnswer = element(by.css('.add-answer'));
			addAnswer.click();
			var addQuestion = element(by.css('.add-question i'));
			addQuestion.click();
			element(by.model('quiz.quizTitle')).sendKeys('test');
			var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
			questions.then(function(arr) {
				arr[0].findElement(by.model('question.question')).sendKeys('test question 1?');
				arr[1].findElement(by.model('question.question')).sendKeys('test question 2?');
			});
			var answers = browser.findElements(by.repeater('(answerIndex, answer) in question.choices track by $index'));
			answers.then(function(arr) {
				// Question 1 has 4 questions because we clicked Add Answer once
				arr[0].findElement(by.model('answer.answer')).sendKeys('test answer 1');
				arr[1].findElement(by.model('answer.answer')).sendKeys('test answer 2');
				arr[1].findElement(by.model('question.correctAnswer')).click();
				arr[2].findElement(by.model('answer.answer')).sendKeys('test answer 3');
				arr[3].findElement(by.model('answer.answer')).sendKeys('test answer 4');
				// Question 2 has 3 questions by default
				arr[4].findElement(by.model('answer.answer')).sendKeys('test answer 1');
				arr[5].findElement(by.model('answer.answer')).sendKeys('test answer 2');
				arr[5].findElement(by.model('question.correctAnswer')).click();
				arr[6].findElement(by.model('answer.answer')).sendKeys('test answer 3');
			});
			var submit = element(by.css('input[type="submit"]'));
			submit.click();
			expect(browser.getCurrentUrl()).toNotEqual(url + '#!/quizzes/create');
		});
	});
});
describe('New quiz page', function () {
	it('should display question', function () {
		var question = element(by.css('.question'));
		expect(question.getText()).toEqual("test question 1?");
	});
	it('should display title', function () {
		var title = element(by.css('#quiz-details-box h1'));
		expect(title.getText()).toEqual("test");
	});
	it('should have access to title', function () {
		expect(browser.isElementPresent(by.binding('quiz.quizTitle'))).toBe(true);
	});
	it('should have access to creator name', function() {
		expect(browser.isElementPresent(by.binding('quiz.creator.name'))).toBe(true);
	});
	it('should load all 2 questions', function () {
		var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
		questions.then(function(arr) {
			// Doubles count due to score repeater
			expect(arr.length).toEqual(4);
		});
	});
	it('should load 4 answers for first question', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			expect(arr[0].getText()).toEqual('test answer 1');
			expect(arr[1].getText()).toEqual('test answer 2');
			expect(arr[2].getText()).toEqual('test answer 3');
			expect(arr[3].getText()).toEqual('test answer 4');
		});
	});
	it('should load 7 answers total', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			// Doubles count due to score repeater
			expect(arr.length).toEqual(14);
		});
	});
});