import FavoriteRestoDB from '../src/scripts/data/restoka-idb';
import createLikeButtonPresenter from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div class="likeButtonContainer"></div>';
};

describe('Remove Restaurant Favorite', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoDB.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoDB.deleteResto(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this Restaurant"]')).toBeTruthy();
  });

  it('Should not display like widget when the movie has been liked', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to remove restaurant from the favorite list', async () => {
    await createLikeButtonPresenter({ id: 1 });

    await FavoriteRestoDB.deleteResto(1);

    await document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllFavorite()).toEqual([]);
  });

  it('Should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenter({ id: 1 });

    await FavoriteRestoDB.deleteResto(1);

    await document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllFavorite()).toEqual([]);
  });
});
