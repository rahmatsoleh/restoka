import swal from 'sweetalert';
import FavoriteRestoDB from '../data/restoka-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/like-button';
import RestaurantApi from '../data/restaurant-api';
import NotificationHelper from './notification-helper';
import API_ENDPOINT from '../globals/api-endpoint';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, id }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = await this._getApi(id);

    await this._renderButton();
  },
  async _getApi(id) {
    const restaurant = await RestaurantApi.detail(id);
    if (restaurant) {
      const resultResto = {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      };
      return resultResto;
    }
    return { id };
  },
  async _renderButton() {
    const { id } = await this._restaurant;

    if (await this._isExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isExist(id) {
    const resto = await FavoriteRestoDB.getFavorite(id);
    return !!resto;
  },
  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        const restaurant = await this._restaurant;
        await FavoriteRestoDB.deleteResto(restaurant.id);
        swal('Success', `${restaurant.name} remove from favorite list`, 'success');
        this._renderButton();
      });
    }
  },
  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        const restaurant = await this._restaurant;
        await FavoriteRestoDB.putResto(restaurant);
        swal('Success', `${restaurant.name} add to favorite list`, 'success')
          .then(() => {
            NotificationHelper.sendNotification({
              title: `${restaurant.name} add to favorite list`,
              options: {
                body: restaurant.description,
                image: API_ENDPOINT.PICTURE_SM(restaurant.pictureId),
              },
            });
          });
        this._renderButton();
      });
    }
  },
};

export default LikeButtonInitiator;
