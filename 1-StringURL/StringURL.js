// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// Non-recursive:
// Create a function that utilizes .split() with space as the separator then join with %20
// *Researching mozilla .split() docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Solved and refactored on codebunk https://codebunk.com/b/1451100377891/

const string = "Jasmine Ann Jones"; // Set an input example

function splitString(stringSplit) {
  // Create function that takes an argument
  const arrayString = stringSplit.split(" "); // Take the argument and split into an array using spaces as the separator
  return arrayString.join("%20"); // Rejoin the string using %20 instead of spaces
}

splitString(string); // Call the function with input example "string" as the argument

// Recursive:
// Rereading curriculum to get better understanding of recursion https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/recursion
// Other resources: https://www.youtube.com/watch?v=6oDQaB2one8 https://www.youtube.com/watch?v=WPSeyjX1-4s
// Create a function that has a termination call followed by a recursive call that replaces spaces with %20 then continues with the rest of the words

// Codebunk https://codebunk.com/b/1271100377928/

const recurse = (string) => {
  if (string === "") {
    return "";
  } else if (string[string.length - 1] === " ") {
    return recurse(string.substring(0, string.length - 1)) + "%20";
  } else {
    return (
      recurse(string.substring(0, string.length - 1)) +
      string[string.length - 1]
    );
  }
};

const string = "Jasmine Ann Jones";
recurse(string);
console.log(recurse(string));
