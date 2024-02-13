// Global variable
var globalVariable = "I am a global variable";

function exampleFunction() {
    // Local variable
    var localVariable = "I am a local variable";

    // Function with an if statement
    if (true) {
        console.log("This is always true!");
    }

    // Function with an intentional error (to be debugged later)
    function functionWithError() {
        // Intentional error: Trying to access an undefined variable
        console.log(undefinedVariable);
    }

    // Call the function with an error
    functionWithError();

}
// Function outlined in previous slides (Time_function)
function Time_function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Display the time in the console
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
}

// Call the exampleFunction
exampleFunction();

// Call the Time_function
Time_function();