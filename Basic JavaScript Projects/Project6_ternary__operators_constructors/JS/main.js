// 1. Function using a ternary operation based on user input
function ternaryOperation() {
    // Get user input from the HTML input element
    var userInput = document.getElementById("userInput").value;

    // Perform a ternary operation: check if the input is even or odd
    var result = (userInput % 2 === 0) ? "Even" : "Odd";

    // Display the result in the HTML element
    document.getElementById("resultTernary").innerHTML = `The number is ${result}`;
}

// 2. Constructor function using the "new" and "this" keywords
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Nested function within the constructor
    this.displayInfo = function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}

// 3. Function to display the results of the constructor function within an HTML element
function createObject() {
    // Create a new Person object using the constructor
    var personObject = new Person("Ankit Srivastava", 37);

    // Display the information using the nested function
    document.getElementById("resultConstructor").innerHTML = personObject.displayInfo();
}
