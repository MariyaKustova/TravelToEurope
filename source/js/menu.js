"use strict"

var body = document.querySelector("body");
var navigation = document.querySelector(".main-nav");
var buttonMenu = document.querySelector(".main-nav__toggle-open");
var buttonCloseMenu = document.querySelector(".main-nav__toggle-close");

body.classList.remove('no-js');

buttonMenu.addEventListener("click", function () {
  navigation.classList.add("main-nav--open");
});

buttonCloseMenu.addEventListener("click", function () {
  navigation.classList.remove("main-nav--open");
});
