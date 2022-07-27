const loadMenu = () => {
    console.log('menu.js was called!');

    //Menu items array

    const menuArray = [
        {
            type: 'sushi',
            name: 'sushi1',
            description: 'Delicious sushi dish',
            price: '$10',
            imgPath: ''
        },
        {
            type: 'sushi',
            name: 'sushi2',
            description: 'Delicious sushi dish',
            price: '$15',
            imgPath: ''
        },
        {
            type: 'temaki',
            name: 'temaki1',
            description: 'Delicious temaki dish',
            price: '$20',
            imgPath: ''
        },
        {
            type: 'sake',
            name: 'sake1',
            description: 'Original sake from Japan',
            price: '$50',
            imgPath: ''
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

                const itemDescription = document.createElement('p');
                itemDescription.className = 'item-description';
                itemDescription.innerHTML = item.description;

                itemDiv.appendChild(itemNameAndPrice);
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
    sushiTitle.innerHTML = 'Sushi';
    sushiTitle.className = "mid-section-title";

    midSectionContent.appendChild(sushiTitle);
    _buildItems('sushi');

    const temakiTitle = document.createElement('h2');
    temakiTitle.innerHTML = 'Temaki';
    temakiTitle.className = "mid-section-title";

    midSectionContent.appendChild(temakiTitle);
    _buildItems('temaki');

    const sakeTitle = document.createElement('h2');
    sakeTitle.innerHTML = 'Sake';
    sakeTitle.className = "mid-section-title";
    
    midSectionContent.appendChild(sakeTitle);
    _buildItems('sake');
}

export default loadMenu;