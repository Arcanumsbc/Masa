import {newsData} from './news-data.js';
import Swiper from '../../vendor/swiper.js';
import {isMobile} from '../../utils/is-mobile';

const newsCardNode = document.querySelector('#news-card').content.querySelector('.news-card');
const sliderNews = document.querySelector('.news__slider');

const newsTabsNode = document.querySelectorAll('.news__btn');
const initNewsSlider = () => {
  renderNews(newsData);

  const swiper = new Swiper(sliderNews, {
    // cssMode: true,
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    // centeredSlides: true,
    speed: 300,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        heightAuto: true,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.news__arrows-next',
      prevEl: '.news__arrows-prev',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      dynamicMainBullets: 4,
      renderBullet: (index, className) => {
        return '<button class="' + className + '">' + (index + 1) + '</button>';
      },
    },
  });
  newsTabsNode.forEach((btn) =>
    btn.addEventListener('click', () => {
      newsTabsNode.forEach((el) => {
        el.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      const filter = btn.getAttribute('data-tab');
      if (filter === 'all') {
        renderNews(newsData);
      } else {
        const newNews = newsData.filter((el) => el.type === filter);
        renderNews(newNews);
      }
      swiper.update();
    })
  );
};

const renderNews = (arr) => {
  const newsSliderContainer = document.querySelector('.news__wrapper');
  const breakpointChecker = () => {
    switch (true) {
      case window.matchMedia('(min-width: 1200px)').matches: {
        newsSliderContainer.innerHTML = '';
        const slice = arr.slice(0, 12);
        slice.forEach((elem, index) => {
          const newCard = createNew(elem);
          if (index % 3 === 0) {
            newCard.classList.add('slide-active');
          }
          newsSliderContainer.appendChild(newCard);
        });
        break;
      }
      case window.matchMedia('(min-width: 768px)').matches: {
        newsSliderContainer.innerHTML = '';
        let newsDataChunked = chunkArray(arr, 4);
        newsDataChunked.forEach((item) => {
          const element = document.createElement('div');
          element.classList.add('slide-new');
          element.classList.add('swiper-slide');
          for (let i = 0; i < item.length; i++) {
            const newCard = createNew(item[i]);
            element.appendChild(newCard);
          }
          newsSliderContainer.appendChild(element);
        });
        break;
      }
      case window.matchMedia('(min-width: 320px)').matches: {
        newsSliderContainer.innerHTML = '';
        let newsDataChunkedMobile = chunkArray(arr, 2);
        newsDataChunkedMobile.forEach((item) => {
          const element = document.createElement('div');
          element.classList.add('slide-new');
          element.classList.add('swiper-slide');
          for (let i = 0; i < item.length; i++) {
            const newCard = createNew(item[i]);
            element.appendChild(newCard);
          }
          newsSliderContainer.appendChild(element);
        });
        break;
      }
    }
  };

  window.matchMedia('(min-width: 1200px)').addListener(breakpointChecker);
  window.matchMedia('(min-width: 768px)').addListener(breakpointChecker);
  window.matchMedia('(min-width: 320px)').addListener(breakpointChecker);
  breakpointChecker();
  return newsSliderContainer;
};

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const createNew = (elem) => {
  const newCard = newsCardNode.cloneNode(true);
  newCard.querySelector('img').src = elem.src;
  newCard.querySelector('img').srcset = elem.srcset;
  newCard.querySelector('source').srcset = elem.webp;
  newCard.querySelector('.news-card__date span').textContent = elem.date;
  newCard.querySelector('.news-card__title h3').textContent = elem.title;
  newCard.querySelector('.news-card__description p').textContent = elem.text;
  newCard.classList.add('swiper-slide');
  return newCard;
};

export {initNewsSlider, renderNews};
