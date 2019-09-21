var numberOfDrumButtons = document.querySelectorAll("button.drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    drumButtons[i].addEventListener("click", () => { alert("I got Clicked!") });
}