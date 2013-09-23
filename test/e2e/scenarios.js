'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should automatically go to index when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/index.html");
  });


  describe('quiz 1', function() {

    beforeEach(function() {
      browser().navigateTo('#/quiz/1');
    });


    it('should render quiz 1 when user navigates to /quiz/1', function() {
      expect(browser().location().url()).toBe("/quiz/1");
    });

  });
});
