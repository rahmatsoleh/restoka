import '../../../styles/component/detail-restaurant.scss';
import { restaurants } from '../../../data-json/DATA.json';

class DetailRestaurant extends HTMLElement {

    connectedCallback(){
        this.dataId = this.dataset.id;
        this.render();
    }

    render(){
        this.innerHTML = `
            <article id="detail-resto">
                ${this.findResto(this.dataId)}
            </article>
        `;
    }

    findResto(dataId){
        const resto = restaurants.find(resto => resto.id == dataId);
        
        let elementDetail = `
            <div class="resto-image">
                <img src="${resto.pictureId}" alt="${resto.name}"/>
            </div>
            <div class="resto-info">
                <h2 tabindex="0">${resto.name}</h2>
                <p class="city">&#x1F4CD; ${resto.city}</p>
                <p tabindex="0 ">${resto.description}</p>
            </div>
            <p class="rating"><span>&#x2605;</span> ${resto.rating}</p>
        `;
        return elementDetail;
    }
}

customElements.define('detail-restaurant', DetailRestaurant);