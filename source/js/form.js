"use strict"

var forms = document.querySelectorAll(".popup__form");
var popupSuccess = document.querySelector(".popup-success");

function ValidMail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var valid = re.test(email);
  return valid;
}

function ValidPhone(phone) {
  var re = /^\d[\d\(\)\ -]{4,14}\d$/;
  var valid = re.test(phone);
  return valid;
}

forms.forEach(function (form) {
  form.addEventListener("submit", function (evt) {
    var formInputTel = form.querySelector(".form__input--tel");
    var formInputMail = form.querySelector(".form__input--mail");
    var messageErrorTel = form.querySelector(".form__error--tel");
    var messageErrorMail = form.querySelector(".form__error--mail");

    var isValidPhone = ValidPhone(formInputTel.value);
    if (!isValidPhone) {
      evt.preventDefault();
      messageErrorTel.classList.add("form__error--active");
    } else {
      messageErrorTel.classList.remove("form__error--active");
    }

    var isValidMail = ValidMail(formInputMail.value);
    if (!isValidMail) {
      evt.preventDefault();
      messageErrorMail.classList.add("form__error--active");
    } else {
      messageErrorMail.classList.remove("form__error--active");
    }

    if (isValidPhone && isValidMail) {
      evt.preventDefault();
      popupSuccess.classList.add("popup--open")
    }
  });
});
