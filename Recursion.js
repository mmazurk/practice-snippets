// Iterative versus recursive
function countDown1(num) {
  for (i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

function countDown2(num) {
  if (num <= 0) {
    return "All done!";
  }
  num--;
  countDown2(num);
}

// Here you have a return statement
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// most common
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// HELPER METHOD RECURSION
// if you don't, result will be reset every time
// you call collectOdds()
function collectOdds(arr) {
  let result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) return;
    if (helperArr[0] % 2 !== 0) result.push(helperArr[0]);
    helper(helperArr.slice(1));
  }
  helper(arr);
  return result;
}

// PURE RECURSION
function collectOdds2(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 1) newArr.push(arr[0]);

  newArr = newArr.concat(collectOdds2(arr.slice(1)));
  return newArr;
}

/** Write a function called power which accepts
 * a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()  - do
 * not worry about negative bases and exponents. */

// power(2,3) ==> 8
// power(1,100) ==> 1
// power(0, 3) ==> 0
// power(5, 0)) ==> 1

function power(num, exp) {
  if (exp === 0) {
    return 1;
  }

  return num * power(num, exp - 1);
}

/** Write a function factorial which accepts a number and returns the
 * factorial of that number. A factorial is the product of an integer
 * and all the integers below it; e.g., factorial four ( 4! )
 * is equal to 24, because 4 * 3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1. */

// factorial(0) => 1
// factorial(1) => 1
// factorial(3) => 6
// fatorial(5) => 120

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// Writing a function called productOfArray()

// productOfArr([1,2,3]) => 7
// productOfArr([]) => undefined

function productOfArray(arr) {
  if (arr.length === 0) {
    return NaN;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds
// up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
}

/** Write a recursive function called fib which accepts a number and returns the nth number
 * in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
 * numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
 *  *  and where every number thereafter is equal to the sum of the previous two numbers. */

// fib(0) => 0
// fib(3) => 2
// fib(5) => 5

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// HARDER PROBLEMS
// HARDER PROBLEMS

/** Write a recursive function 
 * called reverse which accepts a string and returns 
 * a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir' */

function reverse(str) {
  if(str.length <= 1) {
    return str; 
  }
  return str[str.length-1].concat(reverse(str.slice(1,str.length-1))).concat(str[0])

}

