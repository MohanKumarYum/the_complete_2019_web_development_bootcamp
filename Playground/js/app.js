// /**
//  * Welcome to the Stanford Karel IDE.
//  * This is a free space for you to 
//  * write any Karel program you want.
//  **/
// function main() {
//     /* Line 1 */
//     putBeeper();
//     oddLineSteps();
//     turnLeft();

//     /* Line 2*/

//     evenLineSteps();

//     /* Line 3 */
//     oddLineStepsTurnRight();
//     turnLeft();

//     /* Line 4 */
//     evenLineSteps();

//     /* Line 5  */
//     oddLineStepsTurnRight();
// }

// function oddLineSteps() {
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
// }

// function evenLineSteps() {
//     move();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
// }

// function oddLineStepsTurnRight() {
//     move();
//     putBeeper();
//     turnRight();
//     oddLineSteps();
// }


// function getMilk(money) {   
//     var rawQuotient = money/1.5;
//     var remainder = rawQuotient % 1;
//     var quotient = rawQuotient - remainder;

//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("You can buy " + quotient + " Bottles of Milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//   getMilk(14);

// Create your function below this line.

// function bmiCalculator(weight, height) {

//     return Math.floor(weight / (height * height));

// }

// console.log(bmiCalculator(100, 1.73)); 

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.

*/

/* Love Calculator */

// function bmiCalculator (weight, height) {
//     return Math.floor(weight / (height * height));
// }

// var bmi = bmiCalculator (60, 2);

// if (bmi < 18.5) {
//     console.log("Your BMI is " + bmi + ", so you are underweight");
// }
// if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Your BMI is " + bmi + ", so you have a normal weight.");
// }
// if (bmi > 24.9) {
//     console.log("Your BMI is " + bmi + ", so you are overweight");
// }

// var guestList = [
//     "Angela",
//     "Jack",
//     "Pam",
//     "James",
//     "Lara",
//     "Mohan",
//     "Kumar",
//     "Shifali"
// ];

// var yourName = prompt("What is your name?");

// if (guestList.includes(yourName)) {
//     console.log("Welcome!");
// } else {
//     console.log("Sorry!, next time.");
// }

// var output = [];
// var counter = 1;

// function fizzBuzz() {

//     var value;
//     if (counter % 3 === 0 && counter % 5 === 0) value = "FizzBuzz"
//     else if (counter % 3 === 0) value = "Fizz";
//     else if (counter % 5 === 0) value = "Buzz";
//     else value = counter;

//     output.push(value);

//     counter++;

//     console.log(output);
// }

// fizzBuzz();


// var maxCount = 99;
// var counter = 99;

// function Beer() {
//     while (counter > 0) {
//         console.log(counter + " bottles of beer on the wall, " + counter + " bottles of beer. Take one down and pass it around, " + (--counter) + " bottles of beer on the wall.");
//     }

//     console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + maxCount + " bottles of beer on the wall.")
// }

// function fibonacciGenerator(n) {
//     var outputArr = [];

//     var prevNumber = 0;

//     if (n === 0) return console.log("Number has to be greater than 0");
//     if (n === 1) return outputArr.push(0);

//     outputArr.push(0);
//     outputArr.push(1);

//     for (var i = 2; i < n; i++) {
//         outputArr[i] = outputArr[i - 2] + outputArr[i - 1];
//     }

//     return outputArr;
// }