
console.log("===== FUNCTIONS, SCOPE, AND CLOSURES =====");

// ==========================================
// TASK 1: BASIC FUNCTIONS
// ==========================================

// Exercise 1: A function that welcomes a student.
function greetStudent() {
    console.log("Welcome to JavaScript, student!");
}

greetStudent();


// Exercise 2: A function that returns the sum of two numbers.
function addNumbers(a, b) {
    return a + b;
}

console.log("Sum:", addNumbers(10, 5));


// Exercise 3: A function that returns the square of a number.
function squareNumber(number) {
    return number * number;
}

console.log("Square:", squareNumber(4));


// ==========================================
// TASK 2: PARAMETERS AND RETURN VALUES
// ==========================================

// Exercise 4: Calculate the total price.
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log("Total price:", calculateTotal(20, 3));


// Exercise 5: A default parameter is used if no course is provided.
function introduceStudent(name, course = "MERN Stack") {
    console.log("Student name:", name);
    console.log("Course:", course);
}

introduceStudent("Sahar");
introduceStudent("Ali", "Python Programming");


// Exercise 6: Difference between return and console.log().

function getSum(a, b) {
    return a + b;
}

function printSum(a, b) {
    console.log(a + b);
}

let result = getSum(5, 3);
console.log("Returned value:", result);

let printedResult = printSum(5, 3);
console.log("Printed function result:", printedResult);

// getSum() returns 8, so we can store and reuse it.
// printSum() only prints 8 and returns undefined.


// ==========================================
// TASK 3: FUNCTION EXPRESSIONS AND ARROW FUNCTIONS
// ==========================================

// Exercise 7: A function expression that multiplies two numbers.
const multiplyNumbers = function (a, b) {
    return a * b;
};

console.log("Multiplication:", multiplyNumbers(4, 5));


// Exercise 8: Rewrite squareNumber as an arrow function.
// We use a different name because squareNumber already exists.
const squareNumberArrow = (number) => {
    return number * number;
};

console.log("Arrow function square:", squareNumberArrow(6));


// Exercise 9: An arrow function that checks for even numbers.
const isEven = (number) => {
    return number % 2 === 0;
};

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

// % gives the remainder.
// Even numbers have a remainder of 0 when divided by 2.


// ==========================================
// TASK 4: GLOBAL AND FUNCTION SCOPE
// ==========================================

// Exercise 10: A global variable can be accessed inside a function.
let courseName = "JavaScript";

function showCourse() {
    console.log("Current course:", courseName);
}

showCourse();


// Exercise 11: A local variable belongs to its function.
function showLocalVariable() {
    let studentAge = 19;
    console.log("Student age inside function:", studentAge);
}

showLocalVariable();

// console.log(studentAge); 
// This would cause a ReferenceError because studentAge
// exists only inside showLocalVariable().


// ==========================================
// TASK 5: BLOCK SCOPE
// ==========================================

// Exercise 12: var, let, and const inside an if block.
// Exercise 13: Check which variables are accessible outside.
if (true) {
    var varMessage = "I am declared with var";
    let letMessage = "I am declared with let";
    const constMessage = "I am declared with const";

    console.log(varMessage);
    console.log(letMessage);
    console.log(constMessage);
}

console.log("Outside block:", varMessage);

// console.log(letMessage);
// ReferenceError: letMessage is limited to the if block.

// console.log(constMessage);
// ReferenceError: constMessage is limited to the if block.

// var is function-scoped (or global here).
// let and const are block-scoped.


// ==========================================
// TASK 6: LEXICAL SCOPE AND SCOPE CHAIN
// ==========================================

// Exercise 14 and 15: An inner function accesses
// a variable from its outer function.
function outerFunction() {
    let message = "Hello from the outer function";

    function innerFunction() {
        console.log(message);
    }

    innerFunction();
}

outerFunction();


// Exercise 16: Three levels of scope.
// Global -> outer function -> inner function.
let globalMessage = "I am in the global scope";

function outerLevel() {
    let outerMessage = "I am in the outer function";

    function innerLevel() {
        let innerMessage = "I am in the inner function";

        console.log(globalMessage);
        console.log(outerMessage);
        console.log(innerMessage);
    }

    innerLevel();
}

outerLevel();

// The inner function can access variables from
// its own scope and the outer scopes.


 // ==========================================
// TASK 7: VARIABLE SHADOWING
// ==========================================

// Exercise 17, 18, and 19: The local score shadows
// the global score inside the function.
let score = 90;

function showScore() {
    let score = 50;
    console.log("Score inside function:", score);
}

showScore();
console.log("Score outside function:", score);

// Inside the function, score is 50.
// Outside the function, score is still 90.
// The local variable shadows the global variable.


// ==========================================
// TASK 8: CLOSURES
// ==========================================

// Exercise 20: Create a counter using a closure.
function createCounter() {
    let count = 0;

    function increaseCounter() {
        count = count + 1;
        return count;
    }

    return increaseCounter;
}


// Exercise 21 and 22: Store the returned function
// and call it three times.
const counter = createCounter();

console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3


// Exercise 23: Two independent counters.
const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2

console.log("Counter B:", counterB()); // 1
console.log("Counter B:", counterB()); // 2

console.log("Counter A:", counterA()); // 3

// Each call to createCounter() creates a separate
// count variable. Each returned function remembers
// and updates its own count.

console.log("===== ALL EXERCISES COMPLETED =====");
