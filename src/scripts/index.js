import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header.js';
import './views/container/hero.js';
import './views/container/catagory-food.js';
import './views/container/slogan-comp.js';
import './views/container/explore-restaurant.js';
import './views/container/footer-text.js';
import './views/container/detail-restaurant.js';
import './views/component/skip-content.js';
import HomePage from './views/page/home-page';


const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');



header.innerHTML = `<header-element></header-element>`;
footer.innerHTML = `<footer-text></footer-text>`;

HomePage.mainHome(main);