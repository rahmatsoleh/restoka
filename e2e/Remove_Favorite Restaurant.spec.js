const assert = require('assert');

Feature('Remove Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-collection');
  I.see('No Favorite Collections', '.nothing-favorite p');
});

Scenario('Remove one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.resto-item a');
  const firstFilm = locate('.resto-item h3').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(locate('.resto-item a').first());
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.swal-button--confirm');
  I.click('.swal-button--confirm');

  I.amOnPage('/#/favorite');
  const likedFilmTitle = await I.grabTextFrom(locate('.resto-item h3').first());
  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click(locate('.resto-item a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.swal-button--confirm');
  I.click('.swal-button--confirm');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-collection');
  I.see('No Favorite Collections', '.nothing-favorite p');
});

Scenario('Remove restaurants more', async ({ I }) => {
  const counter = 3;
  const listTitle = [];
  I.amOnPage('/');

  for (let index = 1; index <= counter; index++) {
    I.wait(5);
    I.seeElement('.resto-item a');
    I.click(locate('.resto-item a').at(index));
    I.wait(5);
    const titles = await I.grabTextFrom('#detail-resto h2');
    listTitle.push(titles);
    I.click('#likeButton');
    I.seeElement('.swal-button--confirm');
    I.click('.swal-button--confirm');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  const visibleFavoriteRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(listTitle.length, visibleFavoriteRestaurants);

  for (let index = 1; index <= counter; index++) {
    I.click(locate('.resto-item a').first());
    I.wait(5);
    I.click('#likeButton');
    I.seeElement('.swal-button--confirm');
    I.click('.swal-button--confirm');
    I.amOnPage('/#/favorite');
  }

  I.seeElement('.favorite-collection');
  I.see('No Favorite Collections', '.nothing-favorite p');
});
