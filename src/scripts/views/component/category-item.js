import '../../../styles/component/category-item.scss';

class CategoryItem extends HTMLElement {
    connectedCallback(){
        this.title = this.getAttribute("title");
        this.image = this.getAttribute("image");
        this.render();
    }

    render(){
        this.innerHTML = `
            <a href="#" class="category-item">
                <div class="thumb-img">
                    <img src="${this.image}" alt="${this.title}"/>
                </div>
                <h3>${this.title}</h3>
            </a>
        `;
        
    }
}

customElements.define("category-item", CategoryItem);