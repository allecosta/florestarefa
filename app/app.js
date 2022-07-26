import { start_up_app } from "./js/subjectcreator.js";
import { darkmode } from "./js/darkmode.js";
import { progressbar } from "./js/progressbar.js";

start_up_app();
darkmode();
progressbar();

// class HomeworkCard { constructor(subject, deadline, content) { this.id = id; this.type =
//   "Homework"; this.subject = subject; this.deadline = deadline; this.content = content; } }

// class AttendanceCard { constructor(date, attendance) { this.id = id; this.type = "Attendance";
//   this.date = date; this.attendance = attendance; } }

// class TestCard { constructor(subject, date, content) { this.id = id; this.type = "Test";
//   this.subject = subject; this.date = date; this.content = content; } }

// oi = new TestCard("123", "Math", "01/09/2011", "Music");

// window.localStorage.setItem("oi", JSON.stringify(oi));

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());
  console.log("");
}

const form = document.querySelector(".contact-form");
form.addEventListener("submit", handleFormSubmit);
