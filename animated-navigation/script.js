const toggle = document.querySelector(".toggleMenu")
const navigation = document.querySelector(".navigation")
toggle.onclick = function () {
    navigation.classList.toggle("active")
}