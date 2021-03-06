import '../component/restaurant-item';
import RestaurantApi from '../../data/restaurant-api';

class ExploreRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    const listDataRestaurants = await this.listRestaurant();
    this.innerHTML = `
            <article id="explore-restaurant">
                ${this.resultTitle()}
                <div class="list-restaurant">
                    ${listDataRestaurants}
                </div>
            </article>
        `;
  }

  async listRestaurant() {
    let cardRestaurant = '';
    const restaurants = await this.findRestaurants();
    const nothingList = `
            <div class="nothing-resto">
                <img data-src="images/restaurant.png" alt="No Result Collections" class="lazyload"/>
                <p>No Result Collections</p>
            </div>`;

    restaurants.forEach((resto) => {
      cardRestaurant += `
                <restaurant-item
                    id="${resto.id}"
                    name="${resto.name}"
                    desc="${resto.description}"
                    image="${resto.pictureId}"
                    city="${resto.city}"
                    rating="${resto.rating}"
                ></restaurant-item>`;
    });
    return cardRestaurant || nothingList;
  }

  async findRestaurants() {
    const keyword = this.getAttribute('keyword') || '';
    const restaurants = keyword ? await RestaurantApi.search(keyword) : await RestaurantApi.list();
    return restaurants;
  }

  resultTitle() {
    const keyword = this.getAttribute('keyword') || '';

    const explore = '<h2 tabindex="0">explore restaurants</h2>';

    const resultKeyword = `<p>Search Result <span>${keyword}</span></p>`;

    return (keyword) ? resultKeyword : explore;
  }
}

customElements.define('explore-restaurant', ExploreRestaurant);
