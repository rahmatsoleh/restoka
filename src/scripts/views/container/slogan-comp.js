import '../../../styles/component/slogan-comp.scss';

class SloganComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article id="slogan-comp">
                <div class="thumb-image">
                  <picture>
                    <source media="(max-width: 720px)" class="lazyload" srcset="./images/heros/hero-image_1-small.webp" type="image/webp">
                    <source media="(max-width: 720px)" class="lazyload" srcset="./images/heros/hero-image_1-small.jpg" type="image/jpeg">
                    <source media="(max-width: 1024px)" class="lazyload" srcset="./images/heros/hero-image_1-medium.webp" type="image/webp">
                    <source media="(max-width: 1024px)" class="lazyload" srcset="./images/heros/hero-image_1-medium.jpg" type="image/jpeg">
                    <source media="(max-width: 1200px)" class="lazyload" srcset="./images/heros/hero-image_1-large.webp" type="image/webp">
                    <source media="(max-width: 1200px)" class="lazyload" srcset="./images/heros/hero-image_1-large.jpg" type="image/jpeg">
                    <img data-src="./images/heros/hero-image_1-large.jpg" alt="There are more than 1000 restaurants" class="lazyload"/>
                  </picture>
                </div>
                <div class="slogan-desc">
                    <p>There are more than 1000 restaurants for those of you who want to find food</p>                
                </div>
            </article>
        `;
  }
}

customElements.define('slogan-comp', SloganComp);
