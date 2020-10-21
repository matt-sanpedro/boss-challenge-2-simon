// array to hold the four colors
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// function: generate a random number 0-3
function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  // // min
  // console.log(Math.floor(0*4));
  // // max
  // console.log(Math.floor(.99999*4));

  return randomNumber;
}

// choose random color and add to end of gamePattern list
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

// console.log(gamePattern);

// jQuery select button with same id
