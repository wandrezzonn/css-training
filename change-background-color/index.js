const inputColor = document.getElementById("color");
inputColor.addEventListener("input", (element) => {
    document.body.style.background = element.target.value;
    this.removeActive();
});

function changeColor(color, element) {
    document.body.style.background = color;
    this.removeActive();
    element.classList.add("active");
}

function removeActive() {
    document.querySelectorAll(".active").forEach(function (item) {
        item.classList.remove("active");
    });
}