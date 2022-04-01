import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import RestaurantApi from '../../data/restaurant-api';
import FavoriteRestoDB from '../../data/restoka-idb';

const DetailPage = {
  async render() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    return `<detail-restaurant data-id="${url}"></detail-restaurant>
    <div class="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner().id;
    const dataRestaurant = await RestaurantApi.detail(url);
    const restaurant = {
      id: dataRestaurant.id,
      name: dataRestaurant.name,
      description: dataRestaurant.description,
      pictureId: dataRestaurant.pictureId,
      city: dataRestaurant.city,
      rating: dataRestaurant.rating,
    };

    const likeButtonContainer = document.querySelector('.likeButtonContainer');

    if (likeButtonContainer) {
      LikeButtonPresenter.init({
        likeButtonContainer,
        restaurant,
        FavoriteRestoDB,
      });
    }
  },
};

export default DetailPage;
