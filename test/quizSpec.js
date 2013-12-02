// Quiz page tests

var url = 'http://localhost:3000/';

describe('Cats quiz page', function () {
	beforeEach(function () {
		browser.get(url + '#!/quizzes/52788774f1bcdd9d1000000d');
	});
	xit('should display question', function () {
		var question = element(by.css('#question'));
		expect(question.getText()).toEqual("Which animal's brain is more similar to a human brain?");
	});
	xit('should display title', function () {
		var title = element(by.css('#quiz-details-box h1'));
		expect(title.getText()).toEqual("Cats");
	});
	xit('should have access to title', function () {
		expect(browser.isElementPresent(by.binding('quiz.quizTitle'))).toBe(true);
	});
	xit('should display created by', function () {
		var createdBy = element(by.css('#quiz-details-box div'));
		expect(createdBy.getText()).toEqual('created by: tump mump');
	});
	xit('should have access to creator name', function() {
		expect(browser.isElementPresent(by.binding('quiz.creator.name'))).toBe(true);
	});
	xit('should display the first question', function () {
		expect(element(by.repeater('(questionIndex, question) in quiz.questions').row(0)).isPresent()).toBe(true);
	});
	xit('should load all 4 questions', function () {
		var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
		questions.then(function(arr) {
			// Doubles count due to score repeater
			expect(arr.length).toEqual(8);
		});
	});
	xit('should load 3 answers for first question', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			expect(arr[0].getText()).toEqual('Tortoise');
			expect(arr[1].getText()).toEqual('Cat');
			expect(arr[2].getText()).toEqual('Dog');
		});
	});
	xit('should load 13 answers total', function() {
		var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
		answers.then(function(arr) {
			// Doubles count due to score repeater
			expect(arr.length).toEqual(26);
		});
	});
	xit('should disable Next button by default', function () {
		var nextButton = element(by.css('#buttons-container button:last-child'));
		expect(nextButton.getAttribute('disabled')).toBe('true');
	});
	xit('should enable Next button after selecting radio button option', function () {
		var radioButton = element(by.css('#quiz-box label'));
		radioButton.click();
		var nextButton = element(by.css('#buttons-container button:last-child'));
		expect(nextButton.getAttribute('disabled')).toBe(null);
	});
	describe('Should go to the second page', function () {
		beforeEach(function () {
			var radioButton = element(by.css('#quiz-box label'));
			radioButton.click();
			var nextButton = element(by.css('#buttons-container button:last-child'));
			nextButton.click();
		});
		xit('should go to the next page after selecting choice and clicking Next button', function () {
			var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
			questions.then(function(arr) {
				// Should display the second question
				expect(arr[1].getText()).toMatch("How many degrees is a cat's field of vision?");
				// Should hide the first question
				expect(arr[0].getText()).toEqual("");
				// Should hide the third question
				expect(arr[2].getText()).toEqual("");
			});
		});
		xit('should display correct progress bar width', function () {
			var progress = element(by.css('.progress-bar'));
			expect(progress.getAttribute('style')).toEqual('width: 25%;');
		});
		describe('Should go to the third page', function () {
			beforeEach(function () {
				var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
				answers.then(function(arr) {
					var radioButton = arr[5].click();
				});
				var nextButton = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions').row(2))
				.element(by.css("#buttons-container button:last-child"));
				nextButton.click();
			});
			it('should correctly run through the quiz', function () {
				var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
				questions.then(function(arr) {
					// Should display the third question
					expect(arr[2].getText()).toMatch("Humans have about 650 skeletal muscles. How many do cats have?");
					// Should hide the second question
					expect(arr[1].getText()).toEqual("");
					// Should hide the fourth question
					expect(arr[3].getText()).toEqual("");
				});	
			});
		});
	});
});