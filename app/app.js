
/*Acessibility LocalStorage */

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    document.getElementById('background').style.backgroundImage = "url(./media/7.png)";
  }
  else{
    document.getElementById('background').style.backgroundImage = "url(./media/3.png)";
  }
}  

//PROGRESS BAR
$('input').on('click', function() {
  let emptyValue = 0; 
  $('input:checked').each(function() {
      emptyValue += parseInt($(this).val());
  });
  $('.progress-bar').css('width', emptyValue + '%').attr('aria-valuenow', emptyValue); 
});  


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


/*Show Task Text */

function showText (n) {
  const listheader= document.getElementsByClassName("list-header");
  const listIcon= document.getElementsByClassName("list-icon")
  listIcon[n].classList.toggle("rotate");
  listheader[n].classList.toggle("hide");
}  




/* Acessibility Functions */

function LightTheme(){
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem('theme', 'light');
  document.getElementById('background').style.backgroundImage = "url(./media/3.png)";
} 

function DarkTheme(){
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem('theme', 'dark')
  document.getElementById('background').style.backgroundImage = "url(./media/7.png)";
}

function ColorBlindTheme() {
  document.documentElement.setAttribute("data-theme", "colorblind");
  localStorage.setItem('theme', 'colorblind');
  document.getElementById('background').style.backgroundImage = "url(./media/3.png)";
}

function EpilepsyTheme() {
  document.documentElement.setAttribute("data-theme", "epilepsy");
  localStorage.setItem('theme', 'epilepsy');
  document.getElementById('background').style.backgroundImage = "url(./media/3.png)";
}
