'use strict'

// Меню

let mainNav = document.querySelector(".main-nav");
let menuBtn = document.querySelector(".main-nav__button-toggle");

menuBtn.onclick = function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
}

// Swiper

let managementSlider = function () {

  const swiper = new Swiper(".management__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    slidesPerView: "auto",
    speed: 800,
    spaceBetween: 15,
    breakpoints: {
      768: {
        enabled: false,
      }
    }
  });
};

managementSlider();

let aboutSlider = function () {
  const swiper = new Swiper(".about__slider", {
    grabCursor: true,
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1490: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });
};

aboutSlider();

window.addEventListener("resize", function() {
  if (window.innerWidth > 1489 && window.innerWidth < 1510) {
    window.location.reload();
  } else if (window.innerWidth < 1490 && window.innerWidth > 1480) {
    window.location.reload();
  }
});

let gallerySlider = function () {

  const swiperGallery = new Swiper(".gallery__slider", {
    grabCursor: true,
    loop: true,
    speed: 800,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

gallerySlider();

let historySlider = function () {

  const swiperHistory = new Swiper(".history__slider", {
    grabCursor: true,
    direction: "vertical",
    slidesPerView: "auto",
    loop: true,
    speed: 800,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

historySlider();
