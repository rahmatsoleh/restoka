import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header';
import './views/container/hero';
import './views/container/catagory-food';
import './views/container/slogan-comp';
import './views/container/explore-restaurant';
import './views/container/footer-text';
import './views/container/detail-restaurant';
import './views/component/skip-content';
import './views/container/loading';
import swRegister from './utils/sw-register';
import App from './views/app';

const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = '<header-element></header-element>';
footer.innerHTML = '<footer-text></footer-text>';

const app = new App({
  button: document.querySelector('.app-bar button'),
  drawer: document.querySelector('.app-bar'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  document.querySelector('.app-bar').classList.remove('show');
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
