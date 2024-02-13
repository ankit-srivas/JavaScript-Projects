// Function to demonstrate the concat() method
function useConcat() {
    // Create two strings
    var str1 = "Hello, ";
    var str2 = "world!";
    
    // Concatenate the strings using the concat() method
    var result = str1.concat(str2);

    // Return the result
    return `Result of concat(): ${result}`;
}

// Function to demonstrate the slice() method
function useSlice() {
    var originalString = "JavaScript is powerful";

    // Use the slice() method to extract a portion of the string
    var result = originalString.slice(0, 10); // Extract characters from index 0 to 9

    // Return the result
    return `Result of slice(): ${result}`;
}

// Function to demonstrate the toString() method
function useToString() {
    var numberValue = 42;

    // Use the toString() method to convert a number to a string
    var result = numberValue.toString();

    // Return the result
    return `Result of toString(): ${result}`;
}

// Function to demonstrate the toPrecision() method
function useToPrecision() {
    var floatNumber = 3.14159;

    // Use the toPrecision() method to format a floating-point number
    var result = floatNumber.toPrecision(4); // Keep 4 significant digits

    // Return the result
    return `Result of toPrecision(): ${result}`;
}
