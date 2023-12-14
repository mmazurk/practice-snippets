// turn this into a Map object called peopleMap
const people = [
  [1, "Mark"],
  [2, "Carrie"],
  [3, "Paul"],
  [4, "Mike"],
];
const peopleMap = new Map(people);

// get a value
// list out the keys
// check if it contains a keys
// list out all the values
// iterate over key/value pairs
// clear out the Map
// remove a pair

const mySet = new Set(
  "I have seen things you people wouldn't believe".replace(/\s/g, "").split("")
);

// check if a value is there
// remove an element
// clear the whole Set
// add an element

const morePeople = [
  [1, "Mark"],
  [2, "Carrie"],
  [3, "Paul"],
  [4, "Mike"],
];
// now turn this into an object called peopleObj

const peopleObj = Object.fromEntries(morePeople);

// .clear() - empties out a map
// .delete() - delete a pair
// .get() - get a value
// .has()- check if it contains a key
// .keys() - lists out all the keys
// .values() - lists out all the values
// .entries() - to iterate over all the [key,value] pairs

// for(let [key, value] of peopleMap.entries()) {
//   console.log(`The value of ${key} is ${value}`);
// }

// mySet.add() - to add an element, provided it's not a dupe
// mySet.has() - check if value is there
// mySet.delete() - remove an element
// mySet.clear() - clears the whole sets
