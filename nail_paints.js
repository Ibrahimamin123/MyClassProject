const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/np_img1.jpg',
        title: 'Available in glossy, matte, shimmer, and glitter finishes.',
        offer: '6,999',
        price: '8,999'
    },
    
    {
        image: 'images/np_img2.jpg',
        title: 'Enhance beauty and express personal style.',
        offer: '4,999',
        price: '6,299'
    },
   
    {
        image: 'images/np_img3.jpg',
        title: 'Quick-drying and long-lasting formulas.',
        offer: '2,499',
        price: '3,199'
    },
   
    {
         image: 'images/np_img4.jpg',
        title: 'Wide color range — from soft nudes to bold shades.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/np_img5.jpg',
        title: 'Enriched with vitamins for nail care and protection.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/np_img6.jpg',
        title: 'Easy to apply with smooth brush texture.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/np_img7.jpg',
        title: 'Chip-resistant for a salon-like finish at home.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/np_img8.jpg',
        title: 'Easy to remove without damaging nails.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/np_img9.jpg',
        title: 'Seasonal shades for every mood and trend.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/np_img10.jpg',
        title: 'Suitable for all skin tones and occasions.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/np_img11.jpg',
        title: 'Gives nails a smooth, flawless appearance.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/np_img12.jpg',
        title: 'Can be paired with nail art for creative looks.',
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
