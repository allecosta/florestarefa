function SaveActivity() {
  $("#AddActivity").submit(function () {
    // Get all the forms elements and their values in one step
    console.log("funcionando");
    let a = randomUUID();
    console.log(a);
    var saved_data = $(this).serializeArray();

    localStorage.setItem("saved_data", JSON.stringify(saved_data));
  });
}

export { SaveActivity };
