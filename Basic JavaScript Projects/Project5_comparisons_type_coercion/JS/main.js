// 1. Utilize document.write() and typeof to display the data type of a variable
var exampleVariable = "Hello, World!";
document.write("Data type of exampleVariable: " + typeof exampleVariable + "<br>");

// 2. Write an expression combining a string and a number
var stringValue = "This is a string";
var numberValue = 42;
var combinedStringNumber = stringValue + numberValue;
document.write("Combined String and Number: " + combinedStringNumber + "<br>");

// 3. Use various operators and display the results in the browser

// Equality (==) and Strict Equality (===) operators
document.write("Equality (==): " + (5 == "5") + "<br>"); // true (implicit type coercion)
document.write("Strict Equality (===): " + (5 === "5") + "<br>"); // false (no type coercion)

// Greater than (>) and Less than (<) operators
document.write("Greater than (>): " + (10 > 5) + "<br>"); // true
document.write("Less than (<): " + (10 < 5) + "<br>"); // false

// Logical AND (&&) and Logical OR (||) operators
document.write("Logical AND (&&): " + (true && false) + "<br>"); // false
document.write("Logical OR (||): " + (true || false) + "<br>"); // true

// Logical NOT (!) operator
document.write("Logical NOT (!): " + (!true) + "<br>"); // false

