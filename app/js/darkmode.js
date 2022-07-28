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
      $("#background").css("transition", "2s ease");
      $("#background").css("background-image", "url(./media/7.png)");
      $("#body-teacher").css("transition", "2s ease");
      $("#body-teacher").css("background-image", "url(../media/7.png)");
      $("#main_nav")
        .removeClass("navbar-light bg-light")
        .addClass("navbar-dark bg-dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeImage.classList.remove("bi-sun-fill");
      themeImage.classList.add("bi-moon-stars-fill");
      $("#background").css("transition", "2s ease");
      $("#background").css("background-image", "url(./media/3.png)");
      $("#body-teacher").css("transition", "2s ease");
      $("#body-teacher").css("background-image", "url(../media/3.png)");
      $("#main_nav")
        .removeClass("navbar-dark bg-dark")
        .addClass("navbar-light bg-light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
}
export { darkmode };
