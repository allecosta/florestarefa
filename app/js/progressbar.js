function progressbar() {
  $("input").on("click", function () {
    var emptyValue = 0;
    $("input:checked").each(function () {
      emptyValue += parseInt($(this).val());
    });
    $(".progress-bar")
      .css("width", emptyValue + "%")
      .attr("aria-valuenow", emptyValue);
  });
}

export { progressbar };
