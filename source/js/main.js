"use strict";
/* mobile navigation */
document.querySelector(".nav__wrapper").classList.add("nav__wrapper--close");
document.querySelector(".nav__toggle").classList.add("nav__toggle--show");
function classToggle() {
  this.classList.toggle('nav__toggle--close');
  document.querySelector('.nav__wrapper').classList.toggle('nav__wrapper--close');
  document.querySelector('.nav__wrapper').classList.toggle('nav__wrapper--show');
}
document.querySelector('.nav__toggle').addEventListener('click', classToggle);

/* modal window open-modal*/
var link2 = document.querySelector(".open-modal");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");
link2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal--show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    }
  }
});
