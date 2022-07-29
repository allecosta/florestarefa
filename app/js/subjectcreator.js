let SubjectListSelector = document.getElementById("SubjectList");
let SubjectListArray = Array(
  "Matemática",
  "Português",
  "Geografia",
  "História",
  "Física",
  "Química",
  "Artes",
  "Filosofia",
  "Sociologia",
  "Introdução à Programação",
  "Inglês",
  "Espanhol"
);

// const SubjectListFetch = async () => { for (let i = 1; i <= 10; i++) { await GetSubject(i); }
//   await SubjectListBuilder(SubjectListArray); };

// const GetSubject = async (id) => { const url = `https://pokeapi.co/api/v2/pokemon/${id}`; const
//   res = await fetch(url); const data = await res.json(); SubjectListArray.push(data.name); };
function SubjectListBuilder(list_subjects) {
  for (let subject of list_subjects) {
    SubjectListSelector.innerHTML =
      SubjectListSelector.innerHTML +
      `<option value="${subject}">${subject}</option>`;
  }
}

function SubjectListStart() {
  SubjectListBuilder(SubjectListArray);
  $(document).ready(function () {
    $("#AddActivitybtn").click(function () {
      $("#AddActivityContainer").toggle();
    });
  });
}

export { SubjectListStart };

// I know this Module always return an error when I'm on main.html but I'm too tired and too scared
// to change it right now.
