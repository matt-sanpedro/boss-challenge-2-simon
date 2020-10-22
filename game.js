// array to hold the four colors


var gamePattern = [];

// function: generate a random number 0-3
function nextSequence() {
  // // min
  // console.log(Math.floor(0*4));
  // // max
  // console.log(Math.floor(.99999*4));
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomChosenColour = buttonColours[randomNumber];
  var fadeDuration = 350;

  $("#" + randomChosenColour).fadeOut(fadeDuration).fadeIn(fadeDuration).fadeOut(fadeDuration).fadeIn(fadeDuration);


  // return randomNumber;
  var playSound = new Audio("sounds/" + randomChosenColour + ".mp3");
  playSound.play();
}

nextSequence();
