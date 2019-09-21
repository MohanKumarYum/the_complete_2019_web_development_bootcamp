var diceImagePath = "./images/dice";

var imageFileExtension = ".png";


var randomNumber = () => { return Math.floor((Math.random() * 6) + 1) };

var randomNumber1 = randomNumber();

var randomNumber2 = randomNumber();


var randomImage1Src = diceImagePath + randomNumber1 + imageFileExtension;

var randomImage2Src = diceImagePath + randomNumber2 + imageFileExtension;


document.getElementsByClassName("img1")[0].setAttribute("src", randomImage1Src);

document.getElementsByClassName("img2")[0].setAttribute("src", randomImage2Src);


if (randomNumber1 === randomNumber2) {

    document.querySelector("h1").innerHTML = "Draw!"
}
else
    if (randomNumber1 > randomNumber2) {

        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    }
