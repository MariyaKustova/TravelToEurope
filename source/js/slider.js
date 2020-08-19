"use strict";
(function () {
  var sliderInputs = document.querySelectorAll(".slider__input");
  var labels = document.querySelectorAll(".slider__label");

  sliderInputs.forEach(function (sliderInput) {
    sliderInput.addEventListener("change", function (evt) {
      labels.forEach(function (label) {
        label.classList.remove("slider__label--active");
        var labelAttribute = label.getAttribute("for");
        if (labelAttribute === sliderInput.id) {
          label.classList.add("slider__label--active");
        }
      })
    })
  })
})();
