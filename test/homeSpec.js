// Home page tests

var url = 'http://quiz-quiz.herokuapp.com/';

describe('homepage', function () {
	beforeEach(function () {
		browser.get(url);
	});
	it('should display 3 home page boxes', function () {
		// Find elements with class home-box, count them, should be 3
		expect(element.all(by.css('.home-box')).count()).toEqual(3);
	});
	it('should display link to create page', function () {
		// Display link in second box
		expect(element(by.css('.home-box:nth-child(2) a')).getAttribute('href')).toEqual(url + '#!/quizzes/create');
	});
	it('should display link to github', function () {
		// Display link in third box
		expect(element(by.css('.home-box:nth-child(3) a')).getAttribute('href')).toEqual('https://github.com/TylerCuster/quiz-quiz');
	});
	describe('homepage quiz links', function () {
		it('should display at least 5 quiz links', function () {
			var all = browser.findElements(by.repeater('quiz in quizzes'));
			// Find elements with class quiz-links, count them, should be at least 5
			expect(element.all(by.css('.quiz-links')).count()).toBeGreaterThan(5);
			// Count elements in ng-repeat quiz in quizzes, test first 3 have correct text
			all.then(function(arr) {
				expect(arr.length).toBeGreaterThan(5);
				expect(arr[0].getText()).toEqual('Horses');
				expect(arr[1].getText()).toEqual('Math');
				expect(arr[2].getText()).toEqual('Mountains');
			});
		});
		it('should redirect to quiz after quiz link is clicked', function () {
			var all = browser.findElements(by.repeater('quiz in quizzes'));
			all.then(function(arr) {
				arr[0].click();
			})
			var question = element(by.css('#question'));
			expect(question.getText()).toEqual('How many horses can fit on the moon?');
		});
	});
});