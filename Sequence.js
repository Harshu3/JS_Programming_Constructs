//Question 1 - Random Function Math.floor(Math.random() * 10); to get Single Digit.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log("Random Single Digit number: " + getRandomInt(10));

//Question 2 - Use Random to get Dice Number between 1 to 6
var diceRoll = Math.floor( Math.random() * 6 ) +1;
console.log("\nRandom Dice number: " + diceRoll);

//Question 3 - Add two Random Dice Number and Print the Result
var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
let add = diceRoll1 + diceRoll2;
console.log("\nAdd 2 Random Dice numbers= Dice 1: " + diceRoll1 + "  Dice 2: " + diceRoll2 + "  Addition: " + add);

//Question 4 - Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
var randomNumbers = [];
for (var i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 90 + 10));
}
console.log("\n5 random 2 digit values: " + randomNumbers);
var sum = randomNumbers.reduce(function(a, b) {
  return a + b;
});
var average = sum / randomNumbers.length;
console.log("The sum of the random values is: " + sum);
console.log("The average of the random values is: " + average);

//Question 5.1 - Unit Conversion (a) 1ft = 12 in then 42 in = ? ft
var inches = 42;
var feet = inches / 12;
console.log("\nConverted 42 inch into feet: " + feet); // 3.5

//Question 5.2 - Unit Conversion (b) Rectangular Plot of 60 feet x 40 feet in meters
var length = 60;
var width = 40;
var area = length * width;
var meters = area * 0.0929;
console.log("\nConverted 60 feet x 40 feet into meters: " + meters); //222.96

//Question 5.3 - Unit Conversion (c) Calculate area of 25 such plots in acres
var length = 60;
var width = 40;
var area = length * width;
var acres = (area / 43560) * 25;
console.log("\nArea of 25 plots in acres: " + acres); // 1.375