const programsHeading = document.querySelector('.programs__heading');
const programsButton = document.querySelector('.programs__button');
const programsContainer = document.querySelector('.programs__container');
const programsControl = document.querySelector('.programs__control');
const reviewsTitle = document.querySelector('.reviews__title');
const reviewsContainer = document.querySelector('.reviews__container');
const reviewsControl = document.querySelector('.reviews__control');

function moveElement() {
  if (programsHeading.contains(programsButton) && programsContainer.contains(programsControl)) {
    programsHeading.removeChild(programsButton);
    programsContainer.removeChild(programsControl);
    programsContainer.appendChild(programsButton);
    programsHeading.appendChild(programsControl);
  }
  if (reviewsTitle.contains(reviewsTitle) && reviewsContainer.contains(reviewsControl)) {
    reviewsTitle.appendChild(reviewsControl);
  }
}
function moveElementsBack() {
  programsHeading.appendChild(programsButton);
  programsContainer.appendChild(programsControl);
  reviewsContainer.appendChild(reviewsControl);
  reviewsContainer.appendChild(reviewsControl);
}
function sliderWindowResize() {
  if (window.innerWidth < 768) {
    moveElement();
  } else {
    moveElementsBack();
  }
}

window.addEventListener('resize', sliderWindowResize);
sliderWindowResize();

export {sliderWindowResize};
