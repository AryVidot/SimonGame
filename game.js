//  Detecting mouse click

$("btn").click(function (event) {
  $("btn").addClass("pressed");
});

// New Sequence
function nextSequence() {
  var randomNumber = Math.random(n * 3);
  console.log(randomNumber);
}
