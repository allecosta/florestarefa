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

class HomeworkCard {
  constructor(subject, deadline, content) {
    this.id = id;
    this.type = "Homework";
    this.subject = subject;
    this.deadline = deadline;
    this.content = content;
  }
}

class AttendanceCard {
  constructor(date, attendance) {
    this.id = id;
    this.type = "Attendance";
    this.date = date;
    this.attendance = attendance;
  }
}

class TestCard {
  constructor(subject, date, content) {
    $this.id = id;
    this.type = "Test";
    this.subject = subject;
    this.date = date;
    this.content = content;
  }
}

SubjectListSelector = document.getElementById("SubjectList");
SubjectList = Array("a", "b", "c", "d");

SubjectListBuilder(SubjectList);

function SubjectListBuilder(SubjectList) {
  for (subject of SubjectList) {
    console.log(subject);
    SubjectListSelector.innerHTML =
      SubjectListSelector.innerHTML +
      `<option value="${subject}">${subject}</option>`;
  }
}

oi = new TestCard("123", "Math", "01/09/2011", "Music");

window.localStorage.setItem("oi", JSON.stringify(oi));
