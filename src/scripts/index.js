import 'regenerator-runtime'; /* for async await transpile */
import './views/container/header.js';
import './views/container/hero.js';


document.querySelector('header').innerHTML = `<header-element></header-element>`;

const main = `
    <hero-element></hero-element>
`;

document.querySelector('main').innerHTML = main;