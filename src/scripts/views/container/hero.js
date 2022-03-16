import '../../../styles/component/hero.scss';
import HeroImage from '../../../public/images/heros/hero-image_2.jpg';

class Hero extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <article id="hero">
                <div class="hero-image">
                    <img src="${HeroImage}" alt="" />
                </div>
                <div class="text-hero">
                    <span class="slogan-top">The most complete restaurant catalog for you</span>
                    <span class="slogan-midle">There are thousands of restaurants available on our application for those of you who want to eat.</span>
                    <span class="slogan-bottom">Enjoy the cuisine of the entire restaurant on our platform</span>
                    <form>
                        <input type="text" placeholder="Search Restaurant..."/>
                        <button type="submit">Find Resto</button>
                    </form>
                </div>
            </article>
        `;
    }
}

customElements.define('hero-element', Hero);