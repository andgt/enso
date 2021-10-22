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

/*let mainSlider = function () {*/
  const swiperMain = new Swiper(".main-slider", {
    enabled: false,
    effect: "slides",
    mousewheel: {
      sensitivity: 1,
    },
    watchOverflow: true,
    breakpoints: {
      1490: {
        enabled: true,
        direction: "vertical",
        slidesPerView: 1,
        speed: 2000,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
    },
  });

  /*mainSliderDesktop();*/

  /*let mainMatch = window.matchMedia('(min-width: 1490px)');

  function sliderMainTablet (e) {
    if (e.matches === true) {
      mainSliderDesktop();
    } else if (e.matches === false) {
      if (swiperMainDesktop) {
        swiperMainDesktop.destroy();
      }
    }
  };

  mainMatch.addListener(sliderMainTablet);
  sliderMainTablet(mainMatch);*/
/*};

mainSlider();*/

// Маска для body

let pageBody = document.querySelector(".page__body");

let bodyMask = function () {
  let count = 0;
  let firstSlide = document.querySelector(".main__slide--first");

  window.onwheel = function (event) {
    let scrollTop = event.deltaY;
    count += scrollTop;
    let currentSlide = swiperMain.activeIndex;
    pageBody.classList.remove("main__slide--active");
    pageBody.offsetWidth;
    pageBody.classList.add("main__slide--active");
    if (currentSlide === 0 && scrollTop === -100) {
      pageBody.classList.remove("main__slide--active");
    }
  }
};

bodyMask();

let managementSlider = function () {

  const swiper = new Swiper(".management__slider", {
    nested: true,
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
    nested: true,
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
    nested: true,
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

// Для обновления пагинации слайдеров при ресайзе

window.addEventListener("resize", function() {
  if (window.innerWidth > 1469 && window.innerWidth < 1510) {
    window.location.reload();
  } else if (window.innerWidth < 1490 && window.innerWidth > 1480) {
    window.location.reload();
  }
});

// Эффекты для main-slider

/*let mainSlides = document.querySelectorAll(".main__slide");

let options = {
  threshold: 0.2,
};

let callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let activeEl = entry.target;
      activeEl.classList.add("main__slide--active");
    } else {
      let inactiveEl = entry.target;
      inactiveEl.classList.remove("main__slide--active");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

mainSlides.forEach(element => {
  observer.observe(element);
});*/
