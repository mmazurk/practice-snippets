/** 

Write a function called same which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.

[1, 1, 1], [1, 1, 1] true
[1, 2, 3], [1, 4, 9] true
[3, 2, 1], [1, 4, 9] true
[3, 2, 1], [1, 1, 9] false

*/

function same(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (num of arr1) {
    if (arr2.indexOf(num ** 2) === -1) {
      return false;
    } else {
      arr2.splice(arr2.indexOf(num ** 2), 1)
    }

  }

  return true;

}

/** You should refactor this so you just say
let correctIndex = arr.indexOf(num ** 2); 
and then you can use thaqt to test. Your first
clue is that you had to write it twice. 
*/

// Now for the frequency counter pattern
// This is 3 x O(N)) which is O(N)

function sameFC(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  for (let key in frequencyCounter1) {
    let hasKey = Object.keys(frequencyCounter2).indexOf(String(key ** 2)) !== -1

    if (!hasKey) {
      return false;
    }

    if (hasKey) {
      if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
        return false;
      }
    }
  }
  return true;

}

sameFC([1, 2, 3], [1, 4, 9])
sameFC([1, 2, 3, 2, 5], [1, 4, 9, 4, 10])
