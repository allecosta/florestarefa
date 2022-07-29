function ProfileService() {
  function SavingCards() {
    let CardsStrings = localStorage.getItem("cards");
    let CardsArray = CardsStrings.split(",");
    let CardsSaveState = JSON.parse(localStorage.getItem("CardsSaveState"));

    //Almost Saving Values let CardsSaveStateKeys = Object.keys(CardsSaveState); let
    // CardsSaveStateValues = Object.values(CardsSaveState);

    // for (let i = 0; i < CardsSaveStateKeys.length; i++) { $( $( $(
    //   $(`#${CardsSaveStateKeys[i]}`).children().children().children()[1] ).children()[4]
    //     ).children() ).prop("checked", CardsSaveStateValues[i]); }

    $("input").on("click", function () {
      for (let card of CardsArray) {
        //What a mess;
        let checkbox_checker = $(
          $(
            $($(`#${card}`).children().children().children()[1]).children()[4]
          ).children()
        ).prop("checked");
        CardsSaveState[`${card}`] = checkbox_checker;
        localStorage.setItem("CardsSaveState", JSON.stringify(CardsSaveState));
      }
    });
  }
  class Profile {
    constructor(name, age, xp = 0) {
      this.name = name;
      this.age = age;
      this.xp = xp;
    }
  }
  function ProfileCreator() {
    let profile_data = new Profile("Thomas", "28", 0);
    localStorage.setItem("profile_data", JSON.stringify(profile_data));
  }
  function ProfileBuilder(profile) {
    let ProfileData = JSON.parse(localStorage.getItem(profile));
    $("#profile_name").html(`Bem vindo, ${ProfileData.name}`);
    $("#profile_age").html(ProfileData.age);
    $("#profile_xp").html(ProfileData.xp);
  }

  ProfileCreator();
  ProfileBuilder("profile_data");
  SavingCards();
}

function InitializeData() {
  if (localStorage.getItem("CardsSaveState") == null) {
    var data = {
      CardsSaveState: '{"1658965466193":false,"1659057187912":false}',
      card_data1658965466193:
        '[{"name":"ActivityTitle","value":"Prova - Trigonometria"},{"name":"ActivityType","value":"Test"},{"name":"SubjectList","value":"Matemática"},{"name":"ActivityDeadline","value":"2022-07-28"},{"name":"ActivityContent","value":"Teorema de Pitágoras. Estudar Capítulo 9 do livro."},{"name":"ActivityXP","value":"90"},{"name":"id","value":1658965466193}]',
      card_data1659057187912:
        '[{"name":"ActivityTitle","value":"Prova de Inglês"},{"name":"ActivityType","value":"Test"},{"name":"SubjectList","value":"Inglês"},{"name":"ActivityDeadline","value":"2022-09-29"},{"name":"ActivityContent","value":"Unidade 01 e 02: Verb to be + Present Simple."},{"name":"ActivityXP","value":"80"},{"name":"id","value":1659057187912}]',
      cards: "1658965466193,1659057187912",
    };
    Object.keys(data).forEach(function (k) {
      localStorage.setItem(k, data[k]);
    });
  }
}

export { InitializeData, ProfileService };
