import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header';
import './views/container/hero';
import './views/container/catagory-food';
import './views/container/slogan-comp';
import './views/container/explore-restaurant';
import './views/container/footer-text';
import './views/container/detail-restaurant';
import './views/component/skip-content';
import HomePage from './views/page/home-page';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');

header.innerHTML = '<header-element></header-element>';
footer.innerHTML = '<footer-text></footer-text>';

HomePage.mainHome(main);
