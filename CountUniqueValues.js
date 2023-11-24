
/** Implement a function called countUniqueValues
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

  if(arr.length === 0) {
    return 0;
  }
  
  let count = 1; 
  let left = 0;
  let right = 1; 

  while(right < arr.length) {

    // console.log("Left is", left)
    // console.log("Right is", right)
    
    if(arr[left] === arr[right]) {
      right++;      
    }
    else {
    count++;   
    left = right;
    right++; 
    }
  }
  
  return count; 
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

// When you did this, you forgot to add a short-circuit at the beginning for an empty array
// You also tried to get cute and set right to left++, which you cannot do, because it will increment left, then assign to right




