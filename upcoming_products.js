const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/up_img1.jpg',
        title: 'Hydrating Aloe Vera Cream for soft and glowing skin',
        offer: '6,999',
        price: '8,999'
    },
   
    {
        image: 'images/up_img2.jpg',
        title: 'Vitamin C Serum to brighten and protect',
        offer: '4,999',
        price: '6,299'
    },
 
    {
        image: 'images/up_img3.jpg',
        title: 'Rose Water Toner for fresh and radiant skin',
        offer: '2,499',
        price: '3,199'
    },
  
    {
         image: 'images/up_img4.jpg',
        title: 'Hydrating Aloe Vera Cream for soft and glowing skin',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/up_img5.jpg',
        title: 'Rose Water Toner for fresh and radiant skin',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/up_img6.jpg',
        title: 'Vitamin C Serum to brighten and protect',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/up_img7.jpg',
        title: 'Hydrating Aloe Vera Cream for soft and glowing skin',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/up_img8.jpg',
        title: 'Rose Water Toner for fresh and radiant skin',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/up_img9.jpg',
        title: 'Vitamin C Serum to brighten and protect',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/up_img10.jpg',
        title: 'Hydrating Aloe Vera Cream for soft and glowing skin',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/up_img11.jpg',
        title: 'Rose Water Toner for fresh and radiant skin',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/up_img12.jpg',
        title: 'Vitamin C Serum to brighten and protect',
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

