const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/sc_img1.jpg',
        title: 'Hydrating Aloe Vera Cream for soft and glowing skin',
        offer: '6,999',
        price: '8,999'
    },
    // {
    //     image: 'images/sc_img4.jpg',
    //     title: 'Rose Water Toner for fresh and radiant skin',
    //     offer: '2,499',
    //     price: '3,199'
    // },
    {
        image: 'images/sc_img5.jpg',
        title: 'Vitamin C Serum to brighten and protect',
        offer: '4,999',
        price: '6,299'
    },
    {
        image: 'images/SP_img5.jpg',
        title: 'Rose Water Toner for fresh and radiant skin',
        offer: '2,499',
        price: '3,199'
    },
    {
         image: 'images/SP_img7.jpg',
        title: 'Deeply cleanse and refresh the skin.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/SP_img8.jpg',
        title: 'Keep skin soft, smooth, and glowing.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/SP_img9.jpg',
        title: 'Hydrate and lock in natural moisture.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/sc_img10',
        title: 'Help reduce acne, spots, and blemishes.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/sc_img11.jpg',
        title: 'Suitable for all skin types — dry, oily, or sensitive.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/sc_img12.jpg',
        title: 'Enriched with vitamins and natural extracts.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/sc_img13',
        title: 'Protect skin from sun and pollution damage.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/sc_img14',
        title: 'Improve texture for a youthful appearance.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/sc_img15',
        title: 'Promote healthy, radiant, and flawless skin.',
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
