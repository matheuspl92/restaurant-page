const loadPage = () => {
    console.log('page-load.js was called!');
    //Create main content div
    const content = document.createElement('div');
    content.id = "content";

    document.body.appendChild(content);

    //Create header, mid section and footer divs
    const header = document.createElement('div');
    header.id = "header";

    const midSection = document.createElement('div');
    midSection.id = "mid-section";

    const footer = document.createElement('div');
    footer.id = "footer";

    content.appendChild(header);
    content.appendChild(midSection);
    content.appendChild(footer);

    //Create header elements
    const title = document.createElement('h1');
    title.innerHTML = "Samurai Sushi";
    title.id = "restaurant-name";

    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = "Home";
    homeBtn.id = "home-btn";
    homeBtn.className = "nav-button";

    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = "Menu";
    menuBtn.id = "menu-btn";
    menuBtn.className = "nav-button";

    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = "Contact";
    contactBtn.id = "contact-btn";
    contactBtn.className = "nav-button";

    header.appendChild(title);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);

    //Create mid-section elements
    //div
    //  =>h2
    //  =>p
    //  =>h2
    //  =>div
    //      =>img
    //      =>p
    /*const midSectionContent = document.createElement('div');
    midSectionContent.id = "mid-section-content";

    const aboutTitle = document.createElement('h2');
    aboutTitle.innerHTML = 'About';
    aboutTitle.className = "mid-section-title";

    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Samurai Sushi is a traditional japanese restaurant specialized on sushi dishes';
    aboutText.className = "mid-section-content";

    const chefTitle = document.createElement('h2');
    chefTitle.innerHTML = 'Chef';
    chefTitle.className = "mid-section-title";

    const chefDiv = document.createElement('div');
    chefDiv.id = "chef-content";

    const chefImg = document.createElement('img');
    chefImg.id = 'chef-img';
    chefImg.setAttribute('src', "#########");

    const chefText = document.createElement('p');
    chefText.innerHTML = 'Sushi Master Oda Nobunaga is a renowned sushi specialist winner of many culinary prizes';
    chefText.className = "mid-section-content";

    midSection.appendChild(midSectionContent);
    midSectionContent.appendChild(aboutTitle);
    midSectionContent.appendChild(aboutText);
    midSectionContent.appendChild(chefTitle);
    midSectionContent.appendChild(chefDiv);
    chefDiv.appendChild(chefImg);
    chefDiv.appendChild(chefText);*/

    //Create footer elements
    const footerText = document.createElement('p');
    footerText.id = "footer-text";
    footerText.innerHTML = "Made by ";

    const footerLink = document.createElement('a');
    footerLink.setAttribute("href", "https://github.com/matheuspl92");
    footerLink.innerHTML = "matheuspl92";

    footerText.appendChild(footerLink);
    footer.appendChild(footerText);

}

export default loadPage;