import '../../../styles/component/slogan-comp.scss';

class SloganComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <article id="slogan-comp">
                <div class="thumb-image">
                    <img src="images/heros/hero-image_1.jpg" alt="">
                </div>
                <div class="slogan-desc">
                    <p>There are more than 1000 restaurants for those of you who want to find food</p>                
                </div>
            </article>
        `;
  }
}

customElements.define('slogan-comp', SloganComp);
