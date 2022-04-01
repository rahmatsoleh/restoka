import swal from 'sweetalert';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/like-button';
import NotificationHelper from './notification-helper';
import API_ENDPOINT from '../globals/api-endpoint';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, FavoriteRestoDB, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._FavoriteRestoDB = await FavoriteRestoDB;
    this._restaurant = await restaurant;

    await this._renderButton();
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
    const resto = await this._FavoriteRestoDB.getFavorite(id);
    return !!resto;
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        const restaurant = await this._restaurant;
        await this._FavoriteRestoDB.deleteResto(restaurant.id);
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
        await this._FavoriteRestoDB.putResto(restaurant);
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

export default LikeButtonPresenter;
