const programsHeading = document.querySelector('.programs__heading');
const programsButton = document.querySelector('.programs__button');
const programsContainer = document.querySelector('.programs__container');
const programsControl = document.querySelector('.programs__control');
function moveElement() {
  if (programsHeading.contains(programsButton) && programsContainer.contains(programsControl)) {
    programsHeading.removeChild(programsButton);
    programsContainer.removeChild(programsControl);
    programsContainer.appendChild(programsButton);
    programsHeading.appendChild(programsControl);
  }
}
function moveElementsBack() {
  programsHeading.appendChild(programsButton);
  programsContainer.appendChild(programsControl);
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
