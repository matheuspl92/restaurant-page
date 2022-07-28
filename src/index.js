import './style.css';
import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';
import loadPage from './page-load';

console.log("index.js was called successfully");

loadPage();
loadHome();

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', loadHome);

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', loadMenu);

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', loadContact);