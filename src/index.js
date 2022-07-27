import loadMenu from './menu';
import loadPage from './page-load';

console.log("index.js was called successfully");

loadPage();

const homeBtn = document.getElementById('home-btn');

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', loadMenu);

const contactBtn = document.getElementById('contact-btn');