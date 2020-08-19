"use strict";
  (function () {
    var popup = document.querySelector(".popup");
    var popupSuccess = document.querySelector(".popup-success");
    var buttonsPrices = document.querySelectorAll(".price__button");
    var buttonsClosePopup = document.querySelectorAll(".close-button");
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

    buttonsClosePopup.forEach(function (buttonClosePopup) {
      buttonClosePopup.addEventListener("click", function (evt) {
        if (popup.classList.contains("popup--open")) {
          popup.classList.remove("popup--open");
        }
        if (popupSuccess.classList.contains("popup--open")) {
          popupSuccess.classList.remove("popup--open");
        }
      });
    })

    window.popup = {
      popup: popup,
      popupSuccess: popupSuccess
    };
  })();
