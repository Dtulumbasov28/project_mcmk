// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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
