import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header.js';
import './views/container/hero.js';
import './views/container/catagory-food.js';


document.querySelector('header').innerHTML = `<header-element></header-element>`;



const main = `
    <hero-element></hero-element>
    <category-food></category-food>
`;

document.querySelector('main').innerHTML = main;

