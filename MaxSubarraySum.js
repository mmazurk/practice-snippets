/** Write a function caled maxSubSum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array

	maxSubSum([1,2,5,2,8,1,5], 2) // 10
    maxSubsum([1,2,5,2,8,1,5], 4) // 17

// first write the naive solution with nested loops O(N^2)
*/

// last iteration left 3, right

function maxSubSum1(arr, num) {
  let sum = 0;
  let left = 0;
  let right = num - 1;

  if (arr.length < num || arr.length === 0) {
    return;
  }

  for (let i = right; i < arr.length; i++) {
    let tempSum = arr.slice(left, right + 1).reduce((base, next) => {
      return base + next;
    }, 0);

    if (tempSum > sum) {
      sum = tempSum;
    }
    left++;
    right++;
  }
  return sum;
}
// iterate while right < arr.length
// start with the first n (num) numbers
// calculate a sum and save it
// check if it's greater than current sum ? save : do nothing
// increment left and right

// knockout condition: arr.length < num
// knockout condition: arr.length === 0

// Then write the solution using a "sliding window"
// You subtract the bottom and add the top as you slide the window
// This will be O(N)

function maxSubSum2(arr, num) {
  let left = 0;
  let right = num - 1;

  if (arr.length < num || arr.length === 0) {
    return;
  }

  let sum = arr.slice(left, right + 1).reduce((base, next) => {
    return base + next;
  }, 0);
  for (let i = right; i < arr.length; i++) {
    left++;
    right++;
    let currentSum = sum - arr[left - 1] + arr[right];
    if (currentSum > sum) {
      sum = currentSum;
    }
  }
  return sum;
}

// maxSubSum([1,2,5,2,8,1,5], 3)
