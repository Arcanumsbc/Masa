import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';
const initHeroSlider = () => {

  const heroContainer = document.querySelector('.hero__slider');
  const heroControl = document.querySelector('.hero__control');

  heroControl.removeAttribute('data-nojs');

  const heroSlider = new Swiper(heroContainer, {
    allowTouchMove: isMobile(),
    watchSlidesProgress: true,
    autoplayResume: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      autoplayResume: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.addEventListener('focusout', (e) => {
    if (e.target.classList.contains('swiper-slide')) {
      Swiper.resume();
    }
  });

  heroContainer.addEventListener('keydown', function (event) {
    if (event.keyCode === 'Tab') {
      event.preventDefault();
    }
  });

  return heroSlider;
};

export {initHeroSlider};
