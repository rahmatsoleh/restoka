import { createAvatar } from '@dicebear/avatars';
import * as avatarStyle from '@dicebear/avatars-initials-sprites';
import API_ENDPOINT from '../../globals/api-endpoint';

const generateAvatar = (name) => createAvatar(avatarStyle, {
  seed: name,
  size: 70,
  radius: 70,
});

const categories = (dataCategories) => {
  let element = '';
  if (dataCategories) {
    dataCategories.forEach((item) => {
      element += `<span>${item.name}</span>`;
    });
  }
  return element;
};

const menus = (dataMenu) => {
  let element = '';
  dataMenu.forEach((item) => {
    element += `<li>${item.name}</li>`;
  });
  return element;
};

const reviews = (customers) => {
  let reviews = '';
  if (customers) {
    customers.forEach((item) => {
      reviews += `
          <li>
            <div class="avatar">
              ${generateAvatar(item.name)}
            </div>
            <div class="review-detail">
              <p class="name">${item.name}</p>
              <p class="date">${item.date}</p>
              <p class="review-message">${item.review}</p>
            </div>
          </li>
        `;
    });
  }

  return reviews;
};

const headerInfo = (dataResto) => `
  <div class="detail-hero">
    <div class="img-thumb">
      <picture>
        <source media="(max-width: 720px)" srcset="${API_ENDPOINT.PICTURE_SM(dataResto.pictureId)}">
        <source media="(max-width: 1024px)" srcset="${API_ENDPOINT.PICTURE_MD(dataResto.pictureId)}">
        <source media="(max-width: 1200px)" srcset="${API_ENDPOINT.PICTURE_LG(dataResto.pictureId)}">
        <img src="${API_ENDPOINT.PICTURE_LG(dataResto.pictureId)}" alt="${dataResto.name}">
      </picture>
    </div>
    <p class="rating"><span>&#x2605;</span> ${dataResto.rating}</p>
  </div>
  <div class="detail-info">
    <h2 tabindex="0">${dataResto.name}</h2>
    <p>&#x1F4CD; ${dataResto.address} ${dataResto.city}</p>
    <div class="categories">
      <h3>Categories</h3>
      <p>${categories(dataResto.categories)}</p>
    </div>
  </div>
  `;

const detailMenu = (dataMenu) => {
  if (dataMenu) {
    return `
    <div class="food">
      <p>Food Menus</p>
      <ol>${menus(dataMenu.foods)}</ol>
    </div>
    <div class="drink">
      <p>Drink Menus</p>
      <ol>${menus(dataMenu.drinks)}</ol>
    </div>
    `;
  }
  return '';
};

const reviewElement = (resto) => `
  <div class="form-review">
  <p>Send Feedback</p>
  <form method="post">
    <input type="hidden" value="${resto.id}" id="id-resto"/>
    <label for="name">Name</label>
    <input id="name" type="text" required/>
    <label for="message">Message</label>
    <textarea id="message" required></textarea>
    <button type="submit">
      <span class="sending d-none"><div></div> Sending...</span>
      <span class="netral">Submit</span>
    </button>
  </form>
</div>
<div class="customer-review">
  <p>Customer Reviews</p>
  <ul>${reviews(resto.customerReviews)}</ul>
</div>
  `;

export {
  categories,
  detailMenu,
  reviewElement,
  headerInfo,
  reviews,
};
