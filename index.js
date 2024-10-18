class addNumbers {
   // Method to add numbers from a string with support for custom delimiters and error handling for negatives
  add(numbers) {
    if (numbers === "") {
      return 0; // Return 0 if the string is empty
    }

    let delimiter = /[\n,]+/; // Default delimiters are commas and new lines

    // Check if a custom delimiter is provided at the start of the string
    if (numbers.startsWith("//")) {
      // Extract the custom delimiter
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // Create a regex for the custom delimiter
      numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter line from the string
    }

    // Split the string by the custom delimiter (or default ones) and convert to numbers
    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    // Sum the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  }
  
  // Example usage:
  const calculator = new addNumbers();
  try {
    console.log(calculator.add("1,2,3"));              // Output: 6
    console.log(calculator.add("4\n5\n6"));            // Output: 15
    console.log(calculator.add("//;\n1;2;3"));         // Output: 6
    console.log(calculator.add("//;\n1;2;-3"));        // Throws exception: Negative numbers not allowed: -3
  } catch (e) {
    console.error(e.message);
  }
  
  try {
    console.log(calculator.add("//|\n10|-20|30|-40")); // Throws exception: Negative numbers not allowed: -20, -40
  } catch (e) {
    console.error(e.message);
  }