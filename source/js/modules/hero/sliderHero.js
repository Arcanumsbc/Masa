import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';
const initHeroSlider = () => {

  const heroContainer = document.querySelector('.hero__slider');
  const heroControl = document.querySelector('.hero__control');

  heroControl.removeAttribute('data-nojs');

  const heroSlider = new Swiper(heroContainer, {
    allowTouchMove: isMobile(),
    watchSlidesProgress: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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

  return heroSlider;
};

export {initHeroSlider};
