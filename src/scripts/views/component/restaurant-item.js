import '../../../styles/component/restaurant-item.scss';
import HomePage from '../page/home-page';

class RestaurantItem extends HTMLElement {
    connectedCallback(){
        this.id = this.getAttribute('id');
        this.name = this.getAttribute('name');
        this.image = this.getAttribute('image');
        this.desc = this.getAttribute('desc');
        this.city = this.getAttribute('city');
        this.rating = this.getAttribute('rating');
        this.render();
        this.addEventListener("click", this.visitDetail);
    }

    render(){
        this.innerHTML = `
            <div class="resto-item">
                <div class="resto-thumb">
                    <img src="${this.image}" alt="${this.name}"/>
                </div>
                <div class="resto-desc">
                    <h3 tabindex="0">${this.name}</h3>
                    <p>&#x1F4CD; ${this.city}</p>
                    <p>${this.desc}</p>
                    <a  href="#" data-id="${this.id}" aria-label="Visit ${this.name}">visit this it &#x2794;</a>
                </div>
                <p class="rating"><span>&#x2605;</span> ${this.rating}</p>
            </div>
        `;

    }

    visitDetail(e){
        if(e.target.nodeName == 'A'){
            const main = document.querySelector('main');
            HomePage.detailResto(main, e.target.dataset.id);
        }
    }

}

customElements.define('restaurant-item', RestaurantItem);