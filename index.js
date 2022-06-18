/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
let number = 15;
let number2 = 7;
function add() {
  console.log(`The result is ${Number(number + number2)}`);
}
add();

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven() {
  const isNumberEavenOrNot = number + number2;
  if (isNumberEavenOrNot % 2 == 0) {
    console.log(Boolean(isNumberEavenOrNot));
  }
}
isEven();

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet() {
  let user = "Aris";
  console.log(`Hello ${user}`);
}
greet();

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult() {
  let ageOfUser = 20;
  console.log(ageOfUser);
  console.log(Boolean(ageOfUser >= 18));
}
isAnAdult();

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood() {
  let age = 12;
  console.log(`You are ${age} years old`);
  console.log(`You can come in ${18 - age} years`);
}
yearsToAdulthood();

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit() {
  let personName = prompt(`Enter your name`);
  let personAge = Number(prompt(`Enter your age`));
  console.log(`Name : ${personName}`);
  console.log(`Age : ${personAge}`);
  if (personAge >= 18) {
    console.log("You are an adult.");
    console.log("You can come inside.");
  } else {
    console.log("You are a child.");
  }

  if (personAge < 18) {
    console.log(`You can come in ${18 - personAge} years.`);
  }
}
admit();
