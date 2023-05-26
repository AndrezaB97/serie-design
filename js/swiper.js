$(document).ready(function () {
  const products = [
    { image: "./assets/images/product-sold-out.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
    { image: "./assets/images/product.png" },
  ];

  let html = "";

  products.forEach((product) => {
    html += `
            <div class="swiper-slide">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" class="product-thumb" alt="">
                    </div>
                    <div class="product-info">
                        <h2 class="product-Lorem ipsum">Lorem ipsum</h2>
                        <p class="product-short-description">a short line about the cloth..</p>
                        <p class="price-discount">R$1598,00</p>
                        <p class="price">R$2000,00</p>
                    </div>
                </div>
            </div>
        `;
  });

  $(".swiper-wrapper").html(html);

  const swiper = new Swiper(".sample-slider", {
    loop: true,
    centeredSlides: true, //added
    breakpoints: {
      1500: {
        slidesPerView: 6,
      },
      1300: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
    },

    spaceBetween: 30,
    watchSlidesVisibility: true,
    spaceBetween: 20, //added

    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },
  });
});
