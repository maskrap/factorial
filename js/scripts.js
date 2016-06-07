var factorial = function(userNum) {
  if (userNum === 0) {
    alert(1);
  } else{
  var workingNumber = 1;
  for (index = userNum; index >= 1; index -= 1)  {
    workingNumber *= index;
  }
  alert(workingNumber)
  }
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    var userInput = parseInt($("#user-num").val());
    factorial(userInput);
    event.preventDefault();
  });
});
