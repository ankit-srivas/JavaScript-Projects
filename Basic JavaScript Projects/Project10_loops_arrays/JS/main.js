// JavaScript functions utilizing while loop, for loop, array, and object

// Function utilizing a while loop
function whileLoopExample() {
    let result = '';
    let count = 0;

    // While loop to concatenate numbers from 1 to 5
    while (count < 5) {
        result += ` ${count + 1}`;
        count++;
    }

    return `While Loop Example:${result}`;
}

// Function utilizing a for loop
function forLoopExample() {
    let result = '';

    // For loop to concatenate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        result += ` ${i}`;
    }

    return `For Loop Example:${result}`;
}

// Function utilizing an array
function arrayExample() {
    let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
    let result = '';

    // Loop through the array and concatenate fruit names
    for (let i = 0; i < fruits.length; i++) {
        result += ` ${fruits[i]}`;
    }

    return `Array Example:${result}`;
}

// Function creating an object using the "let" keyword
function createObject() {
    let person = {
        name: 'Ankit Srivastava',
        age: 30,
        occupation: 'Software and Web Developer'
    };

    return `Object Example: Name - ${person.name}, Age - ${person.age}, Occupation - ${person.occupation}`;
}

// Display the output in the HTML
document.getElementById('output').innerHTML = `<p>${whileLoopExample()}</p>
<p>${forLoopExample()}</p>
<p>${arrayExample()}</p>
<p>${createObject()}</p>`
    
;
