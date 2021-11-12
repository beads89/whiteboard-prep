// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Non-recursive: 
// Remove duplicates from an array and output only the unique characters.
// Use "Set" to return unique characters?

// Codebunk https://codebunk.com/b/5761100377972/

const array = [7, 9, "hi", 12, "hi", 7, 53] // Define array

let setArray = [...new Set(array)]; // Use "Set" from ES6 to return a unique array

console.log(setArray);


// .filter() function:
// Make use of array.prototype.filter() and array.prototype.indexOf()
// Reread through mozilla docs for each prototype

// Codebunk https://codebunk.com/b/6381100377994/

const array = [7, 9, "hi", 12, "hi", 7, 53] // Define array

let filterArray = array.filter(function(char, index) { // Create function that takes filtered arguments
    return array.indexOf(char == index); // Use indexOf to return unique matches
});

// Recursive:
// Create an array then create conditionals based on length and push to output if it doesn't match the compared to string? Slice then join or concat array, maybe use includes on the return?
// Sources: https://stackoverflow.com/questions/51217531/how-do-i-recursively-remove-consecutive-duplicate-elements-from-an-array-javas. Also Mozilla docs for slice(), concat(), includes().

