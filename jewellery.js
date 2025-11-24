const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/j_img1.jpg',
        title: 'Lightweight designs for daily wear comfort',
        offer: '6,999',
        price: '8,999'
    },
   
    {
        image: 'images/j_img2.jpg',
        title: 'Handcrafted pieces with fine detailing.',
        offer: '4,999',
        price: '6,299'
    },
   
    {
        image: 'images/j_img3.jpg',
        title: 'Sparkling stones that catch every light.',
        offer: '2,499',
        price: '3,199'
    },
    
    {
         image: 'images/j_img4.jpg',
        title: 'Mix and match styles for a modern touch.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/j_img5.jpg',
        title: 'Symbol of beauty, love, and grace.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/j_img6.jpg',
        title: 'Durable quality to last for years.',
        offer: '4,999',
        price: '6,299'
    },
    {
        image: 'images/j_img7.jpg',
        title: 'Adds elegance and completes any outfit.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/j_img8.jpg',
        title: 'Made from gold, silver, or fashion materials.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/j_img9.jpg',
        title: 'Includes rings, necklaces, earrings, and bracelets.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/j_img10.jpg',
        title: 'Trendy and traditional designs for every occasion.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/j_img11.jpg',
        title: 'Perfect gift choice for loved ones',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/j_img12.jpg',
        title: 'Enhances confidence and reflects personality.',
        offer: '4,999',
        price: '6,299'
    }
];

products.forEach(item => {
    parent.innerHTML += `
       <div class="cards_child p-2 col-12 col-sm-6 col-md-4 col-lg-3 fade-in">
        <div class="card_child">
          <img src="${item.image}" alt="${item.title}" />
          <div class="px-3">
            <h3>${item.title}</h3>
            <div class="d-flex justify-content-between align-items-center">
              <span class="price fw-bold text-primary">${item.offer} <del>${item.price}</del></span>
              <button class="btn btn-secondary"><i class="fa-solid fa-bag-shopping" ></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
});

