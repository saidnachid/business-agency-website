function addEvent(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener(eventType, callback);
  }
}

let navbar = document.querySelector("[data-navbar]");
let navTogglers = document.querySelectorAll("[data-nav-toggler]");
let overlay = document.querySelector("[data-overlay]");

function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-toggle");
}

addEvent(navTogglers, "click", toggleNavbar);

let header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

let sliders = document.querySelectorAll("[data-slider]");

function initSlider(cuurentSlider) {
  let sliderContainer = cuurentSlider.querySelector("[data-slider-container]");
  let sliderPrevBtn = cuurentSlider.querySelector("[data-slider-prev]");
  let sliderNextBtn = cuurentSlider.querySelector("[data-slider-next]");

  let currentSliderPos = 0;

  function moveSliderItem() {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSliderPos].offsetLeft}px)`;
  }

  function slideNext() {
    let slideEnd = currentSliderPos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSliderPos = 0;
    } else {
      currentSliderPos++;
    }
    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  function slidePrev() {
    if (currentSliderPos <= 0) {
      currentSliderPos = sliderContainer.childElementCount - 1;
    } else {
      currentSliderPos--;
    }
    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);
}

sliders.forEach((slider) => initSlider(slider));

let accordions = document.querySelectorAll("[data-accordion]");
let lastActiveAccordion = accordions[0];

function initAccordion(currentAccordion) {
  let accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  function expandAccodrdion() {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }
    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }
  accordionBtn.addEventListener("click", expandAccodrdion);
}

accordions.forEach((accordion) => initAccordion(accordion));
