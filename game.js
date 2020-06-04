var gamePattern = [];

// Button Colour
var buttonColours = ["red", "blue", "green", "yellow"];

// New Sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); // 1-4
  var randomChosenColour = buttonColours[randomNumber];

  // console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);

  // Select button with same id + flashing
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence() + 1;
// console.log(gamePattern);

$("btn").click(function () {
  console.log("btn was clicked");
});
// var userChosenColour = document.
