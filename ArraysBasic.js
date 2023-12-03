

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
let arr2 = "I have seen things you people wouldn't believe".split(" ")

// array.push()
// add a number to the  end of arr1

// array.pop()
// remove a number from the end of arr1

// array.unshift()
// add a number from the beginning of the array

// array.shift()
// remove a number from the beginning of th array

// array.reverse()
// reverse the contents of the array

// array.splice()
const fruits1 = ["banana", "cherry", "date", "grape"];
fruits1.splice(2, 0, "apple");
fruits1;

const colors = ["red", "green", "blue", "yellow", "orange"];
colors.splice(2, 2);
colors;

const fruits2 = ["apple", "banana", "cherry", "date", "grape"];
fruits2.splice(3,2,"peach", "plum")
fruits2;

const fruits3 = ["apple", "banana", "cherry", "date", "grape"];
fruits3.splice(0,1,"lemon")
fruits3;

const numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(0,5);
numbers1;

const numbers2 = [10, 20, 30, 40, 50, 60, 70];
numbers2.splice(numbers2.length-3, 3);
numbers2;

//array.slice()
const originalArray = [1, 2, 3, 4, 5];
const answer = originalArray.slice(0,originalArray.length);
answer;

const fruits4 = ["apple", "banana", "cherry", "date", "grape"];
fruits4.slice(2,5);

const numbers3 = [10, 20, 30, 40, 50, 60, 70];
numbers3.slice(numbers3.length-3, numbers3.length);

// array.sort()
numbers3.sort((a,b) => a - b);

// array.join() 
"I am so happy".split(" ").join(" ... ")

// array.indexOf() 
[1,2,3,4,5].indexOf(10);

// array.includes()
[1,2,3,4,5].includes(10);
