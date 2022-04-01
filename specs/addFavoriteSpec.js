import FavoriteRestoDB from '../src/scripts/data/restoka-idb';
import createLikeButtonPresenter from './helpers/testFactories';

describe('Add a Favorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this Restaurant"]')).toBeTruthy();
  });

  it('should not show the remove favorite button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await createLikeButtonPresenter({ id: 1 });

    await document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoDB.getFavorite(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestoDB.deleteResto(1);
  });

  it('Should not add a favorite restaurant again when its already liked', async () => {
    await createLikeButtonPresenter({ id: 1 });

    await FavoriteRestoDB.putResto({ id: 1 });

    await document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllFavorite()).toEqual([{ id: 1 }]);
    FavoriteRestoDB.deleteResto(1);
  });

  it('Should not add a restaurant favorite list when it has no id', async () => {
    await createLikeButtonPresenter({ });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllFavorite()).toEqual([]);
  });
});
