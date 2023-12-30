/** Write a recursive function called fib which accepts a number and returns the nth number
 * in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole
 * numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
 *  *  and where every number thereafter is equal to the sum of the previous two numbers. */

// fib(0) => 0
// fib(3) => 2
// fib(5) => 5

// In the following array, find the first number divisible by five
const num4 = [3, 7, 10, 25, 8];

// get a Boolean telling you if a the word "the" is in this string
const myString = "Hello there, my friend";

// pull out the featured event objects
// and put them in an array
// and give them a key of id: e1, e2, e3 etc.

const events = {
  e1: {
    date: "2021-05-12",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    image: "images/computerimage.jpg",
    isFeatured: false,
    location: "Somestreet 25, 12345 San Somewhereo",
    title: "Programming for everyone",
  },
  e2: {
    date: "2021-05-30",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: "images/introvert-event.jpg",
    isFeatured: true,
    location: "New Wall Street 5, 98765 New Work",
    title: "Networking for introverts",
  },
  e3: {
    date: "2022-04-10",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
    location: "My Street 12, 10115 Broke City",
    title: "Networking for extroverts",
  },
};

// Answers

// Write a recursive function called fib which accepts a number and returns the nth number
// function fib(num) {
//   if (num <= 2) {
//     return 1;
//   }
//   return fib(num - 1) + fib(num - 2);
// }

// In the following array, find the first number divisible by five
// num4.find((item) => item % 4 === 0);
