import "../component/category-item.js";
import "../../../styles/component/category-food.scss";
import { category } from '../../../data-json/CATEGORY.json';

class CategoryFood extends HTMLElement {

    connectedCallback(){
        this._category = category;
        this.render()
    }

    render(){
        this.innerHTML = `
            <article id="category-food">
                <h2>Food Category</h2>
                <div id="list-category"></div>
            </article>
        `;

        const listCategory = document.querySelector('#list-category');
        listCategory.innerHTML = ``;

        this._category.forEach( item => {
            listCategory.innerHTML += `<category-item title="${item.title}" image="${item.image}"></category-item>`
        })
    }
}

customElements.define("category-food", CategoryFood);