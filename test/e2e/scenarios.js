'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Quiz Quiz', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should automatically go to index', function() {
    expect(browser().location().url()).toBe("/index.html");
  });

  it('should render quiz 1 when user navigates to /quiz/1', function() {
    browser().navigateTo('#/quiz/1');
    expect(browser().location().url()).toBe("/quiz/1");
  });

  it('should render index when user navigates to a path that does not exist', function() {
    browser().navigateTo('#/132143214');
    expect(browser().location().path()).toBe("/index.html");
  });

  it('should display links to 4 quizzes', function() {
    expect(repeater('.quizLinks span').count()).toBe(4);
  });

  describe('Example Quiz 1', function() {

    beforeEach(function() {
      browser().navigateTo('#/quiz/1');
    });

    it('should display links to 4 quizzes', function() {
      expect(repeater('.quizLinks span').count()).toBe(4);
    });

    it('should automatically go to quiz 1', function() {
      expect(browser().location().url()).toBe("/quiz/1");
    });

    it('should display the first question', function() {
      expect(element('.quiz').text()).toMatch(/Who is Prime Minister of the United Kingdom?/);
    });

    it('should load 15 answers on the quiz', function() {
      expect(repeater('.quiz label').count()).toBe(15);
    });

    it('should display 4 answers on the first question', function() {
      expect(false).toBe(true);
    });

    it('should remember selected answer after clicking next and then previous', function() {
      expect(false).toBe(true);
    });

    it('should score a test properly with chosen answers', function() {
      expect(false).toBe(true);
    });

    it('should display score at the end of the quiz', function() {
      expect(false).toBe(true);
    });
  });
});
