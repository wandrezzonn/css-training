const wheel = document.querySelector(".wheel");
const spinBtn = document.querySelector(".spinBtn");
let value = 1000;
spinBtn.onclick = function () {
  wheel.style.transform = `rotate(${value}deg)`;
  value += 1000;
};
