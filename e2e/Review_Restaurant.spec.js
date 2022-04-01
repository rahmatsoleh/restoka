const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(5);
});

Scenario('Submit form review', async ({ I }) => {
  const uniq = () => `_${Math.random().toString(36).substring(2, 9)}`;
  const customer = {
    name: `John${uniq()}`,
    message: `Test John${uniq()}`,
  };

  I.seeElement('.resto-item a');
  I.click('.resto-item a');
  I.wait(5);

  I.seeElement('.form-review form');
  I.fillField('.form-review form #name', customer.name);
  I.fillField('.form-review form #message', customer.message);
  I.click('.form-review form button');
  I.wait(5);
  I.click('.swal-button--confirm');

  const reviewsCount = await I.grabNumberOfVisibleElements('.customer-review ul li');

  for (let index = 1; index <= reviewsCount; index++) {
    const review = await I.grabTextFrom(locate('.customer-review ul li .name').at(index));

    if (review === customer.name) {
      const result = {
        name: await I.grabTextFrom(locate('.customer-review ul li .name').at(index)),
        message: await I.grabTextFrom(locate('.customer-review ul li .review-message').at(index)),
      };

      assert.strictEqual(customer.name, result.name);
      assert.strictEqual(customer.message, result.message);
    }
  }

  I.see(customer.name, '.customer-review ul li .name');
  I.see(customer.message, '.customer-review ul li .review-message');
});
