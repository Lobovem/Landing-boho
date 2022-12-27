const swiper = new Swiper('.swiper', {
  spaceBetween: 20,

  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  //Количество слайдов на странице

  // slidesPerView: 3,

  //Адаптив

  breakpoints: {
    310: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 4,
    },

    1000: {
      slidesPerView: 5,
    },

    1300: {
      slidesPerView: 6,
    },
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
