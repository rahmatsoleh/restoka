import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoDB from '../../src/scripts/data/restoka-idb';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.likeButtonContainer'),
    FavoriteRestoDB,
    restaurant,
  });
};

export default createLikeButtonPresenter;
