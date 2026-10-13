num = 10;

console.log("From Javascript: " + num);

// Data-Types: undefined, null, Symbol, Number, Boolean, BigINT, String, Array, Object

let num1 = 40;
let num2 = 10;

// Arithmatic Operators: +, -, /, *, %, **

let sum = num1 + num2;
console.log(sum);

// Strings:

console.log(`${num1} + ${num2} = ${sum}`);

let greetings = "Good morning";
let personName = "Fidelis";

// greetings = greetings + ", " + personName;

greetings += ", " + personName;

console.log(greetings);

// String methods:

console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.repeat(3));
console.log(personName.length);

personName = "   John    ";
console.log(personName.trim());

// Boolean: True or False, 1 or 0
// Comparison operators: >, <, >=, <=, ==, ===, !=

const GRADE = 39;

if (GRADE >= 90) {
  console.log("A");
} else if (GRADE >= 60) {
  console.log("B");
} else if (GRADE >= 40) {
  console.log("C");
} else {
  console.log("OGA, PACK YOUR LOAD!!!");
}

// Array

let students = ['Triumphant', 'Emediong', 'Victorious', 'Fidelis'];

for(let i = 0; i < students.length; i++)
{
    console.log("Good morning", students[i]);
}

i++

i = i + 1

// students.forEach((student) => {
//     console.log("Good morning", student);
// })