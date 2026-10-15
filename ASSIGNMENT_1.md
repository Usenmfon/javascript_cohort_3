# JavaScript Programming Assignment
## From Python Fundamentals to JavaScript

**Course:** JavaScript Fundamentals  
**Level:** Beginner to Intermediate  
**Duration:** 5 days  
**Total Marks:** 100  
**Submission Type:** Source code (`.js` files) and a README file

### Assignment Overview

This assignment is designed to help you apply the JavaScript concepts learned in class. You will write programs that demonstrate your understanding of JavaScript syntax, data types, references, functions, callbacks, and array methods.

**Instructions**
- Write clean, readable JavaScript code.
- Use meaningful variable and function names.
- Solve each task using the concepts specified.
- Add comments where necessary to explain your logic.
- Test your code with different inputs, including edge cases.
- Do not submit copied solutions. You should be able to explain your code.

---

### Task 1: JavaScript Syntax, Types, Control Flow, and Functions
**Marks: 20**

Create a student grading program.

Your program should:

1. Store a student's name and scores in three subjects.
2. Calculate the total and average score.
3. Use conditional statements to assign a grade:
   - 70–100: A
   - 60–69: B
   - 50–59: C
   - 45–49: D
   - 40–44: E
   - Below 40: F
4. Use a function named `calculateAverage()` to calculate the average.
5. Use another function named `getGrade()` to determine the grade.
6. Display the student's name, total score, average, and grade.
7. Validate that scores are numbers between 0 and 100.

**Challenge:** Handle invalid scores without producing an incorrect grade.

### Task 2: Values vs. References and Mutation
**Marks: 20**

Consider the following code:

```javascript
const studentA = {
  name: "John",
  scores: [70, 80, 90]
};

const studentB = studentA;

studentB.name = "Peter";
studentB.scores.push(100);

console.log(studentA);
console.log(studentB);
```

Answer the following questions:

1. What will be printed to the console?
2. Why does changing `studentB` affect `studentA`?
3. What is the difference between primitive values and objects in JavaScript?
4. Why can properties of a `const` object be changed even though the variable is declared with `const`?

**Practical exercise:**

5. Create a copy of `studentA` so that modifying the copy's name and scores does not affect the original.
6. Demonstrate the difference between a shallow copy and a deep copy using an object containing a nested object.
7. Explain when you would use `structuredClone()`.

### Task 3: Functions as Values
**Marks: 20**

Create a simple notification system.

Your program should:

1. Create a function named `sendNotification()` that accepts a message and a callback function.
2. Create three callback functions:
   - `sendEmail()`
   - `sendSMS()`
   - `showInAppNotification()`
3. Pass each callback to `sendNotification()` to handle the same message differently.
4. Create a higher-order function named `processNumber()` that accepts a number and a function to transform it.
5. Use `processNumber()` to double a number, square a number, and calculate the number's absolute value.

**Example:**

```javascript
function processNumber(number, operation) {
  return operation(number);
}

const double = number => number * 2;

console.log(processNumber(5, double));
// Expected output: 10
```

**Written questions:**

- What is a callback function?
- What makes a function a higher-order function?
- What is a closure? Provide a practical example of one.

### Task 4: Arrays and Objects as Data Pipelines
**Marks: 25**

You are given a list of products:

```javascript
const products = [
  { name: "Laptop", price: 350000, category: "Electronics", inStock: true },
  { name: "Phone", price: 180000, category: "Electronics", inStock: true },
  { name: "Desk", price: 90000, category: "Furniture", inStock: false },
  { name: "Chair", price: 45000, category: "Furniture", inStock: true },
  { name: "Headphones", price: 25000, category: "Electronics", inStock: true },
  { name: "Monitor", price: 150000, category: "Electronics", inStock: false }
];
```

Write a program that performs the following operations:

1. Use `filter()` to get all products that are in stock.
2. Use `map()` to create an array containing only the product names.
3. Use `filter()` to find products costing more than ₦100,000.
4. Use `reduce()` to calculate the total price of all products.
5. Use `reduce()` to calculate the total value of products currently in stock.
6. Use `filter()` and `map()` together to get the names of available electronics.
7. Create a new array containing discounted prices, applying a 10% discount to each product without modifying the original array.

**Challenge:** Build a pipeline that selects available products costing less than ₦200,000, applies a 10% discount, and returns an array containing each product's name and discounted price.

### Task 5: Mini Project — Student Performance Analyzer
**Marks: 15**

Build a small program that analyzes student performance using all the concepts covered in this assignment.

Start with this data:

```javascript
const students = [
  { name: "Ada", scores: [80, 75, 90] },
  { name: "John", scores: [45, 50, 55] },
  { name: "Mary", scores: [90, 95, 85] },
  { name: "David", scores: [35, 40, 30] },
  { name: "Grace", scores: [65, 70, 60] }
];
```

Your program should:

1. Calculate each student's average score.
2. Assign a grade to each student.
3. Use `map()` to create a new array containing student names, averages, and grades.
4. Use `filter()` to identify students with averages of at least 60.
5. Use `reduce()` to calculate the class average.
6. Use a callback to customize how student results are displayed.
7. Ensure that your program does not unnecessarily mutate the original student data.

**Expected output format:**

```text
Student: Ada | Average: 81.67 | Grade: A
Student: John | Average: 50.00 | Grade: C
Student: Mary | Average: 90.00 | Grade: A
Student: David | Average: 35.00 | Grade: F
Student: Grace | Average: 65.00 | Grade: B

Class Average: 64.33
Students passing: 3
```

---

### Submission Requirements

Submit a folder containing:

- `task1.js` — Student grading program
- `task2.js` — Values, references, and mutation
- `task3.js` — Callbacks and higher-order functions
- `task4.js` — Array data pipelines
- `task5.js` — Student Performance Analyzer
- `README.md` — Instructions for running your programs and answers to the written questions

Use Node.js to run your programs locally. For example:

```bash
node task1.js
```

### Assessment Rubric

| Assessment criteria | Marks |
|---|---:|
| Correctness and functionality | 40 |
| Appropriate use of JavaScript concepts | 25 |
| Code readability and organization | 15 |
| Input validation and edge cases | 10 |
| Explanations and README documentation | 10 |
| **Total** | **100** |

### Final Instruction

Be prepared to explain your solution during the next class. You may be asked to modify your code, predict its output, explain why an object mutation affects another variable, or solve a similar problem without referring to your original solution.