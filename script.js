// Header scroll___________________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY || document.documentElement.scrollTop > 0;
    header.classList.toggle("header-transparent", isScrolled);
  });
});

// Slider__________________________________________________________________________

const wrapper = document.querySelector(".cards-wrapper");
const dots = document.querySelectorAll(".dot");
const arrows = document.querySelectorAll(".arrow");
let activeDotNum = 0;

// Assign data-num and click events to dots using forEach and arrow functions
dots.forEach((dot, idx) => {
  dot.dataset.num = idx;
  dot.addEventListener("click", () => navigateToSlide(idx));
});

// Assign click events to arrows using forEach and arrow functions
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) =>
    navigate(event.target.classList.contains("left") ? "left" : "right")
  );
});

// Function to navigate to a slide with ES6 features
const navigateToSlide = (idx) => {
  if (idx !== activeDotNum) {
    const displayAreaWidth = wrapper.parentElement.clientWidth;
    wrapper.style.transform = `translateX(-${displayAreaWidth * idx}px)`;
    dots[activeDotNum].classList.remove("active");
    dots[idx].classList.add("active");
    activeDotNum = idx;
  }
};

// Function to navigate based on direction with ternary operators
const navigate = (direction) => {
  const totalSlides = dots.length;
  const idx =
    direction === "left"
      ? activeDotNum > 0
        ? activeDotNum - 1
        : totalSlides - 1
      : activeDotNum < totalSlides - 1
      ? activeDotNum + 1
      : 0;
  navigateToSlide(idx);
};

// Accordion__________________________________________________________________________

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll(".accordion-header").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});
