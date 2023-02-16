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
            : "Читать далее >";
        });
      }
    });
  }
}
resizeScrenText();

Функция добавляет data-атрибут data-tabs-animate к .prices__body

function addDataAttr() {
  var width = window.innerWidth;
  if (width < 768) {
    var items = document.querySelectorAll(".tab-spoller");

    var secondItem = items[0];

    secondItem.dataset.tabsAnimate = "600";
  }
}
addDataAttr();

// function addDataAttr2() {
//   var items = document.querySelectorAll(".tab-spoller");
//   items.forEach((el) => {
//     var secondItem = items[0];
//     if (secondItem) {
//       secondItem.dataset.tabsAnimate = "600";
//     }
//     else {
//       console.log('errrrrr');
//     }
//   });
// }
