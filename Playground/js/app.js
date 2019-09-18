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