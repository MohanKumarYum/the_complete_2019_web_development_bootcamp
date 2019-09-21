var numberOfDrumButtons = document.querySelectorAll("button.drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    numberOfDrumButtons[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });
}

// Any Key Pressed

document.addEventListener("keydown", function (event) {

    var keyPressed = event.key;

    makeSound(keyPressed);

    buttonAnimation(keyPressed);
})

/* Function to make sound */

function makeSound(Key) {

    switch (Key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(event.key);
            break;
    }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(() => { activeButton.classList.remove("pressed"); }, 100);
}