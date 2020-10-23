// array to hold the four colors


var gamePattern = [];
var userClickedPattern = [];
var level = 0;

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

  playSound(randomChosenColour);

  level+=1;
  $("h1").text("Level " + level);
  // console.log(level);
}

function playSound(name) {
  // play sound
  var playSound = new Audio("sounds/" + name + ".mp3");
  playSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// event listener: button click
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  // console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

// event listener: press any key to start
$(document).keypress(function() {
  // console.log($(this));
  $(this).on(nextSequence());
});
