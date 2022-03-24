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

    document.querySelector('button').addEventListener('click', this.openNavigation);
    document.querySelector('main').addEventListener('click', this.closeNavigation);
  }

  openNavigation() {
    const appBar = document.querySelector('.app-bar');
    appBar.classList.toggle('show');
  }

  closeNavigation() {
    document.querySelector('.app-bar').classList.remove('show');
  }
}

customElements.define('header-element', Header);
