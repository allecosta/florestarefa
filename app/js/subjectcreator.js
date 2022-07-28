let SubjectListSelector = document.getElementById("SubjectList");
let SubjectListArray = Array();

const SubjectListFetch = async () => {
  for (let i = 1; i <= 10; i++) {
    await GetSubject(i);
  }
  await SubjectListBuilder(SubjectListArray);
};

const GetSubject = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  SubjectListArray.push(data.name);
};
function SubjectListBuilder(list_subjects) {
  for (let subject of list_subjects) {
    SubjectListSelector.innerHTML =
      SubjectListSelector.innerHTML +
      `<option value="${subject}">${subject}</option>`;
  }
}

function start_up_app() {
  SubjectListFetch();
}

export { start_up_app };
