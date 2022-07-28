import ImageChef from './chef.jpg'

const loadHome = () => {
    console.log('home.js was called!');

    function _buildHome(midSectionContent) {
        const aboutTitle = document.createElement('h2');
        aboutTitle.innerHTML = '――― About ―――';
        aboutTitle.className = "mid-section-title";

        const aboutText = document.createElement('p');
        aboutText.innerHTML = 'Samurai Sushi is a traditional japanese restaurant specialized on sushi dishes';
        aboutText.className = "mid-section-content";

        const chefTitle = document.createElement('h2');
        chefTitle.innerHTML = '――― Chef ―――';
        chefTitle.className = "mid-section-title";

        const chefDiv = document.createElement('div');
        chefDiv.id = "chef-content";

        const chefImg = document.createElement('img');
        chefImg.id = 'chef-img';
        chefImg.setAttribute('src', ImageChef);

        const chefText = document.createElement('p');
        chefText.innerHTML = 'Sushi Master Oda Nobunaga is a renowned sushi specialist winner of many culinary prizes';
        chefText.className = "mid-section-content";

        midSectionContent.appendChild(aboutTitle);
        midSectionContent.appendChild(aboutText);
        midSectionContent.appendChild(chefTitle);
        midSectionContent.appendChild(chefDiv);
        chefDiv.appendChild(chefImg);
        chefDiv.appendChild(chefText);
    }

    if (document.getElementById('mid-section-content')) {
        const midSectionContent = document.getElementById('mid-section-content');

        while (midSectionContent.hasChildNodes()) {
            midSectionContent.firstChild.remove();
        }

        _buildHome(midSectionContent);
    } else {
        const midSectionContent = document.createElement('div');
        midSectionContent.id = "mid-section-content";

        const midSection = document.getElementById('mid-section');

        midSection.appendChild(midSectionContent);

        _buildHome(midSectionContent);
    }
}

export default loadHome;