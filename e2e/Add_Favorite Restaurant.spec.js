const assert = require('assert');

Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Showing empty favorite restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-collection');
  I.see('No Favorite Collections', '.nothing-favorite p');
});

Scenario('Add one restaurant favorite', async ({ I }) => {
  const firstFilm = locate('.resto-item h3').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);

  I.seeElement('.resto-item a');
  I.click(locate('.resto-item a').first());
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('.swal-button--confirm');
  I.click('.swal-button--confirm');

  I.amOnPage('/#/favorite');
  const likedFilmTitle = await I.grabTextFrom(locate('.resto-item h3').first());

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('Added many restaurants to favorites', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-collection');
  I.see('No Favorite Collections', '.nothing-favorite p');

  I.amOnPage('/');
  I.seeElement('.resto-item a');
  const listTitle = [];

  for (let i = 1; i <= 3; i++) {
    I.wait(5);
    I.click(locate('.resto-item a').at(i));
    I.seeElement('#detail-resto h2');
    I.seeElement('#likeButton');
    listTitle.push(await I.grabTextFrom('#detail-resto h2'));
    I.click('#likeButton');
    I.click('.swal-button--confirm');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  const visibleFavoriteRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(listTitle.length, visibleFavoriteRestaurants);
});
