const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');

navbar.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="images/logio.jpeg" alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html"
                ><i class="fa-solid fa-house"></i>Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gallery.html"
                ><i class="fa-solid fa-images"></i>Gallery</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="fa-solid fa-crown"></i>
                Products
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="skin_care.html">Skin Care</a></li>
                <li><a class="dropdown-item" href="hair_care.html">Hair Care</a></li>
                <li><a class="dropdown-item" href="nail_paints.html">Nail Paints</a></li>
                <li><a class="dropdown-item" href="wedding_kits.html">Wedding Kits</a></li>
                <li><a class="dropdown-item" href="nail_arts.html">Nail Arts</a></li>
                <li><a class="dropdown-item" href="jewellery.html">Jewellery</a></li>
                <li><a class="dropdown-item" href="upcomming_products.html">Upcoming Products</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html"
                ><i class="fa-solid fa-circle-info"></i>About Us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html"
                ><i class="fa-solid fa-envelope"></i>Contact Us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="feedback.html"
                ><i class="fa-solid fa-envelope"></i>Feedback</a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link" href="cart.html"><i class="fas fa-shopping-cart"></i>Cart</a>
            </li>
          </ul>
        </div>
      </div>`

footer.innerHTML = `<div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Glamour Beauty</h5>
            <p>Your one-stop destination for premium beauty products and cosmetics. We're committed to helping you look and feel your best.</p>
            <div class="social-icons mt-4">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-pinterest"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Shop</h5>
            <ul class="list-unstyled">
              <li><a href="#">Makeup</a></li>
              <li><a href="#">Skincare</a></li>
              <li><a href="#">Hair Care</a></li>
              <li><a href="#">Fragrance</a></li>
              <li><a href="#">Tools & Brushes</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Company</h5>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Your email address" aria-label="Email">
              <button class="btn btn-danger" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="text-center mt-5 pt-3 border-top">
          <p>&copy; 2023 Glamour Beauty. All rights reserved.</p>
        </div>
      </div>`