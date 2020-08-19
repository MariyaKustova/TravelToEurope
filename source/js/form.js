"use strict";
(function () {

  var forms = document.querySelectorAll(".form");
  var popup = window.popup.popup;
  var popupSuccess = window.popup.popupSuccess;

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
      evt.preventDefault();
      var messageErrorTel = form.querySelector(".form__label.form__number-phone");
      var messageErrorMail = form.querySelector(".form__label.form__mail");
      var formInputTel = messageErrorTel.querySelector(".form__input--tel");
      var formInputMail = messageErrorMail.querySelector(".form__input--mail");

      var isValidPhone = ValidPhone(formInputTel.value);
      if (!isValidPhone) {
        messageErrorTel.classList.add("form__error--active");
      } else {
        messageErrorTel.classList.remove("form__error--active");
        formInputTel.value = "";
        popup.classList.remove("popup--open");
        popupSuccess.classList.add("popup--open");
      }

      var isValidMail = ValidMail(formInputMail.value);
      if (!isValidMail) {
        messageErrorMail.classList.add("form__error--active");
      } else {
        messageErrorMail.classList.remove("form__error--active");
        formInputMail.value = "";
        popup.classList.remove("popup--open");
        popupSuccess.classList.add("popup--open");
      }
    });
  });
})();
