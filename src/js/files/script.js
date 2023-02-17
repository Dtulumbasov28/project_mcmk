// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//

function resizeScrenText() {
  var width = window.innerWidth;
  if (width < 768) {
    document.querySelectorAll(".block-text").forEach((el) => {
      var button = el.querySelector(".block-text__button");
      if (button) {
        button.addEventListener("click", () => {
          el.classList.toggle("disclosed");
          button.textContent = el.classList.contains("disclosed")
            ? "Скрыть"
            : "Читать далее";
        });
      }
    });
  }
}
resizeScrenText();

// Функция добавляет data-атрибут data-tabs-animate к .tab-spoller

function addDataAttr() {
  var width = window.innerWidth;
  if (width < 768) {
    // var items = document.querySelector(".tab-spoller");
    document.querySelectorAll(".tab-spoller").forEach((el) => {
      if (el) {
        el.dataset.tabsAnimate = "600";
      } else {
        console.log("Табов не найдено");
      }
    });
  }
}
addDataAttr();


// Маска

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7 (___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll('input[name="tel"]');
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
