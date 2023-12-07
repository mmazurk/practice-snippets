/** Sliding Window Problems */

/** Write a function caled maxSubSum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array

	maxSubSum([1,2,5,2,8,1,5], 2) // 10
  maxSubsum([1,2,5,2,8,1,5], 4) // 17

*/

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

/** Given an array of integers and a number, write a function 
 * called maxSubarraySum, which finds the maximum sum of a subarray 
 * with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements 
from the original array. In the first example below, [100, 200, 300] 
is a subarray of the original array, but [100, 300] is not. */

function maxSubarraySum(arr, num) {
  if (arr.length < num || arr.length === 0) {
    return null;
  }

  let left = 0;
  let right = num - 1;
  let maxSum = arr.slice(left, right + 1).reduce((base, next) => base + next);
  let tempSum = maxSum;

  while (right < arr.length - 1) {
    left++;
    right++;
    tempSum = tempSum - arr[left - 1] + arr[right];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubarraySum([2, 3], 3); // null
