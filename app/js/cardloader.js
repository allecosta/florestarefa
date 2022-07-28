import { ObjectFromCard } from "./cardobject.js";

function LoadCards() {
  let CardsStrings = localStorage.getItem("cards");
  let CardsArray = CardsStrings.split(",");

  for (let CardId of CardsArray) {
    let CardAtt = JSON.parse(localStorage.getItem("card_data" + CardId));

    let CardObject = ObjectFromCard(CardAtt);

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
              </div>

              <p class="card-text mt-3 text-justify">${CardObject.content}</p>
          </div>

          <div class="col-sm-1 timeline-container justify-self-center">
          </div>

      </div>
  </div>`);
    console.log("cabou iteraçao");
  }
}

export { LoadCards };
