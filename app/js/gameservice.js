function GameService() {
  $("input").on("click", function () {
    let CardsSaveState = JSON.parse(localStorage.getItem("CardsSaveState"));
    let CardKeys = Object.keys(CardsSaveState);
    let checkbox_checker_value = 0;

    for (let card of CardKeys)
      if (CardsSaveState[card] === true) {
        //Getting XP value because I'm stubborn
        let xp_value = $(
          $($($(`#${card}`).children().children().children()[1]).children()[3])
        ).prop("innerHTML");
        xp_value = Number(xp_value.replace(/\D/g, ""));
        checkbox_checker_value += xp_value;
      }

    //Parsing Profile Data;
    let profile_data = JSON.parse(localStorage.getItem("profile_data"));

    //Saving Profile_XP;
    profile_data.xp = checkbox_checker_value;

    //Seting Level;
    let student_level = Math.floor(profile_data.xp / 100);
    localStorage.setItem("profile_data", JSON.stringify(profile_data));

    //Moving the Progress Bar
    $(".progress-bar")
      .css("width", profile_data.xp - student_level * 100 + "%")
      .attr("aria-valuenow", profile_data.xp);
    $("#profile_xp").html(profile_data.xp);
    $("#profile_level").html(student_level);
    for (let i = 0; i <= 6; i++) {
      if (i <= student_level) {
        $(`#lvl${i}`).removeClass("d-none").addClass("slide-in-bottom");
      } else {
        $(`#lvl${i}`).removeClass("slide-in-bottom").addClass("d-none");
      }
    }
  });
}

export { GameService };
