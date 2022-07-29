import { ObjectFromCard } from "./cardobject.js";

//Adding procedural animation
function CardLoader(callback) {
  let CardsStrings = localStorage.getItem("cards");
  if (CardsStrings == null) {
    CardsStrings = {};
  } else {
    let CardsArray = CardsStrings.split(",");
    for (let i = 0; i < CardsArray.length; i++) {
      document.styleSheets[3].insertRule(
        `.slide-in-left div:nth-of-type(${i + 1}) {
      animation: slide-in-left 0.7s ease-in-out both;
      animation-delay: ${0 + 0.3 * i}s;
      
  }`,
        4 + i
      );
    }
  }

  callback();
}

//Loading Cards from Database
function LoadCards() {
  //Parsing Cards Array

  let CardsStrings = localStorage.getItem("cards");
  let CardsArray = CardsStrings.split(",");

  for (let CardId of CardsArray) {
    //Parsing each card
    let CardAtt = JSON.parse(localStorage.getItem("card_data" + CardId));
    let CardObject = ObjectFromCard(CardAtt);

    //FINALLY building a card
    $("#cards-container").append(`
      <div id=${CardObject.id} class="card container-fluid rounded mt-3">
      <div class="card-body row">
          <div class='col'>
              <h5 class="card-title display-5">${CardObject.title}</h5>
              <div class="mt-1">
                  <button type="button" class="btn btn-homework btn-sm
                  font-weight-bold">${CardObject.type}</button>
                  <button type="button" class="btn btn-subj-math btn-sm
                  font-weight-bold">${CardObject.subject}</button>
                  <button type="button" class="btn btn-sm btn-deadline
                  font-weight-bold">${CardObject.deadline}</button>
                  <button type="button" class="btn btn-exp btn-sm
                            font-weight-bold">XP: ${CardObject.xp} </button>
                  <div class="col-1 task-checkbox align-self-center justify-self-center">
                  <input name="done" class="xp_done done" type="checkbox" value="${CardObject.xp}">
                  </div>
                  
              </div>

              <p class="card-text mt-3 text-justify">${CardObject.content}</p>
          </div>


      </div>`);
  }
}

export { CardLoader, LoadCards };
