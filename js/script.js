
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    userInput = [($("#item1").val()),($("#item2").val()),($("#item3").val()),($("#item4").val()),($("#item5").val())]
    $("#output");
    var arrLength = userInput.length;

    for(var i = arrLength-1; i >= 0; i --){
      $("#myList").append("<li>" + userInput[i] + "</li>")
    }

    console.log(userInput);


  });
});
