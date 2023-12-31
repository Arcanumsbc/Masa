import {iosVhFix} from './utils/ios-vh-fix';
import {CustomSelect} from './modules/select/custom-select.js';
import {Form} from './modules/form-validate/form';
import './vendor/focus-visible-polyfill';
import './utils/scroll-lock';

import {Burger} from './modules/menu/burger';
import {initHeroSlider} from './modules/hero/sliderHero';
import {initAccordions} from './vendor/init-accordion';
import {initProgramsSlider} from './modules/programs/sliderPrograms';
import {sliderWindowResize} from './modules/programs/sliderResize';
import {initNewsSlider} from './modules/news/sliderNews';
import {initReviewsSlider} from './modules/rewiews/sliderReviews';
import {initContactsMap} from './modules/map/map';
import {initModals} from './modules/modals/init-modals';

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
    const select = new CustomSelect();
    select.init();
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
    initContactsMap();
    initModals();
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
