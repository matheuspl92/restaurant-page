const loadContact = () => {

    const midSectionContent = document.getElementById('mid-section-content');
    while (midSectionContent.hasChildNodes()) {
        midSectionContent.firstChild.remove();
    }

    const phoneTitle = document.createElement('h2');
    phoneTitle.innerHTML = '――― Phone ―――';
    phoneTitle.className = "mid-section-title";

    const phoneText = document.createElement('p');
    phoneText.innerHTML = '777-333-1337';
    phoneText.className = "mid-section-content";

    midSectionContent.appendChild(phoneTitle);
    midSectionContent.appendChild(phoneText);

    const emailTitle = document.createElement('h2');
    emailTitle.innerHTML = '――― Email ―――';
    emailTitle.className = "mid-section-title";

    const emailText = document.createElement('p');
    emailText.innerHTML = 'contact@samuraisushi.com';
    emailText.className = "mid-section-content";

    midSectionContent.appendChild(emailTitle);
    midSectionContent.appendChild(emailText);

    const socialTitle = document.createElement('h2');
    socialTitle.innerHTML = '―― Social media ――';
    socialTitle.className = "mid-section-title";

    const socialText = document.createElement('p');
    socialText.innerHTML = 'Visit our social media pages!';
    socialText.className = "mid-section-content";
    
    midSectionContent.appendChild(socialTitle);
    midSectionContent.appendChild(socialText);
}

export default loadContact;