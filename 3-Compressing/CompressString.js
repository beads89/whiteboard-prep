// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// Non-recursive:
// Use reduce to compress string? Split string into an array and count the letter occurance while checking if the next index is a matching letter(while loop?). Use if else to check the next index if conditions aren't met with while loop. Add number if it occurs simultaneously and don't if it doesn't
// Sources: array.protoype.reduce() Mozilla docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce and curriculum https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/map-reduce-and-filter
// While loop: W3 Schools https://www.w3schools.com/js/js_loop_while.asp and Mozilla Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


// Multiple refactors and deletions in codebunk https://codebunk.com/b/8381100378008/

const string = "aaabccdddda";

function compression(string) { // Create function that takes a string as an argument 
  let stringOccurance = ""; // Set a string to return at the end
  let stringArray = string.split(""); // Turn the string into an array
  for (let i = 0; i < stringArray.length; i++) { // Run for loop on array
    let count = 1; // Set default count of occurances to 1
    let letter = stringArray[i]; // Define what letter is at the looping index
    while (i < stringArray.length -1 && stringArray[i] === stringArray[i + 1]) { // Use while loop to snap shot consecutive matching numbers
      count++; // Add another number to the occurance counter
      i++ // Go through the while loop again if condition was met
    }
    if (count === 1) { // If letter only occured consecutively once
      stringOccurance += letter // Only output the letter and no number
    } else {
      stringOccurance += count + letter; // If occuring consecutively, output the number of times followed by the letter
    }
  }
  return stringOccurance
}

console.log(compression(string)); // Input in console to confirm it works