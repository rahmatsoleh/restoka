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
                    <img src="${Brand}" alt="Restoka"/>
                    <button aria-label="Navigation Button">
                        <div class="btn-burger"></div>
                    </button>
                </div>
                <nav>
                   <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Favorite</a></li>
                        <li><a href="https://github.com/rahmatsoleh" target="_blank" rel="noreferrer">About Us</a></li>
                    </ul>
                </nav>
            </div>
        `;
  }
}

customElements.define('header-element', Header);
