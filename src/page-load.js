const loadPage = () => {
    //Create main content div
    const content = document.createElement('div');
    content.id = "content";
    document.body.appendChild(content);

    //Create header, mid section and footer divs
    const header = document.createElement('div');
    const midSection = document.createElement('div');
    const footer = document.createElement('div');
    header.id = "header";
    midSection.id = "mid-section";
    footer.id = "footer";
    content.appendChild(header);
    content.appendChild(midSection);
    content.appendChild(footer);

    //Create header elements
    const title = document.createElement('h1');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    title.innerHTML = "Sushi Samurai";
    homeBtn.innerHTML = "Home";
    menuBtn.innerHTML = "Menu";
    contactBtn.innerHTML = "Contact";
    title.id = "restaurant-name";
    homeBtn.id = "home-btn";
    menuBtn.id = "menu-btn";
    contactBtn.id = "contact-btn";
    homeBtn.className = "nav-button";
    menuBtn.className = "nav-button";
    contactBtn.className = "nav-button";
    header.appendChild(title);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);


}

export default loadPage;