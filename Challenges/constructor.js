function HouseKeeper (yearsOfExperience, name, cleaningRepertoire){
this.yearsOfExperience = yearsOfExperience;
this.name = name;
this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(5, "Lilly", ["toilet", "lobby"]);
console.log('houseKeeper1:', houseKeeper1)