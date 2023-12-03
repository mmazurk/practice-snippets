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

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
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

/** Write a function called countUniqueValues
It takes a sorted array and counts unique values in the array.
The array will always be sorted
There can be negative numbers

 i
[1, 1, 2, 3, 4, 4, 5, 6]
    j

                   i
[1, 1, 2, 3, 4, 4, 5, 6]
                      j 

                   i
[1, 1, 2, 3, 4, 4, 5, 5]
                      j 

// loop while j < array.length 
// start count at 1, left at zero, right at one position to the right of left
// while the right pointer is inside the array
// if left and right are the same, move right one space right
// if left and right are not the same, increment count, move left to where right is, move right one forward

*/

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 1;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    // console.log("Left is", left)
    // console.log("Right is", right)

    if (arr[left] === arr[right]) {
      right++;
    } else {
      count++;
      left = right;
      right++;
    }
  }

  return count;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

/** Write a function called averagePair. Given a sorted array of integers and a 
 * target average, determine if there is a pair of values in the array where 
 * the average of the pair equals the target average. There may be more than one 
 * pair that matches the average target. */

function averagePair(arr,num) {
  let left = 0;
  let right = arr.length - 1;

  

}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false