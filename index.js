var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 wins";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 wins";

} else {
    document.querySelector("h2").innerHTML = "Match Drawn";

}