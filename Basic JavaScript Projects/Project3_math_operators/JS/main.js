// Global variable for increment and decrement functions
let counter = 0;

// Function for addition using the + operator
function addition() {
    const num1 = 5;
    const num2 = 10;
    const sum = num1 + num2;
    displayResult(`Sum: ${sum}`);
}

// Function for subtraction using the - operator
function subtraction() {
    const num1 = 15;
    const num2 = 8;
    const difference = num1 - num2;
    displayResult(`Difference: ${difference}`);
}

// Function for multiplication using the * operator
function multiplication() {
    const num1 = 7;
    const num2 = 6;
    const product = num1 * num2;
    displayResult(`Product: ${product}`);
}

// Function for modulo using the % operator
function modulo() {
    const num1 = 20;
    const num2 = 3;
    const modulus = num1 % num2;
    displayResult(`Modulus: ${modulus}`);
}

// Function for increment using the ++ operator
function increment() {
    counter++;
    displayResult(`Counter Incremented: ${counter}`);
}

// Function for decrement using the -- operator
function decrement() {
    counter--;
    displayResult(`Counter Decremented: ${counter}`);
}

// Function for Math.random()
function randomNumber() {
    const randomNum = Math.random();
    displayResult(`Random Number: ${randomNum}`);
}

// Function to display results in the HTML document
function displayResult(result) {
    const resultsSection = document.getElementById("results");
    resultsSection.innerHTML = `<p>${result}</p>`;
}
