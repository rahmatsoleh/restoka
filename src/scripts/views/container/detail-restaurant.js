import '../../../styles/component/detail-restaurant.scss';
import * as template from '../template/detail-element';
import RestaurantApi from '../../data/restaurant-api';
import sendReview from '../../utils/send-review';

class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    this.dataId = this.dataset.id;
    this.render();
  }

  async render() {
    this.innerHTML = `
            <article id="detail-resto">
                ${await this.afterRender(this.dataId)}
            </article>
        `;
    const formReview = document.querySelector('.review form');
    formReview.addEventListener('submit', (event) => {
      event.preventDefault();
      sendReview(this);
    });
  }

  async afterRender(dataId) {
    const resto = await RestaurantApi.detail(dataId);

    const elements = `
      <section class="detail-header">
        ${template.headerInfo(resto)}
      </section>
      <section class="detail-description">
        <h3>Description</h3>
        <p>${resto.description}</p>
      </section>
      <section class="detail-menu">
        ${template.detailMenu(resto.menus)}
      </section>
      <section class="review">
        ${template.reviewElement(resto)}
      </section>
    `;
    return elements;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
