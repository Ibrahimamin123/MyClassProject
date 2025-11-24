const parent = document.getElementById('parent');

const products = [
    {
        image: 'images/na_img1.jpg',
        title: 'Creative designs that express personal style.',
        offer: '6,999',
        price: '8,999'
    },
   
    {
        image: 'images/na_img2.jpg',
        title: 'Available in trendy and classic patterns.',
        offer: '4,999',
        price: '6,299'
    },
   
    {
        image: 'images/na_img3.jpg',
        title: 'Adds a unique touch to any look or outfit.',
        offer: '2,499',
        price: '3,199'
    },
  
    {
         image: 'images/na_img4.jpg',
        title: 'Includes glitter, stones, stickers, and 3D effects',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/na_img5.jpg',
        title: 'Long-lasting and chip-resistant designs.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/na_img6.jpg',
        title: 'Perfect for parties, weddings, and daily wear.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/na_img7.jpg',
        title: 'Can be customized for any theme or season.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/na_img8.jpg',
        title: 'Easy to apply and remove without damage.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/na_img9.jpg',
        title: 'Available in matte, glossy, and metallic finishes.',
        offer: '4,999',
        price: '6,299'
    },
    {
         image: 'images/na_img10.jpg',
        title: 'Enhances the beauty of natural or acrylic nails.',
        offer: '6,999',
        price: '8,999'
    },
    {
        image: 'images/na_img11.jpg',
        title: 'Professional salon-quality designs at home.',
        offer: '2,499',
        price: '3,199'
    },
    {
        image: 'images/na_img12.jpg',
        title: 'A fun way to stay stylish and confident.',
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
