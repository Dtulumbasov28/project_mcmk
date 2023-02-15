/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице

  function resizeScrenSliderFeatures() {
    var width = window.innerWidth;
    if (width < 768) {
      var featuresSlide = new Swiper(".features__content", {
        modules: [Navigation],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,

        // Кнопки "влево/вправо"
        navigation: {
          prevEl: ".features__button-prev",
          nextEl: ".features__button-next",
        },

        // Брейкпоинты

        // breakpoints: {
        // 	320: {
        // 		slidesPerView: 1,
        // 		spaceBetween: 0,
        // 		autoHeight: true,
        // 	},
        // 	768: {
        // 		slidesPerView: 2,
        // 		spaceBetween: 20,
        // 	},
        // },
      });
    }
  }
  resizeScrenSliderFeatures();
  var promotionsSlider = new Swiper(".promotions__content", {
    // Указываем скласс нужного слайдера
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation],
    loop: true,
    observer: true,

    observeParents: true,
    speed: 800,
    slideToClickedSlide: true,
    centerInsufficientSlides: true,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".promotions__button-prev",
      nextEl: ".promotions__button-next",
    },

    // Брейкпоинты

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },

    // События
    on: {},
  });
  function resizeScrenSliderComplex() {
    var width = window.innerWidth;
    if (width < 992) {
      var complexSlide = new Swiper(".complex-approach__slider", {
        modules: [Navigation],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,

        // Кнопки "влево/вправо"
        navigation: {
          prevEl: ".complex-approach__button-prev",
          nextEl: ".complex-approach__button-next",
        },

        // Брейкпоинты

        // breakpoints: {
        // 	320: {
        // 		slidesPerView: 1,
        // 		spaceBetween: 0,
        // 		autoHeight: true,
        // 	},
        // 	768: {
        // 		slidesPerView: 2,
        // 		spaceBetween: 20,
        // 	},
        // },
      });
    }
  }
  resizeScrenSliderComplex();

  var photoThumbSlide = new Swiper(".photos__thumb", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 5,
    speed: 800,
    centerInsufficientSlides: true,
  });
  var photoSlide = new Swiper(".photos__col-img", {
    modules: [Navigation, Thumbs],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".photos__button-prev",
      nextEl: ".photos__button-next",
    },

    thumbs: {
      swiper: photoThumbSlide,
    },
  });
  var reviewSlide = new Swiper(".reviews__content", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 70,
    speed: 800,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews__button-prev",
      nextEl: ".reviews__button-next",
    },
  });
  var videoReviewSlide = new Swiper(".video-reviews__content", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 22,
    speed: 800,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".video-reviews__button-prev",
      nextEl: ".video-reviews__button-next",
    },
  });
  var employeesSlide = new Swiper(".employees__body", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".employees__button-prev",
      nextEl: ".employees__button-next",
    },
  });
  var citiesSlide = new Swiper(".cities__body", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 800,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".cities__button-prev",
      nextEl: ".cities__button-next",
    },
  });
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
