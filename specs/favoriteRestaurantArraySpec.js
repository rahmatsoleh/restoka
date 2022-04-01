import itActsAsFavoriteModel from './contract/favoriteContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getFavorite(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurant.find((resto) => resto.id === id);
  },

  getAllFavorite() {
    return favoriteRestaurant;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getFavorite(restaurant.id)) {
      return;
    }
    favoriteRestaurant.push(restaurant);
  },

  deleteResto(id) {
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant array contract test implementation', () => {
  afterEach(() => favoriteRestaurant = []);
  itActsAsFavoriteModel(FavoriteRestaurantArray);
});
