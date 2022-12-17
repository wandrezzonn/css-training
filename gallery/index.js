const gallery = document.getElementById("gallery");
const photos = document.getElementById("photos");
const buttonScroll = document.querySelectorAll(".button-scroll");
const buttonLeft = document.getElementById("button-left");
function onLoad() {
  this.changeButtonVisibility();
}

function scrollPhotosLeft() {
  photos.scrollBy(-322, 0);
}

function scrollPhotosRight() {
  photos.scrollBy(322, 0);
}

function changeButtonVisibility() {
  buttonScroll.forEach((button) => {
    this.isButtonVisible()
      ? (button.style.visibility = "visible")
      : (button.style.visibility = "hidden");
  });
}

function isButtonVisible() {
  return (
    (photos.lastElementChild &&
      photos.lastElementChild.getBoundingClientRect().right + 50 >=
        gallery.getBoundingClientRect().right) ||
    this.firstElementLeftLessThan()
  );
}

function firstElementLeftLessThan() {
  return (
    photos.firstElementChild &&
    photos.firstElementChild.getBoundingClientRect().left <=
      buttonLeft.getBoundingClientRect().left
  );
}
