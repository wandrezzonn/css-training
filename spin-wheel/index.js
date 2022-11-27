const wheel = document.querySelector(".wheel");
const spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 9600);

spinBtn.onclick = function () {
  wheel.style.transform = `rotate(${value}deg)`;
  value = Math.ceil(Math.random() * 9600);
};
