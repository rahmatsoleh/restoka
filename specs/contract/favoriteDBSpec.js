import itActsAsFavoriteModel from './favoriteContract';
import FavoriteRestoDB from '../../src/scripts/data/restoka-idb';

describe('Favorite Restaurant Database Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoDB.getAllFavorite()).forEach(async (restaurant) => {
      await FavoriteRestoDB.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteModel(FavoriteRestoDB);
});
