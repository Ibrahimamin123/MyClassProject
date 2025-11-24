let parent = document.getElementById("parent");
console.log(parent);

const children = [
  { image: './images/G_img1.jpeg', title: 'Jewellery' },
  { image: './images/G_img2.jpg', title: 'Tints' },
  { image: './images/G_img3.jpeg', title: 'locket' },
  { image: './images/G_img4.jpg', title: 'Hair oil' },
  { image: './images/G_img5.jpg', title: 'Skin care product' },
  { image: './images/G_img6.jpg', title: 'Serum' },
  { image: './images/G_img7.jpg', title: 'Liquid Tint' },
  { image: './images/G_img8.jpg', title: 'Face Scrub' },
  { image: './images/G_img9.jpg', title: 'Hair Protein' },
  { image: './images/G_img10.jpg', title: 'Face Cream' },
  { image: './images/G_img11.jpg', title: 'Hair Serum' },
  { image: './images/G_img12.jpg', title: 'Skin care Product' },
  { image: './images/G_img13.jpg', title: 'Rings' },
  { image: './images/G_img14.jpg', title: 'Pendents' },
  { image: './images/G_img15.jpg', title: 'EyeShadow Palete' },
  { image: './images/G_img16.jpg', title: 'Face Brightenig Oil' },
  { image: './images/G_img17.jpg', title: 'Nail Paint' },
  { image: './images/G_img18.jpg', title: 'Face Whitening Cream' },
  { image: './images/G_img19.jpg', title: 'Jewellery' },
  { image: './images/G_img20.jpg', title: 'Nail Arts' },
  { image: './images/G_img21.jpg', title: 'Face Moisturizer' },
  { image: './images/G_img22.jpg', title: 'Jewellery Collection' },
  { image: './images/G_img23.jpg', title: 'Face Hyderating Serum' },
  { image: './images/G_img24.jpg', title: 'Jewellery New Collection' },
  { image: './images/G_img25.jpg', title: 'Stainless Ring' },
  { image: './images/G_img26.jpg', title: 'Hair Serum' },
  { image: './images/G_img27.jpg', title: 'Face Serum' },
  { image: './images/G_img28.jpg', title: 'Face Cream' },
  { image: './images/G_img29.jpg', title: 'Stainless Earings' },
  { image: './images/G_img30.jpg', title: 'Stainless Neck Chain' },
  { image: './images/G_img31.jpg', title: 'Stainless Gold Ring' },
  { image: './images/G_img32.jpg', title: 'Red Nail Paint' },
  { image: './images/G_img33.jpg', title: 'Nail Polishes' },
  { image: './images/G_img34.jpg', title: 'Red wine Nail Paint' },
  { image: './images/G_img35.jpg', title: 'Red Lipstick' },
  { image: './images/G_img36.jpg', title: 'Pink Lipstick' },
  // { image: './images/G_img34.jpg', title: 'Image34' },
  { image: './images/G_img35.jpg', title: 'New Lipstick' },
  { image: './images/G_img36.jpg', title: 'Dark Lipstick' },
  { image: './images/G_img37.jpg', title: 'Pink Lipstick' }
];

children.forEach((data) => {
  let child = `
    <div class="child col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center mb-3">
      <img src="${data.image}" alt="${data.title}" class="img-fluid rounded shadow-sm">
      <h5>${data.title}</h5>
    </div>
  `;
  parent.innerHTML += child;
});