// Random number generator
var random1 = Math.floor(Math.random() * 6) + 1;
// Picks random images from image 1 to 6
var randomImage1 = "dice" + random1 + ".png";
var randomImageSource1 = "images/" + randomImage1;
// Selector
var image1 = document.querySelectorAll("img")[0];
// SetAttribute
image1.setAttribute("src", randomImageSource1);

/*  Dice-2    */
var random2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "/Dice/images/dice" + random2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
