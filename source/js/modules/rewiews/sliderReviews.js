import Swiper from '../../vendor/swiper.js';
import {isMobile} from '../../utils/is-mobile.js';

const initReviewsSlider = () => {
  const reviewsContainer = document.querySelector('.reviews__slider');
  const reviewsControl = document.querySelector('.reviews__arrows');

  reviewsControl.removeAttribute('data-nojs');

  const reviewsSlider = new Swiper(reviewsContainer, {
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    speed: 300,

    navigation: {
      nextEl: '.reviews__arrows-next',
      prevEl: '.reviews__arrows-prev',
    },

    scrollbar: {
      el: '.reviews__scrollbar',
      draggable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: '2',
        spaceBetween: 32,
        scrollbar: {
          enabled: true,
          dragSize: 392,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          enabled: true,
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          enabled: false,
        },
      },
    },
  });

  return reviewsSlider;
};

export {initReviewsSlider};
