// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// Non-recursive:
// Create a function that utilizes .split() with space as the separator then join with %20
// *Researching mozilla .split() docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Recursive:
// Rereading curriculum to get better understanding of recursion https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/recursion