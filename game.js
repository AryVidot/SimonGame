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
}

nextSequence();
console.log(gamePattern);

var sound = new Audio("sounds/" + nextSequence + ".mp3");
sound.play();

//  Detecting mouse click
// $("btn").click(function (event) {
//   $("btn").addClass("pressed");
// });
