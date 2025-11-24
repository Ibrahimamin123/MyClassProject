const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/wk_img1.jpg',
        title: 'Helps achieve flawless and glowing skin.',
        offer: '6,999',
        price: '8,999'
    },
    
    {
        image: 'images/wk_img2.jpg',
        title: 'Includes pre- and post-wedding care items.',
        offer: '4,999',
        price: '6,299'
    },
    
    {
        image: 'images/wk_img3.jpg',
        title: 'Perfect blend of traditional and modern beauty needs.',
        offer: '2,499',
        price: '3,199'
    },
   
    {
         image: 'images/wk_img4.jpg',
        title: 'Ideal gift for bridal showers and engagements.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/wk_img5.jpg',
        title: 'Makes every bride feel confident and beautiful.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/wk_img6.jpg',
         title: 'Complete beauty solution for brides-to-be.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/wk_img12.jpg',
        title: 'Includes skincare, makeup, and hair essentials.Includes skincare, makeup, and hair essentials.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/wk_img7.jpg',
        title: 'Designed to give a radiant bridal glow.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/wk_img8.jpg',
        title: 'Comes with premium quality beauty products.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/wk_img9.jpg',
        title: 'Long-lasting formulas for full-day perfection.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/wk_img10.jpg',
        title: 'Easy-to-carry packaging for travel convenience.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/wk_img11.jpg',
        title: 'Suitable for all skin types and tones.',
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
