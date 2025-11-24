const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/hp_img1.jpg',
        title: 'Nourish and strengthen hair from root to tip.',
        offer: '6,999',
        price: '8,999'
    },
  
    {
        image: 'images/hp_img2.jpg',
        title: 'Reduce hair fall and promote healthy growth.',
        offer: '4,999',
        price: '6,299'
    },
 
    {
        image: 'images/hp_img3.jpg',
        title: 'Include shampoos, conditioners, oils, and serums.',
        offer: '2,499',
        price: '3,199'
    },
   
    {
         image: 'images/hp_img4.jpg',
        title: 'Suitable for all hair types — dry, oily, or frizzy.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/hp_img5.jpg',
        title: 'Restore shine and smoothness to dull hair.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/hp_img6.jpg',
        title: 'Protect hair from heat and environmental damage.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/hp_img7.jpg',
        title: 'Enriched with natural ingredients like argan and coconut oil.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/hp_img8.jpg',
        title: 'Help repair split ends and damaged strands.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/hp_img9.jpg',
        title: 'Keep scalp clean, fresh, and hydrated.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/hp_img10.jpg',
        title: 'Lightweight formulas for everyday use.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/hp_img11.jpg',
        title: 'Free from harsh chemicals and sulfates.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/hp_img12.jpg',
        title: 'Make hair look soft, silky, and manageable.',
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
