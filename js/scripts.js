var factorial = function(userNum) {
  var workingNumber = 1
  for (index = userNum; index >= 1; index -= 1)  {
    workingNumber *= index;
  }
  alert(workingNumber)
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    var userInput = parseInt($("#user-num").val());
    factorial(userInput);
    event.preventDefault();
  });

});
