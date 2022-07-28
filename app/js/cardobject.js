function ObjectFromCard(JSONCard) {
  class Card {
    constructor(
      title,
      type,
      subject,
      deadline,
      content,
      xp,
      id,
      attendance = "0",
      completed = "0"
    ) {
      this.id = id; // contador automatico
      this.type = type; //varchar
      this.subject = subject; //varchar like type
      this.deadline = deadline; //date
      this.content = content; //varchar
      this.xp = xp; //number
      this.attendance = attendance; //boolean
      this.title = title;
    }
  }

  let CardObject = new Card(
    JSONCard[0].value,
    JSONCard[1].value,
    JSONCard[2].value,
    JSONCard[3].value,
    JSONCard[4].value,
    JSONCard[5].value,
    JSONCard[6].value
  );
  return CardObject;
}

export { ObjectFromCard };
