import '../../../styles/component/header.scss';
import Brand from '../../../public/images/Restoka.svg';

class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="app-bar">
                <div class="header-element">
                    <img data-src="./images/Restoka.svg" alt="Restoka" class="lazyload"/>
                    <button aria-label="Navigation Button">
                        <div class="btn-burger"></div>
                    </button>
                </div>
                <nav>
                   <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/favorite">Favorite</a></li>
                        <li><a href="#/about">About Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
  }
}

customElements.define('header-element', Header);
