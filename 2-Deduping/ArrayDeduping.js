// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Non-recursive: 
// Remove duplicates from an array and output only the unique characters.
// Use "Set" to return unique characters?

// Codebunk https://codebunk.com/b/5761100377972/

const array = [7, 9, "hi", 12, "hi", 7, 53]

let setArray = [...new Set(array)];

console.log(setArray);


// .filer() function:
