document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY || document.documentElement.scrollTop;

    // Add or remove the transparent class based on scroll position
    if (scroll > 0) {
      header.classList.add("header-transparent");
    } else {
      header.classList.remove("header-transparent");
    }
  });
});
