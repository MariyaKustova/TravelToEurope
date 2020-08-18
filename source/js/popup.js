"use strict"

var popup = document.querySelector(".popup");
var buttonsPrices = document.querySelectorAll(".price__button");
var buttonClosePopup = document.querySelector(".popup__button-close");
var buttonsSliders = document.querySelectorAll(".slider__button");

var openPopup = function (arr) {
  arr.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("popup--open");
    });
  })
}

openPopup(buttonsPrices);

openPopup(buttonsSliders);

buttonClosePopup.addEventListener("click", function () {
  popup.classList.remove("popup--open");
});
