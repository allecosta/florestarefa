function ProfileService() {
  function SavingCards() {
    let CardsStrings = localStorage.getItem("cards");
    if (CardsStrings == null) {
      CardsStrings = {};
    } else {
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
          localStorage.setItem(
            "CardsSaveState",
            JSON.stringify(CardsSaveState)
          );
        }
      });
    }
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

export { ProfileService };
