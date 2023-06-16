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
