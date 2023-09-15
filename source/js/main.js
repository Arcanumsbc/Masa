import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './vendor/focus-visible-polyfill';
import './utils/scroll-lock';

import {Burger} from './modules/menu/burger';
import {initHeroSlider} from './modules/hero/sliderHero.js';
import {initAccordions} from './vendor/init-accordion.js';
import {initProgramsSlider} from './modules/programs/sliderPrograms.js';
import {sliderWindowResize} from './modules/programs/sliderResize.js';
import {initNewsSlider} from './modules/news/sliderNews.js';
import {initReviewsSlider} from './modules/rewiews/sliderReviews.js';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const burger = new Burger();
    window.burger = burger;
    burger.init();
    initAccordions();
    initHeroSlider();
    initProgramsSlider();
    sliderWindowResize();
    initNewsSlider();
    initReviewsSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
