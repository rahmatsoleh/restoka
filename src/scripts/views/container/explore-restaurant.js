import '../component/restaurant-item.js';
import '../../../styles/component/explore-restaurant.scss';
import { restaurants } from '../../../data-json/DATA.json';

class ExploreRestaurant extends HTMLElement {
    constructor(){
        super();
        this.resultData = this.findRestaurants();
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <article id="explore-restaurant">
                ${this.resultTitle()}
                <div class="list-restaurant">
                    ${this.listRestaurant()}
                </div>
            </article>
        `;
    }

    listRestaurant(){
        let restaurant = '';
        const nothingList = `<h1>Kosong Cuy</h1>`;

        this.resultData.forEach(resto => {
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
        return restaurant || nothingList;
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

    findRestaurants(){
        const keyword = this.getAttribute('keyword') || '';
        const resultRestaurants = restaurants.filter(resto => resto.name.toLowerCase().includes(keyword.toLowerCase()));
        return resultRestaurants;
    }

    resultTitle(){
        const keyword = this.getAttribute('keyword') || '';

        const explore = `<h2 tabindex="0">explore restaurants</h2>`;

        const resultKeyword = `<p>Search Result <span>${keyword}</span></p>`

        return (keyword) ? resultKeyword : explore;

    }
}

customElements.define('explore-restaurant', ExploreRestaurant);