import '../../../styles/component/restaurant-item.scss';

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
                    <h3>${this.name}</h3>
                    <p>&#x1F4CD; ${this.city}</p>
                    <p>${this.desc}</p>
                    <a  data-id="${this.id}">visit this it &#x2794;</a>
                </div>
                <p class="rating"><span>&#x2605;</span> ${this.rating}</p>
            </div>
        `;

    }

    visitDetail(e){
        if(e.target.nodeName == 'A'){
            console.log(e.target.dataset.id);
        }
    }

}

customElements.define('restaurant-item', RestaurantItem);