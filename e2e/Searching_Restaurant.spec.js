const assert = require('assert');

Feature('Searching Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('form input');
});

Scenario('Search not using keyword', ({ I }) => {
  I.fillField('form input', '');
  I.click('form button');
  I.wait(5);
  I.seeInCurrentUrl('/#/');
});

Scenario('Search using specific name', async ({ I }) => {
  const keyword = await I.grabTextFrom(locate('.resto-item h3').first());

  I.fillField('form input', keyword);
  I.click('form button');
  I.wait(5);

  I.seeElement('.resto-item h3');
  const resultSearch = await I.grabTextFrom(('.resto-item h3'));

  assert.strictEqual(keyword, resultSearch);
});

Scenario('Search using general keyword', ({ I }) => {
  const keyword = 'roti';

  I.fillField('form input', keyword);
  I.click('form button');
  I.wait(5);

  I.seeElement('.resto-item h3');
});

Scenario('Search using invalid keywords', ({ I }) => {
  const keyword = 'abcdefghij';

  I.fillField('form input', keyword);
  I.click('form button');
  I.wait(5);

  I.see('No Result Collections', '.nothing-resto p');
});

Scenario('Repeat searching', async ({ I }) => {
  const keyword = await I.grabTextFrom(locate('.resto-item h3').first());
  I.fillField('form input', keyword);
  I.click('form button');
  I.wait(5);
  I.seeElement('.resto-item h3');
  const resultSearch = await I.grabTextFrom(('.resto-item h3'));
  assert.strictEqual(keyword, resultSearch);

  I.fillField('form input', 'roti');
  I.click('form button');
  I.wait(5);
  I.seeElement('.resto-item h3');

  I.fillField('form input', 'qwertyuiop');
  I.click('form button');
  I.wait(5);
  I.see('No Result Collections', '.nothing-resto p');

  I.fillField('form input', '');
  I.click('form button');
  I.wait(5);
  I.seeInCurrentUrl('/#/');
});
