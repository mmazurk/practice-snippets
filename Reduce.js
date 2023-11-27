// Sum of Array Elements:
// Write a function that uses reduce() to calculate the sum of all the elements in an array of numbers.
// [10, 10, 10, 10].reduce((base, acc) => { 
//  return base + acc}, 0);

// Product of Array Elements:
// Write a function that uses reduce() to calculate the product of all the elements in an array of numbers.
// [5, 2, 2, 2].reduce((base,acc)=>{
//   return base * acc
// });

// Find the Maximum Value:
// Write a function that uses reduce() to find the maximum value in an array of numbers.
// [4, 5, 6, 7, 1, 9, 10].reduce((base, acc) => {
//   return(Math.min(base, acc))
// });

// Flatten an Array:
// Write a function that uses reduce() to flatten an array of nested arrays into a single array.

function flatten(arr) {
  let flattened = arr.reduce((base, acc) => {
    return [...base, ...acc]
  })
  return flattened; 
}

// Counting Word Frequencies:
// Write a function that uses reduce() to count the frequency of each word in an array of strings.

// Grouping by Property:
// Given an array of objects, write a function that uses reduce() to group objects by a specific property. For example, you might group a list of people by their age.

// Calculate Average Age:
// Given an array of people objects with age properties, write a function that uses reduce() to calculate the average age of the people in the array.

// Flatten and Remove Duplicates:
// Write a function that uses reduce() to flatten an array of nested arrays and remove duplicate values.

// Concatenate Arrays:
// Write a function that uses reduce() to concatenate multiple arrays into a single array.

// Find Longest Word:
// Write a function that uses reduce() to find the longest word in an array of strings.
