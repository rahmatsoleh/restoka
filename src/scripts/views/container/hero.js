import '../../../styles/component/hero.scss';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article id="hero">
                <div class="hero-image">
                <picture>
                  <source media="(max-width: 720px)" class="lazyload" srcset="./images/heros/hero-image_2-small.webp" type="image/webp">
                  <source media="(max-width: 720px)" class="lazyload" srcset="./images/heros/hero-image_2-small.jpg" type="image/jpeg">
                  <source media="(max-width: 1024px)" class="lazyload" srcset="./images/heros/hero-image_2-medium.webp" type="image/webp">
                  <source media="(max-width: 1024px)" class="lazyload" srcset="./images/heros/hero-image_2-medium.jpg" type="image/jpeg">
                  <source media="(max-width: 1200px)" class="lazyload" srcset="./images/heros/hero-image_2-large.webp" type="image/webp">
                  <source media="(max-width: 1200px)" class="lazyload" srcset="./images/heros/hero-image_2-large.jpg" type="image/jpeg">
                  <img data-src="./images/heros/hero-image_2-large.jpg" alt="Restoka Restaurant Catalogue" class="lazyload">
                </picture>      
                </div>
                <div class="text-hero">
                    <span class="slogan-top">The most complete restaurant catalog for you</span>
                    <span class="slogan-midle">There are thousands of restaurants available on our application for those of you who want to eat.</span>
                    <span class="slogan-bottom">Enjoy the cuisine of the entire restaurant on our platform</span>
                    <form>
                        <input type="text" placeholder="Search here..."/>
                        <button type="submit">Find Resto</button>
                    </form>
                </div>
            </article>
        `;
  }
}

customElements.define('hero-element', Hero);
