//Question 1 - Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log("5 random 3 digit values: " + numbers);
console.log("The minimum value is " + Math.min(...numbers));
console.log("The maximum value is " + Math.max(...numbers));

//Question 2 - Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
// Create a random number between 0 and 1.
var randomNumber = Math.random();
if (randomNumber < 0.5) {
  console.log("\nAfter flipping a coin" + "\nHeads");
} else {
  console.log("\nAfter flipping a coin" + "\nTails");
}
