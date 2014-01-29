$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("#grandma").show();
    $("#grandma_says").html = "";

    var say_to_grandma = $("input:first").val();

    $.post("/grandma/", say_to_grandma, function (data) {
      $("#grandma_says")[0].innerHTML = data;
    });
  });
});
