import '../../../styles/component/favorite-page.scss';
import FavoriteRestoDB from '../../data/restoka-idb';
import API_ENDPOINT from '../../globals/api-endpoint';
import '../component/restaurant-item';

const FavoritePage = {
  async render() {
    return `
      <article id="favorite">
        <h2 tabindex="0">Favorite Restaurants</h2>
        <div class="favorite-collection"></div>
      </favorite>
    `;
  },

  async afterRender() {
    const favorites = await FavoriteRestoDB.getAllFavorite();
    const collectionsElement = document.querySelector('.favorite-collection');
    let collections = '';
    const nothingList = `
            <div class="nothing-favorite">
                <img src="images/restaurant.png" alt="No Favorite Collections"/>
                <p>No Favorite Collections</p>
            </div>`;

    favorites.forEach((resto) => {
      collections += `
          <restaurant-item
              id="${resto.id}"
              name="${resto.name}"
              desc="${resto.description}"
              image="${API_ENDPOINT.PICTURE_SM(resto.pictureId)}"
              city="${resto.city}"
              rating="${resto.rating}"
          ></restaurant-item>`;
    });
    collectionsElement.innerHTML = collections || nothingList;
  },
};

export default FavoritePage;
