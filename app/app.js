import { start_up_app } from "./js/subjectcreator.js";
import { darkmode } from "./js/darkmode.js";
import { progressbar } from "./js/progressbar.js";
import { SaveActivity } from "./js/cardcreator.js";

start_up_app();
darkmode();
progressbar();
SaveActivity();

// class HomeworkCard { constructor(id, subject, deadline, content, xp, attendance) { this.id = id;
//   // contador automatico this.type = "Homework"; //varchar this.subject = subject; //varchar like
//     type this.deadline = deadline; //date this.content = content; //varchar this.xp = xp;
//     //number this.attendance = this.attendance; //boolean } }

// oi = new TestCard("123", "Math", "01/09/2011", "Music");

// window.localStorage.setItem("oi", JSON.stringify(oi));

// function handleFormSubmit(event) { event.preventDefault();

//   const data = new FormData(event.target);

//   const formJSON = Object.fromEntries(data.entries()); console.log("");
// }
