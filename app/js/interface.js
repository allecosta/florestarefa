function DarkMode() {
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const themeImage = document.querySelector("#theme-image");

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      $("#theme-image").removeClass("bi-moon-stars-fill");
      $("#theme-image").addClass("bi-sun-fill");
      $("#background").css("transition", "3s ease");
      $("#background").css("background-image", "url(./media/7.png)");
      $("#body-teacher").css("transition", "3s ease");
      $(".tree").css("transition", "2s ease");
      $("#body-teacher").css("background-image", "url(../media/7.png)");
      $("#main_nav")
        .removeClass("navbar-light bg-light")
        .addClass("navbar-dark bg-dark");
      $(".tree").addClass("tree-night");
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
      $(".tree").css("transition", "2s ease");
      $(".tree").removeClass("tree-night");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
}

function ScrollTop() {
  $("#show-things").click(function () {
    $("#cards-container").scrollTop(0);
    let stored_text = String($("#show-things").html());
    let task = "bi-card-checklist";
    let forest = "fa-solid fa-tree";

    if (stored_text.includes(task)) {
      $("#show-things").html(
        '<div><i class="fa-solid fa-tree fa-lg"></i></div>Mostrar<br> Floresta'
      );
    } else {
      $("#show-things").html(
        '<div><i class="bi bi-card-checklist fa-lg"></i></div>Mostrar<br> Tarefas'
      );
    }
  });
}
export { DarkMode, ScrollTop };
