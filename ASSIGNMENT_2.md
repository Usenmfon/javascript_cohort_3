# JavaScript Programming Assignment 2
## Mutation, Values vs. References, and Array Methods

**Course:** JavaScript Fundamentals  
**Level:** Beginner to Intermediate  
**Duration:** 5 days  
**Total Marks:** 100  
**Submission Type:** Public GitHub repository containing source code (`.js` files) and a README file

### Assignment Overview

This assignment builds on today's class. You will practise reading and updating object properties, predicting how primitive values and object references behave when they are copied, and processing arrays of objects with `forEach()`, `map()`, `filter()`, and `reduce()`.

**Instructions**
- Write clean, readable JavaScript code.
- Use meaningful variable and function names.
- Solve each task using the concepts specified.
- Answer every "predict the output" question **before** running the code, then run it and note whether you were right.
- Add comments where necessary to explain your logic.
- Do not submit copied solutions. You should be able to explain your code.

---

### Task 1: Reading and Updating Objects
**Marks: 15**

Start with this object:

```javascript
let person = {
  name: "Daniel",
  age: 30,
  occupation: "Software Engineer"
};
```

Your program should:

1. Print the person's `name` using dot notation and their `occupation` using bracket notation.
2. Change `age` to `31` and print the updated object.
3. Add a new property `city` with the value `"Uyo"`.
4. Store the string `"occupation"` in a variable named `key`, then use `key` to print the person's occupation. Explain why dot notation (`person.key`) does not work here.
5. Delete the `city` property and print the object again.
6. Write a function named `describePerson(person)` that returns a sentence such as:

```text
Daniel is 31 years old and works as a Software Engineer.
```

**Challenge:** Write a function `updateProperty(obj, key, value)` that updates any property on any object. Test it with at least three different keys.

### Task 2: Values vs. References — Predict the Output
**Marks: 20**

For each snippet, write down what you expect to be printed, then run the code and explain the result in one or two sentences.

**Snippet A**

```javascript
let a = 12;
let b = a;

b = 30;
b = 50;
a = 0;

console.log(a);
console.log(b);
```

**Snippet B**

```javascript
let obj1 = { name: "Tommy" };
let obj2 = obj1;

obj2.name = "Jackson";

console.log(obj1.name);
console.log(obj2.name);
```

**Snippet C**

```javascript
let obj1 = { name: "Tommy" };
let obj2 = obj1;

obj2 = { name: "Jackson" };

console.log(obj1.name);
console.log(obj2.name);
```

**Snippet D**

```javascript
function birthday(person) {
  person.age = person.age + 1;
}

function rename(name) {
  name = "Unknown";
}

let user = { name: "Grace", age: 24 };
let userName = user.name;

birthday(user);
rename(userName);

console.log(user.age);
console.log(userName);
```

**Snippet E**

```javascript
let list1 = [1, 2, 3];
let list2 = list1;
let list3 = [...list1];

list2.push(4);
list3.push(5);

console.log(list1);
console.log(list2);
console.log(list3);
console.log(list1 === list2);
console.log(list1 === list3);
```

**Written questions:**

1. Why do Snippets B and C give different results even though they look similar?
2. In Snippet D, why does `birthday()` change `user` but `rename()` does not change `userName`?
3. Why is `[1, 2] === [1, 2]` false?
4. In class we wrote `b = a;` without `let`, `const`, or `var`. What happens when you assign to an undeclared variable, and why is it a bad habit?

### Task 3: Looping with `forEach()`
**Marks: 15**

Use this data for Tasks 3 and 4:

```javascript
const students = [
  { name: "Gerald", age: 20, gender: "male", score: 72 },
  { name: "Victorious", age: 19, gender: "female", score: 88 },
  { name: "Fidelis", age: 11, gender: "male", score: 45 },
  { name: "Triumphant", age: 26, gender: "male", score: 64 },
  { name: "Blessing", age: 17, gender: "female", score: 91 },
  { name: "Tobi", age: 14, gender: "female", score: 38 }
];
```

Using `forEach()`:

1. Print a numbered list of student names, starting from 1:

```text
1 - Gerald
2 - Victorious
3 - Fidelis
...
```

2. Print each student's name with a `PASS` or `FAIL` label (pass mark is 50).
3. Count how many students are female using a counter variable outside the loop.
4. Try to `return` a value from inside `forEach()` and store the result in a variable. Print the variable and explain what you see. When should you use `map()` instead of `forEach()`?

