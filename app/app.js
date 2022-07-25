const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const themeImage = document.querySelector("#theme-image");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeImage.classList.remove("bi-moon-stars-fill");
    themeImage.classList.add("bi-sun-fill");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeImage.classList.remove("bi-sun-fill");
    themeImage.classList.add("bi-moon-stars-fill");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
