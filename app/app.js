import { start_up_app } from "./js/subjectcreator.js";
import { darkmode } from "./js/darkmode.js";
import { progressbar } from "./js/progressbar.js";
import { SaveActivity } from "./js/cardcreator.js";
import { LoadCards } from "./js/cardloader.js";

start_up_app();
darkmode();
progressbar();
SaveActivity();
LoadCards();

$(document).ready(function () {
  $("#AddActivitybtn").click(function () {
    $("#AddActivityContainer").toggle();
  });
});

// oi = new TestCard("123", "Math", "01/09/2011", "Music");

// window.localStorage.setItem("oi", JSON.stringify(oi));

// function handleFormSubmit(event) { event.preventDefault();

//   const data = new FormData(event.target);

//   const formJSON = Object.fromEntries(data.entries()); console.log("");
// }
