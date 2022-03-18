import '../component/restaurant-item.js';
import '../../../styles/component/explore-restaurant.scss';
import { restaurants } from '../../../data-json/DATA.json';

class ExploreRestaurant extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <article id="explore-restaurant">
                <h2>explore restaurants</h2>
                <div class="list-restaurant">
                    ${this.listRestaurant()}
                </div>
            </article>
        `;
    }

    listRestaurant(){
        let restaurant = '';

        restaurants.forEach(resto => {
            restaurant += `
                <restaurant-item
                    id="${resto.id}"
                    name="${resto.name}"
                    desc="${this.splitDescription(resto.description)}"
                    image="${resto.pictureId}"
                    city="${resto.city}"
                    rating="${resto.rating}"
                ></restaurant-item>`;
        })
        return restaurant;
    }

    splitDescription(desc){
        const fullDescription = desc.split('');
        const templateDescription = [];
        for(let i = 0; i < 60; i++){
            templateDescription.push(fullDescription[i]);
        }
        templateDescription.push('...');
        const resultDescription = templateDescription.join('');
        return resultDescription;
    }
}

customElements.define('explore-restaurant', ExploreRestaurant);