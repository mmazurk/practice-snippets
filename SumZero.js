/** Write a function sumZero() which accepts a sorted array of integers.
The function should find the first pair where the sum is zero. The function
will return undefined if a pair does not exist. */

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [3, 3]
// sumZero([-2, 0, 1, 3]) // undefined

// naive solution

function sumZero(arr) {

  let firstPair = [];

  // start with first member of array
  // sum it with all remaining numbers in array in order
  // af any of these sums is zero, return the number and the summed number

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    for (j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        firstPair.push(arr[i], arr[j]);
        return firstPair;
      }

    }
  }
}

// sumZero2([-3, -2, -1, 0, 1, 2, 3])
// sumZero2([-3, -2, 0, 5, 9])

/** Now with multiple pointers 

The strategy is to check the first element with the last element
If the number is positive, we move the right pointer left by one unit
If the number is negative, we move the left pointer right by one unit

Mark Note: This a great one to practice over and over
becuase it involves moving pointers around

*/

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1; 

  while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === 0) {
      return [arr[left], arr[right]];
    }
    else if (sum < 0) {
      left++
    }
    else {
      right--
    }
  }

  return undefined;
}

// set a left pointer that is equal to the first index of the array
// set a right pointer that is equal to the last index of the array

// loop while left index is less or equal to right index
// add the value at left index to value at right index 
// if the number is zero, return the values at left index and right index
// if the number is negative, move the left pointer up one
// if the number is positive, move the right pointer down one
