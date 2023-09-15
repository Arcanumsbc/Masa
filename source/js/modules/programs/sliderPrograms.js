import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';
const initProgramsSlider = () => {
  const programsContainer = document.querySelector('.programs__slider');
  const programsControl = document.querySelector('.programs__arrows');

  programsControl.removeAttribute('data-nojs');

  const programsSlider = new Swiper(programsContainer, {
    // cssMode: true,
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    speed: 300,

    navigation: {
      nextEl: '.programs__arrows-next',
      prevEl: '.programs__arrows-prev',
    },

    scrollbar: {
      el: '.programs__scrollbar',
      draggable: true,
    },

    breakpoints: {
      1200: {
        spaceBetween: 32,
        scrollbar: {
          enabled: true,
          dragSize: 392,
        },
      },
      768: {
        spaceBetween: 30,
        scrollbar: {
          enabled: true,
          dragSize: 324,
        },
      },

      320: {
        spaceBetween: 30,
        scrollbar: {
          enabled: false,
        },
      },
    },
  });

  return programsSlider;
};

export {initProgramsSlider};


