function darkmode() {
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const themeImage = document.querySelector("#theme-image");

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      themeImage.classList.remove("bi-moon-stars-fill");
      themeImage.classList.add("bi-sun-fill");
      $("body").css("transition", "2s ease");
      document.getElementById("background").style.backgroundImage =
        "url(./media/7.png)";
      document
        .getElementById("main_nav")
        .classList.remove("navbar-light", "bg-light");
      document
        .getElementById("main_nav")
        .classList.add("navbar-dark", "bg-dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeImage.classList.remove("bi-sun-fill");
      themeImage.classList.add("bi-moon-stars-fill");
      document.getElementById("background").style.backgroundImage =
        "url(./media/3.png)";
      document
        .getElementById("main_nav")
        .classList.remove("navbar-dark", "bg-dark");
      document
        .getElementById("main_nav")
        .classList.add("navbar-light", "bg-light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
}
export { darkmode };
