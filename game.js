// array to hold the four colors


var gamePattern = [];

// function: generate a random number 0-3
function nextSequence() {
  // // min
  // console.log(Math.floor(0*4));
  // // max
  // console.log(Math.floor(.99999*4));

  // generate random number and color
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColours = ["green", "red", "yellow", "blue"];
  var randomChosenColour = buttonColours[randomNumber];


  // play animation, set the fade duration
  var fadeDuration = 100;
  $("#" + randomChosenColour).fadeOut(fadeDuration).fadeIn(fadeDuration).fadeOut(fadeDuration).fadeIn(fadeDuration);

  // play sound
  var playSound = new Audio("sounds/" + randomChosenColour + ".mp3");
  playSound.play();

}

nextSequence();

// event listener
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
});
