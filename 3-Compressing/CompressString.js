// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// Non-recursive:
// Use reduce to compress string? Split string into an array and count the letter occurance while checking if the next index is a matching letter(while loop?). Use if else to check the next index if conditions aren't met with while loop. Add number if it occurs simultaneously and don't if it doesn't
// Sources: array.protoype.reduce() Mozilla docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce and curriculum https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/map-reduce-and-filter
// While loop: W3 Schools https://www.w3schools.com/js/js_loop_while.asp and Mozilla Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

const string = aaabccdddda;

