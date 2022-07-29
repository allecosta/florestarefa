function SaveActivity() {
  $("#AddActivity").submit(function () {
    //Pseudo Id Generator
    var CardId = Date.now();

    //Adding ID to Cards
    var card_data = $(this).serializeArray();
    card_data.push({ name: "id", value: CardId });
    console.log(card_data);

    //Saving list of IDs
    if (localStorage.getItem("cards") == null) {
      localStorage.setItem("cards", CardId);
    } else {
      var CardArray = Array(localStorage.getItem("cards"));
      CardArray.push(CardId);
      localStorage.setItem("cards", CardArray);
    }

    //Storing each card Data;
    localStorage.setItem("card_data" + CardId, JSON.stringify(card_data));
  });
}

export { SaveActivity };
