const apps = document.getElementById("apps");
const searchBar = document.getElementById("search-bar");
const search = document.getElementById("search");
const clear = document.getElementById("clear");
search.addEventListener("input", () => {
  search.value
    ? clear.classList.add("search-clear")
    : clear.classList.remove("search-clear");
});
apps.addEventListener("click", () => {
  searchBar.classList.toggle("retracted");
});

clear.addEventListener("click", () => {
  search.value = null;
  clear.classList.remove("search-clear");
});
