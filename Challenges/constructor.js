function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        console.log("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper(5, "Lilly", ["toilet", "lobby"]);
console.log(houseKeeper1);

var houseKeeper2 = new HouseKeeper(7, "Julie", ["hallway", "lobby"]);

houseKeeper2.clean();