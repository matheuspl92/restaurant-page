import ImageNigiri from './nigiri.jpg'
import ImageUramaki from './uramaki.jpg'
import ImageTemaki from './temaki.jpeg'
import ImageSake from './sake.jpg'

const loadMenu = () => {

    //Menu items array

    const menuArray = [
        {
            type: 'sushi',
            name: 'Kami Nigiri',
            description: 'Delicious nigiri made with fresh fish and top ingredients',
            price: '$20',
            imgPath: ImageNigiri
        },
        {
            type: 'sushi',
            name: 'Salmon Uramaki',
            description: 'Flavorful sushi dish made with salmon and cream cheese',
            price: '$12',
            imgPath: ImageUramaki
        },
        {
            type: 'temaki',
            name: 'Salmon Temaki',
            description: 'Amazing salmon and cream cheese temaki',
            price: '$30',
            imgPath: ImageTemaki
        },
        {
            type: 'sake',
            name: 'Kojima Sake',
            description: 'High quality original sake made in Japan',
            price: '$100',
            imgPath: ImageSake
        },
    ];

    function _buildItems(type) {

        menuArray.forEach( (item) => {
            if(item.type === type){
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item-div';
    
                const itemNameAndPrice = document.createElement('h3');
                itemNameAndPrice.className = 'item-name-price';
                itemNameAndPrice.innerHTML = `${item.name}   ${item.price}`

                const itemImg = document.createElement('img');
                itemImg.className = 'item-img';
                itemImg.setAttribute('src', item.imgPath)

                const itemDescription = document.createElement('p');
                itemDescription.className = 'item-description';
                itemDescription.innerHTML = item.description;

                itemDiv.appendChild(itemNameAndPrice);
                itemDiv.appendChild(itemImg);
                itemDiv.appendChild(itemDescription);
                midSectionContent.appendChild(itemDiv);
    
            }
        });

    }

    const midSectionContent = document.getElementById('mid-section-content');
    while (midSectionContent.hasChildNodes()) {
        midSectionContent.firstChild.remove();
    }

    const sushiTitle = document.createElement('h2');
    sushiTitle.innerHTML = '――― Sushi ―――';
    sushiTitle.className = "mid-section-title";

    midSectionContent.appendChild(sushiTitle);
    _buildItems('sushi');

    const temakiTitle = document.createElement('h2');
    temakiTitle.innerHTML = '――― Temaki ―――';
    temakiTitle.className = "mid-section-title";

    midSectionContent.appendChild(temakiTitle);
    _buildItems('temaki');

    const sakeTitle = document.createElement('h2');
    sakeTitle.innerHTML = '――― Sake ―――';
    sakeTitle.className = "mid-section-title";
    
    midSectionContent.appendChild(sakeTitle);
    _buildItems('sake');
}

export default loadMenu;