//number guesser between 1 and 20
// tell the user to guess anum
//guess a random num between 1 and 20
//ask the user if the number is greater than or less than thier number
//guess a new number between those numbers

// alert("please guess a number");
// let ourGuess = Math.floor(Math.random() * 20);
// const answer = prompt(`is your number ${ourGuess} [Y]es or [N]o`);
// if (answer === "y") {
//   alert("you won");
// } else if (answer === "n") {
//   const biggerOrSmaller = prompt(
//     `is your number [B]igger or [S]maller than ${ourGuess}`,
//   );
//   if (biggerOrSmaller === "b") {
//     ourGuess = Math.floor(Math.random() * (20 - ourGuess) + ourGuess);
//   } else {
//     alert("please enter Y or N");
//   }
// }

// alert("Please guess a number");

// let ourGuess = Math.floor(Math.random() * 20) + 1;

// const answer = prompt(`Is your number ${ourGuess}? [Y]es or [N]o`);

// if (answer.toLowerCase() === "y") {
//   alert("You won!");
// } else if (answer.toLowerCase() === "n") {

//   const biggerOrSmaller = prompt(
//     `Is your number [B]igger or [S]maller than ${ourGuess}?`
//   );

//   if (biggerOrSmaller.toLowerCase() === "b") {

//     ourGuess =
//       Math.floor(Math.random() * (20 - ourGuess))
//       + ourGuess + 1;

//     alert(`My new guess is ${ourGuess}`);

//   } else if (biggerOrSmaller.toLowerCase() === "s") {

//     ourGuess = Math.floor(Math.random() * (ourGuess - 1)) + 1;

//     alert(`My new guess is ${ourGuess}`);

//   } else {
//     alert("Please enter B or S");
//   }

// } else {
//   alert("Please enter Y or N");
// }

// let name = prompt("please enter your name");

// console.log(typeof (name));

// if (typeof name === "string") {
//   alert(`Hello ${name}`);
// } else {
//   name = prompt("please enter a name!!");
//   alert(`hello ${name}`);
// }

const x = 10;

if (5 < x < 12) {
  console.log("x is between 5 and 12.");
}

if (12 > x > 5) {
  console.log("x is between 12 and 5.");
}
