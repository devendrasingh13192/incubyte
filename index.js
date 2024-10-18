class addNumbers {
    // Method to add numbers from a string with support for custom delimiters
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

    // Sum the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  }
  
  // Example usage:
  const calculator = new addNumbers();
  console.log(calculator.add(""));         // Output: 0
  console.log(calculator.add("1,2,3"));    // Output: 6
  console.log(calculator.add("4,5,6,7"));  // Output: 22