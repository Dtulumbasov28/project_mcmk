// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Функция скрывает часть текста и добавляет кнопку "читать далее"

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

// Маска для номера телефона

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll('input[name="tel"]'),
    function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});

// Кнопка "вверх"

function scrollToTop() {
  // считываем кнопку
  var goTopBtn = document.querySelector(".go-top");
  if (goTopBtn) {
    // обработчик на нажатии
    goTopBtn.addEventListener("click", goTop);

    function goTop() {
      // пока не вернулись в начало страницы
      if (window.pageYOffset > 0) {
        // скроллим наверх
        window.scrollBy(0, -50); // второй аргумент - скорость
        setTimeout(goTop, 0); // входим в рекурсию
      }
    }
  } else {
    console.log("Кнопка вверх отсутствует");
  }
}
scrollToTop();
