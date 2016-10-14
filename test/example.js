Feature('Example.js');

Scenario('search', (I) => {
  I.amOnPage('http://yahoo2.com');
  I.fillField('p', 'github nightmare');
  I.click('Search Web');
  I.waitForElement('#main');
  I.seeElement('#main .searchCenterMiddle li a');
});