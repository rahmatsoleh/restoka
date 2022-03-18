import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header.js';
import './views/container/hero.js';
import './views/container/catagory-food.js';
import './views/container/slogan-comp.js';
import './views/container/explore-restaurant.js';


document.querySelector('header').innerHTML = `<header-element></header-element>`;



const main = `
    <hero-element></hero-element>
    <category-food></category-food>
    <slogan-comp></slogan-comp>
    <explore-restaurant></explore-restaurant>
    <div style="min-height:500px">lorem</div>
`;
// const main = `
//     <hero-element></hero-element>
//     <explore-restaurant></explore-restaurant>
//     <div style="min-height:500px">lorem</div>
// `;

document.querySelector('main').innerHTML = main;

