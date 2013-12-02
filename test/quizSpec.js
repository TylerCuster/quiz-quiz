// Quiz page tests

var url = 'http://localhost:3000/';

describe('Cats quiz page', function () {
	beforeEach(function () {
		browser.get(url + '#!/quizzes/52788774f1bcdd9d1000000d');
	});
	it('should display question', function () {
		var question = element(by.css('.question'));
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
	it('should load all 4 questions', function () {
		var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
		questions.then(function(arr) {
			// Doubles count due to score repeater
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
			// Doubles count due to score repeater
			expect(arr.length).toEqual(26);
		});
	});
	it('should disable Next button by default', function () {
		var nextButton = element(by.css('.buttons-container button:last-child'));
		expect(nextButton.getAttribute('disabled')).toBe('true');
	});
	it('should enable Next button after selecting radio button option', function () {
		var radioButton = element(by.css('.quiz-box label'));
		radioButton.click();
		var nextButton = element(by.css('.buttons-container button:last-child'));
		expect(nextButton.getAttribute('disabled')).toBe(null);
	});
	describe('Second page', function () {
		beforeEach(function () {
			var radioButton = element(by.css('.quiz-box label'));
			radioButton.click();
			var nextButton = element(by.css('.buttons-container button:last-child'));
			nextButton.click();
		});
		it('should go to the next page after selecting choice and clicking Next button', function () {
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
		it('should display correct progress bar width', function () {
			var progress = element(by.css('.progress-bar'));
			expect(progress.getAttribute('style')).toEqual('width: 25%;');
		});
		describe('Back button and saved answers', function () {
			beforeEach(function () {
				var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
				questions.then(function(arr) {
					// arr[1] grabs second question
					var backButton = arr[1].findElement(by.css('.buttons-container button:first-child'));
					backButton.click();
				});
			});
			it('should go back to first page when Back button is clicked and have saved answer', function () {
				var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
				questions.then(function(arr) {
					// Hide second question
					expect(arr[1].getText()).toEqual("");
					// Display first question
					expect(arr[0].getText()).toMatch("Which animal's brain is more similar to a human brain?");
				});
				var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
				answers.then(function(arr) {
					expect(arr[0].findElement(by.css('input')).isSelected()).toBe(true);
					expect(arr[1].findElement(by.css('input')).isSelected()).toBe(false);
				});
			});
			it('should save answer from the second page when clicking Next again after clicking Back', function () {
				var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
				questions.then(function(arr) {
					// arr[1] grabs second question
					var nextButton = arr[0].findElement(by.css('.buttons-container button:last-child'));
					nextButton.click();
				});
				questions.then(function(arr) {
					expect(arr[1].getText()).toMatch("How many degrees is a cat's field of vision?");
					expect(arr[0].getText()).toMatch("");
				});
			});
		});
		describe('Third page', function () {
			beforeEach(function () {
				var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
				answers.then(function(arr) {
					// arr[5] grabs 6th answer
					arr[5].click();
				});
				var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
				questions.then(function(arr) {
					// arr[1] grabs second question
					var nextButton = arr[1].findElement(by.css('.buttons-container button:last-child'));
					nextButton.click();
				});
			});
			it('should correctly run through the third page', function () {
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
			describe('Fourth page', function () {
				beforeEach(function () {
					var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
					answers.then(function(arr) {
						// arr[8] grabs 9th answer
						arr[8].click();
					});
					var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
					questions.then(function(arr) {
						// arr[2] grabs third question
						var nextButton = arr[2].findElement(by.css('.buttons-container button:last-child'));
						nextButton.click();
					});
				});
				it('should correctly run through the fourth page', function () {
					var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
					questions.then(function(arr) {
						// Should display the fourth question
						expect(arr[3].getText()).toMatch("What percentage of a cat's bones are in its tail?");
						// Should hide the third question
						expect(arr[2].getText()).toEqual("");
					});	
				});
				describe('Score', function () {
					beforeEach(function () {
						var answers = browser.findElements(by.repeater('(choiceIndex, choice) in question.choices'));
						answers.then(function(arr) {
							// arr[10] grabs 11th answer
							arr[10].click();
						});
						var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
						questions.then(function(arr) {
							// arr[3] grabs fourth question
							var nextButton = arr[3].findElement(by.css('.buttons-container button:last-child'));
							nextButton.click();
						});
					});
					it('should show the correct score 2 and outta 4', function () {
						// Selects first answer, third answer, third answer, second answer.
						// Which is wrong, wrong, right, right. So the score should be 2.
						expect(browser.findElement(by.binding('play.score')).getText()).toEqual("2");
						expect(element(by.css('#outta')).getText()).toEqual("out of 4");
					});
					it('should display 4 checkmarks to indicate correct answers, 2 Xs to indicate wrong answers', function () {
						var checks = browser.findElements(by.css('i.glyphicon-ok'));
						checks.then(function(arr) {
							expect(arr.length).toEqual(4);
						});
						var Xs = browser.findElements(by.css('i.glyphicon-remove'));
						Xs.then(function(arr) {
							expect(arr.length).toEqual(2);
						});
					});
					it('should highlight the question red for the wrong answer, and green for the correct answer', function () {
						var questions = browser.findElements(by.repeater('(questionIndex, question) in quiz.questions'));
						questions.then(function(arr) {
							expect(arr[5].findElement(by.css('.score-question')).getAttribute('class')).toMatch('wrongQuestion');
							expect(arr[6].findElement(by.css('.score-question')).getAttribute('class')).toMatch('correctQuestion');
						});
					});
				});
			});
		});
	});
});