### Task 4: `map()`, `filter()`, and `reduce()`
**Marks: 30**

Using the `students` array from Task 3, write a separate expression for each of the following. Do **not** modify the original array.

**`filter()`**

1. Get all male students.
2. Get all students aged 15 or below.
3. Get all students whose names contain the letter `"T"`.
4. Get all students whose names contain the letter `"t"` in any case (upper or lower). *Hint: look at `toLowerCase()`.*

**`map()`**

5. Create an array of student names only.
6. Create an array of strings in the format `"Gerald (20)"`.
7. Create a new array of student objects where each object has an extra property `passed: true/false`. Then prove that the original `students` array was not changed.

**`reduce()`**

8. Calculate the total of all students' ages.
9. Calculate the average score of the class.
10. Find the student with the highest score.
11. Count students by gender, producing an object like:

```javascript
{ male: 3, female: 3 }
```

**Chaining**

12. In class we wrote:

```javascript
let sumAges = students.map((item) => item.age);
let totalAges = sumAges.reduce((a, b) => a + b);
```

Rewrite this as a single chained expression.

13. Get the total score of all female students using `filter()` and `reduce()` together.
14. Get the names of students who passed, sorted alphabetically.

**Edge case:** What happens when you call `[].reduce((a, b) => a + b)`? How does passing an initial value (the second argument to `reduce()`) fix it?

### Task 5: Mini Project — Class Register
**Marks: 20**

Build a small class register program that combines everything from this assignment.

Your program should:

1. Start with an empty array named `register`.
2. Write a function `addStudent(register, name, age, gender, score)` that adds a new student object to the register.
3. Write a function `updateScore(register, name, newScore)` that finds a student by name and updates their score. If the student is not found, print a helpful message.
4. Write a function `getSummary(register)` that returns an object containing:
   - `total` — number of students
   - `averageScore` — rounded to two decimal places
   - `passed` — number of students with a score of at least 50
   - `topStudent` — name of the highest-scoring student
5. Write a function `printRegister(register)` that uses `forEach()` to print a numbered list of every student and their score.
6. Add at least five students, update two scores, then print the register and the summary.

**Written question:** Your `addStudent()` and `updateScore()` functions change the `register` array that was passed in. Is that mutation intentional here? Rewrite `updateScore()` so that it returns a **new** array instead of changing the original, and explain when each approach is the better choice.

**Expected output format:**

```text
1 - Ada: 82
2 - John: 47
3 - Mary: 90
4 - David: 55
5 - Grace: 68

Total: 5
Average Score: 68.40
Passed: 4
Top Student: Mary
```

---

### Submission Requirements

Submit your work as a **public GitHub repository**.

1. Create a new public repository named `js-assignment-2`.
2. Clone it to your computer, add your files, and push your work:

```bash
git clone https://github.com/<your-username>/js-assignment-2.git
cd js-assignment-2
# add your files
git add .
git commit -m "Complete Task 1"
git push origin main
```

3. Commit as you finish each task rather than uploading everything at once. Use clear commit messages such as `"Complete Task 3: forEach exercises"`.
4. Submit the repository link (for example, `https://github.com/<your-username>/js-assignment-2`) before the deadline.
5. Do not push any changes after the deadline. Only commits made before the deadline will be graded.

Your repository should contain:

- `task1.js` — Reading and updating objects
- `task2.js` — Values vs. references snippets
- `task3.js` — `forEach()` exercises
- `task4.js` — `map()`, `filter()`, and `reduce()`
- `task5.js` — Class Register
- `README.md` — Instructions for running your programs, your predictions for Task 2, and answers to all written questions

Use Node.js to run your programs locally. For example:

```bash
node task1.js
```

### Assessment Rubric

| Assessment criteria | Marks |
|---|---:|
| Correctness and functionality | 40 |
| Appropriate use of array methods and object access | 25 |
| Understanding of values, references, and mutation | 15 |
| Code readability and organization | 10 |
| Explanations and README documentation | 10 |
| **Total** | **100** |

### Final Instruction

Be prepared to explain your solution during the next class. You may be asked to predict the output of a new snippet, explain why changing one variable affected another, or rewrite a `forEach()` loop using `map()`, `filter()`, or `reduce()`.
