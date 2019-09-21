var numberOfDrumButtons = document.querySelectorAll("button.drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    numberOfDrumButtons[i].addEventListener("click", function () {
        // var audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();
        // console.log(this.innerHTML);
        this.style.color = "#ffffff";
    });
}