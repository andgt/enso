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
};

// Кнопка наверх

let buttonUp = function() {
  let buttonTop = document.querySelector(".button__top");

  if (window.pageYOffset > 100) {
    buttonTop.classList.add("button__top--showed");
  } else {
    buttonTop.classList.remove("button__top--showed");
  }

  buttonTop.onclick = function() {
    window.scrollTo(0, 0);
  }
};

window.onscroll = function() {
  buttonUp();
};

// Кнопки подробнее

let aboutBtn = document.querySelectorAll(".about__btn");

aboutBtn.forEach(element => {
  element.onclick = function(e) {
    e.preventDefault();
    console.log(1);
  }
});

// Swiper

let mainSlider = function () {
  const swiperMain = new Swiper(".main-slider", {
    enabled: false,
    effect: "fade",
    simulateTouch: false,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1490: {
        enabled: true,
        direction: "vertical",
        slidesPerView: 1,
        speed: 2400,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
    },
  });
};

mainSlider();

// Маска для body

let bodyMask = function () {
  let pageBody = document.querySelector(".page__body");

  window.onwheel = function (event) {
    let scrollTop = event.deltaY;
    let target = event.target;

    console.log(scrollTop);

    pageBody.classList.remove("main__slide--active");
    pageBody.offsetWidth;
    pageBody.classList.add("main__slide--active");

    if ((target.classList.contains("promo") || target.closest(".promo")) && scrollTop < 0) {
      pageBody.classList.remove("main__slide--active");
    }

    if (target.classList.contains("history") || target.closest(".history") && scrollTop > 0) {
      pageBody.classList.remove("main__slide--active");
    }

  };

  let bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach(bullet => {
    bullet.onclick = function () {
      pageBody.classList.remove("main__slide--active");
      pageBody.offsetWidth;
      pageBody.classList.add("main__slide--active");
    }
  });
};

bodyMask();

let mainMatch = window.matchMedia("(min-width: 1490px)");

/*window.onload = function () {
  if (mainMatch.matches) {
    bodyMask();
  } else {
    false;
  }
};*/

// Слайдер для блока management

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
  const swiperAbout = new Swiper(".about__slider", {
    grabCursor: true,
    speed: 800,
    spaceBetween: 20,
    effect: "slide",
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

// Для обновления слайдеров при ресайзе

window.addEventListener("resize", function() {
  if (window.innerWidth > 1469 && window.innerWidth < 1510) {
    window.location.reload();
  } else if (window.innerWidth < 1490 && window.innerWidth > 1480) {
    window.location.reload();
  }
});
