let arr1 = [0, 1]
let arr2 = [0, 1, 2]
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7]

let mid1 = Math.floor((0 + arr1.length - 1) / 2)
let mid2 = Math.floor((0 + arr2.length - 1) / 2)
let mid3 = Math.floor((0 + arr3.length - 1) / 2)

arr1.slice(0, mid1)
arr2.slice(0, mid2)
arr3.slice(0, mid3)

arr1.slice(mid1 + 1, arr1.length)
arr2.slice(mid2 + 1, arr2.length)
arr3.slice(mid3 + 1, arr3.length)

// function findLast(arr, num, left = 0, right = arr.length - 1) {
//   if (right >= left) {
//     let mid = Math.floor((left + right) / 2);
//     if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
//       return mid;
//     } else if (num < arr[mid]) {
//       return findLast(arr, num, left, mid - 1);
//     } else {
//       return findLast(arr, num, mid + 1, right);
//     }
//   }
//   return -1;
// }
