import './style.css';
import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';
import loadPage from './page-load';
import focusBtn from './focusBtn';

console.log("index.js was called successfully");

loadPage();
loadHome();
focusBtn(document.getElementById('home-btn'));

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', (e) => {
    loadHome();
    focusBtn(e.target)
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', (e) => {
    loadMenu();
    focusBtn(e.target)
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', (e) => {
    loadContact();
    focusBtn(e.target)
});