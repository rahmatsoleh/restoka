class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id');
    this.name = this.getAttribute('name');
    this.image = this.getAttribute('image');
    this.desc = this.getAttribute('desc');
    this.city = this.getAttribute('city');
    this.rating = this.getAttribute('rating');
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="resto-item">
                <div class="resto-thumb">
                    <img src="${this.image}" alt="${this.name}"/>
                </div>
                <div class="resto-desc">
                    <h3 tabindex="0">${this.name}</h3>
                    <p>&#x1F4CD; ${this.city}</p>
                    <p class="description">${this.desc}</p>
                    <a  href="#/detail/${this.id}" data-id="${this.id}" aria-label="Visit ${this.name}">visit this it &#x2794;</a>
                </div>
                <p class="rating"><span>&#x2605;</span> ${this.rating}</p>
            </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
