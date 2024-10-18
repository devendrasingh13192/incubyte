class addNumbers {
    // Method to add numbers from a string
    add(numbers) {
      if (numbers === "") {
        return 0; // Return 0 if the string is empty
      }
  
      // Split the string by commas and convert each to a number
      const numArray = numbers.split(",").map(Number);
  
      // Sum the numbers
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  // Example usage:
  const calculator = new addNumbers();
  console.log(calculator.add(""));         // Output: 0
  console.log(calculator.add("1,2,3"));    // Output: 6
  console.log(calculator.add("4,5,6,7"));  // Output: 22